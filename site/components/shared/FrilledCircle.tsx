'use client';

import React from 'react';

interface FrilledCircleProps {
  size?: number;
  borderRadius?: number;
  colorClass?: string;
  children?: React.ReactNode;
}

// The FrilledCircle component is a decorative container consisting of many layered square divs.

export default function FrilledCircle({
  size = 150,
  borderRadius = 3,
  colorClass = 'main-accent',
  children,
}: FrilledCircleProps) {
  const shift = size / 2;

  const baseSquareStyle: React.CSSProperties = {
    width: size,
    height: size,
    left: -shift,
    top: -shift,
    borderRadius: borderRadius,
  };

  return (
    <div className="relative">
      {/* Frontmost square */}
      <div
        className={`${colorClass} absolute z-20 flex items-center justify-center`}
        style={{
          ...baseSquareStyle,
        }}
      >
        {children}
      </div>

      {/* Background frill squares */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className={`${colorClass} absolute ${i % 2 === 0 ? 'z-10' : 'z-0'}`}
          style={{
            ...baseSquareStyle,
            transform: `rotate(${(i + 1) * 9}deg)`,
          }}
        />
      ))}
    </div>
  );
}
