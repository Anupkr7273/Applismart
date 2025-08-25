import React from 'react';

const DashboardHeader = ({ onMenuClick }) => {
  return (
    <header className="z-10 px-6 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        {/* Left: Menu button for mobile */}
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Center: Page title could go here */}
        <div className="flex-1"></div>

        {/* Right: User menu & dark mode toggle */}
        <div className="flex items-center space-x-4">
          {/* Dark mode toggle would go here */}
          
          {/* User avatar */}
          <div className="relative">
            <button className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                U
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;