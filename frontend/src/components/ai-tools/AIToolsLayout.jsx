import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AIToolsLayout = ({ children }) => {
  const location = useLocation();
  
  const tools = [
    {
      name: 'Rewrite',
      href: '/ai-tools/rewrite',
      icon: '🔄',
      description: 'Enhance your resume bullet points'
    },
    {
      name: 'Tailor',
      href: '/ai-tools/tailor', 
      icon: '🎯',
      description: 'Match resume to job description'
    },
    {
      name: 'Cover Letter',
      href: '/ai-tools/cover-letter',
      icon: '✉️',
      description: 'Generate custom cover letters'
    },
    {
      name: 'Interview Prep',
      href: '/ai-tools/interview-prep',
      icon: '💼',
      description: 'Prepare for interviews'
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">AI Tools</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Supercharge your job search with our AI-powered tools
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {tools.map((tool) => {
          const isActive = location.pathname === tool.href;
          return (
            <Link
              key={tool.name}
              to={tool.href}
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg border-transparent'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800'
              }`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{tool.icon}</div>
                <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                  {tool.name}
                </h3>
                <p className={`text-sm mt-1 ${isActive ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>
                  {tool.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Tool Content */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        {children}
      </div>
    </div>
  );
};

export default AIToolsLayout;