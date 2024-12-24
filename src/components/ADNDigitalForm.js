import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronRight, Upload, Check, X } from 'lucide-react';

// Composant FormSection
const FormSection = ({ title, children, isOpen, onToggle }) => (
  <div className="mb-6 border rounded-lg p-4">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full text-lg font-semibold mb-4"
    >
      {title}
      {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
    </button>
    {isOpen && <div className="space-y-4">{children}</div>}
  </div>
);

// Composants de base pour les inputs
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
// Composant FileUpload
const FileUpload = ({ label, onFileSelect, acceptedTypes = "image/*", helperText = null }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
      
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium mb-1">{label}</label>
      {helperText && <p className="text-xs text-gray-500 mb-1">{helperText}</p>}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
        {!selectedFile ? (
          <div className="text-center">
            <Upload className="mx-auto h-8 w-8 text-gray-400" />
            <div className="mt-2">
              <label className="cursor-pointer text-blue-500 hover:text-blue-600">
                <span>Télécharger un fichier</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={handleFileSelect}
                  accept={acceptedTypes}
                />
              </label>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {preview ? (
                <img src={preview} alt="Aperçu" className="h-10 w-10 object-cover rounded" />
              ) : (
                <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
              )}
              <span className="text-sm">{selectedFile.name}</span>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="text-red-500 hover:text-red-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
  // Composant MarketingReport
const MarketingReport = ({ analysisData }) => {
  return (
    <div className="space-y-6">
      <div className="border rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Rapport d'Analyse Marketing Digital</h2>
        
        {/* Section Force de l'Identité */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Force de l'Identité Artistique</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>Score d'identité</span>
                <span>{analysisData.summary.identityStrength.score}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${analysisData.summary.identityStrength.score}%` }}
                />
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Recommandations :</h4>
              <ul className="list-disc pl-5 space-y-1">
                {analysisData.summary.identityStrength.recommendations.map((rec, index) => (
                  <li key={index} className="text-sm text-gray-600">{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section Stratégie de Contenu */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Stratégie de Contenu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analysisData.contentStrategy.pillars.map((pillar, index) => (
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

        {/* Section Calendrier de Publication */}
        <section>
          <h3 className="text-lg font-semibold mb-2">Calendrier de Publication</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(analysisData.contentStrategy.calendar || {}).map(([day, content]) => (
              <div key={day} className="border rounded-lg p-4">
                <h4 className="font-medium capitalize mb-2">{day}</h4>
                <div className="text-sm">
                  <p><span className="font-medium">Plateforme:</span> {content.platform}</p>
                  <p><span className="font-medium">Type:</span> {content.contentType}</p>
                  <p><span className="font-medium">Format:</span> {content.format}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
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
// Composant principal ADNDigitalForm
const ADNDigitalForm = () => {
  const [openSections, setOpenSections] = useState({
    identite: true,
    documents: false,
    public: false,
    objectifs: false
  });

  const [showReport, setShowReport] = useState(false);

  const [files, setFiles] = useState({
    photo: null,
    logo: null,
    artwork: null,
    paroles: null,
    biographie: null,
    pressKit: null
  });

  const [formData, setFormData] = useState({
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
    genrePrincipal: '',
    sousGenres: '',
    instruments: '',
    langueChansons: '',
    nombreTitres: '',
    frequenceSorties: '',
    plateformesActuelles: '',
    followersInstagram: '',
    followersFacebook: '',
    followersYoutube: '',
    streamsSpotify: '',
    streamsAppleMusic: '',
    streamsDeezer: '',
    engagementRate: '',
    objectifsPrincipaux: '',
    territoiresCibles: '',
    collaborationsVoulues: '',
    modelesReussite: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFileUpload = (type, file) => {
    setFiles(prev => ({
      ...prev,
      [type]: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    console.log('Fichiers:', files);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold mb-6">Formulaire ADN Digital Artiste</h1>

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
            label="Comment définiriez-vous votre style musical en 3 mots ?"
            placeholder="Ex: Électro-Pop Minimaliste Organique"
            value={formData.styleMusical}
            onChange={value => handleInputChange('styleMusical', value)}
          />
          <TextInput
            label="Quelles sont vos couleurs signatures ?"
            placeholder="Ex: Noir, Or, Rouge profond"
            value={formData.couleursSignature}
            onChange={value => handleInputChange('couleursSignature', value)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FileUpload 
              label="Photo de profil" 
              onFileSelect={file => handleFileUpload('photo', file)} 
              acceptedTypes="image/*"
            />
            <FileUpload 
              label="Logo" 
              onFileSelect={file => handleFileUpload('logo', file)} 
              acceptedTypes="image/*"
            />
          </div>
          <FileUpload 
            label="Artwork / Visuels" 
            onFileSelect={file => handleFileUpload('artwork', file)} 
            acceptedTypes="image/*"
          />
        </FormSection>

        <FormSection
          title="Documents"
          isOpen={openSections.documents}
          onToggle={() => toggleSection('documents')}
        >
          <div className="space-y-4">
            <FileUpload 
              label="Paroles de chansons" 
              onFileSelect={file => handleFileUpload('paroles', file)} 
              acceptedTypes=".doc,.docx,.pdf,.txt"
              helperText="Formats acceptés: DOC, DOCX, PDF, TXT"
            />
            <FileUpload 
              label="Biographie" 
              onFileSelect={file => handleFileUpload('biographie', file)} 
              acceptedTypes=".doc,.docx,.pdf,.txt"
              helperText="Formats acceptés: DOC, DOCX, PDF, TXT"
            />
            <FileUpload 
              label="Revue de presse / Press Kit" 
              onFileSelect={file => handleFileUpload('pressKit', file)} 
              acceptedTypes=".doc,.docx,.pdf,.zip,.rar"
              helperText="Formats acceptés: DOC, DOCX, PDF, ZIP, RAR"
            />
          </div>
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
            onClick={() => setShowReport(true)}
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
          >
            Générer Rapport Marketing
          </button>
        </div>
      </form>

      {showReport && (
        <div className="mt-8">
          <MarketingReport 
            analysisData={{
              summary: {
                identityStrength: {
                  score: 75,
                  recommendations: [
                    "Renforcez votre présence sur les réseaux sociaux",
                    "Développez votre storytelling personnel",
                    "Créez plus de contenu behind-the-scenes"
                  ]
                },
                contentStrategy: {
                  pillars: [
                    {
                      type: "Contenu Musical",
                      frequency: "40% du contenu",
                      formats: ["Teasers", "Live sessions", "Clips"]
                    },
                    {
                      type: "Contenu Personnel",
                      frequency: "30% du contenu",
                      formats: ["Stories", "Behind-the-scenes", "Q&A"]
                    }
                  ],
                  calendar: {
                    lundi: {
                      platform: "Instagram",
                      contentType: "Story",
                      format: "Behind-the-scenes"
                    },
                    mercredi: {
                      platform: "TikTok",
                      contentType: "Vidéo",
                      format: "Challenge"
                    }
                  }
                }
              }
            }} 
          />
        </div>
      )}
    </div>
  );
};

export default ADNDigitalForm;
