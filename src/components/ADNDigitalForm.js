import React, { useState } from 'react';

const ADNDigitalForm = () => {
  const [openSections, setOpenSections] = useState({
    identite: true,
    documents: false,
    public: false,
    objectifs: false
  });

  const [showReport, setShowReport] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);

  const [files, setFiles] = useState({
    photo: null,
    logo: null,
    artwork: null,
    paroles: null,
    biographie: null,
    pressKit: null
  });

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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateScore = () => {
    let score = 0;
    const fields = Object.keys(formData);
    fields.forEach(field => {
      if (formData[field]) score += (100 / fields.length);
    });
    return Math.round(score);
  };

  const generateRecommendations = () => {
    const recs = [];
    if (!formData.histoire) recs.push("Développez votre histoire personnelle");
    if (!formData.styleMusical) recs.push("Définissez votre style musical");
    if (!formData.genrePrincipal) recs.push("Précisez votre genre musical principal");
    if (!formData.objectifsPrincipaux) recs.push("Définissez vos objectifs de carrière");
    if (!formData.plateformesActuelles) recs.push("Listez vos plateformes actuelles");
    return recs;
  };

  const handleFileUpload = (type, file) => {
    setFiles(prev => ({
      ...prev,
      [type]: file
    }));
  };

  const generateReport = () => {
    const newAnalysisData = {
      summary: {
        identityStrength: {
          score: calculateScore(),
          recommendations: generateRecommendations()
        },
        contentStrategy: {
          pillars: [
            {
              type: "Contenu Musical",
              frequency: "40% du contenu",
              formats: ["Teasers", "Live sessions", "Clips", "Répétitions"]
            },
            {
              type: "Contenu Personnel",
              frequency: "30% du contenu",
              formats: ["Stories quotidiennes", "Behind-the-scenes", "Q&A", "Vlogs"]
            },
            {
              type: "Contenu Éducatif",
              frequency: "15% du contenu",
              formats: ["Tutoriels", "Conseils", "Masterclass"]
            },
            {
              type: "Contenu Engageant",
              frequency: "15% du contenu",
              formats: ["Challenges", "Sondages", "Lives interactifs"]
            }
          ],
          calendar: {
            lundi: {
              platform: "Instagram",
              contentType: "Behind-the-scenes",
              format: "Stories"
            },
            mercredi: {
              platform: "TikTok",
              contentType: "Musical",
              format: "Short video"
            },
            vendredi: {
              platform: "Toutes plateformes",
              contentType: "Sortie/Cover",
              format: "Post + Stories"
            },
            dimanche: {
              platform: "YouTube",
              contentType: "Long format",
              format: "Vlog/Tutorial"
            }
          }
        },
        platformRecommendations: {
          primary: ["Instagram", "TikTok", "YouTube"],
          secondary: ["Facebook", "Twitter", "LinkedIn"],
          posting_frequency: {
            instagram: "2-3 posts/jour",
            tiktok: "1-2 videos/jour",
            youtube: "1-2 videos/semaine"
          }
        }
      }
    };
    setAnalysisData(newAnalysisData);
    setShowReport(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Données enregistrées avec succès !');
    console.log('Données:', formData);
    console.log('Fichiers:', files);
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6">
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
            label="Genre musical principal"
            placeholder="Ex: Hip-Hop, Rock, Électro..."
            value={formData.genrePrincipal}
            onChange={value => handleInputChange('genrePrincipal', value)}
          />
          <TextInput
            label="Sous-genres"
            placeholder="Ex: Trap, Alternative, House..."
            value={formData.sousGenres}
            onChange={value => handleInputChange('sousGenres', value)}
          />
          <TextInput
            label="Instruments principaux"
            placeholder="Ex: Guitare, Piano, Machines..."
            value={formData.instruments}
            onChange={value => handleInputChange('instruments', value)}
          />
          <TextInput
            label="Langue des chansons"
            placeholder="Ex: Français, Anglais..."
            value={formData.langueChansons}
            onChange={value => handleInputChange('langueChansons', value)}
          />
        </FormSection>

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
            label="Followers Facebook"
            placeholder="Nombre de followers"
            value={formData.followersFacebook}
            onChange={value => handleInputChange('followersFacebook', value)}
          />
          <TextInput
            label="Streams Spotify mensuels"
            placeholder="Nombre de streams"
            value={formData.streamsSpotify}
            onChange={value => handleInputChange('streamsSpotify', value)}
          />
        </FormSection>

        <FormSection
          title="3. Objectifs"
          isOpen={openSections.objectifs}
          onToggle={() => toggleSection('objectifs')}
        >
          <TextArea
            label="Objectifs principaux"
            placeholder="Décrivez vos objectifs pour les 12 prochains mois..."
            value={formData.objectifsPrincipaux}
            onChange={value => handleInputChange('objectifsPrincipaux', value)}
          />
          <TextInput
            label="Territoires ciblés"
            placeholder="Ex: France, Belgique, Canada..."
            value={formData.territoiresCibles}
            onChange={value => handleInputChange('territoiresCibles', value)}
          />
          <TextInput
            label="Collaborations souhaitées"
            placeholder="Types d'artistes, producteurs..."
            value={formData.collaborationsVoulues}
            onChange={value => handleInputChange('collaborationsVoulues', value)}
          />
        </FormSection>

        <FormSection
          title="4. Documents"
          isOpen={openSections.documents}
          onToggle={() => toggleSection('documents')}
        >
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

      {showReport && analysisData && (
        <MarketingReport analysisData={analysisData} />
      )}
    </div>
  );
};

export default ADNDigitalForm;
