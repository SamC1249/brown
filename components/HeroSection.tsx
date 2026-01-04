'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const words = ['To', 'Brown', 'and', 'Her', 'People'];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Fast stagger
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/brown/brown-sunset.jpg"
          alt="Brown University"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-brown/40" />
      </div>

      {/* Animated Text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4"
      >
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-offwhite leading-tight">
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-4 md:mr-6"
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </motion.div>
    </section>
  );
}
