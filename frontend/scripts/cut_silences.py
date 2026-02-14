#!/usr/bin/env python3
"""
remove_silence.py

Create a new video where silences longer than X seconds are removed.

Uses ffmpeg's silencedetect to find silence ranges, then builds a filtergraph
that keeps the non-silent ranges and concatenates them.

Example:
  python remove_silence.py input.mp4 output.mp4 --min_silence 1.0 --silence_db -35 --pad 0.08
"""

import argparse
import re
import subprocess
from dataclasses import dataclass
from typing import List, Tuple, Optional


@dataclass
class Silence:
    start: float
    end: float


def run_ffmpeg_silencedetect(
    input_path: str,
    silence_db: float,
    min_silence: float,
) -> str:
    """
    Runs ffmpeg silencedetect and returns stderr text (where silencedetect logs).
    """
    cmd = [
        "ffmpeg",
        "-hide_banner",
        "-i", input_path,
        "-af", f"silencedetect=noise={silence_db}dB:d={min_silence}",
        "-f", "null",
        "-",
    ]
    proc = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    # silencedetect prints to stderr
    return proc.stderr


def parse_silences(ffmpeg_stderr: str) -> List[Silence]:
    """
    Parses silencedetect output and returns Silence intervals.
    """
    # Lines look like:
    # [silencedetect @ ...] silence_start: 12.345
    # [silencedetect @ ...] silence_end: 15.678 | silence_duration: 3.333
    start_re = re.compile(r"silence_start:\s*(\d+(\.\d+)?)")
    end_re = re.compile(r"silence_end:\s*(\d+(\.\d+)?)")

    silences: List[Silence] = []
    current_start: Optional[float] = None

    for line in ffmpeg_stderr.splitlines():
        m1 = start_re.search(line)
        if m1:
            current_start = float(m1.group(1))
            continue

        m2 = end_re.search(line)
        if m2 and current_start is not None:
            end = float(m2.group(1))
            silences.append(Silence(start=current_start, end=end))
            current_start = None

    # If the file ends during silence, silencedetect may not emit a silence_end.
    # We'll handle that later by using overall duration if needed (optional).
    return silences


def get_duration_seconds(input_path: str) -> float:
    """
    Uses ffprobe to get duration in seconds.
    """
    cmd = [
        "ffprobe",
        "-v", "error",
        "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1",
        input_path,
    ]
    proc = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)
    return float(proc.stdout.strip())


def clamp(x: float, lo: float, hi: float) -> float:
    return max(lo, min(hi, x))


def invert_intervals(
    silences: List[Silence],
    duration: float,
    pad: float,
) -> List[Tuple[float, float]]:
    """
    Given silence intervals, return keep-intervals (non-silent).
    pad: seconds to keep on BOTH sides of a removed silence (i.e., shrink cut a bit)
    """
    # Convert silences to cut intervals with padding applied:
    cuts: List[Silence] = []
    for s in silences:
        cut_start = clamp(s.start + pad, 0.0, duration)
        cut_end = clamp(s.end - pad, 0.0, duration)
        if cut_end > cut_start:
            cuts.append(Silence(cut_start, cut_end))

    # Merge overlapping cuts
    cuts.sort(key=lambda s: s.start)
    merged: List[Silence] = []
    for c in cuts:
        if not merged or c.start > merged[-1].end:
            merged.append(c)
        else:
            merged[-1].end = max(merged[-1].end, c.end)

    # Invert to keep intervals
    keeps: List[Tuple[float, float]] = []
    t = 0.0
    for c in merged:
        if c.start > t:
            keeps.append((t, c.start))
        t = max(t, c.end)
    if t < duration:
        keeps.append((t, duration))

    # Drop tiny segments
    keeps = [(a, b) for (a, b) in keeps if b - a > 1e-3]
    return keeps


