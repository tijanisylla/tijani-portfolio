import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Briefcase, Rocket, Globe } from "lucide-react";
import { personalInfo } from "../data/mock";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Briefcase,
      title: "Professional",
      description: "4+ years of industry experience",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
    },
    {
      icon: Globe,
      title: "Multilingual",
      description: "English, French, Spanish & Arabic",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-zinc-950">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Terminal window */}
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-xs text-zinc-500 font-mono">
                    tijani@portfolio ~ %
                  </span>
                </div>
                {/* Terminal content */}
                <div className="p-6 font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <p className="text-cyan-400">$ whoami</p>
                    <p className="text-zinc-300 mt-2">{personalInfo.name}</p>
                    <p className="text-zinc-500 mt-4">$ cat about.txt</p>
                    <p className="text-zinc-400 mt-2 leading-relaxed">
                      {personalInfo.bio}
                    </p>
                    <p className="text-zinc-500 mt-4">$ echo $LANGUAGES</p>
                    <p className="text-green-400 mt-2">
                      {personalInfo.languages.join(" | ")}
                    </p>
                    <p className="text-zinc-500 mt-4">$ _</p>
                  </motion.div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-cyan-500/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-8 -right-8 w-full h-full border border-cyan-500/10 rounded-2xl -z-20" />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Section header */}
            <div className="mb-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-cyan-400 font-mono text-sm mb-2"
              >
                {'// About Me'}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
              >
                Crafting Digital Experiences
                <span className="text-cyan-400">.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-zinc-400 leading-relaxed"
              >
                I'm a passionate full-stack developer based in Chicago, IL. I
                specialize in building modern web applications using React,
                TypeScript, Node.js, and Python. My goal is to create beautiful,
                performant, and user-friendly digital solutions.
              </motion.p>
            </div>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group p-4 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-cyan-500/30 rounded-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-zinc-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;