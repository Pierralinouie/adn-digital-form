const ADNDigitalForm = () => {
  // ... États existants ...

  const calculateScore = (data) => {
    let score = 0;
    if (data.histoire) score += 20;
    if (data.styleMusical) score += 20;
    if (data.influences) score += 20;
    if (data.processusCreatif) score += 20;
    if (data.couleursSignature) score += 20;
    return score;
  };

  const generateRecommendations = (data) => {
    const recs = [];
    if (!data.histoire) recs.push("Développez votre histoire personnelle");
    if (!data.styleMusical) recs.push("Définissez votre style musical");
    if (!data.influences) recs.push("Identifiez vos influences");
    return recs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises:', formData);
    alert('Formulaire enregistré !');
  };

  const generateReport = () => {
    const analysisData = {
      summary: {
        identityStrength: {
          score: calculateScore(formData),
          recommendations: generateRecommendations(formData)
        }
      }
    };
    setShowReport(true);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6">
        {/* ... Reste du formulaire ... */}
        
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

      {showRe
