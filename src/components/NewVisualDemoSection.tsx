// src/components/NewVisualDemoSection.tsx
import React, { useState } from 'react';
import { MessageCircle, ShoppingCart, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const getSteps = (t: (key: any) => string, language: string) => [
  {
    number: '01',
    icon: MessageCircle,
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-100',
    title: t('visualDemoStep1Title'),
    desc: t('visualDemoStep1Desc'),
    bubble: {
      side: 'user' as const,
      text: language === 'fr'
        ? 'Est-ce que ce sérum convient aux peaux sensibles ?'
        : 'Does this serum work for sensitive skin?'
    }
  },
  {
    number: '02',
    icon: Sparkles,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-100',
    title: t('visualDemoStep2Title'),
    desc: t('visualDemoStep2Desc'),
    bubble: {
      side: 'ai' as const,
      text: language === 'fr'
        ? 'Oui ! Pour les peaux sensibles, je recommande notre Sérum Éclat au Niacinamide — formule douce, sans alcool ni parfum.'
        : 'Yes! For sensitive skin I recommend our Niacinamide Glow Serum — gentle formula, alcohol & fragrance free.'
    }
  },
  {
    number: '03',
    icon: ShoppingCart,
    iconColor: 'text-pink-500',
    iconBg: 'bg-pink-100',
    title: t('visualDemoStep3Title'),
    desc: t('visualDemoStep3Desc'),
    productCard: {
      name: language === 'fr' ? 'Sérum Éclat Niacinamide' : 'Niacinamide Glow Serum',
      price: language === 'fr' ? '29 €' : '$32',
      badge: language === 'fr' ? 'Recommandé pour vous' : 'Recommended for you'
    }
  },
  {
    number: '04',
    icon: CheckCircle,
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-100',
    title: t('visualDemoStep4Title'),
    desc: t('visualDemoStep4Desc'),
    bubble: {
      side: 'ai' as const,
      text: language === 'fr'
        ? '🎉 Super ! Votre commande est confirmée. Merci de votre confiance !'
        : '🎉 Great! Your order is confirmed. Thank you!'
    }
  }
];

const NewVisualDemoSection = () => {
  const { t, language } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const flowSteps = getSteps(t, language);
  const active = flowSteps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-rose-100/40 rounded-full blur-3xl -z-10" />

      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 text-xs sm:text-sm font-semibold text-rose-700">
            <Sparkles className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Voir en action' : 'See it in action'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('visualDemoTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {t('visualDemoSubtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Step tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {flowSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    index === activeStep
                      ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white border-transparent shadow-lg scale-105'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-rose-300 hover:text-rose-600'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    index === activeStep ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="hidden sm:inline">{step.title}</span>
                  <StepIcon className={`w-4 h-4 sm:hidden ${index === activeStep ? 'text-white' : step.iconColor}`} />
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: step info */}
            <div className="order-2 md:order-1 space-y-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${active.iconBg}`}>
                <ActiveIcon className={`w-8 h-8 ${active.iconColor}`} />
              </div>
              <div>
                <div className="text-5xl font-black text-gray-100 mb-2 leading-none">{active.number}</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{active.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{active.desc}</p>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-rose-300 hover:text-rose-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  ← {language === 'fr' ? 'Précédent' : 'Previous'}
                </button>
                {activeStep < flowSteps.length - 1 ? (
                  <button
                    onClick={() => setActiveStep(prev => Math.min(flowSteps.length - 1, prev + 1))}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-medium hover:from-rose-600 hover:to-pink-600 transition-all"
                  >
                    {language === 'fr' ? 'Suivant' : 'Next'} →
                  </button>
                ) : (
                  <Button asChild className="rounded-full bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-sm font-semibold">
                    <a href="https://dashboard.chatseller.app/register">
                      {t('visualDemoCTA')} <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Right: chat preview */}
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-w-sm mx-auto">
                <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 px-5 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center font-bold text-white text-sm">A</div>
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {language === 'fr' ? 'Aïcha · Conseillère IA' : 'Aïcha · AI Advisor'}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-rose-100">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                      {language === 'fr' ? 'En ligne' : 'Online'}
                    </div>
                  </div>
                </div>

                <div className="p-5 min-h-[180px] space-y-4 bg-gradient-to-b from-rose-50/20 to-white">
                  {active.bubble && (
                    <div className={`flex ${active.bubble.side === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {active.bubble.side === 'ai' && (
                        <div className="w-7 h-7 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2 mt-1 flex-shrink-0">A</div>
                      )}
                      <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        active.bubble.side === 'user'
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-white border border-rose-100 shadow-sm text-gray-800'
                      }`}>
                        {active.bubble.text}
                      </div>
                    </div>
                  )}

                  {active.productCard && (
                    <div className="flex justify-start">
                      <div className="w-7 h-7 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2 mt-1 flex-shrink-0">A</div>
                      <div className="bg-white border border-rose-100 shadow-sm rounded-2xl overflow-hidden max-w-[80%]">
                        <div className="h-20 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center text-3xl">✨</div>
                        <div className="p-3">
                          <div className="text-xs font-semibold text-rose-600 mb-1">{active.productCard.badge}</div>
                          <div className="text-sm font-bold text-gray-800">{active.productCard.name}</div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-base font-black text-rose-600">{active.productCard.price}</span>
                            <button className="flex items-center gap-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                              <ShoppingCart className="w-3 h-3" />
                              {language === 'fr' ? 'Acheter' : 'Buy'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-5 pb-4 pt-1">
                  <div className="flex gap-1">
                    {flowSteps.map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                          i <= activeStep ? 'bg-gradient-to-r from-rose-500 to-pink-500' : 'bg-gray-100'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewVisualDemoSection;
