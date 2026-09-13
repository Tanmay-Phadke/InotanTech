import React from 'react';
import { Github, Linkedin, Mail, Phone, Globe } from 'lucide-react';
import { developerDetails } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const p = developerDetails.personal;

  return (
    <footer className="py-12 px-4 border-t border-white/10 bg-black/40 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF8C00] to-[#FF5F00] flex items-center justify-center text-black font-extrabold text-xs shadow-[0_0_15px_rgba(255,140,0,0.4)]">
            TP
          </div>
          <span className="text-sm font-semibold text-white font-outfit">
            {p.fullName}
          </span>
          <span className="text-xs text-zinc-500 font-mono">
            © {new Date().getFullYear()}
          </span>
        </div>

        {/* Center Tagline */}
        <p className="text-xs text-zinc-400 font-mono flex items-center gap-1.5">
          <span>Engineered with React, TypeScript & Tailwind CSS</span>
        </p>

        {/* Right Socials */}
        <div className="flex items-center gap-3">
          <a
            href={p.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={p.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={p.socialLinks.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Portfolio Site"
          >
            <Globe className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${p.email}`}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={p.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="WhatsApp"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};
