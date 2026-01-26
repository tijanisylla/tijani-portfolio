import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects, projectCategories, Project } from "../data/mock";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="group relative bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
  >
    {/* Image */}
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

      {/* Overlay Links */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[var(--bg-primary)]/80 hover:bg-cyan-500 border border-[var(--border-color)] hover:border-cyan-500 rounded-full text-[var(--text-primary)] hover:text-zinc-950 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="w-5 h-5" />
        </motion.a>
        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[var(--bg-primary)]/80 hover:bg-cyan-500 border border-[var(--border-color)] hover:border-cyan-500 rounded-full text-[var(--text-primary)] hover:text-zinc-950 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink className="w-5 h-5" />
        </motion.a>
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-cyan-500 transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-mono bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="relative py-24 bg-[var(--bg-primary)]">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-cyan-500 font-mono text-sm mb-2"
          >
            {'// My Work'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4"
          >
            Featured Projects<span className="text-cyan-500">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            A selection of projects I've worked on, showcasing my skills in
            full-stack development.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAll(false);
              }}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-cyan-500 text-zinc-950"
                  : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-color)]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-color)] hover:border-cyan-500/30 text-[var(--text-primary)] font-medium rounded-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? "Show Less" : "View All Projects"}
              <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? "rotate-90" : "group-hover:translate-x-1"}`} />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
