import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/7256913/pexels-photo-7256913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Data visualization icon" 
              className="w-20 h-20 mb-6 opacity-80"
            />
            <h2 className="text-5xl sm:text-6xl font-bold mb-8 leading-tight">
              Bring<br />everyone<br />together<br />with data
            </h2>
          </div>
          <div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Go end-to-end from quick<br />
              queries to deep-dive analyses to<br />
              beautiful interactive data apps –<br />
              all in one collaborative, AI-<br />
              powered workspace.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="button-primary text-center py-3 px-6">
                Get started for free
              </a>
              <a href="#" className="button-outlined text-center py-3 px-6">
                Request a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;