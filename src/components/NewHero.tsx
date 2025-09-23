// src/components/NewHero.tsx - VERSION FINALE CORRIGÉE
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, TrendingUp, Play, Sparkles, Send, ShoppingCart, Star, Heart, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ChatModal from './ChatModal';

const NewHero = () => {
  const { t } = useLanguage();
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  // Tracking events
  const handleCTAClick = (type: 'primary' | 'secondary') => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: type === 'primary' ? 'click_cta_try_beauty' : 'click_cta_results',
        section: 'hero_beauty',
        cta_text: type === 'primary' ? t('newHeroCTAPrimary') : t('newHeroCTASecondary')
      });
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'view_hero_beauty',
        page_section: 'hero_beauty'
      });
    }
  }, []);

  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
      {/* Background premium beauté avec gradients sophistiqués */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 -z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-rose-50/30 -z-10" />
      
      {/* Éléments décoratifs premium beauté - Responsive */}
      <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-br from-rose-300/30 to-pink-300/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-purple-300/30 to-rose-300/20 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 right-1/4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-pink-400/20 to-rose-400/10 rounded-full blur-2xl -z-10 animate-bounce" style={{animationDelay: '2s'}} />
      
      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 mx-auto relative z-10">
        {/* CORRECTION: Grid avec alignement amélioré pour tablette */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
          
          {/* Left Column - Contenu Premium */}
          <div className="text-center lg:text-left">
            
            {/* Badge secteur beauté premium - Responsive */}
            <div className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-rose-200/60 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 text-xs sm:text-sm font-semibold text-rose-700 animate-fade-in shadow-sm backdrop-blur-sm">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-rose-600" />
              <span className="mr-2 sm:mr-3">{t('beautySectorSpecialized')}</span>
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                {t('conversionIncrease400')}
              </span>
            </div>
            
            {/* Titre principal premium avec A/B test - Responsive */}
            <BeautyABTestHeadline />
            
            {/* Sous-titre premium - Responsive */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl animate-fade-in [animation-delay:400ms] leading-relaxed">
              {t('newHeroSubtitleBeauty')}
            </p>

            {/* CTAs Premium - Responsive */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto mb-8 sm:mb-12 animate-fade-in [animation-delay:600ms]">
              <Button 
                size="lg" 
                className="group rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 hover:from-rose-700 hover:via-pink-700 hover:to-purple-700 transform hover:scale-105" 
                onClick={() => handleCTAClick('primary')}
                asChild
              >
                <a href="https://dashboard.chatseller.app/register">
                  <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base md:text-lg">{t('newHeroCTAPrimary')}</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="group rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold border-2 border-rose-300 hover:border-rose-400 hover:bg-rose-50 transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  handleCTAClick('secondary');
                  document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <TrendingUp className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-rose-600" />
                <span className="text-sm sm:text-base md:text-lg">{t('newHeroCTASecondary')}</span>
              </Button>
            </div>
            
            {/* Social Proof Premium Beauté - Responsive */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-6 md:gap-8 mb-8 sm:mb-10 animate-fade-in [animation-delay:500ms]">
              <div className="flex items-center text-xs sm:text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded-full border border-rose-200/50 shadow-sm">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                <span className="font-medium">{t('days14Trial')}</span>
              </div>
              <div className="flex items-center text-xs sm:text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded-full border border-rose-200/50 shadow-sm">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 mr-2" />
                <span className="font-medium">{t('oneClickInstall')}</span>
              </div>
              <div className="flex items-center text-xs sm:text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded-full border border-rose-200/50 shadow-sm">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 mr-2" />
                <span className="font-medium">{t('beautySector')}</span>
              </div>
            </div>
            
            {/* Stats Beta Testeurs Beauté - Responsive */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 animate-fade-in [animation-delay:700ms]">
              <div className="flex items-center">
                <div className="flex -space-x-1 sm:-space-x-2 mr-2 sm:mr-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full border-2 border-white"></div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-rose-500 rounded-full border-2 border-white"></div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="font-medium">{t('beautyBrandsAlreadyTesting')}</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2" />
                <span className="font-medium">{t('averageConversionBeauty')}</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Chat Interface Beauté Premium - CORRECTION POSITION */}
          <div className="animate-fade-in [animation-delay:800ms] mt-8 lg:mt-0 lg:-mt-12 xl:-mt-16">
            <BeautyHeroChatInterface onDemoClick={() => setIsChatModalOpen(true)} />
          </div>
        </div>
        
        {/* Logos défilants des marques beauté - CORRECTION ESPACEMENT */}
        <div className="mt-12 sm:mt-16 animate-fade-in [animation-delay:1000ms]">
          <BeautyBrandsMarqueeFixed />
        </div>
      </div>
      
      {/* Modal de chat */}
      <ChatModal 
        isOpen={isChatModalOpen} 
        onClose={() => setIsChatModalOpen(false)} 
      />
    </section>
  );
};

// Composant A/B test pour le titre beauté - Responsive
const BeautyABTestHeadline = () => {
  const { t } = useLanguage();
  const [variant, setVariant] = useState<'A' | 'B'>('A');

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlVariant = urlParams.get('v');
    
    let chosenVariant: 'A' | 'B' = 'A';
    
    if (urlVariant === 'B') {
      chosenVariant = 'B';
    } else if (!urlVariant) {
      const stored = localStorage.getItem('ab_beauty_hero_variant');
      if (stored === 'B' || stored === 'A') {
        chosenVariant = stored as 'A' | 'B';
      } else {
        chosenVariant = Math.random() > 0.5 ? 'B' : 'A';
        localStorage.setItem('ab_beauty_hero_variant', chosenVariant);
      }
    }
    
    setVariant(chosenVariant);
    
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'ab_variant_shown_beauty',
        variant: chosenVariant,
        test_name: 'beauty_hero_headline'
      });
    }
  }, []);

  const variantA = t('newHeroTitleBeauty');
  const variantB = t('newHeroTitleBeautyAlt');

  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 animate-fade-in [animation-delay:200ms] bg-gradient-to-r from-gray-900 via-rose-800 to-purple-900 bg-clip-text text-transparent leading-tight">
      {variant === 'A' ? variantA : variantB}
    </h1>
  );
};

