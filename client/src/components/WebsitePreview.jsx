import React, { useState, useEffect } from 'react';

/*
 * WebsitePreview
 * Renders an iframe preview of an external site with loading + error fallback.
 * Props:
 *  - url (required): full URL of the site to embed
 *  - title: accessible title
 *  - className: wrapper classes
 *  - aspect: tailwind aspect-ratio class (default 16/9 style via padding hack)
 */
const WebsitePreview = ({
  url,
  title = 'Website preview',
  className = '',
  aspect = 'aspect-[16/9]',
  autoScroll = false,
  scrollSpeed = 20, // pixels per second (visual simulation or real step)
  scrollPause = 1500, // pause at top & bottom ms
  scrollStrategy = 'simulate' // 'simulate' | 'postMessage'
}) => {
  const [loading, setLoading] = useState(true);
  const [errored, setErrored] = useState(false);
  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState(1);
  const [handshake, setHandshake] = useState(false); // for postMessage strategy
  const [contentHeight, setContentHeight] = useState(0);
  const frameRef = React.useRef(null);
  const animRef = React.useRef(null);
  const lastTimeRef = React.useRef(null);

  // Simulated scroll (can't access cross-origin iframe content height safely).
  // PostMessage handshake listener
  useEffect(() => {
    if (scrollStrategy !== 'postMessage') return;
    const handler = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === 'PREVIEW_SCROLL_READY') {
        setHandshake(true);
        if (e.data.docHeight) setContentHeight(e.data.docHeight);
      }
      if (e.data.type === 'PREVIEW_SCROLL_INFO' && e.data.docHeight) {
        setContentHeight(e.data.docHeight);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [scrollStrategy]);

  // Attempt handshake pings
  useEffect(() => {
    if (scrollStrategy !== 'postMessage' || !autoScroll || errored) return;
    let attempts = 0;
    const maxAttempts = 20;
    const interval = setInterval(() => {
      if (handshake || attempts >= maxAttempts) {
        clearInterval(interval);
        return;
      }
      attempts++;
      try {
        frameRef.current?.querySelector('iframe')?.contentWindow?.postMessage({ type: 'PREVIEW_SCROLL_INIT' }, '*');
      } catch { /* ignored */ }
    }, 800);
    return () => clearInterval(interval);
  }, [scrollStrategy, autoScroll, errored, handshake]);

  // Simulated scroll OR postMessage scroll driver
  useEffect(() => {
    if (!autoScroll || errored) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }
    const usingPostMessage = scrollStrategy === 'postMessage' && handshake;
    let pauseUntil = 0;
    const maxOffset = usingPostMessage ? Math.max(0, (contentHeight || 0) - 600) : 1200;

    const step = (ts) => {
      if (!lastTimeRef.current) lastTimeRef.current = ts;
      const dt = ts - lastTimeRef.current;
      lastTimeRef.current = ts;

      if (ts < pauseUntil) {
        animRef.current = requestAnimationFrame(step);
        return;
      }

      if (usingPostMessage) {
        // Send step message; target page handles actual scroll
        const delta = (scrollSpeed * (dt / 1000)) * direction;
        try {
          frameRef.current?.querySelector('iframe')?.contentWindow?.postMessage({ type: 'PREVIEW_SCROLL_STEP', delta }, '*');
        } catch { /* ignored */ }
        // Maintain virtual offset for gradient masks
        setOffset(prev => {
          let next = prev + delta;
            if (next >= maxOffset) {
              next = maxOffset;
              setDirection(-1);
              pauseUntil = ts + scrollPause;
            } else if (next <= 0) {
              next = 0;
              setDirection(1);
              pauseUntil = ts + scrollPause;
            }
            return next;
        });
      } else {
        // Simulated translateY strategy
        setOffset(prev => {
          let next = prev + (scrollSpeed * (dt / 1000)) * direction;
          if (next >= maxOffset) {
            next = maxOffset;
            setDirection(-1);
            pauseUntil = ts + scrollPause;
          } else if (next <= 0) {
            next = 0;
            setDirection(1);
            pauseUntil = ts + scrollPause;
          }
          return next;
        });
      }

      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      animRef.current = null;
      lastTimeRef.current = null;
    };
  }, [autoScroll, errored, scrollSpeed, scrollPause, direction, scrollStrategy, handshake, contentHeight]);

  // Detect if content blocked by X-Frame-Options (basic timeout)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        // If still loading after 12s we assume blocked or very slow
        setErrored(true);
        setLoading(false);
      }
    }, 12000);
    return () => clearTimeout(timer);
  }, [loading]);

  return (
  <div className={`relative w-full ${aspect} bg-gray-800 overflow-hidden rounded-md ${className}`} ref={frameRef}>
      {loading && !errored && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-xs text-gray-400 gap-2">
          <div className="h-6 w-6 border-2 border-gray-600 border-t-indigo-400 rounded-full animate-spin" />
          <span>Loading preview...</span>
        </div>
      )}
      {errored && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-[11px] text-gray-400 gap-2 bg-gray-900/60">
          <span className="text-red-300 font-medium">Preview unavailable</span>
          <p className="leading-relaxed">
            The site refused to load in an iframe (X-Frame-Options) or timed out. You can open it directly instead.
          </p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/10 text-[11px]">Open site ↗</a>
        </div>
      )}
      <iframe
        title={title}
        src={url}
        className={`absolute inset-0 w-full h-full ${loading || errored ? 'pointer-events-none' : ''}`}
        style={autoScroll && scrollStrategy === 'simulate' ? { transform: `translateY(-${offset}px)`, transition: 'transform 0.1s linear' } : undefined}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => { setErrored(true); setLoading(false); }}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
      {autoScroll && scrollStrategy === 'postMessage' && !handshake && !errored && (
        <div className="absolute top-2 left-2 text-[10px] px-2 py-1 rounded bg-gray-900/60 border border-gray-700 text-gray-400">
          Trying real scroll...
        </div>
      )}
      {autoScroll && !errored && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-gray-800 via-transparent to-transparent opacity-70" />
      )}
      {autoScroll && !errored && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-70" />
      )}
    </div>
  );
};

export default WebsitePreview;
