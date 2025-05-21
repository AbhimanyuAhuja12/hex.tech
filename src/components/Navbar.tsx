import React from 'react';
import { ChevronDown } from 'lucide-react';
import HexLogo from './HexLogo';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hex-dark/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <nav className="flex items-center space-x-8">
            <div className="dropdown relative group">
              <button className="nav-link">
                Product <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="dropdown-menu z-10">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-hex-dark/50 rounded">Overview</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-hex-dark/50 rounded">Features</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-hex-dark/50 rounded">Solutions</a>
                </div>
              </div>
            </div>
            <div className="dropdown relative group">
              <button className="nav-link">
                Use cases <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="dropdown-menu z-10">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-hex-dark/50 rounded">Data Science</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-hex-dark/50 rounded">Analytics</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-hex-dark/50 rounded">Business Intelligence</a>
                </div>
              </div>
            </div>
            <a href="#" className="nav-link">Enterprise</a>
            <a href="/" className="flex-shrink-0 mx-8">
              <HexLogo className="h-8 w-auto" />
            </a>
            <div className="dropdown relative group">
              <button className="nav-link">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="dropdown-menu z-10">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-hex-dark/50 rounded">Documentation</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-hex-dark/50 rounded">Blog</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-hex-dark/50 rounded">Community</a>
                </div>
              </div>
            </div>
            <a href="#" className="nav-link">Pricing</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm font-medium hover:text-hex-pink transition-colors">
              Log In
            </a>
            <a href="#" className="button-primary">
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;