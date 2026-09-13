import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Search, MessageSquare, MapPin, Sparkles } from 'lucide-react';
import { developerDetails } from '../data/portfolioData';

export const HeroBento: React.FC = () => {
  const p = developerDetails.personal;

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 flex flex-col justify-center items-center overflow-hidden bg-[#0F0E0E]">
      
      {/* Background Radial Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-glow pointer-events-none opacity-70 blur-3xl" />

      <div className="max-w-6xl mx-auto w-full z-10 space-y-12">
        
        {/* Header Titles */}
        <motion.div 
          className="text-center space-y-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-zinc-400 font-semibold">
            GET TO KNOW ME
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-outfit uppercase leading-[1.05]">
            TURNING IDEAS INTO{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400 bg-clip-text text-transparent animate-gradient">
              REALITY
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 font-serif italic max-w-xl mx-auto leading-relaxed">
            {p.headlineSubtitle}
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Profile Card */}
          <motion.div 
            className="lg:col-span-4 glass-card rounded-3xl p-8 border border-white/10 flex flex-col items-center text-center justify-between relative shadow-2xl group"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Glowing avatar frame */}
            <div className="relative mb-6">
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-orange-500 via-pink-500 to-cyan-400 shadow-[0_0_30px_rgba(255,140,0,0.3)] group-hover:scale-105 transition-transform duration-500">
                <img
                  src={p.photoUrl}
                  alt={p.fullName}
                  className="w-full h-full object-cover rounded-full bg-zinc-900"
                />
              </div>
              {/* Online status indicator */}
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0F0E0E] shadow-[0_0_10px_#10B981]" />
            </div>

            {/* Profile Info */}
            <div className="space-y-3 w-full">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
                {p.preferredName}
              </h2>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8C00]" />
                <span>{p.badgeRole}</span>
              </div>

              <p className="text-xs text-zinc-400 flex items-center justify-center gap-1 font-mono pt-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{p.location}</span>
              </p>
            </div>

            {/* Social Buttons Matrix */}
            <div className="flex items-center justify-center gap-3 pt-6 border-t border-white/10 w-full mt-6">
              <a
                href={`mailto:${p.email}`}
                className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-[#FF8C00] hover:bg-[#FF8C00]/10 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={p.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-[#FF8C00] hover:bg-[#FF8C00]/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={p.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-[#FF8C00] hover:bg-[#FF8C00]/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={p.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-[#FF8C00] hover:bg-[#FF8C00]/10 transition-all"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Stats & Narrative Card */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-6">
            
            {/* Top 3 Metric Progress Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Stat Card 1: Production Projects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center space-y-3 relative group hover:border-orange-500/40 transition-colors"
              >
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="32" cy="32" r="26" stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="none" />
                    <circle cx="32" cy="32" r="26" stroke="#FF6B35" strokeWidth="4" fill="none" strokeDasharray="163" strokeDashoffset="45" strokeLinecap="round" />
                  </svg>
                  <span className="absolute font-extrabold text-xl text-white font-outfit">2+</span>
                </div>
                <span className="text-xs font-bold text-orange-400 tracking-wide">Production Projects</span>
              </motion.div>

              {/* Stat Card 2: Internship Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center space-y-3 relative group hover:border-blue-500/40 transition-colors"
              >
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="32" cy="32" r="26" stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="none" />
                    <circle cx="32" cy="32" r="26" stroke="#3B82F6" strokeWidth="4" fill="none" strokeDasharray="163" strokeDashoffset="75" strokeLinecap="round" />
                  </svg>
                  <span className="absolute font-extrabold text-xl text-white font-outfit">1</span>
                </div>
                <span className="text-xs font-bold text-blue-400 tracking-wide">Internship Experience</span>
              </motion.div>

              {/* Stat Card 3: Full-Stack Focused */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center space-y-3 relative group hover:border-emerald-500/40 transition-colors"
              >
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="32" cy="32" r="26" stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="none" />
                    <circle cx="32" cy="32" r="26" stroke="#10B981" strokeWidth="4" fill="none" strokeDasharray="163" strokeDashoffset="0" strokeLinecap="round" />
                  </svg>
                  <span className="absolute font-extrabold text-base text-white font-outfit">Web3</span>
                </div>
                <span className="text-xs font-bold text-emerald-400 tracking-wide">Full-Stack Focused</span>
              </motion.div>

            </div>

            {/* Bottom Large Narrative Banner Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-card rounded-3xl p-8 border border-white/10 flex-grow flex items-start gap-6 relative shadow-2xl overflow-hidden"
            >
              {/* Glowing vertical accent bar */}
              <div className="w-1.5 self-stretch rounded-full bg-gradient-to-b from-orange-500 via-pink-500 to-amber-500 shrink-0" />

              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit leading-snug">
                  {p.tagline}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
                  {p.shortBio}
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Bottom Left Search Trigger */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 text-xs font-mono text-zinc-400 shadow-xl cursor-pointer hover:border-white/20 transition-colors">
        <Search className="w-3.5 h-3.5 text-zinc-400" />
        <span>Search</span>
        <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">Ctrl K</span>
      </div>

      {/* Bottom Right Floating Action Trigger */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#FF8C00] text-black shadow-[0_0_25px_rgba(255,140,0,0.5)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Contact Me"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
      </a>

    </section>
  );
};
