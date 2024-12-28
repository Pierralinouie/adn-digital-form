import React, { useState } from 'react';

// Composants de base
const FormSection = ({ title, children, isOpen, onToggle }) => (
  <div className="mb-6 border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full text-lg font-semibold mb-4"
    >
      <span>{title}</span>
      <span className="transform transition-transform duration-200">
        {isOpen ? '▼' : '▶'}
      </span>
    </button>
    {isOpen && <div className="space-y-4">{children}</div>}
  </div>
);

const TextInput = ({ label, placeholder, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type="text"
      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const TextArea = ({ label, placeholder, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      className="w-full p-3 border border-gray-300 rounded-md shadow-sm h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const FileUpload = ({ label, acceptedTypes, helperText, onFileSelect }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    {helperText && (
      <p className="text-xs text-gray-500 mb-1">{helperText}</p>
    )}
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
      <input
        type="file"
        accept={acceptedTypes}
        onChange={(e) => onFileSelect(e.target.files[0])}
        className="hidden"
        id={`file-${label}`}
      />
      <label
        htmlFor={`file-${label}`}
        className="cursor-pointer text-blue-600 hover:text-blue-800"
      >
        Sélectionner un fichier
      </label>
    </div>
  </div>
);

// Composant principal
const ADNDigitalForm = () => {
  const [openSections, setOpenSections] = useState({
    identite: true,
    presence: false,
    objectifs: false,
    documents: false
  });

  const [formData, setFormData] = useState({
    // Identité Artistique
    histoire: '',
    influences: '',
    processusCreatif: '',
    styleMusical: '',
    genrePrincipal: '',
    sousGenres: '',
    instruments: '',
    langueChansons: '',
    themes: '',
    universVisuel: '',
    
    // Présence Digitale
    plateformesActuelles: '',
    followersInstagram: '',
    followersFacebook: '',
    followersYoutube: '',
    streamsSpotify: '',
    streamsAppleMusic: '',
    streamsDeezer: '',
    engagementRate: '',
    
    // Objectifs
    objectifsCT: '',
    objectifsLT: '',
    territoiresCibles: '',
    collaborationsVoulues: '',
    modelesReussite: '',
    budgetMarketing: '',
    
    // Éléments supplémentaires
    biographie: '',
    presskit: '',
    photosPromo: ''
  });

  const [files, setFiles] = useState({
    photo: null,
    logo: null,
    artwork: null,
    paroles: null,
    biographie: null,
    pressKit: null
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (type, file) => {
    setFiles(prev => ({
      ...prev,
      [type]: file
    }));
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ici, vous pouvez ajouter la logique pour envoyer les données vers votre backend
      console.log('Données du formulaire:', formData);
      console.log('Fichiers:', files);
      alert('Formulaire soumis avec succès !');
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      alert('Erreur lors de la soumission du formulaire.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Formulaire ADN Digital Artiste
          </h1>

          {/* Section Identité Artistique */}
          <FormSection
            title="1. Identité Artistique"
            isOpen={openSections.identite}
            onToggle={() => toggleSection('identite')}
          >
            <TextArea
              label="Quelle est votre histoire personnelle avec la musique ?"
              placeholder="Racontez votre parcours, vos inspirations initiales..."
              value={formData.histoire}
              onChange={(value) => handleInputChange('histoire', value)}
            />
            <TextArea
              label="Quelles sont vos influences musicales majeures ?"
              placeholder="Artistes, genres, époques qui vous ont marqué..."
              value={formData.influences}
              onChange={(value) => handleInputChange('influences', value)}
            />
            <TextInput
              label="Style musical en 3 mots"
              placeholder="Ex: Électro-Pop Minimaliste Organique"
              value={formData.styleMusical}
              onChange={(value) => handleInputChange('styleMusical', value)}
            />
            <TextInput
              label="Genre musical principal"
              placeholder="Ex: Hip-Hop, Rock, Électro..."
              value={formData.genrePrincipal}
              onChange={(value) => handleInputChange('genrePrincipal', value)}
            />
            <TextArea
              label="Thèmes abordés dans vos textes"
              placeholder="Ex: Amour, Société, Nature..."
              value={formData.themes}
              onChange={(value) => handleInputChange('themes', value)}
            />
            <TextArea
              label="Univers visuel"
              placeholder="Décrivez l'esthétique visuelle de votre projet..."
              value={formData.universVisuel}
              onChange={(value) => handleInputChange('universVisuel', value)}
            />
          </FormSection>

          {/* Section Présence Digitale */}
          <FormSection
            title="2. Présence Digitale"
            isOpen={openSections.presence}
            onToggle={() => toggleSection('presence')}
          >
            <TextInput
              label="Plateformes principales"
              placeholder="Ex: Instagram, TikTok, YouTube..."
              value={formData.plateformesActuelles}
              onChange={(value) => handleInputChange('plateformesActuelles', value)}
            />
            <TextInput
              label="Followers Instagram"
              placeholder="Nombre de followers"
              value={formData.followersInstagram}
              onChange={(value) => handleInputChange('followersInstagram', value)}
            />
            <TextInput
              label="Followers Facebook"
              placeholder="Nombre de followers"
              value={formData.followersFacebook}
              onChange={(value) => handleInputChange('followersFacebook', value)}
            />
            <TextInput
              label="Streams Spotify mensuels"
              placeholder="Nombre moyen de streams par mois"
              value={formData.streamsSpotify}
              onChange={(value) => handleInputChange('streamsSpotify', value)}
            />
            <TextInput
              label="Taux d'engagement moyen"
              placeholder="Ex: 5%"
              value={formData.engagementRate}
              onChange={(value) => handleInputChange('engagementRate', value)}
            />
          </FormSection>

          {/* Section Objectifs */}
          <FormSection
            title="3. Objectifs"
            isOpen={openSections.objectifs}
            onToggle={() => toggleSection('objectifs')}
          >
            <TextArea
              label="Objectifs court terme (6 mois)"
              placeholder="Ex: Atteindre 10k followers, Sortir un EP..."
              value={formData.objectifsCT}
              onChange={(value) => handleInputChange('objectifsCT', value)}
            />
            <TextArea
              label="Objectifs long terme (2 ans)"
              placeholder="Ex: Tourner en première partie, Signer avec un label..."
              value={formData.objectifsLT}
              onChange={(value) => handleInputChange('objectifsLT', value)}
            />
            <TextInput
              label="Territoires ciblés"
              placeholder="Ex: France, Belgique, Canada..."
              value={formData.territoiresCibles}
              onChange={(value) => handleInputChange('territoiresCibles', value)}
            />
            <TextInput
              label="Budget marketing mensuel"
              placeholder="Ex: 500€"
              value={formData.budgetMarketing}
              onChange={(value) => handleInputChange('budgetMarketing', value)}
            />
          </FormSection>

          {/* Section Documents */}
          <FormSection
            title="4. Documents"
            isOpen={openSections.documents}
            onToggle={() => toggleSection('documents')}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FileUpload 
                label="Photo de profil"
                acceptedTypes="image/*"
                helperText="Format JPEG ou PNG"
                onFileSelect={(file) => handleFileUpload('photo', file)}
              />
              <FileUpload 
                label="Logo"
                acceptedTypes="image/*"
                helperText="Format PNG recommandé"
                onFileSelect={(file) => handleFileUpload('logo', file)}
              />
            </div>
            <FileUpload 
              label="Biographie"
              acceptedTypes=".doc,.docx,.pdf"
              helperText="Word ou PDF"
              onFileSelect={(file) => handleFileUpload('biographie', file)}
            />
            <FileUpload 
              label="Press Kit"
              acceptedTypes=".pdf,.zip"
              helperText="PDF ou ZIP"
              onFileSelect={(file) => handleFileUpload('pressKit', file)}
            />
          </FormSection>

          <div className="flex justify-between pt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Enregistrer
            </button>
            <button
              type="button"
              onClick={() => setShowReport(true)}
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Générer Rapport
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ADNDigitalForm;
