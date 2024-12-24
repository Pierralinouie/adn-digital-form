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
