import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from "lucide-react";
import { experiences, education } from "../data/mock";

const ExperienceSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 bg-[var(--bg-secondary)]">
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
            {'// My Journey'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4"
          >
            Experience & Education<span className="text-cyan-500">.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <Briefcase className="w-5 h-5 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">Work Experience</h3>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-[var(--border-color)]" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-4 h-4 bg-[var(--bg-primary)] border-2 border-cyan-500 rounded-full" />

                  <div className="p-5 bg-[var(--bg-card)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-color)] hover:border-cyan-500/30 rounded-xl transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-[var(--text-primary)] font-semibold text-lg">
                          {exp.title}
                        </h4>
                        <p className="text-cyan-500 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)] mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <ChevronRight className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono bg-cyan-500/10 text-cyan-500 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <GraduationCap className="w-5 h-5 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">Education</h3>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-[var(--border-color)]" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-4 h-4 bg-[var(--bg-primary)] border-2 border-cyan-500 rounded-full" />

                  <div className="p-5 bg-[var(--bg-card)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-color)] hover:border-cyan-500/30 rounded-xl transition-all duration-300">
                    <h4 className="text-[var(--text-primary)] font-semibold text-lg mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-500 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-[var(--text-muted)] mb-3">{edu.details}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)] mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>

                    {edu.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {edu.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <ChevronRight className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
