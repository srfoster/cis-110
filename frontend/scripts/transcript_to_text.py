#!/usr/bin/env python3
"""
Convert a JSON transcript to plain text.

Usage:
    python scripts/transcript_to_text.py TRANSCRIPT_JSON
    
Example:
    python scripts/transcript_to_text.py public/transcripts/w26/cordelia-b.json
"""

import argparse
import json
import sys
from pathlib import Path


def convert_transcript_to_text(json_path):
    """
    Convert a JSON transcript to plain text.
    
    Args:
        json_path: Path to the JSON transcript file
    
    Returns:
        Plain text version of the transcript
    """
    with open(json_path, 'r', encoding='utf-8') as f:
        transcript_data = json.load(f)
    
    # Extract just the text from each segment
    text_segments = [item['text'] for item in transcript_data]
    
    # Join with spaces
    full_text = ' '.join(text_segments)
    
    return full_text


def main():
    parser = argparse.ArgumentParser(
        description='Convert JSON transcript to plain text',
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    
    parser.add_argument(
        'json_path',
        type=Path,
        help='Path to the JSON transcript file'
    )
    
    parser.add_argument(
        '-o', '--output',
        type=Path,
        help='Output file path (default: stdout)'
    )
    
    args = parser.parse_args()
    
    if not args.json_path.exists():
        print(f"Error: File not found: {args.json_path}", file=sys.stderr)
        sys.exit(1)
    
    try:
        text = convert_transcript_to_text(args.json_path)
        
        if args.output:
            with open(args.output, 'w', encoding='utf-8') as f:
                f.write(text)
            print(f"Text saved to: {args.output}", file=sys.stderr)
        else:
            print(text)
            
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == '__main__':
    main()
