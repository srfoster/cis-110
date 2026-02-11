#!/usr/bin/env python3
"""
Mark question start timestamps in student transcript JSON files.
This script reads question timestamps from a student's index.md file
and adds a "question_number" field to the transcript entries that
correspond to the start of each question.
"""

import json
import re
import sys
from pathlib import Path


def parse_timestamp(timestamp_str):
    """Convert [MM:SS] format to seconds."""
    # Remove brackets and whitespace
    clean = timestamp_str.strip('[]').strip()
    
    parts = clean.split(':')
    if len(parts) == 2:
        minutes, seconds = map(int, parts)
        return minutes * 60 + seconds
    elif len(parts) == 3:
        hours, minutes, seconds = map(int, parts)
        return hours * 3600 + minutes * 60 + seconds
    
    raise ValueError(f"Invalid timestamp format: {timestamp_str}")


def parse_questions_from_markdown(md_path):
    """Extract question numbers and timestamps from markdown file."""
    with open(md_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern: "N. [MM:SS] Question text" or "N. [H:MM:SS] Question text"
    pattern = r'^(\d+)\.\s+(\[\d+:\d+(?::\d+)?\])\s+(.+)$'
    
    questions = []
    for line in content.split('\n'):
        match = re.match(pattern, line)
        if match:
            question_num = int(match.group(1))
            timestamp_str = match.group(2)
            question_text = match.group(3)
            
            try:
                seconds = parse_timestamp(timestamp_str)
                questions.append({
                    'number': question_num,
                    'timestamp_str': timestamp_str,
                    'seconds': seconds,
                    'text': question_text
                })
            except ValueError as e:
                print(f"Warning: Could not parse timestamp for question {question_num}: {e}")
    
    return questions


def find_closest_transcript_index(transcript, target_seconds, tolerance=2.0):
    """
    Find the transcript entry closest to the target timestamp.
    Returns the index of the entry, or None if no entry is within tolerance.
    """
    closest_index = None
    closest_diff = float('inf')
    
    for i, entry in enumerate(transcript):
        start = entry['start']
        diff = abs(start - target_seconds)
        
        if diff < closest_diff:
            closest_diff = diff
            closest_index = i
    
    if closest_diff <= tolerance:
        return closest_index
    
    return None


def mark_question_timestamps(md_path, json_path, output_path=None):
    """
    Main function to mark question timestamps in transcript JSON.
    
    Args:
        md_path: Path to student's index.md file
        json_path: Path to student's transcript JSON file
        output_path: Optional path for output file (defaults to overwriting json_path)
    """
    # Parse questions from markdown
    print(f"Parsing questions from {md_path}...")
    questions = parse_questions_from_markdown(md_path)
    print(f"Found {len(questions)} questions with timestamps")
    
    # Load transcript JSON
    print(f"Loading transcript from {json_path}...")
    with open(json_path, 'r', encoding='utf-8') as f:
        transcript = json.load(f)
    
    # Remove any existing question_number fields
    for entry in transcript:
        if 'question_number' in entry:
            del entry['question_number']
    
    # Mark question start timestamps
    marked_count = 0
    for q in questions:
        idx = find_closest_transcript_index(transcript, q['seconds'])
        
        if idx is not None:
            transcript[idx]['question_number'] = q['number']
            marked_count += 1
            print(f"  Q{q['number']} [{q['timestamp_str']}] -> transcript entry {idx} at {transcript[idx]['start']:.2f}s")
        else:
            print(f"  Warning: No transcript entry found near Q{q['number']} [{q['timestamp_str']}] at {q['seconds']}s")
    
    print(f"\nMarked {marked_count} out of {len(questions)} questions")
    
    # Write output
    output_path = output_path or json_path
    print(f"Writing updated transcript to {output_path}...")
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(transcript, f, indent=2, ensure_ascii=False)
    
    print("Done!")


def main():
    if len(sys.argv) < 3:
        print("Usage: python mark_question_timestamps.py <markdown_file> <json_transcript> [output_file]")
        print("\nExample:")
        print("  python mark_question_timestamps.py monica-l/index.md ../transcripts/w26/monica-l.json")
        sys.exit(1)
    
    md_path = Path(sys.argv[1])
    json_path = Path(sys.argv[2])
    output_path = Path(sys.argv[3]) if len(sys.argv) > 3 else None
    
    if not md_path.exists():
        print(f"Error: Markdown file not found: {md_path}")
        sys.exit(1)
    
    if not json_path.exists():
        print(f"Error: JSON file not found: {json_path}")
        sys.exit(1)
    
    mark_question_timestamps(md_path, json_path, output_path)


if __name__ == '__main__':
    main()
