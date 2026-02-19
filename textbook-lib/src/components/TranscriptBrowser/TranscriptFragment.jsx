import React from 'react';

function TranscriptFragment({ fragment, index, questionIndex, questions, onTimestampClick, onTextSelect, onDeleteHighlight }) {
  const textRef = React.useRef(null);
  
  if (fragment.type === 'meta') {
    // Calculate header from questions array based on questionIndex
    const question = questions && questions[questionIndex];
    
    let header = `Section ${questionIndex + 1}`;
    
    if (question) {
      // Extract just the first line of the question if it's multiline
      const questionText = question.question || question.name || '';
      const firstLine = questionText.split('\n')[0].replace(/^\*\*|\*\*$/g, '').trim();
      header = `Question ${questionIndex + 1}: ${firstLine}`;
    }
    
    return (
      <h3 
        key={index} 
        style={{ 
          margin: '1.5rem 0 1rem 0',
          color: '#333',
          borderBottom: '2px solid #4a90e2',
          paddingBottom: '0.5rem'
        }}
      >
        {header}
      </h3>
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
      <strong 
        onClick={() => onTimestampClick(index)}
        style={{ cursor: 'pointer' }}
      >
        {fragment.timestamp}
      </strong> <span ref={textRef}>{renderText()}</span>
    </p>
  );
}

export default TranscriptFragment;
