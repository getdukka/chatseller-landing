// src/components/NewFeaturesSection.tsx
import React, { useState, useEffect } from 'react';
import { Brain, ShoppingCart, BarChart3, Zap, Heart, Sparkles, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewFeaturesSection = () => {
  const { language } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const featuresData = getBeautyFeaturesData(language);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      id="features"
      className="py-24 bg-gradient-to-b from-white via-rose-50/30 to-purple-50/30 relative"
    >
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-gradient-to-br from-rose-300/20 to-pink-300/10 rounded-full blur-3xl -z-10" />
      <div className="absolute right-0 bottom-1/4 w-48 h-48 bg-gradient-to-br from-purple-300/20 to-rose-300/10 rounded-full blur-2xl -z-10" />
      
      <div className="mx-auto" style={{ padding: '0 2em' }}>
        {isMobile ? (
          <MobileFeaturesLayout featuresData={featuresData} language={language} />
        ) : (
          <DesktopClickableLayout 
            featuresData={featuresData} 
            activeFeature={activeFeature}
            setActiveFeature={setActiveFeature}
            language={language} 
          />
        )}
      </div>
    </section>
  );
};

// Layout mobile classique
const MobileFeaturesLayout = ({ featuresData, language }: { featuresData: any[], language: string }) => {
  return (
    <>
      <div className="text-center max-w-4xl mx-auto mb-20">
        <HeaderContent language={language} />
      </div>

      <div className="space-y-12 max-w-4xl mx-auto">
        {featuresData.map((feature, index) => (
          <BeautyFeatureCard
            key={index}
            {...feature}
            delay={index * 200}
          />
        ))}
      </div>
    </>
  );
};

