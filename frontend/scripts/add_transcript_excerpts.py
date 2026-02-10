#!/usr/bin/env python3
"""
Extract transcript excerpts for each question and add them to the student's index.md file.
"""

import json
import re
import argparse
from pathlib import Path


def parse_timestamp(timestamp_str):
    """Convert [MM:SS] to seconds."""
    match = re.match(r'\[(\d+):(\d+)\]', timestamp_str)
    if match:
        minutes = int(match.group(1))
        seconds = int(match.group(2))
        return minutes * 60 + seconds
    return None


def extract_text_for_time_range(transcript_json, start_seconds, end_seconds):
    """Extract all text from JSON transcript between start and end times."""
    text_parts = []
    
    for item in transcript_json:
        item_start = item['start']
        
        # Include items that start within our time range
        if start_seconds <= item_start < end_seconds:
            text_parts.append(item['text'])
    
    return ' '.join(text_parts)


def parse_questions_from_markdown(md_content):
    """Extract questions with their timestamps from markdown."""
    questions = []
    
    # Match lines like: "1. [01:03] Explain how..."
    pattern = r'^(\d+)\.\s+(\[\d+:\d+\])\s+(.+)$'
    
    for line in md_content.split('\n'):
        match = re.match(pattern, line)
        if match:
            num = int(match.group(1))
            timestamp = match.group(2)
            question_text = match.group(3)
            start_seconds = parse_timestamp(timestamp)
            
            questions.append({
                'number': num,
                'timestamp': timestamp,
                'start_seconds': start_seconds,
                'question_text': question_text
            })
    
    return questions


def update_markdown_with_excerpts(md_path, json_path, excerpt_duration=180):
    """
    Read markdown and JSON transcript, extract excerpts, and update markdown.
    
    Args:
        md_path: Path to the student's index.md file
        json_path: Path to the JSON transcript
        excerpt_duration: How many seconds of transcript to include (default 180 = 3 minutes)
    """
    # Read files
    with open(md_path, 'r', encoding='utf-8') as f:
        md_content = f.read()
    
    with open(json_path, 'r', encoding='utf-8') as f:
        transcript_json = json.load(f)
    
    # Parse questions
    questions = parse_questions_from_markdown(md_content)
    
    if not questions:
        print("No questions found in markdown file")
        return
    
    print(f"Found {len(questions)} questions")
    
    # Build new markdown content
    lines = md_content.split('\n')
    new_lines = []
    question_index = 0
    
    for line in lines:
        new_lines.append(line)
        
        # Check if this line matches a question
        if question_index < len(questions):
            expected_pattern = f"^{questions[question_index]['number']}\\. \\{questions[question_index]['timestamp']}\\s+"
            if re.match(expected_pattern, line):
                # This is a question line - add the excerpt below it
                q = questions[question_index]
                
                # Determine end time (either next question or excerpt_duration)
                if question_index + 1 < len(questions):
                    end_seconds = questions[question_index + 1]['start_seconds']
                else:
                    end_seconds = q['start_seconds'] + excerpt_duration
                
                # Extract text
                excerpt = extract_text_for_time_range(
                    transcript_json,
                    q['start_seconds'],
                    end_seconds
                )
                
                # Add blockquote formatting
                if excerpt:
                    new_lines.append('')
                    new_lines.append(f'> {excerpt}')
                    new_lines.append('')
                
                question_index += 1
    
    # Write updated content
    new_content = '\n'.join(new_lines)
    with open(md_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Updated {md_path} with transcript excerpts")


def main():
    parser = argparse.ArgumentParser(
        description='Add transcript excerpts to student question lists'
    )
    parser.add_argument(
        'markdown_file',
        help='Path to student index.md file'
    )
    parser.add_argument(
        'json_transcript',
        help='Path to JSON transcript file'
    )
    parser.add_argument(
        '--duration',
        type=int,
        default=180,
        help='Maximum duration of excerpt in seconds (default: 180)'
    )
    
    args = parser.parse_args()
    
    update_markdown_with_excerpts(
        args.markdown_file,
        args.json_transcript,
        args.duration
    )


if __name__ == '__main__':
    main()
