import React, { useState } from 'react';
import MarketingReport from './MarketingReport';

// Composants de base
const FormSection = ({ title, children, isOpen, onToggle }) => (
 <div className="mb-6 border rounded-lg p-4">
   <button onClick={onToggle} className="flex items-center justify-between w-full text-lg font-semibold mb-4">
     {title}
     <span>{isOpen ? '▼' : '▶'}</span>
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
     onChange={e => onChange(e.target.value)}
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
     onChange={e => onChange(e.target.value)}
   />
 </div>
);

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
     <label htmlFor={`file-${label}`} className="cursor-pointer text-blue-600 hover:text-blue-800">
       Sélectionner un fichier
     </label>
   </div>
 </div>
);
const generatePDF = () => {
  setShowReport(true); // Affiche d'abord le rapport
  const handlePrint = () => {
    window.print(); // Lance l'impression
  };
  handlePrint();
};

const ADNDigitalForm = () => {
 const [openSections, setOpenSections] = useState({
   identite: true,
   documents: false,
   public: false,
   objectifs: false
 });

 const [showReport, setShowReport] = useState(false);
 const [formData, setFormData] = useState({
   histoire: '',
   influences: '',
   processusCreatif: '',
   styleMusical: '',
   genrePrincipal: '',
   sousGenres: '',
   instruments: '',
   langueChansons: '',
   plateformesActuelles: '',
   followersInstagram: '',
   followersFacebook: '',
   streamsSpotify: ''
 });

 const handleInputChange = (field, value) => {
   setFormData(prev => ({
     ...prev,
     [field]: value
   }));
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   console.log('Données du formulaire:', formData);
   alert('Formulaire enregistré !');
 };

 const generateReport = () => {
   setShowReport(true);
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
           label="Style musical en 3 mots"
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
         title="3. Documents"
         isOpen={openSections.documents}
         onToggle={() => toggleSection('documents')}
       >
         <FileUpload 
           label="Photo de profil"
           acceptedTypes="image/*"
           helperText="Format JPEG ou PNG"
           onFileSelect={(file) => console.log('Photo uploaded:', file)}
         />
         <FileUpload 
           label="Biographie"
           acceptedTypes=".doc,.docx,.pdf"
           helperText="Word ou PDF"
           onFileSelect={(file) => console.log('Bio uploaded:', file)}
         />
       </FormSection>

       <div className="flex justify-between pt-6">
         <button
           type="submit"
           className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
         >
           Enregistrer
         </button>
        // Remplacer le bouton existant par
<button
  type="button"
  onClick={generatePDF}
  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
>
  Enregistrer le rapport
</button>
       </div>
     </form>

     {showReport && <MarketingReport formData={formData} />}
   </div>
 );
};

export default ADNDigitalForm;
