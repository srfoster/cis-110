import React, { useState, useRef, useEffect } from 'react';
import './ShowFrame.css';

function ShowFrame({ url, time, onDelete }) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Extract video ID from various YouTube URL formats
  const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Convert timestamp string (e.g., "1:23" or "12:34" or "01:23") or number (e.g., 123.45) to seconds
  const parseTimestamp = (timestamp) => {
    if (!timestamp) return 0;
    
    // If it's already a number, just return it
    if (typeof timestamp === 'number') {
      return timestamp;
    }
    
    // Remove any surrounding quotes or whitespace
    const cleanTime = timestamp.toString().replace(/["'\s]/g, '');
    
    // Check if it's a pure number string (no colons)
    if (!cleanTime.includes(':')) {
      return parseFloat(cleanTime) || 0;
    }
    
    const parts = cleanTime.split(':').map(part => parseInt(part, 10));
    if (parts.length === 2) {
      return parts[0] * 60 + parts[1]; // minutes:seconds
    } else if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2]; // hours:minutes:seconds
    }
    return 0;
  };

  const videoId = extractVideoId(url);
  const baseSec = parseTimestamp(time);
  const frameId = `showframe-${videoId}-${baseSec}`;
  const localStorageKey = `showframe-override-${frameId}`;
  const zoomStorageKey = `showframe-zoom-${frameId}`;
  
  // Initialize storedTimestamp from localStorage synchronously
  const [storedTimestamp, setStoredTimestamp] = useState(() => {
    console.log(`🔍 Initializing ${frameId}, localStorage key: ${localStorageKey}`);
    try {
      const stored = localStorage.getItem(localStorageKey);
      console.log(`🔍 Retrieved from localStorage:`, stored);
      if (stored !== null) {
        const parsed = parseFloat(stored);
        console.log(`📌 Initial load from localStorage for ${frameId}:`, parsed);
        return parsed;
      } else {
        console.log(`🔍 No stored value found for ${frameId}`);
      }
    } catch (e) {
      console.error('Error loading initial timestamp:', e);
    }
    return null;
  });
  
  const [zoomState, setZoomState] = useState({ scale: 1, x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragEnd, setDragEnd] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const hasAutopaused = useRef(false);

  if (!videoId) {
    return (
      <div className="show-frame-error">
        <p>Invalid YouTube URL: {url}</p>
      </div>
    );
  }

  // Current timestamp - use stored if available, otherwise use prop
  const seconds = storedTimestamp !== null ? storedTimestamp : baseSec;
  
  // Use ref to ensure embedUrl never changes after first render
  // Don't use autoplay - we'll control playback via API after iframe loads
  const embedUrlRef = useRef(null);
  if (embedUrlRef.current === null) {
    embedUrlRef.current = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}&rel=0&modestbranding=1`;
    console.log('📺 Created stable embedUrl (no autoplay, will seek on load)');
  }
  const embedUrl = embedUrlRef.current;
  
  // Format timestamp for display
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Debug: Log when storedTimestamp changes
  useEffect(() => {
    console.log(`🔄 ${frameId} storedTimestamp changed to:`, storedTimestamp);
  }, [storedTimestamp, frameId]);

  // Check localStorage for stored zoom state on mount
  useEffect(() => {
    try {
      const storedZoom = localStorage.getItem(zoomStorageKey);
      if (storedZoom !== null) {
        const parsedZoom = JSON.parse(storedZoom);
        console.log(`🔍 Loaded stored zoom for ${frameId}:`, parsedZoom);
        setZoomState(parsedZoom);
      }
    } catch (e) {
      console.error('Error loading stored zoom:', e);
    }
  }, [frameId, zoomStorageKey]);

  // Listen for localStorage changes from other ShowFrame instances with same frameId
  useEffect(() => {
    const handleTimestampUpdate = (e) => {
      if (e.detail.localStorageKey === localStorageKey) {
        console.log(`🔔 Received timestamp update event for ${frameId}, updating to:`, e.detail.timestamp);
        setStoredTimestamp(e.detail.timestamp);
      }
    };
    
    window.addEventListener('showframe-timestamp-update', handleTimestampUpdate);
    return () => window.removeEventListener('showframe-timestamp-update', handleTimestampUpdate);
  }, [localStorageKey, frameId]);

  // Register this ShowFrame in global registry for external control
  useEffect(() => {
    if (!window.showFrameRegistry) {
      window.showFrameRegistry = [];
    }

    const seekTo = (timestamp) => {
      console.log('ShowFrame seekTo called:', timestamp, 'for frameId:', frameId);
      console.log('Using localStorage key:', localStorageKey);
      
      // Store timestamp in localStorage
      try {
        localStorage.setItem(localStorageKey, timestamp.toString());
        const verification = localStorage.getItem(localStorageKey);
        console.log('💾 Saved timestamp to localStorage:', timestamp, '- Verified:', verification);
        setStoredTimestamp(timestamp);
        console.log('🔄 Called setStoredTimestamp with:', timestamp);
        
        // Dispatch custom event to notify other ShowFrame instances with same frameId
        window.dispatchEvent(new CustomEvent('showframe-timestamp-update', {
          detail: { frameId, localStorageKey, timestamp }
        }));
        console.log('📢 Dispatched custom event for other instances');
      } catch (e) {
        console.error('Error saving timestamp:', e);
      }
      
      // Show the frame if not visible (always try to show)
      setIsVisible(true);
      console.log('👁️ Called setIsVisible(true)');

      // Seek to timestamp using YouTube API
      setTimeout(() => {
        if (iframeRef.current) {
          console.log('Sending seekTo command to YouTube iframe');
          iframeRef.current.contentWindow?.postMessage(
            JSON.stringify({ 
              event: 'command', 
              func: 'seekTo', 
              args: [timestamp, true] 
            }),
            'https://www.youtube.com'
          );
        } else {
          console.log('iframeRef.current is null');
        }
      }, 500); // Delay to ensure iframe is loaded
    };

    const instance = {
      id: frameId,
      videoId,
      baseTime: baseSec,
      domNode: containerRef.current,
      seekTo
    };

    window.showFrameRegistry.push(instance);
    console.log('ShowFrame registered:', frameId, 'Total frames:', window.showFrameRegistry.length);

    return () => {
      // Unregister on unmount
      window.showFrameRegistry = window.showFrameRegistry.filter(
        s => s.id !== frameId
      );
      console.log('ShowFrame unregistered:', frameId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameId, videoId, localStorageKey]); // isVisible and storedTimestamp intentionally omitted - seekTo updates them dynamically

  // Listen for video playing state updates
  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const handleMessage = (event) => {
      if (event.origin !== 'https://www.youtube.com') return;
      
      try {
        const data = JSON.parse(event.data);
        
        // Player state: 1 = playing, 2 = paused
        if (data.event === 'infoDelivery' && data.info && data.info.playerState !== undefined) {
          setIsPlaying(data.info.playerState === 1);
        }
      } catch (e) {
        // Ignore parse errors
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [isVisible]);

  // Enable YouTube API when iframe loads and seek to timestamp
  useEffect(() => {
    if (!isVisible || !iframeRef.current) return;

    const iframe = iframeRef.current;
    const targetTime = seconds; // Capture current timestamp when iframe mounts
    
    const handleLoad = () => {
      // Enable YouTube API
      iframe.contentWindow.postMessage(
        '{"event":"listening","id":"ytplayer"}',
        'https://www.youtube.com'
      );
      
      // Seek to the correct timestamp and play
      setTimeout(() => {
        console.log('📺 Iframe loaded, seeking to:', targetTime);
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'seekTo', args: [targetTime, true] }),
          'https://www.youtube.com'
        );
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
          'https://www.youtube.com'
        );
        // Pause after brief moment to ensure seek completes
        setTimeout(() => {
          iframe.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
            'https://www.youtube.com'
          );
          setIsPlaying(false);
        }, 200);
      }, 500); // Small delay to ensure API is ready
    };

    iframe.addEventListener('load', handleLoad);
    return () => iframe.removeEventListener('load', handleLoad);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]); // Only re-run when visibility changes

  // Track when this ShowFrame is interacted with
  const handleInteraction = () => {
    if (!window.activeVideoComponent) {
      window.activeVideoComponent = frameId;
    } else if (window.activeVideoComponent !== frameId) {
      window.activeVideoComponent = frameId;
      console.log('Active video component changed to:', frameId);
    }
    setIsActive(true);
  };

  // Check if this is the active video component
  useEffect(() => {
    const checkActive = () => {
      setIsActive(window.activeVideoComponent === frameId);
    };
    
    const interval = setInterval(checkActive, 100);
    return () => clearInterval(interval);
  }, [frameId]);

  // Arrow key navigation for seeking
  useEffect(() => {
    if (!isVisible || !isActive) return;

    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      console.log('ShowFrame keydown:', e.key, 'isActive:', isActive, 'currentTime:', seconds);
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const newTime = Math.max(0, seconds - 5);
        console.log('Arrow left - seeking to:', newTime);
        
        // Store absolute timestamp in localStorage
        try {
          localStorage.setItem(localStorageKey, newTime.toString());
          setStoredTimestamp(newTime);
          console.log('💾 Saved timestamp to localStorage:', newTime);
          
          // Notify other instances
          window.dispatchEvent(new CustomEvent('showframe-timestamp-update', {
            detail: { frameId, localStorageKey, timestamp: newTime }
          }));
        } catch (err) {
          console.error('Error saving timestamp:', err);
        }
        
        if (iframeRef.current) {
          iframeRef.current.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func: 'seekTo', args: [newTime, true] }),
            'https://www.youtube.com'
          );
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const newTime = seconds + 5;
        console.log('Arrow right - seeking to:', newTime);
        
        // Store absolute timestamp in localStorage
        try {
          localStorage.setItem(localStorageKey, newTime.toString());
          setStoredTimestamp(newTime);
          console.log('💾 Saved timestamp to localStorage:', newTime);
          
          // Notify other instances
          window.dispatchEvent(new CustomEvent('showframe-timestamp-update', {
            detail: { frameId, localStorageKey, timestamp: newTime }
          }));
        } catch (err) {
          console.error('Error saving timestamp:', err);
        }
        
        if (iframeRef.current) {
          iframeRef.current.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func: 'seekTo', args: [newTime, true] }),
            'https://www.youtube.com'
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, isActive, seconds, frameId, localStorageKey]);

  // Box selection for zoom
  const handleMouseDown = (e) => {
    if (!overlayRef.current) return;
    handleInteraction(); // Make this the active ShowFrame
    const rect = overlayRef.current.getBoundingClientRect();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setDragEnd({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !overlayRef.current) return;
    const rect = overlayRef.current.getBoundingClientRect();
    setDragEnd({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Calculate zoom based on selection box
    const boxWidth = Math.abs(dragEnd.x - dragStart.x);
    const boxHeight = Math.abs(dragEnd.y - dragStart.y);
    
    if (boxWidth < 20 || boxHeight < 20) {
      // Too small, ignore
      return;
    }

    const containerWidth = overlayRef.current.offsetWidth;
    const containerHeight = overlayRef.current.offsetHeight;

    // Calculate scale based on the smaller dimension to ensure entire box is visible
    const scaleX = containerWidth / boxWidth;
    const scaleY = containerHeight / boxHeight;
    const newScale = Math.min(scaleX, scaleY);

    // Calculate center of selection box
    const boxCenterX = (dragStart.x + dragEnd.x) / 2;
    const boxCenterY = (dragStart.y + dragEnd.y) / 2;

    // Calculate translation to center the box
    // After scaling, the box center is at (boxCenterX * newScale, boxCenterY * newScale)
    // We want to move it to the viewport center: (containerWidth / 2, containerHeight / 2)
    const translateX = containerWidth / 2 - boxCenterX * newScale;
    const translateY = containerHeight / 2 - boxCenterY * newScale;

    console.log('Zoom calculation:', {
      boxCenter: [boxCenterX, boxCenterY],
      containerSize: [containerWidth, containerHeight],
      scale: newScale,
      translate: [translateX, translateY]
    });

    const newZoomState = {
      scale: newScale,
      x: translateX,
      y: translateY
    };

    setZoomState(newZoomState);
    
    // Save to localStorage
    try {
      localStorage.setItem(zoomStorageKey, JSON.stringify(newZoomState));
      console.log('💾 Saved zoom state:', newZoomState);
    } catch (e) {
      console.error('Error saving zoom state:', e);
    }
  };

  const handleReset = () => {
    handleInteraction(); // Make this the active ShowFrame
    const resetState = { scale: 1, x: 0, y: 0 };
    setZoomState(resetState);
    
    // Reset timestamp to original
    try {
      localStorage.removeItem(localStorageKey);
      localStorage.removeItem(zoomStorageKey);
      setStoredTimestamp(null);
      console.log('🔄 Reset zoom and timestamp');
      
      // Reload iframe with original timestamp
      if (iframeRef.current) {
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'seekTo', args: [baseSec, true] }),
          'https://www.youtube.com'
        );
      }
    } catch (e) {
      console.error('Error resetting:', e);
    }
  };

  const handlePlayPause = () => {
    if (!iframeRef.current) return;
    handleInteraction(); // Make this the active ShowFrame
    const command = isPlaying ? 'pauseVideo' : 'playVideo';
    console.log('Play/Pause clicked, sending:', command);
    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: command, args: [] }),
      'https://www.youtube.com'
    );
    setIsPlaying(!isPlaying);
  };

  // Calculate selection box dimensions for rendering
  const selectionBox = isDragging ? {
    left: Math.min(dragStart.x, dragEnd.x),
    top: Math.min(dragStart.y, dragEnd.y),
    width: Math.abs(dragEnd.x - dragStart.x),
    height: Math.abs(dragEnd.y - dragStart.y)
  } : null;

  return (
    <div className="show-frame" ref={containerRef} data-frame-id={frameId}>
      <div className="show-frame-controls">
        <button 
          className="show-frame-toggle"
          onClick={() => {
            console.log(`🔘 Button clicked for ${frameId}, isVisible: ${isVisible}, storedTimestamp:`, storedTimestamp);
            setIsVisible(!isVisible);
            if (!isVisible) handleInteraction(); // Make active when opening
          }}
        >
          {isVisible ? (
            storedTimestamp !== null 
              ? `✕ Hide Diagram (${formatTime(storedTimestamp)} 📌)` 
              : `✕ Hide Diagram (${formatTime(baseSec)})`
          ) : (
            storedTimestamp !== null 
              ? `🎬 Show Diagram at ${formatTime(storedTimestamp)} 📌` 
              : `🎬 Show Diagram at ${formatTime(baseSec)}`
          )}
        </button>
        
        {onDelete && (
          <button 
            className="show-frame-delete"
            onClick={(e) => {
              e.stopPropagation();
              if (window.confirm('Delete this video moment?')) {
                onDelete();
              }
            }}
            title="Delete this video moment"
          >
            🗑️ Delete
          </button>
        )}
      </div>
      
      {isVisible && (
        <div 
          className="show-frame-container"
          onMouseEnter={handleInteraction} 
          onClick={handleInteraction}
        >
          <div 
            className={`show-frame-wrapper ${isActive ? 'active' : ''}`}
            style={{
              transform: `translate(${zoomState.x}px, ${zoomState.y}px) scale(${zoomState.scale})`,
              transformOrigin: 'top left'
            }}
          >
            <iframe
              ref={iframeRef}
              src={embedUrl}
              title="YouTube video frame"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div 
            ref={overlayRef}
            className="show-frame-overlay"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {selectionBox && (
              <div 
                className="selection-box"
                style={{
                  left: `${selectionBox.left}px`,
                  top: `${selectionBox.top}px`,
                  width: `${selectionBox.width}px`,
                  height: `${selectionBox.height}px`
                }}
              />
            )}
          </div>
          {(zoomState.scale !== 1 || storedTimestamp !== null) && (
            <button className="reset-button" onClick={handleReset}>
              🔄 Reset
            </button>
          )}
          <button className="play-pause-button" onClick={handlePlayPause}>
            {isPlaying ? '⏸ Pause' : '▶ Play'}
          </button>
          <div className="controls-hint">
            💡 {isActive ? 'Active: ' : ''}Drag to zoom | ← → to seek ±5s
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowFrame;
