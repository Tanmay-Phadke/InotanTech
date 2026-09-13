import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { Certification } from '../data/portfolioData';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        
        {/* Backdrop listener */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-3xl glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#FF8C00]/10 border border-[#FF8C00]/30 text-[#FF8C00]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-outfit">{cert.title}</h3>
                <p className="text-xs text-zinc-400 font-mono">Issued by {cert.issuer} ({cert.issueDate})</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Preview Area */}
          <div className="p-6 overflow-y-auto flex-grow flex flex-col items-center justify-center bg-black/40 space-y-4">
            <div className="relative w-full max-h-[55vh] flex items-center justify-center rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-inner">
              <img
                src={cert.image}
                alt={cert.title}
                className="max-w-full max-h-[53vh] object-contain rounded-xl"
              />
            </div>

            {/* Competency Skills Badges */}
            {cert.skills && cert.skills.length > 0 && (
              <div className="w-full pt-2 flex flex-wrap items-center justify-center gap-2">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-zinc-300 font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8C00]" />
                    <span>{s}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="px-6 py-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between flex-wrap gap-3">
            <span className="text-xs text-zinc-400 font-mono">Verified Credentials</span>
            
            <div className="flex items-center gap-3">
              {cert.pdfUrl && (
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/15 border border-white/10 rounded-xl transition-all"
                >
                  <FileText className="w-4 h-4 text-[#FF8C00]" />
                  <span>Open PDF Document</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              )}

              <a
                href={cert.pdfUrl || cert.image}
                download
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-gradient-to-r from-[#FF8C00] to-[#FF5F00] rounded-xl shadow-[0_0_15px_rgba(255,140,0,0.3)] hover:scale-[1.02] transition-transform"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
