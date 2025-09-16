// src/components/NewProblemSolutionSection.tsx 
import React, { useState, useEffect } from 'react';
import { X, Check, TrendingDown, TrendingUp, MessageSquare, ShoppingCart, Sparkles, Heart, Brain, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ChatModal from './ChatModal';

// COMPOSANTS UTILITAIRES DÉFINIS EN PREMIER
const AnswerBubble = ({ text }: { text: string }) => (
  <div className="flex items-center space-x-3 p-3 rounded-lg border bg-emerald-50 border-emerald-200">
    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
    <span className="text-sm text-emerald-700 font-medium">{text}</span>
  </div>
);

const QuestionBubble = ({ text, unanswered }: { text: string; unanswered?: boolean }) => (
  <div className={`flex items-center space-x-3 p-3 rounded-lg border ${
    unanswered ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
  }`}>
    {unanswered ? (
      <X className="w-4 h-4 text-red-500 flex-shrink-0" />
    ) : (
      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
    )}
    <span className="text-sm text-gray-700">{text}</span>
  </div>
);

const PainPoint = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center space-x-3 p-3 bg-red-50 border border-red-200 rounded-lg">
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium text-red-700">{text}</span>
  </div>
);

const BenefitPoint = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center space-x-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium text-emerald-700">{text}</span>
  </div>
);

const NewProblemSolutionSection = () => {
  const { language } = useLanguage();
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <section id="problem-solution" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50/30 via-transparent to-emerald-50/30 -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        
        {/* Header avec nouveau titre beauté */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {language === 'fr' ? 
              'Vos clientes méritent la même attention en ligne qu\'en boutique physique' : 
              'Your customers deserve the same attention online as in physical stores'}
          </h2>
          <p className="text-xl text-gray-600">
            {language === 'fr' ? 
              'Découvrez comment ChatSeller vous permet de leur offrir cette expérience premium' :
              'Discover how ChatSeller allows you to offer them this premium experience'}
          </p>
        </div>

        {/* Comparaison Avant/Après style chatseller.app */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* AVANT - Problème (Left Column) */}
          <div className="relative">
            <BeforeCard />
          </div>
          
          {/* APRÈS - Solution (Right Column) */}
          <div className="relative">
            <AfterCard isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
          </div>
        </div>

        {/* Stats comparatifs - PLEINE LARGEUR */}
        <div className="mt-20">
          <ComparisonStats />
        </div>
      </div>
      
      {/* ChatModal */}
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </section>
  );
};

