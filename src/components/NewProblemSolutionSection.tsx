// src/components/NewProblemSolutionSection.tsx
import React, { useState } from 'react';
import { X, Check, TrendingDown, MessageSquare, Sparkles, MessageCircle } from 'lucide-react';
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
              'Mia est la Vendeuse qui manque à votre boutique en ligne' :
              'Mia is the Salesperson your online store has been missing'}
          </h2>
          <p className="text-xl text-gray-600">
            {language === 'fr' ?
              'Lorsque vos clients ont une question, un doute, une inquiétude, Mia est là pour y répondre et les guider jusqu\'à l\'achat.' :
              'When your customers have a question, a doubt, a concern, Mia is there to answer and guide them through to purchase.'}
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
          {language === 'fr' ? 'Votre boutique sans Mia' : 'Your store without Mia'}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {language === 'fr' ? 'Vos clients sont seuls' : 'Your customers are alone'}
        </h3>
        <p className="text-gray-600">
          {language === 'fr' ? 'Pas de réponse. Pas de conseil. Ils partent.' : 'No answer. No advice. They leave.'}
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
            nywele-cosmetics.com
          </div>
        </div>

        {/* Page produit vide avec vraie image */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-xl aspect-square flex items-center justify-center p-4">
              <img
                src="/images/products/masque-ricin-hibiscus.png"
                alt="Masque Fortifiant Ricin & Hibiscus"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/products/serum.png';
                }}
              />
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold">{language === 'fr' ? 'Masque Fortifiant Ricin & Hibiscus' : 'Castor & Hibiscus Strengthening Mask'}</h4>
              <div className="text-2xl font-bold text-rose-600">23€</div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• {language === 'fr' ? '100% naturel pour cheveux fragilisés' : '100% natural for damaged hair'}</p>
                <p>• {language === 'fr' ? 'Stimule la repousse des cheveux' : 'Stimulates hair regrowth'}</p>
                <p>• {language === 'fr' ? 'Ricin + Hibiscus' : 'Castor Oil + Hibiscus'}</p>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold">
                {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
              </button>
            </div>
          </div>

          {/* Questions clients réalistes cheveux */}
          <div className="mt-6 space-y-3">
            <QuestionBubble text={language === 'fr' ? 'Ça marche pour la perte de cheveux aux tempes ?' : 'Does it work for temple hair loss?'} unanswered />
            <QuestionBubble text={language === 'fr' ? 'C\'est réversible si c\'est dû aux tresses ?' : 'Is it reversible if caused by braids?'} unanswered />
            <QuestionBubble text={language === 'fr' ? 'Combien de temps pour voir la repousse ?' : 'How long to see regrowth?'} unanswered />
          </div>
        </div>

        {/* Résultat problématique - Stat véridique */}
        <div className="bg-red-50 border-t border-red-200 p-4 text-center">
          <div className="flex items-center justify-center text-red-700 font-semibold">
            <TrendingDown className="w-5 h-5 mr-2" />
            <span>
              {language === 'fr' ? '70% d\'abandon de panier' : '70% cart abandonment'}
            </span>
          </div>
          <p className="text-xs text-red-600 mt-1">{language === 'fr' ? '(moyenne e-commerce)' : '(e-commerce average)'}</p>
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
          text={language === 'fr' ? 'Ventes perdues par manque de réactivité' : 'Sales lost due to slow response times'}
        />
        <PainPoint 
          icon="💸"
          text={language === 'fr' ? 'Paniers abandonnés par simple hésitation' : 'Carts abandoned due to hesitation'}
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
      {/* Animation CSS pour le bouton "Parler à la Vendeuse" */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes seller-shake {
            0%, 100% { transform: translateY(0) scale(1); }
            10%, 30%, 50%, 70%, 90% { transform: translateY(-2px) scale(1.02); }
            20%, 40%, 60%, 80% { transform: translateY(2px) scale(1.02); }
          }
        `
      }} />

      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full text-sm font-semibold text-emerald-700 mb-4">
          <Check className="w-4 h-4 mr-2" />
          {language === 'fr' ? 'Votre boutique avec Mia' : 'Your store with Mia'}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {language === 'fr' ? 'Chaque client accueilli et guidé' : 'Every customer welcomed and guided'}
        </h3>
        <p className="text-gray-600">
          {language === 'fr' ? 'Mia répond, conseille et guide vos clients vers l\'achat' : 'Mia answers, advises and guides your customers to purchase'}
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
            nywele-cosmetics.com
          </div>
        </div>

        {/* Page produit avec ChatSeller et vraie image */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl aspect-square flex items-center justify-center p-4">
              <img
                src="/images/products/masque-ricin-hibiscus.png"
                alt="Masque Fortifiant Ricin & Hibiscus"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/products/serum.png';
                }}
              />
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold">{language === 'fr' ? 'Masque Fortifiant Ricin & Hibiscus' : 'Castor & Hibiscus Strengthening Mask'}</h4>
              <div className="text-2xl font-bold text-rose-600">23€</div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• {language === 'fr' ? '100% naturel pour cheveux fragilisés' : '100% natural for damaged hair'}</p>
                <p>• {language === 'fr' ? 'Stimule la repousse des cheveux' : 'Stimulates hair regrowth'}</p>
                <p>• {language === 'fr' ? 'Ricin + Hibiscus' : 'Castor Oil + Hibiscus'}</p>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold">
                {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
              </button>

              <button
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-lg font-medium text-sm flex items-center justify-center hover:from-rose-600 hover:to-pink-600 transition-all duration-200 shadow-md relative animate-pulse hover:animate-none"
                onClick={() => setIsChatOpen(true)}
                style={{
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, seller-shake 3s ease-in-out infinite'
                }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {language === 'fr' ? 'Parler à Mia' : 'Talk to Mia'}
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-rose-400 to-pink-400 blur-md opacity-50 animate-pulse -z-10"></div>
              </button>
            </div>
          </div>

          {/* Réponses de l'IA alignées avec les questions cheveux */}
          <div className="mt-6 space-y-3">
            <AnswerBubble text={language === 'fr' ?
              'Oui, le ricin stimule la circulation au niveau des follicules' :
              'Yes, Castor oil stimulates circulation at the follicle level'} />
            <AnswerBubble text={language === 'fr' ?
              'Oui, c\'est réversible, avec un soin régulier' :
              'Yes, it\'s reversible, with regular care'} />
            <AnswerBubble text={language === 'fr' ?
              'Vous verrez les premiers signes de repousse dès 6 à 8 semaines' :
              'You\'ll see the first signs of regrowth from 6 to 8 weeks'} />
          </div>
        </div>

        {/* Résultat positif - Bénéfice réaliste */}
        <div className="bg-emerald-50 border-t border-emerald-200 p-4 text-center">
          <div className="flex items-center justify-center text-emerald-700 font-semibold">
            <Sparkles className="w-5 h-5 mr-2" />
            <span>
              {language === 'fr' ? 'Réponse instantanée 24h/24' : 'Instant response 24/7'}
            </span>
          </div>
          <p className="text-xs text-emerald-600 mt-1">{language === 'fr' ? 'Vos clients ne sont plus jamais seuls' : 'Your customers are never alone'}</p>
        </div>
      </div>

      {/* Bénéfices réalistes */}
      <div className="mt-6 space-y-3">
        <BenefitPoint
          icon="💬"
          text={language === 'fr' ? 'Mia accueille chaque client comme en boutique physique' : 'Mia welcomes every customer like in a physical store'}
        />
        <BenefitPoint
          icon="🎯"
          text={language === 'fr' ? 'Plus d\'hésitation : Mia lève les doutes au bon moment' : 'No more hesitation: Mia removes doubts at the right moment'}
        />
        <BenefitPoint
          icon="✨"
          text={language === 'fr' ? 'Paniers validés, commandes confirmées — sans votre intervention' : 'Carts completed, orders confirmed — without your involvement'}
        />
      </div>
    </div>
  );
};

export default NewProblemSolutionSection;