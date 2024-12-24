import React from 'react';
import ADNDigitalForm from './components/ADNDigitalForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          ADN Digital Form
        </h1>
        <ADNDigitalForm />
      </div>
    </div>
  );
}

export default App;
