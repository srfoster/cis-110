import React from 'react';
import { useTranscriptFetch } from './useTranscriptFetch';
import { useTranscriptFragments } from './useTranscriptFragments';
import TranscriptDisplay from './TranscriptDisplay';
import TranscriptFragment from './TranscriptFragment';
import './TranscriptBrowser.css';

function TranscriptContent({ content, storageKey, questions }) {
  const fragments = useTranscriptFragments(content);
  const [displayFragments, setDisplayFragments] = React.useState([]);

  React.useEffect(() => {
    // Try to load saved state from localStorage using unique key
    const savedState = localStorage.getItem(storageKey);
    
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        console.log('Loaded saved state:', parsed);
        
        // Merge saved highlights/metas with fresh fragments
        const mergedFragments = [];
        
        for (let i = 0; i < parsed.length; i++) {
          const saved = parsed[i];
          
          if (saved.type === 'meta') {
            // Restore meta fragments (no header needed in state)
            mergedFragments.push({ type: 'meta' });
          } else if (saved.timestamp) {
            // Find matching fragment by timestamp
            const matchingFragment = fragments.find(f => f.timestamp === saved.timestamp);
            if (matchingFragment) {
              mergedFragments.push({
                ...matchingFragment,
                highlights: saved.highlights || []
              });
            }
          }
        }
        
        // Add any new fragments that weren't in saved state
        fragments.forEach(fragment => {
          if (!mergedFragments.find(f => f.timestamp === fragment.timestamp)) {
            mergedFragments.push(fragment);
          }
        });
        
        console.log('Merged fragments:', mergedFragments);
        setDisplayFragments(mergedFragments);
      } catch (e) {
        console.error('Failed to load transcript state:', e);
        setDisplayFragments(fragments);
      }
    } else {
      console.log('No saved state found');
      setDisplayFragments(fragments);
    }
  }, [fragments, storageKey]);

  React.useEffect(() => {
    // Save state to localStorage whenever displayFragments changes
    if (displayFragments.length > 0) {
      const stateToSave = displayFragments.map(fragment => ({
        timestamp: fragment.timestamp,
        highlights: fragment.highlights || [],
        type: fragment.type
      }));
      localStorage.setItem(storageKey, JSON.stringify(stateToSave));
    }
  }, [displayFragments, storageKey]);

  const handleTimestampClick = (index) => {
    const newFragments = [...displayFragments];
    
    // Check if the next fragment is already a meta fragment
    if (index + 1 < newFragments.length && newFragments[index + 1].type === 'meta') {
      // Remove it
      newFragments.splice(index + 1, 1);
    } else {
      // Add a new meta fragment (no header in state)
      newFragments.splice(index + 1, 0, { type: 'meta' });
    }
    
    setDisplayFragments(newFragments);
  };

  const handleTextSelect = (index, startIndex, endIndex) => {
    const newFragments = [...displayFragments];
    const currentHighlights = newFragments[index].highlights || [];
    
    newFragments[index] = {
      ...newFragments[index],
      highlights: [...currentHighlights, { start: startIndex, end: endIndex }]
    };
    setDisplayFragments(newFragments);
  };

  const handleDeleteHighlight = (index, highlightIndex) => {
    const newFragments = [...displayFragments];
    const currentHighlights = newFragments[index].highlights || [];
    
    newFragments[index] = {
      ...newFragments[index],
      highlights: currentHighlights.filter((_, i) => i !== highlightIndex)
    };
    setDisplayFragments(newFragments);
  };

  return (
    <div className="transcript-browser">
      {displayFragments.map((fragment, index) => {
        // Count meta fragments before this one to get question index
        let questionIndex = 0;
        if (fragment.type === 'meta') {
          questionIndex = displayFragments.slice(0, index).filter(f => f.type === 'meta').length;
        }
        
        return (
          <TranscriptFragment 
            key={index}
            fragment={fragment}
            index={index}
            questionIndex={questionIndex}
            questions={questions}
            onTimestampClick={handleTimestampClick}
            onTextSelect={handleTextSelect}
            onDeleteHighlight={handleDeleteHighlight}
          />
        );
      })}
    </div>
  );
}

function TranscriptBrowser({ transcript_string, transcript_path, questions }) {
  const { content, loading, error } = useTranscriptFetch(transcript_string, transcript_path);
  
  // Create a unique storage key based on the transcript path or string
  const storageKey = transcript_path 
    ? `transcriptState_${transcript_path.replace(/[^a-zA-Z0-9]/g, '_')}` 
    : 'transcriptState_default';

  return <TranscriptDisplay content={content} loading={loading} error={error} storageKey={storageKey} questions={questions} />;
}

export default TranscriptBrowser;
export { TranscriptContent };
