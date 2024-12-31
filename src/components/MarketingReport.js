import React from 'react';

const MarketingReport = ({ formData }) => {
 if (!formData) return null;

 const calculateScore = () => {
   let score = 0;
   ['histoire', 'influences', 'processusCreatif', 'styleMusical', 'genrePrincipal'].forEach(field => {
     if (formData[field]) score += 20;
   });
   return score;
 };

 const recs = [
   !formData.histoire && "Développez votre histoire personnelle",
   !formData.styleMusical && "Définissez votre style musical unique", 
   !formData.genrePrincipal && "Précisez votre genre musical principal"
 ].filter(Boolean);

 return (
   <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
     <h2 className="text-2xl font-bold mb-6">Rapport Marketing Digital</h2>
     
     <div className="mb-8">
       <h3 className="text-xl font-semibold mb-4">Score Global</h3>
       <div className="bg-gray-100 p-4 rounded">
         <div className="flex justify-between mb-2">
           <span>Score</span>
           <span>{calculateScore()}%</span>
         </div>
         <div className="w-full bg-gray-200 rounded-full h-2">
           <div className="bg-blue-600 h-2 rounded-full" style={{width: `${calculateScore()}%`}} />
         </div>
       </div>
     </div>

     <div className="mb-8">
       <h3 className="text-xl font-semibold mb-4">Recommandations</h3>
       <ul className="list-disc pl-5 space-y-2">
         {recs.map((rec, i) => (
           <li key={i} className="text-gray-700">{rec}</li>
         ))}
       </ul>
     </div>
   </div>
 // Après le div des recommandations
<div className="mb-8">
  <h3 className="text-xl font-semibold mb-4">Stratégie de Contenu</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-gray-50 p-4 rounded">
      <h4 className="font-medium mb-2">Contenu Musical (40%)</h4>
      <ul className="text-sm space-y-1">
        <li>Teasers: 2-3/semaine</li>
        <li>Lives: 1/semaine</li>
        <li>Clips: 1/mois</li>
      </ul>
    </div>
    <div className="bg-gray-50 p-4 rounded">
      <h4 className="font-medium mb-2">Contenu Personnel (30%)</h4>
      <ul className="text-sm space-y-1">
        <li>Stories: 2-3/jour</li>
        <li>Behind-scenes: 3/semaine</li>
        <li>Q&A: 1/mois</li>
      </ul>
    </div>
    <div className="bg-gray-50 p-4 rounded">
      <h4 className="font-medium mb-2">Contenu Engageant (30%)</h4>
      <ul className="text-sm space-y-1">
        <li>Challenges: 1/semaine</li>
        <li>Sondages: 2/semaine</li>
        <li>UGC: continu</li>
      </ul>
    </div>
  </div>
</div>

<div className="mb-8">
  <h3 className="text-xl font-semibold mb-4">Calendrier</h3>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    {['Lundi', 'Mercredi', 'Vendredi', 'Dimanche'].map(day => (
      <div key={day} className="bg-gray-50 p-4 rounded">
        <h4 className="font-medium mb-2">{day}</h4>
        <div className="text-sm space-y-2">
          <p><span className="font-medium">Matin:</span> Stories</p>
          <p><span className="font-medium">Après-midi:</span> Post</p>
          <p><span className="font-medium">Soir:</span> Engagement</p>
        </div>
      </div>
    ))}
  </div>
</div>
 );
};

export default MarketingReport;
