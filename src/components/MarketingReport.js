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

  const generateContentStrategy = () => ({
    musical: {
      title: "Contenu Musical (40%)",
      items: ["Teasers: 2-3/semaine", "Lives: 1/semaine", "Clips: 1/mois"]
    },
    personal: {
      title: "Contenu Personnel (30%)",
      items: ["Stories: 2-3/jour", "Behind-scenes: 3/semaine", "Q&A: 1/mois"]
    },
    engaging: {
      title: "Contenu Engageant (30%)",
      items: ["Challenges: 1/semaine", "Sondages: 2/semaine", "UGC: continu"]
    }
  });

  const contentStrategy = generateContentStrategy();

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

      {/* Content Strategy */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Stratégie de Contenu</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.values(contentStrategy).map((strategy, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium mb-2">{strategy.title}</h4>
              <ul className="text-sm space-y-1">
                {strategy.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* E
