import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { personalInfo } from "../data/mock";
import { useTheme } from "../context/ThemeContext";

const HeroSection: React.FC = () => {
  const { theme } = useTheme();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]"
    >
      <ParticlesBackground />

      {/* Gradient Orbs */}
      <div className={`absolute top-1/4 -left-32 w-96 h-96 ${theme === 'dark' ? 'bg-cyan-500/20' : 'bg-cyan-500/10'} rounded-full blur-[128px] pointer-events-none`} />
      <div className={`absolute bottom-1/4 -right-32 w-96 h-96 ${theme === 'dark' ? 'bg-cyan-600/10' : 'bg-cyan-600/5'} rounded-full blur-[128px] pointer-events-none`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Terminal-style greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[var(--text-muted)] font-mono text-sm">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name with typewriter effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] mb-2">
                Hi, I'm{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">
                    {personalInfo.name}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="absolute -right-1 top-0 text-cyan-500"
                  >
                    _
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] font-light">
                <span className="text-cyan-500 font-mono">&lt;</span>
                {personalInfo.title}
                <span className="text-[var(--text-muted)]"> / </span>
                {personalInfo.tagline}
                <span className="text-cyan-500 font-mono">/&gt;</span>
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-8 text-[var(--text-muted)]"
            >
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                onClick={(e) => handleScroll(e, "#projects")}
                className="group flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold rounded-xl transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.a>
              <motion.a
                href={`${process.env.PUBLIC_URL || ''}/resume.pdf`}
                download="Tijani_Sylla_Resume.pdf"
                className="group flex items-center gap-2 px-8 py-4 bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-primary)] font-semibold rounded-xl border border-[var(--border-color)] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                { icon: Github, href: personalInfo.social.github, label: "GitHub" },
                { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--bg-secondary)] hover:bg-cyan-500/20 border border-[var(--border-color)] hover:border-cyan-500/50 rounded-xl text-[var(--text-secondary)] hover:text-cyan-500 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-cyan-500/30"
              />
              
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-full blur-2xl" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
                <img
                  src={`${process.env.PUBLIC_URL || ''}/avatar.png`}
                  alt="Tijani Sylla"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 top-8 px-3 py-1.5 bg-[var(--bg-card)] backdrop-blur-sm border border-[var(--border-color)] rounded-full shadow-lg"
              >
                <span className="text-sm font-mono text-cyan-500">React</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-4 bottom-16 px-3 py-1.5 bg-[var(--bg-card)] backdrop-blur-sm border border-[var(--border-color)] rounded-full shadow-lg"
              >
                <span className="text-sm font-mono text-cyan-500">TypeScript</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute right-4 -bottom-2 px-3 py-1.5 bg-[var(--bg-card)] backdrop-blur-sm border border-[var(--border-color)] rounded-full shadow-lg"
              >
                <span className="text-sm font-mono text-cyan-500">Node.js</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto lg:mx-0"
        >
          {[
            { value: personalInfo.stats.experience, label: "Years Experience" },
            { value: personalInfo.stats.projects, label: "Projects Completed" },
            { value: personalInfo.stats.support, label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[var(--text-muted)]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[var(--border-color)] rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
