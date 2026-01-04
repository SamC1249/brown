'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface TimelineEvent {
  time: string;
  description: string;
  date?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: 'Dec 13 (Sat)',
    time: '4:00 PM',
    description: 'Shots fired in a classroom at Brown (2 killed, 9 wounded).',
  },
  {
    time: '~4:05 PM',
    description: '911 calls / emergency response begins; campus mobilizes.',
  },
  {
    time: '~4:22 PM',
    description: 'First "active shooter" alert / shelter-in-place messaging begins.',
  },
  {
    time: 'Evening',
    description: 'Campus lockdown continues; police search and public updates roll out.',
  },
  {
    time: 'Late PM',
    description: 'Authorities continue releasing info as the suspect remains at large.',
  },
  {
    time: '2:13 AM',
    description: 'Brown posts an overnight update on Facebook (most recent overnight post).',
  },
  {
    date: 'Dec 14 (Sun)',
    time: '5:42 AM',
    description: 'Brown posts that Providence police advised shelter-in-place has ended.',
  },
];

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 border-l-2 border-brown last:border-transparent"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 bg-green rounded-full transform -translate-x-[9px] ring-4 ring-offwhite" />

      {event.date && (
        <h4 className="font-heading text-lg font-bold text-brown mb-2">{event.date}</h4>
      )}
      <div className="flex gap-4">
        <span className="font-heading text-brown font-bold min-w-[80px]">{event.time}</span>
        <p className="font-body text-brown/80 leading-relaxed">{event.description}</p>
      </div>
    </motion.div>
  );
}

export default function WhatHappenedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="what-happened" className="min-h-screen bg-offwhite py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-brown mb-6">
            What Happened
          </h2>
          <p className="font-body text-lg text-brown/70 mb-8 italic">
            On December 13th, 2025, a day meant for studying and testing quickly turned into a
            nightmare
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4 font-body text-brown/80 leading-relaxed">
              <p>
                Around 4:00 PM EST on December 13th, shots rang out through Room 166 of Brown&apos;s
                Barus and Holley engineering and physics building. Chaos erupted as students hid in
                classrooms, bathrooms, and the basement. The earliest logs from police reports show
                that the shootings occurred around 4:06 PM. At 4:22 PM, Brown issued the first
                warning about an active shooter near the Barus and Holley building. More than 400
                police officers responded to the shooting.
              </p>
              <p>
                Later, it would be identified that the victims killed were Ella Cook, a 19 year old
                Brown sophomore from Alabama, and Mukhammad Aziz Umurzokov, a 18 year old freshman
                from Virginia. 9 others were injured in the shooting.
              </p>
              <p>
                From December 13th to 16th, several suspects had been in custody by local law
                enforcement but there was not enough evidence to prosecute any of them. It was not
                until a Reddit post told investigators to look out for a gray Nissan from Florida
                that the case blew up. Cláudio Manuel Neves Valente was identified, a former Brown
                PhD student from Portugal. Valente was also responsible for the murder of MIT
                physics professor Nuno Loureiro who he shot in Loureiro&apos;s apartment building in
                Brookline, Massachusetts. On December 16th, Valente shot himself in a storage
                facility in Salem, New Hampshire.
              </p>
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            {/* Replace with actual image */}
            <div className="w-full h-full bg-brown/20 flex items-center justify-center">
              <p className="font-body text-brown/50 text-center px-4">
                [Image of Barus and Holley Building]
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="font-heading text-3xl font-bold text-brown mb-12 text-center">
            Timeline of Events
          </h3>
          <div className="max-w-3xl mx-auto">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
