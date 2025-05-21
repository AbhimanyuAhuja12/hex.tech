import React from 'react';
import { Play } from 'lucide-react';

const DashboardSection: React.FC = () => {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-hex-darker rounded-lg border border-white/10 shadow-2xl overflow-hidden">
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-hex-pink font-bold text-xl">HEX</div>
              <span className="text-gray-400">Workspace Churn Analysis</span>
              <button className="text-gray-400 hover:text-white">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-400">From cache: Just now</span>
              <button className="p-1 rounded hover:bg-white/10">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="button-outlined text-sm">Share</button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-300">Trusted</span>
            </div>

            <button className="flex items-center space-x-2 text-gray-300 hover:text-white mb-8 bg-hex-dark/50 px-4 py-2 rounded-full">
              <Play className="h-4 w-4" />
              <span>Watch a full demo</span>
              <span className="text-gray-500">5 min</span>
            </button>
            
            <h2 className="text-2xl font-bold mb-6">ARR and workspaces churned by month</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium mb-4 text-gray-400">Churned workspaces by month</h3>
                <div className="bg-hex-dark h-64 rounded-lg border border-white/10 flex items-center justify-center">
                  <p className="text-sm text-gray-400">Stacked area chart visualization</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-4 text-gray-400">Churned ARR by month</h3>
                <div className="bg-hex-dark h-64 rounded-lg border border-white/10 flex items-center justify-center">
                  <p className="text-sm text-gray-400">Line chart visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;