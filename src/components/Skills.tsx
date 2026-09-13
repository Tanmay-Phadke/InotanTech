import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { developerDetails } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const categories = [
    {
      name: "Programming Languages",
      icon: <Code className="w-5 h-5 text-[#FF8C00]" />,
      skills: developerDetails.technicalSkills.programmingLanguages,
    },
    {
      name: "Frontend Stack",
      icon: <Layout className="w-5 h-5 text-[#FF8C00]" />,
      skills: developerDetails.technicalSkills.frontend,
    },
    {
      name: "Backend & Databases",
      icon: <Database className="w-5 h-5 text-[#FF8C00]" />,
      skills: developerDetails.technicalSkills.backendAndDatabases,
    },
    {
      name: "Tools & Platforms",
      icon: <Wrench className="w-5 h-5 text-[#FF8C00]" />,
      skills: developerDetails.technicalSkills.toolsAndPlatforms,
    },
    {
      name: "Methodologies & Engineering",
      icon: <ShieldCheck className="w-5 h-5 text-[#FF8C00]" />,
      skills: developerDetails.technicalSkills.methodologies,
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#FF8C00]">
            <span>// TECHNICAL STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Skills & Capabilities
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Comprehensive technical proficiency across languages, web frameworks, databases, and engineering workflows.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group hover:border-[#FF8C00]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#FF8C00]/5 rounded-full blur-2xl group-hover:bg-[#FF8C00]/10 transition-colors pointer-events-none" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-inner">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-outfit">{cat.name}</h3>
                  <span className="text-[11px] text-zinc-500 font-mono">{cat.skills.length} Items</span>
                </div>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-medium text-zinc-200 hover:text-white hover:border-[#FF8C00]/40 hover:bg-[#FF8C00]/10 transition-all duration-200 group/pill"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8C00]/70 group-hover/pill:text-[#FF8C00] transition-colors" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
