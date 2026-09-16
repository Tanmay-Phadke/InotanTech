import React from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import { useTheme, THEME_OPTIONS, ThemeMode } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { theme, setTheme, activeThemeConfig } = useTheme();

  return (
    <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 shadow-lg">
      {!compact && (
        <div className="pl-2 pr-1 hidden sm:flex items-center gap-1 text-[11px] font-mono text-zinc-400">
          <Palette className="w-3.5 h-3.5 text-zinc-300" />
          <span className="hidden lg:inline">Theme:</span>
        </div>
      )}

      {THEME_OPTIONS.map((t) => {
        const isActive = theme === t.id;

        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            title={`Switch to ${t.name}`}
            className={`relative flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium font-mono rounded-full transition-all duration-300 ${
              isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="themeActivePill"
                className="absolute inset-0 bg-white/15 border border-white/20 rounded-full shadow-sm"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}

            {/* Theme Color Dot */}
            <span
              className={`w-2.5 h-2.5 rounded-full relative z-10 ${t.iconColor} ${
                isActive ? 'scale-115 ring-2 ring-white/40' : 'opacity-70'
              }`}
            />

            {/* Label */}
            <span className="relative z-10 capitalize hidden sm:inline">
              {t.id}
            </span>
          </button>
        );
      })}
    </div>
  );
};
