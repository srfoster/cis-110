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
      
      // Parse YAML to extract timestamps and their feedback
      const lines = yamlSection.split('\n');
      let currentTimestamp = null;
      
      for (const line of lines) {
        // Match main timestamp entry: "  - 0:09"
        const timestampMatch = line.match(/^\s+-\s+(\d+:\d+(?::\d+)?)\s*$/);
        if (timestampMatch) {
          currentTimestamp = timestampMatch[1];
          questionBeginnings.push({ timestamp: currentTimestamp, feedback: [] });
        }
        // Match feedback sub-bullet: "    - Test"
        else if (currentTimestamp && line.match(/^\s{4,}-\s+(.+)$/)) {
          const feedbackMatch = line.match(/^\s{4,}-\s+(.+)$/);
          if (feedbackMatch) {
            const lastEntry = questionBeginnings[questionBeginnings.length - 1];
            lastEntry.feedback.push(feedbackMatch[1].trim());
          }
        }
      }
      
      console.log('Found question beginnings:', questionBeginnings);
    }
    
    // Parse transcript by timestamp pattern - support both M:SS and H:MM:SS formats
    const timestampRegex = /(\d+:\d+(?::\d+)?)\s+/g;
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
      const questionEntry = questionBeginnings.find(q => q.timestamp === match[1]);
      if (questionEntry) {
        parsed.push({ 
          type: 'meta',
          feedback: questionEntry.feedback 
        });
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
