'use client';

import { motion } from 'motion/react';

export default function SlideInAnimationDiv({
  flowLeft = false,
  children,
}: Readonly<{
  flowLeft?: boolean;
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0, x: flowLeft ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
