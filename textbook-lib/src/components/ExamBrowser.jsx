import React, { useRef, useEffect, useState } from 'react';
import { getAssetUrl } from '../utils/paths';
import resourceCache from '../services/resourceCache';
import './ExamBrowser.css';

function ExamBrowser({ url, title, transcript, transcript_json, currentPath }) {
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const transcriptItemsRef = useRef([]);
  const transcriptContentRef = useRef(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcriptData, setTranscriptData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [groupDuration, setGroupDuration] = useState(0);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [videoFullscreen, setVideoFullscreen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const componentId = 'exam-browser';

  // Track when this ExamBrowser is interacted with
  const overlayRef = useRef(null);

  const handleInteraction = () => {
    if (window.activeVideoComponent !== componentId) {
      window.activeVideoComponent = componentId;
      console.log('Active video component changed to: ExamBrowser');
    }
    setIsActive(true);
    
    // Focus the overlay so it can receive keyboard events
    if (overlayRef.current) {
      overlayRef.current.focus();
      console.log('ExamBrowser overlay focused');
    }
  };

  // Check if this is the active component
  useEffect(() => {
    const checkActive = () => {
      setIsActive(window.activeVideoComponent === componentId);
    };
    
    const interval = setInterval(checkActive, 100);
    return () => clearInterval(interval);
  }, []);

  // Make this active on mount
  useEffect(() => {
    window.activeVideoComponent = componentId;
    setIsActive(true);
    console.log('ExamBrowser mounted and set as active');
  }, []);

  // Initialize transcript from prop or fetch from file
  useEffect(() => {
    const loadTranscript = async () => {
      const transcriptSource = transcript_json || transcript;
      if (!transcriptSource) return;

      try {
        // Check if it's a file path (starts with ./ or / or contains .txt/.json)
        const isFilePath = typeof transcriptSource === 'string' && 
          (transcriptSource.startsWith('./') || 
           transcriptSource.startsWith('/') ||
           transcriptSource.endsWith('.txt') ||
           transcriptSource.endsWith('.json'));

        if (isFilePath) {
          setLoading(true);
          setError(null);
          
          // Construct the fetch URL
          let fetchUrl;
          if (transcriptSource.startsWith('/')) {
            // Absolute path from root - use directly (e.g., /transcripts/file.json)
            fetchUrl = transcriptSource;
          } else if (transcriptSource.startsWith('./')) {
            // Relative path - resolve relative to current page in the textbook directory
            const directoryPath = currentPath && currentPath.includes('.') ? 
              currentPath.split('/').slice(0, -1).join('/') : 
              currentPath;
            const relativePath = transcriptSource.substring(2);
            const fullPath = directoryPath ? 
              `textbook/${directoryPath}/${relativePath}` : 
              `textbook/${relativePath}`;
            fetchUrl = getAssetUrl(fullPath);
          } else {
            // Relative to textbook directory
            fetchUrl = getAssetUrl(`textbook/${transcriptSource}`);
          }

          console.log('ExamBrowser: Fetching transcript from:', fetchUrl);
          const data = await resourceCache.getJSON(fetchUrl);
          setTranscriptData(data);
          setLoading(false);
        } else {
          // It's direct JSON data
          const data = typeof transcriptSource === 'string' ? 
            JSON.parse(transcriptSource) : 
            transcriptSource;
          setTranscriptData(data);
        }
      } catch (e) {
        console.error('Failed to load transcript:', e);
        setError(e.message);
        setLoading(false);
      }
    };

    loadTranscript();
  }, [transcript, transcript_json, currentPath]);

  // Reset group navigation when grouping changes
  useEffect(() => {
    setSelectedGroupIndex(0);
  }, [groupDuration, transcriptData]);

  // Scroll to selected group in transcript list
  useEffect(() => {
    if (transcriptItemsRef.current[selectedGroupIndex] && transcriptContentRef.current) {
      const container = transcriptContentRef.current;
      const item = transcriptItemsRef.current[selectedGroupIndex];
      
      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      
      // Calculate the scroll position to center the item in the container
      const scrollOffset = itemRect.top - containerRect.top + container.scrollTop - (containerRect.height / 2) + (itemRect.height / 2);
      
      container.scrollTo({
        top: scrollOffset,
        behavior: 'smooth'
      });
    }
  }, [selectedGroupIndex]);

  // Keyboard navigation for seeking - use window listener but check isActive
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    
    const handleKeyDown = (event) => {
      // Skip if not this component or if typing in input field
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') return;
      if (!transcriptData || !isActive) {
        console.log('ExamBrowser keydown ignored - isActive:', isActive);
        return;
      }
      
      console.log('ExamBrowser keydown:', event.key, 'isActive:', isActive, 'currentTime:', currentTime);
      
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        event.stopPropagation();
        const newTime = Math.max(0, currentTime - 5);
        console.log('Arrow left - seeking to:', newTime, 'from', currentTime);
        sendPlayerCommand('seekTo', [newTime, true]);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        event.stopPropagation();
        const newTime = Math.min(duration, currentTime + 5);
        console.log('Arrow right - seeking to:', newTime, 'from', currentTime);
        sendPlayerCommand('seekTo', [newTime, true]);
      } else if (event.key === 'Escape' && isFullscreen) {
        event.preventDefault();
        setIsFullscreen(false);
      }
    };

    overlay.addEventListener('keydown', handleKeyDown);
    return () => overlay.removeEventListener('keydown', handleKeyDown);
  }, [transcriptData, isFullscreen, isActive, currentTime, duration]);

  // Extract video ID from various YouTube URL formats
  const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(url);
  
  if (!videoId) {
    return (
      <div className="exam-browser-error">
        <p>Invalid YouTube URL: {url}</p>
      </div>
    );
  }

  // Format seconds to timestamp string
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Send command to YouTube player
  const sendPlayerCommand = (command, args = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const message = {
        event: 'command',
        func: command,
        args: args
      };
      
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify(message),
        'https://www.youtube.com'
      );
    }
  };

  // Playback controls
  const handlePlayPause = () => {
    if (isPlaying) {
      sendPlayerCommand('pauseVideo');
    } else {
      sendPlayerCommand('playVideo');
    }
  };

  const handleSeek = (seconds) => {
    const newTime = Math.max(0, Math.min(currentTime + seconds, duration));
    console.log('ExamBrowser handleSeek:', { seconds, currentTime, duration, newTime });
    sendPlayerCommand('seekTo', [newTime, true]);
  };

  const handlePlaybackSpeed = (speed) => {
    sendPlayerCommand('setPlaybackRate', [speed]);
  };

  const handleSeekToTime = (seconds) => {
    sendPlayerCommand('seekTo', [seconds, true]);
  };

  // Extract video ID from URL
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

  // Create grouped view of transcript
  const getGroupedTranscriptView = () => {
    if (!transcriptData) return [];

    const grouped = groupTranscript(transcriptData, groupDuration);
    
    // Convert to groups for display
    const groups = {};
    grouped.forEach(item => {
      if (!groups[item.group_number]) {
        groups[item.group_number] = {
          start: item.start,
          text: [],
          groupNumber: item.group_number,
          question_number: item.question_number // Preserve question marker
        };
      }
      groups[item.group_number].text.push(item.text);
      
      // If this item has a question_number and the group doesn't, add it
      if (item.question_number && !groups[item.group_number].question_number) {
        groups[item.group_number].question_number = item.question_number;
      }
    });

    return Object.values(groups).map(group => ({
      ...group,
      text: group.text.join(' ')
    }));
  };

  // Listen to player state messages
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== 'https://www.youtube.com') return;
      
      try {
        const data = JSON.parse(event.data);
        
        if (data.event === 'infoDelivery' && data.info) {
          if (data.info.currentTime !== undefined) {
            setCurrentTime(data.info.currentTime);
          }
          if (data.info.duration !== undefined) {
            setDuration(data.info.duration);
          }
          if (data.info.playerState !== undefined) {
            // 1 = playing, 2 = paused
            setIsPlaying(data.info.playerState === 1);
          }
        }
      } catch (e) {
        // Ignore parse errors
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Enable YouTube API when iframe loads and start polling for player state
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const handleLoad = () => {
        // Enable API by sending a listening message
        iframe.contentWindow.postMessage(
          '{"event":"listening","id":"ytplayer"}',
          'https://www.youtube.com'
        );
        setIsPlayerReady(true);
      };

      iframe.addEventListener('load', handleLoad);
      
      // Poll for player state updates every 500ms
      const pollInterval = setInterval(() => {
        if (iframe.contentWindow) {
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"getCurrentTime","args":[]}',
            'https://www.youtube.com'
          );
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"getDuration","args":[]}',
            'https://www.youtube.com'
          );
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"getPlayerState","args":[]}',
            'https://www.youtube.com'
          );
        }
      }, 500);
      
      return () => {
        iframe.removeEventListener('load', handleLoad);
        clearInterval(pollInterval);
      };
    }
  }, []);

  // Build embed URL with API enabled
  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}`;

  return (
    <div 
      ref={containerRef}
      className={`exam-browser ${isFullscreen ? 'exam-browser-fullscreen' : ''} ${isActive ? 'active' : ''}`}
      tabIndex={0}
      onFocus={handleInteraction}
      onClick={handleInteraction}
    >
      <button 
        className="fullscreen-toggle-button"
        onClick={() => {
          handleInteraction();
          setIsFullscreen(!isFullscreen);
        }}
        title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      >
        {isFullscreen ? '✕ Exit Fullscreen' : '⛶ Fullscreen'}
      </button>

      {isFullscreen && (
        <button 
          className="video-fullscreen-toggle-button"
          onClick={() => {
            handleInteraction();
            setVideoFullscreen(!videoFullscreen);
          }}
          title={videoFullscreen ? "Normal layout" : "Enlarge video"}
        >
          {videoFullscreen ? '⇄ Normal' : '⛶ Enlarge Video'}
        </button>
      )}

      <div className={`exam-browser-content ${isFullscreen ? 'split-view' : ''} ${isFullscreen && videoFullscreen ? 'video-fullscreen' : ''}`}>
        <div className="exam-browser-player" onMouseEnter={handleInteraction} onClick={handleInteraction}>
          <div 
            ref={overlayRef}
            className="iframe-overlay" 
            onClick={handleInteraction}
            onMouseEnter={handleInteraction}
            tabIndex={0}
          />
          <iframe
            ref={iframeRef}
            width="100%"
            height="450"
            src={embedUrl}
            title={title || "Student exam recording"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            tabIndex="-1"
          />
        </div>

        {/* Transcript Section */}
        <div className="exam-browser-transcript-container">
          {loading && (
            <div className="exam-browser-transcript">
              <div className="transcript-loading">Loading transcript...</div>
            </div>
          )}
          
          {error && (
            <div className="exam-browser-transcript">
              <div className="transcript-error">Error loading transcript: {error}</div>
            </div>
          )}
          
          {transcriptData && !loading && !error && (() => {
            const groupedView = getGroupedTranscriptView();
            return (
        <div className="exam-browser-transcript">
          <div className="transcript-header">
            <h4>Transcript</h4>
            <span className="transcript-count">
              {transcriptData.length} segments • {groupedView.length} groups
            </span>
          </div>

          <div className="transcript-grouping-control">
            <label htmlFor="group-duration-slider">
              Group Duration: {groupDuration === 0 ? 'Off' : `${groupDuration}s`}
            </label>
            <input
              id="group-duration-slider"
              type="range"
              min="0"
              max="300"
              step="5"
              value={groupDuration}
              onChange={(e) => {
                handleInteraction();
                setGroupDuration(Number(e.target.value));
              }}
              className="group-duration-slider"
            />
          </div>

          <div className="transcript-grouping-control">
            <label htmlFor="group-navigation-slider">
              Navigate by Group: {selectedGroupIndex + 1} / {groupedView.length}
            </label>
            <input
              id="group-navigation-slider"
              type="range"
              min="0"
              max={Math.max(0, groupedView.length - 1)}
              step="1"
              value={selectedGroupIndex}
              onChange={(e) => {                handleInteraction();                const index = Number(e.target.value);
                setSelectedGroupIndex(index);
                if (groupedView[index]) {
                  handleSeekToTime(groupedView[index].start);
                }
              }}
              className="group-duration-slider"
            />
          </div>

          <div className="transcript-content" ref={transcriptContentRef}>
            {groupedView.map((group, index) => (
              <div 
                key={index}
                ref={el => transcriptItemsRef.current[index] = el}
                className={`transcript-item ${Math.abs(currentTime - group.start) < 2 ? 'active' : ''} ${group.question_number ? 'question-start' : ''}`}
              >
                <button
                  className="transcript-timestamp"
                  onClick={() => {
                    handleInteraction();
                    setSelectedGroupIndex(index);
                    handleSeekToTime(group.start);
                  }}
                  title={`Jump to ${formatTime(group.start)}`}
                >
                  {group.question_number && (
                    <span className="question-marker">Q{group.question_number}</span>
                  )}
                  {formatTime(group.start)}
                </button>
                <span className="transcript-text">{group.text}</span>
              </div>
            ))}
          </div>
        </div>
        );
      })()}
        </div>
      </div>
    </div>
  );
}

export default ExamBrowser;
