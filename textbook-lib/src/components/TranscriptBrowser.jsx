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
  const [debugParagraphs, setDebugParagraphs] = useState(new Set());
  const [hoveredParagraph, setHoveredParagraph] = useState(null);

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
        
        // Try to restore from localStorage
        const storageKey = `transcript-browser-${transcript_json}`;
        try {
          const stored = localStorage.getItem(storageKey);
          if (stored) {
            const parsed = JSON.parse(stored);
            console.log('Restored from localStorage:', parsed);
            setParagraphs(parsed.paragraphs || baseParagraphs);
            setHighlights(parsed.highlights || []);
            setShowFrames(parsed.showFrames || []);
          } else {
            setParagraphs(baseParagraphs);
          }
        } catch (e) {
          console.error('Failed to restore from localStorage:', e);
          setParagraphs(baseParagraphs);
        }
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
        // Stop if there's a big pause (new paragraph)
        if (nextEntry.start - transcriptData[nextIndex - 1].start > 1.0) {
          break;
        }
        fullText += ' ' + nextEntry.text;
        if (nextEntry.text.includes('.')) {
          foundPeriod = true;
          // Truncate at period
          const periodIdx = fullText.indexOf('.', matchedEntry.text.length);
          if (periodIdx !== -1) {
            fullText = fullText.substring(0, periodIdx + 1);
          }
          break;
        }
        nextIndex++;
      }
      
      console.log(`  Built highlight text: "${fullText.substring(0, 50)}..."`);
      
      // Now find which paragraph contains this text by searching for the actual text content
      let targetParagraphIndex = -1;
      let startOffset = 0;
      let endOffset = 0;
      
      // For short entries (< 10 chars), search for a longer context (first 20+ chars of fullText)
      // For longer entries, search for just the entry text
      const searchText = matchedEntry.text.length < 10 && fullText.length > 20
        ? fullText.substring(0, Math.min(30, fullText.length))
        : matchedEntry.text;
      
      console.log(`  Searching for: "${searchText}"`);
      
      // Normalize text for searching (collapse whitespace, lowercase)
      const normalizeText = (text) => text.toLowerCase().replace(/\s+/g, ' ').trim();
      const normalizedSearchText = normalizeText(searchText);
      
      // Narrow down which paragraphs to search by checking timestamp range
      // Use a wider range (±10 seconds) to account for timing discrepancies
      const candidateParagraphs = [];
      for (let pIdx = 0; pIdx < paragraphs.length; pIdx++) {
        const para = paragraphs[pIdx];
        if (!para.timestamp) continue;
        
        // Check if this paragraph's time range is near our target (within 10 seconds)
        const paraStart = para.timestamp;
        const paraEnd = pIdx < paragraphs.length - 1 ? paragraphs[pIdx + 1].timestamp : Infinity;
        
        if ((targetTime >= paraStart - 10 && targetTime <= paraEnd + 10) ||
            (paraStart >= targetTime - 10 && paraStart <= targetTime + 10)) {
          candidateParagraphs.push({index: pIdx, para});
        }
      }
      
      console.log(`  Found ${candidateParagraphs.length} candidate paragraphs by timestamp (±10s window)`);
      
      for (const {index: pIdx, para} of candidateParagraphs) {
        if (!para.text) continue;
        
        console.log(`  Searching in paragraph ${pIdx} @ ${para.timestamp}s: "${para.text.substring(0, 60)}..."`);
        
        // Try exact match first
        let textIndex = para.text.indexOf(searchText);
        
        // If exact match fails, try normalized matching
        if (textIndex === -1) {
          const normalizedParaText = normalizeText(para.text);
          const normalizedIndex = normalizedParaText.indexOf(normalizedSearchText);
          
          if (normalizedIndex !== -1) {
            // Map normalized position back to original text position
            // Count non-whitespace characters in both strings
            let normalizedCount = 0;
            let origIndex = 0;
            
            // Count characters in normalized text up to match position
            for (let i = 0; i < normalizedIndex; i++) {
              if (normalizedParaText[i] !== ' ') normalizedCount++;
            }
            
            // Find same character count in original text
            let origCount = 0;
            while (origIndex < para.text.length && origCount < normalizedCount) {
              if (para.text[origIndex] !== ' ' && para.text[origIndex] !== '\t' && para.text[origIndex] !== '\n') {
                origCount++;
              }
              origIndex++;
            }
            
            textIndex = origIndex;
            console.log(`  Found normalized match, mapped to position ${textIndex} in original text`);
          }
        }
        
        if (textIndex !== -1) {
          targetParagraphIndex = pIdx;
          startOffset = textIndex;
          
          // Try to find where fullText ends in the paragraph
          // First, try to find the full text
          const fullTextIndex = para.text.indexOf(fullText, textIndex);
          if (fullTextIndex === textIndex) {
            // Full text is in this paragraph
            endOffset = textIndex + fullText.length;
            console.log(`  Found complete fullText at position ${startOffset}`);
          } else {
            // Full text spans beyond this paragraph or was truncated, use what we can
            const periodIndex = para.text.indexOf('.', textIndex + searchText.length);
            if (periodIndex !== -1 && periodIndex > textIndex) {
              endOffset = periodIndex + 1;
              console.log(`  Found period at ${periodIndex}, using that as end`);
            } else {
              endOffset = Math.min(textIndex + fullText.length, para.text.length);
              console.log(`  Using estimated end offset based on fullText length`);
            }
          }
          
          console.log(`  Final highlight: paragraph ${pIdx}, offset ${startOffset}-${endOffset}`);
          break;
        }
      }
      
      if (targetParagraphIndex === -1) {
        console.warn(`❌ Could not find text "${searchText}" in ${candidateParagraphs.length} candidate paragraphs`);
        if (candidateParagraphs.length > 0) {
          console.warn(`  Candidates were:`, candidateParagraphs.map(cp => `P${cp.index} @ ${cp.para.timestamp}s: '${cp.para.text?.substring(0, 50)}...'`));
        }
        // Still store the text for caption even if we can't highlight it
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

  // Save to localStorage whenever highlights, showFrames, or paragraphs change
  useEffect(() => {
    if (!transcript_json || !transcriptData || paragraphs.length === 0) return;
    
    const storageKey = `transcript-browser-${transcript_json}`;
    const dataToSave = {
      highlights: highlights.filter(h => !h.isDiagramHighlight), // Don't save diagram highlights
      showFrames,
      paragraphs
    };
    
    try {
      localStorage.setItem(storageKey, JSON.stringify(dataToSave));
      console.log('Saved to localStorage:', storageKey, dataToSave);
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  }, [highlights, showFrames, paragraphs, transcript_json, transcriptData]);

  // Handler to remove a ShowFrame and its associated yellow highlight
  const handleRemoveShowFrame = (frameId) => {
    const frame = showFrames.find(f => f.id === frameId);
    const highlight = highlights.find(h => h.showFrameId === frameId);
    
    if (!frame) {
      console.warn('ShowFrame not found:', frameId);
      return;
    }
    
    if (!highlight) {
      // Just remove the frame if no highlight is associated
      setShowFrames(prev => prev.filter(f => f.id !== frameId));
      console.log('Deleted ShowFrame (no associated highlight)');
      return;
    }
    
    // Check if we should merge split paragraphs
    const splitIndex = frame.afterParagraphIndex;
    const firstPara = paragraphs[splitIndex];
    const secondPara = paragraphs[splitIndex + 1];
    
    // Only merge if both paragraphs exist AND they share the same entries array
    if (firstPara && secondPara && firstPara.entries === secondPara.entries) {
      // Merge the two paragraphs back together
      const mergedParagraph = {
        ...firstPara,
        text: firstPara.text + ' ' + secondPara.text
      };
      
      // Create new paragraphs array with the merged paragraph
      const newParagraphs = [
        ...paragraphs.slice(0, splitIndex),
        mergedParagraph,
        ...paragraphs.slice(splitIndex + 2)
      ];
      
      setParagraphs(newParagraphs);
      
      // Adjust highlight indices (anything after the merged point needs to be decremented)
      setHighlights(prev => prev
        .filter(h => h.id !== highlight.id) // Remove the associated highlight
        .map(h => h.paragraphIndex > splitIndex 
          ? { ...h, paragraphIndex: h.paragraphIndex - 1 }
          : h
        )
      );
      
      // Adjust ShowFrame indices and remove this frame
      setShowFrames(prev => prev
        .filter(f => f.id !== frameId) // Remove this ShowFrame
        .map(f => f.afterParagraphIndex > splitIndex
          ? { ...f, afterParagraphIndex: f.afterParagraphIndex - 1 }
          : f
        )
      );
      
      console.log('Merged split paragraphs and deleted highlight/ShowFrame');
      return;
    }
    
    // If no merge needed, just remove both
    setHighlights(prev => prev.filter(h => h.id !== highlight.id));
    setShowFrames(prev => prev.filter(f => f.id !== frameId));
    console.log('Deleted highlight and ShowFrame (no merge needed)');
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
  const handleMouseUp = (e, paragraphIndex) => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    
    if (!selectedText) return;

    // Get the range of the selection
    const range = selection.getRangeAt(0);
    const container = e.currentTarget;
    
    // Create a range for the entire paragraph to calculate offsets
    const fullRange = document.createRange();
    fullRange.selectNodeContents(container);
    fullRange.setEnd(range.startContainer, range.startOffset);
    const startOffset = fullRange.toString().length;
    fullRange.setEnd(range.endContainer, range.endOffset);
    const endOffset = fullRange.toString().length;

    // Find next period after the selection
    const paragraph = paragraphs[paragraphIndex];
    const periodIndex = paragraph.text.indexOf('.', endOffset);
    
    // Calculate timestamp for the highlighted text
    let highlightTimestamp = paragraph.timestamp;
    if (paragraph.entries && paragraph.entries.length > 0) {
      // Build character offset to entry mapping
      let charOffset = 0;
      for (let i = 0; i < paragraph.entries.length; i++) {
        const entry = paragraph.entries[i];
        const entryTextLength = entry.text.length;
        
        // Check if the highlight starts within this entry
        // Each entry is followed by a space (except the last one)
        if (startOffset >= charOffset && startOffset < charOffset + entryTextLength) {
          highlightTimestamp = entry.start;
          console.log(`Found highlight at offset ${startOffset}, charOffset ${charOffset}, entry ${i}:`, entry.text, 'timestamp:', highlightTimestamp);
          break;
        }
        
        // Move to next entry (add entry length + 1 for the space)
        charOffset += entryTextLength + 1;
      }
      
      // If we didn't find it, use the last entry's timestamp
      if (highlightTimestamp === paragraph.timestamp && paragraph.entries.length > 0) {
        const lastEntry = paragraph.entries[paragraph.entries.length - 1];
        highlightTimestamp = lastEntry.start;
        console.log(`Highlight not found in entries, using last entry timestamp:`, highlightTimestamp);
      }
    }
    
    if (periodIndex !== -1 && periodIndex < paragraph.text.length - 1) {
      // Split the paragraph at the period
      const splitPoint = periodIndex + 1; // Include the period
      const firstPart = paragraph.text.substring(0, splitPoint).trim();
      const secondPart = paragraph.text.substring(splitPoint).trim();
      
      // Create new paragraphs array
      const newParagraphs = [
        ...paragraphs.slice(0, paragraphIndex),
        { ...paragraph, text: firstPart, entries: paragraph.entries },
        { ...paragraph, text: secondPart, timestamp: paragraph.timestamp, entries: paragraph.entries },
        ...paragraphs.slice(paragraphIndex + 1)
      ];
      
      setParagraphs(newParagraphs);
      
      // Adjust highlight indices for paragraphs after the split
      setHighlights(prev => prev.map(h => 
        h.paragraphIndex > paragraphIndex 
          ? { ...h, paragraphIndex: h.paragraphIndex + 1 }
          : h
      ));
      
      // Adjust ShowFrame indices for frames after the split
      setShowFrames(prev => prev.map(frame =>
        frame.afterParagraphIndex >= paragraphIndex
          ? { ...frame, afterParagraphIndex: frame.afterParagraphIndex + 1 }
          : frame
      ));
      
      // Add a new ShowFrame at the split point
      const showFrameId = Date.now();
      const newShowFrame = {
        id: showFrameId,
        afterParagraphIndex: paragraphIndex,
        timestamp: highlightTimestamp
      };
      
      setShowFrames(prev => [...prev, newShowFrame]);
      
      // Add the new highlight linked to the ShowFrame
      const newHighlight = {
        id: Date.now() + 1, // Offset to avoid ID collision
        paragraphIndex,
        startOffset,
        endOffset: Math.min(endOffset, splitPoint),
        text: selectedText,
        showFrameId: showFrameId
      };
      
      setHighlights(prev => [...prev, newHighlight]);
      
      console.log('Added highlight, split paragraph, and inserted ShowFrame:', newHighlight, newShowFrame);
    } else {
      // No period found or at end - create ShowFrame at end of paragraph without splitting
      const showFrameId = Date.now();
      const newShowFrame = {
        id: showFrameId,
        afterParagraphIndex: paragraphIndex,
        timestamp: highlightTimestamp
      };
      
      setShowFrames(prev => [...prev, newShowFrame]);
      
      const newHighlight = {
        id: Date.now() + 1,
        paragraphIndex,
        startOffset,
        endOffset,
        text: selectedText,
        showFrameId: showFrameId
      };
      
      setHighlights(prev => [...prev, newHighlight]);
      console.log('Added highlight and ShowFrame at end (no split):', newHighlight, newShowFrame);
    }
    
    // Clear selection
    selection.removeAllRanges();
  };

  // Render paragraph with highlights applied
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
        parts.push(
          <mark 
            key={`highlight-${highlight.id}`} 
            className={highlight.isDiagramHighlight ? "transcript-highlight diagram-highlight" : "transcript-highlight"}
            onContextMenu={(e) => {
              e.preventDefault();
              e.stopPropagation();
              
              // Diagram highlights are not deletable
              if (highlight.isDiagramHighlight) {
                return;
              }
              
              // If this highlight has a ShowFrame, check if we should merge split paragraphs
              if (highlight.showFrameId) {
                const frame = showFrames.find(f => f.id === highlight.showFrameId);
                if (frame) {
                  const splitIndex = frame.afterParagraphIndex;
                  const firstPara = paragraphs[splitIndex];
                  const secondPara = paragraphs[splitIndex + 1];
                  
                  // Only merge if both paragraphs exist AND they share the same entries array
                  // (which indicates they came from the same split)
                  if (firstPara && secondPara && firstPara.entries === secondPara.entries) {
                    // Merge the two paragraphs back together
                    const mergedParagraph = {
                      ...firstPara,
                      text: firstPara.text + ' ' + secondPara.text
                    };
                    
                    // Create new paragraphs array with the merged paragraph
                    const newParagraphs = [
                      ...paragraphs.slice(0, splitIndex),
                      mergedParagraph,
                      ...paragraphs.slice(splitIndex + 2)
                    ];
                    
                    setParagraphs(newParagraphs);
                    
                    // Adjust highlight indices (anything after the merged point needs to be decremented)
                    setHighlights(prev => prev
                      .filter(h => h.id !== highlight.id) // Remove this highlight
                      .map(h => h.paragraphIndex > splitIndex 
                        ? { ...h, paragraphIndex: h.paragraphIndex - 1 }
                        : h
                      )
                    );
                    
                    // Adjust ShowFrame indices and remove this frame
                    setShowFrames(prev => prev
                      .filter(f => f.id !== highlight.showFrameId) // Remove this ShowFrame
                      .map(f => f.afterParagraphIndex > splitIndex
                        ? { ...f, afterParagraphIndex: f.afterParagraphIndex - 1 }
                        : f
                      )
                    );
                    
                    console.log('Merged split paragraphs and deleted highlight/ShowFrame');
                    return;
                  }
                }
                
                // If no merge needed but has ShowFrame, just remove both
                setHighlights(prev => prev.filter(h => h.id !== highlight.id));
                setShowFrames(prev => prev.filter(f => f.id !== highlight.showFrameId));
                console.log('Deleted highlight and ShowFrame (no merge needed)');
                return;
              }
              
              // If no ShowFrame, just delete the highlight
              setHighlights(prev => prev.filter(h => h.id !== highlight.id));
            }}
            title={highlight.isDiagramHighlight ? "Diagram highlight" : "Right-click to remove highlight"}
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

  const toggleDebugMode = (index) => {
    setDebugParagraphs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="transcript-browser">
      <div className="transcript-header">
        <h3>Transcript</h3>
        <span className="transcript-stats">
          {transcriptData.length} segments • {paragraphs.length} paragraphs
        </span>
      </div>
      
      <div className="transcript-paragraphs">
        {paragraphs.map((para, index) => (
          <React.Fragment key={index}>
            <div 
              className="transcript-paragraph-container"
              onMouseEnter={() => setHoveredParagraph(index)}
              onMouseLeave={() => setHoveredParagraph(null)}
              style={{ position: 'relative' }}
            >
              {hoveredParagraph === index && para.entries && (
                <button
                  className="paragraph-debug-button"
                  onClick={() => toggleDebugMode(index)}
                  title={debugParagraphs.has(index) ? "Hide timestamps" : "Show timestamps"}
                >
                  🐛 {debugParagraphs.has(index) ? 'Hide' : 'Show'} Timestamps
                </button>
              )}
              <p 
                className="transcript-paragraph" 
                data-timestamp={para.timestamp}
                onMouseUp={(e) => handleMouseUp(e, index)}
                style={{ cursor: 'text' }}
                >
                {debugParagraphs.has(index) && para.entries ? (
                  // Debug mode: show each entry with its timestamp
                  para.entries.map((entry, entryIdx) => (
                    <span key={entryIdx}>
                      <span className="timestamp-marker" title={`${entry.start.toFixed(2)}s`}>
                        [{Math.floor(entry.start / 60)}:{String(Math.floor(entry.start % 60)).padStart(2, '0')}]
                      </span>
                      {' '}{entry.text}{' '}
                    </span>
                  ))
                ) : (
                  // Normal mode: render with highlights
                  renderParagraphWithHighlights(para, index)
                )}
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
        ))}
      </div>
    </div>
  );
}

export default TranscriptBrowser;
