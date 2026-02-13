import React, { useState, useRef, useEffect } from 'react';
import './ShowFrame.css';

function ShowFrame({ url, time }) {
  const [isVisible, setIsVisible] = useState(false);
  const [storedTimestamp, setStoredTimestamp] = useState(null);
  const [zoomState, setZoomState] = useState({ scale: 1, x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragEnd, setDragEnd] = useState({ x: 0, y: 0 });
  const [timeOffset, setTimeOffset] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const hasAutopaused = useRef(false);

  // Extract video ID from various YouTube URL formats
  const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Convert timestamp string (e.g., "1:23" or "12:34" or "01:23") to seconds
  const parseTimestamp = (timestamp) => {
    if (!timestamp) return 0;
    
    // Remove any surrounding quotes or whitespace
    const cleanTime = timestamp.toString().replace(/["'\s]/g, '');
    
    const parts = cleanTime.split(':').map(part => parseInt(part, 10));
    if (parts.length === 2) {
      return parts[0] * 60 + parts[1]; // minutes:seconds
    } else if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2]; // hours:minutes:seconds
    }
    return 0;
  };

  const videoId = extractVideoId(url);
  
  if (!videoId) {
    return (
      <div className="show-frame-error">
        <p>Invalid YouTube URL: {url}</p>
      </div>
    );
  }

  const baseSec = parseTimestamp(time);
  const frameId = `showframe-${videoId}-${baseSec}`;
  const localStorageKey = `showframe-override-${frameId}`;
  const zoomStorageKey = `showframe-zoom-${frameId}`;
  
  // Use stored timestamp if available, otherwise use prop
  const seconds = storedTimestamp !== null ? storedTimestamp : baseSec;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?start=${seconds + timeOffset}&autoplay=1&enablejsapi=1&origin=${window.location.origin}&rel=0&modestbranding=1`;
  
  // Format timestamp for display
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Check localStorage for stored timestamp override and zoom state on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(localStorageKey);
      if (stored !== null) {
        const parsedTime = parseFloat(stored);
        console.log(`📌 Loaded stored timestamp for ${frameId}:`, parsedTime);
        setStoredTimestamp(parsedTime);
      }
      
      const storedZoom = localStorage.getItem(zoomStorageKey);
      if (storedZoom !== null) {
        const parsedZoom = JSON.parse(storedZoom);
        console.log(`🔍 Loaded stored zoom for ${frameId}:`, parsedZoom);
        setZoomState(parsedZoom);
      }
    } catch (e) {
      console.error('Error loading stored data:', e);
    }
  }, [frameId, localStorageKey, zoomStorageKey]);

  // Register this ShowFrame in global registry for external control
  useEffect(() => {
    if (!window.showFrameRegistry) {
      window.showFrameRegistry = [];
    }

    const seekTo = (timestamp) => {
      console.log('ShowFrame seekTo called:', timestamp);
      
      // Store timestamp in localStorage
      try {
        localStorage.setItem(localStorageKey, timestamp.toString());
        setStoredTimestamp(timestamp);
        console.log('💾 Saved timestamp to localStorage:', timestamp);
      } catch (e) {
        console.error('Error saving timestamp:', e);
      }
      
      // Show the frame if not visible (always try to show)
      setIsVisible(true);

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

  // Listen for video playing and pause it immediately (initially), then track state
  useEffect(() => {
    if (!isVisible) {
      hasAutopaused.current = false;
      return;
    }

    const handleMessage = (event) => {
      if (event.origin !== 'https://www.youtube.com') return;
      
      try {
        const data = JSON.parse(event.data);
        
        // Player state: 1 = playing, 2 = paused
        if (data.event === 'infoDelivery' && data.info && data.info.playerState !== undefined) {
          setIsPlaying(data.info.playerState === 1);
          
          // Auto-pause on first load
          if (data.info.playerState === 1 && !hasAutopaused.current && iframeRef.current) {
            iframeRef.current.contentWindow.postMessage(
              JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
              'https://www.youtube.com'
            );
            hasAutopaused.current = true;
            setIsPlaying(false);
          }
        }
      } catch (e) {
        // Ignore parse errors
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [isVisible]);

  // Enable YouTube API when iframe loads
  useEffect(() => {
    if (!isVisible || !iframeRef.current) return;

    const iframe = iframeRef.current;
    const handleLoad = () => {
      iframe.contentWindow.postMessage(
        '{"event":"listening","id":"ytplayer"}',
        'https://www.youtube.com'
      );
    };

    iframe.addEventListener('load', handleLoad);
    return () => iframe.removeEventListener('load', handleLoad);
  }, [isVisible]);

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
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setTimeOffset(prev => prev - 5);
        if (iframeRef.current) {
          iframeRef.current.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func: 'seekTo', args: [seconds + timeOffset - 5, true] }),
            'https://www.youtube.com'
          );
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setTimeOffset(prev => prev + 5);
        if (iframeRef.current) {
          iframeRef.current.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func: 'seekTo', args: [seconds + timeOffset + 5, true] }),
            'https://www.youtube.com'
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, isActive, seconds, timeOffset, frameId]);

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
    setTimeOffset(0);
    try {
      localStorage.removeItem(zoomStorageKey);
      console.log('🔄 Reset zoom state');
    } catch (e) {
      console.error('Error resetting zoom state:', e);
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
      <button 
        className="show-frame-toggle"
        onClick={() => {
          setIsVisible(!isVisible);
          if (!isVisible) handleInteraction(); // Make active when opening
        }}
      >
        {isVisible ? '✕ Hide Diagram' : (
          storedTimestamp !== null 
            ? `🎬 Show Diagram at ${formatTime(storedTimestamp)} 📌` 
            : `🎬 Show Diagram at ${time}`
        )}
      </button>
      
      {isVisible && (
        <div className="show-frame-container" onMouseEnter={handleInteraction} onClick={handleInteraction}>
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
          {(zoomState.scale !== 1 || timeOffset !== 0) && (
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
