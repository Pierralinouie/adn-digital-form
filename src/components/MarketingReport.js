import React from 'react';

const MarketingReport = ({ formData }) => {
  // Calculs de base
  const identityScore = calculateScore(formData);
  const recommendations = generateRecommendations(formData);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-6">Rapport Marketing Digital</h2>
      
      {/* Score Section */}
      <ScoreSection score={identityScore} />
      
      {/* Recommendations */}
      <RecommendationsSection items={recommendations} />
      
      {/* Strategy */}
      <StrategySection formData={formData} />
    </div>
  );
};

// Helper Components
const ScoreSection = ({ score }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4">Score Global</h3>
    <div className="bg-gray-100 p-4 rounded">
      <div className="flex justify-between mb-2">
        <span>Score</span>
        <span>{score}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 rounded-full h-2"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  </div>
);

export default MarketingReport;
