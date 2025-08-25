import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './DashboardHeader';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar - hidden on mobile, shown on desktop */}
      <Sidebar isOpen={sidebarOpen} />
      
      {/* Main content area */}
      <div className="flex flex-col flex-1 w-full">
        {/* Header with menu button */}
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        {/* Scrollable main content */}
        <main className="h-full overflow-y-auto">
          <div className="container px-6 py-8 mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;