import React from 'react';

const StatsCard = ({ title, value, icon, trend, trendValue, color = 'blue' }) => {
  const colorVariants = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</p>
          <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">{value}</p>
          
          {trend && (
            <div className={`flex items-center mt-2 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              <span className={`mr-1 ${trend === 'up' ? '↑' : '↓'}`}>
                {trend === 'up' ? '↑' : '↓'}
              </span>
              <span className="text-sm font-medium">{trendValue}</span>
            </div>
          )}
        </div>
        
        <div className={`p-3 rounded-xl bg-gradient-to-r ${colorVariants[color]} text-white`}>
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;