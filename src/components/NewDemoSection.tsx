// src/components/NewDemoSection.tsx - SECTION DEMO AVEC VIDÉO WISTIA
import React, { useState, useEffect } from 'react';
import { Play, Clock, ShoppingCart, TrendingUp, Sparkles, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewDemoSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      
      {/* Éléments décoratifs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-200/20 to-purple-200/10 rounded-full blur-2xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-8 border border-purple-200 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 text-sm font-semibold text-purple-700 animate-fade-in">
            <Play className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Démonstration en direct' : 'Live demonstration'}
            <Sparkles className="w-4 h-4 ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight animate-fade-in [animation-delay:200ms]">
            {language === 'fr' ? 
              'Voyez ChatSeller en action' : 
              'See ChatSeller in action'}
          </h2>
          
          <p className="text-xl text-gray-600 animate-fade-in [animation-delay:400ms]">
            {language === 'fr' ? 
              'Découvrez le parcours complet d\'une cliente : de la question à l\'achat, en passant par les conseils personnalisés de l\'esthéticienne IA' :
              'Discover the complete journey of a customer: from question to purchase, through personalized advice from the AI Beautician'}
          </p>
        </div>

        {/* Vidéo principale */}
        <div className="max-w-6xl mx-auto mb-16 animate-fade-in [animation-delay:600ms]">
          <WistiaVideoPlayer />
        </div>

        {/* Stats de la démo */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in [animation-delay:800ms]">
          <DemoStat 
            icon={<Clock className="w-6 h-6" />}
            label={language === 'fr' ? 'Temps d\'interaction' : 'Interaction time'}
            value="2min 34s"
            color="blue"
          />
          
          <DemoStat 
            icon={<ShoppingCart className="w-6 h-6" />}
            label={language === 'fr' ? 'Panier moyen' : 'Average cart'}
            value="127€"
            color="emerald"
          />
          
          <DemoStat 
            icon={<TrendingUp className="w-6 h-6" />}
            label={language === 'fr' ? 'Conversion' : 'Conversion'}
            value="✅"
            color="purple"
          />
        </div>
      </div>
    </section>
  );
};

// Composant vidéo Wistia
const WistiaVideoPlayer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(true);

  // ID de votre vidéo Wistia (à remplacer)
  const wistiaVideoId = "your_wistia_video_id"; 

  // Charger le script Wistia
  useEffect(() => {
    if (!window.Wistia) {
      const script = document.createElement('script');
      script.src = 'https://fast.wistia.com/assets/external/E-v1.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        setIsLoading(false);
      };
    } else {
      setIsLoading(false);
    }
  }, []);

  const handlePlayClick = () => {
    setShowPlayButton(false);
    // Déclencher la lecture de la vidéo Wistia
    if (window.Wistia) {
      const video = window.Wistia.api(wistiaVideoId);
      if (video) {
        video.play();
      }
    }
  };

  return (
    <div className="relative">
      
      {/* Container vidéo avec bordures arrondies */}
      <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-4 shadow-2xl">
        <div className="aspect-video bg-black rounded-2xl overflow-hidden relative group">
          
          {/* Placeholder ou vidéo Wistia */}
          {isLoading || showPlayButton ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900 to-pink-900">
              
              {/* Thumbnail de la vidéo */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-800/80 to-pink-800/80"></div>
              
              {/* Contenu du placeholder */}
              <div className="relative z-10 text-center text-white">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <span className="text-3xl">🧴</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Sérum Anti-Rides Premium</h4>
                  <p className="text-purple-200 text-sm">Boutique Belle Étoile • Conversation client en direct</p>
                </div>
                
                {/* Bouton play */}
                <button 
                  onClick={handlePlayClick}
                  className="group/play bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-6 transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Lire la vidéo"
                >
                  <Play className="w-8 h-8 text-white group-hover/play:scale-110 transition-transform fill-current" />
                </button>
                
                <div className="mt-6 text-sm text-purple-200">
                  ▶ Regardez comment Camille guide cette cliente vers l'achat parfait
                </div>
              </div>

              {/* Éléments décoratifs flottants */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                En direct
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2 text-white text-xs">
                <Clock className="w-3 h-3 inline mr-1" />
                2:34 - Temps d'interaction moyen
              </div>
            </div>
          ) : (
            // Vidéo Wistia intégrée
            <div 
              className="wistia_responsive_padding" 
              style={{ padding: '56.25% 0 0 0', position: 'relative' }}
            >
              <div 
                className="wistia_responsive_wrapper" 
                style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
              >
                <div 
                  className={`wistia_embed wistia_async_${wistiaVideoId} videoFoam=true`}
                  style={{ height: '100%', position: 'relative', width: '100%' }}
                >
                  <div 
                    className="wistia_swatch" 
                    style={{ 
                      height: '100%', 
                      left: 0, 
                      opacity: 0, 
                      overflow: 'hidden', 
                      position: 'absolute', 
                      top: 0, 
                      transition: 'opacity 200ms', 
                      width: '100%' 
                    }}
                  >
                    <img 
                      src={`https://fast.wistia.com/embed/medias/${wistiaVideoId}/swatch`}
                      style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} 
                      alt="Aperçu de la vidéo"
                      aria-hidden="true" 
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Badge "Nouvelle fonctionnalité" */}
      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
        <Star className="w-4 h-4 inline mr-1" />
        Nouveau
      </div>
    </div>
  );
};

// Composant stat individuel de la démo
const DemoStat = ({ 
  icon, 
  label, 
  value, 
  color 
}: { 
  icon: React.ReactNode;
  label: string;
  value: string;
  color: 'blue' | 'emerald' | 'purple';
}) => {
  const colorClasses = {
    blue: 'from-blue-500 to-cyan-500 border-blue-200 bg-blue-50',
    emerald: 'from-emerald-500 to-green-500 border-emerald-200 bg-emerald-50', 
    purple: 'from-purple-500 to-pink-500 border-purple-200 bg-purple-50'
  };

  return (
    <div className={`${colorClasses[color].split(' ')[3]} rounded-2xl p-6 border ${colorClasses[color].split(' ')[2]} text-center hover:shadow-lg transition-all duration-300 group`}>
      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${colorClasses[color].split(' ')[0]} ${colorClasses[color].split(' ')[1]} flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div className="text-sm font-medium text-gray-600 mb-2">{label}</div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  );
};

// Types pour le script Wistia
declare global {
  interface Window {
    Wistia: any;
  }
}

export default NewDemoSection;