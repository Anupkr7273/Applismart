import React from 'react';
import AIToolsLayout from '../../components/ai-tools/AIToolsLayout';
import RewriteTool from '../../components/ai-tools/RewriteTool';

const AITools = () => {
  // This would typically use React Router to show different tools
  // For now, we'll demonstrate with the RewriteTool
  return (
    <AIToolsLayout>
      <RewriteTool />
    </AIToolsLayout>
  );
};

export default AITools;