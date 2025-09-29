import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Simple top progress bar that animates on route change
export default function PageLoader() {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame;
    setVisible(true);
    setProgress(0);

    const start = performance.now();
    const animate = (t) => {
      const elapsed = t - start;
      // Ease towards 90% quickly, then finish later
      const pct = Math.min(90, (elapsed / 400) * 90);
      setProgress(pct);
      if (pct < 90) {
        frame = requestAnimationFrame(animate);
      }
    };
    frame = requestAnimationFrame(animate);

    // Simulate load finish shortly after.
    const finish = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setVisible(false), 250);
    }, 600);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(finish);
    };
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-[999] h-0">
      <div
        className={`h-[2px] origin-left transition-[width,opacity] duration-150 ease-out bg-gradient-to-r from-amber-300 via-amber-200 to-white shadow-[0_0_8px_2px_rgba(251,191,36,0.35)] ${visible ? 'opacity-100' : 'opacity-0'} w-full`}
        style={{ width: progress + '%' }}
      />
    </div>
  );
}
