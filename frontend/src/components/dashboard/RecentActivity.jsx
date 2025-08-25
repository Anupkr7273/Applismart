import React from 'react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      action: 'Resume Uploaded',
      description: 'Software Engineer Resume.pdf',
      time: '2 hours ago',
      icon: '📄',
      color: 'text-blue-500'
    },
    {
      id: 2,
      action: 'ATS Score Generated',
      description: 'Score: 85% - Great job!',
      time: '5 hours ago',
      icon: '⭐',
      color: 'text-green-500'
    },
    {
      id: 3,
      action: 'Cover Letter Created',
      description: 'For Google Software Engineer role',
      time: '1 day ago',
      icon: '✉️',
      color: 'text-purple-500'
    },
    {
      id: 4,
      action: 'Resume Tailored',
      description: 'Matched to Amazon Job Description',
      time: '2 days ago',
      icon: '🎯',
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`text-xl ${activity.color} mt-1`}>
              {activity.icon}
            </div>
            
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800 dark:text-white">
                {activity.action}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {activity.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-center text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
        View all activity →
      </button>
    </div>
  );
};

export default RecentActivity;