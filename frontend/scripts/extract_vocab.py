#!/usr/bin/env python3
"""
Script to extract vocabulary from exam questions and update vocabulary.txt

This script scans all question YAML files referenced in concept-map.yml files,
extracts vocabulary terms from vocab_answer, vocab_kindergarten, vocab_3rd_grade,
and vocab_7th_grade fields, and updates the vocabulary.txt file.
"""

import yaml
import os
import glob
import argparse
import sys

def extract_vocab_from_questions(textbook_path="public/textbook", verbose=False):
    """
    Extract all vocabulary terms from question files.
    
    Args:
        textbook_path: Path to the textbook directory
        verbose: Show additional details
        
    Returns:
        Set of unique vocabulary terms
    """
    pattern = os.path.join(textbook_path, "content/overviews/*/concept-map.yml")
    concept_files = glob.glob(pattern)
    
    if not concept_files:
        print(f"No concept-map.yml files found in {pattern}")
        return set()
    
    all_vocab = set()
    question_count = 0
    
    for concept_file in sorted(concept_files):
        if verbose:
            print(f"\n--- Processing: {concept_file} ---")
        
        try:
            with open(concept_file, 'r', encoding='utf-8') as f:
                data = yaml.safe_load(f)
        except Exception as e:
            print(f"Error reading {concept_file}: {e}")
            continue
        
        if 'concept_map' not in data:
            if verbose:
                print(f"No concept_map found in {concept_file}")
            continue
        
        chapter = concept_file.split(os.sep)[-2]
        
        for category in data['concept_map']:
            for concept in category.get('concepts', []):
                for q_file in concept.get('exam_questions', []):
                    q_path = os.path.join(os.path.dirname(concept_file), q_file)
                    
                    if not os.path.exists(q_path):
                        if verbose:
                            print(f"Question file not found: {q_path}")
                        continue
                    
                    try:
                        with open(q_path, 'r', encoding='utf-8') as qf:
                            q_data = yaml.safe_load(qf)
                        
                        question_count += 1
                        
                        # Extract vocabulary from all vocab fields
                        vocab_fields = [
                            'vocab_answer',
                            'vocab_kindergarten', 
                            'vocab_3rd_grade',
                            'vocab_7th_grade'
                        ]
                        
                        for field in vocab_fields:
                            if field in q_data and q_data[field]:
                                for vocab_item in q_data[field]:
                                    if isinstance(vocab_item, dict) and 'word' in vocab_item:
                                        word = vocab_item['word'].strip()
                                        all_vocab.add(word)
                                        if verbose:
                                            print(f"  Added: {word}")
                        
                    except Exception as e:
                        print(f"Error reading question file {q_path}: {e}")
    
    if verbose:
        print(f"\nProcessed {question_count} question files")
    
    return all_vocab

def load_existing_vocab(vocab_file):
    """Load existing vocabulary from file."""
    if not os.path.exists(vocab_file):
        return set()
    
    with open(vocab_file, 'r', encoding='utf-8') as f:
        return set(line.strip() for line in f if line.strip())

def save_vocab(vocab_set, vocab_file):
    """Save vocabulary to file, sorted by length (longest first)."""
    sorted_vocab = sorted(vocab_set, key=lambda x: (-len(x), x.lower()))
    
    with open(vocab_file, 'w', encoding='utf-8') as f:
        for term in sorted_vocab:
            f.write(term + '\n')

def main():
    parser = argparse.ArgumentParser(
        description="Extract vocabulary from exam questions and update vocabulary.txt"
    )
    parser.add_argument(
        '--textbook-path', 
        default='../public/textbook',
        help='Path to the textbook directory (default: ../public/textbook)'
    )
    parser.add_argument(
        '--vocab-file',
        default='vocabulary.txt',
        help='Path to vocabulary file (default: vocabulary.txt)'
    )
    parser.add_argument(
        '--verbose', '-v',
        action='store_true',
        help='Show verbose output with processing details'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be added without updating the file'
    )
    
    args = parser.parse_args()
    
    print("Extracting vocabulary from exam questions...")
    exam_vocab = extract_vocab_from_questions(args.textbook_path, args.verbose)
    print(f"Found {len(exam_vocab)} unique vocabulary terms in exam questions")
    
    print(f"\nLoading existing vocabulary from {args.vocab_file}...")
    existing_vocab = load_existing_vocab(args.vocab_file)
    print(f"Existing vocabulary contains {len(existing_vocab)} terms")
    
    # Find new terms
    new_terms = exam_vocab - existing_vocab
    
    if new_terms:
        print(f"\n{len(new_terms)} new terms found:")
        for term in sorted(new_terms, key=lambda x: x.lower()):
            print(f"  + {term}")
        
        if not args.dry_run:
            # Combine and save
            combined_vocab = existing_vocab | exam_vocab
            save_vocab(combined_vocab, args.vocab_file)
            print(f"\nUpdated {args.vocab_file}")
            print(f"Total vocabulary: {len(combined_vocab)} terms ({len(existing_vocab)} existing + {len(new_terms)} new)")
        else:
            print(f"\nDry run - would update {args.vocab_file}")
    else:
        print("\nNo new terms to add. Vocabulary is up to date!")
    
    # Also show terms in vocabulary.txt that aren't in exam questions
    if args.verbose:
        manual_terms = existing_vocab - exam_vocab
        if manual_terms:
            print(f"\n{len(manual_terms)} terms in vocabulary.txt not found in exam questions:")
            for term in sorted(manual_terms, key=lambda x: x.lower())[:20]:
                print(f"  - {term}")
            if len(manual_terms) > 20:
                print(f"  ... and {len(manual_terms) - 20} more")

if __name__ == "__main__":
    main()