// Interface chat beauté premium - Responsive
const BeautyHeroChatInterface = ({ onDemoClick }: { onDemoClick: () => void }) => {
  const { language } = useLanguage();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Messages de conversation beauté en français et anglais
  const beautyChatMessages = {
    fr: [
      {
        type: 'ai' as const,
        avatar: 'C',
        name: 'Camille',
        role: 'Conseillère Beauté IA',
        message: 'Bonjour ! Je suis Camille, votre conseillère beauté chez Belle Étoile. Comment puis-je vous aider dans votre routine beauté aujourd\'hui ?',
        timestamp: '14:23'
      },
      {
        type: 'user' as const,
        message: 'Salut ! Je cherche un fond de teint pour peau mixte, carnation claire. Que me proposez-vous ?',
        timestamp: '14:24'
      },
      {
        type: 'ai' as const,
        avatar: 'C',
        name: 'Camille',
        role: 'Conseillère Beauté IA',
        message: 'Alors, pour une carnation claire et peau mixte, je recommande notre **Fond de Teint Éclat Naturel** en teinte "Porcelaine". Il contient de l\'acide salicylique pour les zones grasses.',
        timestamp: '14:24',
        products: [
          { name: 'Fond de Teint Éclat Naturel', price: '42€', image: '💄', shade: 'Porcelaine' },
          { name: 'Poudre Matifiante', price: '28€', image: '✨', shade: 'Transparente' }
        ]
      },
      {
        type: 'user' as const,
        message: 'Super ! Et pour fixer le tout sans effet poudré ?',
        timestamp: '14:25'
      },
      {
        type: 'ai' as const,
        avatar: 'C',
        name: 'Camille',
        role: 'Conseillère Beauté IA',
        message: 'Je vous conseille notre **Spray Fixateur Invisible** ! Il fixe pendant 12h sans alourdir. Parfait après votre fond de teint pour un fini naturel.',
        timestamp: '14:25',
        products: [
          { name: 'Spray Fixateur Invisible', price: '35€', image: '💦', shade: '' }
        ]
      },
      {
        type: 'user' as const,
        message: 'Génial ! Je prends les trois. Comment on procède ?',
        timestamp: '14:26'
      }
    ],
    en: [
      {
        type: 'ai' as const,
        avatar: 'S',
        name: 'Sophia',
        role: 'AI Beauty Advisor',
        message: 'Hello! I\'m Sophia, your beauty advisor at Pure Radiance. How can I help you with your beauty routine today?',
        timestamp: '2:23 PM'
      },
      {
        type: 'user' as const,
        message: 'Hi! I\'m looking for a foundation for combination skin, fair complexion. Do you have something?',
        timestamp: '2:24 PM'
      },
      {
        type: 'ai' as const,
        avatar: 'S',
        name: 'Sophia',
        role: 'AI Beauty Advisor',
        message: 'Perfect! For fair complexion and combination skin, I recommend our **Natural Glow Foundation** in "Porcelain" shade. It contains salicylic acid for oily areas.',
        timestamp: '2:24 PM',
        products: [
          { name: 'Natural Glow Foundation', price: '$48', image: '💄', shade: 'Porcelain' },
          { name: 'Mattifying Powder', price: '$32', image: '✨', shade: 'Translucent' }
        ]
      },
      {
        type: 'user' as const,
        message: 'Great! And to set everything without a powdery effect?',
        timestamp: '2:25 PM'
      },
      {
        type: 'ai' as const,
        avatar: 'S',
        name: 'Sophia',
        role: 'AI Beauty Advisor',
        message: 'I recommend our **Invisible Setting Spray**! It sets for 12h without weighing down. Perfect after your foundation for a natural finish.',
        timestamp: '2:25 PM',
        products: [
          { name: 'Invisible Setting Spray', price: '$38', image: '💦', shade: '' }
        ]
      },
      {
        type: 'user' as const,
        message: 'Awesome! I\'ll take all three. How do we proceed?',
        timestamp: '2:26 PM'
      }
    ]
  };

  const messages = beautyChatMessages[language];

  // Animation des messages
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex(prev => {
        if (prev < messages.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [messages.length]);

  // Auto-scroll
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [currentMessageIndex]);

  return (
    <div className="relative">
      {/* Chat Interface Premium Beauté - Responsive */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-rose-100 overflow-hidden max-w-sm sm:max-w-md lg:max-w-lg mx-auto backdrop-blur-sm">
        
        {/* Chat Header Premium - Responsive */}
        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 px-4 sm:px-6 py-3 sm:py-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm backdrop-blur-sm">
              {messages[0].avatar}
            </div>
            <div>
              <div className="font-semibold text-sm sm:text-base">{messages[0].name}</div>
              <div className="text-xs text-rose-100">{messages[0].role}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium">
              {language === 'fr' ? 'En ligne' : 'Online'}
            </span>
          </div>
        </div>

        {/* Chat Messages - Responsive */}
        <div 
          ref={chatContainerRef}
          className="h-72 sm:h-80 md:h-96 p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto scroll-smooth bg-gradient-to-b from-rose-50/30 to-pink-50/20"
        >
          {messages.slice(0, currentMessageIndex + 1).map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
              
              {msg.type === 'ai' && (
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold mr-2 sm:mr-3 mt-1 shadow-sm">
                  {msg.avatar}
                </div>
              )}

              <div className={`max-w-[80%] sm:max-w-[85%] ${
                msg.type === 'user' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'bg-white border border-rose-100 shadow-sm'
              } rounded-xl sm:rounded-2xl px-3 sm:px-5 py-3 sm:py-4`}>
                <div className={`text-xs sm:text-sm leading-relaxed ${msg.type === 'user' ? 'text-white' : 'text-gray-800'}`}>
                  {msg.message.includes('**') ? (
                    <div dangerouslySetInnerHTML={{
                      __html: msg.message
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-rose-600">$1</strong>')
                    }} />
                  ) : (
                    msg.message
                  )}
                </div>
                
                {/* Produits recommandés premium - Responsive */}
                {msg.products && (
                  <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                    {msg.products.map((product, prodIndex) => (
                      <div 
                        key={prodIndex}
                        className="flex items-center justify-between bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg sm:rounded-xl p-2 sm:p-3 cursor-pointer hover:from-rose-100 hover:to-pink-100 transition-all duration-300 group border border-rose-100"
                        onClick={onDemoClick}
                      >
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <span className="text-base sm:text-xl">{product.image}</span>
                          <div>
                            <div className="text-xs sm:text-sm font-semibold text-gray-800">{product.name}</div>
                            <div className="text-xs text-rose-600 font-bold">{product.price}</div>
                            {product.shade && (
                              <div className="text-xs text-gray-500">Teinte: {product.shade}</div>
                            )}
                          </div>
                        </div>
                        <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 group-hover:scale-110 transition-transform duration-200" />
                      </div>
                    ))}
                  </div>
                )}
                
                <div className={`text-xs mt-2 sm:mt-3 ${msg.type === 'user' ? 'text-purple-200' : 'text-gray-400'}`}>
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator premium - Responsive */}
          {currentMessageIndex < messages.length - 1 && (
            <div className="flex justify-start animate-fade-in">
              <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold mr-2 sm:mr-3 mt-1 shadow-sm">
                {messages[0].avatar}
              </div>
              <div className="bg-white border border-rose-100 rounded-xl sm:rounded-2xl px-3 sm:px-5 py-3 sm:py-4 shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chat Input Premium - Responsive */}
        <div className="p-4 sm:p-6 border-t border-rose-100 bg-white">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <input 
              type="text" 
              placeholder={language === 'fr' ? 'Posez votre question beauté...' : 'Ask your beauty question...'}
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-rose-200 rounded-full text-xs sm:text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-200"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  onDemoClick();
                }
              }}
            />
            <Button 
              size="sm"
              onClick={onDemoClick}
              className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Send className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Éléments flottants de conversion beauté - MASQUÉS SUR MOBILE ET TABLETTE */}
      <div className="absolute -right-6 top-1/4 animate-bounce hidden xl:block">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-xl shadow-xl text-sm font-bold backdrop-blur-sm border border-green-300">
          {language === 'fr' ? '+267% conversions beauté' : '+267% beauty conversions'}
        </div>
      </div>
      
      <div className="absolute -left-6 bottom-1/3 animate-bounce hidden xl:block" style={{animationDelay: '0.5s'}}>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-xl shadow-xl text-sm font-bold backdrop-blur-sm border border-blue-300">
          {language === 'fr' ? 'Commande finalisée !' : 'Order completed!'}
        </div>
      </div>

      <div className="absolute -right-4 bottom-1/4 animate-pulse hidden xl:block">
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-2 rounded-lg shadow-lg text-xs font-semibold">
          <Heart className="w-3 h-3 inline mr-1" />
          {language === 'fr' ? 'Conseil personnalisé' : 'Personal advice'}
        </div>
      </div>
    </div>
  );
};

