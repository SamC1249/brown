'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'What Happened', href: '#what-happened' },
  { label: 'Their Stories', href: '#stories' },
  { label: 'Brown Community', href: '#brown' },
  { label: 'How to Help', href: '#contribute' },
  { label: 'Our Purpose', href: '#purpose' },
  { label: 'Stories of Brown', href: '/stories' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 md:hidden p-2 rounded-md bg-offwhite/90 backdrop-blur-sm text-brown hover:bg-offwhite transition-colors shadow-lg"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Hover Trigger Area */}
      <div
        className="hidden md:block fixed left-0 top-0 w-4 h-full z-40"
        onMouseEnter={() => setIsHovered(true)}
      />

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen || isHovered ? 0 : -248,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed left-0 top-0 h-screen w-64 bg-offwhite/95 backdrop-blur-md text-brown shadow-2xl z-40 flex flex-col border-r border-brown/10"
      >
        {/* Logo/Title */}
        <div className="p-6 border-b border-brown/10">
          <h1 className="font-display text-xl font-bold leading-tight text-brown">
            To Brown<br />and Her People
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 font-body text-brown/70 hover:text-brown hover:bg-brown/5 transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-brown/10">
          <button className="w-full py-2 px-4 bg-brown/10 text-brown rounded-md hover:bg-brown/20 transition-colors font-body text-sm">
            Student Login
          </button>
          <p className="mt-4 text-xs text-brown/50 font-body text-center">
            By students, for students
          </p>
        </div>
      </motion.aside>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-brown/30 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
