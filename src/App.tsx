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

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0F0E0E] text-white relative selection:bg-[#FF8C00] selection:text-black overflow-x-hidden">
      {/* Background Ambient Grid & Radial Gradients */}
      <div className="fixed inset-0 bg-ambient-grid pointer-events-none opacity-40 z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-radial-glow pointer-events-none opacity-60 blur-3xl z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-radial-bottom pointer-events-none opacity-40 blur-3xl z-0" />

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

export default App;
