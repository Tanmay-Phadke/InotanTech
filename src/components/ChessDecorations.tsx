import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Shield, Zap, Target, Crown, Compass, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export interface ChessPieceData {
  id: string;
  name: string;
  role: string;
  symbol: string;
  svgIcon: React.ReactNode;
  tacticalQuote: string;
  description: string;
  positionClass: string;
  badgeColor: string;
  keySkills: string[];
}

export const ChessDecorations: React.FC = () => {
  const { activeThemeConfig } = useTheme();
  const [activeModalPiece, setActiveModalPiece] = useState<ChessPieceData | null>(null);
  const [clickedPieceId, setClickedPieceId] = useState<string | null>(null);

  const primaryColor = activeThemeConfig.primaryColor;

  const chessPieces: ChessPieceData[] = [
    {
      id: 'knight',
      name: 'The Knight ♞',
      role: 'Tactical Agility & Creative Problem Solving',
      symbol: '♞',
      badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      positionClass: 'top-[20%] left-4 lg:left-10',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M19 22H5v-2h14v2zm-1-4H6v-2h12v2zm-1.5-4H7.5l-.8-2.4C6 11.6 7 8 11.5 6.5C10.5 5 10.5 3 13 2c3.5 0 5 2.5 5 5c0 1.5-1 3.5-2.5 4.5l2 6.5zm-5-10c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5S14.8 6.5 14 6.5s-1.5.7-1.5 1.5z"/>
        </svg>
      ),
      tacticalQuote: "Leaping over constraints with non-linear, creative thinking.",
      description: "Just like the Knight moves in unique L-shapes over obstacles, software engineering requires jumping past conventional bugs and bottlenecks with clever algorithms and adaptable design patterns.",
      keySkills: ["Algorithmic Problem Solving", "Adaptable Debugging", "Out-of-the-box Logic"]
    },
    {
      id: 'queen',
      name: 'The Queen ♛',
      role: 'Full-Stack Mastery & Omnidirectional Versatility',
      symbol: '♛',
      badgeColor: 'border-pink-500/40 text-pink-400 bg-pink-500/10',
      positionClass: 'top-[36%] right-4 lg:right-10',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M18 19H6v-2h12v2zm1-4H5v-2h14v2zm-1-4l1.5-5l-4.5 2.5L12 4L9.5 8.5L5 6l1.5 5h11zM12 2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3zM5 4.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3zm14 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3z"/>
        </svg>
      ),
      tacticalQuote: "Commanding frontend UX, backend APIs, and Web3 smart contracts.",
      description: "The most versatile piece on the board. Represents full-stack mastery — effortlessly sliding across modern UI design, robust REST/Node.js backends, MongoDB schemas, and decentralized Web3 protocols.",
      keySkills: ["React & TypeScript Frontend", "Node.js & MongoDB Backend", "Decentralized Web3 Integrations"]
    },
    {
      id: 'king',
      name: 'The King ♚',
      role: 'System Governance, Security & Clean Code',
      symbol: '♚',
      badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
      positionClass: 'top-[58%] left-4 lg:left-10',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M19 22H5v-2h14v2zm-1-4H6v-2h12v2zm-1-4H6v-2l2-4h8l2 4v2zM11 2h2v2h2v2h-2v2h-2V6H9V4h2V2z"/>
        </svg>
      ),
      tacticalQuote: "Protecting code integrity and long-term architectural health.",
      description: "The ultimate objective. In engineering, the King represents system security, fault tolerance, maintainable codebase organization, and strategic engineering vision.",
      keySkills: ["Software Architecture", "Security & Encryption", "Clean Code Best Practices"]
    },
    {
      id: 'rook',
      name: 'The Rook ♜',
      role: 'Rock-Solid Infrastructure & Immutable Ledgers',
      symbol: '♜',
      badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
      positionClass: 'top-[74%] right-4 lg:right-10',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M19 22H5v-2h14v2zm-1-4H6v-2h12v2zm-1-4H7V9h2V7H7V4h3v3h4V4h3v3h-2v2h3v5z"/>
        </svg>
      ),
      tacticalQuote: "Building unshakeable, tamper-proof foundations for scale.",
      description: "Stands firm like an immutable blockchain ledger or a high-availability database cluster. Ensures bulletproof reliability and structural security under heavy traffic.",
      keySkills: ["Blockchain Smart Contracts", "Database Indexing & Queries", "High Availability Systems"]
    },
    {
      id: 'bishop',
      name: 'The Bishop ♝',
      role: 'Technical Vision & Strategic Foresight',
      symbol: '♝',
      badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
      positionClass: 'top-[45%] left-4 lg:left-12',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M19 22H5v-2h14v2zm-2-3H7v-2h10v2zm-1-3H8v-2l1.5-2C8.5 11 8.5 9 10 7.5c0-.8.5-1.5 1-2c-.5-.3-1-.8-1-1.5a2 2 0 1 1 4 0c0 .7-.5 1.2-1 1.5c.5.5 1 1.2 1 2c1.5 1.5 1.5 3.5.5 4.5l1.5 2v2z"/>
        </svg>
      ),
      tacticalQuote: "Cutting across complexity with long-range diagonal vision.",
      description: "Operates along long diagonals to spot technical opportunities far in advance. Represents AI integrations, future tech trends, and elegant code optimization.",
      keySkills: ["AI & LLM Integrations", "Long-Term Scalability", "Performance Optimization"]
    },
    {
      id: 'pawn',
      name: 'The Pawn ♟',
      role: 'Continuous Growth & Promotion Potential',
      symbol: '♟',
      badgeColor: 'border-yellow-500/40 text-yellow-400 bg-yellow-500/10',
      positionClass: 'top-[85%] left-4 lg:left-12',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M19 22H5v-2h14v2zm-2-3H7v-2h10v2zm-2-3H9l.5-2.5C8 12.5 8 10.5 9.5 9C9 8.2 9 7.2 9.5 6.5C10 5.8 10.9 5.5 12 5.5s2 .3 2.5 1c.5.7.5 1.7 0 2.5C16 10.5 16 12.5 14.5 13.5L15 16zM12 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4z"/>
        </svg>
      ),
      tacticalQuote: "Every master was once a beginner. Progressing step by step.",
      description: "Starts small but advances relentless board square by square. Reaching the final rank triggers Promotion to Queen ♛ — proving that steady dedication leads to engineering excellence.",
      keySkills: ["Relentless Learning", "Daily Code Progress", "Pawn-to-Queen Growth"]
    }
  ];

  const handlePieceClick = (piece: ChessPieceData) => {
    setClickedPieceId(piece.id);
    setActiveModalPiece(piece);
    setTimeout(() => setClickedPieceId(null), 500);
  };

  return (
    <>
      {/* Floating Ambient Background Chess Pieces (High Z-Index & Explicit Clicks) */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        {chessPieces.slice(0, 4).map((piece, index) => (
          <motion.div
            key={piece.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.5, 0.95, 0.5],
              y: [0, -14, 0],
              rotate: [0, 4, -4, 0]
            }}
            transition={{
              duration: 6 + index * 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute ${piece.positionClass} hidden md:block pointer-events-auto cursor-pointer group`}
            onClick={() => handlePieceClick(piece)}
          >
            <div className={`relative flex items-center justify-center p-3 rounded-2xl glass-card border border-white/20 transition-all duration-300 shadow-2xl group-hover:scale-125 ${
              clickedPieceId === piece.id ? 'scale-125 ring-4 ring-[#FF8C00]' : ''
            }`}>
              <div style={{ color: primaryColor }} className="transition-colors group-hover:drop-shadow-[0_0_15px_rgba(255,140,0,0.8)]">
                {piece.svgIcon}
              </div>

              {/* Pulsing indicator ring */}
              <div 
                style={{ backgroundColor: primaryColor }}
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping opacity-90"
              />

              {/* Tooltip on Hover */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-11 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap bg-black/95 border border-white/20 px-3.5 py-1.5 rounded-full text-[11px] font-mono text-white shadow-2xl flex items-center gap-1.5">
                <span className="font-bold">{piece.name}</span>
                <span style={{ color: primaryColor }}>✦</span>
                <span className="text-zinc-300">Click for strategy insight</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Tactical Chess Dock (Bottom-Left Accessible Dock) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-1.5 p-2 rounded-2xl glass-panel border border-white/15 shadow-2xl">
        <span className="text-[10px] font-mono text-zinc-400 px-2 uppercase tracking-wider hidden xl:inline">
          Chess Strategy:
        </span>
        {chessPieces.map((p) => (
          <button
            key={p.id}
            onClick={() => handlePieceClick(p)}
            title={`Click to view ${p.name} tactical strategy`}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/15 border border-white/10 text-zinc-200 hover:text-white hover:scale-125 transition-all duration-200 flex items-center justify-center relative group"
          >
            <span className="text-base leading-none">{p.symbol}</span>
            <div className="absolute bottom-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 border border-white/15 text-[10px] font-mono px-2 py-1 rounded-md whitespace-nowrap pointer-events-none">
              {p.name}
            </div>
          </button>
        ))}
      </div>

      {/* Interactive Modal for Chess Piece Tactical Insight */}
      <AnimatePresence>
        {activeModalPiece && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveModalPiece(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 border-2 border-white/20 shadow-2xl overflow-hidden bg-black/90"
            >
              {/* Top Accent Gradient Bar */}
              <div 
                style={{ 
                  background: `linear-gradient(to right, ${primaryColor}, ${activeThemeConfig.secondaryColor})` 
                }}
                className="absolute top-0 left-0 right-0 h-2"
              />

              {/* Close Button */}
              <button
                onClick={() => setActiveModalPiece(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 border border-white/15 text-zinc-300 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                {/* Header Badge */}
                <div className="flex items-center gap-4">
                  <div 
                    style={{ color: primaryColor, backgroundColor: `${primaryColor}15`, borderColor: `${primaryColor}40` }}
                    className="w-16 h-16 rounded-2xl border flex items-center justify-center shrink-0 shadow-xl text-3xl"
                  >
                    {activeModalPiece.svgIcon}
                  </div>
                  <div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border ${activeModalPiece.badgeColor}`}>
                      ♟ Chess Strategy Mindset
                    </span>
                    <h3 className="text-2xl font-extrabold text-white font-outfit mt-1">
                      {activeModalPiece.name}
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono">
                      {activeModalPiece.role}
                    </p>
                  </div>
                </div>

                {/* Tactical Quote Box */}
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 relative">
                  <Sparkles style={{ color: primaryColor }} className="w-4 h-4 absolute top-3 right-3" />
                  <p className="text-sm font-serif italic text-zinc-200 leading-relaxed pr-6">
                    "{activeModalPiece.tacticalQuote}"
                  </p>
                </div>

                {/* Detailed Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {activeModalPiece.description}
                </p>

                {/* Key Skills List */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Engineering Takeaways</span>
                  <div className="flex flex-wrap gap-2">
                    {activeModalPiece.keySkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-zinc-300 font-mono"
                      >
                        <CheckCircle2 style={{ color: primaryColor }} className="w-3.5 h-3.5" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                    <Shield style={{ color: primaryColor }} className="w-3.5 h-3.5" />
                    Applied to Software Architecture
                  </span>

                  <button
                    onClick={() => setActiveModalPiece(null)}
                    style={{ backgroundColor: primaryColor }}
                    className="px-5 py-2 rounded-xl text-xs font-bold text-black hover:opacity-90 transition-opacity shadow-lg"
                  >
                    Got it
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

