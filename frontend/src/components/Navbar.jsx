import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="flex items-center gap-2 text-white font-bold text-xl"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="font-mono">
              <span className="text-cyan-400">&lt;</span>
              TS
              <span className="text-cyan-400">/&gt;</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-cyan-400"
                    : "text-zinc-400 hover:text-white"
                }`}
                whileHover={{ y: -2 }}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="hidden md:block px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-sm rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="block px-4 py-3 mt-4 bg-cyan-500 text-zinc-950 font-semibold text-sm rounded-lg text-center"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;