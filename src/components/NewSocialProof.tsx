// src/components/NewSocialProof.tsx - SOCIAL PROOF BEAUTÉ AVEC VRAIES MARQUES BETA
import React from 'react';
import { CheckCircle, Sparkles, TrendingUp, Star, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewSocialProof = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-hidden">
      
      {/* Éléments décoratifs beauté */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-rose-200/20 to-pink-200/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-rose-200/10 rounded-full blur-2xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        
        {/* Header avec phrase forte */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-8 border border-rose-200 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 text-sm font-semibold text-rose-700 animate-fade-in backdrop-blur-sm">
            <Heart className="w-4 h-4 mr-2" />
            {t('beautySectorSpecialized')}
            <Sparkles className="w-4 h-4 ml-2 text-rose-600" />
          </div>
          
          {/* Phrase forte à la cluely.com */}
          <div className="mb-6 animate-fade-in [animation-delay:200ms]">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {language === 'fr' ? 
                'Dans la beauté, conseiller c\'est vendre.' : 
                'In beauty, advising is selling.'}
            </h2>
            <p className="text-2xl md:text-3xl text-rose-600 font-semibold">
              {language === 'fr' ? 
                'Laissez l\'IA le faire 24/7.' : 
                'Let AI do it 24/7.'}
            </p>
          </div>
          
          <p className="text-lg text-gray-600 animate-fade-in [animation-delay:400ms]">
            {t('socialProofBeautyDesc')}
          </p>
        </div>
        
        {/* Logos des vraies marques beta testeurs */}
        <div className="animate-fade-in [animation-delay:600ms] mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('beautyBrandsAlreadyTesting')}
            </h3>
            <p className="text-gray-600">
              {language === 'fr' ? 
                'Marques beauté françaises et belges qui testent ChatSeller en avant-première' :
                'French and Belgian beauty brands testing ChatSeller in preview'}
            </p>
          </div>
          
          <RealBeautyBrandsLogos />
        </div>
        
        {/* Métriques secteur beauté */}
        <div className="text-center animate-fade-in [animation-delay:800ms]">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <MetricCard 
              value="+267%"
              label={t('socialProofConversions')}
              icon={<TrendingUp className="w-5 h-5" />}
              color="emerald"
            />
            
            <MetricCard 
              value="3 jours"
              label={t('socialProofROIRecovered')}
              icon={<Star className="w-5 h-5" />}
              color="blue"
            />
            
            <MetricCard 
              value="24/7"
              label={t('socialProofAdviceAvailable')}
              icon={<Heart className="w-5 h-5" />}
              color="rose"
            />
            
            <MetricCard 
              value="7"
              label={language === 'fr' ? 'marques en test' : 'brands testing'}
              icon={<CheckCircle className="w-5 h-5" />}
              color="purple"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant pour les logos des vraies marques beauté
const RealBeautyBrandsLogos = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
      {realBeautyBrands.map((brand, index) => (
        <BrandLogo 
          key={index}
          name={brand.name}
          category={brand.category}
          color={brand.color}
          delay={index * 100}
        />
      ))}
    </div>
  );
};

// Composant logo marque individuel
const BrandLogo = ({ 
  name, 
  category,
  color,
  delay
}: { 
  name: string; 
  category: string;
  color: string;
  delay: number;
}) => {
  const { language } = useLanguage();
  const initials = name.split(' ').map(word => word[0]).join('').slice(0, 2);

  return (
    <div 
      className="group cursor-pointer animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-white rounded-2xl p-4 shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
        
        {/* Logo avec initiales */}
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm shadow-sm mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        
        {/* Info marque */}
        <div className="space-y-1">
          <div className="text-sm font-semibold text-gray-800 group-hover:text-rose-600 transition-colors">
            {name}
          </div>
          <div className="text-xs text-gray-500">
            {category}
          </div>
          
          {/* Badge de test */}
          <div className="inline-flex items-center px-2 py-1 bg-green-100 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
            <span className="text-xs font-medium text-green-700">
              {language === 'fr' ? 'En test' : 'Testing'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Données des vraies marques beauté beta testeurs
const realBeautyBrands = [
  {
    name: "6C No Filter",
    category: "Cosmétiques naturels",
    color: "#E91E63"
  },
  {
    name: "Racines Précieuses", 
    category: "Produits cheveux",
    color: "#8E24AA"
  },
  {
    name: "Yafa Beauty",
    category: "Cosmétiques naturels",
    color: "#D81B60"
  },
  {
    name: "Karyal Products",
    category: "Cosmétiques",
    color: "#7B1FA2"
  },
  {
    name: "Sassoumane",
    category: "Parfums homme",
    color: "#5E35B1"
  },
  {
    name: "Exclusiv Products",
    category: "Produits barbe",
    color: "#3949AB"
  },
  {
    name: "MOSS",
    category: "Dermo-capillaire",
    color: "#1E88E5"
  }
];

// Composant métrique avec couleurs beauté
const MetricCard = ({ 
  value, 
  label, 
  icon, 
  color 
}: { 
  value: string; 
  label: string; 
  icon: React.ReactNode; 
  color: 'emerald' | 'blue' | 'rose' | 'purple';
}) => {
  const colorClasses = {
    emerald: 'from-emerald-500 to-green-500 border-emerald-200 bg-emerald-50',
    blue: 'from-blue-500 to-cyan-500 border-blue-200 bg-blue-50',
    rose: 'from-rose-500 to-pink-500 border-rose-200 bg-rose-50',
    purple: 'from-purple-500 to-indigo-500 border-purple-200 bg-purple-50'
  };

  return (
    <div className={`${colorClasses[color].split(' ')[3]} rounded-2xl p-6 border ${colorClasses[color].split(' ')[2]} hover:shadow-lg transition-all duration-300 group`}>
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorClasses[color].split(' ')[0]} ${colorClasses[color].split(' ')[1]} flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="text-sm text-gray-600 font-medium">{label}</div>
      </div>
    </div>
  );
};

export default NewSocialProof;