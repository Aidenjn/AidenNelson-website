'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import WavyBorderImage from '@/components/shared/wavyBorderImage/WavyBorderImage';
import HoverOverlay from '@/components/shared/HoverOverlay';

export interface IPictureCard {
  text: string,
  link: string,
  image?: string,
}

export default function PictureCard({ args }: { args: IPictureCard }) {
  console.log('args: ', args);
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative w-full bg-background rounded-xl overflow-hidden cursor-pointer"
    >
      <Link href={`${args.link}`}>
        <div className="relative w-full aspect-square">
          <WavyBorderImage imageUrl={args.image} />
          <HoverOverlay title={args.text} />
        </div>
      </Link>
    </motion.div>
  );
}