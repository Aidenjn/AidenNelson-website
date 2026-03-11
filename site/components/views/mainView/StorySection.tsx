'use client';

import { motion } from 'framer-motion';
import WavyBorderImage from '@/components/shared/wavyBorderImage/WavyBorderImage';
import { WavyShape } from '@/lib/types/WavyShapes';
import { CustomIcon } from '@/lib/types/CustomIcon';

interface StorySectionProps {
  heading: string;
  image_url: string;
  children: React.ReactNode;
  flow_left: boolean;
  icon: CustomIcon;
}

export default function StorySection({
  heading,
  image_url,
  children,
  flow_left = false,
  icon,
}: StorySectionProps) {
  return (
    <section
      className={`flex flex-col md:flex-row items-center my-20 ${flow_left ? '' : 'md:flex-row-reverse'}`}
    >
      <motion.div
        initial={{ opacity: 0, x: flow_left ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 mb-8 md:mb-0 w-full flex justify-center"
      >
        <div className="relative w-full aspect-square md:max-w-5/6 lg:max-w-3/5">
          <WavyBorderImage
            loadingIcon={icon ? { icontype: 'custom', icon: icon } : undefined}
            imageUrl={image_url}
            shape={WavyShape.Square}
            disableLoadingEffect={false}
            minimumLoadingTimeMS={1000}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: flow_left ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 md:pl-12 md:pr-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-semibold mb-4">
          {heading}
        </h2>
        <p className="text-lg md:text-base lg:text-lg leading-relaxed">{children}</p>
      </motion.div>
    </section>
  );
}
