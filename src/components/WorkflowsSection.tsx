import React from 'react';

const WorkflowsSection: React.FC = () => {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl font-bold mb-8 leading-tight">
          All your workflows,<br />in one workspace
        </h2>
        <div className="mt-12">
          <div className="bg-hex-darker rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <div className="p-4">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th className="bg-emerald-800/20">94%</th>
                    <th className="bg-emerald-800/20">87%</th>
                    <th className="bg-emerald-800/20">81%</th>
                    <th className="bg-red-800/20">77%</th>
                    <th className="bg-red-800/20">74%</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2023-10-01</td>
                    <td className="bg-emerald-800/20">94%</td>
                    <td className="bg-emerald-800/20">87%</td>
                    <td className="bg-emerald-800/20">81%</td>
                    <td className="bg-red-800/20">77%</td>
                    <td className="bg-red-800/20">74%</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2023-11-01</td>
                    <td className="bg-emerald-800/20">92%</td>
                    <td className="bg-emerald-800/20">86%</td>
                    <td className="bg-emerald-800/20">81%</td>
                    <td className="bg-red-800/20">77%</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2023-12-01</td>
                    <td className="bg-emerald-800/20">93%</td>
                    <td className="bg-emerald-800/20">85%</td>
                    <td className="bg-emerald-800/20">80%</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2024-01-01</td>
                    <td className="bg-emerald-800/20">92%</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowsSection;