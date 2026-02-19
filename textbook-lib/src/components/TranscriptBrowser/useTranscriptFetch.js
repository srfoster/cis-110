import { useState, useEffect } from 'react';
import { getAssetUrl } from '../../utils/paths';

export function useTranscriptFetch(transcript_string, transcript_path) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (transcript_string) {
      setContent(transcript_string);
    } else if (transcript_path) {
      setLoading(true);
      setError(null);
      
      const fetchUrl = getAssetUrl(transcript_path);
      console.log('TranscriptBrowser: Fetching from:', fetchUrl);
      
      fetch(fetchUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch transcript: ${response.statusText}`);
          }
          return response.text();
        })
        .then(text => {
          setContent(text);
          setLoading(false);
        })
        .catch(err => {
          console.error('TranscriptBrowser: Error fetching transcript:', err);
          setError(err.message);
          setLoading(false);
        });
    }
  }, [transcript_string, transcript_path]);

  return { content, loading, error };
}
