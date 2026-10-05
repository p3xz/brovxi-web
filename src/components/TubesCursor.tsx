import React, { useEffect, useRef } from 'react';
// Vendored locally (src/vendor/tubes1.min.js, from threejs-components@0.0.19)
// so no third-party script is fetched from a CDN at runtime.
import TubesCursorFn from '../vendor/tubes1.min.js';

interface TubesCursorProps {
  className?: string;
  interactiveColors?: boolean;
}

export default function TubesCursor({ className = '', interactiveColors = true }: TubesCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const appRef = useRef<any>(null);

  const randomColors = (count: number): string[] => {
    return new Array(count)
      .fill(0)
      .map(() => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
  };

  useEffect(() => {
    let isMounted = true;
    const initTimer = setTimeout(() => {
      if (!isMounted || !canvasRef.current) return;
      try {
        const app = TubesCursorFn(canvasRef.current, {
          tubes: {
            colors: ['#06b6d4', '#3b82f6', '#8b5cf6'],
            lights: {
              intensity: 180,
              colors: ['#06b6d4', '#60a5fa', '#a855f7', '#38bdf8']
            }
          }
        });
        appRef.current = app;
      } catch (err) {
        console.warn('TubesCursor init notice:', err);
      }
    }, 120);

    return () => {
      isMounted = false;
      clearTimeout(initTimer);
      if (appRef.current && typeof appRef.current.dispose === 'function') {
        try {
          appRef.current.dispose();
        } catch {
          // Context already cleaned up
        }
      }
    };
  }, []);

  const handleClick = () => {
    if (!interactiveColors || !appRef.current) return;
    try {
      const newTubeColors = randomColors(3);
      const newLightColors = randomColors(4);
      if (appRef.current.tubes?.setColors) {
        appRef.current.tubes.setColors(newTubeColors);
      }
      if (appRef.current.tubes?.setLightsColors) {
        appRef.current.tubes.setLightsColors(newLightColors);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`fixed inset-0 pointer-events-auto z-0 overflow-hidden ${className}`}
      title="Click to randomize WebGL tube lighting"
    >
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none opacity-50" />
    </div>
  );
}
