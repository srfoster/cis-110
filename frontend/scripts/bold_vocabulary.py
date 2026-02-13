#!/usr/bin/env python3
"""
Bold vocabulary terms in student exam markdown files.
Only bolds terms in blockquoted lines (lines starting with '>').
"""

import re
import sys
from pathlib import Path

def load_vocabulary(vocab_file):
    """Load vocabulary terms from file, sorted by length (longest first)."""
    with open(vocab_file, 'r', encoding='utf-8') as f:
        terms = [line.strip() for line in f if line.strip()]
    # Sort by length descending to match longer phrases first
    return sorted(terms, key=len, reverse=True)

def bold_term_in_line(line, term):
    """
    Bold a term in a line if it's not already bolded.
    Uses case-insensitive matching but preserves original case.
    """
    # Skip if term is already bolded in this line
    if f"**{term}**" in line:
        return line
    
    # Create a pattern that matches the term but not if it's already between **
    # This regex looks for the term not preceded or followed by **
    pattern = r'(?<!\*\*)(?<!\*)\b(' + re.escape(term) + r')\b(?!\*(?!\*))(?!\*\*)'
    
    def replace_func(match):
        return f"**{match.group(1)}**"
    
    # Case-insensitive replacement
    new_line = re.sub(pattern, replace_func, line, flags=re.IGNORECASE)
    return new_line

def process_markdown_file(input_file, vocab_terms, output_file=None):
    """
    Process a markdown file and bold vocabulary terms in blockquoted lines.
    
    Args:
        input_file: Path to input markdown file
        vocab_terms: List of vocabulary terms to bold
        output_file: Path to output file (defaults to overwriting input)
    """
    if output_file is None:
        output_file = input_file
    
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    processed_lines = []
    for line in lines:
        # Only process blockquoted lines (lines starting with >)
        if line.strip().startswith('>'):
            # Apply bolding for each vocabulary term
            for term in vocab_terms:
                line = bold_term_in_line(line, term)
        
        processed_lines.append(line)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.writelines(processed_lines)
    
    print(f"Processed {input_file} -> {output_file}")

def main():
    if len(sys.argv) < 2:
        print("Usage: python bold_vocabulary.py <markdown_file> [output_file]")
        print("  If output_file is not specified, the input file will be overwritten.")
        sys.exit(1)
    
    # Get the script directory to find vocabulary file
    script_dir = Path(__file__).parent
    vocab_file = script_dir / "vocabulary.txt"
    
    if not vocab_file.exists():
        print(f"Error: Vocabulary file not found at {vocab_file}")
        sys.exit(1)
    
    input_file = Path(sys.argv[1])
    if not input_file.exists():
        print(f"Error: Input file not found: {input_file}")
        sys.exit(1)
    
    output_file = Path(sys.argv[2]) if len(sys.argv) > 2 else None
    
    print(f"Loading vocabulary from {vocab_file}...")
    vocab_terms = load_vocabulary(vocab_file)
    print(f"Loaded {len(vocab_terms)} vocabulary terms")
    
    print(f"Processing {input_file}...")
    process_markdown_file(input_file, vocab_terms, output_file)
    print("Done!")

if __name__ == "__main__":
    main()
