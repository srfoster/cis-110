import React, { useState, useRef, useEffect } from 'react';
import './ShowFrame.css';

function ShowFrame({ url, time }) {
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef(null);
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

  const seconds = parseTimestamp(time);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?start=${seconds}&autoplay=1&enablejsapi=1&origin=${window.location.origin}&rel=0&modestbranding=1`;

  // Listen for video playing and pause it immediately
  useEffect(() => {
    if (!isVisible) {
      hasAutopaused.current = false;
      return;
    }

    const handleMessage = (event) => {
      if (event.origin !== 'https://www.youtube.com') return;
      
      try {
        const data = JSON.parse(event.data);
        
        // Player state: 1 = playing
        if (data.event === 'infoDelivery' && data.info && data.info.playerState === 1) {
          if (!hasAutopaused.current && iframeRef.current) {
            // Video started playing, pause it immediately
            iframeRef.current.contentWindow.postMessage(
              JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
              'https://www.youtube.com'
            );
            hasAutopaused.current = true;
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

  return (
    <div className="show-frame">
      <button 
        className="show-frame-toggle"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? '✕ Hide Diagram' : '🎬 Show Diagram at ' + time}
      </button>
      
      {isVisible && (
        <div className="show-frame-container">
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
      )}
    </div>
  );
}

export default ShowFrame;
