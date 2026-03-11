'use client';
import React from 'react';
import FrilledCircle from '@/components/shared/FrilledCircle';
import { motion } from 'motion/react';

export default function SocialLinkButton({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactElement;
}) {
  const boxSize = 55;
  const spacingIncrement = 5;
  const shift = boxSize / 2; // 27.5 — matches FrilledCircle's internal offset

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.9 }}
      className="relative block"
      style={{
        width: boxSize,
        height: boxSize,
      }}
    >
      {/* FrilledCircle centered in the space */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: shift,
          top: shift,
        }}
      >
        <FrilledCircle size={boxSize} colorClass="bg-main-accent" borderRadius={0}>
          <FrilledCircle
            size={boxSize - spacingIncrement}
            colorClass="bg-background"
            borderRadius={0}
          >
            <FrilledCircle
              size={boxSize - spacingIncrement * 2}
              colorClass="bg-foreground"
              borderRadius={0}
            />
          </FrilledCircle>
        </FrilledCircle>
      </div>

      {/* Icon centered in the same coordinate space */}
      <div
        className="absolute flex items-center justify-center z-30 text-background text-4xl"
        style={{
          left: 0,
          top: 0,
          width: boxSize,
          height: boxSize,
        }}
      >
        {icon}
      </div>
    </motion.a>
  );
}
