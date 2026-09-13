import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Globe, Send, CheckCircle2, MapPin } from 'lucide-react';
import { developerDetails } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const p = developerDetails.personal;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#FF8C00]">
            <span>// GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Let's Build Something Great
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Available for software engineering opportunities, full-stack projects, or technical collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold text-white font-outfit">Direct Contact Info</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Feel free to reach out directly via email, phone/WhatsApp, or connect with me on social platforms.
              </p>

              <div className="space-y-4 pt-2">
                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-[#FF8C00]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">LOCATION</div>
                    <div className="text-sm font-semibold text-white">
                      {p.location}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <a
                  href={`mailto:${p.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FF8C00]/40 hover:bg-[#FF8C00]/5 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#FF8C00]/10 border border-[#FF8C00]/30 text-[#FF8C00] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">EMAIL ADDRESS</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#FF8C00] transition-colors">
                      {p.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={p.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FF8C00]/40 hover:bg-[#FF8C00]/5 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">WHATSAPP / PHONE</div>
                    <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {p.phone}
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={p.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FF8C00]/40 hover:bg-[#FF8C00]/5 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">LINKEDIN PROFILE</div>
                    <div className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                      tanmay-phadke22
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={p.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FF8C00]/40 hover:bg-[#FF8C00]/5 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-white/10 border border-white/20 text-white group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">GITHUB PROFILE</div>
                    <div className="text-sm font-semibold text-white group-hover:text-white transition-colors">
                      Tanmay-Phadke
                    </div>
                  </div>
                </a>

              </div>
            </div>

          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white font-outfit mb-6">Send A Direct Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white font-outfit">Message Received!</h4>
                  <p className="text-sm text-zinc-300">
                    Thank you for getting in touch. I will respond to your message shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-400">YOUR NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] transition-colors text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-400">YOUR EMAIL</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-400">SUBJECT</label>
                    <input
                      type="text"
                      required
                      placeholder="Software Opportunity / Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-400">MESSAGE</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hello Tanmay, I would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FF8C00] to-[#FF5F00] text-black font-bold text-sm shadow-[0_0_25px_rgba(255,140,0,0.4)] hover:shadow-[0_0_35px_rgba(255,140,0,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
