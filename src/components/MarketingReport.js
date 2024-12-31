import React from 'react';

const MarketingReport = ({ formData }) => {
  const calculateScore = () => {
    let score = 0;
    const fields = ['histoire', 'influences', 'processusCreatif', 'styleMusical', 'genrePrincipal'];
    fields.forEach(field => {
      if (formData[field]) score += 20;
    });
    return score;
  };

  const generateRecommendations = () => {
    return [
      !formData.histoire && "Développez votre histoire personnelle",
      !formData.styleMusical && "Définissez votre style musical unique",
      !formData.genrePrincipal && "Précisez votre genre musical principal",
    ].filter(Boolean);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-6">Rapport Marketing Digital</h2>
      
      {/* Score Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Score Global</h3>
        <div className="bg-gray-100 p-4 rounded">
          <div className="flex justify-between mb-2">
            <span>Score</span>
            <span>{calculateScore()}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 rounded-full h-2"
              style={{ width: `${calculateScore()}%` }}
            />
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Recommandations</h3>
        <ul className="list-disc pl-5 space-y-2">
          {generateRecommendations().map((rec, index) => (
            <li key={index} className="text-gray-700">{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarketingReport;
