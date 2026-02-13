import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ExamQuestions from './ExamQuestions';
import VocabList from './VocabList';
import ConceptMap from './ConceptMap';
import YouTube from './YouTube';
import ExamBrowser from './ExamBrowser';
import ProTip from './ProTip';
import AsAProfessor from './AsAProfessor';
import ShowFrame from './ShowFrame';
import { getAssetUrl } from '../utils/paths';
import compiledContentService from '../services/compiledContentService';
import 'katex/dist/katex.min.css';
import './TextbookPage.css';

// Custom link component for internal textbook links
function TextbookLink({ href, children, currentPath, ...props }) {
  const navigate = useNavigate();
  
  if (!href) {
    return <a {...props}>{children}</a>;
  }
  
  // Handle external links (http, https, mailto, etc.)
  if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('#')) {
    return (
      <a href={href} {...props} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  // Check if this is an internal textbook link (absolute) or old wiki link
  const isAbsoluteInternalLink = href.startsWith('/textbook') || href.startsWith('/wiki');
  
  // Check if this is a relative link (doesn't start with / or protocol)
  const isRelativeLink = !href.startsWith('/') && !href.includes('://');
  
  if (isAbsoluteInternalLink || isRelativeLink) {
    let finalHref;
    
    if (isAbsoluteInternalLink) {
      // Convert old wiki links to textbook links
      finalHref = href.startsWith('/wiki') ? href.replace('/wiki', '/textbook') : href;
    } else if (isRelativeLink) {
      // Resolve relative link based on current path
      const currentDir = currentPath === 'index' ? '' : currentPath;
      const basePath = currentDir ? `/textbook/${currentDir}` : '/textbook';
      finalHref = `${basePath}/${href}`;
    }
    
    return (
      <a
        {...props}
        href={finalHref}
        onClick={(e) => {
          e.preventDefault();
          navigate(finalHref);
        }}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </a>
    );
  }
  
  // For external links, use normal anchor tag
  return (
    <a href={href} {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

// Function to render content with custom components
function renderContentWithComponents(content, textbookPath) {
  console.log('renderContentWithComponents called with content:', content.substring(0, 200) + '...');
  console.log('textbookPath:', textbookPath);
  
  // Look for component markers with optional props
  const combinedRegex = /\{\{(ExamQuestions|VocabList|ConceptMap|YouTube|ExamBrowser|ProTip|AsAProfessor|ShowFrame):([^}\s]+)([^}]*)\}\}/g;
  
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = combinedRegex.exec(content)) !== null) {
    const componentType = match[1];
    const fileName = match[2];
    const propsString = match[3] ? match[3].trim() : '';
    console.log(`Found ${componentType} marker:`, match[0], 'File:', fileName, 'Props:', propsString);
    
    // Parse props from the props string
    const parseProps = (propsStr) => {
      const props = {};
      if (!propsStr) return props;
      
      // Enhanced parsing to handle quoted values, arrays, and other JSON values
      const regex = /(\w+):\s*(\[[^\]]*\]|"[^"]*"|'[^']*'|\S+)/g;
      let match;
      
      while ((match = regex.exec(propsStr)) !== null) {
        const key = match[1];
        let value = match[2];
        
        // Handle arrays (JSON format)
        if (value.startsWith('[') && value.endsWith(']')) {
          try {
            props[key] = JSON.parse(value);
          } catch (error) {
            console.error(`Failed to parse array for ${key}:`, value, error);
            props[key] = value; // fallback to string
          }
        }
        // Handle quoted strings
        else if ((value.startsWith('"') && value.endsWith('"')) || 
                 (value.startsWith("'") && value.endsWith("'"))) {
          props[key] = value.slice(1, -1);
        }
        // Handle other values (strings, numbers, booleans)
        else {
          // Try to parse as JSON for numbers, booleans, etc.
          try {
            props[key] = JSON.parse(value);
          } catch {
            // If JSON parsing fails, keep as string
            props[key] = value;
          }
        }
      }
      
      return props;
    };
    
    const additionalProps = parseProps(propsString);
    
    // Add markdown content before the component
    if (match.index > lastIndex) {
      const markdownContent = content.slice(lastIndex, match.index);
      parts.push(
        <ReactMarkdown 
          key={`md-${parts.length}`}
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
          components={{
            a: (props) => <TextbookLink {...props} currentPath={textbookPath} />
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      );
    }
    
    // Add the appropriate component
    if (componentType === 'ExamQuestions') {
      parts.push(
        <ExamQuestions 
          key={`eq-${parts.length}`}
          yamlPath={fileName} 
          currentPath={textbookPath}
          {...additionalProps}
        />
      );
    } else if (componentType === 'VocabList') {
      parts.push(
        <VocabList 
          key={`vl-${parts.length}`}
          yamlPath={fileName} 
          currentPath={textbookPath}
          {...additionalProps}
        />
      );
    } else if (componentType === 'ConceptMap') {
      console.log('Creating ConceptMap component with props:', { yamlPath: fileName, currentPath: textbookPath, ...additionalProps });
      parts.push(
        <ConceptMap 
          key={`cm-${parts.length}`}
          yamlPath={fileName} 
          currentPath={textbookPath}
          {...additionalProps}
        />
      );
    } else if (componentType === 'YouTube') {
      parts.push(
        <YouTube 
          key={`yt-${parts.length}`}
          url={fileName}
          {...additionalProps}
        />
      );
    } else if (componentType === 'ExamBrowser') {
      parts.push(
        <ExamBrowser 
          key={`eb-${parts.length}`}
          url={fileName}
          currentPath={textbookPath}
          {...additionalProps}
        />
      );
    } else if (componentType === 'ProTip') {
      parts.push(
        <ProTip 
          key={`pt-${parts.length}`}
          type={fileName}
          {...additionalProps}
        />
      );
    } else if (componentType === 'AsAProfessor') {
      parts.push(
        <AsAProfessor 
          key={`prof-${parts.length}`}
          {...additionalProps}
        >
          {additionalProps.content || fileName}
        </AsAProfessor>
      );
    } else if (componentType === 'ShowFrame') {
      parts.push(
        <ShowFrame 
          key={`sf-${parts.length}`}
          url={fileName}
          {...additionalProps}
        />
      );
    }
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining markdown content
  if (lastIndex < content.length) {
    const remainingContent = content.slice(lastIndex);
    parts.push(
      <ReactMarkdown 
        key={`md-${parts.length}`}
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        components={{
          a: (props) => <TextbookLink {...props} currentPath={textbookPath} />
        }}
      >
        {remainingContent}
      </ReactMarkdown>
    );
  }
  
  console.log('renderContentWithComponents: parts.length =', parts.length);
  
  return parts.length > 0 ? parts : [
    <ReactMarkdown 
      key="default"
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeRaw, rehypeKatex]}
      components={{
        a: (props) => <TextbookLink {...props} currentPath={textbookPath} />
      }}
    >
      {content}
    </ReactMarkdown>
  ];
}

