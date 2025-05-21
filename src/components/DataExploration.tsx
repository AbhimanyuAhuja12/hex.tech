import React from 'react';
import CodeBlock from './CodeBlock';

const DataExploration: React.FC = () => {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/7256913/pexels-photo-7256913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Data visualization icon" 
              className="w-20 h-20 mb-6 opacity-80"
            />
            <h2 className="text-5xl sm:text-6xl font-bold mb-8 leading-tight">
              Data<br />exploration<br />superpowers
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              SQL, Python, R, pivots,<br />
              spreadsheets, charts, all<br />
              together, all in a modular,<br />
              notebook-based canvas.
            </p>
            <a href="#" className="inline-flex button-primary text-lg">
              Explore Notebooks
            </a>
          </div>
          <div>
            <div className="bg-hex-darker rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <div className="p-4 border-b border-white/10">
                <h3 className="text-sm font-medium">Python cell</h3>
              </div>
              <div className="p-4">
                <CodeBlock code={`import scipy.stats as stats

segments = df['GROUP_NAME'].unique()
churned_arr_groups = [df[df['GROUP_NAME'] == segment]['CHURNED_ARR'] for segment in segments]

anova_result = stats.f_oneway(*churned_arr_groups)
print(f"ANOVA F-statistic: {anova_result.statistic}, p-value: {anova_result.pvalue}")`} 
                  language="python" 
                />
              </div>
            </div>
            
            <div className="bg-hex-darker rounded-lg overflow-hidden border border-white/10 shadow-2xl mt-6">
              <div className="p-4 border-b border-white/10 flex justify-between items-center">
                <h3 className="text-sm font-medium">Number of churned workspaces by churn month</h3>
                <div className="flex space-x-2">
                  <button className="p-1 rounded hover:bg-white/10">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>midmarket | Company</th>
                      <th>0.0</th>
                      <th>8</th>
                      <th>34974</th>
                      <th>104569.09500</th>
                      <th>123</th>
                      <th>15.375</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>5</td>
                      <td>midmarket | Company</td>
                      <td>0.0</td>
                      <td>16</td>
                      <td>9803</td>
                      <td>92766.86000</td>
                      <td>155</td>
                      <td>19.375</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataExploration;