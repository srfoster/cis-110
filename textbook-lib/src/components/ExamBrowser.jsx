import React, { useRef, useEffect, useState } from 'react';
import { getAssetUrl } from '../utils/paths';
import './ExamBrowser.css';

function ExamBrowser({ url, title, transcript, transcript_json, currentPath }) {
  const iframeRef = useRef(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcriptData, setTranscriptData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [groupDuration, setGroupDuration] = useState(0);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);

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
          const response = await fetch(fetchUrl);
          
          if (!response.ok) {
            throw new Error(`Failed to load transcript: ${response.statusText}`);
          }
          
          const text = await response.text();
          const data = JSON.parse(text);
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
    sendPlayerCommand('seekTo', [newTime, true]);
  };

  const handlePlaybackSpeed = (speed) => {
    sendPlayerCommand('setPlaybackRate', [speed]);
  };

  const handleSeekToTime = (seconds) => {
    sendPlayerCommand('seekTo', [seconds, true]);
  };

  // Group transcript items based on duration threshold
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
          groupNumber: item.group_number
        };
      }
      groups[item.group_number].text.push(item.text);
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

  // Enable YouTube API when iframe loads
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
      return () => iframe.removeEventListener('load', handleLoad);
    }
  }, []);

  // Build embed URL with API enabled
  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}`;

  return (
    <div className="exam-browser">
      <div className="exam-browser-player">
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
        />
      </div>

      {/* Transcript Section */}
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
              max="60"
              step="1"
              value={groupDuration}
              onChange={(e) => setGroupDuration(Number(e.target.value))}
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
              onChange={(e) => {
                const index = Number(e.target.value);
                setSelectedGroupIndex(index);
                if (groupedView[index]) {
                  handleSeekToTime(groupedView[index].start);
                }
              }}
              className="group-duration-slider"
            />
          </div>

          <div className="transcript-content">
            {groupedView.map((group, index) => (
              <div 
                key={index} 
                className={`transcript-item ${Math.abs(currentTime - group.start) < 2 ? 'active' : ''}`}
              >
                <button
                  className="transcript-timestamp"
                  onClick={() => handleSeekToTime(group.start)}
                  title={`Jump to ${formatTime(group.start)}`}
                >
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
  );
}

export default ExamBrowser;
