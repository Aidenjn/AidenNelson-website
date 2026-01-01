"use client"
import React from "react";
import FrilledCircle from "@/components/shared/FrilledCircle";
import { motion } from "motion/react";

export default function SocialLinkButton({
  href,
  icon,
}:{
  href: string;
  icon: React.ReactElement;
}) {
  const boxSize = 55;
  const spacingIncrement = 5;

  return (
    <div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="relative inline-flex items-center justify-center"
      >
        {/* Frilled circles (background, transforms together) */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <FrilledCircle
            size={boxSize}
            backgroundColor="var(--color-main-accent)"
            borderRadius={0}
          >
            <FrilledCircle
              size={boxSize - spacingIncrement}
              backgroundColor="var(--color-background)"
              borderRadius={0}
            >
              <FrilledCircle
                size={boxSize - spacingIncrement * 2}
                backgroundColor="var(--color-foreground)"
                borderRadius={0}
              />
            </FrilledCircle>
          </FrilledCircle>
        </div>

        {/* Icon */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 text-background"
        >
          {icon}
        </a>
      </motion.div>
    </div>
  );
}