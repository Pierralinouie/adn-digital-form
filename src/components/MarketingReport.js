import React from 'react';

const MarketingReport = ({ formData }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6">Rapport Marketing Digital</h2>

      {/* Analyse de l'Identité Artistique */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">1. Identité Artistique</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-medium mb-3">Points Forts</h4>
          <ul className="list-disc pl-5 space-y-2">
            {formData.styleMusical && (
              <li>Style musical défini : {formData.styleMusical}</li>
            )}
            {formData.genrePrincipal && (
              <li>Genre principal : {formData.genrePrincipal}</li>
            )}
            {formData.influences && (
              <li>Influences bien identifiées</li>
            )}
          </ul>

          <h4 className="font-medium mt-4 mb-3">Recommandations</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {!formData.histoire && (
              <li>Développer votre histoire personnelle</li>
            )}
            {!formData.universVisuel && (
              <li>Définir votre univers visuel</li>
            )}
            {!formData.themes && (
              <li>Préciser vos thématiques principales</li>
            )}
          </ul>
        </div>
      </section>

      {/* Analyse de la Présence Digitale */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">2. Présence Digitale</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">État Actuel</h4>
              <ul className="space-y-2">
                {formData.followersInstagram && (
                  <li>Instagram : {formData.followersInstagram} followers</li>
                )}
                {formData.followersFacebook && (
                  <li>Facebook : {formData.followersFacebook} followers</li>
                )}
                {formData.streamsSpotify && (
                  <li>Spotify : {formData.streamsSpotify} streams/mois</li>
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Stratégie Recommandée</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Publication quotidienne sur Instagram</li>
                <li>3-4 vidéos par semaine sur TikTok</li>
                <li>1 contenu long format par semaine</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Plan d'Action */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">3. Plan d'Action</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Court Terme (3 mois)</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Optimisation des profils sociaux</li>
                <li>Création de contenu régulier</li>
                <li>Engagement communautaire</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Long Terme (12 mois)</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Développement de partenariats</li>
                <li>Campagnes publicitaires ciblées</li>
                <li>Événements communautaires</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calendrier Éditorial */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-blue-600">4. Calendrier Éditorial</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium mb-2">Lundi</h4>
            <p className="text-sm">Story Instagram</p>
            <p className="text-xs text-gray-600">Behind the scenes</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium mb-2">Mercredi</h4>
            <p className="text-sm">Post Instagram</p>
            <p className="text-xs text-gray-600">Photo professionnelle</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium mb-2">Vendredi</h4>
            <p className="text-sm">Vidéo TikTok</p>
            <p className="text-xs text-gray-600">Contenu musical</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium mb-2">Dimanche</h4>
            <p className="text-sm">Live Instagram</p>
            <p className="text-xs text-gray-600">Q&A avec les fans</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingReport;
