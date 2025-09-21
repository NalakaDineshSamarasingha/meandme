import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

/*
 * Lottie animation player component
 * Props:
 *  - src: URL to the Lottie JSON file
 *  - loop: boolean (default true)
 *  - autoplay: boolean (default true)
 *  - speed: number (default 1)
 *  - className: styling wrapper
 */
const Lottie = ({ src, loop = true, autoplay = true, speed = 1, className = '', fallback = null }) => {
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      if (!src) {
        setError('No animation source provided');
        setLoading(false);
        return;
      }
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000); // 15s timeout
        const res = await fetch(src, { signal: controller.signal });
        clearTimeout(timeout);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!isMounted) return;
        if (!data || typeof data !== 'object') throw new Error('Invalid animation data');

        // Basic structural validation for common Lottie fields to preempt runtime 'length' errors
        const hasLayersArray = Array.isArray(data.layers);
        const hasVersion = typeof data.v === 'string';
        if (!hasVersion || !hasLayersArray) {
          throw new Error('Malformed Lottie JSON (missing layers or version)');
        }

        if (!containerRef.current) {
          throw new Error('Container not ready');
        }

        try {
          animRef.current = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop,
            autoplay,
            animationData: data,
            rendererSettings: { preserveAspectRatio: 'xMidYMid meet' }
          });
        } catch (inner) {
          throw new Error(inner?.message || 'Failed to initialize animation');
        }

        animRef.current.setSpeed(speed);

        // Lottie internal error events
        animRef.current.addEventListener('data_failed', () => {
          if (isMounted) setError('Animation data failed to parse');
        });
        animRef.current.addEventListener('error', () => {
          if (isMounted) setError('Lottie runtime error');
        });
        animRef.current.addEventListener('DOMLoaded', () => {
          if (isMounted) setLoading(false);
        });
      } catch (e) {
        if (isMounted) {
          setError(e.name === 'AbortError' ? 'Load timeout' : e.message);
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      isMounted = false;
      if (animRef.current) {
        try { animRef.current.destroy(); } catch { /* ignore */ }
      }
    };
  }, [src, loop, autoplay, speed]);

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center text-center text-red-400 text-[11px] space-y-1 bg-red-900/10 border border-red-500/20 rounded-md p-2 ${className}`}>
        <span>Animation error</span>
        <span className="opacity-70">{error}</span>
        {fallback && <div className="mt-1">{fallback}</div>}
      </div>
    );
  }

  return (
    <div className={className} aria-busy={loading} aria-label="lottie-animation-wrapper">
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center text-[10px] tracking-wide text-gray-400 animate-pulse">
          Loading...
        </div>
      )}
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};

export default Lottie;
