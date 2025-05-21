import React from 'react';
import Navbar from './components/Navbar';
import AnnouncementBanner from './components/AnnouncementBanner';
import DataExploration from './components/DataExploration';
import WorkflowsSection from './components/WorkflowsSection';
import TrustedBySection from './components/TrustedBySection';
import DashboardSection from './components/DashboardSection';
import CtaSection from './components/CtaSection';

function App() {
  return (
    <div className="min-h-screen bg-hex-dark text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <AnnouncementBanner />
      <Navbar />
      <main>
        {/* <HeroSection /> */}
        <DataExploration />
        <WorkflowsSection />
        <TrustedBySection />
        <DashboardSection />
        <CtaSection />
      </main>
    </div>
  );
}

export default App;