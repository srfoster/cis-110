import React, { useState, useEffect } from 'react';
import { getAssetUrl } from '../utils/paths';
import resourceCache from '../services/resourceCache';
import ShowFrame from './ShowFrame';
import './TranscriptBrowser.css';

function TranscriptBrowser({ url, transcript_json, diagrams = [], diagrams_json }) {
  const [transcriptData, setTranscriptData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [highlights, setHighlights] = useState([]);
  const [paragraphs, setParagraphs] = useState([]);
  const [showFrames, setShowFrames] = useState([]); // {id, afterParagraphIndex, timestamp}
  const [vocabulary, setVocabulary] = useState([]);
  const [diagramsData, setDiagramsData] = useState(diagrams);
  const [activeFragments, setActiveFragments] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(0);
  const paragraphsPerPage = 50;

  // Load transcript JSON
  useEffect(() => {
    const loadTranscript = async () => {
      if (!transcript_json) return;

      try {
        setLoading(true);
        setError(null);

        // Construct the fetch URL
        const fetchUrl = transcript_json.startsWith('/') ? 
          transcript_json : 
          getAssetUrl(transcript_json.replace(/^\.\//, ''));

        console.log('TranscriptBrowser: Fetching transcript from:', fetchUrl);
        const data = await resourceCache.getJSON(fetchUrl);
        setTranscriptData(data);
        setLoading(false);
        console.log('TranscriptBrowser: Loaded transcript:', data.length, 'entries');
        
        // Initialize paragraphs
        const baseParagraphs = groupIntoParagraphsFromData(data);
        setParagraphs(baseParagraphs);
      } catch (e) {
        console.error('Failed to load transcript:', e);
        setError(e.message);
        setLoading(false);
      }
    };

    loadTranscript();
  }, [transcript_json]);

  // Load diagrams JSON if provided
  useEffect(() => {
    const loadDiagrams = async () => {
      if (!diagrams_json) return;

      try {
        const fetchUrl = diagrams_json.startsWith('/') ? 
          diagrams_json : 
          getAssetUrl(diagrams_json.replace(/^\.\//,''));

        console.log('TranscriptBrowser: Fetching diagrams from:', fetchUrl);
        const response = await fetch(fetchUrl);
        if (!response.ok) {
          console.error('Failed to fetch diagrams:', response.statusText);
          return;
        }
        const data = await response.json();
        
        // Convert object format {"3:25": "path"} to array format
        let diagramsArray = [];
        if (Array.isArray(data)) {
          diagramsArray = data; // Already in array format
        } else {
          // Convert object format to array
          diagramsArray = Object.entries(data).map(([time, imagePath]) => {
            // Parse time string like "3:25" to seconds
            const parts = time.split(':').map(Number);
            const timestamp = parts.length === 2 ? parts[0] * 60 + parts[1] : parseFloat(time);
            return { timestamp, imagePath };
          });
        }
        
        setDiagramsData(diagramsArray);
        console.log('Loaded diagrams:', diagramsArray);
      } catch (err) {
        console.error('Error loading diagrams:', err);
      }
    };

    loadDiagrams();
  }, [diagrams_json]);

  // Create automatic highlights for diagram timestamps
  useEffect(() => {
    if (!transcriptData || !diagramsData || diagramsData.length === 0 || paragraphs.length === 0) return;

    console.log('=== Creating diagram highlights ===');
    console.log('Diagrams:', diagramsData.map(d => ({timestamp: d.timestamp, path: d.imagePath})));
    console.log('Transcript entries count:', transcriptData.length);

    const autoHighlights = [];
    
    diagramsData.forEach(diagram => {
      const targetTime = diagram.timestamp;
      console.log(`\n--- Processing diagram at ${targetTime}s ---`);
      
      // Find the entry index in transcriptData that matches this timestamp
      const entryIndex = transcriptData.findIndex(entry => 
        Math.abs(entry.start - targetTime) < 2.0
      );
      
      if (entryIndex === -1) {
        console.warn(`❌ No entry found near timestamp ${targetTime}s in transcriptData`);
        diagram.highlightedText = `[No transcript entry near ${targetTime}s]`;
        return;
      }
      
      const matchedEntry = transcriptData[entryIndex];
      console.log(`✓ Found entry ${entryIndex}: "${matchedEntry.text}" at ${matchedEntry.start}s`);
      
      // Build text from this entry to end of sentence (or 5 more entries max)
      let fullText = matchedEntry.text;
      let nextIndex = entryIndex + 1;
      let foundPeriod = matchedEntry.text.includes('.');
      
      while (!foundPeriod && nextIndex < transcriptData.length && nextIndex < entryIndex + 6) {
        const nextEntry = transcriptData[nextIndex];
        if (nextEntry.start - transcriptData[nextIndex - 1].start > 1.0) {
          break;
        }
        fullText += ' ' + nextEntry.text;
        if (nextEntry.text.includes('.')) {
          foundPeriod = true;
          const periodIdx = fullText.indexOf('.', matchedEntry.text.length);
          if (periodIdx !== -1) {
            fullText = fullText.substring(0, periodIdx + 1);
          }
          break;
        }
        nextIndex++;
      }
      
      console.log(`  Built highlight text: "${fullText}"`);
      
      // Find the paragraph that contains this entry
      let targetParagraphIndex = -1;
      let startOffset = 0;
      let endOffset = 0;
      
      for (let pIdx = 0; pIdx < paragraphs.length; pIdx++) {
        const para = paragraphs[pIdx];
        if (!para.entries) continue;
        
        // Check if this paragraph contains the matched entry
        const entryInPara = para.entries.find(e => Math.abs(e.start - matchedEntry.start) < 0.1);
        
        if (entryInPara) {
          targetParagraphIndex = pIdx;
          console.log(`  Found in paragraph ${pIdx}`);
          
          // Calculate character offset by summing lengths of previous entries
          let charOffset = 0;
          for (const e of para.entries) {
            if (Math.abs(e.start - matchedEntry.start) < 0.1) {
              // Found it - this is where we start
              startOffset = charOffset;
              
              // Calculate end by adding the fullText length
              // But need to make sure fullText actually exists in the paragraph
              const remainingText = para.text.substring(charOffset);
              const fullTextInPara = remainingText.substring(0, fullText.length);
              
              if (fullTextInPara.toLowerCase().trim() === fullText.toLowerCase().trim()) {
                endOffset = charOffset + fullText.length;
              } else {
                // Just highlight the matched entry
                endOffset = charOffset + matchedEntry.text.length;
              }
              
              console.log(`  Highlight position: ${startOffset}-${endOffset}`);
              break;
            }
            // Add this entry's length plus a space
            charOffset += e.text.length + 1;
          }
          break;
        }
      }
      
      if (targetParagraphIndex === -1) {
        console.warn(`❌ Could not find entry with timestamp ${matchedEntry.start}s in any paragraph`);
        diagram.highlightedText = fullText;
        return;
      }
      
      console.log(`  Placing highlight in paragraph ${targetParagraphIndex}, offset ${startOffset}-${endOffset}`);
      
      autoHighlights.push({
        id: `diagram-${diagram.timestamp}`,
        paragraphIndex: targetParagraphIndex,
        startOffset,
        endOffset,
        text: fullText,
        isDiagramHighlight: true,
        diagramTimestamp: diagram.timestamp
      });
      
      // Store the highlighted text in the diagram for caption display
      diagram.highlightedText = fullText;
      
      console.log(`✓ Created diagram highlight: "${fullText.substring(0, 50)}..."`);
    });
    
    if (autoHighlights.length > 0) {
      console.log('Created diagram highlights:', autoHighlights);
      setHighlights(prev => {
        // Remove old diagram highlights and add new ones
        const nonDiagramHighlights = prev.filter(h => !h.isDiagramHighlight);
        return [...nonDiagramHighlights, ...autoHighlights];
      });
    }
  }, [diagramsData, paragraphs, transcriptData]);

  // Load vocabulary list
  useEffect(() => {
    const loadVocabulary = async () => {
      try {
        const response = await fetch('/vocabulary.txt');
        if (!response.ok) {
          throw new Error(`Failed to fetch vocabulary: ${response.statusText}`);
        }
        const text = await response.text();
        const terms = text.split('\n')
          .map(line => line.trim())
          .filter(line => line.length > 0);
        setVocabulary(terms);
        console.log('Loaded vocabulary:', terms.length, 'terms');
        console.log('First few terms:', terms.slice(0, 5));
      } catch (e) {
        console.error('Failed to load vocabulary:', e);
      }
    };
    
    loadVocabulary();
  }, []);

  // Create ShowFrames for paragraphs with active fragments
  useEffect(() => {
    const frames = [];
    
    paragraphs.forEach((para, index) => {
      if (!para.entries) return;
      
      // Check if this paragraph has any active fragments
      const activeInPara = para.entries.filter(entry => activeFragments.has(entry.start));
      
      // Create one ShowFrame for each active fragment
      activeInPara.forEach(entry => {
        frames.push({
          id: `frame-${index}-${entry.start}`,
          afterParagraphIndex: index,
          timestamp: entry.start
        });
      });
    });
    
    setShowFrames(frames);
  }, [activeFragments, paragraphs]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Handler to remove a ShowFrame
  const handleRemoveShowFrame = (frameId) => {
    // Extract paragraph index and timestamp from frame ID (format: frame-{paraIndex}-{timestamp})
    const match = frameId.match(/frame-(\d+)-(\d+\.?\d*)/);
    if (match) {
      const timestamp = parseFloat(match[2]);
      
      // Deactivate only this specific fragment
      setActiveFragments(prev => {
        const newSet = new Set(prev);
        newSet.delete(timestamp);
        return newSet;
      });
    }
    console.log('Deleted ShowFrame:', frameId);
  };

  // Group transcript entries into paragraphs based on pauses
  const groupIntoParagraphsFromData = (data) => {
    if (!data || data.length === 0) return [];

    const paras = [];
    let currentParagraph = [];
    let currentEntries = [];
    let currentTimestamp = null;

    for (let i = 0; i < data.length; i++) {
      const entry = data[i];
      
      // Store timestamp of first entry in paragraph
      if (currentParagraph.length === 0) {
        currentTimestamp = entry.start;
      }

      currentParagraph.push(entry.text);
      currentEntries.push(entry);

      // Check if there's a significant pause before the next entry
      const nextEntry = data[i + 1];
      const pause = nextEntry ? (nextEntry.start - (entry.start + entry.duration)) : 0;
      
      // Break paragraph if pause is > 1 second or we're at the end
      if (!nextEntry || pause > 1.0) {
        paras.push({
          text: currentParagraph.join(' '),
          timestamp: currentTimestamp,
          entryCount: currentParagraph.length,
          entries: currentEntries // Store the actual transcript entries
        });
        currentParagraph = [];
        currentEntries = [];
        currentTimestamp = null;
      }
    }

    return paras;
  };

  // Handle text selection to create highlights
  const handleDoubleClick = (e, paragraphIndex) => {
    const para = paragraphs[paragraphIndex];
    if (!para.entries) return;

    // Get click position in the paragraph text
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const container = e.currentTarget;
    
    const fullRange = document.createRange();
    fullRange.selectNodeContents(container);
    fullRange.setEnd(range.startContainer, range.startOffset);
    const clickOffset = fullRange.toString().length;

    // Find which entry was clicked
    let charOffset = 0;
    let clickedEntry = null;
    
    for (const entry of para.entries) {
      const entryStart = charOffset;
      const entryEnd = charOffset + entry.text.length;
      
      if (clickOffset >= entryStart && clickOffset <= entryEnd) {
        clickedEntry = entry;
        break;
      }
      
      charOffset += entry.text.length + 1; // +1 for space
    }

    if (!clickedEntry) return;

    console.log('Double-clicked fragment:', clickedEntry.text, 'at', clickedEntry.start);

    // Toggle this fragment's active state
    setActiveFragments(prev => {
      const newSet = new Set(prev);
      if (newSet.has(clickedEntry.start)) {
        newSet.delete(clickedEntry.start);
      } else {
        newSet.add(clickedEntry.start);
      }
      return newSet;
    });
  };

  // Helper to render entry text with vocabulary bolding and diagram highlights
  const renderEntryText = (entryText, paragraphIndex, entryStartOffset, keyPrefix = '') => {
    const entryEndOffset = entryStartOffset + entryText.length;
    
    // Collect vocab replacements
    const vocabReplacements = [];
    if (vocabulary.length > 0) {
      const sortedVocab = [...vocabulary].sort((a, b) => b.length - a.length);
      
      sortedVocab.forEach(term => {
        if (term.length < 3) return;
        const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b${escapedTerm}\\b`, 'gi');
        
        let match;
        while ((match = regex.exec(entryText)) !== null) {
          vocabReplacements.push({
            type: 'vocab',
            start: match.index,
            end: match.index + match[0].length
          });
        }
      });
    }

    // Collect diagram highlights that overlap with this entry
    const paraHighlights = highlights.filter(h => h.paragraphIndex === paragraphIndex);
    const entryHighlights = [];
    
    paraHighlights.forEach(highlight => {
      // Check if highlight overlaps with this entry's range in the paragraph
      if (highlight.startOffset < entryEndOffset && highlight.endOffset > entryStartOffset) {
        // Calculate the intersection with this entry
        const relativeStart = Math.max(0, highlight.startOffset - entryStartOffset);
        const relativeEnd = Math.min(entryText.length, highlight.endOffset - entryStartOffset);
        
        entryHighlights.push({
          type: 'highlight',
          start: relativeStart,
          end: relativeEnd,
          id: highlight.id
        });
      }
    });

    // If no vocab or highlights, just return plain text
    if (vocabReplacements.length === 0 && entryHighlights.length === 0) {
      return entryText;
    }

    // Combine and sort all markers
    const allMarkers = [...vocabReplacements, ...entryHighlights].sort((a, b) => a.start - b.start);
    
    const parts = [];
    let lastIndex = 0;

    allMarkers.forEach((marker) => {
      // Skip if overlapping with previous
      if (marker.start < lastIndex) {
        return;
      }
      
      // Add text before marker
      if (marker.start > lastIndex) {
        parts.push(entryText.substring(lastIndex, marker.start));
      }
      
      if (marker.type === 'vocab') {
        parts.push(
          <strong key={`${keyPrefix}-vocab-${marker.start}`}>
            {entryText.substring(marker.start, marker.end)}
          </strong>
        );
      } else if (marker.type === 'highlight') {
        parts.push(
          <mark 
            key={`${keyPrefix}-highlight-${marker.id}`} 
            className="transcript-highlight diagram-highlight"
            title="Diagram highlight"
          >
            {entryText.substring(marker.start, marker.end)}
          </mark>
        );
      }
      
      lastIndex = marker.end;
    });

    // Add remaining text
    if (lastIndex < entryText.length) {
      parts.push(entryText.substring(lastIndex));
    }

    return parts.length > 0 ? parts : entryText;
  };

  // Render paragraph with diagram highlights only
  const renderParagraphWithHighlights = (para, paragraphIndex) => {
    const paraHighlights = highlights.filter(h => h.paragraphIndex === paragraphIndex);
    
    // First, bold vocabulary words
    let processedText = para.text;
    const vocabReplacements = [];
    
    
    if (vocabulary.length > 0) {
      // Sort vocabulary by length (longest first) to match longer phrases first
      const sortedVocab = [...vocabulary].sort((a, b) => b.length - a.length);
      
      sortedVocab.forEach(term => {
        // Skip very short terms (1-2 chars) to avoid over-matching
        if (term.length < 3) return;
        
        // Escape special regex characters
        const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Create regex with word boundaries - case insensitive, global
        const regex = new RegExp(`\\b${escapedTerm}\\b`, 'gi');
        
        let match;
        while ((match = regex.exec(processedText)) !== null) {
          vocabReplacements.push({
            start: match.index,
            end: match.index + match[0].length,
            text: match[0]
          });
        }
      });
    }
    
    if (paraHighlights.length === 0 && vocabReplacements.length === 0) {
      return para.text;
    }

    // Sort highlights by start offset
    const sortedHighlights = [...paraHighlights].sort((a, b) => a.startOffset - b.startOffset);
    
    // Combine vocab replacements and highlights, avoiding overlaps
    const allMarkers = [
      ...sortedHighlights.map(h => ({ type: 'highlight', ...h })),
      ...vocabReplacements.map(v => ({ type: 'vocab', startOffset: v.start, endOffset: v.end, text: v.text }))
    ].sort((a, b) => a.startOffset - b.startOffset);
    
    const parts = [];
    let lastIndex = 0;

    allMarkers.forEach((marker, idx) => {
      // Skip if this marker overlaps with a previous one
      if (marker.startOffset < lastIndex) {
        return;
      }
      
      // Add text before marker
      if (marker.startOffset > lastIndex) {
        parts.push(
          <span key={`text-${lastIndex}`}>
            {para.text.substring(lastIndex, marker.startOffset)}
          </span>
        );
      }
      
      if (marker.type === 'highlight') {
        const highlight = marker;        
        // Only render diagram highlights (orange)
        parts.push(
          <mark 
            key={`highlight-${highlight.id}`} 
            className="transcript-highlight diagram-highlight"
            title="Diagram highlight"
          >
            {para.text.substring(highlight.startOffset, highlight.endOffset)}
          </mark>
        );
        
        lastIndex = highlight.endOffset;
      } else if (marker.type === 'vocab') {
        // Add bolded vocabulary term
        parts.push(
          <strong key={`vocab-${marker.startOffset}`}>
            {para.text.substring(marker.startOffset, marker.endOffset)}
          </strong>
        );
        
        lastIndex = marker.endOffset;
      }
    });

    // Add remaining text
    if (lastIndex < para.text.length) {
      parts.push(
        <span key={`text-${lastIndex}`}>
          {para.text.substring(lastIndex)}
        </span>
      );
    }

    return parts;
  };

  if (loading) {
    return (
      <div className="transcript-browser">
        <div className="transcript-loading">Loading transcript...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="transcript-browser">
        <div className="transcript-error">Error: {error}</div>
      </div>
    );
  }

  if (!transcriptData) {
    return null;
  }

  const startIndex = currentPage * paragraphsPerPage;
  const endIndex = Math.min(startIndex + paragraphsPerPage, paragraphs.length);
  const totalPages = Math.ceil(paragraphs.length / paragraphsPerPage);
  const visibleParagraphs = paragraphs.slice(startIndex, endIndex);

  return (
    <div className="transcript-browser">
      <div className="transcript-header">
        <h3>Transcript</h3>
        <span className="transcript-stats">
          {transcriptData.length} segments • {paragraphs.length} paragraphs
        </span>
      </div>
      
      {totalPages > 1 && (
        <div className="pagination-controls" style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button 
            className="pagination-button"
            onClick={() => setCurrentPage(prev => prev - 1)}
            disabled={currentPage === 0}
            style={{ padding: '0.5rem 1rem', cursor: currentPage === 0 ? 'not-allowed' : 'pointer', opacity: currentPage === 0 ? 0.5 : 1 }}
          >
            ← Previous
          </button>
          <span style={{ fontSize: '0.9rem', color: '#666' }}>
            Page {currentPage + 1} of {totalPages}
          </span>
          <button 
            className="pagination-button"
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={currentPage === totalPages - 1}
            style={{ padding: '0.5rem 1rem', cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer', opacity: currentPage === totalPages - 1 ? 0.5 : 1 }}
          >
            Next →
          </button>
        </div>
      )}
      
      <div className="transcript-paragraphs">
        {visibleParagraphs.map((para, relativeIndex) => {
          const index = startIndex + relativeIndex;
          return (
          <React.Fragment key={index}>
            <div className="transcript-paragraph-container">
              <p 
                className="transcript-paragraph" 
                data-timestamp={para.timestamp}
                style={{ cursor: 'pointer' }}
                >
                {(() => {
                  if (para.entries) {
                    // Render each entry, showing timestamps for active fragments
                    // Calculate character offsets for each entry in the paragraph
                    let charOffset = 0;
                    return para.entries.map((entry, entryIdx) => {
                      const isActive = activeFragments.has(entry.start);
                      const entryOffset = charOffset;
                      charOffset += entry.text.length + 1; // +1 for space
                      
                      return (
                        <span 
                          key={entryIdx}
                          onClick={() => {
                            // Toggle this fragment's active state
                            setActiveFragments(prev => {
                              const newSet = new Set(prev);
                              if (newSet.has(entry.start)) {
                                newSet.delete(entry.start);
                              } else {
                                newSet.add(entry.start);
                              }
                              return newSet;
                            });
                          }}
                          style={{ cursor: 'pointer' }}
                        >
                          {isActive && (
                            <span className="timestamp-marker active" title={`${entry.start.toFixed(2)}s`}>
                              [{Math.floor(entry.start / 60)}:{String(Math.floor(entry.start % 60)).padStart(2, '0')}]
                            </span>
                          )}
                          {' '}{renderEntryText(entry.text, index, entryOffset, `entry-${index}-${entryIdx}`)}{' '}
                        </span>
                      );
                    });
                  } else {
                    // No entries, just render with diagram highlights
                    return renderParagraphWithHighlights(para, index);
                  }
                })()}
              </p>
            </div>
            {showFrames
              .filter(frame => frame.afterParagraphIndex === index)
              .map(frame => (
                <ShowFrame
                  key={frame.id}
                  url={url}
                  time={frame.timestamp}
                  onDelete={() => handleRemoveShowFrame(frame.id)}
                />
              ))
            }
            {diagramsData
              .filter(diagram => {
                const paraStart = para.timestamp;
                const paraEnd = index < paragraphs.length - 1 ? paragraphs[index + 1].timestamp : Infinity;
                return diagram.timestamp >= paraStart && diagram.timestamp < paraEnd;
              })
              .map((diagram, diagIdx) => {
                const minutes = Math.floor(diagram.timestamp / 60);
                const seconds = Math.floor(diagram.timestamp % 60);
                const readableTime = `${minutes}:${String(seconds).padStart(2, '0')}`;
                
                return (
                  <div key={`diagram-${index}-${diagIdx}`} className="transcript-diagram">
                    <img src={diagram.imagePath} alt={`Diagram at ${readableTime}`} />
                    <div className="diagram-caption">
                      <strong>Timestamp {readableTime}:</strong>{' '}
                      {diagram.highlightedText ? (
                        `"${diagram.highlightedText}"`
                      ) : (
                        <span style={{color: '#dc2626'}}>⚠️ No transcript match found (check console)</span>
                      )}
                    </div>
                  </div>
                );
              })
            }
          </React.Fragment>
        );})}
      </div>
      
      {totalPages > 1 && (
        <div className="pagination-controls" style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
          <button 
            className="pagination-button"
            onClick={() => setCurrentPage(prev => prev - 1)}
            disabled={currentPage === 0}
            style={{ padding: '0.5rem 1rem', cursor: currentPage === 0 ? 'not-allowed' : 'pointer', opacity: currentPage === 0 ? 0.5 : 1 }}
          >
            ← Previous
          </button>
          <span style={{ fontSize: '0.9rem', color: '#666' }}>
            Page {currentPage + 1} of {totalPages}
          </span>
          <button 
            className="pagination-button"
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={currentPage === totalPages - 1}
            style={{ padding: '0.5rem 1rem', cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer', opacity: currentPage === totalPages - 1 ? 0.5 : 1 }}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

export default TranscriptBrowser;
