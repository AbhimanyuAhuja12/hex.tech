import { useState } from 'react';

interface NavigationItem {
  id: string;
  label: string;
}

const DataPlatformComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  const navigationItems: NavigationItem[] = [
    { id: 'product', label: 'Product' },
    { id: 'usecases', label: 'Use cases' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'resources', label: 'Resources' },
    { id: 'pricing', label: 'Pricing' }
  ];

  return (
    <div className="w-full  text-white font-sans">
    
      {/* Hero Section */}
      <div className="px-6 py-12 text-center">
        <h1 className="text-6xl font-bold mb-4">Build anything<br />with data</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Learn how to do almost anything in Hex,<br />
          from complex ML forecasting to critical business dashboards.
        </p>
        <button className="mt-8 border border-pink-300 text-pink-300 hover:bg-pink-300 hover:text-gray-900 px-6 py-2 rounded">
          View all templates
        </button>
      </div>

      {/* Featured Categories Section - Grid Layout */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-3 border-l border-gray-800">
          {/* Time Series Card */}
          <div className="border-r border-b border-gray-800">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Time Series</h2>
              <p className="text-gray-400 text-sm">
                Discover meaningful patterns and trends by visualizing data over time.
              </p>
            </div>
            <div className="h-64 p-4 border-t border-gray-800 flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-full h-48" viewBox="0 0 300 100">
                  <path 
                    d="M0,70 Q25,20 50,50 Q75,70 100,30 Q125,10 150,40 Q175,60 200,25 Q225,15 250,50 Q275,60 300,25" 
                    fill="none" 
                    stroke="#3B82F6" 
                    strokeWidth="1.5"
                  />
                  <path 
                    d="M0,70 Q25,20 50,50 Q75,70 100,30 Q125,10 150,40 Q175,60 200,25 Q225,15 250,50 Q275,60 300,25" 
                    fill="none" 
                    stroke="#60A5FA" 
                    strokeWidth="0.5"
                    strokeDasharray="1,1"
                  />
                  <circle cx="50" cy="50" r="2" fill="#3B82F6" />
                  <circle cx="100" cy="30" r="2" fill="#3B82F6" />
                  <circle cx="150" cy="40" r="2" fill="#3B82F6" />
                  <circle cx="200" cy="25" r="2" fill="#3B82F6" />
                  <circle cx="250" cy="50" r="2" fill="#3B82F6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Natural Language Processing Card */}
          <div className="border-r border-b border-gray-800">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Natural Language Processing</h2>
              <p className="text-gray-400 text-sm">
                Empower your AI and ML applications to interpret, recognize, and generate human language with powerful NLP algorithms.
              </p>
            </div>
            <div className="h-64 border-t border-gray-800">
              <div className="grid grid-cols-1 h-full">
                <div className="p-4 flex flex-col space-y-2">
                  <div className="h-6 bg-gray-800 rounded-sm w-3/4"></div>
                  <div className="h-6 bg-gray-800 rounded-sm w-full"></div>
                  <div className="h-6 bg-gray-800 rounded-sm w-1/2"></div>
                </div>
                <div className="grid grid-cols-3 gap-1 p-4">
                  <div className="h-24 bg-gray-800 rounded-sm"></div>
                  <div className="h-24 bg-gray-800 rounded-sm"></div>
                  <div className="h-24 bg-gray-800 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Visualization Card */}
          <div className="border-r border-b border-gray-800">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Data Visualization</h2>
              <p className="text-gray-400 text-sm">
                Transform raw data into actionable insights, interactive visualizations, dashboards, and reports.
              </p>
            </div>
            <div className="h-64 border-t border-gray-800 grid grid-cols-2 gap-2 p-4">
              <div className="bg-gray-800 rounded flex items-center justify-center">
                <div className="w-24 h-24 relative">
                  <div className="w-20 h-20 bg-red-500/40 rounded-full absolute top-0 left-0 blur-sm"></div>
                  <div className="w-20 h-20 bg-blue-500/40 rounded-full absolute bottom-0 right-0 blur-sm"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-2">
                <div className="bg-gray-800 rounded p-2">
                  <div className="h-full w-full flex items-end justify-around">
                    <div className="w-2 h-12 bg-blue-500 rounded-t"></div>
                    <div className="w-2 h-16 bg-blue-500 rounded-t"></div>
                    <div className="w-2 h-8 bg-blue-500 rounded-t"></div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded p-2">
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="w-full h-full bg-blue-900/20 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 100 40">
                        <path 
                          d="M0,30 C15,25 25,10 40,15 C55,20 65,30 80,25 C90,22 95,15 100,20" 
                          fill="none" 
                          stroke="#3B82F6" 
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded p-2 col-span-2">
                  <div className="flex items-center justify-center h-full">
                    <div className="grid grid-cols-5 gap-1 w-full">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-4 bg-blue-500" style={{ opacity: 0.4 + (i * 0.15) }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Clustering Card */}
          <div className="border-r border-b border-gray-800">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Data Clustering</h2>
              <p className="text-gray-400 text-sm">
                Unleash the power of data clustering—an unsupervised machine learning technique that uncovers patterns and groups similar data together.
              </p>
            </div>
            <div className="h-64 border-t border-gray-800 p-4">
              <div className="grid grid-cols-2 gap-2 h-full">
                <div className="bg-gray-800 rounded flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    {[...Array(15)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-green-400"
                        style={{
                          left: `${10 + Math.random() * 30}px`,
                          top: `${10 + Math.random() * 30}px`,
                          opacity: 0.6 + Math.random() * 0.4
                        }}
                      ></div>
                    ))}
                    {[...Array(15)].map((_, i) => (
                      <div 
                        key={i + 15}
                        className="absolute w-2 h-2 rounded-full bg-blue-400"
                        style={{
                          left: `${70 + Math.random() * 30}px`,
                          top: `${70 + Math.random() * 30}px`,
                          opacity: 0.6 + Math.random() * 0.4
                        }}
                      ></div>
                    ))}
                    {[...Array(15)].map((_, i) => (
                      <div 
                        key={i + 30}
                        className="absolute w-2 h-2 rounded-full bg-red-400"
                        style={{
                          left: `${70 + Math.random() * 30}px`,
                          top: `${10 + Math.random() * 30}px`,
                          opacity: 0.6 + Math.random() * 0.4
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-800 rounded flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute w-20 h-20 rounded-full border border-blue-400 top-2 left-2"></div>
                    <div className="absolute w-20 h-20 rounded-full border border-green-400 bottom-2 right-2"></div>
                    <div className="absolute w-20 h-20 rounded-full border border-red-400 top-2 right-12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sentiment Analysis Card */}
          <div className="border-r border-b border-gray-800">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Sentiment Analysis</h2>
              <p className="text-gray-400 text-sm">
                Decipher subjective information in text to determine its polarity and subjectivity, explore advanced techniques and Python integration.
              </p>
            </div>
            <div className="h-64 border-t border-gray-800 p-4 flex items-center justify-center">
              <div className="flex space-x-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/50 flex items-center justify-center">
                    <span className="text-2xl">😠</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-400">Negative</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-600/50 flex items-center justify-center">
                    <span className="text-2xl">😐</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-400">Neutral</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/50 flex items-center justify-center">
                    <span className="text-2xl">😄</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-400">Positive</div>
                </div>
              </div>
            </div>
          </div>

          {/* KPI Dashboards Card */}
          <div className="border-r border-b border-gray-800">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">KPI Dashboards</h2>
              <p className="text-gray-400 text-sm">
                Track and monitor business KPIs, offer insights into sales performance, customer satisfaction, and operational efficiency.
              </p>
            </div>
            <div className="h-64 border-t border-gray-800 p-4">
              <div className="h-full grid grid-cols-2 grid-rows-2 gap-2">
                <div className="bg-gray-800 rounded p-2">
                  <div className="text-xs text-gray-500 mb-1">Revenue</div>
                  <div className="flex items-end h-20 justify-around">
                    {[...Array(7)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-3 bg-blue-500 rounded-t" 
                        style={{ height: `${10 + Math.random() * 70}px` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-800 rounded p-2">
                  <div className="text-xs text-gray-500 mb-1">Conversion</div>
                  <div className="flex justify-center items-center h-20">
                    <div className="w-20 h-20 relative">
                      <div className="absolute inset-0 border-4 border-blue-500 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-transparent border-t-green-500 rounded-full transform rotate-45"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded p-2">
                  <div className="text-xs text-gray-500 mb-1">Traffic</div>
                  <div className="h-20 flex items-center justify-center">
                    <svg className="w-full h-16" viewBox="0 0 100 40">
                      <path 
                        d="M0,30 C10,28 20,10 30,12 C40,14 50,30 60,28 C70,26 80,10 90,8 L90,40 L0,40 Z" 
                        fill="rgba(59, 130, 246, 0.3)"
                      />
                      <path 
                        d="M0,30 C10,28 20,10 30,12 C40,14 50,30 60,28 C70,26 80,10 90,8" 
                        fill="none" 
                        stroke="#3B82F6" 
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-gray-800 rounded p-2">
                  <div className="text-xs text-gray-500 mb-1">Users</div>
                  <div className="h-20 flex items-center">
                    <div className="flex justify-around items-center w-full">
                      <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-blue-500/60"></div>
                      </div>
                      <div className="text-xl font-bold text-blue-500">2.4K</div>
                      <div className="text-xs text-green-500">+12%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default DataPlatformComponent;