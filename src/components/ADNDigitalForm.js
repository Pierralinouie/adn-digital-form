import React, { useState } from 'react';

const FormSection = ({ title, children, isOpen, onToggle }) => (
  <div className="mb-6 border rounded-lg p-4">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full text-lg font-semibold mb-4"
    >
      {title}
      {isOpen ? (
        <span className="w-5 h-5">▼</span>
      ) : (
        <span className="w-5 h-5">▶</span>
      )}
    </button>
    {isOpen && <div className="space-y-4">{children}</div>}
  </div>
);

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

const FileUpload = ({ label, helperText = null }) => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium mb-1">{label}</label>
      {helperText && <p className="text-xs text-gray-500 mb-1">{helperText}</p>}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
        <div className="text-center">
          <label className="cursor-pointer text-blue-500 hover:text-blue-600">
            <span>{fileName || 'Télécharger un fichier'}</span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
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
const ADNDigitalForm = () => {
  const [openSections, setOpenSections] = useState({
    identite: true,
    documents: false
  });

  const [formData, setFormData] = useState({
    histoire: '',
    influences: '',
    processusCreatif: '',
    styleMusical: '',
    couleursSignature: ''
  });

  const [showReport, setShowReport] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowReport(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
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
        </FormSection>

        <FormSection
          title="Documents"
          isOpen={openSections.documents}
          onToggle={() => toggleSection('documents')}
        >
          <div className="space-y-4">
            <FileUpload 
              label="Paroles de chansons"
              helperText="Formats acceptés: DOC, DOCX, PDF, TXT"
            />
            <FileUpload 
              label="Biographie"
              helperText="Formats acceptés: DOC, DOCX, PDF, TXT"
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
              recommendations: [
                "Renforcez votre présence sur les réseaux sociaux",
                "Développez votre storytelling personnel",
                "Créez plus de contenu behind-the-scenes"
              ]
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ADNDigitalForm;
