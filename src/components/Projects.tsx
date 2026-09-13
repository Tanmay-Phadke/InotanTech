import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock, FileText, CheckCircle2, Shield, MapPin } from 'lucide-react';
import { developerDetails } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#FF8C00]">
            <span>// FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Projects & Solutions
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Architected and engineered solutions focusing on Blockchain security and citizen-facing web portals.
          </p>
        </div>

        {/* 2-Column Desktop Grid Collapsing to 1-Column Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {developerDetails.projects.map((project, idx) => {
            const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim() !== '');
            const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim() !== '');
            const hasPdfDoc = Boolean(project.pdfDocument && project.pdfDocument.trim() !== '');

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#FF8C00]/40 transition-all duration-300"
              >
                {/* Image Container with Overlay */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171616] via-transparent to-transparent opacity-90" />

                  {/* Subtitle Badge */}
                  <div className="absolute top-4 left-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-medium text-zinc-200 shadow-lg">
                      {project.id.includes('blockchain') ? (
                        <Shield className="w-3.5 h-3.5 text-[#FF8C00] shrink-0" />
                      ) : (
                        <MapPin className="w-3.5 h-3.5 text-[#FF8C00] shrink-0" />
                      )}
                      <span className="truncate">{project.subtitle}</span>
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between gap-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white font-outfit group-hover:text-[#FF8C00] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features Bullet Points */}
                    {project.features && project.features.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Key Architectural Features</span>
                        <ul className="space-y-1.5">
                          {project.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8C00] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Technologies Stack & Action Links */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-[11px] font-mono font-medium text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links & Disabled Badges */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        {/* Live Demo Link or Disabled Badge */}
                        {hasLiveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FF8C00] text-black font-semibold text-xs hover:bg-[#FF7700] transition-colors shadow-lg"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] font-medium text-zinc-400 cursor-not-allowed">
                            <Lock className="w-3.5 h-3.5 text-zinc-500" />
                            <span>Private Demo</span>
                          </span>
                        )}

                        {/* GitHub Source Code Link or Disabled Badge */}
                        {hasGithubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white font-semibold text-xs hover:border-[#FF8C00]/50 hover:bg-white/10 transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Source Code</span>
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] font-medium text-zinc-400 cursor-not-allowed">
                            <Lock className="w-3.5 h-3.5 text-zinc-500" />
                            <span>Repo: Internal / Private</span>
                          </span>
                        )}
                      </div>

                      {/* Optional PDF Research Paper */}
                      {hasPdfDoc && (
                        <a
                          href={project.pdfDocument}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FF8C00]/10 border border-[#FF8C00]/30 text-[#FF8C00] font-semibold text-xs hover:bg-[#FF8C00]/20 transition-all"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Research Paper</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
