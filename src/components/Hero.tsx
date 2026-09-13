import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, ArrowUpRight, Code, Shield, Globe } from 'lucide-react';
import { developerDetails } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const p = developerDetails.personal;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      {/* Background Radial Glow Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow pointer-events-none opacity-80 blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#FF8C00]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 w-fit text-xs text-zinc-300 backdrop-blur-md shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium tracking-wide">Available for Full Stack & Engineering Roles</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-outfit leading-[1.1]">
                Hi, I'm <span className="text-gradient-primary">{p.fullName}</span>
              </h1>
              <p className="text-lg sm:text-xl text-zinc-300 font-medium leading-relaxed max-w-2xl">
                {p.role}
              </p>
            </div>

            {/* Tagline & Short Bio */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
              {p.tagline}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-black bg-gradient-to-r from-[#FF8C00] to-[#FF5F00] rounded-full shadow-[0_0_25px_rgba(255,140,0,0.4)] hover:shadow-[0_0_35px_rgba(255,140,0,0.6)] hover:scale-[1.03] active:scale-[0.97] transition-all flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={p.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm font-semibold text-white glass-panel rounded-full hover:border-[#FF8C00]/50 hover:bg-white/10 hover:scale-[1.03] active:scale-[0.97] transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#FF8C00]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links Matrix */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Connect</span>
              <div className="flex items-center gap-3">
                <a
                  href={p.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:border-[#FF8C00]/50 hover:bg-[#FF8C00]/10 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={p.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:border-[#FF8C00]/50 hover:bg-[#FF8C00]/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={p.socialLinks.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:border-[#FF8C00]/50 hover:bg-[#FF8C00]/10 transition-all"
                  aria-label="Portfolio Site"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${p.email}`}
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:border-[#FF8C00]/50 hover:bg-[#FF8C00]/10 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={p.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:border-[#FF8C00]/50 hover:bg-[#FF8C00]/10 transition-all"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Profile Card & Avatar Column */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group max-w-sm w-full">
              {/* Animated Glowing Ring Backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#FF8C00] via-[#FF5F00] to-orange-400 opacity-30 group-hover:opacity-60 blur-xl transition duration-500 group-hover:duration-200 animate-pulse-slow" />
              
              <div className="relative glass-card rounded-3xl p-6 border border-white/10 flex flex-col items-center text-center">
                
                {/* Photo Frame */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl mb-5 group-hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={p.photoUrl}
                    alt={p.fullName}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                </div>

                {/* Developer Info Summary */}
                <h3 className="text-xl font-bold text-white font-outfit">{p.fullName}</h3>
                <p className="text-xs text-[#FF8C00] font-mono mt-1">{p.location}</p>

                {/* Highlight Badges */}
                <div className="grid grid-cols-2 gap-2.5 w-full mt-5 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-left">
                    <Code className="w-4 h-4 text-[#FF8C00] shrink-0" />
                    <div>
                      <div className="text-[10px] text-zinc-500 font-mono">STACK</div>
                      <div className="text-xs font-semibold text-zinc-200">React & Node</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-left">
                    <Shield className="w-4 h-4 text-[#FF8C00] shrink-0" />
                    <div>
                      <div className="text-[10px] text-zinc-500 font-mono">SYSTEMS</div>
                      <div className="text-xs font-semibold text-zinc-200">Web3 & AI</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
