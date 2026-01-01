'use client';

import { motion } from 'framer-motion';
import { CustomIcon } from '@/lib/types/CustomIcon';
import CustomIconSVG from '@/components/shared/CustomIconSVG';
import Link from 'next/link';

export default function ClosingStorySection() {
  return (
    <section className="text-center py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        Questions?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto text-lg"
      >
        {'Interested in my work or want to talk? Feel free to explore my '}
        <Link href="/projects" className="nav-link-in-content">
          {'projects'}
        </Link>
        {` or contact me at `}
        <a
          href="mailto:Aidenjn@gmail.com"
          className="nav-link-in-content"
        >
          {'Aidenjn@gmail.com'}
        </a>
        {'.'}
      </motion.p>
    </section>
  );
}