// Carte "AVANT" - Problème
const BeforeCard = () => {
  const { language } = useLanguage();
  
  return (
    <div className="relative">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-red-100 border border-red-200 rounded-full text-sm font-semibold text-red-700 mb-4">
          <X className="w-4 h-4 mr-2" />
          {language === 'fr' ? 'Avant ChatSeller' : 'Before ChatSeller'}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {language === 'fr' ? 'Votre boutique en ligne actuelle' : 'Your current online store'}
        </h3>
        <p className="text-gray-600">
          {language === 'fr' ? 'Vos clients sont seuls face à leurs questions et doutes' : 'Your customers are alone with their questions and doubts'}
        </p>
      </div>

      {/* Interface e-commerce problématique */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        
        {/* Browser bar */}
        <div className="bg-gray-100 px-4 py-3 border-b flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600">
            beaute-premium.com
          </div>
        </div>

        {/* Page produit vide avec vraie image */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-xl aspect-square flex items-center justify-center p-4">
              <img 
                src="/images/products/serum.png" 
                alt="Sérum Anti-Rides Premium" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold">{language === 'fr' ? 'Sérum Anti-Rides Premium' : 'Premium Anti-Wrinkle Serum '}</h4>
              <div className="text-2xl font-bold text-purple-600">89€</div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• {language === 'fr' ? 'Formule avancée' : 'Advanced formula'}</p>
                <p>• {language === 'fr' ? 'Résultats visibles' : 'Visible results'}</p>
                <p>• {language === 'fr' ? 'Ingrédients premium' : 'Premium Ingredients'}</p>
              </div>
              
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold">
                {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
              </button>
            </div>
          </div>
          
          {/* Questions clients plus naturelles */}
          <div className="mt-6 space-y-3">
            <QuestionBubble text="J'ai la peau sensible, est-il adapté ?" unanswered />
            <QuestionBubble text="Quand vais-je voir les premiers résultats ?" unanswered />
            <QuestionBubble text="Puis-je l'utiliser avec mes autres soins ?" unanswered />
          </div>
        </div>
        
        {/* Résultat problématique */}
        <div className="bg-red-50 border-t border-red-200 p-4 text-center">
          <div className="flex items-center justify-center text-red-700 font-semibold">
            <TrendingDown className="w-5 h-5 mr-2" />
            <span>
              {language === 'fr' ? '73% partent sans acheter' : '73% leave without buying'}
            </span>
          </div>
        </div>
      </div>

      {/* Points de douleur */}
      <div className="mt-6 space-y-3">
        <PainPoint 
          icon="😕"
          text={language === 'fr' ? 'Clients perdus et frustrés' : 'Lost and frustrated customers'}
        />
        <PainPoint 
          icon="📉"
          text={language === 'fr' ? 'Conversions faibles (2-3%)' : 'Low conversions (2-3%)'}
        />
        <PainPoint 
          icon="💸"
          text={language === 'fr' ? 'Paniers abandonnés quotidiennement' : 'Daily abandoned carts'}
        />
      </div>
    </div>
  );
};

// Carte "APRÈS" - Solution
const AfterCard = ({ isChatOpen, setIsChatOpen }: { isChatOpen: boolean; setIsChatOpen: (value: boolean) => void; }) => {
  const { language } = useLanguage();
  
  return (
    <div className="relative">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full text-sm font-semibold text-emerald-700 mb-4">
          <Check className="w-4 h-4 mr-2" />
          {language === 'fr' ? 'Avec ChatSeller' : 'With ChatSeller'}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {language === 'fr' ? 'Votre boutique en ligne améliorée' : 'Your enhanced online store'}
        </h3>
        <p className="text-gray-600">
          {language === 'fr' ? 'Votre Conseillère Beauté IA répond, guide et rassure vos clients' : 'Your Beauty AI Advisor  answers, guides and reassures your customers'}
        </p>
      </div>

      {/* Interface avec ChatSeller */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        
        {/* Browser bar */}
        <div className="bg-gray-100 px-4 py-3 border-b flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600">
            beaute-premium.com
          </div>
        </div>

        {/* Page produit avec ChatSeller et vraie image */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl aspect-square flex items-center justify-center p-4">
              <img 
                src="/images/products/serum.png" 
                alt="Sérum Anti-Rides Premium" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold">{language === 'fr' ? 'Sérum Anti-Rides Premium' : 'Premium Anti-Wrinkle Serum '}</h4>
              <div className="text-2xl font-bold text-purple-600">89€</div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• {language === 'fr' ? 'Formule avancée' : 'Advanced formula'}</p>
                <p>• {language === 'fr' ? 'Résultats visibles' : 'Visible results'}</p>
                <p>• {language === 'fr' ? 'Ingrédients premium' : 'Premium Ingredients'}</p>
              </div>
              
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold">
                {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
              </button>
              
              <button 
                className="w-full bg-rose-500 text-white py-2 rounded-lg font-medium text-sm flex items-center justify-center hover:bg-rose-600 transition-colors duration-200"
                onClick={() => setIsChatOpen(true)}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                {language === 'fr' ? 'Parler à la Conseillère Beauté' : 'Talk to the beauty Advisor'}
              </button>
            </div>
          </div>
          
          {/* Réponses de l'IA alignées avec les questions */}
          <div className="mt-6 space-y-3">
            <AnswerBubble text={language === 'fr' ? 
              'Oui, formulé sans parfum, testé dermatologiquement pour peaux sensibles' : 
              'Yes, fragrance-free formula, dermatologically tested for sensitive skin'} />
            <AnswerBubble text={language === 'fr' ? 
              'Premiers effets visibles dès 2 semaines, résultats optimaux en 6-8 semaines' : 
              'First visible effects from 2 weeks, optimal results in 6-8 weeks'} />
            <AnswerBubble text={language === 'fr' ? 
              'Compatible avec tous soins, appliquer le soir après nettoyage' : 
              'Compatible with all treatments, apply in the evening after cleansing'} />
          </div>
        </div>
        
        {/* Résultat positif */}
        <div className="bg-emerald-50 border-t border-emerald-200 p-4 text-center">
          <div className="flex items-center justify-center text-emerald-700 font-semibold">
            <TrendingUp className="w-5 h-5 mr-2" />
            <span>
              {language === 'fr' ? '+267% de conversions moyennes' : '+267% average conversions'}
            </span>
          </div>
        </div>
      </div>

      {/* Bénéfices */}
      <div className="mt-6 space-y-3">
        <BenefitPoint 
          icon="💬"
          text={language === 'fr' ? 'Conseils experts instantanés' : 'Instant expert advice'}
        />
        <BenefitPoint 
          icon="📈"
          text={language === 'fr' ? 'Conversions 4x supérieures' : '4x higher conversions'}
        />
        <BenefitPoint 
          icon="💰"
          text={language === 'fr' ? 'ROI visible immédiatement' : 'Immediate visible ROI'}
        />
      </div>
    </div>
  );
};

// Stats comparatifs - PLEINE LARGEUR
const ComparisonStats = () => {
  const { language } = useLanguage();
  
  return (
    <div className="w-full">
      {/* Titre centré */}
      <div className="text-center mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {language === 'fr' ? 'L\'impact de ChatSeller sur les performances de votre marque' : 'ChatSeller impact on your brand performance'}
        </h3>
      </div>
      
      {/* Stats en 3 colonnes sur toute la largeur */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <StatComparisonFullWidth 
          label={language === 'fr' ? 'Taux de conversion' : 'Conversion rate'}
          before="2.3%"
          after="7.1%"
          improvement="+267%"
          color="emerald"
        />
        
        <StatComparisonFullWidth 
          label={language === 'fr' ? 'Panier moyen' : 'Average cart'}
          before="67€"
          after="98€"
          improvement="+46%"
          color="blue"
        />
        
        <StatComparisonFullWidth 
          label={language === 'fr' ? 'Questions répondues' : 'Questions answered'}
          before="12%"
          after="94%"
          improvement="+683%"
          color="purple"
        />
      </div>
      
      {/* ROI section - Pleine largeur */}
      <div className="text-center p-8 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border border-emerald-200">
        <div className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
          {language === 'fr' ? 'Retour sur investissement moyen' : 'Average return on investment'}
        </div>
        <div className="text-4xl md:text-6xl font-bold text-emerald-600 mb-2">387%</div>
        <div className="text-sm md:text-base text-gray-600">
          {language === 'fr' ? 'ChatSeller se rembourse en 3 jours' : 'ChatSeller pays for itself in 3 days'}
        </div>
      </div>
    </div>
  );
};

// Composant stat individual pour pleine largeur
const StatComparisonFullWidth = ({ 
  label, 
  before, 
  after, 
  improvement, 
  color 
}: { 
  label: string; 
  before: string; 
  after: string; 
  improvement: string;
  color: 'emerald' | 'blue' | 'purple';
}) => {
  const colorClasses = {
    emerald: 'text-emerald-600 bg-emerald-100 border-emerald-200',
    blue: 'text-blue-600 bg-blue-100 border-blue-200',
    purple: 'text-purple-600 bg-purple-100 border-purple-200'
  };

  const iconColorClasses = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500', 
    purple: 'bg-purple-500'
  };

  return (
    <div className="text-center p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
      {/* Icône */}
      <div className={`w-16 h-16 ${iconColorClasses[color]} rounded-full flex items-center justify-center mx-auto mb-6`}>
        <div className="w-8 h-8 bg-white rounded-full"></div>
      </div>
      
      <div className="text-sm md:text-base font-medium text-gray-600 mb-6">{label}</div>
      
      <div className="flex items-center justify-center space-x-4 mb-6">
        <div className="text-xl md:text-2xl font-bold text-gray-400">{before}</div>
        <div className="text-gray-400 text-lg">→</div>
        <div className={`text-3xl md:text-4xl font-bold ${colorClasses[color].split(' ')[0]}`}>{after}</div>
      </div>
      
      <div className={`inline-block px-4 py-2 rounded-full text-sm md:text-base font-bold ${colorClasses[color]}`}>
        {improvement}
      </div>
    </div>
  );
};

export default NewProblemSolutionSection;