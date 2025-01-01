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

 const contentStrategy = [
   {
     title: "Contenu Musical (40%)",
     items: ["Teasers: 2-3/semaine", "Lives: 1/semaine", "Clips: 1/mois"]
   },
   {
     title: "Contenu Personnel (30%)",
     items: ["Stories: 2-3/jour", "Behind-scenes: 3/semaine", "Q&A: 1/mois"]
   },
   {
     title: "Contenu Engageant (30%)",
     items: ["Challenges: 1/semaine", "Sondages: 2/semaine", "UGC: continu"]
   }
 ];

 const days = ['Lundi', 'Mercredi', 'Vendredi', 'Dimanche'];

 return (
   <div id="marketing-report" className="bg-white p-6 rounded-lg shadow-lg mt-8">
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
           <div className="bg-blue-600 h-2 rounded-full" style={{width: `${calculateScore()}%`}} />
         </div>
       </div>
     </div>

     {/* Recommendations */}
     <div className="mb-8">
       <h3 className="text-xl font-semibold mb-4">Recommandations</h3>
       <ul className="list-disc pl-5 space-y-2">
         {!formData.histoire && <li className="text-gray-700">Développez votre histoire personnelle</li>}
         {!formData.styleMusical && <li className="text-gray-700">Définissez votre style musical unique</li>}
         {!formData.genrePrincipal && <li className="text-gray-700">Précisez votre genre musical principal</li>}
         {!formData.plateformesActuelles && <li className="text-gray-700">Établissez votre présence sur les réseaux sociaux</li>}
       </ul>
     </div>

     {/* Content Strategy */}
     <div className="mb-8">
       <h3 className="text-xl font-semibold mb-4">Stratégie de Contenu</h3>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         {contentStrategy.map((content, index) => (
           <div key={index} className="bg-gray-50 p-4 rounded">
             <h4 className="font-medium mb-2">{content.title}</h4>
             <ul className="text-sm space-y-1">
               {content.items.map((item, idx) => (
                 <li key={idx}>{item}</li>
               ))}
             </ul>
           </div>
         ))}
       </div>
     </div>

     {/* Publication Calendar */}
     <div className="mb-8">
       <h3 className="text-xl font-semibold mb-4">Calendrier de Publication</h3>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {days.map(day => (
           <div key={day} className="bg-gray-50 p-4 rounded">
             <h4 className="font-medium mb-2">{day}</h4>
             <div className="text-sm space-y-2">
               <p><span className="font-medium">Matin:</span> Stories & BTS</p>
               <p><span className="font-medium">Après-midi:</span> Post principal</p>
               <p><span className="font-medium">Soir:</span> Engagement & Live</p>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
};

export default MarketingReport;
