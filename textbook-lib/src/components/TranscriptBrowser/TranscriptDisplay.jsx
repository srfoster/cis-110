import React from 'react';
import { TranscriptContent } from './TranscriptBrowser';

function TranscriptDisplay({ content, loading, error, storageKey, questions }) {
  if (loading) {
    return <div className="transcript-browser loading">Loading transcript...</div>;
  }

  if (error) {
    return <div className="transcript-browser error">Error: {error}</div>;
  }

  if (!content) {
    return <div className="transcript-browser">No transcript available</div>;
  }

  return <TranscriptContent content={content} storageKey={storageKey} questions={questions} />;
}

export default TranscriptDisplay;