// NOUVEAU COMPOSANT LOGOS CORRIGÉ - Espacement optimisé
const BeautyBrandsMarqueeFixed = () => {
  return (
    <div className="w-full overflow-hidden py-6 sm:py-8">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee-right-to-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          .brands-marquee {
            animation: marquee-right-to-left 40s linear infinite;
          }
          
          .brands-marquee-container:hover .brands-marquee {
            animation-play-state: paused;
          }
          
          .brand-logo {
            filter: grayscale(100%) opacity(0.6);
            transition: all 0.3s ease;
          }
          
          .brand-logo:hover {
            filter: grayscale(0%) opacity(1);
            transform: scale(1.05);
          }
        `
      }} />
      
      <div className="brands-marquee-container">
        <div className="flex brands-marquee">
          {/* Premier set de logos - ESPACEMENT CORRIGÉ */}
          <div className="flex items-center space-x-12 sm:space-x-16 md:space-x-20 lg:space-x-24 xl:space-x-32 min-w-full">
            {beautyBrandsLogos.map((brand, index) => (
              <OptimizedBrandLogo 
                key={`first-${index}`}
                logoPath={brand.logoPath}
                name={brand.name}
              />
            ))}
          </div>
          
          {/* Deuxième set pour effet continu - ESPACEMENT CORRIGÉ */}
          <div className="flex items-center space-x-12 sm:space-x-16 md:space-x-20 lg:space-x-24 xl:space-x-32 min-w-full">
            {beautyBrandsLogos.map((brand, index) => (
              <OptimizedBrandLogo 
                key={`second-${index}`}
                logoPath={brand.logoPath}
                name={brand.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// NOUVEAU COMPOSANT LOGO OPTIMISÉ - Tailles responsives corrigées
const OptimizedBrandLogo = ({ 
  logoPath, 
  name 
}: { 
  logoPath: string;
  name: string;
}) => {
  const [logoError, setLogoError] = useState(false);
  
  // Construction du chemin public
  const publicLogoPath = `/images/brand-logos/${logoPath}`;
  
  // Fallback avec initiales si logo introuvable
  if (logoError) {
    const initials = name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase();
    return (
      <div className="flex items-center justify-center w-20 h-12 sm:w-28 sm:h-16 md:w-32 md:h-18 lg:w-36 lg:h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border brand-logo cursor-pointer shadow-sm flex-shrink-0">
        <span className="text-gray-600 font-bold text-sm sm:text-base md:text-lg">{initials}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-20 h-12 sm:w-28 sm:h-16 md:w-32 md:h-18 lg:w-36 lg:h-20 cursor-pointer brand-logo flex-shrink-0">
      <img 
        src={publicLogoPath}
        alt={`${name} logo`}
        className="max-w-full max-h-full object-contain"
        style={{ 
          maxWidth: '100%', // Utilise toute la largeur du container
          maxHeight: '100%'  // Utilise toute la hauteur du container
        }}
        onError={() => setLogoError(true)}
        loading="lazy"
      />
    </div>
  );
};

// Données des marques avec chemins vers logos
const beautyBrandsLogos = [
  { name: "6C No Filter", logoPath: "6cnofilter.webp" },
  { name: "Racines Précieuses", logoPath: "racines.avif" },
  { name: "Yafa Beauty", logoPath: "yafa.png" },
  { name: "Karyal Products", logoPath: "karyal.webp" },
  { name: "Sassoumane", logoPath: "sassoumane.webp" },
  { name: "Exclusiv Products", logoPath: "exclusiv.png" },
  { name: "MOSS", logoPath: "moss.png" }
];

export default NewHero;