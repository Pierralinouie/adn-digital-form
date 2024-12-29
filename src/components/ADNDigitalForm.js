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
    influences: ''
