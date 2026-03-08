// src/components/NewHero.tsx - VERSION FINALE CORRIGÉE
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Play, Sparkles, Send, ShoppingCart, Star, Heart, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ChatModal from './ChatModal';

const NewHero = () => {
  const { t, language } = useLanguage();
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
      {/* Background élégant avec gradients sobres */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/60 via-white to-purple-50/40 -z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent -z-10" />

      {/* Éléments décoratifs discrets - Responsive */}
      <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-br from-rose-200/20 to-pink-200/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-purple-200/20 to-rose-200/10 rounded-full blur-3xl -z-10" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 right-1/4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-pink-200/15 to-rose-200/8 rounded-full blur-2xl -z-10" style={{animationDelay: '2s'}} />
      
      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 mx-auto relative z-10">
        {/* CORRECTION: Grid avec alignement amélioré pour tablette */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
          
          {/* Left Column - Contenu Premium */}
          <div className="text-center lg:text-left">
            
            {/* Social Proof Badge avec photos des testeurs - Responsive */}
            <div className="mb-6 sm:mb-8 animate-fade-in flex justify-center lg:justify-start">
              <SocialProofBadge />
            </div>
            
            {/* Titre principal premium avec A/B test - Responsive */}
            <BeautyABTestHeadline />
            
            {/* Sous-titre premium - Responsive */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl animate-fade-in [animation-delay:400ms] leading-relaxed"
               dangerouslySetInnerHTML={{ __html: t('newHeroSubtitleBeauty') }}
            />

            {/* CTAs Premium - Responsive */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto mb-8 sm:mb-12 animate-fade-in [animation-delay:600ms]">
              <Button 
                size="lg" 
                className="group rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{background: 'linear-gradient(135deg, #ea4242, #8c3dda)'}}
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
                className="group rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105" style={{border: '2px solid #ea4242', color: '#ea4242', backgroundColor: 'transparent'}} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#fdf0f0')} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                onClick={() => {
                  handleCTAClick('secondary');
                  document.getElementById('problem-solution')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" style={{color: '#ea4242'}} />
                <span className="text-sm sm:text-base md:text-lg">{t('newHeroCTASecondary')}</span>
              </Button>
            </div>
            
            {/* Reassurance badges - discrets, pas des boutons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 mt-3 mb-8 sm:mb-10 animate-fade-in [animation-delay:500ms]">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                <span>{language === 'fr' ? 'Pas de carte bancaire requise' : 'No credit card required'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 flex-shrink-0" />
                <span>{t('days14Trial')}</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Chat Interface Beauté Premium - CORRECTION POSITION */}
          <div className="animate-fade-in [animation-delay:800ms] mt-8 lg:mt-0 2xl:-mt-12">
            <BeautyHeroChatInterface onDemoClick={() => setIsChatModalOpen(true)} />
          </div>
        </div>

        {/* Logos défilants des marques beauté - TEMPORAIREMENT MASQUÉ */}
        {/* <div className="mt-12 sm:mt-16 animate-fade-in [animation-delay:1000ms]">
          <BeautyBrandsMarqueeFixed />
        </div> */}
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
    <h1 className="text-4xl sm:text-4xl md:text-7xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 animate-fade-in [animation-delay:200ms] leading-tight" style={{background: 'linear-gradient(135deg, #0d0d0d 0%, #c41f1f 40%, #6d28a8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
      {variant === 'A' ? variantA : variantB}
    </h1>
  );
};

// Composant Social Proof Badge avec photos des fondateurs/fondatrices
const SocialProofBadge = () => {
  const { language } = useLanguage();
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Photos des fondateurs/fondatrices de marques beauté en bêta test
  const betaFounders = [
    { name: 'Fatou', photo: 'fatou.jpg' },
    { name: 'Moussa', photo: 'moussa.jpg' },
    { name: 'Aminata', photo: 'aminata.jpg' },
    { name: 'Cissé', photo: 'fatou-cisse.jpg' }
  ];

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="inline-flex items-center space-x-3 sm:space-x-4">
      {/* Photos empilées des fondateurs */}
      <div className="flex -space-x-2 sm:-space-x-3">
        {betaFounders.map((founder, index) => {
          const initial = founder.name.charAt(0);
          const showFallback = imageErrors[index];

          return (
            <div
              key={founder.name}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gradient-to-br from-rose-400 to-pink-500 overflow-hidden shadow-md"
              style={{ zIndex: betaFounders.length - index }}
              title={founder.name}
            >
              {!showFallback ? (
                <img
                  src={`/images/testimonials/${founder.photo}`}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(index)}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                  {initial}
                </div>
              )}
            </div>
          );
        })}
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gradient-to-br from-purple-500 to-rose-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-md" style={{ zIndex: 0 }}>
          +56
        </div>
      </div>

      {/* Texte et étoiles */}
      <div className="flex flex-col">
        <div className="hidden sm:flex items-center space-x-0.5 sm:space-x-1 mb-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <span className="text-xs sm:text-sm text-gray-700 font-semibold">
          {language === 'fr' ? 'Déjà recrutée par +60 marques beauté' : 'Already hired by 60+ beauty brands'}
        </span>
      </div>
    </div>
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
      avatar: 'M',
      name: 'Mia',
      role: 'Conseillère beauté',
      message: 'Bonjour ! Je suis Mia. Vous cherchez quelque chose de précis, ou je peux vous aider à trouver ce qu\'il vous faut ?',
      timestamp: '10:15'
    },
    {
      type: 'user' as const,
      message: 'Bonjour Mia ! J\'ai des taches sur le visage qui ne partent pas, surtout sur les joues et le front. Vous avez quelque chose pour ça ?',
      timestamp: '10:16'
    },
    {
      type: 'ai' as const,
      avatar: 'M',
      name: 'Mia',
      role: 'Conseillère beauté',
      message: 'Je comprends, c\'est une préoccupation très fréquente. Deux questions rapides : vous avez la peau plutôt claire, mate ou foncée ? Et est-ce qu\'elle est sensible aux soins ?',
      timestamp: '10:17'
    },
    {
      type: 'user' as const,
      message: 'J\'ai la peau foncée. Et oui, elle est un peu sensible — les produits trop forts me donnent des rougeurs.',
      timestamp: '10:18'
    },
    {
      type: 'ai' as const,
      avatar: 'M',
      name: 'Mia',
      role: 'Conseillère beauté',
      message: 'C\'est exactement ce qu\'il me fallait savoir. Sur les peaux foncées, ce type de taches est souvent du mélasma ou de l\'hyperpigmentation — et les produits trop agressifs peuvent aggraver la situation. Pour votre cas, je vous recommande notre **Lait Unifiant au Curcuma & Karité**. 100% naturel, formulé pour les peaux sensibles. Le curcuma agit en douceur sur les taches, le karité nourrit sans irriter.',
      timestamp: '10:19',
      products: [
        { name: 'Lait Unifiant Curcuma & Karité', price: '19€', image: '/images/products/lait-unifiant.png', shade: '' }
      ]
    },
    {
      type: 'user' as const,
      message: 'Le curcuma, ça ne tache pas la peau en jaune ?',
      timestamp: '10:20'
    },
    {
      type: 'ai' as const,
      avatar: 'M',
      name: 'Mia',
      role: 'Conseillère beauté',
      message: 'Contente que vous posiez la question 😊 Non, notre formule est conçue pour éviter ça. Le curcuma est infusé dans le karité, pas appliqué pur — il pénètre dans la peau sans laisser de traces. Beaucoup de nos clientes avaient la même inquiétude et sont aujourd\'hui ravies du résultat.',
      timestamp: '10:21'
    },
    {
      type: 'user' as const,
      message: 'Ok ça me rassure. Je l\'utilise comment ?',
      timestamp: '10:22'
    },
    {
      type: 'ai' as const,
      avatar: 'M',
      name: 'Mia',
      role: 'Conseillère beauté',
      message: 'Chaque soir, après le nettoyage du visage, appliquez-le sur les zones à traiter et massez doucement jusqu\'à absorption complète. Les premières améliorations sont visibles généralement après 2 à 3 semaines d\'utilisation régulière.',
      timestamp: '10:23'
    },
    {
      type: 'user' as const,
      message: 'Parfait, je vais le prendre !',
      timestamp: '10:24'
    },
    {
      type: 'ai' as const,
      avatar: 'M',
      name: 'Mia',
      role: 'Conseillère beauté',
      message: 'Excellent choix ! Pour des résultats encore plus rapides, associez-le à notre **Gommage Doux à la Papaye**. Utilisé une fois par semaine avant le lait, il élimine les cellules mortes et permet aux actifs unifiants de mieux pénétrer. Les deux ensemble forment un protocole très efficace contre les taches.',
      timestamp: '10:25',
      products: [
        { name: 'Lait Unifiant Curcuma & Karité', price: '19€', image: '/images/products/lait-unifiant.png', shade: '' },
        { name: 'Gommage Doux à la Papaye', price: '13€', image: '/images/products/gommage-papaye.png', shade: '' }
      ]
    },
    {
      type: 'user' as const,
      message: 'Bonne idée ! Je prends les deux alors.',
      timestamp: '10:26'
    }
  ],
  en: [
    {
      type: 'ai' as const,
      avatar: 'M',
      name: 'Mia',
      role: 'Beauty Advisor',
      message: 'Hello! I\'m Mia. Are you looking for something specific, or can I help you find what you need?',
      timestamp: '10:15'
    },
    {
      type: 'user' as const,
      message: 'Hi Mia! I have dark spots on my face that won\'t go away, especially on my cheeks and forehead. Do you have something for that?',
      timestamp: '10:16'
    },
    {
      type: 'ai' as const,
      avatar: 'M',
      name: 'Mia',
      role: 'Beauty Advisor',
      message: 'I understand — it\'s a very common concern. Two quick questions: is your skin tone light, medium or dark? And is it sensitive to skincare products?',
      timestamp: '10:17'
    },
    {
      type: 'user' as const,
      message: 'I have dark skin. And yes, it\'s a bit sensitive — products that are too strong give me redness.',
      timestamp: '10:18'
    },
    {
      type: 'ai' as const,
      avatar: 'M',
      name: 'Mia',
      role: 'Beauty Advisor',
      message: 'That\'s exactly what I needed to know. On darker skin tones, this type of spotting is often melasma or hyperpigmentation — and aggressive products can make it worse. For your case, I recommend our **Turmeric & Shea Brightening Lotion**. 100% natural, formulated for sensitive skin. Turmeric gently works on dark spots, shea butter nourishes without irritation.',
      timestamp: '10:19',
      products: [
        { name: 'Turmeric & Shea Brightening Lotion', price: '19€', image: '/images/products/lait-unifiant.png', shade: '' }
      ]
    },
    {
      type: 'user' as const,
      message: 'Doesn\'t turmeric stain the skin yellow?',
      timestamp: '10:20'
    },
    {
      type: 'ai' as const,
      avatar: 'M',
      name: 'Mia',
      role: 'Beauty Advisor',
      message: 'Glad you asked 😊 No, our formula is designed to prevent that. The turmeric is infused in shea butter, not applied pure — it absorbs into the skin without leaving any trace. Many of our customers had the same concern and are now thrilled with their results.',
      timestamp: '10:21'
    },
    {
      type: 'user' as const,
      message: 'Ok that\'s reassuring. How do I use it?',
      timestamp: '10:22'
    },
    {
      type: 'ai' as const,
      avatar: 'M',
      name: 'Mia',
      role: 'Beauty Advisor',
      message: 'Every evening, after cleansing your face, apply it to the areas you want to treat and gently massage until fully absorbed. First improvements are generally visible after 2 to 3 weeks of regular use.',
      timestamp: '10:23'
    },
    {
      type: 'user' as const,
      message: 'Perfect, I\'ll take it!',
      timestamp: '10:24'
    },
    {
      type: 'ai' as const,
      avatar: 'M',
      name: 'Mia',
      role: 'Beauty Advisor',
      message: 'Excellent choice! For even faster results, pair it with our **Papaya Gentle Scrub**. Used once a week before the lotion, it removes dead skin cells and allows the brightening actives to penetrate better. Together they form a very effective protocol against dark spots.',
      timestamp: '10:25',
      products: [
        { name: 'Turmeric & Shea Brightening Lotion', price: '19€', image: '/images/products/lait-unifiant.png', shade: '' },
        { name: 'Papaya Gentle Scrub', price: '13€', image: '/images/products/gommage-papaye.png', shade: '' }
      ]
    },
    {
      type: 'user' as const,
      message: 'Great idea! I\'ll take both then.',
      timestamp: '10:26'
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
      {/* Animation CSS pour le bouton */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes subtle-shake {
            0%, 100% { transform: translateX(0) scale(1); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-1px) scale(1.05); }
            20%, 40%, 60%, 80% { transform: translateX(1px) scale(1.05); }
          }
        `
      }} />

      {/* Chat Interface Premium Beauté - Responsive */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-rose-100 overflow-hidden max-w-sm sm:max-w-md lg:max-w-lg mx-auto backdrop-blur-sm">
        
        {/* Chat Header Premium - Responsive */}
        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 px-4 sm:px-6 py-3 sm:py-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white/30 flex-shrink-0">
              <img src="/images/mia-avatar.png" alt="Mia" className="w-full h-full object-cover" />
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
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden mr-2 sm:mr-3 mt-1 shadow-sm border border-rose-100">
                  <img src="/images/mia-avatar.png" alt="Mia" className="w-full h-full object-cover" />
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
                          <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-white border border-rose-100">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center text-2xl">✨</div>';
                              }}
                            />
                          </div>
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
              <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden mr-2 sm:mr-3 mt-1 shadow-sm border border-rose-100">
                <img src="/images/mia-avatar.png" alt="Mia" className="w-full h-full object-cover" />
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
              placeholder={language === 'fr' ? 'Écrivez votre message ici...' : 'Write your message here...'}
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
              className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 animate-pulse hover:animate-none relative"
              style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, subtle-shake 3s ease-in-out infinite'
              }}
            >
              <Send className="w-3 h-3 sm:w-4 sm:h-4" />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 blur-md opacity-50 animate-pulse -z-10"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Badges flottants supprimés pour ne pas détourner l'attention */}
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
          {/* Premier set de logos - ESPACEMENT AUGMENTÉ POUR PETITS ÉCRANS */}
          <div className="flex items-center space-x-20 sm:space-x-24 md:space-x-28 lg:space-x-32 xl:space-x-40 min-w-full">
            {beautyBrandsLogos.map((brand, index) => (
              <OptimizedBrandLogo
                key={`first-${index}`}
                logoPath={brand.logoPath}
                name={brand.name}
              />
            ))}
          </div>

          {/* Deuxième set pour effet continu - ESPACEMENT AUGMENTÉ POUR PETITS ÉCRANS */}
          <div className="flex items-center space-x-20 sm:space-x-24 md:space-x-28 lg:space-x-32 xl:space-x-40 min-w-full">
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