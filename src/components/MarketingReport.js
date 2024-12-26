import React from 'react';

const MarketingReport = ({ analysisData }) => {
  return (
    <div className="space-y-6 bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold">Rapport d'Analyse Marketing Digital</h2>
      
      <section>
        <h3 className="text-xl font-semibold mb-4">Force de l'Identité Artistique</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span>Score global</span>
              <span>{analysisData.summary.identityStrength.score}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${analysisData.summary.identityStrength.score}%` }}
              />
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Recommandations prioritaires :</h4>
            <ul className="list-disc pl-5 space-y-1">
              {analysisData.summary.identityStrength.recommendations.map((rec, index) => (
                <li key={index} className="text-gray-600">{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Stratégie de Contenu</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {analysisData.summary.contentStrategy.pillars.map((pillar, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">{pillar.type}</h4>
              <p className="text-sm text-gray-600 mb-2">{pillar.frequency}</p>
              <ul className="list-disc pl-5 text-sm">
                {pillar.formats.map((format, idx) => (
                  <li key={idx}>{format}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-4">Calendrier Éditorial</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(analysisData.summary.contentStrategy.calendar).map(([day, content]) => (
            <div key={day} className="border rounded-lg p-4">
              <h4 className="font-medium capitalize mb-2">{day}</h4>
              <div className="text-sm space-y-1">
                <p><span className="font-medium">Plateforme:</span> {content.platform}</p>
                <p><span className="font-medium">Type:</span> {content.contentType}</p>
                <p><span className="font-medium">Format:</span> {content.format}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {analysisData.summary.platformRecommendations && (
        <section>
          <h3 className="text-xl font-semibold mb-4">Recommandations par Plateforme</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
