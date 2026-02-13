#!/usr/bin/env python3
"""
Split long blockquote paragraphs into multiple shorter blockquote lines.
Each new line will contain 1-3 sentences for easier text matching.
"""

import re
import sys

def split_into_sentences(text):
    """Split text into sentences, handling common abbreviations."""
    # More aggressive sentence splitter - split on . ! ?
    # Keep the punctuation with the sentence
    sentences = []
    current = ""
    
    for i, char in enumerate(text):
        current += char
        if char in '.!?':
            # Check if this is likely end of sentence (followed by space or end)
            if i + 1 >= len(text) or (i + 1 < len(text) and text[i + 1].isspace()):
                sentences.append(current.strip())
                current = ""
    
    # Add any remaining text
    if current.strip():
        sentences.append(current.strip())
    
    return [s for s in sentences if s]

def split_blockquote(blockquote_text, sentences_per_chunk=2):
    """Split a blockquote into multiple lines with N sentences each."""
    # Remove the leading '> ' from the blockquote
    text = blockquote_text[2:] if blockquote_text.startswith('> ') else blockquote_text[1:]
    
    sentences = split_into_sentences(text)
    
    if len(sentences) <= 1:
        return [blockquote_text]  # Don't split single sentence
    
    # Group sentences into chunks
    chunks = []
    for i in range(0, len(sentences), sentences_per_chunk):
        chunk_sentences = sentences[i:i + sentences_per_chunk]
        chunk_text = ' '.join(chunk_sentences)
        chunks.append(f"> {chunk_text}")
    
    return chunks

def process_file(input_path, output_path=None, sentences_per_chunk=2):
    """Process a markdown file to split blockquotes."""
    if output_path is None:
        output_path = input_path
    
    with open(input_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    result = []
    in_blockquote = False
    current_blockquote = []
    
    for line in lines:
        if line.startswith('>'):
            current_blockquote.append(line.rstrip())
            in_blockquote = True
        else:
            # Not a blockquote line
            if in_blockquote and current_blockquote:
                # Process the accumulated blockquote
                blockquote_text = ' '.join(current_blockquote)
                split_lines = split_blockquote(blockquote_text, sentences_per_chunk)
                result.extend([line + '\n' for line in split_lines])
                current_blockquote = []
                in_blockquote = False
            
            result.append(line)
    
    # Handle any remaining blockquote at end of file
    if current_blockquote:
        blockquote_text = ' '.join(current_blockquote)
        split_lines = split_blockquote(blockquote_text, sentences_per_chunk)
        result.extend([line + '\n' for line in split_lines])
    
    # Write output
    with open(output_path, 'w', encoding='utf-8') as f:
        f.writelines(result)
    
    print(f"Processed {input_path} -> {output_path}")

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python split-blockquotes.py <input_file> [output_file] [sentences_per_chunk]")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else input_file
    sentences_per_chunk = int(sys.argv[3]) if len(sys.argv) > 3 else 2
    
    process_file(input_file, output_file, sentences_per_chunk)
