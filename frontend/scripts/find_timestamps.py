#!/usr/bin/env python3
"""
Find timestamps for questions in a transcript.
"""

import json
import sys
import re

def format_timestamp(seconds):
    """Convert seconds to MM:SS format."""
    minutes = int(seconds // 60)
    secs = int(seconds % 60)
    return f"{minutes}:{secs:02d}"

def search_question_in_transcript(transcript, keywords, question_num):
    """Search for keywords in transcript and return timestamp."""
    # Convert keywords to lowercase for case-insensitive search
    keywords_lower = [k.lower() for k in keywords]
    
    for i, entry in enumerate(transcript):
        text = entry['text'].lower()
        
        # Check if any keyword is in the text
        for keyword in keywords_lower:
            if keyword in text:
                # Check next few entries to confirm
                context = ' '.join([transcript[j]['text'].lower() 
                                   for j in range(i, min(i+3, len(transcript)))])
                
                # Count how many keywords are in the context
                match_count = sum(1 for kw in keywords_lower if kw in context)
                
                if match_count >= min(2, len(keywords_lower)):
                    timestamp = format_timestamp(entry['start'])
                    # Return the entry before the match to get the question number being spoken
                    if i > 0:
                        prev_text = transcript[i-1]['text'].lower()
                        # Check if previous entry mentions a number
                        if 'number' in prev_text or any(str(n) in prev_text for n in range(1, 50)):
                            return format_timestamp(transcript[i-1]['start'])
                    return timestamp
    
    return None

# Patrick C questions with keywords
patrick_questions = [
    (1, ["web browser", "used for"]),
    (2, ["electricity", "binary digits", "represent"]),
    (3, ["fair use"]),
    (4, ["ai algorithms", "shape", "information", "see online"]),
    (5, ["trace", "execution", "assembly code"]),
    (6, ["input-process-output", "model", "significance"]),
    (7, ["css"]),
    (8, ["colors", "encoded numerically"]),
    (9, ["randomly generate", "two-digit", "decimal", "convert", "binary"]),
    (10, ["impact", "ai-generated", "text", "images", "videos", "truth", "trust"]),
    (11, ["rootkit"]),
    (12, ["two-factor authentication"]),
    (13, ["three web applications", "useful"]),
    (14, ["wikipedia articles", "written", "edited"]),
    (15, ["relative strengths", "weaknesses", "magnetic", "optical", "solid state"]),
    (16, ["compiler", "interpreter", "difference"]),
    (17, ["browser", "caching", "history", "privacy"]),
    (18, ["http", "https", "difference"]),
    (19, ["five common html tags"]),
    (20, ["image", "represented numerically"]),
    (21, ["device drivers", "necessary"]),
    (22, ["internet", "differs", "worldwide web"]),
    (23, ["encryption"]),
    (24, ["browser", "web server", "database interact"]),
    (25, ["three examples", "cloud services", "daily life"]),
    (26, ["copyright"]),
    (27, ["database terminology", "records", "rows", "columns", "tables"]),
    (28, ["cpu", "gpu", "difference"]),
    (29, ["coordinates work"]),
    (30, ["ram", "rom", "why", "both"]),
    (31, ["spoofing"]),
    (32, ["multitasking", "multithreading"]),
    (33, ["six degrees", "separation"]),
    (34, ["binary", "why", "computers use"]),
    (35, ["video", "encoded numerically"]),
    (36, ["javascript", "role", "web page"]),
    (37, ["web cookie"]),
    (38, ["stored program concept"]),
    (39, ["design", "efficient", "file organization", "specific use case"]),
    (40, ["io devices", "important", "computing"]),
    (41, ["transistors", "control voltage", "represent binary"]),
    (42, ["database"]),
    (43, ["absolute", "relative", "file paths"]),
    (44, ["malware"]),
    (45, ["html"]),
    (46, ["pull request", "facilitates collaboration"])
]

# Ronald M questions with keywords
ronald_questions = [
    (1, ["randomly generate", "4-bit", "binary", "convert", "decimal"]),
    (2, ["binary", "why", "computers use"]),
    (3, ["electricity", "enable", "computers", "binary digits"]),
    (4, ["magnetic fields", "store", "binary information"]),
    (5, ["transistor"]),
    (6, ["2d coordinate", "coded", "single number"]),
    (7, ["colors", "encoded numerically"]),
    (8, ["frames", "encoded", "frames per second"]),
    (9, ["relative strengths", "weaknesses", "magnetic", "optical", "solid state"]),
    (10, ["input-process-output", "model", "significance"]),
    (11, ["ram", "rom", "why", "both"]),
    (12, ["io devices", "important", "computing"]),
    (13, ["processor works"]),
    (14, ["cpu", "gpu", "difference"]),
    (15, ["operating system", "role"]),
    (16, ["multitasking", "multiprocessing", "multi-threading"]),
    (17, ["device drivers", "necessary"]),
    (18, ["file naming conventions", "file extensions", "role"]),
    (19, ["absolute", "relative", "file paths"]),
    (20, ["logical", "physical", "storage models", "file"]),
    (21, ["design", "efficient", "organization system", "specific use case"]),
    (22, ["web browser", "used for"]),
    (23, ["browser", "caching", "history", "privacy"]),
    (24, ["http", "https", "difference"]),
    (25, ["web cookie"]),
    (26, ["html"]),
    (27, ["five common html tags"]),
    (28, ["css"]),
    (29, ["javascript", "role", "web page"]),
    (30, ["internet", "differs", "worldwide web"]),
    (31, ["ip address"]),
    (32, ["behind the scenes", "access", "url", "browser", "happens"]),
    (33, ["browser", "web server", "database interact"]),
    (34, ["web application", "differs", "traditional desktop application"]),
    (35, ["copyright", "rights", "exclusively reserved"]),
    (36, ["fair use"]),
    (37, ["impact", "ai-generated", "text", "images", "videos", "truth", "trust"]),
    (38, ["ai algorithms", "shape", "information", "see online"]),
    (39, ["six degrees", "separation"]),
    (40, ["wikipedia articles", "written", "edited"]),
    (41, ["pull request", "facilitates collaboration"]),
    (42, ["encryption"]),
    (43, ["two-factor authentication"]),
    (44, ["issues", "creating", "strong password"]),
    (45, ["malware"]),
    (46, ["rootkit"])
]

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python find_timestamps.py <student_name> <transcript.json>")
        print("Example: python find_timestamps.py patrick-c ../public/transcripts/w26/patrick-c.json")
        sys.exit(1)
    
    student_name = sys.argv[1]
    transcript_path = sys.argv[2]
    
    # Load transcript
    with open(transcript_path, 'r', encoding='utf-8') as f:
        transcript = json.load(f)
    
    # Select questions based on student
    if 'patrick' in student_name.lower():
        questions = patrick_questions
    elif 'ronald' in student_name.lower():
        questions = ronald_questions
    else:
        print(f"Unknown student: {student_name}")
        sys.exit(1)
    
    # Search for each question
    print(f"\nTimestamps for {student_name}:\n")
    for q_num, keywords in questions:
        timestamp = search_question_in_transcript(transcript, keywords, q_num)
        if timestamp:
            print(f"{q_num}. [{timestamp}]")
        else:
            print(f"{q_num}. [NOT FOUND] - keywords: {keywords[:3]}")
