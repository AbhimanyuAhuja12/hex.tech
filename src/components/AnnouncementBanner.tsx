import React from 'react';

const AnnouncementBanner: React.FC = () => {
  return (
    <div className="bg-hex-darker py-1 text-sm overflow-hidden border-b border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="mx-4">🚀 SnowFlake Summit 2025: how modern data teams are ditching legacy tools and playbooks 🔗</div>
        <div className="mx-4">✨ In SF June 2-4 for Summit? join us at Club Hex 🎉</div>
        <div className="mx-4">📊 send us your charts for our gallery 🔗</div>
        <div className="mx-4">🚀 SnowFlake Summit 2025: how modern data teams are ditching legacy tools and playbooks 🔗</div>
        <div className="mx-4">✨ In SF June 2-4 for Summit? join us at Club Hex 🎉</div>
        <div className="mx-4">📊 send us your charts for our gallery 🔗</div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;