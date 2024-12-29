import React, { useState } from 'react';
import MarketingReport from './MarketingReport';

// Composant FormSection
const FormSection = ({ title, children, isOpen, onToggle }) => (
  <div className="mb-6 border rounded-lg p-4">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full text-lg font-semibold mb-4"
    >
      {title}
      <span>{isOpen ? '▼' : '▶'}</span>
    </button>
    {isOpen && <div className="space-y-4">{children}</div>}
  </div>
);

// Composant TextInput
const TextInput = ({ label, placeholder, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type="text"
      className="w-full p-2 border rounded-md"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

// Composant TextArea
const TextArea = ({ label, placeholder, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <textarea
      className="w-full p-2 border rounded-md h-24"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

// Composant FileUpload
const FileUpload = ({ label, acceptedTypes, helperText, onFileSelect }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium mb-1">{label}</label>
    {helperText && <p className="text-xs text-gray-500 mb-1">{helperText}</p>}
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

// Composant principal ADNDigitalForm
const ADNDigitalForm = () => {
  const [openSections, setOpenSections] = useState({
    identite: true,
    documents: false,
    public: false,
    objectifs: false
  });

  const [showReport, setShowReport] = useState(false);

  const [formData, setFormData] = useState({
    // Identité Artistique
    histoire: '',
    influences: '',
    processusCreatif: '',
    styleMusical: '',
    themes: '',
    emotion: '',
    sonSignature: '',
    universVisuel: '',
    couleursSignature: '',
    styleVestimentaire: '',
    symboles: '',
    // Détails Musicaux
    genrePrincipal: '',
    sousGenres: '',
    instruments: '',
    langueChansons: '',
    nombreTitres: '',
    frequenceSorties: '',
    // Présence Actuelle
    plateformesActuelles: '',
    followersInstagram: '',
    followersFacebook: '',
    followersYoutube: '',
    streamsSpotify: '',
    streamsAppleMusic: '',
    streamsDeezer: '',
    engagementRate: '',
    // Objectifs de Carrière
    objectifsPrincipaux: '',
    territoiresCibles: '',
    collaborationsVoulues: '',
    modelesReussite: ''
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données:', formData);
    alert('Formulaire enregistré avec succès !');
  };

  const generateReport = () => {
    setShowReport(true);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Formulaire ADN Digital Artiste</h1>

        {/* Section Identité Artistique */}
        <FormSection
          title="1. Identité Artistique"
          isOpen={openSections.identite}
          onToggle={() => toggleSection('identite')}
        >
          <TextArea
            label="Quelle est votre histoire personnelle avec la musique ?"
            placeholder="Racontez votre parcours..."
            value={formData.histoire}
            onChange={value => handleInputChange('histoire', value)}
          />
          <TextInput
            label="Quelles sont vos influences musicales majeures ?"
            placeholder="Artistes, genres, époques..."
            value={formData.influences}
            onChange={value => handleInputChange('influences', value)}
          />
          <TextArea
            label="Quel est votre processus créatif ?"
            placeholder="Décrivez comment vous créez votre musique..."
            value={formData.processusCreatif}
            onChange={value => handleInputChange('processusCreatif', value)}
          />
          <TextInput
            label="Genre musical principal"
            placeholder="Ex: Hip-Hop, Rock, Électro..."
            value={formData.genrePrincipal}
            onChange={value => handleInputChange('genrePrincipal', value)}
          />
        </FormSection>

        {/* Section Présence Digitale */}
        <FormSection
          title="2. Présence Digitale"
          isOpen={openSections.public}
          onToggle={() => toggleSection('public')}
        >
          <TextInput
            label="Plateformes actuelles"
            placeholder="Ex: Instagram, TikTok, YouTube..."
            value={formData.plateformesActuelles}
            onChange={value => handleInputChange('plateformesActuelles', value)}
          />
          <TextInput
            label="Followers Instagram"
            placeholder="Nombre de followers"
            value={formData.followersInstagram}
            onChange={value => handleInputChange('followersInstagram', value)}
          />
          <TextInput
            label="Streams Spotify mensuels"
            placeholder="Nombre de streams"
            value={formData.streamsSpotify}
            onChange={value => handleInputChange('streamsSpotify', value)}
          />
        </FormSection>

        {/* Section Documents */}
        <FormSection
          title="3. Documents"
          isOpen={openSections.documents}
          onToggle={() => toggleSection('documents')}
        >
          <FileUpload 
            label="Photo de profil"
            acceptedTypes="image/*"
            helperText="Format JPEG ou PNG"
            onFileSelect={file => handleFileUpload('photo', file)}
          />
          <FileUpload 
            label="Biographie"
            acceptedTypes=".doc,.docx,.pdf"
            helperText="Word ou PDF"
            onFileSelect={file => handleFileUpload('biographie', file)}
          />
        </FormSection>

        <div className="flex justify-between pt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Enregistrer
          </button>
          <button
            type="button"
            onClick={generateReport}
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
          >
            Générer Rapport Marketing
          </button>
        </div>
      </form>

      {showReport && <MarketingReport formData={formData} />}
    </div>
  );
};

export default ADNDigitalForm;
