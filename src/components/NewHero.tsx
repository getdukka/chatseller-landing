// src/components/NewHero.tsx - HERO OPTIMISÉ SECTEUR BEAUTÉ
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
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
      {/* Background premium beauté avec gradients sophistiqués */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 -z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-rose-50/30 -z-10" />
      
      {/* Éléments décoratifs premium beauté */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-rose-300/30 to-pink-300/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-300/30 to-rose-300/20 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-rose-400/10 rounded-full blur-2xl -z-10 animate-bounce" style={{animationDelay: '2s'}} />
      
      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Contenu Premium */}
          <div className="text-center lg:text-left">
            
            {/* Badge secteur beauté premium */}
            <div className="inline-flex items-center px-6 py-3 mb-8 border border-rose-200/60 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 text-sm font-semibold text-rose-700 animate-fade-in shadow-sm backdrop-blur-sm">
              <Heart className="w-4 h-4 mr-2 text-rose-600" />
              <span className="mr-3">{t('beautySectorSpecialized')}</span>
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                {t('conversionIncrease400')}
              </span>
            </div>
            
            {/* Titre principal premium avec A/B test */}
            <BeautyABTestHeadline />
            
            {/* Sous-titre premium */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl animate-fade-in [animation-delay:400ms] leading-relaxed">
              {t('newHeroSubtitleBeauty')}
            </p>

            {/* CTAs Premium */}
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-12 animate-fade-in [animation-delay:600ms]">
              <Button 
                size="lg" 
                className="group rounded-full px-10 py-5 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 hover:from-rose-700 hover:via-pink-700 hover:to-purple-700 transform hover:scale-105" 
                onClick={() => handleCTAClick('primary')}
                asChild
              >
                <a href="https://dashboard.chatseller.app/register">
                  <Sparkles className="mr-2 h-5 w-5" />
                  {t('newHeroCTAPrimary')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="group rounded-full px-10 py-5 text-lg font-semibold border-2 border-rose-300 hover:border-rose-400 hover:bg-rose-50 transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  handleCTAClick('secondary');
                  document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <TrendingUp className="mr-2 h-5 w-5 text-rose-600" />
                {t('newHeroCTASecondary')}
              </Button>
            </div>
            
            {/* Social Proof Premium Beauté */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10 animate-fade-in [animation-delay:500ms]">
              <div className="flex items-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-rose-200/50 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                <span className="font-medium">{t('days14Trial')}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-rose-200/50 shadow-sm">
                <Zap className="w-4 h-4 text-amber-500 mr-2" />
                <span className="font-medium">{t('oneClickInstall')}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-rose-200/50 shadow-sm">
                <Star className="w-4 h-4 text-purple-500 mr-2" />
                <span className="font-medium">{t('beautySector')}</span>
              </div>
            </div>
            
            {/* Stats Beta Testeurs Beauté */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500 animate-fade-in [animation-delay:700ms]">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-rose-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="font-medium">{t('beautyBrandsAlreadyTesting')}</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                <span className="font-medium">{t('averageConversionBeauty')}</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Chat Interface Beauté Premium */}
          <div className="animate-fade-in [animation-delay:800ms]">
            <BeautyHeroChatInterface onDemoClick={() => setIsChatModalOpen(true)} />
          </div>
        </div>
        
        {/* Logos défilants des marques beauté - Style chatseller.app */}
        <div className="mt-16 animate-fade-in [animation-delay:1000ms]">
          <BeautyBrandsMarquee />
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

// Composant A/B test pour le titre beauté
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
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in [animation-delay:200ms] bg-gradient-to-r from-gray-900 via-rose-800 to-purple-900 bg-clip-text text-transparent">
      {variant === 'A' ? variantA : variantB}
    </h1>
  );
};

// Interface chat beauté premium
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
      {/* Chat Interface Premium Beauté */}
      <div className="bg-white rounded-3xl shadow-2xl border border-rose-100 overflow-hidden max-w-lg mx-auto backdrop-blur-sm">
        
        {/* Chat Header Premium */}
        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm backdrop-blur-sm">
              {messages[0].avatar}
            </div>
            <div>
              <div className="font-semibold text-base">{messages[0].name}</div>
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

        {/* Chat Messages */}
        <div 
          ref={chatContainerRef}
          className="h-96 p-6 space-y-5 overflow-y-auto scroll-smooth bg-gradient-to-b from-rose-50/30 to-pink-50/20"
        >
          {messages.slice(0, currentMessageIndex + 1).map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
              
              {msg.type === 'ai' && (
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1 shadow-sm">
                  {msg.avatar}
                </div>
              )}

              <div className={`max-w-[85%] ${
                msg.type === 'user' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'bg-white border border-rose-100 shadow-sm'
              } rounded-2xl px-5 py-4`}>
                <div className={`text-sm leading-relaxed ${msg.type === 'user' ? 'text-white' : 'text-gray-800'}`}>
                  {msg.message.includes('**') ? (
                    <div dangerouslySetInnerHTML={{
                      __html: msg.message
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-rose-600">$1</strong>')
                    }} />
                  ) : (
                    msg.message
                  )}
                </div>
                
                {/* Produits recommandés premium */}
                {msg.products && (
                  <div className="mt-4 space-y-3">
                    {msg.products.map((product, prodIndex) => (
                      <div 
                        key={prodIndex}
                        className="flex items-center justify-between bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-3 cursor-pointer hover:from-rose-100 hover:to-pink-100 transition-all duration-300 group border border-rose-100"
                        onClick={onDemoClick}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{product.image}</span>
                          <div>
                            <div className="text-sm font-semibold text-gray-800">{product.name}</div>
                            <div className="text-xs text-rose-600 font-bold">{product.price}</div>
                            {product.shade && (
                              <div className="text-xs text-gray-500">Teinte: {product.shade}</div>
                            )}
                          </div>
                        </div>
                        <ShoppingCart className="w-5 h-5 text-rose-600 group-hover:scale-110 transition-transform duration-200" />
                      </div>
                    ))}
                  </div>
                )}
                
                <div className={`text-xs mt-3 ${msg.type === 'user' ? 'text-purple-200' : 'text-gray-400'}`}>
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator premium */}
          {currentMessageIndex < messages.length - 1 && (
            <div className="flex justify-start animate-fade-in">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1 shadow-sm">
                {messages[0].avatar}
              </div>
              <div className="bg-white border border-rose-100 rounded-2xl px-5 py-4 shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chat Input Premium */}
        <div className="p-6 border-t border-rose-100 bg-white">
          <div className="flex items-center space-x-3">
            <input 
              type="text" 
              placeholder={language === 'fr' ? 'Posez votre question beauté...' : 'Ask your beauty question...'}
              className="flex-1 px-4 py-3 border border-rose-200 rounded-full text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-200"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  onDemoClick();
                }
              }}
            />
            <Button 
              size="sm"
              onClick={onDemoClick}
              className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Éléments flottants de conversion beauté - MASQUÉS SUR MOBILE */}
      <div className="absolute -right-6 top-1/4 animate-bounce hidden lg:block">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-xl shadow-xl text-sm font-bold backdrop-blur-sm border border-green-300">
          {language === 'fr' ? '+267% conversions beauté' : '+267% beauty conversions'}
        </div>
      </div>
      
      <div className="absolute -left-6 bottom-1/3 animate-bounce hidden lg:block" style={{animationDelay: '0.5s'}}>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-xl shadow-xl text-sm font-bold backdrop-blur-sm border border-blue-300">
          {language === 'fr' ? 'Commande finalisée !' : 'Order completed!'}
        </div>
      </div>

      <div className="absolute -right-4 bottom-1/4 animate-pulse hidden lg:block">
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-2 rounded-lg shadow-lg text-xs font-semibold">
          <Heart className="w-3 h-3 inline mr-1" />
          {language === 'fr' ? 'Conseil personnalisé' : 'Personal advice'}
        </div>
      </div>
    </div>
  );
};

