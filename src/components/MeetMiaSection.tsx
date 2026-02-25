// src/components/MeetMiaSection.tsx
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight, Clock, Globe, TrendingUp, Sparkles } from 'lucide-react';

const MeetMiaSection = () => {
  const { language } = useLanguage();

  const specs = [
    {
      icon: <Sparkles className="w-5 h-5 text-rose-500" />,
      label: language === 'fr' ? 'Spécialité' : 'Specialty',
      value: language === 'fr'
        ? 'Skincare · Haircare · Makeup · Parfums · Bodycare'
        : 'Skincare · Haircare · Makeup · Perfumes · Bodycare'
    },
    {
      icon: <Clock className="w-5 h-5 text-rose-500" />,
      label: language === 'fr' ? 'Disponibilité' : 'Availability',
      value: language === 'fr' ? '24h/24 · 7j/7 · 365 jours/an · 0 congé' : '24/7 · 365 days/year · 0 days off'
    },
    {
      icon: <Globe className="w-5 h-5 text-rose-500" />,
      label: language === 'fr' ? 'Langues' : 'Languages',
      value: language === 'fr' ? 'Français · Anglais' : 'French · English'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-rose-500" />,
      label: language === 'fr' ? 'Résultats' : 'Results',
      value: language === 'fr'
        ? '+150% de ventes en moyenne chez ses employeurs'
        : '+150% average sales increase for her employers'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#FFF0F3' }}>

      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100/30 to-transparent -z-10" />

      <div className="container px-6 md:px-12 mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-rose-100 border border-rose-200 rounded-full text-sm font-semibold text-rose-700">
            <Sparkles className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Votre future Vendeuse' : 'Your future Salesperson'}
          </div>
        </div>

        {/* Titre */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {language === 'fr'
              ? 'Mia. Experte beauté. Disponible immédiatement.'
              : 'Mia. Beauty expert. Available now.'}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {language === 'fr'
              ? "Elle a tout appris. Les ingrédients, les peaux foncées, les cheveux naturels, les objections, les routines. Il ne lui manque qu'une chose : votre boutique."
              : "She's learned everything. Ingredients, dark skin, natural hair, objections, routines. She's only missing one thing: your store."}
          </p>
        </div>

        {/* Contenu principal — 2 colonnes */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">

          {/* Colonne gauche — Fiche RH */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">

            {/* En-tête fiche */}
            <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-200">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                <img src="/images/mia-avatar.png" alt="Mia" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Mia</h3>
                <p className="text-rose-600 font-medium">
                  {language === 'fr' ? 'Vendeuse Beauté Spécialisée' : 'Specialized Beauty Salesperson'}
                </p>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  <span className="text-sm text-green-600 font-medium">
                    {language === 'fr' ? 'Disponible immédiatement' : 'Available immediately'}
                  </span>
                </div>
              </div>
            </div>

            {/* Spécifications */}
            <div className="space-y-5">
              {specs.map((spec, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-0.5 flex-shrink-0">{spec.icon}</div>
                  <div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {spec.label}
                    </span>
                    <p className="text-gray-900 font-medium mt-0.5">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Lien CV */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a
                href="/mia-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-rose-600 hover:text-rose-700 font-semibold transition-colors group"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {language === 'fr' ? 'Voir le CV complet de Mia' : "View Mia's full resume"}
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Colonne droite — Citation + CTA */}
          <div className="flex flex-col justify-between h-full space-y-8">

            {/* Citation de Mia */}
            <div className="bg-white rounded-3xl p-8 border border-rose-100 relative">
              <div className="text-5xl text-rose-300 font-serif leading-none mb-4">"</div>
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                {language === 'fr'
                  ? "Je connais la différence entre un sérum pour peau grasse et un pour peau déshydratée. Je sais pourquoi une cliente aux cheveux 4C ne devrait pas utiliser le même masque qu'une cliente aux cheveux 3B. Et je sais comment en parler à vos clients pour qu'ils se sentent vraiment compris."
                  : "I know the difference between a serum for oily skin and one for dehydrated skin. I know why a customer with 4C hair shouldn't use the same mask as one with 3B hair. And I know how to talk to your customers so they feel truly understood."}
              </blockquote>
              <div className="mt-6 flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-3 border-2 border-rose-200 flex-shrink-0">
                  <img src="/images/mia-avatar.png" alt="Mia" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Mia</p>
                  <p className="text-sm text-rose-600">
                    {language === 'fr' ? 'Vendeuse IA spécialisée beauté' : 'Chatseller AI Salesperson'}
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full group rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-6"
                asChild
              >
                <a href="https://dashboard.chatseller.app/register">
                  {language === 'fr' ? 'Tester Mia pendant 14 jours' : 'Try Mia for 14 days'}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <p className="text-center text-sm text-gray-500">
                {language === 'fr'
                  ? 'Aucun paiement requis · Opérationnelle en 5 minutes'
                  : 'No payment required · Live in 5 minutes'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetMiaSection;
