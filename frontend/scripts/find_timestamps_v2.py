#!/usr/bin/env python3
"""
Match questions from text transcript to JSON timestamps.
"""

import json
import re

def format_timestamp(seconds):
    """Convert seconds to MM:SS format."""
    minutes = int(seconds // 60)
    secs = int(seconds % 60)
    return f"[{minutes}:{secs:02d}]"

def find_question_timestamps(text_file, json_file, questions):
    """Find timestamps for questions by matching them in the transcript."""
    
    # Read text transcript
    with open(text_file, 'r', encoding='utf-8') as f:
        text = f.read()
    
    # Read JSON transcript
    with open(json_file, 'r', encoding='utf-8') as f:
        transcript = json.load(f)
    
    # Create a mapping of text snippets to timestamps
    text_to_time = {}
    for entry in transcript:
        # Clean the text for matching
        clean_text = entry['text'].lower().strip().replace('.', '').replace(',', '')
        text_to_time[clean_text] = entry['start']
    
    results = []
    
    for q_num, question_text in questions:
        # Look for the question text in the transcript
        # Try different variations
        search_patterns = [
            question_text.lower()[:40],  # First 40 chars
            question_text.lower().split('.')[0],  # First sentence
            question_text.lower().split('?')[0],  # Before question mark
        ]
        
        found = False
        for pattern in search_patterns:
            if pattern in text.lower():
                # Find where this appears in the text
                pos = text.lower().find(pattern)
                
                # Get surrounding text
                start = max(0, pos - 100)
                end = min(len(text), pos + 100)
                context = text[start:end]
                
                # Try to find this in the JSON transcript
                # Look for key words from the pattern
                words = pattern.split()[:5]  # First 5 words
                
                for i, entry in enumerate(transcript):
                    entry_text = entry['text'].lower()
                    match_count = sum(1 for word in words if word in entry_text)
                    
                    if match_count >= 2:  # At least 2 words match
                        # Check if this is near a question number mention
                        # Look backwards for "number X"
                        for j in range(max(0, i-5), i):
                            if 'number' in transcript[j]['text'].lower() or str(q_num) in transcript[j]['text']:
                                timestamp = transcript[j]['start']
                                results.append((q_num, format_timestamp(timestamp), question_text))
                                found = True
                                break
                        
                        if not found:
                            # Just use this entry's timestamp
                            timestamp = entry['start']
                            results.append((q_num, format_timestamp(timestamp), question_text))
                            found = True
                        break
                
                if found:
                    break
        
        if not found:
            results.append((q_num, "[NOT FOUND]", question_text))
    
    return results

# Patrick C questions
patrick_questions = [
    (1, "Explain what a web browser is and what it's used for."),
    (2, "How does electricity enable computers to represent binary digits?"),
    (3, "Explain the fair use doctrine."),
    (4, "Discuss how AI algorithms shape what information people see online."),
    (5, "Trace the execution of an assembly code program."),
    (6, "Explain the input-process-output model and its significance."),
    (7, "What is CSS?"),
    (8, "How might colors be encoded numerically?"),
    (9, "Randomly generate a two-digit decimal number and convert it to binary."),
    (10, "Discuss the impact of AI-generated text, images and videos on truth and trust in digital communications."),
    (11, "Explain what a rootkit is."),
    (12, "What is two-factor authentication?"),
    (13, "Name three web applications you have used and explain what makes them useful."),
    (14, "Explain how Wikipedia articles are written and edited."),
    (15, "Discuss the relative strengths and weaknesses of magnetic, optical and solid state storage technology."),
    (16, "Explain the difference between a compiler and an interpreter."),
    (17, "Explain the role of a web browser with respect to caching, history and privacy."),
    (18, "Explain the difference between HTTP and HTTPS."),
    (19, "Explain five common HTML tags and what they do."),
    (20, "How might an image be represented numerically?"),
    (21, "Explain what device drivers are and why they're necessary."),
    (22, "Explain how the internet differs from the worldwide web."),
    (23, "Explain what encryption is."),
    (24, "Explain how a browser, a web server and database interact."),
    (25, "Give three examples of cloud services that you might use in daily life."),
    (26, "Explain copyright."),
    (27, "Define basic database terminology: records, rows, columns and tables."),
    (28, "Explain the difference between CPU and GPU."),
    (29, "Explain how coordinates work."),
    (30, "Explain the difference between RAM and ROM and why most computers have both."),
    (31, "Explain what spoofing is."),
    (32, "Explain multitasking and multithreading."),
    (33, "Explain the six degrees of separation."),
    (34, "What is binary and why do computers use it?"),
    (35, "Explain how a video might be encoded numerically."),
    (36, "Explain the role of JavaScript in a web page."),
    (37, "What is a web cookie?"),
    (38, "Describe the stored program concept."),
    (39, "Design an efficient file organization system for a specific use case."),
    (40, "Explain what IO devices are and why they are important to computing."),
    (41, "Explain how transistors control voltage to represent binary."),
    (42, "What is a database?"),
    (43, "Explain the difference between absolute and relative file paths."),
    (44, "What is malware?"),
    (45, "Explain what HTML is."),
    (46, "Explain what a pull request is and how it facilitates collaboration."),
]

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) != 4:
        print("Usage: python find_timestamps_v2.py <text_file> <json_file> <student>")
        sys.exit(1)
    
    text_file = sys.argv[1]
    json_file = sys.argv[2]
    student = sys.argv[3]
    
    if 'patrick' in student.lower():
        questions = patrick_questions
    else:
        print("Only Patrick C implemented for now")
        sys.exit(1)
    
    results = find_question_timestamps(text_file, json_file, questions)
    
    print(f"\nPATRICK-C:\n")
    for q_num, timestamp, question in results:
        print(f"{q_num}. {timestamp} {question}")
