'use client';

import { Recipe } from '@/lib/types/SanityTypes';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import WavyBorderImage from '@/components/shared/wavyBorderImage/WavyBorderImage';
import HoverOverlay from '@/components/shared/HoverOverlay';
import React from 'react';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const imageUrlFetch: string | null = React.useMemo(() => {
    const img = recipe.images?.[0];
    return img ? urlFor(img).width(350).height(350).url() : null;
  }, [recipe.images]);

  const imageUrl: string | undefined = imageUrlFetch ? imageUrlFetch : undefined;

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative w-full bg-background rounded-xl overflow-hidden cursor-pointer"
    >
      <h1>Tata</h1>
      <Link href={`/recipes/${recipe.slug.current}`}>
        <div className="relative w-full aspect-square">
          <WavyBorderImage imageUrl={imageUrl} />
          <HoverOverlay title={recipe.title} />
        </div>
      </Link>
    </motion.div>
  );
}
