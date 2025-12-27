// src/components/NewBeautyProblemSection.tsx
import { useState } from 'react';
import { Clock, TrendingDown, AlertCircle, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewBeautyProblemSection = () => {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const frustrations = [
    {
      icon: Clock,
      iconColor: 'text-orange-400',
      iconBg: 'bg-gradient-to-br from-orange-500/20 to-amber-500/10',
      accentColor: 'from-orange-500 to-amber-500',
      glowColor: 'shadow-orange-500/50',
      title: t('beautyFrustration1Title'),
      quote: t('beautyFrustration1Quote'),
      description: t('beautyFrustration1Description'),
      emoji: '⏰'
    },
    {
      icon: TrendingDown,
      iconColor: 'text-red-400',
      iconBg: 'bg-gradient-to-br from-red-500/20 to-rose-500/10',
      accentColor: 'from-red-500 to-rose-500',
      glowColor: 'shadow-red-500/50',
      title: t('beautyFrustration2Title'),
      quote: t('beautyFrustration2Quote'),
      description: t('beautyFrustration2Description'),
      emoji: '📉'
    },
    {
      icon: AlertCircle,
      iconColor: 'text-amber-400',
      iconBg: 'bg-gradient-to-br from-amber-500/20 to-yellow-500/10',
      accentColor: 'from-amber-500 to-yellow-500',
      glowColor: 'shadow-amber-500/50',
      title: t('beautyFrustration3Title'),
      quote: t('beautyFrustration3Quote'),
      description: t('beautyFrustration3Description'),
      emoji: '🤷‍♀️'
    }
  ];

  return (
    <section id="problem" className="relative py-20 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">

      {/* Background effects - Premium dark theme */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/20 via-transparent to-transparent" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl" />

      <div className="container px-6 md:px-12 mx-auto relative z-10">

        {/* En-tête de section avec badge */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          {/* Badge animé */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <MessageCircle className="w-4 h-4 text-rose-300" />
            <span className="text-sm font-semibold text-white/90">Le problème que vivent les marques beauté</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in [animation-delay:200ms]">
            {t('beautyProblemTitle')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed animate-fade-in [animation-delay:400ms]">
            {t('beautyProblemSubtitle')}
          </p>
        </div>

        {/* Les 3 frustrations - 3 colonnes sur desktop, empilées sur mobile */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20 max-w-7xl mx-auto">
          {frustrations.map((frustration, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 animate-fade-in"
              style={{animationDelay: `${600 + index * 200}ms`}}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${frustration.accentColor} opacity-0 group-hover:opacity-10 rounded-2xl sm:rounded-3xl transition-opacity duration-500 blur-xl`}></div>

              {/* Content wrapper */}
              <div className="relative z-10">
                {/* Header avec icône et emoji */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 ${frustration.iconBg} rounded-2xl backdrop-blur-sm border border-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${hoveredCard === index ? `shadow-2xl ${frustration.glowColor}` : 'shadow-lg'}`}>
                    <frustration.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${frustration.iconColor}`} />
                  </div>
                  <span className="text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-300">
                    {frustration.emoji}
                  </span>
                </div>

                {/* Titre avec gradient */}
                <h3 className={`text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r ${frustration.accentColor} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left`}>
                  {frustration.title}
                </h3>

                {/* Citation avec style chat bubble */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-l-4 border-gradient rounded-2xl p-4 sm:p-5 mb-5 group-hover:bg-white/15 transition-all duration-300" style={{borderImageSlice: 1, borderImageSource: `linear-gradient(to bottom, var(--tw-gradient-stops))`}}>
                  <div className={`absolute -left-1 top-0 bottom-0 w-1 bg-gradient-to-b ${frustration.accentColor} rounded-full`}></div>
                  <div className="flex items-start space-x-3">
                    <MessageCircle className={`w-5 h-5 ${frustration.iconColor} flex-shrink-0 mt-0.5`} />
                    <p className="text-sm sm:text-base font-semibold text-white italic leading-relaxed">
                      "{frustration.quote}"
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {frustration.description}
                </p>

                {/* Ligne décorative animée */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${frustration.accentColor} rounded-full transition-all duration-500 ${hoveredCard === index ? 'w-full' : 'w-0'}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion du problème - Design premium */}
        <div className="max-w-5xl mx-auto animate-fade-in [animation-delay:1400ms]">
          <div className="relative bg-gradient-to-br from-rose-600 via-pink-600 to-purple-700 rounded-3xl p-8 sm:p-10 md:p-14 shadow-2xl text-white overflow-hidden group hover:shadow-rose-500/50 transition-all duration-500">

            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Icônes flottantes décoratives */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white/80" />
            </div>

            {/* Petites icônes décoratives */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 flex space-x-2">
              <div className="w-3 h-3 bg-white/40 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
            </div>

            <div className="relative z-10 max-w-3xl">
              {/* Icon badge */}
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <AlertCircle className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white">Résultat</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 leading-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                {t('beautyProblemConclusion')}
              </h3>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed opacity-95 group-hover:opacity-100 transition-opacity duration-300">
                {t('beautyProblemConclusionSub')}
              </p>

              {/* Ligne décorative animée */}
              <div className="mt-8 h-1.5 bg-white/30 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full animate-pulse w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBeautyProblemSection;
