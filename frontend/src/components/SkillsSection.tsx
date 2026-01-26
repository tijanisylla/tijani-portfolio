import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills, Skill } from "../data/mock";
import { Code2, Server, Wrench, Sparkles } from "lucide-react";
import { getAssetPath } from "../utils/paths";

// Tech logo paths (local images from assets)
const techLogos: Record<string, string> = {
  "React": getAssetPath("/images/skills/react.svg"),
  "TypeScript": getAssetPath("/images/skills/typescript.svg"),
  "JavaScript": getAssetPath("/images/skills/javascript.svg"),
  "HTML5": getAssetPath("/images/skills/html5.svg"),
  "CSS3": getAssetPath("/images/skills/css3.svg"),
  "Redux": getAssetPath("/images/skills/redux.svg"),
  "WordPress": getAssetPath("/images/skills/wordpress.svg"),
  "Bootstrap": getAssetPath("/images/skills/bootstrap.svg"),
  "Figma": getAssetPath("/images/skills/figma.svg"),
  "Node.js": getAssetPath("/images/skills/nodejs.svg"),
  "PostgreSQL": getAssetPath("/images/skills/postgresql.svg"),
  "Python": getAssetPath("/images/skills/python.svg"),
  "MongoDB": getAssetPath("/images/skills/mongodb.svg"),
  "MySQL": getAssetPath("/images/skills/mysql.svg"),
  "AWS": getAssetPath("/images/skills/aws.svg"),
  "Docker": getAssetPath("/images/skills/docker.svg"),
  "Firebase": getAssetPath("/images/skills/firebase.svg"),
  "PHP": getAssetPath("/images/skills/php.svg"),
  "Git": getAssetPath("/images/skills/git.svg"),
  "Postman": getAssetPath("/images/skills/postman.svg"),
  "Heroku": getAssetPath("/images/skills/heroku.svg"),
  "Testing": getAssetPath("/images/skills/testing.svg"),
};

const skillLevelBadges: Record<string, string> = {
  Advanced: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  Intermediate: "bg-cyan-600/20 text-cyan-500 border-cyan-600/30",
  Basic: "bg-cyan-700/20 text-cyan-600 border-cyan-700/30",
};

interface SkillCardProps {
  skill: Skill;
  index: number;
  isInView: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={isInView ? { opacity: 1, scale: 1 } : {}}
    transition={{ delay: index * 0.03, duration: 0.3 }}
    className="group relative p-5 bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-color)] hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
  >
    <div className="flex items-start gap-4">
      {/* Tech Logo */}
      <div className="w-12 h-12 flex items-center justify-center bg-[var(--bg-tertiary)] rounded-lg p-2 group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
        <img 
          src={techLogos[skill.name]} 
          alt={skill.name}
          className="w-8 h-8 object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      
      {/* Skill Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-[var(--text-primary)] font-semibold text-base truncate">{skill.name}</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-md border ${skillLevelBadges[skill.level]}`}>
            {skill.level}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

const SkillsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All Skills", icon: Sparkles, count: skills.frontend.length + skills.backend.length + skills.tools.length },
    { id: "frontend", label: "Frontend", icon: Code2, count: skills.frontend.length },
    { id: "backend", label: "Backend", icon: Server, count: skills.backend.length },
    { id: "tools", label: "Tools", icon: Wrench, count: skills.tools.length },
  ];

  const getSkillsForTab = (): Skill[] => {
    switch (activeTab) {
      case "frontend":
        return skills.frontend;
      case "backend":
        return skills.backend;
      case "tools":
        return skills.tools;
      default:
        return [...skills.frontend, ...skills.backend, ...skills.tools];
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-[var(--bg-primary)]">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12">
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
            A comprehensive toolkit built over 4+ years of professional development experience.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-cyan-500 text-zinc-950 shadow-lg shadow-cyan-500/30"
                    : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-color)]"
                }`}
              >
                <Icon className={`w-4 h-4 ${activeTab === tab.id ? "text-zinc-950" : "text-cyan-500"}`} />
                <span>{tab.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id 
                    ? "bg-zinc-950/20 text-zinc-950" 
                    : "bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {getSkillsForTab().map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
