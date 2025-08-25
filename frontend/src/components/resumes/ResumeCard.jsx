import React from 'react';

const ResumeCard = ({ resume, isDefault, onSetDefault, onDelete, onView }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreBadge = (score) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    return 'Needs Work';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 backdrop-blur-sm hover:shadow-xl transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">📄</div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white truncate max-w-[200px]">
              {resume.name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Uploaded {resume.uploadDate}
            </p>
          </div>
        </div>
        
        {isDefault && (
          <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full">
            Default
          </span>
        )}
      </div>

      {/* ATS Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">ATS Score</span>
          <span className={`text-lg font-bold ${getScoreColor(resume.atsScore)}`}>
            {resume.atsScore}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              resume.atsScore >= 80
                ? 'bg-green-500'
                : resume.atsScore >= 60
                ? 'bg-yellow-500'
                : 'bg-red-500'
            }`}
            style={{ width: `${resume.atsScore}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {getScoreBadge(resume.atsScore)} • {resume.feedback}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between space-x-2">
        <button
          onClick={onView}
          className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          View
        </button>
        
        {!isDefault && (
          <button
            onClick={onSetDefault}
            className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            Set Default
          </button>
        )}
        
        <button
          onClick={onDelete}
          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Delete resume"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ResumeCard;