// src/components/NewBusinessProofSection.tsx
import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, ShoppingBag, Clock, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface KPI {
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  gradient: string;
  value: string;
  label: string;
  desc: string;
}

const useKPIs = (t: (key: any) => string): KPI[] => [
  {
    icon: TrendingUp,
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-100',
    gradient: 'from-rose-500 to-pink-500',
    value: t('businessProofKpi1Value'),
    label: t('businessProofKpi1Label'),
    desc: t('businessProofKpi1Desc')
  },
  {
    icon: ShoppingBag,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    gradient: 'from-purple-500 to-violet-500',
    value: t('businessProofKpi2Value'),
    label: t('businessProofKpi2Label'),
    desc: t('businessProofKpi2Desc')
  },
  {
    icon: Clock,
    iconColor: 'text-pink-600',
    iconBg: 'bg-pink-100',
    gradient: 'from-pink-500 to-rose-500',
    value: t('businessProofKpi3Value'),
    label: t('businessProofKpi3Label'),
    desc: t('businessProofKpi3Desc')
  },
  {
    icon: Zap,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100',
    gradient: 'from-amber-400 to-orange-400',
    value: t('businessProofKpi4Value'),
    label: t('businessProofKpi4Label'),
    desc: t('businessProofKpi4Desc')
  }
];

const KPICard = ({ kpi, index }: { kpi: KPI; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const Icon = kpi.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${kpi.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className={`absolute inset-0 bg-gradient-to-br ${kpi.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
      <div className="relative z-10">
        <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${kpi.iconBg} mb-5 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${kpi.iconColor}`} />
        </div>
        <div className={`text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r ${kpi.gradient} bg-clip-text text-transparent mb-2 leading-none`}>
          {kpi.value}
        </div>
        <div className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{kpi.label}</div>
        <div className="text-sm sm:text-base text-gray-500">{kpi.desc}</div>
      </div>
    </div>
  );
};

const NewBusinessProofSection = () => {
  const { t, language } = useLanguage();
  const kpis = useKPIs(t);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-rose-50/30">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl -z-10" />

      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 text-xs sm:text-sm font-semibold text-rose-700">
            <TrendingUp className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Résultats prouvés' : 'Proven results'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('businessProofTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {t('businessProofSubtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-14">
          {kpis.map((kpi, index) => (
            <KPICard key={index} kpi={kpi} index={index} />
          ))}
        </div>

        <div className="relative bg-gradient-to-r from-rose-600 via-pink-600 to-purple-700 rounded-3xl p-8 sm:p-10 md:p-12 text-white overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15),_transparent)] rounded-3xl" />
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                {language === 'fr'
                  ? 'Prête à voir ces résultats sur votre boutique ?'
                  : 'Ready to see these results on your store?'}
              </h3>
              <p className="text-rose-100 text-base sm:text-lg">
                {language === 'fr'
                  ? '14 jours gratuits · Aucune carte requise · Installation en 5 minutes'
                  : '14 days free · No card required · 5-minute setup'}
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="flex-shrink-0 bg-white text-rose-600 hover:bg-rose-50 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <a href="https://dashboard.chatseller.app/register">
                {language === 'fr' ? 'Créer ma Vendeuse IA' : 'Create my AI Salesperson'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBusinessProofSection;
