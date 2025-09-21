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
const WebsitePreview = ({ url, title = 'Website preview', className = '', aspect = 'aspect-[16/9]' }) => {
  const [loading, setLoading] = useState(true);
  const [errored, setErrored] = useState(false);

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
    <div className={`relative w-full ${aspect} bg-gray-800 overflow-hidden rounded-md ${className}`}>
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
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => { setErrored(true); setLoading(false); }}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
};

export default WebsitePreview;
