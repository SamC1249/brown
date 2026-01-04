'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

interface Story {
  id: number;
  name: string;
  year: string;
  preview: string;
  fullStory: string;
  imagePlaceholder: string;
}

// Sample data - will be replaced with actual student stories
const stories: Story[] = [
  {
    id: 1,
    name: 'Anonymous',
    year: 'Sophomore',
    preview: 'I was studying in the library when...',
    fullStory:
      'I was studying in the library when I heard the first alerts. The fear that gripped our campus that day is something I will never forget. But what I remember most is how we came together in the aftermath.',
    imagePlaceholder: '/brown/brown-quad.jpg',
  },
  {
    id: 2,
    name: 'Anonymous',
    year: 'Junior',
    preview: 'Brown has always been more than just...',
    fullStory:
      'Brown has always been more than just a university to me. It is a home, a community, a family. The events of December 13th tested us, but they also showed us the strength we have when we stand together.',
    imagePlaceholder: '/brown/brown-campus-dance.jpg',
  },
  {
    id: 3,
    name: 'Sarah M.',
    year: 'Senior',
    preview: 'We lost friends, classmates, people...',
    fullStory:
      'We lost friends, classmates, people who had dreams and futures ahead of them. This space honors their memory and gives us a place to heal together. Their stories will not be forgotten.',
    imagePlaceholder: '/brown/brown-commencement.jpg',
  },
  {
    id: 4,
    name: 'Anonymous',
    year: 'Freshman',
    preview: 'As a first-year student...',
    fullStory:
      'As a first-year student, this was not how I imagined my first semester would end. But the resilience and support I have witnessed from this community has been truly inspiring.',
    imagePlaceholder: '/brown/brown-fall-leaves.jpeg',
  },
  {
    id: 5,
    name: 'Michael K.',
    year: 'Graduate Student',
    preview: 'In times of darkness...',
    fullStory:
      'In times of darkness, we find light in each other. The Brown community has shown incredible strength, compassion, and unity. We will continue to support one another as we heal.',
    imagePlaceholder: '/brown/brown-winter.jpeg',
  },
  {
    id: 6,
    name: 'Anonymous',
    year: 'Senior',
    preview: 'This website is a testament...',
    fullStory:
      'This website is a testament to our community\'s commitment to truth, healing, and support. Every story shared here matters. Every voice deserves to be heard.',
    imagePlaceholder: '/brown/brown-walkpath-afternoon.jpg',
  },
  {
    id: 7,
    name: 'Anonymous',
    year: 'Junior',
    preview: 'The strength of this community...',
    fullStory:
      'The strength of this community lies not in avoiding tragedy, but in how we respond to it. We are here for each other, always.',
    imagePlaceholder: '/brown/brown-commencement-2.jpg',
  },
  {
    id: 8,
    name: 'Emily R.',
    year: 'Senior',
    preview: 'Together we remember...',
    fullStory:
      'Together we remember those we lost. Together we heal. Together we are Brown.',
    imagePlaceholder: '/brown/brown-dance-spring-2024.png',
  },
];

function StoryCard({ story, onClick, size }: { story: Story; onClick: () => void; size: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl cursor-pointer ${size}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="w-full h-full relative">
        <img
          src={story.imagePlaceholder}
          alt={`Story by ${story.name}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hover overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brown/90 p-6 flex flex-col justify-center items-center text-center"
          >
            <h4 className="font-heading text-offwhite text-xl font-bold mb-2">{story.name}</h4>
            <p className="font-body text-offwhite/80 text-sm mb-3">{story.year}</p>
            <p className="font-body text-offwhite/90 text-sm italic">"{story.preview}"</p>
            <button className="mt-4 px-4 py-2 bg-green text-offwhite rounded-md font-body text-sm hover:bg-green/90 transition-colors">
              Read Full Story
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function StoryModal({ story, onClose }: { story: Story | null; onClose: () => void }) {
  if (!story) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-brown/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-offwhite rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brown text-offwhite flex items-center justify-center hover:bg-green transition-colors"
          >
            ×
          </button>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="font-heading text-3xl font-bold text-brown">{story.name}</h3>
            <p className="font-body text-brown/70">{story.year}</p>
            <div className="h-px bg-brown/20 my-6" />
            <p className="font-body text-brown/90 leading-relaxed text-lg whitespace-pre-line">
              {story.fullStory}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ReadStoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <section id="stories" className="min-h-screen bg-gradient-to-b from-offwhite to-offwhite/80 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brown mb-6">
            Read Their Stories
          </h2>
          <p className="font-body text-lg text-brown/70 max-w-2xl mx-auto">
            These are the voices of Brown students. Each story is authentic, personal, and powerful.
            Click on any image to read the full story.
          </p>
        </motion.div>

        {/* Incongruous Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 mb-12"
        >
          {stories.map((story, index) => {
            // Define different sizes for masonry effect
            const sizes = [
              'col-span-1 row-span-1', // Small square
              'col-span-2 row-span-1', // Wide rectangle
              'col-span-1 row-span-2', // Tall rectangle
              'col-span-2 row-span-2', // Large square
              'col-span-1 row-span-1', // Small square
              'col-span-2 row-span-1', // Wide rectangle
              'col-span-1 row-span-2', // Tall rectangle
              'col-span-2 row-span-1', // Wide rectangle
            ];

            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={sizes[index % sizes.length]}
              >
                <StoryCard
                  story={story}
                  onClick={() => setSelectedStory(story)}
                  size="w-full h-full"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="font-body text-brown/70 text-sm">
            All stories are from Brown University students
          </p>
          <Link
            href="/stories"
            className="inline-block px-8 py-3 bg-brown text-offwhite rounded-lg font-body hover:bg-green transition-colors shadow-lg"
          >
            Read All Stories
          </Link>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedStory && <StoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />}
    </section>
  );
}
