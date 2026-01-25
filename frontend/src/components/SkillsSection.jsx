import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/mock";

// Tech logo URLs from devicons CDN
const techLogos = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "WordPress": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  "Heroku": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
  "Testing": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
};

const skillLevelColors = {
  Advanced: "from-cyan-400 to-cyan-500",
  Intermediate: "from-cyan-500/70 to-cyan-600/70",
  Basic: "from-cyan-600/50 to-cyan-700/50",
};

const skillLevelWidth = {
  Advanced: "w-full",
  Intermediate: "w-3/4",
  Basic: "w-1/2",
};

const SkillCard = ({ skill, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: index * 0.05 }}
    className="group relative p-4 bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-color)] hover:border-cyan-500/30 rounded-xl transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-3">
      {/* Tech Logo */}
      <div className="w-10 h-10 flex items-center justify-center bg-[var(--bg-tertiary)] rounded-lg p-2 group-hover:bg-cyan-500/10 transition-colors">
        <img 
          src={techLogos[skill.name]} 
          alt={skill.name}
          className="w-6 h-6 object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-[var(--text-primary)] font-medium">{skill.name}</h4>
          <span className="text-xs text-cyan-500 font-mono">{skill.level}</span>
        </div>
      </div>
    </div>
    <div className="h-1.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : {}}
        transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
        className={`h-full rounded-full bg-gradient-to-r ${skillLevelColors[skill.level]} ${skillLevelWidth[skill.level]}`}
      />
    </div>
  </motion.div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 bg-[var(--bg-primary)]">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-cyan-500 font-mono text-sm mb-2"
          >
            {'// My Skills'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4"
          >
            Technical Expertise<span className="text-cyan-500">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            A comprehensive toolkit built over 4+ years of professional
            development experience.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-cyan-500 rounded-full" />
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">Frontend Development</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.frontend.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-cyan-500 rounded-full" />
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">Backend Development</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.backend.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-cyan-500 rounded-full" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">Tools & Others</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.tools.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
