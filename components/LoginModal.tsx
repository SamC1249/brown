'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
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
            className="bg-offwhite rounded-xl max-w-md w-full p-8 relative shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brown text-offwhite flex items-center justify-center hover:bg-green transition-colors"
            >
              ×
            </button>

            {/* Header */}
            <div className="mb-8">
              <h2 className="font-heading text-3xl font-bold text-brown mb-2">Student Login</h2>
              <p className="font-body text-brown/70 text-sm">
                Only Brown University students can post stories
              </p>
            </div>

            {/* Information boxes */}
            <div className="space-y-4 mb-8">
              <div className="bg-green/10 border border-green/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h3 className="font-heading text-brown font-bold text-sm mb-1">
                      Why Brown Students Only?
                    </h3>
                    <p className="font-body text-brown/80 text-xs">
                      This platform is a safe space for our community to share authentic experiences
                      and support one another during this difficult time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brown/5 rounded-lg p-4">
                <h3 className="font-heading text-brown font-bold text-sm mb-2">
                  What you can do:
                </h3>
                <ul className="space-y-2 font-body text-brown/80 text-xs">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Share your story anonymously or with your name
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Read and heart stories from fellow students
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Reply and offer support to others
                  </li>
                </ul>
              </div>
            </div>

            {/* Login form placeholder */}
            <div className="space-y-4">
              <div>
                <label className="block font-body text-brown text-sm mb-2">Brown Email</label>
                <input
                  type="email"
                  placeholder="your.name@brown.edu"
                  className="w-full px-4 py-3 rounded-lg border border-brown/20 bg-white font-body text-brown placeholder:text-brown/40 focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20"
                  disabled
                />
              </div>

              <div>
                <label className="block font-body text-brown text-sm mb-2">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg border border-brown/20 bg-white font-body text-brown placeholder:text-brown/40 focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20"
                  disabled
                />
              </div>

              <button
                disabled
                className="w-full py-3 bg-brown/50 text-offwhite rounded-lg font-body hover:bg-brown/60 transition-colors cursor-not-allowed"
              >
                Login (Coming Soon)
              </button>

              <p className="text-center font-body text-brown/60 text-xs">
                Authentication will be integrated with Supabase
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-6 border-t border-brown/10">
              <p className="font-body text-brown/70 text-xs text-center">
                By logging in, you agree to use this platform respectfully and in support of the
                Brown community.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
