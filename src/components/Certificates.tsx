import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { developerDetails, Certification } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#FF8C00]">
            <span>// CREDENTIALS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Verified Certifications
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Professional certifications in Version Control, Agile Scrum, Generative AI, Artificial Intelligence, and Data Science.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {developerDetails.certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-card rounded-2xl border border-white/10 overflow-hidden cursor-pointer group hover:border-[#FF8C00]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950 border-b border-white/10">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF8C00] text-black font-semibold text-xs shadow-lg transform group-hover:scale-105 transition-transform">
                    <Eye className="w-4 h-4" />
                    <span>Preview Certificate</span>
                  </span>
                </div>

                {/* Issuer Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#FF8C00]">
                    <Award className="w-3 h-3" />
                    <span>{cert.issuer} ({cert.issueDate})</span>
                  </span>
                </div>
              </div>

              {/* Title & Info */}
              <div className="p-5 flex flex-col justify-between gap-3 flex-grow">
                <div>
                  <h3 className="text-base font-bold text-white font-outfit group-hover:text-[#FF8C00] transition-colors">
                    {cert.title}
                  </h3>
                </div>

                {/* Skills tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {cert.skills.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-[10px] text-zinc-400 font-mono"
                      >
                        {s}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[10px] text-zinc-500 font-mono self-center">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal View */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
