import json
import re
import sys

def strip_markdown(text):
    """Remove markdown bold markers from text."""
    return re.sub(r'\*\*([^*]+)\*\*', r'\1', text)

def seconds_to_timestamp(seconds):
    """Convert seconds to MM:SS or H:MM:SS format."""
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = int(seconds % 60)
    
    if hours > 0:
        return f"{hours}:{minutes:02d}:{secs:02d}"
    else:
        return f"{minutes}:{secs:02d}"

def find_timestamp(text_to_match, transcript):
    """Find the timestamp for a given text in the transcript."""
    # Strip markdown and clean the text
    clean_text = strip_markdown(text_to_match).lower().strip()
    
    # Try to find a matching transcript entry
    for i, entry in enumerate(transcript):
        entry_text = entry['text'].lower().strip()
        
        # Check if the entry text is in our text or vice versa
        if entry_text in clean_text or clean_text[:50] in entry_text:
            return entry['start']
    
    return None

def process_file(md_file, json_file, youtube_url):
    """Process the markdown file and insert ShowFrame tags."""
    # Read the transcript JSON
    with open(json_file, 'r', encoding='utf-8') as f:
        transcript = json.load(f)
    
    # Read the markdown file
    with open(md_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Process the file
    new_lines = []
    i = 0
    inserted_count = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this is a blank line (potential ShowFrame insertion point)
        if line.strip() == '' and i > 0 and i < len(lines) - 1:
            # Check if the previous line is a blockquote
            prev_line = lines[i-1].strip()
            next_line = lines[i+1].strip() if i+1 < len(lines) else ''
            
            # If next line is a blockquote, find timestamp
            if next_line.startswith('>') and prev_line.startswith('>'):
                text_to_match = next_line[1:].strip()  # Remove '>' prefix
                
                timestamp_seconds = find_timestamp(text_to_match, transcript)
                
                if timestamp_seconds is not None:
                    timestamp = seconds_to_timestamp(timestamp_seconds)
                    showframe = f'{{{{ShowFrame:{youtube_url} time:"{timestamp}"}}}}\n'
                    
                    # Add the blank line, then the ShowFrame, then another blank
                    new_lines.append(line)
                    new_lines.append(showframe)
                    new_lines.append('\n')
                    inserted_count += 1
                    print(f"Inserted ShowFrame at line {i+1}: {timestamp} for text: {text_to_match[:60]}...")
                    i += 1
                    continue
        
        new_lines.append(line)
        i += 1
    
    # Write the modified file
    with open(md_file, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    print(f"\nDone! Inserted {inserted_count} ShowFrame tags.")

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python insert_showframes.py <markdown_file> <json_transcript> <youtube_url>")
        sys.exit(1)
    
    md_file = sys.argv[1]
    json_file = sys.argv[2]
    youtube_url = sys.argv[3]
    
    process_file(md_file, json_file, youtube_url)
