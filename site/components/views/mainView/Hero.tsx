'use client';

import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import FacePortrait from './FacePortrait';

export default function Hero() {
  return (
    <section className={'flex flex-col md:flex-row-reverse items-center mb-20'}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 mb-8 md:mb-0 w-full flex justify-center"
      >
        <div className="relative w-5/6 aspect-square sm:max-w-3/4 flex justify-center -mb-3 sm:-my-15">
          <FacePortrait />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 sm:mt-10 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 pb-5">
          {'Welcome to my site!'}
          <br />
          {'Scroll down to learn more about me.'}
        </h2>
        <SocialLinks />
      </motion.div>
    </section>
  );
}
