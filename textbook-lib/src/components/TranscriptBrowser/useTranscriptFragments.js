import { useState, useEffect } from 'react';

export function useTranscriptFragments(content) {
  const [fragments, setFragments] = useState([]);

  useEffect(() => {
    // Check for YAML front matter with QuestionBeginnings
    let questionBeginnings = [];
    let transcriptContent = content;
    
    // Look for ----- separator to split YAML from transcript
    const separatorIndex = content.indexOf('-----');
    if (separatorIndex !== -1) {
      const yamlSection = content.slice(0, separatorIndex);
      transcriptContent = content.slice(separatorIndex + 5).trim(); // Skip past -----
      
      // Extract timestamps from YAML section
      const timestampMatches = yamlSection.matchAll(/\s+-\s+(\d+:\d+)/g);
      questionBeginnings = Array.from(timestampMatches, m => m[1]);
      
      console.log('Found question beginnings:', questionBeginnings);
    }
    
    // Parse transcript by timestamp pattern (e.g., "0:03", "12:45")
    const timestampRegex = /(\d+:\d+)\s+/g;
    const parsed = [];
    let lastIndex = 0;
    let match;

    while ((match = timestampRegex.exec(transcriptContent)) !== null) {
      if (lastIndex > 0) {
        // Get the text between the previous timestamp and this one
        const text = transcriptContent.slice(lastIndex, match.index).trim();
        parsed[parsed.length - 1].text = text;
      }
      
      // Check if this timestamp should have a meta fragment before it
      if (questionBeginnings.includes(match[1])) {
        parsed.push({ type: 'meta' });
      }
      
      // Start a new fragment with this timestamp
      parsed.push({
        timestamp: match[1],
        text: '',
        highlights: []
      });
      
      lastIndex = match.index + match[0].length;
    }

    // Handle the last fragment
    if (parsed.length > 0 && lastIndex < transcriptContent.length) {
      parsed[parsed.length - 1].text = transcriptContent.slice(lastIndex).trim();
    }

    console.log('Parsed fragments:', parsed.slice(0, 5)); // Log first 5 fragments
    console.log('Question beginnings:', questionBeginnings);
    setFragments(parsed);
  }, [content]);

  return fragments;
}
