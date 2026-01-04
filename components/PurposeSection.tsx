'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    title: 'Truth',
    description:
      'We want a place where people of the Brown community can speak their truth without fear, without filters, and without being silenced. Every voice matters. Every story deserves to be heard.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Permanency',
    description:
      'News cycles change. Headlines fade. But memories and stories remain. This is a place that will not change based on what\'s trending. We are building something that will stand the test of time.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Focus',
    description:
      'This platform exists for one reason: to serve the Brown community. No distractions, no politics, no agendas. Just people supporting people, stories honoring stories, and a community healing together.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
];

function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group"
    >
      {/* Card */}
      <div className="bg-offwhite rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green">
        {/* Icon */}
        <div className="mb-6 text-green group-hover:scale-110 transition-transform duration-300">
          {pillar.icon}
        </div>

        {/* Title */}
        <h3 className="font-display text-3xl font-bold text-brown mb-4">{pillar.title}</h3>

        {/* Description */}
        <p className="font-body text-brown/80 leading-relaxed">{pillar.description}</p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
          className="h-1 bg-green mt-6 rounded-full origin-left"
        />
      </div>
    </motion.div>
  );
}

export default function PurposeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="purpose" className="min-h-screen bg-brown py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite mb-6">
            Our Purpose
          </h2>
          <p className="font-body text-lg md:text-xl text-offwhite/80 max-w-3xl mx-auto leading-relaxed">
            This website was created by students, for students. It stands on three foundational
            pillars that guide everything we do.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} pillar={pillar} index={index} />
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mt-20"
        >
          <div className="bg-offwhite/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-offwhite/20">
            <p className="font-body text-offwhite/90 text-lg md:text-xl leading-relaxed mb-6">
              We are not an institution. We are not a company. We are a community of students who
              care about each other and want to ensure that every voice is heard, every story is
              preserved, and every person is supported.
            </p>
            <div className="h-px bg-offwhite/30 my-6" />
            <p className="font-display text-2xl md:text-3xl text-offwhite font-bold">
              Together, we are Brown.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
