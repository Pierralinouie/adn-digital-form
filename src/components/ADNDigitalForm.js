const ADNDigitalForm = () => {
  const [openSections, setOpenSections] = useState({
    identite: true,
    documents: false
  });

  const [showReport, setShowReport] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);

  const [formData, setFormData] = useState({
    histoire: '',
    influences: '',
    processusCreatif: '',
    styleMusical: '',
    couleursSignature: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

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
    const newAnalysisData = {
      summary: {
        identityStrength: {
          score: calculateScore(formData),
          recommendations: generateRecommendations(formData)
        },
        contentStrategy: {
          pillars: [
            {
              type: "Contenu Musical",
              frequency: "40%",
              formats: ["Teasers", "Live sessions", "Clips"]
            },
            {
              type: "Contenu Personnel",
              frequency: "30%",
              formats: ["Stories", "Behind-the-scenes", "Q&A"]
            }
          ]
        }
      }
    };
    setAnalysisData(newAnalysisData);
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
          <Text
