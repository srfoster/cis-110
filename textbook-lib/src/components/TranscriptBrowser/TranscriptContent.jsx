import React from 'react';

function TranscriptContent({ content }) {
  return (
    <div className="transcript-browser">
      <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
        {content}
      </pre>
    </div>
  );
}

export default TranscriptContent;
