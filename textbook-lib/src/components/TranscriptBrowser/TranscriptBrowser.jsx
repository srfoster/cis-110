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
        
        // Merge saved highlights with fresh fragments (including YAML-parsed metas)
        const mergedFragments = fragments.map(fragment => {
          if (fragment.type === 'meta') {
            // Keep meta fragments from YAML
            return fragment;
          }
          
          // Find matching saved fragment to restore highlights
          const savedFragment = parsed.find(s => s.timestamp === fragment.timestamp);
          if (savedFragment && savedFragment.highlights) {
            return {
              ...fragment,
              highlights: savedFragment.highlights
            };
          }
          
          return fragment;
        });
        
        console.log('Merged fragments:', mergedFragments);
        setDisplayFragments(mergedFragments);
      } catch (e) {
        console.error('Failed to load transcript state:', e);
        setDisplayFragments(fragments);
      }
    } else {
      console.log('No saved state found, using fragments from YAML');
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

  const handleCopyMetaTimestamps = () => {
    // Collect all meta fragment timestamps
    const metaTimestamps = [];
    
    displayFragments.forEach((fragment, index) => {
      if (fragment.type === 'meta') {
        // Get the timestamp of the fragment before this meta (if exists)
        const previousFragment = index > 0 ? displayFragments[index - 1] : null;
        if (previousFragment?.timestamp) {
          metaTimestamps.push(previousFragment.timestamp);
        }
      }
    });
    
    // Format as YAML
    const yamlString = 'QuestionBeginnings:\n' + 
      metaTimestamps.map(ts => `  - ${ts}`).join('\n');
    
    navigator.clipboard.writeText(yamlString);
  };

  const handleClearStorage = () => {
    localStorage.removeItem(storageKey);
    window.location.reload();
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
      
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        <button 
          onClick={handleCopyMetaTimestamps}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#4a90e2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#357abd'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#4a90e2'}
        >
          Copy Meta Timestamps to Clipboard
        </button>
        
        <button 
          onClick={handleClearStorage}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#c0392b'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#e74c3c'}
        >
          Reload from File (Clear Cache)
        </button>
      </div>
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
