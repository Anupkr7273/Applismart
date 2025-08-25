import React, { useCallback, useState } from 'react';

const UploadResumeCard = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  }, []);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleFileUpload = (file) => {
    // Simulate file upload process
    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          // Here you would call your actual API endpoint
          console.log('File uploaded:', file.name);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Upload New Resume</h3>
      
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
          isDragging
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
            : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isUploading ? (
          <div className="space-y-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Uploading... {uploadProgress}%
            </p>
          </div>
        ) : (
          <>
            <div className="text-4xl mb-4">📄</div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Drag & drop your resume here
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              PDF format only • Max 5MB
            </p>
            <input
              type="file"
              id="resume-upload"
              accept=".pdf"
              onChange={handleFileSelect}
              className="hidden"
            />
            <label
              htmlFor="resume-upload"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              Browse Files
            </label>
          </>
        )}
      </div>

      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        <p>• We'll analyze your resume for ATS compatibility</p>
        <p>• Your data is kept private and secure</p>
      </div>
    </div>
  );
};

export default UploadResumeCard;