def build_filtergraph(keeps: List[Tuple[float, float]]) -> str:
    """
    Builds an ffmpeg filter_complex that trims video+audio and concatenates.
    """
    parts = []
    for i, (a, b) in enumerate(keeps):
        # trim video, reset timestamps
        parts.append(
            f"[0:v]trim=start={a}:end={b},setpts=PTS-STARTPTS[v{i}]"
        )
        # trim audio, reset timestamps
        parts.append(
            f"[0:a]atrim=start={a}:end={b},asetpts=PTS-STARTPTS[a{i}]"
        )

    # Interleave video and audio inputs for concat filter
    interleaved_inputs = "".join([f"[v{i}][a{i}]" for i in range(len(keeps))])

    parts.append(f"{interleaved_inputs}concat=n={len(keeps)}:v=1:a=1[vout][aout]")
    return ";".join(parts)


def run_ffmpeg_cut(
    input_path: str,
    output_path: str,
    filtergraph: str,
    video_encoder: str,
    audio_encoder: str,
    crf: int,
    preset: str,
) -> None:
    cmd = [
        "ffmpeg",
        "-hide_banner",
        "-y",
        "-i", input_path,
        "-filter_complex", filtergraph,
        "-map", "[vout]",
        "-map", "[aout]",
        "-c:v", video_encoder,
        "-crf", str(crf),
        "-preset", preset,
        "-c:a", audio_encoder,
        output_path,
    ]
    subprocess.run(cmd, check=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("input", help="Input movie file (mp4/mkv/etc.)")
    ap.add_argument("output", help="Output file")
    ap.add_argument("--min_silence", type=float, default=1.0,
                    help="Minimum silence duration (seconds) to remove (default: 1.0)")
    ap.add_argument("--silence_db", type=float, default=None,
                    help="Silence threshold in dB (default: -35). HIGHER values = more aggressive. "
                         "Use -30 or -25 for noisy backgrounds like washing machines. "
                         "Use -40 for quiet recordings.")
    ap.add_argument("--aggressive", action="store_true",
                    help="Use aggressive silence detection (-25 dB) for noisy environments. "
                         "Overrides --silence_db if both are specified.")
    ap.add_argument("--pad", type=float, default=0.05,
                    help="Padding kept around each removed silence (seconds) (default: 0.05)")
    ap.add_argument("--crf", type=int, default=20, help="x264 CRF quality (lower=better, default: 20)")
    ap.add_argument("--preset", default="medium", help="x264 preset (default: medium)")
    ap.add_argument("--vcodec", default="libx264", help="Video codec (default: libx264)")
    ap.add_argument("--acodec", default="aac", help="Audio codec (default: aac)")
    args = ap.parse_args()

    # Determine silence threshold
    if args.aggressive:
        silence_threshold = -25.0
    elif args.silence_db is not None:
        silence_threshold = args.silence_db
    else:
        silence_threshold = -35.0

    stderr = run_ffmpeg_silencedetect(args.input, silence_threshold, args.min_silence)
    silences = parse_silences(stderr)

    duration = get_duration_seconds(args.input)

    # Handle trailing silence_start without silence_end (optional best-effort)
    # If silencedetect ended with an open silence, it will not be in silences.
    # We'll detect it by searching the last silence_start with no matching end.
    last_start_matches = re.findall(r"silence_start:\s*(\d+(\.\d+)?)", stderr)
    last_end_matches = re.findall(r"silence_end:\s*(\d+(\.\d+)?)", stderr)
    if len(last_start_matches) > len(last_end_matches) and last_start_matches:
        open_start = float(last_start_matches[-1][0])
        silences.append(Silence(start=open_start, end=duration))

    keeps = invert_intervals(silences, duration, args.pad)

    if not keeps:
        raise SystemExit("No non-silent segments found (or thresholds too aggressive). Try lowering --min_silence or raising --silence_db (e.g., -30).")

    # If nothing to cut, just copy streams
    if len(keeps) == 1 and abs(keeps[0][0] - 0.0) < 1e-6 and abs(keeps[0][1] - duration) < 1e-3:
        # No silence detected that meets criteria
        cmd = ["ffmpeg", "-hide_banner", "-y", "-i", args.input, "-c", "copy", args.output]
        subprocess.run(cmd, check=True)
        return

    fg = build_filtergraph(keeps)
    run_ffmpeg_cut(
        args.input, args.output, fg,
        video_encoder=args.vcodec,
        audio_encoder=args.acodec,
        crf=args.crf,
        preset=args.preset,
    )


if __name__ == "__main__":
    main()