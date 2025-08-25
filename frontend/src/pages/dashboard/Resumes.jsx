import React, { useState } from 'react';
import UploadResumeCard from '../../components/resumes/UploadResumeCard';
import ResumeCard from '../../components/resumes/ResumeCard';

const Resumes = () => {
  const [resumes, setResumes] = useState([
    {
      id: 1,
      name: 'Software_Engineer_Resume.pdf',
      uploadDate: '2 days ago',
      atsScore: 85,
      feedback: 'Strong technical skills section'
    },
    {
      id: 2,
      name: 'Product_Manager_Resume.pdf',
      uploadDate: '1 week ago',
      atsScore: 72,
      feedback: 'Good leadership examples'
    },
    {
      id: 3,
      name: 'Frontend_Developer_Resume.pdf',
      uploadDate: '3 weeks ago',
      atsScore: 58,
      feedback: 'Needs more quantifiable results'
    }
  ]);

  const [defaultResumeId, setDefaultResumeId] = useState(1);

  const handleSetDefault = (id) => {
    setDefaultResumeId(id);
  };

  const handleDeleteResume = (id) => {
    setResumes(resumes.filter(resume => resume.id !== id));
    if (defaultResumeId === id) {
      setDefaultResumeId(resumes[0]?.id || null);
    }
  };

  const handleViewResume = (resume) => {
    console.log('Viewing resume:', resume.name);
    // Here you would implement the actual view functionality
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">My Resumes</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Upload and manage your resumes for ATS optimization
          </p>
        </div>
      </div>

      {/* Upload Section */}
      <div className="mb-8">
        <UploadResumeCard />
      </div>

      {/* Resumes Grid */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Your Resumes</h3>
        
        {resumes.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <div className="text-6xl mb-4">📄</div>
            <p>No resumes uploaded yet</p>
            <p className="text-sm">Upload your first resume to get started</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumes.map((resume) => (
              <ResumeCard
                key={resume.id}
                resume={resume}
                isDefault={resume.id === defaultResumeId}
                onSetDefault={() => handleSetDefault(resume.id)}
                onDelete={() => handleDeleteResume(resume.id)}
                onView={() => handleViewResume(resume)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resumes;