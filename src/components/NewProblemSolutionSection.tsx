// src/components/NewProblemSolutionSection.tsx
import React, { useState } from 'react';
import { X, Check, TrendingDown, TrendingUp, MessageCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ChatModal from './ChatModal';

/* ───── Sub-components ───── */

const QuestionBubble = ({ text, unanswered }: { text: string; unanswered?: boolean }) => (
  <div
    className={`flex items-start gap-2.5 px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
      unanswered
        ? 'bg-red-50/80 border border-red-100 text-red-700'
        : 'bg-emerald-50/80 border border-emerald-100 text-emerald-700'
    }`}
  >
    {unanswered ? (
      <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
    ) : (
      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
    )}
    <span className="font-medium">{text}</span>
  </div>
);

const PainPoint = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-3 px-3 py-2.5 bg-red-50/60 rounded-xl">
    <span className="text-base">{icon}</span>
    <span className="text-sm font-medium text-red-700">{text}</span>
  </div>
);

const BenefitPoint = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-3 px-3 py-2.5 bg-emerald-50/60 rounded-xl">
    <span className="text-base">{icon}</span>
    <span className="text-sm font-medium text-emerald-700">{text}</span>
  </div>
);

/* ───── Browser chrome ───── */
const BrowserBar = () => (
  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 bg-gray-50/80">
    <div className="flex gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
    </div>
    <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-100">
      nywele-cosmetics.com
    </div>
  </div>
);

