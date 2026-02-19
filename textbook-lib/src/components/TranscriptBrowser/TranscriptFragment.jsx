import React from 'react';

function TranscriptFragment({ fragment, index, questionIndex, questions, onTextSelect, onDeleteHighlight }) {
  const textRef = React.useRef(null);
  
  if (fragment.type === 'meta') {
    // Calculate header from questions array based on questionIndex
    const question = questions && questions[questionIndex];
    
    let header = `Section ${questionIndex + 1}`;
    let questionBody = '';
    const feedback = fragment.feedback || [];
    
    if (question) {
      // Extract just the first line of the question if it's multiline
      const questionText = question.question || question.name || '';
      const lines = questionText.split('\n');
      const firstLine = lines[0].replace(/^\*\*|\*\*$/g, '').trim();
      header = `Question ${questionIndex + 1}: ${firstLine}`;
      
      // Get the rest of the question (everything after the first line)
      if (lines.length > 1) {
        questionBody = lines.slice(1).join('\n').trim();
      }
    }
    
    return (
      <div key={index} style={{ margin: '1.5rem 0 1rem 0' }}>
        <h3 
          style={{ 
            color: '#333',
            borderBottom: '2px solid #4a90e2',
            paddingBottom: '0.5rem',
            marginBottom: (questionBody || feedback.length > 0) ? '0.5rem' : '0'
          }}
        >
          {header}
        </h3>
        {questionBody && (
          <div 
            style={{ 
              padding: '0.75rem',
              backgroundColor: '#f8f9fa',
              borderLeft: '3px solid #4a90e2',
              whiteSpace: 'pre-wrap',
              fontFamily: 'inherit',
              fontSize: '0.95em',
              color: '#555',
              marginBottom: feedback.length > 0 ? '0.5rem' : '0'
            }}
          >
            {questionBody}
          </div>
        )}
        {feedback.length > 0 && (
          <div 
            style={{ 
              padding: '0.75rem',
              backgroundColor: '#fff3cd',
              borderLeft: '3px solid #ffc107',
              fontFamily: 'inherit',
              fontSize: '0.95em',
              color: '#856404'
            }}
          >
            <strong>Feedback:</strong>
            <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem' }}>
              {feedback.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  const handleMouseUp = (e) => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    
    if (selectedText && textRef.current && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      
      // Get the text content of the entire paragraph
      const paragraphText = textRef.current.textContent;
      
      // Calculate the actual offset within the paragraph
      let startOffset = 0;
      let endOffset = 0;
      
      // Create a range that covers everything up to the selection start
      const preRange = document.createRange();
      preRange.setStart(textRef.current, 0);
      preRange.setEnd(range.startContainer, range.startOffset);
      const textBeforeSelection = preRange.toString();
      
      startOffset = textBeforeSelection.length;
      endOffset = startOffset + selectedText.length;
      
      onTextSelect(index, startOffset, endOffset);
      
      // Clear the selection
      selection.removeAllRanges();
    }
  };

  const handleContextMenu = (e) => {
    // Check if right-click was on a highlight
    if (fragment.highlights && fragment.highlights.length > 0) {
      e.preventDefault();
      
      // Find which highlight was clicked (use the position in the text)
      const clickX = e.clientX;
      const clickY = e.clientY;
      const element = document.elementFromPoint(clickX, clickY);
      
      if (element && element.tagName === 'SPAN') {
        const highlightIndex = parseInt(element.getAttribute('data-highlight-index'));
        if (!isNaN(highlightIndex)) {
          onDeleteHighlight(index, highlightIndex);
        }
      }
    }
  };

  const renderText = () => {
    const text = fragment.text;
    
    if (!fragment.highlights || fragment.highlights.length === 0) {
      return text;
    }

    // Sort highlights by start position
    const sortedHighlights = [...fragment.highlights].sort((a, b) => a.start - b.start);
    
    const parts = [];
    let lastIndex = 0;
    
    sortedHighlights.forEach((highlight, highlightIndex) => {
      // Add text before highlight
      if (highlight.start > lastIndex) {
        parts.push(text.slice(lastIndex, highlight.start));
      }
      
      // Add highlighted text
      parts.push(
        <span 
          key={highlightIndex} 
          data-highlight-index={highlightIndex}
          style={{ backgroundColor: 'yellow' }}
        >
          {text.slice(highlight.start, highlight.end)}
        </span>
      );
      
      lastIndex = highlight.end;
    });
    
    // Add remaining text after last highlight
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts;
  };
  
  return (
    <p key={index} onMouseUp={handleMouseUp} onContextMenu={handleContextMenu}>
      <strong>{fragment.timestamp}</strong> <span ref={textRef}>{renderText()}</span>
    </p>
  );
}

export default TranscriptFragment;