// Layout desktop avec navigation cliquable uniquement
const DesktopClickableLayout = ({ 
  featuresData, 
  activeFeature,
  setActiveFeature,
  language 
}: { 
  featuresData: any[], 
  activeFeature: number,
  setActiveFeature: (index: number) => void,
  language: string 
}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
      
      {/* Contenu gauche - Navigation */}
      <div className="space-y-8">
        <HeaderContent language={language} />
        
        {/* Navigation des features - CLIQUABLE */}
        <div className="space-y-4">
          {featuresData.map((feature, index) => (
            <div 
              key={index}
              className={`flex items-center space-x-4 p-4 rounded-xl cursor-pointer transition-all duration-500 hover:shadow-lg ${
                index === activeFeature 
                  ? 'bg-white shadow-xl border-2 border-rose-200 scale-105' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                index === activeFeature 
                  ? `${feature.colorClasses.text} bg-white shadow-lg scale-110` 
                  : 'text-gray-400 bg-gray-100'
              }`}>
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className={`font-semibold transition-colors duration-300 ${
                  index === activeFeature ? 'text-gray-900' : 'text-gray-600'
                }`}>
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {feature.description}
                </p>
              </div>
              {index === activeFeature && (
                <div className={`ml-auto px-3 py-1 rounded-full text-xs font-bold text-white ${feature.colorClasses.badge} animate-pulse`}>
                  {feature.metric}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Indicateur de sélection */}
        <div className="flex items-center space-x-3">
          <div className="text-sm text-gray-500 font-medium">
            {activeFeature + 1} / {featuresData.length}
          </div>
          <div className="flex space-x-2">
            {featuresData.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeFeature 
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setActiveFeature(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Instructions clic */}
        <div className="text-xs text-gray-400 italic">
          {language === 'fr' ? 
            'Cliquez sur une fonctionnalité pour l\'explorer' :
            'Click on a feature to explore it'}
        </div>
      </div>
      
      {/* Carte droite - Change au clic */}
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <BeautyFeatureCard 
            key={activeFeature} // Force re-render avec animation
            {...featuresData[activeFeature]} 
            isActive={true}
            delay={0}
          />
        </div>
      </div>
    </div>
  );
};

// Header content réutilisable
const HeaderContent = ({ language }: { language: string }) => (
  <>
    <div className="inline-flex items-center px-6 py-3 mb-4 border border-rose-200 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 text-sm font-semibold text-rose-700 animate-fade-in">
      <Sparkles className="w-4 h-4 mr-2" />
      {language === 'fr' ? 'Les compétences de Mia' : 'What your AI Salesperson can do'}
      <Heart className="w-4 h-4 ml-2" />
    </div>

    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight animate-fade-in [animation-delay:200ms]">
      {language === 'fr' ?
        'Mia est une Vendeuse spécialisée en beauté' :
        'Mia is a specialized beauty salesperson'}
    </h2>

    <p className="text-lg text-gray-600 animate-fade-in [animation-delay:400ms]">
      {language === 'fr' ?
        'Une bonne vendeuse ne se contente pas de répondre aux questions. Elle guide, elle rassure, elle vend. Mia fait tout ça — et plus encore.' :
        "A good salesperson doesn't just answer questions. She guides, reassures, and sells. Mia does all of that — and more."}
    </p>
  </>
);

// Composant carte fonctionnalité beauté avec animations d'entrée
interface BeautyFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClasses: any;
  features: string[];
  metric: string;
  visual: React.ReactNode;
  stats: {
    primary: string;
    primaryLabel: string;
    secondary: string;
    secondaryLabel: string;
  };
  isActive?: boolean;
  delay?: number;
}

const BeautyFeatureCard: React.FC<BeautyFeatureCardProps> = ({
  icon,
  title,
  description,
  colorClasses,
  features,
  metric,
  visual,
  stats,
  isActive = false,
  delay = 0
}) => {
  return (
    <div 
      className={`relative p-6 rounded-2xl border bg-gradient-to-br ${colorClasses.bg} ${colorClasses.border} shadow-xl transition-all duration-700 transform animate-fade-in ${
        isActive ? 'scale-105 shadow-2xl' : 'scale-100'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      
      {/* Badge métrique - REPOSITIONNÉ SUR LA BORDURE */}
      <div className="absolute -top-3 right-6 z-10">
        <span className={`text-xs font-bold px-4 py-2 rounded-full ${colorClasses.badge} text-white shadow-lg border-2 border-white animate-bounce`}>
          {metric}
        </span>
      </div>

      {/* Header avec icon et titre */}
      <div className="flex items-start justify-between mb-6 pt-2">
        <div className="flex items-start space-x-4">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${colorClasses.text} bg-white/80 shadow-lg transition-transform duration-300 animate-pulse`}>
            {icon}
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors">
              {title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="text-center p-3 bg-white/60 rounded-xl border border-white/50 hover:scale-105 transition-transform duration-300">
          <div className={`text-xl font-bold ${colorClasses.text} mb-1`}>
            {stats.primary}
          </div>
          <div className="text-xs text-gray-600 font-medium">
            {stats.primaryLabel}
          </div>
        </div>
        <div className="text-center p-3 bg-white/60 rounded-xl border border-white/50 hover:scale-105 transition-transform duration-300">
          <div className={`text-xl font-bold ${colorClasses.text} mb-1`}>
            {stats.secondary}
          </div>
          <div className="text-xs text-gray-600 font-medium">
            {stats.secondaryLabel}
          </div>
        </div>
      </div>

      {/* Visuel dynamique */}
      <div className="mb-5 hover:scale-105 transition-transform duration-300">
        {visual}
      </div>

      {/* Liste des fonctionnalités avec animations */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li 
            key={index} 
            className="flex items-start text-sm text-gray-700 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CheckCircle className={`w-4 h-4 mt-0.5 mr-3 flex-shrink-0 ${colorClasses.text}`} />
            <span className="font-medium">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Données des fonctionnalités avec traductions complètes
const getBeautyFeaturesData = (language: 'fr' | 'en') => [
  {
    icon: <Brain className="h-7 w-7" />,
    title: language === 'fr' ? 'Expertise Beauté Complète' : 'Complete Beauty Expertise',
    description: language === 'fr' ?
      'Mia maîtrise ingrédients, types de peau, routines et tendances beauté — elle conseille comme une experte certifiée' :
      'Mia masters ingredients, skin types, routines and beauty trends — she advises like a certified expert',
    colorClasses: {
      gradient: 'from-purple-500 via-pink-500 to-purple-600',
      bg: 'from-purple-50/80 via-pink-50/50 to-purple-50/80',
      border: 'border-purple-200',
      text: 'text-purple-600',
      badge: 'bg-gradient-to-r from-purple-600 to-pink-600'
    },
    features: [
      language === 'fr' ? 'Analyse de +2000 ingrédients cosmétiques' : 'Analysis of 2000+ cosmetic ingredients',
      language === 'fr' ? 'Diagnostic précis des types de peau' : 'Accurate skin type diagnosis',
      language === 'fr' ? 'Recommandations selon l\'âge et besoins' : 'Recommendations by age and needs',
      language === 'fr' ? 'Connaissance des contre-indications' : 'Knowledge of contraindications'
    ],
    metric: language === 'fr' ? '+94% questions résolues' : '+94% questions solved',
    visual: <BeautyExpertiseVisual language={language} />,
    stats: {
      primary: '+2000',
      primaryLabel: language === 'fr' ? 'Ingrédients' : 'Ingredients',
      secondary: '94%',
      secondaryLabel: language === 'fr' ? 'Précision' : 'Accuracy'
    }
  },
  {
    icon: <Heart className="h-7 w-7" />,
    title: language === 'fr' ? 'Conseils Ultra-Personnalisés' : 'Ultra-Personalized Advice',
    description: language === 'fr' ?
      'Mia pose les bonnes questions et adapte ses recommandations au profil unique de chaque client' :
      "Mia asks the right questions and adapts her recommendations to each customer's unique profile",
    colorClasses: {
      gradient: 'from-rose-500 via-pink-500 to-rose-600',
      bg: 'from-rose-50/80 via-pink-50/50 to-rose-50/80',
      border: 'border-rose-200',
      text: 'text-rose-600',
      badge: 'bg-gradient-to-r from-rose-600 to-pink-600'
    },
    features: [
      language === 'fr' ? 'Elle pose les bonnes questions avant de conseiller' : 'She asks the right questions before advising',
      language === 'fr' ? 'Analyse comportement d\'achat' : 'Purchase behavior analysis',
      language === 'fr' ? 'Routines beauté sur-mesure' : 'Custom beauty routines',
      language === 'fr' ? 'Suivi évolution des besoins' : 'Needs evolution tracking'
    ],
    metric: language === 'fr' ? '+73% satisfaction client' : '+73% customer satisfaction',
    visual: <PersonalizedAdviceVisual language={language} />,
    stats: {
      primary: '12',
      primaryLabel: language === 'fr' ? 'Profils peau' : 'Skin profiles',
      secondary: '73%',
      secondaryLabel: language === 'fr' ? 'Satisfaction' : 'Satisfaction'
    }
  },
  {
    icon: <ShoppingCart className="h-7 w-7" />,
    title: language === 'fr' ? 'Vente Intelligente' : 'Smart Sales',
    description: language === 'fr' ?
      'Mia guide chaque visiteur vers l\'achat et augmente naturellement le panier, sans pression' :
      'Mia guides every visitor toward purchase and naturally grows the cart, without pressure',
    colorClasses: {
      gradient: 'from-emerald-500 via-green-500 to-emerald-600',
      bg: 'from-emerald-50/80 via-green-50/50 to-emerald-50/80',
      border: 'border-emerald-200',
      text: 'text-emerald-600',
      badge: 'bg-gradient-to-r from-emerald-600 to-green-600'
    },
    features: [
      language === 'fr' ? 'Produits complémentaires suggérés naturellement' : 'Complementary products suggested naturally',
      language === 'fr' ? 'Alternatives selon le budget' : 'Budget alternatives',
      language === 'fr' ? 'Compléments de routine suggérés' : 'Suggested routine complements',
      language === 'fr' ? 'Offres promotionnelles ciblées' : 'Targeted promotional offers'
    ],
    metric: language === 'fr' ? '+52% panier moyen' : '+52% average cart',
    visual: <SmartSalesVisual language={language} />,
    stats: {
      primary: '+52%',
      primaryLabel: language === 'fr' ? 'Panier moyen' : 'Average cart',
      secondary: '3.2',
      secondaryLabel: language === 'fr' ? 'Articles/commande' : 'Items/order'
    }
  },
  {
    icon: <BarChart3 className="h-7 w-7" />,
    title: language === 'fr' ? 'Suivi des performances' : 'Performance Tracking',
    description: language === 'fr' ?
      'Mia vous donne des données précieuses sur vos clients : préférences, tendances et opportunités de croissance' :
      'Mia gives you valuable insights on your customers: preferences, trends and growth opportunities',
    colorClasses: {
      gradient: 'from-blue-500 via-cyan-500 to-blue-600',
      bg: 'from-blue-50/80 via-cyan-50/50 to-blue-50/80',
      border: 'border-blue-200',
      text: 'text-blue-600',
      badge: 'bg-gradient-to-r from-blue-600 to-cyan-600'
    },
    features: [
      language === 'fr' ? 'Tendances produits en temps réel' : 'Real-time product trends',
      language === 'fr' ? 'Profils clients détaillés' : 'Detailed customer profiles',
      language === 'fr' ? 'Revenus par catégorie beauté' : 'Revenue by beauty category',
      language === 'fr' ? 'Prédictions de demande' : 'Demand predictions'
    ],
    metric: language === 'fr' ? '+150% de revenus' : '+150% revenue',
    visual: <BeautyAnalyticsVisual language={language} />,
    stats: {
      primary: '150%',
      primaryLabel: language === 'fr' ? 'Revenus générés' : 'Revenue generated',
      secondary: '24/7',
      secondaryLabel: language === 'fr' ? 'Monitoring' : 'Monitoring'
    }
  }
];

// Visuels spécialisés beauté avec traductions - Plus compacts
const BeautyExpertiseVisual = ({ language }: { language: 'fr' | 'en' }) => (
  <div className="bg-white/70 rounded-xl p-4 border border-purple-200/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
    <div className="space-y-3">
      <div className="text-sm font-semibold text-purple-700 mb-2">
        {language === 'fr' ? 'Base de Connaissances Beauté' : 'Beauty Knowledge Base'}
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {[
          { 
            category: language === 'fr' ? 'Skincare' : 'Skincare', 
            count: '847', 
            icon: '🧴', 
            color: 'bg-purple-100' 
          },
          { 
            category: language === 'fr' ? 'Maquillage' : 'Makeup', 
            count: '623', 
            icon: '💄', 
            color: 'bg-pink-100' 
          },
          { 
            category: language === 'fr' ? 'Parfums' : 'Fragrances', 
            count: '291', 
            icon: '🌸', 
            color: 'bg-rose-100' 
          },
          { 
            category: language === 'fr' ? 'Cheveux' : 'Hair care', 
            count: '389', 
            icon: '✨', 
            color: 'bg-violet-100' 
          }
        ].map((item, index) => (
          <div key={index} className={`${item.color} rounded-lg p-2 text-center hover:scale-105 transition-transform duration-300`}>
            <div className="text-base mb-1">{item.icon}</div>
            <div className="text-xs font-bold text-gray-800">{item.count}</div>
            <div className="text-xs text-gray-600">{item.category}</div>
          </div>
        ))}
      </div>

      <div className="mt-3">
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span>{language === 'fr' ? 'Précision des conseils' : 'Advice accuracy'}</span>
          <span className="font-bold text-purple-600">94.2%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{width: '94.2%'}}></div>
        </div>
      </div>
    </div>
  </div>
);

const PersonalizedAdviceVisual = ({ language }: { language: 'fr' | 'en' }) => (
  <div className="bg-white/70 rounded-xl p-4 border border-rose-200/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
    <div className="space-y-3">
      <div className="text-sm font-semibold text-rose-700 mb-2">
        {language === 'fr' ? 'Profil Client en Cours' : 'Current Client Profile'}
      </div>
      
      <div className="bg-rose-100/50 rounded-lg p-3">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-6 h-6 bg-rose-300 rounded-full flex items-center justify-center">
            <span className="text-rose-700 text-xs font-bold">ML</span>
          </div>
          <div>
            <div className="text-sm font-medium">
              {language === 'fr' ? 'Maguette B., 28 ans' : 'Maguette B., 28 years old'}
            </div>
            <div className="text-xs text-gray-600">
              {language === 'fr' ? 'Cheveux très secs et fragiles' : 'Very dry and fragile hair'}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-white/50 rounded p-1">
            <div className="font-bold text-rose-600">
              {language === 'fr' ? 'Routine' : 'Routine'}
            </div>
            <div>{language === 'fr' ? 'Soin capillaire naturel' : 'Natural hair care'}</div>
          </div>
          <div className="bg-white/50 rounded p-1">
            <div className="font-bold text-rose-600">Budget</div>
            <div>{language === 'fr' ? '50-80€/mois' : '50-80€/month'}</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-2 border border-rose-200">
        <div className="text-xs font-semibold text-rose-700 mb-1">
          {language === 'fr' ? 'Recommandation IA' : 'AI Recommendation'}
        </div>
        <div className="text-xs text-gray-700">
          {language === 'fr' ?
            '"Masque Ricin & Hibiscus 2x/semaine + Huile Activatrice quotidienne."' :
            '"Castor & Hibiscus Mask 2x/week + Daily Activating Oil."'}
        </div>
      </div>
    </div>
  </div>
);

const SmartSalesVisual = ({ language }: { language: 'fr' | 'en' }) => (
  <div className="bg-white/70 rounded-xl p-4 border border-emerald-200/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
    <div className="space-y-3">
      <div className="text-sm font-semibold text-emerald-700 mb-2">
        {language === 'fr' ? 'Vente en Cours' : 'Current Sale'}
      </div>
      
      <div className="bg-emerald-100/50 rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm">🌺</span>
            <div>
              <div className="text-sm font-medium">
                {language === 'fr' ? 'Gommage Papaye' : 'Papaya Exfoliator'}
              </div>
              <div className="text-xs text-gray-600">
                {language === 'fr' ? 'Produit principal' : 'Main product'}
              </div>
            </div>
          </div>
          <div className="text-sm font-bold text-emerald-600">42€</div>
        </div>
        
        <div className="space-y-1">
          <div className="bg-white/60 rounded p-2 flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <span className="text-xs">🌿</span>
              <span className="text-xs font-medium">
                {language === 'fr' ? 'Masque Ricin & Hibiscus' : 'Castor & Hibiscus Mask'}
              </span>
            </div>
            <span className="text-xs font-bold">+23€</span>
          </div>

          <div className="bg-white/60 rounded p-2 flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <span className="text-xs">✨</span>
              <span className="text-xs font-medium">
                {language === 'fr' ? 'Huile Activatrice Pousse' : 'Growth Activating Oil'}
              </span>
            </div>
            <span className="text-xs font-bold">+15€</span>
          </div>
        </div>
        
        <div className="border-t border-emerald-200 pt-2 mt-2">
          <div className="flex justify-between text-xs">
            <span>{language === 'fr' ? 'Total suggéré:' : 'Suggested total:'}</span>
            <span className="font-bold text-emerald-600">80€ (+90%)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BeautyAnalyticsVisual = ({ language }: { language: 'fr' | 'en' }) => (
  <div className="bg-white/70 rounded-xl p-4 border border-blue-200/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
    <div className="space-y-3">
      <div className="text-sm font-semibold text-blue-700 mb-2">
        {language === 'fr' ? 'Dashboard Analytics' : 'Analytics Dashboard'}
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-blue-100/50 rounded-lg p-2 text-center">
          <div className="text-lg font-bold text-blue-600">5.8%</div>
          <div className="text-xs text-blue-700">
            {language === 'fr' ? 'Conversion' : 'Conversion'}
          </div>
        </div>
        <div className="bg-green-100/50 rounded-lg p-2 text-center">
          <div className="text-lg font-bold text-green-600">+4.2k€</div>
          <div className="text-xs text-green-700">
            {language === 'fr' ? 'Revenus' : 'Revenue'}
          </div>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-gray-600">
          <span>Skincare</span>
          <span>67%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '67%'}}></div>
        </div>
        
        <div className="flex justify-between text-xs text-gray-600">
          <span>{language === 'fr' ? 'Maquillage' : 'Makeup'}</span>
          <span>24%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div className="bg-pink-500 h-1.5 rounded-full" style={{width: '24%'}}></div>
        </div>
      </div>
    </div>
  </div>
);

export default NewFeaturesSection;