/* ───── Product page content (shared) ───── */
const ProductPage = ({
  language,
  withMia,
  onMiaClick,
}: {
  language: string;
  withMia: boolean;
  onMiaClick?: () => void;
}) => (
  <div className="p-4 sm:p-5">
    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-4">
      {/* Product image */}
      <div className={`rounded-xl aspect-square flex items-center justify-center p-2 ${withMia ? 'bg-gradient-to-br from-rose-50 to-pink-50' : 'bg-gray-100'}`}>
        <img
          src="/images/products/masque-ricin-hibiscus.png"
          alt="Masque Fortifiant Ricin & Hibiscus"
          className="w-full h-full object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/products/serum.png';
          }}
        />
      </div>

      {/* Product details */}
      <div className="flex flex-col min-w-0">
        <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-snug mb-1">
          {language === 'fr' ? 'Masque Fortifiant Ricin & Hibiscus' : 'Castor & Hibiscus Strengthening Mask'}
        </h4>
        <p className="text-lg sm:text-xl font-bold text-rose-600 mb-2">23€</p>
        <div className="hidden sm:block space-y-1 text-xs text-gray-500 mb-3">
          <p>• {language === 'fr' ? '100% naturel, cheveux fragilisés' : '100% natural, damaged hair'}</p>
          <p>• {language === 'fr' ? 'Stimule la repousse' : 'Stimulates regrowth'}</p>
          <p>• {language === 'fr' ? 'Ricin + Hibiscus' : 'Castor Oil + Hibiscus'}</p>
        </div>

        {/* CTA buttons */}
        <div className="mt-auto space-y-2">
          <button className="w-full bg-gray-900 text-white py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold">
            {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
          </button>

          {withMia && (
            <button
              onClick={onMiaClick}
              className="group w-full py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #ea4242, #8c3dda)' }}
            >
              {/* Subtle shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <MessageCircle className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">{language === 'fr' ? 'Parler à Mia' : 'Talk to Mia'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   Main Section
   ═══════════════════════════════════════════ */

const NewProblemSolutionSection = () => {
  const { language } = useLanguage();
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <section id="solution" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-50/30 via-white to-purple-50/20" />

      <div className="relative z-10 container px-5 md:px-12 mx-auto">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{
              background: 'rgba(140,61,218,0.08)',
              color: '#8c3dda',
              border: '1px solid rgba(140,61,218,0.2)',
            }}
          >
            {language === 'fr' ? 'La solution' : 'The solution'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            {language === 'fr'
              ? 'Mia est la vendeuse qui manquait à votre boutique en ligne'
              : 'Mia is the salesperson your online store has been missing'}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Quand vos clients ont une question, un doute, une inquiétude, Mia est là pour y répondre et les guider jusqu\'à l\'achat.'
              : 'When your customers have a question, a doubt, a concern, Mia is there to answer and guide them to purchase.'}
          </p>
        </div>

        {/* ── Avant / Après ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">

          {/* ═══ SANS MIA ═══ */}
          <div className="flex flex-col">
            {/* Tag + Title centered */}
            <div className="text-center mb-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 mb-3">
                <X className="w-3.5 h-3.5" />
                {language === 'fr' ? 'Votre boutique sans Mia' : 'Your store without Mia'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                {language === 'fr' ? 'Vos clients sont seuls' : 'Your customers are alone'}
              </h3>
              <p className="text-sm text-gray-500">
                {language === 'fr' ? 'Pas de réponse. Pas de conseil. Ils partent.' : 'No answer. No advice. They leave.'}
              </p>
            </div>

            {/* Store mockup */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white flex-1">
              <BrowserBar />
              <ProductPage language={language} withMia={false} />

              {/* Unanswered questions */}
              <div className="px-4 sm:px-5 pb-4 space-y-2">
                <QuestionBubble
                  text={language === 'fr' ? 'Ça marche pour la perte de cheveux aux tempes ?' : 'Does it work for temple hair loss?'}
                  unanswered
                />
                <QuestionBubble
                  text={language === 'fr' ? 'C\'est réversible si c\'est dû aux tresses ?' : 'Is it reversible if caused by braids?'}
                  unanswered
                />
                <QuestionBubble
                  text={language === 'fr' ? 'Combien de temps pour voir la repousse ?' : 'How long to see regrowth?'}
                  unanswered
                />
              </div>

              {/* Bottom stat */}
              <div className="border-t border-red-100 bg-red-50/70 px-4 py-3 text-center">
                <div className="flex items-center justify-center gap-2 text-red-600 font-bold text-sm">
                  <TrendingDown className="w-4 h-4" />
                  <span>{language === 'fr' ? '70% d\'abandon de panier' : '70% cart abandonment'}</span>
                </div>
                <p className="text-[11px] text-red-500 mt-0.5">
                  {language === 'fr' ? '(moyenne e-commerce)' : '(e-commerce average)'}
                </p>
              </div>
            </div>

            {/* Pain points */}
            <div className="mt-4 space-y-2">
              <PainPoint
                icon="😕"
                text={language === 'fr' ? 'Clients perdus et frustrés' : 'Lost and frustrated customers'}
              />
              <PainPoint
                icon="📉"
                text={language === 'fr' ? 'Ventes perdues par manque de réactivité' : 'Sales lost due to slow response'}
              />
              <PainPoint
                icon="💸"
                text={language === 'fr' ? 'Paniers abandonnés par simple hésitation' : 'Carts abandoned due to hesitation'}
              />
            </div>
          </div>

          {/* ═══ AVEC MIA ═══ */}
          <div className="flex flex-col">
            {/* Tag + Title centered */}
            <div className="text-center mb-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mb-3">
                <Check className="w-3.5 h-3.5" />
                {language === 'fr' ? 'Votre boutique avec Mia' : 'Your store with Mia'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                {language === 'fr' ? 'Chaque client est accueilli et guidé' : 'Every customer is welcomed and guided'}
              </h3>
              <p className="text-sm text-gray-500">
                {language === 'fr' ? 'Mia répond, conseille et guide jusqu\'à l\'achat' : 'Mia answers, advises and guides to purchase'}
              </p>
            </div>

            {/* Store mockup — with Mia */}
            <div
              className="rounded-2xl overflow-hidden border shadow-lg bg-white flex-1"
              style={{ borderColor: 'rgba(140,61,218,0.25)', boxShadow: '0 10px 40px -10px rgba(140,61,218,0.12), 0 4px 6px -4px rgba(0,0,0,0.05)' }}
            >
              <BrowserBar />
              <ProductPage language={language} withMia onMiaClick={() => setIsChatOpen(true)} />

              {/* Mia's answers */}
              <div className="px-4 sm:px-5 pb-4 space-y-2">
                <QuestionBubble
                  text={language === 'fr'
                    ? 'Oui, le ricin stimule la circulation au niveau des follicules'
                    : 'Yes, castor oil stimulates circulation at the follicle level'}
                />
                <QuestionBubble
                  text={language === 'fr'
                    ? 'Oui, c\'est réversible, avec un soin régulier'
                    : 'Yes, it\'s reversible with regular care'}
                />
                <QuestionBubble
                  text={language === 'fr'
                    ? 'Vous verrez les premiers signes de repousse dès 6 à 8 semaines'
                    : 'You\'ll see the first signs of regrowth from 6 to 8 weeks'}
                />
              </div>

              {/* Bottom stat */}
              <div
                className="border-t px-4 py-3 text-center"
                style={{ borderColor: 'rgba(16,185,129,0.15)', background: 'rgba(16,185,129,0.04)' }}
              >
                <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>{language === 'fr' ? 'Réponse instantanée 24h/24' : 'Instant response 24/7'}</span>
                </div>
                <p className="text-[11px] text-emerald-500 mt-0.5">
                  {language === 'fr' ? 'Vos clients ne sont plus jamais seuls' : 'Your customers are never alone'}
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-4 space-y-2">
              <BenefitPoint
                icon="💬"
                text={language === 'fr' ? 'Mia accueille chaque client comme en boutique' : 'Mia welcomes every customer like in-store'}
              />
              <BenefitPoint
                icon="🎯"
                text={language === 'fr' ? 'Plus d\'hésitation : Mia lève les doutes au bon moment' : 'No more hesitation: Mia removes doubts at the right time'}
              />
              <BenefitPoint
                icon="✨"
                text={language === 'fr' ? 'Paniers validés, commandes confirmées — sans effort' : 'Carts completed, orders confirmed — effortlessly'}
              />
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="mt-14 md:mt-20 max-w-5xl mx-auto grid sm:grid-cols-3 gap-4">
          {[
            {
              icon: <TrendingUp className="w-5 h-5" style={{ color: '#ea4242' }} />,
              value: '+150%',
              label: language === 'fr' ? 'de ventes en moyenne' : 'average sales increase',
            },
            {
              icon: <MessageCircle className="w-5 h-5" style={{ color: '#8c3dda' }} />,
              value: '< 2s',
              label: language === 'fr' ? 'temps de réponse' : 'response time',
            },
            {
              icon: <Sparkles className="w-5 h-5" style={{ color: '#f59e0b' }} />,
              value: '24/7',
              label: language === 'fr' ? 'disponible, même la nuit' : 'available, even at night',
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
              <div
                className="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(234,66,66,0.06)' }}
              >
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-black text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </section>
  );
};

export default NewProblemSolutionSection;