// Composant logos défilants avec vrais logos SVG
const BeautyBrandsMarquee = () => {
  return (
    <div className="w-full overflow-hidden py-8">
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
            animation: marquee-right-to-left 35s linear infinite;
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
          {/* Premier set de logos */}
          <div className="flex items-center space-x-12 min-w-full">
            {beautyBrandsLogos.map((brand, index) => (
              <RealBrandLogo 
                key={`first-${index}`}
                logoPath={brand.logoPath}
                name={brand.name}
              />
            ))}
          </div>
          
          {/* Deuxième set pour effet continu */}
          <div className="flex items-center space-x-12 min-w-full">
            {beautyBrandsLogos.map((brand, index) => (
              <RealBrandLogo 
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

// Composant logo réel avec SVG
const RealBrandLogo = ({ 
  logoPath, 
  name 
}: { 
  logoPath: string;
  name: string;
}) => {
  const [logoSrc, setLogoSrc] = useState<string>('');

  // Import dynamique du logo SVG
  React.useEffect(() => {
    const loadLogo = async () => {
      try {
        const logo = await import(`@/assets/brand-logos/${logoPath}`);
        setLogoSrc(logo.default);
      } catch (error) {
        console.warn(`Logo non trouvé pour ${name}:`, logoPath);
        // Fallback avec initiales si logo non trouvé
        setLogoSrc('');
      }
    };
    
    loadLogo();
  }, [logoPath, name]);

  // Fallback avec initiales si logo pas encore chargé ou introuvable
  if (!logoSrc) {
    const initials = name.split(' ').map(word => word[0]).join('').slice(0, 2);
    return (
      <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg border brand-logo cursor-pointer">
        <span className="text-gray-600 font-bold text-lg">{initials}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-32 h-16 cursor-pointer brand-logo">
      <img 
        src={logoSrc}
        alt={`${name} logo`}
        className="max-w-full max-h-full object-contain"
        style={{ maxWidth: '120px', maxHeight: '48px' }}
      />
    </div>
  );
};

// Données des marques avec chemins vers logos SVG
const beautyBrandsLogos = [
  { name: "6C No Filter", logoPath: "6c-no-filter.svg" },
  { name: "Racines Précieuses", logoPath: "racines-precieuses.svg" },
  { name: "Yafa Beauty", logoPath: "yafa-beauty.svg" },
  { name: "Karyal Products", logoPath: "karyal-products.svg" },
  { name: "Sassoumane", logoPath: "sassoumane.svg" },
  { name: "Exclusiv Products", logoPath: "exclusiv-products.svg" },
  { name: "MOSS", logoPath: "moss.svg" }
];

export default NewHero;