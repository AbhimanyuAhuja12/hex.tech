import React from 'react';

interface HexLogoProps {
  className?: string;
}

const HexLogo: React.FC<HexLogoProps> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 10H30V30H15V10Z" fill="#f8c4b4" />
      <path d="M35 10H50V30H35V10Z" fill="#f8c4b4" />
      <path d="M55 10H70V30H55V10Z" fill="#f8c4b4" />
      <path d="M35 10V30" stroke="#161618" strokeWidth="3" />
      <path d="M15 20H70" stroke="#161618" strokeWidth="3" />
    </svg>
  );
};

export default HexLogo;