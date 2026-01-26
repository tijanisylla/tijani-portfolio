import React from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Terminal } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] p-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Code */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 mb-4">
              404
            </h1>
            <div className="flex items-center justify-center gap-2 text-cyan-500 font-mono text-sm mb-2">
              <Terminal className="w-4 h-4" />
              <span>Page Not Found</span>
            </div>
          </div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Oops! Page not found
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-2">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-[var(--text-muted)] text-sm">
              <span className="text-cyan-500 font-mono">$</span> Error: 404 - Page not found
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="/"
              className="group flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-4 h-4" />
              Go Home
            </motion.a>
            <motion.button
              onClick={() => window.history.back()}
              className="group flex items-center gap-2 px-6 py-3 bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-primary)] font-semibold rounded-lg border border-[var(--border-color)] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </motion.button>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 text-[var(--text-muted)] text-sm font-mono"
          >
            <p>
              <span className="text-cyan-500">//</span> Maybe try navigating from the menu above?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
