"use client";

import React from "react";

interface FrilledCircleProps {
  size?: number,
  backgroundColor?: string;
  borderRadius?: number;
  href?: string;
  children?: React.ReactNode;
}

// The FrilledCircle component is a decorative container consisting of many layered square divs.

export default function FrilledCircle({
  size = 150,
  backgroundColor = "#ffffff",
  borderRadius = 3,
  href,
  children,
}: FrilledCircleProps) {
  const shift = size / 2;

  const baseSquareStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    width: size,
    height: size,
    left: -shift,
    top: -shift,
    borderRadius: 3,
  };

  return (
    <div className="relative">
      {/* Frontmost square */}
      <div
        className="absolute z-20 flex items-center justify-center"
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
          className={`absolute ${
            i % 2 === 0 ? "z-10" : "z-0"
          }`}
          style={{
            ...baseSquareStyle,
            transform: `rotate(${(i + 1) * 9}deg)`,
          }}
        />
      ))}
    </div>
  );
}