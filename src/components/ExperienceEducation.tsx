import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Laptop, 
  Cpu, 
  BookOpen, 
  Sparkles,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { developerDetails, JourneyItem } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const ExperienceEducation: React.FC = () => {
  const { activeThemeConfig } = useTheme();
  const primaryColor = activeThemeConfig.primaryColor;

  const getIcon = (iconType: JourneyItem['iconType']) => {
    switch (iconType) {
      case 'foundation':
        return <BookOpen style={{ color: primaryColor }} className="w-5 h-5" />;
      case 'diploma':
        return <Laptop style={{ color: primaryColor }} className="w-5 h-5" />;
      case 'internship':
        return <Briefcase style={{ color: primaryColor }} className="w-5 h-5" />;
      case 'degree':
        return <Cpu style={{ color: primaryColor }} className="w-5 h-5" />;
      default:
        return <GraduationCap style={{ color: primaryColor }} className="w-5 h-5" />;
    }
  };

  return (
    <section id="experience" className="py-24 px-4 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* About & Bio Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden group">
          <div 
            style={{
              backgroundImage: `radial-gradient(circle at top right, ${primaryColor}20, transparent 70%)`
            }}
            className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700" 
          />
          
          <div className="space-y-4 max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono" style={{ color: primaryColor }}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>// ABOUT ME</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit tracking-tight">
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
                    className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-zinc-300 font-medium hover:text-white transition-colors"
                  >
                    ✦ {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MY JOURNEY SECTION HEADER */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: primaryColor }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-[0.25em] uppercase font-semibold"
          >
            <span className="w-8 h-[1px]" style={{ backgroundColor: primaryColor }} />
            THE STORY SO FAR
            <span className="w-8 h-[1px]" style={{ backgroundColor: primaryColor }} />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold font-outfit tracking-tight text-white flex items-center justify-center gap-3"
          >
            MY <span 
              style={{
                backgroundImage: `linear-gradient(135deg, ${primaryColor} 0%, ${activeThemeConfig.secondaryColor} 50%, #FFFFFF 100%)`
              }}
              className="bg-clip-text text-transparent drop-shadow-sm"
            >
              JOURNEY
            </span>
          </motion.h2>

          <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto">
            A chronological timeline of my academic milestones, technical education, and professional experience.
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative max-w-5xl mx-auto mt-12">
          
          {/* Vertical Glowing Line */}
          <div 
            style={{
              backgroundImage: `linear-gradient(to bottom, ${primaryColor}, ${activeThemeConfig.secondaryColor} 60%, transparent)`,
              boxShadow: `0 0 12px ${primaryColor}80`
            }}
            className="absolute left-5 sm:left-6 lg:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 z-0" 
          />

          <div className="space-y-12 sm:space-y-16 relative z-10">
            {developerDetails.journeySteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isCurrent = step.status === 'Pursuing';

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-5 sm:left-6 lg:left-1/2 -translate-x-1/2 top-7 z-20 flex items-center justify-center">
                    {isCurrent ? (
                      <div className="relative flex items-center justify-center">
                        <div 
                          style={{ backgroundColor: primaryColor }}
                          className="absolute w-8 h-8 rounded-full opacity-30 animate-ping" 
                        />
                        <div 
                          style={{ borderColor: primaryColor, boxShadow: `0 0 20px ${primaryColor}` }}
                          className="w-5 h-5 rounded-full bg-white ring-4 z-10" 
                        />
                      </div>
                    ) : (
                      <div 
                        style={{ 
                          backgroundColor: primaryColor,
                          boxShadow: `0 0 12px ${primaryColor}`
                        }}
                        className="w-4 h-4 rounded-full ring-4 ring-white/10 group-hover:scale-125 transition-all duration-300" 
                      />
                    )}
                  </div>

                  {/* Content Layout (Mobile: Always pl-14, Desktop: Alternating Left & Right) */}
                  <div className={`pl-14 sm:pl-16 lg:pl-0 lg:w-[calc(50%-2.5rem)] ${
                    isEven ? 'lg:mr-auto lg:text-right' : 'lg:ml-auto lg:text-left'
                  }`}>
                    
                    {/* Year Indicator Header */}
                    <div 
                      style={{ color: primaryColor }}
                      className={`mb-2 flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold tracking-wider ${
                        isEven ? 'lg:justify-end' : 'lg:justify-start'
                      }`}
                    >
                      {isEven ? (
                        <>
                          <span>{step.year}</span>
                          <span className="w-6 h-0.5 hidden lg:inline-block opacity-60" style={{ backgroundColor: primaryColor }} />
                        </>
                      ) : (
                        <>
                          <span className="w-6 h-0.5 hidden lg:inline-block opacity-60" style={{ backgroundColor: primaryColor }} />
                          <span>{step.year}</span>
                        </>
                      )}
                    </div>

                    {/* Timeline Card */}
                    <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4 transition-all duration-300 relative overflow-hidden">
                      
                      {/* Card Header: Icon + Title + Status */}
                      <div className={`flex flex-col sm:flex-row gap-4 items-start ${
                        isEven ? 'lg:flex-row-reverse lg:items-center' : 'sm:items-center'
                      }`}>
                        
                        {/* Icon Badge */}
                        <div 
                          style={{ 
                            backgroundColor: `${primaryColor}15`,
                            borderColor: `${primaryColor}40`
                          }}
                          className="w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform"
                        >
                          {getIcon(step.iconType)}
                        </div>

                        {/* Title & Subtitle */}
                        <div className="space-y-1 flex-1">
                          <div className={`flex flex-wrap items-center gap-2 ${
                            isEven ? 'lg:justify-end' : 'lg:justify-start'
                          }`}>
                            <h3 className="text-lg sm:text-xl font-bold text-white font-outfit">
                              {step.title}
                            </h3>
                            {step.status === 'Pursuing' && (
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 animate-pulse">
                                Pursuing
                              </span>
                            )}
                          </div>

                          <div className={`flex items-center gap-1.5 text-xs text-zinc-400 font-medium ${
                            isEven ? 'lg:justify-end' : 'lg:justify-start'
                          }`}>
                            <Building2 style={{ color: primaryColor }} className="w-3.5 h-3.5" />
                            <span>{step.institution}</span>
                            <span className="text-zinc-600">•</span>
                            <span className="text-zinc-300 font-semibold">{step.boardOrUniversity}</span>
                          </div>
                        </div>

                      </div>

                      {/* Description Paragraph */}
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                        {step.description}
                      </p>

                      {/* Highlight Chips */}
                      <div className={`flex flex-wrap gap-2 pt-2 border-t border-white/5 ${
                        isEven ? 'lg:justify-end' : 'lg:justify-start'
                      }`}>
                        {step.highlights.map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-[11px] text-zinc-300 font-mono"
                          >
                            <CheckCircle2 style={{ color: primaryColor }} className="w-3 h-3" />
                            {item}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};


