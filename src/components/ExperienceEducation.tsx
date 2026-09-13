import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { developerDetails } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* About & Bio Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF8C00]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#FF8C00]">
              <span>// ABOUT ME</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
              Engineering with Purpose & Innovation
            </h2>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              {developerDetails.personal.aboutMe}
            </p>

            {/* Hobbies / Interests */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Beyond Coding & Engineering</span>
              <div className="flex flex-wrap gap-2.5">
                {developerDetails.personal.hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-zinc-300 font-medium"
                  >
                    ✦ {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid for Internship Experience & Academic Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Internship Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#FF8C00]/10 border border-[#FF8C00]/30 text-[#FF8C00]">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-outfit">Internship & Experience</h3>
                <p className="text-xs text-zinc-400 font-mono">Industry contributions</p>
              </div>
            </div>

            <div className="space-y-6">
              {developerDetails.internship.map((exp, idx) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card rounded-2xl p-6 border border-white/10 space-y-4 hover:border-[#FF8C00]/40 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-white/10 pb-4">
                    <div>
                      <span className="px-2.5 py-1 rounded-md bg-[#FF8C00]/10 border border-[#FF8C00]/30 text-[#FF8C00] text-[10px] font-mono font-semibold uppercase">
                        {exp.type}
                      </span>
                      <h4 className="text-lg font-bold text-white font-outfit mt-2">{exp.role}</h4>
                      <p className="text-sm font-semibold text-[#FF8C00]">{exp.company}</p>
                    </div>
                    <div className="text-right text-xs text-zinc-400 font-mono space-y-1">
                      <div className="flex items-center gap-1.5 justify-end">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 justify-end">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.contributions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8C00] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic Journey */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#FF8C00]/10 border border-[#FF8C00]/30 text-[#FF8C00]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-outfit">Academic Journey</h3>
                <p className="text-xs text-zinc-400 font-mono">Degrees & Education</p>
              </div>
            </div>

            <div className="space-y-6">
              {developerDetails.academicJourney.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card rounded-2xl p-6 border border-white/10 space-y-3 hover:border-[#FF8C00]/40 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-white/10 pb-3">
                    <div>
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold uppercase border ${
                        edu.status === 'Pursuing'
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : 'bg-white/[0.04] border-white/10 text-zinc-300'
                      }`}>
                        {edu.status}
                      </span>
                      <h4 className="text-base font-bold text-white font-outfit mt-2">{edu.degree}</h4>
                      <p className="text-xs text-zinc-300 font-medium">{edu.institution} ({edu.boardOrUniversity})</p>
                    </div>
                    <span className="text-xs text-zinc-400 font-mono">{edu.period}</span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
