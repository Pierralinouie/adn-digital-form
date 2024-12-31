const MarketingReport = ({ formData }) => {
  // Sections principales du rapport
  const mainSections = [
    {
      title: "1. Analyse Identité de Marque",
      subsections: [
        analyzeArtisticIdentity(),
        analyzeStoryTelling(),
        analyzeVisualIdentity()
      ]
    },
    {
      title: "2. Analyse Audience",
      subsections: [
        analyzeTargetDemographics(),
        analyzeCurrentEngagement(),
        predictGrowthPotential()
      ]
    },
    {
      title: "3. Stratégie de Contenu",
      subsections: [
        generateContentStrategy(),
        createContentCalendar(),
        defineContentPillars()
      ]
    },
    {
      title: "4. Plan d'Action",
      subsections: [
        createImmediatePlan(),
        create90DayPlan(),
        createAnnualPlan()
      ]
    },
    {
      title: "5. Budget & ROI",
      subsections: [
        analyzeBudgetRequirements(),
        predictROI(),
        suggestInvestments()
      ]
    }
  ];

  // Fonctions d'analyse détaillées
  function analyzeArtisticIdentity() {
    const identity = {
      score: calculateIdentityScore(),
      strengths: [],
      weaknesses: [],
      opportunities: [],
      threats: []
    };

    // Genre et Style
    if (formData.genrePrincipal) {
      identity.strengths.push({
        category: "Genre musical",
        detail: formData.genrePrincipal,
        impact: "Positionnement clair dans le marché"
      });
    }

    // Influences
    if (formData.influences) {
      identity.strengths.push({
        category: "Influences",
        detail: formData.influences,
        impact: "Richesse artistique et crédibilité"
      });
    }

    return {
      title: "Identité Artistique",
      data: identity,
      recommendations: generateIdentityRecommendations(identity)
    };
  }

  function analyzeStoryTelling() {
    const story = {
      elements: {
        personalHistory: Boolean(formData.histoire),
        creativeProcess: Boolean(formData.processusCreatif),
        vision: Boolean(formData.objectifsPrincipaux)
      },
      score: calculateStoryScore(),
      narrativeStrength: evaluateNarrativeStrength(),
      keyThemes: extractKeyThemes(),
      uniqueAngles: identifyUniqueAngles()
    };

    return {
      title: "Analyse Narrative",
      data: story,
      recommendations: generateStorytellingRecommendations(story)
    };
  }

  function generateContentStrategy() {
    const strategy = {
      mainPillars: [
        {
          type: "Contenu Musical",
          frequency: "40% du contenu total",
          formats: [
            { type: "Teasers", frequency: "2-3 par semaine" },
            { type: "Sessions live", frequency: "1 par semaine" },
            { type: "Clips", frequency: "1 par mois" },
            { type: "Behind-the-scenes", frequency: "3-4 par semaine" }
          ],
          platforms: defineOptimalPlatforms("musical"),
          bestPractices: suggestBestPractices("musical")
        },
        {
          type: "Contenu Personnel",
          frequency: "30% du contenu total",
          formats: [
            { type: "Stories quotidiennes", frequency: "2-3 par jour" },
            { type: "Vlogs", frequency: "1 par semaine" },
            { type: "Q&A", frequency: "2 par mois" },
            { type: "Day in the life", frequency: "1 par semaine" }
          ],
          platforms: defineOptimalPlatforms("personal"),
          bestPractices: suggestBestPractices("personal")
        },
        {
          type: "Contenu Éducatif",
          frequency: "15% du contenu total",
          formats: [
            { type: "Tutoriels", frequency: "1 par semaine" },
            { type: "Masterclass", frequency: "1 par mois" },
            { type: "Tips & Tricks", frequency: "2 par semaine" }
          ],
          platforms: defineOptimalPlatforms("educational"),
          bestPractices: suggestBestPractices("educational")
        },
        {
          type: "Contenu Engageant",
          frequency: "15% du contenu total",
          formats: [
            { type: "Challenges", frequency: "1 par semaine" },
            { type: "Sondages", frequency: "2 par semaine" },
            { type: "Concours", frequency: "1 par mois" }
          ],
          platforms: defineOptimalPlatforms("engaging"),
          bestPractices: suggestBestPractices("engaging")
        }
      ],
      platformSpecific: generatePlatformSpecificStrategy(),
      contentMix: optimizeContentMix(),
      schedule: createDetailedSchedule()
    };

    return {
      title: "Stratégie de Contenu",
      data: strategy,
      recommendations: generateContentRecommendations(strategy)
    };
  }

  function createDetailedSchedule() {
    return {
      daily: {
        instagram: [
          { time: "10:00", type: "Story", content: "Behind-the-scenes" },
          { time: "13:00", type: "Reel", content: "Teaser musical" },
          { time: "17:00", type: "Post", content: "Photo/Contenu principal" },
          { time: "20:00", type: "Story", content: "Interaction fans" }
        ],
        tiktok: [
          { time: "12:00", type: "Vidéo", content: "Trend participation" },
          { time: "19:00", type: "Live", content: "Session questions/réponses" }
        ]
      },
      weekly: {
        monday: { focus: "Nouveautés", platforms: ["Instagram", "TikTok"] },
        wednesday: { focus: "Éducatif", platforms: ["YouTube", "Instagram"] },
        friday: { focus: "Performance", platforms: ["All"] },
        sunday: { focus: "Lifestyle", platforms: ["Instagram", "TikTok"] }
      },
      monthly: planMonthlyContent()
    };
  }

  // Rendu du rapport
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg space-y-12">
      {/* En-tête du rapport */}
      <header className="border-b pb-6">
        <h2 className="text-3xl font-bold text-gray-900">Rapport Marketing Digital Détaillé</h2>
        <p className="mt-2 text-gray-600">Analyse et Recommandations Personnalisées</p>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <ScoreCard 
            title="Score Global" 
            score={calculateOverallScore()} 
            detail="Basé sur l'analyse complète"
          />
          <ScoreCard 
            title="Potentiel de Croissance" 
            score={calculateGrowthPotential()} 
            detail="Sur les 12 prochains mois"
          />
          <ScoreCard 
            title="Indice de Maturité Digitale" 
            score={calculateDigitalMaturity()} 
            detail="État actuel de la présence en ligne"
          />
        </div>
      </header>

      {/* Corps du rapport */}
      {mainSections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          subsections={section.subsections}
        />
      ))}

      {/* Plan d'action final */}
      <FinalActionPlan />

      {/* Prévisions et KPIs */}
      <Forecasting />
    </div>
  );
};

// Composants d'affichage
const Section = ({ title, subsections }) => (
  <section className="border-b pb-8">
    <h3 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h3>
    <div className="space-y-6">
      {subsections.map((subsection, index) => (
        <SubSection
          key={index}
          title={subsection.title}
          data={subsection.data}
          recommendations={subsection.recommendations}
        />
      ))}
    </div>
  </section>
);

const SubSection = ({ title, data, recommendations }) => (
  <div className="bg-gray-50 rounded-lg p-6">
    <h4 className="text-xl font-medium text-gray-800 mb-4">{title}</h4>
    <div className="space-y-4">
      <DataVisualization data={data} />
      <Recommendations items={recommendations} />
    </div>
  </div>
);

const ScoreCard = ({ title, score, detail }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <h4 className="font-medium text-gray-700">{title}</h4>
    <div className="mt-2 flex items-center">
      <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
        <div
          className="bg-blue-600 rounded-full h-2"
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="font-semibold text-gray-900">{score}%</span>
    </div>
    <p className="mt-2 text-xs text-gray-500">{detail}</p>
  </div>
);

export default MarketingReport;
