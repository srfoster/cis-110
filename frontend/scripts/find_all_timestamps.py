#!/usr/bin/env python3
"""
Comprehensive timestamp finder for Patrick C and Ronald M.
Manually identified markers from reading the text transcripts.
"""

import json

def fmt(seconds):
    """Format seconds as [MM:SS]"""
    m = int(seconds // 60)
    s = int(seconds % 60)
    return f"[{m}:{s:02d}]"

def find_timestamps(transcript_json, markers):
    """Find timestamps for list of text markers"""
    with open(transcript_json, 'r', encoding='utf-8') as f:
        transcript = json.load(f)
    
    results = []
    for q_num, marker in markers:
        found = False
        for entry in transcript:
            if marker in entry['text'].lower():
                results.append((q_num, fmt(entry['start'])))
                found = True
                break
        if not found:
            results.append((q_num, '[NOT FOUND]'))
    
    return results

# Patrick C markers - identified from reading the full text transcript
patrick_markers = [
    (1, 'number one'),  # "number one, explain the web browser"
    (2, 'electricity'),  # appears early in transcript

    (3, 'fair use'),
    (4, 'ai algorithms'),
    (5, 'trace the execution'),
    (6, 'input process output'),
    (7, 'css'),
    (8, 'basically red'),  # he talks about colors with "red 0255"
    (9, 'two digits'),  # binary conversion
    (10, 'trust in digital communications'),
    (11, 'root kit'),
    (12, 'two vector authentication'),  # he says "vector" not "factor"
    (13, 'name three web applications'),
    (14, 'explain wikipedia'),
    (15, 'weakness and strengths'),
    (16, 'compiler interpreter'),
    (17, 'roll a web browser'),  # he says "roll" meaning "role"
    (18, "it's unsecured"),  # HTTP/HTTPS
    (19, 'html. i just went'),
    (20, 'image be represented'),
    (21, 'device drivers are what'),
    (22, 'internet. i feel like'),
    (23, 'encryption. encryption is say'),
    (24, 'person right and their computer'),  # browser/server/database
    (25, 'cloud'),  # may be earlier
    (26, 'copyright. oh yeah'),
    (27, 'databases like records'),
    (28, 'cpu is the brain'),
    (29, 'the x yus equals'),  # coordinates
    (30, 'ram? oh, i get'),
    (31, 'spoofing.'),
    (32, 'multi just one'),  # multitasking
    (33, 'six degrees separation'),
    (34, 'binary is uh the'),
    (35, 'frames per second'),
    (36, 'javascript is like'),
    (37, 'web cookie i forget'),
    (38, 'describe program concept'),
    (39, 'documents, files, classes'),  # file organization
    (40, 'here the mouse'),  # IO devices
    (41, 'transistor controls'),
    (42, "it's the base"),  # database
    (43, "absolute fin's"),  # absolute/relative paths
    (44, 'malicious malware'),
    (45, 'html'),  # appears multiple times, need specific one
    (46, 'pull request'),
]

# Ronald M markers - identified from reading the full text transcript
ronald_markers = [
    (1, '4bit binary'),  # "randomly generate 4-bit binary"
    (2, 'what is binary'),
    (3, 'electricity'),
    (4, 'magnetic fields store'),
    (5, 'what is a transistor'),
    (6, '2d coordinate'),
    (7, 'colors'),
    (8, 'frames'),
    (9, 'strength and weaknesses'),
    (10, 'input, output, ipo'),
    (11, 'ram and rom'),
    (12, 'input output devices'),
    (13, 'how a processor works'),
    (14, 'cpu gpu'),
    (15, 'operating system'),
    (16, 'multitasking is multipprocessing'),
    (17, 'device drivers'),
    (18, 'file naming conventions'),
    (19, 'absolute file path'),
    (20, 'logical and physical'),
    (21, 'design and efficient'),
    (22, 'explain web browser'),
    (23, 'web browsing with caching'),
    (24, 'http https'),
    (25, 'web cookie'),
    (26, 'html'),
    (27, 'five common html'),  # "Oh, that's they always have these stupid"
    (28, 'css'),
    (29, 'javascript'),
    (30, 'worldwide web'),
    (31, 'ip address'),
    (32, 'behind the scenes'),
    (33, 'browser, web server, database interact'),
    (34, 'web application'),
    (35, 'copyright list'),
    (36, 'fair use doctrine'),
    (37, 'ai, my favorite'),
    (38, 'how ai algorithms shape'),
    (39, 'six degrees'),
    (40, 'wikipedia'),
    (41, 'what is a poll request'),  # "pull request"
    (42, 'encryption.'),
    (43, 'two-factor authentication'),
    (44, 'creating a strong password'),
    (45, 'malware.'),
    (46, 'root kit.'),
]

if __name__ == "__main__":
    print("PATRICK-C:\n")
    patrick_results = find_timestamps(
        '../public/transcripts/w26/patrick-c.json',
        patrick_markers
    )
    for q_num, timestamp in patrick_results:
        print(f"{q_num}. {timestamp}")
    
    print("\n\nRONALD-M:\n")
    ronald_results = find_timestamps(
        '../public/transcripts/w26/ronald-m.json',
        ronald_markers
    )
    for q_num, timestamp in ronald_results:
        print(f"{q_num}. {timestamp}")
