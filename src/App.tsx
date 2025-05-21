import React from 'react';
import Navbar from './components/Navbar.tsx';
import AnnouncementBanner from './components/AnnouncementBanner.tsx';
import DataExploration from './components/DataExploration.tsx';
import WorkflowsSection from './components/WorkflowsSection.tsx';
import TrustedBySection from './components/TrustedBySection.tsx';
import DashboardSection from './components/DashboardSection.tsx';
import CtaSection from './components/CtaSection.tsx';
import DataPlatformComponent from './components/DataPlatformComponent.tsx';

function App() {
  return (
    <div className="min-h-screen bg-hex-dark text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <AnnouncementBanner />
      <Navbar />
      <main>
        {/* <HeroSection /> */}
        <CtaSection />
        <DataExploration />
        <WorkflowsSection />
        <TrustedBySection />
        <DashboardSection />
        <DataPlatformComponent/>
       
      </main>
    </div>
  );
}

export default App;




