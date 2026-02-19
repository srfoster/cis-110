import { useState, useEffect } from 'react';

export function useTranscriptFragments(content) {
  const [fragments, setFragments] = useState([]);

  useEffect(() => {
    // Parse transcript by timestamp pattern (e.g., "0:03", "12:45")
    const timestampRegex = /(\d+:\d+)\s+/g;
    const parsed = [];
    let lastIndex = 0;
    let match;

    while ((match = timestampRegex.exec(content)) !== null) {
      if (lastIndex > 0) {
        // Get the text between the previous timestamp and this one
        const text = content.slice(lastIndex, match.index).trim();
        parsed[parsed.length - 1].text = text;
      }
      
      // Start a new fragment with this timestamp
      parsed.push({
        timestamp: match[1],
        text: ''
      });
      
      lastIndex = match.index + match[0].length;
    }

    // Handle the last fragment
    if (parsed.length > 0 && lastIndex < content.length) {
      parsed[parsed.length - 1].text = content.slice(lastIndex).trim();
    }

    setFragments(parsed);
  }, [content]);

  return fragments;
}
