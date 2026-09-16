import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroBento } from './components/HeroBento';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ChessDecorations } from './components/ChessDecorations';
import { ChessScrollTracker } from './components/ChessScrollTracker';
import { ThemeProvider } from './context/ThemeContext';

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen text-white relative selection:bg-[#FF8C00] selection:text-black overflow-x-hidden transition-colors duration-400">
      {/* Background Ambient Grid */}
      <div className="fixed inset-0 bg-ambient-grid pointer-events-none opacity-40 z-0" />

      {/* Interactive Floating Chess Pieces Layer */}
      <ChessDecorations />

      {/* Custom Chess Pawn-to-Queen Scroll Progress Bar */}
      <ChessScrollTracker />

      {/* Interactive Custom Glowing Cursor */}
      <CustomCursor />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <HeroBento />
        <ExperienceEducation />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;


