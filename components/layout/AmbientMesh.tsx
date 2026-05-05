'use client';

import { useEffect, useRef } from 'react';

/**
 * AmbientMesh — animated gradient field with cursor-reactive glow.
 *
 * Two layers:
 *   1. Drifting gradient blobs (CSS keyframes) — fixed full-viewport
 *   2. Cursor-reactive accent glow that follows the mouse (desktop only)
 *
 * Inspired by Cursor.com / Linear / Vercel hero treatments.
 * Mobile-friendly (cursor glow disabled), respects prefers-reduced-motion.
 */
export default function AmbientMesh() {
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    if (window.matchMedia('(hover: none)').matches) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {/* Hero center halo — large pulsing red core */}
      <div
        className="absolute rounded-full animate-mesh-drift-1"
        style={{
          top: '-25%',
          left: '50%',
          marginLeft: '-45vw',
          width: '90vw',
          height: '90vw',
          maxWidth: '1400px',
          maxHeight: '1400px',
          background:
            'radial-gradient(circle at center, rgba(239, 68, 68, 0.55) 0%, rgba(239, 68, 68, 0.08) 40%, transparent 65%)',
          filter: 'blur(70px)',
          willChange: 'transform',
        }}
      />

      {/* Right ember */}
      <div
        className="absolute rounded-full animate-mesh-drift-2"
        style={{
          top: '10%',
          right: '-20%',
          width: '70vw',
          height: '70vw',
          maxWidth: '1100px',
          maxHeight: '1100px',
          background:
            'radial-gradient(circle at center, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.05) 45%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />

      {/* Warm amber accent left */}
      <div
        className="absolute rounded-full animate-mesh-drift-3"
        style={{
          top: '40%',
          left: '-15%',
          width: '60vw',
          height: '60vw',
          maxWidth: '900px',
          maxHeight: '900px',
          background:
            'radial-gradient(circle at center, rgba(255, 145, 100, 0.28) 0%, rgba(255, 145, 100, 0.04) 45%, transparent 70%)',
          filter: 'blur(90px)',
          willChange: 'transform',
        }}
      />

      {/* Bottom glow */}
      <div
        className="absolute rounded-full animate-mesh-drift-4"
        style={{
          bottom: '-20%',
          left: '15%',
          width: '70vw',
          height: '70vw',
          maxWidth: '1000px',
          maxHeight: '1000px',
          background:
            'radial-gradient(circle at center, rgba(239, 68, 68, 0.3) 0%, rgba(239, 68, 68, 0.04) 45%, transparent 70%)',
          filter: 'blur(85px)',
          willChange: 'transform',
        }}
      />

      {/* Cursor-reactive glow (desktop only) */}
      <div
        ref={cursorGlowRef}
        className="hidden md:block absolute pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          left: 0,
          top: 0,
          background:
            'radial-gradient(circle at center, rgba(239, 68, 68, 0.18) 0%, rgba(239, 68, 68, 0.04) 40%, transparent 65%)',
          filter: 'blur(40px)',
          willChange: 'transform',
        }}
      />

      {/* Animated grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(242, 237, 230, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(242, 237, 230, 0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
