'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Gallery images with captions
const galleryImages = [
  {
    id: 1,
    src: '/brown/brown-quad.jpg',
    alt: 'Brown University Main Green',
    caption: 'The Main Green - Heart of campus life',
  },
  {
    id: 2,
    src: '/brown/brown-campus-dance.jpg',
    alt: 'Students dancing',
    caption: 'Community celebrations bring us together',
  },
  {
    id: 3,
    src: '/brown/brown-commencement.jpg',
    alt: 'Commencement ceremony',
    caption: 'Celebrating achievements and new beginnings',
  },
  {
    id: 4,
    src: '/brown/brown-fall-leaves.jpeg',
    alt: 'Campus in autumn',
    caption: 'Fall colors transform our campus',
  },
  {
    id: 5,
    src: '/brown/brown-winter.jpeg',
    alt: 'Winter campus',
    caption: 'Winter brings quiet beauty to Brown',
  },
  {
    id: 6,
    src: '/brown/brown-walkpath-afternoon.jpg',
    alt: 'Students walking on campus',
    caption: 'Paths we walk together',
  },
];

export default function BrownGallerySection() {
  const ref = useRef(null);
  const quoteRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isQuoteInView = useInView(quoteRef, { once: true, margin: '-100px' });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToImage = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="brown" className="min-h-screen bg-brown text-offwhite py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            The Brown Community
          </h2>
          <p className="font-body text-lg text-offwhite/80 max-w-2xl mx-auto">
            More than an institution, Brown is a community of people who care for one another, who
            dream together, and who stand together in the face of adversity.
          </p>
        </motion.div>

        {/* Slideshow */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-brown/20">
            {/* Images */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-offwhite/20 backdrop-blur-sm hover:bg-offwhite/30 transition-colors flex items-center justify-center group"
            >
              <svg className="w-6 h-6 text-offwhite" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-offwhite/20 backdrop-blur-sm hover:bg-offwhite/30 transition-colors flex items-center justify-center group"
            >
              <svg className="w-6 h-6 text-offwhite" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-offwhite w-8'
                      : 'bg-offwhite/40 hover:bg-offwhite/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Caption */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-6 text-center font-body text-offwhite/80 text-lg italic"
            >
              {galleryImages[currentIndex].caption}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Centerpiece Quote */}
        <motion.div
          ref={quoteRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isQuoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center py-16 px-6"
        >
          <div className="relative">
            {/* Quotation marks */}
            <div className="absolute -top-8 -left-4 text-8xl text-green/30 font-display">"</div>
            <div className="absolute -bottom-8 -right-4 text-8xl text-green/30 font-display">"</div>

            {/* Quote content */}
            <blockquote className="relative z-10">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8 text-offwhite">
                Brown isn&apos;t just a place where we learn. It&apos;s where we become who we are meant to
                be. It&apos;s where we find our voice, our purpose, and our community. What happened here
                will never define us, but how we respond will.
              </p>
              <footer className="font-body text-offwhite/80 text-lg">
                <cite className="not-italic">— Anonymous Brown Student</cite>
              </footer>
            </blockquote>
          </div>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isQuoteInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-offwhite/30 to-transparent max-w-2xl mx-auto"
        />
      </div>
    </section>
  );
}
