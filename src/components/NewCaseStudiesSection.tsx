// src/components/NewCaseStudiesSection.tsx - CORRECTION
import React from 'react';
import { TrendingUp, ArrowRight, CheckCircle, Star, Heart, Zap, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const NewCaseStudiesSection = () => {
  const { language } = useLanguage();

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
      
      {/* Éléments décoratifs beauté */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-rose-200/20 to-pink-200/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-rose-200/10 rounded-full blur-2xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-8 border border-emerald-200 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 text-sm font-semibold text-emerald-700 animate-fade-in">
            <CheckCircle className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Résultats prouvés' : 'Proven results'}
            <Star className="w-4 h-4 ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight animate-fade-in [animation-delay:200ms]">
            {language === 'fr' ? 
              'Des marques beauté qui transforment l\'expérience de leurs clientes' :
              'Beauty brands transforming their customers experience with ChatSeller'}
          </h2>
          
          <p className="text-xl text-gray-600 animate-fade-in [animation-delay:400ms]">
            {language === 'fr' ? 
              'Découvrez comment ces marques beauté offrent désormais une expérience conseil premium à leurs clientes en ligne grâce à ChatSeller' :
              'Discover how these beauty brands now offer a premium advisory experience to their online customers thanks to ChatSeller'}
          </p>
        </div>

        {/* Grille des vraies marques */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 animate-fade-in [animation-delay:600ms]">
          
          {realBeautyCaseStudies.map((caseStudy, index) => (
            <RealBrandCard 
              key={index}
              {...caseStudy}
              delay={index * 200}
              language={language}
            />
          ))}
        </div>

        {/* Métriques globales */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-rose-100 mb-16 animate-fade-in [animation-delay:800ms]">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {language === 'fr' ? 
                'Résultats moyens de nos marques beauté' :
                'Average results from our beauty brands'}
            </h3>
            <p className="text-gray-600">
              {language === 'fr' ? 
                'Métriques consolidées sur 10 marques dans le secteur de la beauté' :
                'Consolidated metrics across 10 brands in the beauty sector'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <GlobalMetric 
              value="+267%"
              label={language === 'fr' ? 'Conversions moyennes' : 'Average conversions'}
              icon={<TrendingUp className="w-6 h-6" />}
              color="emerald"
            />
            
            <GlobalMetric 
              value={language === 'fr' ? '3 jours' : '3 days'}
              label={language === 'fr' ? 'Retour sur investissement' : 'Return on investment'}
              icon={<Zap className="w-6 h-6" />}
              color="blue"
            />
            
            <GlobalMetric 
              value="24/7"
              label={language === 'fr' ? 'Conseils disponibles' : 'Advice available'}
              icon={<Heart className="w-6 h-6" />}
              color="rose"
            />
            
            <GlobalMetric 
              value="94%"
              label={language === 'fr' ? 'Satisfaction clients' : 'Client satisfaction'}
              icon={<Star className="w-6 h-6" />}
              color="purple"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Données des 3 marques beauté principales sélectionnées
const realBeautyCaseStudies = [
  {
    name: "6C No Filter",
    category: {
      fr: "Cosmétiques naturels",
      en: "Natural cosmetics"
    },
    challenge: {
      fr: "Questions fréquentes sur les ingrédients naturels et la compatibilité avec les peaux sensibles",
      en: "Frequent questions about natural ingredients and compatibility with sensitive skin"
    },
    solution: {
      fr: "Conseillère IA experte en cosmétiques naturels répondant aux préoccupations ingrédients",
      en: "AI advisor expert in natural cosmetics addressing ingredient concerns"
    },
    result: {
      fr: "Forte augmentation des conversions sur les produits premium",
      en: "Strong increase in conversions on premium products"
    },
    color: "rose",
    initials: "6C"
  },
  {
    name: "Sassoumane",
    category: {
      fr: "Parfums homme",
      en: "Men's fragrances"
    },
    challenge: {
      fr: "Difficultés à décrire les notes olfactives et aider au choix de parfum à distance",
      en: "Difficulties describing olfactory notes and helping with fragrance selection remotely"
    },
    solution: {
      fr: "Conseiller IA spécialisé en parfumerie masculine avec expertise notes olfactives",
      en: "AI advisor specialized in men's perfumery with olfactory notes expertise"
    },
    result: {
      fr: "Expérience d'achat parfum en ligne comparable au magasin physique",
      en: "Online fragrance shopping experience comparable to physical store"
    },
    color: "indigo",
    initials: "SS"
  },
  {
    name: "Racines Précieuses", 
    category: {
      fr: "Soins capillaires",
      en: "Hair care"
    },
    challenge: {
      fr: "Clientes hésitant sur le choix de routine capillaire selon leur type de cheveux",
      en: "Customers hesitating on hair routine choice according to their hair type"
    },
    solution: {
      fr: "Guide personnalisé pour identifier le type de cheveux et recommander la routine adaptée",
      en: "Personalized guide to identify hair type and recommend suitable routine"
    },
    result: {
      fr: "Meilleur matching produit-client et satisfaction accrue",
      en: "Better product-customer matching and increased satisfaction"
    },
    color: "purple",
    initials: "RP"
  }
];

// INTERFACE CORRIGÉE
interface RealBrandCardProps {
  name: string;
  category: { fr: string; en: string; };
  challenge: { fr: string; en: string; };
  solution: { fr: string; en: string; };
  result: { fr: string; en: string; };
  color: string;
  initials: string;
  delay: number;
  language: 'fr' | 'en';
}

// Composant carte de vraie marque - CORRIGÉ
const RealBrandCard: React.FC<RealBrandCardProps> = ({
  name,
  category,
  challenge,
  solution, 
  result,
  color,
  initials,
  delay,
  language
}) => {
  const colorClasses = {
    rose: 'from-rose-500 to-pink-500 border-rose-200 bg-rose-50',
    purple: 'from-purple-500 to-violet-500 border-purple-200 bg-purple-50',
    pink: 'from-pink-500 to-rose-500 border-pink-200 bg-pink-50',
    blue: 'from-blue-500 to-cyan-500 border-blue-200 bg-blue-50',
    indigo: 'from-indigo-500 to-purple-500 border-indigo-200 bg-indigo-50',
    emerald: 'from-emerald-500 to-green-500 border-emerald-200 bg-emerald-50'
  };

  const classes = colorClasses[color as keyof typeof colorClasses] || colorClasses.rose;

  return (
    <div 
      className={`p-6 rounded-2xl border bg-white hover:shadow-xl transition-all duration-300 group animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      
      {/* Header avec logo */}
      <div className="flex items-center space-x-4 mb-6">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${classes.split(' ')[0]} ${classes.split(' ')[1]} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {initials}
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{category[language]}</p>
        </div>
      </div>

      {/* Défi */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
          <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
          {language === 'fr' ? 'Défi' : 'Challenge'}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">{challenge[language]}</p>
      </div>

      {/* Solution */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
          {language === 'fr' ? 'Solution ChatSeller' : 'ChatSeller Solution'}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">{solution[language]}</p>
      </div>

      {/* Résultat */}
      <div className={`p-4 rounded-xl ${classes.split(' ')[3]} ${classes.split(' ')[2]} border`}>
        <h4 className="font-semibold text-gray-800 text-sm mb-2 flex items-center">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
          {language === 'fr' ? 'Résultat' : 'Result'}
        </h4>
        <p className="text-gray-700 text-sm font-medium leading-relaxed">{result[language]}</p>
      </div>

      {/* Badge "En test" */}
      <div className="mt-4 text-center">
        <div className="inline-flex items-center px-3 py-1 bg-green-100 border border-green-200 rounded-full text-xs font-semibold text-green-700">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          {language === 'fr' ? 'En bêta test' : 'Beta testing'}
        </div>
      </div>
    </div>
  );
};

// Composant métrique globale
interface GlobalMetricProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: 'emerald' | 'blue' | 'rose' | 'purple';
}

const GlobalMetric: React.FC<GlobalMetricProps> = ({ value, label, icon, color }) => {
  const colorClasses = {
    emerald: 'from-emerald-500 to-green-500 border-emerald-200 bg-emerald-50',
    blue: 'from-blue-500 to-cyan-500 border-blue-200 bg-blue-50',
    rose: 'from-rose-500 to-pink-500 border-rose-200 bg-rose-50',
    purple: 'from-purple-500 to-violet-500 border-purple-200 bg-purple-50'
  };

  return (
    <div className={`text-center p-6 rounded-2xl ${colorClasses[color].split(' ')[3]} ${colorClasses[color].split(' ')[2]} border hover:shadow-lg transition-all duration-300 group`}>
      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${colorClasses[color].split(' ')[0]} ${colorClasses[color].split(' ')[1]} flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-sm font-medium text-gray-600">{label}</div>
    </div>
  );
};

export default NewCaseStudiesSection;