function TextbookPage() {
  const { '*': path } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rawContent, setRawContent] = useState(null);
  const [transcript, setTranscript] = useState(null);

  // Default to index if no path provided
  const textbookPath = path || 'index';
  
  // Check if this is a static file (like .json, .txt, etc.)
  const isStaticFile = /\.(json|txt|csv|xml)$/i.test(textbookPath);

  // Extract student name from path (e.g., "students/w26/jacob-d" -> "jacob-d")
  const studentName = textbookPath.match(/students\/w26\/([^/]+)/)?.[1];

  // Load transcript JSON if we're viewing a student page
  useEffect(() => {
    if (!studentName) {
      setTranscript(null);
      return;
    }

    const fetchTranscript = async () => {
      try {
        const transcriptUrl = getAssetUrl(`transcripts/w26/${studentName}.json`);
        const response = await fetch(transcriptUrl);
        if (response.ok) {
          const data = await response.json();
          setTranscript(data);
          console.log(`Loaded transcript for ${studentName}:`, data.length, 'entries');
        } else {
          console.log(`No transcript found for ${studentName}`);
          setTranscript(null);
        }
      } catch (err) {
        console.log(`Failed to load transcript for ${studentName}:`, err);
        setTranscript(null);
      }
    };

    fetchTranscript();
  }, [studentName]);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      setError(null);
      setRawContent(null);
      
      try {
        // Handle static files differently
        if (isStaticFile) {
          const assetUrl = getAssetUrl(`textbook/${textbookPath}`);
          console.log('TextbookPage: Fetching static file from:', assetUrl);
          const response = await fetch(assetUrl);
          
          if (!response.ok) {
            throw new Error(`Failed to load file: ${response.statusText}`);
          }
          
          const text = await response.text();
          
          // Try to parse as JSON for pretty display
          if (textbookPath.endsWith('.json')) {
            try {
              const json = JSON.parse(text);
              setRawContent({ type: 'json', data: json, text });
            } catch {
              setRawContent({ type: 'text', text });
            }
          } else {
            setRawContent({ type: 'text', text });
          }
        } else {
          // Handle markdown files as before
          let text;
          
          // For 'index' path, try index.md directly
          if (textbookPath === 'index') {
            text = await compiledContentService.getText('index.md');
          } else {
            // Strategy: Try multiple path patterns to handle both folder and direct file links
            const pathsToTry = [
              `${textbookPath}.md`,         // For direct file links
              `${textbookPath}/index.md`    // For folder-style links
            ];
            
            const result = await compiledContentService.getTextFromMultiplePaths(pathsToTry);
            text = result.text;
          }

          setContent(text);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [textbookPath, isStaticFile]);

  // Group transcript entries by time duration (same logic as ExamBrowser)
  const groupTranscript = (transcript, maxGroupDuration) => {
    if (!transcript || transcript.length === 0) return [];
    
    if (maxGroupDuration === 0) {
      // Each item gets its own group
      return transcript.map((item, index) => ({
        ...item,
        group_number: index
      }));
    }

    const grouped = [];
    let currentGroupNumber = 0;
    let currentGroupDuration = 0;

    for (let i = 0; i < transcript.length; i++) {
      const item = transcript[i];
      const itemDuration = item.duration || 0;

      // Check if adding this item would exceed the max duration
      if (currentGroupDuration > 0 && currentGroupDuration + itemDuration > maxGroupDuration) {
        // Start a new group
        currentGroupNumber++;
        currentGroupDuration = 0;
      }

      grouped.push({
        ...item,
        group_number: currentGroupNumber
      });

      currentGroupDuration += itemDuration;
    }

    return grouped;
  };

  // Handle text selection and seek to timestamp in ShowFrame
  const handleContentClick = (e) => {
    console.log('Content clicked!', e.target);
    
    // Check if click is within a blockquote
    const isInBlockquote = e.target.closest('blockquote');
    if (!isInBlockquote) {
      console.log('Not in blockquote, ignoring click');
      return;
    }

    console.log('✅ Click is in blockquote');
    console.log('Transcript available:', !!transcript);
    console.log('ShowFrame registry:', window.showFrameRegistry);

    if (!transcript) {
      console.log('No transcript loaded');
      return;
    }

    if (!window.showFrameRegistry || window.showFrameRegistry.length === 0) {
      console.log('No ShowFrames registered');
      return;
    }

    // Get selected text or word under cursor
    let selectedText = window.getSelection().toString().trim();
    
    // If no selection, try to get the word that was clicked
    if (!selectedText && e.target.textContent) {
      const clickedNode = e.target;
      const text = clickedNode.textContent;
      selectedText = text.trim();
    }

    console.log('Selected text:', selectedText);

    if (!selectedText) {
      console.log('No text selected');
      return;
    }

    // MULTI-PASS PROGRESSIVE REFINEMENT:
    // Start with coarse grouping and progressively tighten until we find the most precise match
    const normalizedSearch = selectedText.toLowerCase();
    console.log('Searching for:', normalizedSearch.substring(0, 100) + '...');

    // Progressive group durations: 60s -> 30s -> 15s -> 5s -> 0s (individual entries)
    const groupDurations = [60, 30, 15, 5, 0];
    let currentEntries = transcript; // Start with full transcript
    let lastTimestamp = null;
    let bestTimestamp = null;

    for (let i = 0; i < groupDurations.length; i++) {
      const duration = groupDurations[i];
      console.log(`\nPass ${i + 1}: Grouping with ${duration}s duration`);

      // Group the current set of entries
      const grouped = groupTranscript(currentEntries, duration);
      
      // Build group view with concatenated text
      const groupViews = {};
      grouped.forEach(item => {
        if (!groupViews[item.group_number]) {
          groupViews[item.group_number] = {
            start: item.start,
            text: [],
            entries: []
          };
        }
        groupViews[item.group_number].text.push(item.text);
        groupViews[item.group_number].entries.push(item);
      });

      const groups = Object.values(groupViews).map(group => ({
        ...group,
        text: group.text.join(' ')
      }));

      console.log(`  Searching in ${groups.length} groups`);

      // Find matching group
      const matchingGroup = groups.find(group => 
        group.text && group.text.toLowerCase().includes(normalizedSearch)
      );

      if (!matchingGroup) {
        console.log(`  ❌ No match found at ${duration}s grouping`);
        // No match at this refinement level - use best timestamp from previous pass
        break;
      }

      const matchTimestamp = matchingGroup.entries[0].start;
      console.log(`  ✅ Found match at timestamp ${matchTimestamp} (group has ${matchingGroup.entries.length} entries)`);

      // Check if timestamp changed from last pass
      if (lastTimestamp !== null && matchTimestamp === lastTimestamp) {
        console.log(`  🎯 Delta is zero (${matchTimestamp} === ${lastTimestamp}), stopping refinement`);
        bestTimestamp = matchTimestamp;
        break;
      }

      // Update for next iteration
      lastTimestamp = matchTimestamp;
      bestTimestamp = matchTimestamp;
      currentEntries = matchingGroup.entries; // Narrow down to this group's entries
    }

    if (bestTimestamp === null) {
      console.log('❌ No match found in transcript');
      return;
    }

    console.log(`\n🎯 Final timestamp: ${bestTimestamp}`);

    // Find nearest ShowFrame below the click position
    const clickY = e.clientY;
    console.log('Click Y position:', clickY);
    
    const showFrames = Array.from(document.querySelectorAll('.show-frame'))
      .map(el => ({
        element: el,
        y: el.getBoundingClientRect().top,
        frameId: el.dataset.frameId
      }))
      .filter(frame => frame.y > clickY) // Only frames below click
      .sort((a, b) => a.y - b.y); // Closest first

    console.log('ShowFrames below click:', showFrames);

    if (showFrames.length === 0) {
      console.log('No ShowFrame found below click position');
      return;
    }

    const nearestFrame = showFrames[0];
    console.log('Nearest frame:', nearestFrame);
    
    const frameInstance = window.showFrameRegistry.find(
      s => s.id === nearestFrame.frameId
    );

    console.log('Frame instance:', frameInstance);

    if (frameInstance) {
      console.log('✅ Seeking to', bestTimestamp, 'in ShowFrame', frameInstance.id);
      frameInstance.seekTo(bestTimestamp);
    } else {
      console.log('❌ Frame instance not found in registry');
    }
  };

  if (loading) {
    return (
      <div className="textbook-page loading">
        <div className="textbook-header">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="textbook-page error">
        <div className="textbook-header">
          <h1>Page Not Found</h1>
        </div>
        <div className="textbook-content">
          <p>The requested textbook page could not be found.</p>
          <p><strong>Path:</strong> {textbookPath}</p>
          <p><strong>Error:</strong> {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="textbook-page">
      <div className="textbook-header">
        <div className="textbook-breadcrumb">
          <span>Textbook</span>
          {textbookPath !== 'index' && (
            <span> / {textbookPath.replace(/\//g, ' / ')}</span>
          )}
        </div>
        {transcript && (
          <div style={{ 
            marginTop: '0.5rem', 
            padding: '0.5rem', 
            background: '#e8f4f8', 
            borderRadius: '4px',
            fontSize: '0.85rem',
            color: '#0066cc'
          }}>
            💡 <strong>Tip:</strong> Click any text in blockquotes to jump to that moment in the video
          </div>
        )}
      </div>
      
      <div className="textbook-content" onClick={handleContentClick}>
        {rawContent ? (
          rawContent.type === 'json' ? (
            <pre style={{ 
              background: '#f4f4f4', 
              padding: '1rem', 
              borderRadius: '4px',
              overflow: 'auto',
              maxHeight: '80vh'
            }}>
              {JSON.stringify(rawContent.data, null, 2)}
            </pre>
          ) : (
            <pre style={{ 
              background: '#f4f4f4', 
              padding: '1rem', 
              borderRadius: '4px',
              overflow: 'auto',
              maxHeight: '80vh',
              whiteSpace: 'pre-wrap'
            }}>
              {rawContent.text}
            </pre>
          )
        ) : (
          renderContentWithComponents(content, textbookPath)
        )}
      </div>
    </div>
  );
}

export default TextbookPage;
