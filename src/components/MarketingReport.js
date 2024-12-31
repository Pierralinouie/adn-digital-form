const MarketingReport = ({ formData }) => {
  const scores = {
    identityScore: calculateIdentityScore(),
    digitalPresence: calculateDigitalScore(),
    contentQuality: calculateContentScore()
  };

  const sections = [
    {
      title: "1. Analyse de l'Identité de Marque",
      content: {
        scoreDetails: analyzeIdentityDetails(),
        marketPosition: determineMarketPosition(),
        uniqueValue: defineUniqueValue(),
        targetAudience: analyzeTargetAudience()
      }
    },
    {
      title: "2. Stratégie Digitale",
      content: {
        platformStrategy: definePlatformStrategy(),
        contentPlan: createContentPlan(),
        engagementTactics: defineEngagementTactics(),
        growthPlan: createGrowthPlan()
      }
    },
    {
      title: "3. Plan d'Action",
      content: {
        immediate: defineImmediateActions(),
        shortTerm: defineShortTermActions(),
        longTerm: defineLongTermActions(),
        budget: createBudgetPlan()
      }
    }
  ];

  // Fonctions d'analyse détaillées
  function analyzeIdentityDetails() {
    const details = {
      style: {
        score: formData.styleMusical ? 20 : 0,
        strengths: [],
        improvements: []
      },
      story: {
        score: formData.histoire ? 20 : 0,
        strengths: [],
        improvements: []
      },
      uniqueness: {
        score: calculateUniquenessScore(),
        elements: []
      }
    };
    
    // Analyse du style musical
    if (formData.styleMusical) {
      details.style.strengths.push(`Style musical bien défini: ${formData.styleMusical}`);
    } else {
      details.style.improvements.push("Définir un style musical unique");
    }

    return details;
  }

  function determineMarketPosition() {
    return {
      genre: formData.genrePrincipal,
      competitors: suggestCompetitors(),
      opportunities: identifyOpportunities(),
      threats: identifyThreats()
    };
  }

  function createContentPlan() {
    return {
      weekly: generateWeeklyPlan(),
      monthly: generateMonthlyPlan(),
      contentTypes: defineContentTypes(),
      formats: suggestFormats()
    };
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8">Rapport d'Analyse Marketing Digital</h2>
      
      {sections.map((section, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-blue-800">{section.title}</h3>
          
          {section.title === "1. Analyse de l'Identité de Marque" && (
            <IdentityAnalysisSection 
              data={section.content} 
              scores={scores}
            />
          )}
          
          {section.title === "2. Stratégie Digitale" && (
            <DigitalStrategySection 
              data={section.content}
              formData={formData}
            />
          )}
          
          {section.title === "3. Plan d'Action" && (
            <ActionPlanSection 
              data={section.content}
              scores={scores}
            />
          )}
        </div>
      ))}
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold mb-2">Prochaines étapes recommandées</h4>
        <ul className="list-disc pl-5 space-y-2">
          {generateNextSteps().map((step, index) => (
            <li key={index} className="text-gray-700">{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Composants de section spécialisés
const IdentityAnalysisSection = ({ data, scores }) => (
  <div className="space-y-6">
    <ScoreCard score={scores.identityScore} title="Score d'Identité" />
    <StrengthsWeaknesses data={data.scoreDetails} />
    <MarketPositioning data={data.marketPosition} />
    <UniqueValueProposition data={data.uniqueValue} />
  </div>
);

const DigitalStrategySection = ({ data, formData }) => (
  <div className="space-y-6">
    <PlatformStrategy data={data.platformStrategy} />
    <ContentCalendar data={data.contentPlan} />
    <EngagementTactics data={data.engagementTactics} />
    <GrowthProjections data={data.growthPlan} />
  </div>
);

const ActionPlanSection = ({ data, scores }) => (
  <div className="space-y-6">
    <TimelineActions data={data} />
    <BudgetBreakdown data={data.budget} />
    <KPITargets scores={scores} />
  </div>
);

// Sous-composants utilitaires
const ScoreCard = ({ score, title }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <h4 className="font-medium mb-2">{title}</h4>
    <div className="flex items-center">
      <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
        <div
          className="bg-blue-600 rounded-full h-2"
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="font-semibold">{score}%</span>
    </div>
  </div>
);

export default MarketingReport;
