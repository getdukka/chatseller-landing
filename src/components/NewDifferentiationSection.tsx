// src/components/NewDifferentiationSection.tsx
import React from 'react';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const getRows = (t: (key: any) => string) => [
  {
    classic: t('differentiationRow1Classic'),
    chatseller: t('differentiationRow1ChatSeller')
  },
  {
    classic: t('differentiationRow2Classic'),
    chatseller: t('differentiationRow2ChatSeller')
  },
  {
    classic: t('differentiationRow3Classic'),
    chatseller: t('differentiationRow3ChatSeller')
  },
  {
    classic: t('differentiationRow4Classic'),
    chatseller: t('differentiationRow4ChatSeller')
  }
];

const NewDifferentiationSection = () => {
  const { t, language } = useLanguage();
  const rows = getRows(t);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-rose-100/30 rounded-full blur-3xl -z-10" />

      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 text-xs sm:text-sm font-semibold text-purple-700">
            <Sparkles className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Une différence fondamentale' : 'A fundamental difference'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('differentiationTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {t('differentiationSubtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Comparison Table */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-2">
              <div className="px-6 py-5 bg-gray-50 border-b border-r border-gray-200">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {t('differentiationCol1Header')}
                </div>
              </div>
              <div className="px-6 py-5 bg-gradient-to-r from-rose-600 to-purple-700 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">C</div>
                  <div className="text-sm font-semibold text-white uppercase tracking-wider">
                    {t('differentiationCol2Header')}
                  </div>
                </div>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 ${index < rows.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                {/* Classic chatbot cell */}
                <div className="px-6 py-5 border-r border-gray-100 flex items-start gap-3 bg-white group hover:bg-gray-50/50 transition-colors">
                  <div className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 leading-relaxed">{row.classic}</span>
                </div>

                {/* ChatSeller cell */}
                <div className="px-6 py-5 flex items-start gap-3 bg-gradient-to-r from-rose-50/40 to-purple-50/40 group hover:from-rose-50/70 hover:to-purple-50/70 transition-colors">
                  <div className="flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">{row.chatseller}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-5">
              {language === 'fr'
                ? 'Découvrez la différence par vous-même'
                : 'Discover the difference for yourself'}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-rose-600 to-purple-700 hover:from-rose-700 hover:to-purple-800 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <a href="https://dashboard.chatseller.app/register">
                {t('differentiationCTA')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewDifferentiationSection;
