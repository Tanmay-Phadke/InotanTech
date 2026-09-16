import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Sparkles, ArrowUp, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ChessScrollTracker: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPromoted, setIsPromoted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { activeThemeConfig } = useTheme();

  const primaryColor = activeThemeConfig.primaryColor;

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const currentProgress = (window.scrollY / totalHeight) * 100;
      const clamped = Math.min(100, Math.max(0, currentProgress));
      setScrollProgress(clamped);

      // Promote to Queen near bottom (>= 88%)
      if (clamped >= 88) {
        if (!isPromoted) {
          setIsPromoted(true);
          setShowToast(true);
          setTimeout(() => setShowToast(false), 5000);
        }
      } else if (clamped < 80) {
        if (isPromoted) {
          setIsPromoted(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPromoted]);

  const scrollToPercent = (percent: number) => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetY = (percent / 100) * totalHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <>
      {/* Vertical Chess Scroll Bar Container on Right Edge */}
      <div className="fixed right-3 sm:right-5 top-28 bottom-28 z-40 flex flex-col items-center pointer-events-none group">
        
        {/* Track Line */}
        <div 
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickY = e.clientY - rect.top;
            const percent = (clickY / rect.height) * 100;
            scrollToPercent(percent);
          }}
          className="w-1.5 h-full rounded-full bg-white/10 hover:bg-white/20 transition-colors pointer-events-auto relative cursor-pointer shadow-lg"
        >
          {/* Filled Progress Line */}
          <div
            style={{
              height: `${scrollProgress}%`,
              background: `linear-gradient(to bottom, ${primaryColor}, ${activeThemeConfig.secondaryColor})`
            }}
            className="w-full rounded-full shadow-[0_0_10px_rgba(255,140,0,0.5)] transition-all duration-150"
          />

          {/* Floating Pawn ♙ or Queen ♕ Indicator Icon */}
          <motion.div
            style={{
              top: `${scrollProgress}%`,
              transform: 'translate(-50%, -50%)',
              borderColor: isPromoted ? '#FFD700' : primaryColor,
              backgroundColor: isPromoted ? '#FFD700' : primaryColor,
              boxShadow: isPromoted 
                ? '0 0 25px #FFD700, 0 0 40px #FF8C00' 
                : `0 0 15px ${primaryColor}`
            }}
            animate={isPromoted ? { scale: [1, 1.25, 1], rotate: [0, 15, -15, 0] } : { scale: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute left-1/2 p-2 rounded-full text-black cursor-pointer pointer-events-auto shadow-2xl flex items-center justify-center transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation();
              if (isPromoted) {
                setShowToast(true);
              } else {
                scrollToPercent(100);
              }
            }}
          >
            {isPromoted ? (
              /* Queen ♕ Vector Icon */
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black animate-pulse">
                <path d="M18 19H6v-2h12v2zm1-4H5v-2h14v2zm-1-4l1.5-5l-4.5 2.5L12 4L9.5 8.5L5 6l1.5 5h11zM12 2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3zM5 4.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3zm14 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3z"/>
              </svg>
            ) : (
              /* Pawn ♙ Vector Icon */
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black">
                <path d="M19 22H5v-2h14v2zm-2-3H7v-2h10v2zm-2-3H9l.5-2.5C8 12.5 8 10.5 9.5 9C9 8.2 9 7.2 9.5 6.5C10 5.8 10.9 5.5 12 5.5s2 .3 2.5 1c.5.7.5 1.7 0 2.5C16 10.5 16 12.5 14.5 13.5L15 16zM12 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4z"/>
              </svg>
            )}

            {/* Glowing Ring Aura when Promoted */}
            {isPromoted && (
              <div className="absolute -inset-2 rounded-full border-2 border-yellow-300 animate-ping opacity-75 pointer-events-none" />
            )}

            {/* Scroll Tooltip */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-black/90 border border-white/20 px-3 py-1.5 rounded-xl text-[11px] font-mono text-white shadow-2xl flex items-center gap-2">
              <span className="font-bold" style={{ color: isPromoted ? '#FFD700' : primaryColor }}>
                {isPromoted ? '♛ QUEEN PROMOTED!' : '♙ PAWN'}
              </span>
              <span className="text-zinc-400">• {Math.round(scrollProgress)}%</span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Promotion Toast Celebration Banner */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass-card rounded-2xl px-6 py-4 border-2 border-yellow-400/80 shadow-[0_0_40px_rgba(255,215,0,0.5)] flex items-center gap-4 bg-black/90 max-w-md"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-400 to-amber-500 text-black flex items-center justify-center shrink-0 shadow-lg">
              <Crown className="w-7 h-7 fill-current" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-extrabold uppercase bg-yellow-400/20 text-yellow-300 border border-yellow-400/40">
                  ♟ PAWN PROMOTION!
                </span>
                <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" />
              </div>
              <h4 className="text-sm font-bold text-white font-outfit">
                Full-Stack Queen Mastery Reached!
              </h4>
              <p className="text-[11px] text-zinc-300 leading-snug">
                You scrolled to the end of the board. The Pawn has officially been promoted to Queen ♛!
              </p>
            </div>

            <button
              onClick={() => setShowToast(false)}
              className="text-xs font-mono text-zinc-400 hover:text-white px-2 py-1 rounded-lg bg-white/10 shrink-0"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
