'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

interface GoFundMe {
  title: string;
  description: string;
  url: string;
}

interface Petition {
  title: string;
  description: string;
  url: string;
}

const goFundMes: GoFundMe[] = [
  {
    title: 'Chinese-American Victims',
    description: 'Medical expenses for the two Chinese-American shooting victims',
    url: 'https://gofund.me/a24f81c87',
  },
  {
    title: 'Jacob Spears',
    description: 'Medical expenses for Jacob Spears, a freshman from Georgia who was injured',
    url: 'https://gofund.me/a0e5fa366',
  },
  {
    title: 'Matthew Wang',
    description: 'Medical expenses for Matthew Wang, a freshman from Virginia still hospitalized',
    url: 'https://gofund.me/2c14bc858',
  },
];

const petitions: Petition[] = [
  {
    title: 'Unify RISD & Brown Alert Systems',
    description: 'Urge RISD to unify their alert system with Brown\'s (RISD did not alert students until 5:30)',
    url: 'https://www.change.org/p/unify-risd-and-brown-university-campus-alert-systems?source_location=search',
  },
  {
    title: 'Cover Medical & Funeral Expenses',
    description: 'Urge Brown University to cover the medical and funeral expenses of victims',
    url: 'https://www.change.org/p/urge-brown-university-to-cover-victims-medical-and-funeral-expenses?source_location=search',
  },
];

function DonationsCard() {
  const [showAll, setShowAll] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-offwhite rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
    >
      <div className="mb-6">
        <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-offwhite" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-brown mb-2">Donations</h3>
        <p className="font-body text-brown/70">
          Support victims and their families through verified GoFundMe campaigns
        </p>
      </div>

      <div className="space-y-3">
        {goFundMes.map((fund, index) => (
          <a
            key={index}
            href={fund.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-brown/5 rounded-lg hover:bg-brown/10 transition-colors group"
          >
            <h4 className="font-heading text-brown font-bold mb-1 group-hover:text-green transition-colors">
              {fund.title}
            </h4>
            <p className="font-body text-brown/70 text-sm">{fund.description}</p>
          </a>
        ))}
      </div>

      <a
        href={goFundMes[0].url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block w-full py-3 bg-green text-offwhite rounded-lg font-body text-center hover:bg-green/90 transition-colors"
      >
        Donate Now
      </a>
    </motion.div>
  );
}

function WriteStoryCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-offwhite rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
    >
      <div className="mb-6">
        <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-offwhite" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-brown mb-2">Share Your Story</h3>
        <p className="font-body text-brown/70">
          Brown students can share their experiences, thoughts, and hopes for the future
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <p className="font-body text-brown/80 text-sm">Post anonymously or with your name</p>
        </div>
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <p className="font-body text-brown/80 text-sm">Only verified Brown students can post</p>
        </div>
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <p className="font-body text-brown/80 text-sm">Connect with and support other students</p>
        </div>
      </div>

      <Link
        href="/stories"
        className="block w-full py-3 bg-brown text-offwhite rounded-lg font-body text-center hover:bg-brown/90 transition-colors"
      >
        Write Your Story
      </Link>
    </motion.div>
  );
}

function PetitionsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-offwhite rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
    >
      <div className="mb-6">
        <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-offwhite" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-brown mb-2">Sign Petitions</h3>
        <p className="font-body text-brown/70">
          Make your voice heard by supporting important policy changes
        </p>
      </div>

      <div className="space-y-3">
        {petitions.map((petition, index) => (
          <a
            key={index}
            href={petition.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-brown/5 rounded-lg hover:bg-brown/10 transition-colors group"
          >
            <h4 className="font-heading text-brown font-bold mb-1 group-hover:text-green transition-colors">
              {petition.title}
            </h4>
            <p className="font-body text-brown/70 text-sm">{petition.description}</p>
          </a>
        ))}
      </div>

      <a
        href={petitions[0].url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block w-full py-3 bg-brown text-offwhite rounded-lg font-body text-center hover:bg-brown/90 transition-colors"
      >
        View All Petitions
      </a>
    </motion.div>
  );
}

export default function ContributeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contribute" className="min-h-screen bg-gradient-to-b from-offwhite/80 to-offwhite py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brown mb-6">
            How to Contribute
          </h2>
          <p className="font-body text-lg text-brown/70 max-w-2xl mx-auto">
            There are many ways to support the Brown community. Every action, big or small, makes a
            difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DonationsCard />
          <WriteStoryCard />
          <PetitionsCard />
        </div>
      </div>
    </section>
  );
}
