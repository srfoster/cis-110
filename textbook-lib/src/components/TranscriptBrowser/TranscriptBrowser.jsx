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
    // Try to load saved highlights from localStorage
    const savedState = localStorage.getItem(storageKey);
    
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        console.log('Loaded saved highlights:', parsed);
        
        // Merge saved highlights with fragments (meta sections come from YAML only)
        const mergedFragments = fragments.map(fragment => {
          if (fragment.type === 'meta') {
            // Keep meta fragments from YAML only
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
    // Save only highlights to localStorage (not meta sections)
    if (displayFragments.length > 0) {
      const stateToSave = displayFragments
        .filter(f => f.timestamp) // Only save text fragments, not meta
        .map(fragment => ({
          timestamp: fragment.timestamp,
          highlights: fragment.highlights || []
        }));
      localStorage.setItem(storageKey, JSON.stringify(stateToSave));
    }
  }, [displayFragments, storageKey]);

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

  const generateFeedbackSummary = () => {
    const feedbackItems = [];
    let currentQuestionIndex = 0;
    
    displayFragments.forEach((fragment) => {
      if (fragment.type === 'meta' && fragment.feedback && fragment.feedback.length > 0) {
        const question = questions && questions[currentQuestionIndex];
        const questionText = question ? (question.question || question.name || '') : '';
        const firstLine = questionText.split('\n')[0].replace(/^\*\*|\*\*$/g, '').trim();
        
        feedbackItems.push({
          questionNumber: currentQuestionIndex + 1,
          questionText: firstLine || `Question ${currentQuestionIndex + 1}`,
          feedback: fragment.feedback
        });
        currentQuestionIndex++;
      } else if (fragment.type === 'meta') {
        currentQuestionIndex++;
      }
    });
    
    return feedbackItems;
  };

  const handleCopyFeedback = () => {
    const feedbackItems = generateFeedbackSummary();
    
    if (feedbackItems.length === 0) {
      return;
    }
    
    let feedbackText = 'Exam Feedback:\n\n';
    
    feedbackItems.forEach((item, index) => {
      feedbackText += `Question ${item.questionNumber}: ${item.questionText}\n`;
      item.feedback.forEach(fb => {
        feedbackText += `  - ${fb}\n`;
      });
      // Add blank line between questions
      if (index < feedbackItems.length - 1) {
        feedbackText += '\n';
      }
    });
    
    navigator.clipboard.writeText(feedbackText);
  };

  const generateFeedbackText = () => {
    const feedbackItems = generateFeedbackSummary();
    
    if (feedbackItems.length === 0) {
      return '';
    }
    
    let feedbackText = 'Exam Feedback:\n\n';
    
    feedbackItems.forEach((item, index) => {
      feedbackText += `Question ${item.questionNumber}: ${item.questionText}\n`;
      item.feedback.forEach(fb => {
        feedbackText += `  - ${fb}\n`;
      });
      if (index < feedbackItems.length - 1) {
        feedbackText += '\n';
      }
    });
    
    return feedbackText;
  };

  const feedbackSummary = generateFeedbackSummary();

  return (
    <div className="transcript-browser">
      {feedbackSummary.length > 0 && (
        <div style={{ 
          marginBottom: '2rem',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          border: '2px solid #4a90e2',
          borderRadius: '4px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, color: '#333' }}>Feedback Summary</h3>
            <button 
              onClick={handleCopyFeedback}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#357abd'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#4a90e2'}
            >
              Copy Feedback
            </button>
          </div>
          <pre style={{ 
            padding: '1rem',
            backgroundColor: '#f5f5f5',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '0.9em',
            overflow: 'auto',
            margin: 0
          }}>
            {generateFeedbackText()}
          </pre>
        </div>
      )}
      
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
