import React from 'react';
import { Play } from 'lucide-react';

const DashboardSection: React.FC = () => {
  return (
    // <section className="relative py-20">
      <img 
        src="https://hex.tech/static/9b99e0dbb4f7331ba2d83cef71cc8838/60ca0/team-work%402x.avif" 
        alt="Dashboard visualization" 
        className="w-full h-auto object-cover" 
        width="977" 
        height="825" 
        loading="lazy" 
        decoding="async"
      />
    // </section> 
  );
};

export default DashboardSection;