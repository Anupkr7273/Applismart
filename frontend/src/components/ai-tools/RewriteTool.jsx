import React, { useState } from 'react';

const RewriteTool = () => {
  const [originalText, setOriginalText] = useState('');
  const [rewrittenText, setRewrittenText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tone, setTone] = useState('professional');

  const handleRewrite = async () => {
    if (!originalText.trim()) return;
    
    setIsLoading(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      // This would be replaced with actual API call to OpenAI
      const sampleRewrites = [
        "Engineered scalable microservices architecture that improved system performance by 40% and reduced latency by 60ms",
        "Developed and deployed 15+ React components that increased user engagement by 25% and decreased load time by 30%",
        "Led cross-functional team of 5 developers to deliver MVP 2 weeks ahead of schedule, resulting in 15% cost savings"
      ];
      
      setRewrittenText(sampleRewrites[Math.floor(Math.random() * sampleRewrites.length)]);
      setIsLoading(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(rewrittenText);
    // You could add a toast notification here
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Resume Rewriter</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Enhance your bullet points with AI-powered suggestions
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="bg-gray-100 dark:bg-gray-700 border-0 rounded-lg px-4 py-2 text-gray-800 dark:text-white"
          >
            <option value="professional">Professional</option>
            <option value="achievement">Achievement-oriented</option>
            <option value="concise">Concise</option>
            <option value="strong">Strong Action Verbs</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Original Bullet Point
          </label>
          <textarea
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
            placeholder="Example: Worked on improving website performance and added new features..."
            className="w-full h-48 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
          
          <button
            onClick={handleRewrite}
            disabled={isLoading || !originalText.trim()}
            className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Rewriting...
              </span>
            ) : (
              'Rewrite with AI'
            )}
          </button>
        </div>

        {/* Output Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Enhanced Version
            </label>
            {rewrittenText && (
              <button
                onClick={handleCopy}
                className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 flex items-center"
              >
                📋 Copy
              </button>
            )}
          </div>
          
          <div className="w-full h-48 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 overflow-y-auto">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-pulse text-gray-400">AI is working its magic...</div>
              </div>
            ) : rewrittenText ? (
              <div className="text-gray-800 dark:text-white">
                {rewrittenText}
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-sm text-green-700 dark:text-green-300">
                    ✅ <strong>Improved:</strong> Used stronger action verbs, added quantifiable results, and focused on impact
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-gray-400 dark:text-gray-500 h-full flex items-center justify-center">
                <p>Your enhanced bullet point will appear here</p>
              </div>
            )}
          </div>

          {rewrittenText && (
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">💡 Pro Tip</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Use numbers and metrics to quantify your achievements. Instead of "improved performance" 
                say "increased performance by 40%".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RewriteTool;