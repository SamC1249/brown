'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import LoginModal from '@/components/LoginModal';

interface Story {
  id: number;
  author: string;
  year: string;
  content: string;
  tag: 'Story' | 'Thoughts' | 'Hopes';
  hearts: number;
  replies: number;
  timestamp: Date;
  isAnonymous: boolean;
}

// Sample data - will be replaced with Supabase data
const sampleStories: Story[] = [
  {
    id: 1,
    author: 'Sarah M.',
    year: 'Senior',
    content:
      'I was in the library when I heard the alerts. The fear that gripped us was overwhelming, but what happened next showed me the true spirit of Brown. Students helping students, strangers becoming family. We are stronger together.',
    tag: 'Story',
    hearts: 127,
    replies: 23,
    timestamp: new Date('2025-12-15'),
    isAnonymous: false,
  },
  {
    id: 2,
    author: 'Anonymous',
    year: 'Sophomore',
    content:
      'I hope that from this tragedy, we can build something beautiful. A community that truly listens, that truly cares, and that never forgets the importance of looking out for one another.',
    tag: 'Hopes',
    hearts: 203,
    replies: 45,
    timestamp: new Date('2025-12-16'),
    isAnonymous: true,
  },
  {
    id: 3,
    author: 'Michael K.',
    year: 'Junior',
    content:
      'The resilience I have witnessed in our community is extraordinary. We will heal, we will grow, and we will honor those we lost by being better, kinder, and more compassionate.',
    tag: 'Thoughts',
    hearts: 156,
    replies: 31,
    timestamp: new Date('2025-12-17'),
    isAnonymous: false,
  },
  {
    id: 4,
    author: 'Anonymous',
    year: 'Freshman',
    content:
      'As a first-year, this was not how I imagined my Brown experience would begin. But I have seen incredible strength from upperclassmen, faculty, and fellow freshmen. This is what community means.',
    tag: 'Story',
    hearts: 189,
    replies: 52,
    timestamp: new Date('2025-12-14'),
    isAnonymous: true,
  },
  {
    id: 5,
    author: 'Emily R.',
    year: 'Graduate Student',
    content:
      'To the families who lost loved ones: we see you, we remember them, and we carry their memory with us. Ella and Mukhammad will never be forgotten.',
    tag: 'Thoughts',
    hearts: 312,
    replies: 67,
    timestamp: new Date('2025-12-18'),
    isAnonymous: false,
  },
  {
    id: 6,
    author: 'Anonymous',
    year: 'Senior',
    content:
      'I hope we can create lasting change from this. Better mental health resources, stronger community bonds, and a campus where everyone feels safe and supported.',
    tag: 'Hopes',
    hearts: 241,
    replies: 43,
    timestamp: new Date('2025-12-19'),
    isAnonymous: true,
  },
];

type SortOption = 'recent' | 'hearts' | 'replies';
type FilterTag = 'All' | 'Story' | 'Thoughts' | 'Hopes';

function StoryCard({ story }: { story: Story }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasHearted, setHasHearted] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-offwhite rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-green"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-heading text-lg font-bold text-brown">
            {story.isAnonymous ? 'Anonymous' : story.author}
          </h3>
          <p className="font-body text-brown/60 text-sm">{story.year}</p>
        </div>
        <span className="px-3 py-1 bg-brown/10 text-brown rounded-full text-xs font-body">
          {story.tag}
        </span>
      </div>

      {/* Content */}
      <p className="font-body text-brown/90 leading-relaxed mb-4">{story.content}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-brown/10">
        <div className="flex items-center gap-4 text-sm font-body text-brown/60">
          <button
            onClick={() => setHasHearted(!hasHearted)}
            className={`flex items-center gap-1 hover:text-red transition-colors ${
              hasHearted ? 'text-red' : ''
            }`}
          >
            <svg className="w-5 h-5" fill={hasHearted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>{story.hearts + (hasHearted ? 1 : 0)}</span>
          </button>
          <button className="flex items-center gap-1 hover:text-green transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>{story.replies}</span>
          </button>
        </div>
        <span className="text-xs font-body text-brown/50">
          {story.timestamp.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </span>
      </div>
    </motion.article>
  );
}

export default function StoriesPage() {
  const [sortBy, setSortBy] = useState<SortOption>('recent');
  const [filterTag, setFilterTag] = useState<FilterTag>('All');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const filteredAndSortedStories = sampleStories
    .filter((story) => filterTag === 'All' || story.tag === filterTag)
    .sort((a, b) => {
      if (sortBy === 'recent') return b.timestamp.getTime() - a.timestamp.getTime();
      if (sortBy === 'hearts') return b.hearts - a.hearts;
      if (sortBy === 'replies') return b.replies - a.replies;
      return 0;
    });

  // Featured stories (top 3 by hearts)
  const featuredStories = [...sampleStories].sort((a, b) => b.hearts - a.hearts).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-offwhite to-offwhite/80">
      <Sidebar />
      <main className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-brown mb-4">
              Stories of Brown
            </h1>
            <p className="font-body text-lg text-brown/70 mb-8">
              A collection of authentic voices from the Brown community. Share your story, read
              others, and support one another.
            </p>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="px-8 py-3 bg-green text-offwhite rounded-lg font-body hover:bg-green/90 transition-colors shadow-lg"
            >
              Share Your Story
            </button>
          </motion.div>

          {/* Featured Gallery */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="font-heading text-2xl font-bold text-brown mb-6">Featured Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredStories.map((story) => (
                <div
                  key={story.id}
                  className="bg-brown text-offwhite rounded-xl p-6 hover:bg-brown/90 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-red" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-body text-sm">{story.hearts} hearts</span>
                  </div>
                  <p className="font-body text-offwhite/90 text-sm line-clamp-4 mb-3">
                    {story.content}
                  </p>
                  <p className="font-body text-offwhite/70 text-xs">
                    — {story.isAnonymous ? 'Anonymous' : story.author}, {story.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Filters and Sort */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-offwhite rounded-xl shadow-md p-6 mb-8 sticky top-4 z-10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Tag Filters */}
              <div className="flex flex-wrap gap-2">
                <span className="font-body text-brown/70 text-sm mr-2">Filter:</span>
                {(['All', 'Story', 'Thoughts', 'Hopes'] as FilterTag[]).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setFilterTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-body transition-colors ${
                      filterTag === tag
                        ? 'bg-green text-offwhite'
                        : 'bg-brown/10 text-brown hover:bg-brown/20'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <span className="font-body text-brown/70 text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-4 py-2 rounded-lg bg-brown/10 text-brown font-body text-sm border-none focus:outline-none focus:ring-2 focus:ring-green"
                >
                  <option value="recent">Most Recent</option>
                  <option value="hearts">Most Hearts</option>
                  <option value="replies">Most Replies</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Stories Grid */}
          <motion.div layout className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredAndSortedStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredAndSortedStories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-body text-brown/60 text-lg">
                No stories found with the selected filters.
              </p>
            </motion.div>
          )}
        </div>
      </main>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
}
