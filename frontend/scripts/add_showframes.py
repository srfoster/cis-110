#!/usr/bin/env python3
"""
Add ShowFrame components to student exam pages.
Generates frames at the question start time and increments by 30 seconds.
"""

import sys
import re
from urllib.parse import urlparse, parse_qs

def parse_timestamp(timestamp_str):
    """Convert [HH:MM:SS] or [MM:SS] to seconds."""
    timestamp_str = timestamp_str.strip('[]')
    parts = timestamp_str.split(':')
    
    if len(parts) == 3:
        hours, minutes, seconds = map(int, parts)
        return hours * 3600 + minutes * 60 + seconds
    elif len(parts) == 2:
        minutes, seconds = map(int, parts)
        return minutes * 60 + seconds
    else:
        return int(parts[0])

def format_timestamp(seconds):
    """Convert seconds to M:SS or H:MM:SS format."""
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = int(seconds % 60)
    
    if hours > 0:
        return f"{hours}:{minutes:02d}:{secs:02d}"
    else:
        return f"{minutes}:{secs:02d}"

def extract_video_url(content):
    """Extract the YouTube URL from ExamBrowser component."""
    # Try short format first (youtu.be)
    match = re.search(r'\{\{ExamBrowser:(https://youtu\.be/[^\s]+)', content)
    if match:
        return match.group(1)
    
    # Try full format (youtube.com/watch?v=)
    match = re.search(r'\{\{ExamBrowser:(https://www\.youtube\.com/watch\?v=[^\s]+)', content)
    if match:
        return match.group(1)
    
    return None

def add_showframes(input_file, interval=30):
    """
    Add ShowFrame components to student exam file.
    Generates frames at regular intervals between question timestamps.
    
    Args:
        input_file: Path to student index.md file
        interval: Seconds between frames (default 30)
    """
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract video URL
    video_url = extract_video_url(content)
    if not video_url:
        print("Error: Could not find video URL in file")
        return
    
    print(f"Found video URL: {video_url}")
    
    # Pattern to match questions with timestamps
    # Captures: question number, timestamp, full question match
    pattern = r'(\d+)\.\s+\[(\d+:\d+(?::\d+)?)\]\s+[^\n]+'
    
    # Find all questions and their timestamps
    questions = []
    for match in re.finditer(pattern, content):
        q_num = int(match.group(1))
        timestamp_str = match.group(2)
        start_seconds = parse_timestamp(timestamp_str)
        questions.append({
            'num': q_num,
            'timestamp': timestamp_str,
            'seconds': start_seconds,
            'match': match
        })
    
    if not questions:
        print("Warning: No questions with timestamps found")
        return
    
    print(f"Found {len(questions)} questions")
    
    # Pattern to match questions with their full transcript excerpts
    full_pattern = r'(\d+\.\s+\[(\d+:\d+(?::\d+)?)\]\s+[^\n]+\n\n>[^\n]+(?:\n(?!(?:\{\{|#+|\d+\.))[^\n]*)*)'
    
    # Build a map of question numbers to their content blocks
    question_blocks = {}
    for match in re.finditer(full_pattern, content):
        full_match = match.group(1)
        timestamp_str = match.group(2)
        
        # Skip if already has ShowFrames
        if '{{ShowFrame:' in full_match:
            continue
            
        # Find which question number this is
        q_match = re.match(r'(\d+)\.', full_match)
        if q_match:
            q_num = int(q_match.group(1))
            question_blocks[q_num] = {
                'content': full_match,
                'timestamp_str': timestamp_str
            }
    
    # Generate frames for each question
    for i, q in enumerate(questions):
        if q['num'] not in question_blocks:
            continue
            
        start_seconds = q['seconds']
        
        # Determine end time (next question or add reasonable buffer)
        if i < len(questions) - 1:
            end_seconds = questions[i + 1]['seconds']
        else:
            # Last question: add 2 minutes buffer
            end_seconds = start_seconds + 120
        
        # Generate ShowFrame components at intervals
        frames = []
        current_time = start_seconds
        while current_time < end_seconds:
            time_str = format_timestamp(current_time)
            frames.append(f'{{{{ShowFrame:{video_url} time:"{time_str}"}}}}')
            current_time += interval
        
        # Store frames for this question
        question_blocks[q['num']]['frames'] = frames
    
    # Replace questions with versions that have ShowFrames
    def add_frames_replacement(match):
        full_match = match.group(1)
        
        # Find question number
        q_match = re.match(r'(\d+)\.', full_match)
        if not q_match:
            return full_match
            
        q_num = int(q_match.group(1))
        
        if q_num not in question_blocks or 'frames' not in question_blocks[q_num]:
            return full_match
        
        frames = question_blocks[q_num]['frames']
        if not frames:
            return full_match
            
        return full_match + '\n\n' + '\n'.join(frames)
    
    updated_content = re.sub(full_pattern, add_frames_replacement, content)
    
    # Count total frames added
    total_frames = sum(len(block.get('frames', [])) for block in question_blocks.values())
    
    # Write the updated content back
    with open(input_file, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"Added {total_frames} total ShowFrames across {len(question_blocks)} questions")
    print(f"  - {interval} seconds between frames")
    print(f"Updated {input_file}")

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python add_showframes.py <student_index_md> [interval_seconds]")
        print("\nExample:")
        print("  python add_showframes.py public/textbook/students/w26/alex-d/index.md")
        print("  python add_showframes.py public/textbook/students/w26/alex-d/index.md 30")
        sys.exit(1)
    
    input_file = sys.argv[1]
    interval = int(sys.argv[2]) if len(sys.argv) > 2 else 30
    
    add_showframes(input_file, interval)
