'use client';

import { useCallback, useEffect, useState } from 'react';

type Character = {
  char: string;
  x: number;
  y: number;
  speed: number;
};

const CHAR_POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export default function RainingLetters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());

  const createCharacters = useCallback((): Character[] => {
    const charCount = 300;
    const newCharacters: Character[] = [];
    for (let i = 0; i < charCount; i++) {
      newCharacters.push({
        char: CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.1 + Math.random() * 0.3,
      });
    }
    return newCharacters;
  }, []);

  useEffect(() => {
    setCharacters(createCharacters());
  }, [createCharacters]);

  useEffect(() => {
    const updateActiveIndices = () => {
      const newActive = new Set<number>();
      const numActive = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < numActive; i++) {
        newActive.add(Math.floor(Math.random() * characters.length));
      }
      setActiveIndices(newActive);
    };
    const interval = setInterval(updateActiveIndices, 50);
    return () => clearInterval(interval);
  }, [characters.length]);

  useEffect(() => {
    let frameId: number;
    const updatePositions = () => {
      setCharacters((prevChars) =>
        prevChars.map((char) => ({
          ...char,
          y: char.y + char.speed,
          ...(char.y >= 100 && {
            y: -5,
            x: Math.random() * 100,
            char: CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)],
          }),
        })),
      );
      frameId = requestAnimationFrame(updatePositions);
    };
    frameId = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {characters.map((char, index) => {
        const isActive = activeIndices.has(index);
        return (
          <span
            key={index}
            className={`absolute text-xs transition-colors duration-100 ${
              isActive
                ? 'text-[#00ff00] text-base scale-125 z-10 font-bold animate-pulse'
                : 'text-slate-400 font-light'
            }`}
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              transform: `translate(-50%, -50%) ${isActive ? 'scale(1.25)' : 'scale(1)'}`,
              textShadow: isActive
                ? '0 0 8px rgba(255,255,255,0.8), 0 0 12px rgba(255,255,255,0.4)'
                : 'none',
              opacity: isActive ? 1 : 0.7,
              transition: 'color 0.1s, transform 0.1s, text-shadow 0.1s',
              willChange: 'transform, top',
              fontSize: '1.8rem',
            }}
          >
            {char.char}
          </span>
        );
      })}
    </div>
  );
}
