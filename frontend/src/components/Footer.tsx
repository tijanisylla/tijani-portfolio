import React from "react";
import { motion } from "framer-motion";
import { Heart, Terminal, ArrowUp } from "lucide-react";
import { personalInfo } from "../data/mock";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-2 text-[var(--text-primary)] font-bold text-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="font-mono">
                <span className="text-cyan-500">&lt;</span>
                TS
                <span className="text-cyan-500">/&gt;</span>
              </span>
            </motion.a>
            <p className="text-sm text-[var(--text-muted)]">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          {/* Center - Made with love */}
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>using React & TypeScript</span>
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-[var(--bg-secondary)] hover:bg-cyan-500/20 border border-[var(--border-color)] hover:border-cyan-500/50 rounded-xl text-[var(--text-secondary)] hover:text-cyan-500 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
