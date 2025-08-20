// src/components/DemoSection.tsx - VERSION TYPESCRIPT CORRIGÉE
import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, ShoppingCart, Star, Smartphone, Monitor, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const DemoSection = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [activeView, setActiveView] = useState<'desktop' | 'mobile'>('desktop');
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  // Charger le Widget ChatSeller pour la démo
  useEffect(() => {
    const loadChatSellerWidget = () => {
      // Configuration spéciale pour la démo Amani
      (window as any).ChatSellerConfig = {
        shopId: 'demo-amani-shop-id', // ID temporaire pour la démo
        agentId: 'demo-amani-agent-id', // ID temporaire pour la démo
        apiUrl: 'https://chatseller-api-production.up.railway.app',
        buttonText: 'Parler à la vendeuse',
        primaryColor: '#EF4444',
        position: 'custom', // Position personnalisée pour la démo
        theme: 'modern',
        language: 'fr',
        borderRadius: 'full',
        autoDetectProduct: true,
        debug: true, // Activer pour la démo
        agentConfig: {
          id: 'demo-amani-agent',
          name: 'Anna',
          title: 'Vendeuse chez Amani',
          welcomeMessage: 'Bonjour ! 👋 Je suis Anna, Vendeuse chez Amani. Je vois que vous vous intéressez à notre ceinture chauffante Mia. Comment puis-je vous aider ?',
          fallbackMessage: 'Je transmets votre question à notre équipe, un conseiller vous recontactera bientôt.',
          personality: 'friendly'
        }
      };

      // Chargement du script widget
      const script = document.createElement('script');
      script.src = 'https://widget.chatseller.app/embed.js?v=' + Date.now();
      script.async = true;
      script.onload = () => {
        console.log('✅ ChatSeller Widget chargé pour la démo');
        setWidgetLoaded(true);
        
        // Initialiser le widget après un court délai
        setTimeout(() => {
          if ((window as any).ChatSeller && typeof (window as any).ChatSeller.init === 'function') {
            (window as any).ChatSeller.init((window as any).ChatSellerConfig);
          }
        }, 500);
      };
      
      script.onerror = () => {
        console.error('❌ Erreur chargement widget ChatSeller');
      };
      
      document.head.appendChild(script);
    };

    // Charger le widget seulement une fois
    if (!widgetLoaded && !document.querySelector('[data-chatseller-demo]')) {
      const script = document.createElement('script');
      script.setAttribute('data-chatseller-demo', 'true');
      loadChatSellerWidget();
    }

    return () => {
      // Cleanup si nécessaire
    };
  }, [widgetLoaded]); // Ajouter widgetLoaded aux dépendances

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-blue-200 rounded-full bg-blue-50 text-sm font-medium text-blue-700 animate-fade-in">
            <Play className="w-4 h-4 mr-2" />
            {t('demo')} en temps réel
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            Testez ChatSeller en live
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in [animation-delay:400ms]">
            Discutez avec Anna, la Vendeuse IA d'AMANI, spécialisée en bien-être féminin
          </p>
          
          <p className="text-muted-foreground mb-8 animate-fade-in [animation-delay:500ms]">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              💡 Cliquez sur "Parler à la vendeuse" dans la démo ci-dessous !
            </span>
          </p>
        </div>

        {/* Toggle Desktop/Mobile View */}
        <div className="flex justify-center mb-12 animate-fade-in [animation-delay:600ms]">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveView('desktop')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 flex items-center ${
                activeView === 'desktop'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Monitor className="w-4 h-4 mr-2" />
              Vue Desktop
            </button>
            <button
              onClick={() => setActiveView('mobile')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 flex items-center ${
                activeView === 'mobile'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Vue Mobile
            </button>
          </div>
        </div>
        
        {/* Demo Product Page */}
        <div className="max-w-5xl mx-auto mb-12 animate-fade-in [animation-delay:800ms]">
          {activeView === 'desktop' ? (
            <DesktopDemo widgetLoaded={widgetLoaded} />
          ) : (
            <MobileDemo widgetLoaded={widgetLoaded} />
          )}
        </div>
        
        {/* Widget Status */}
        {!widgetLoaded && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              Chargement du Widget ChatSeller...
            </div>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="text-center animate-fade-in [animation-delay:1000ms]">
          <Button size="lg" className="rounded-2xl" asChild>
            <a href="https://dashboard.chatseller.app/register">
              Créer mon Vendeur IA
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            Installation en 2 minutes • 7 jours gratuits • Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
};

// ✅ COMPOSANT DEMO DESKTOP AVEC WIDGET RÉEL
const DesktopDemo = ({ widgetLoaded }: { widgetLoaded: boolean }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Browser Bar */}
      <div className="bg-gray-100 px-4 py-3 border-b flex items-center space-x-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 mx-4">
          https://amani-wellness.com/produit/mia
        </div>
      </div>

      {/* Product Page avec Widget */}
      <div className="p-8 relative" id="chatseller-demo-container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8 aspect-square flex items-center justify-center">
            <div className="w-64 h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-xl shadow-lg flex items-center justify-center relative">
              {/* Ceinture chauffante stylisée */}
              <div className="w-48 h-16 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center shadow-inner">
                <span className="text-white font-bold text-lg">Mia</span>
                <div className="absolute top-2 right-4 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              </div>
              {/* Effets de chaleur */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  <div className="w-1 h-4 bg-red-300 rounded-full animate-pulse opacity-60"></div>
                  <div className="w-1 h-5 bg-orange-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1 h-4 bg-red-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-bold mb-4">Mia - Ceinture Chauffante Menstruelle</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-gray-600 ml-2">(127 avis)</span>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-6">49€</div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Soulage les règles douloureuses naturellement</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Autonomie 4h • Chauffe en 30 secondes</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Garantie 2 ans • Livraison gratuite</span>
              </div>
            </div>

            {/* Bouton Ajouter au panier */}
            <Button className="w-full mb-4 rounded-2xl bg-pink-500 hover:bg-pink-600">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Ajouter au panier
            </Button>

            {/* Zone où le Widget ChatSeller s'affichera */}
            <div id="chatseller-widget-zone" className="mt-4">
              {widgetLoaded ? (
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-sm text-green-700">
                    ✅ Widget ChatSeller chargé ! Le bouton devrait apparaître.
                  </div>
                </div>
              ) : (
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-sm text-blue-700">
                    ⏳ Chargement du Widget ChatSeller...
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ COMPOSANT DEMO MOBILE AVEC WIDGET RÉEL
const MobileDemo = ({ widgetLoaded }: { widgetLoaded: boolean }) => {
  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-gray-900 rounded-t-3xl p-2">
        <div className="bg-white rounded-3xl overflow-hidden">
          {/* Mobile Status Bar */}
          <div className="bg-black text-white px-4 py-2 text-xs flex justify-between">
            <span>9:41</span>
            <span>🔶 🔋100%</span>
          </div>

          {/* Mobile Product Page */}
          <div className="p-4" id="chatseller-demo-mobile">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 mb-4 aspect-square flex items-center justify-center">
              <div className="w-40 h-20 bg-gradient-to-r from-pink-200 to-purple-200 rounded-xl shadow-lg flex items-center justify-center relative">
                <div className="w-32 h-12 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Mia</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-lg font-bold mb-2">Mia - Ceinture chauffante</h2>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400 text-sm">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <span className="text-gray-600 ml-2 text-xs">(127)</span>
            </div>
            <div className="text-xl font-bold text-green-600 mb-4">49€</div>
            
            {/* Bouton Ajouter au panier mobile */}
            <Button className="w-full mb-3 text-sm rounded-2xl bg-pink-500 hover:bg-pink-600">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Ajouter au panier
            </Button>

            {/* Zone Widget Mobile */}
            <div id="chatseller-widget-mobile" className="mt-4">
              {widgetLoaded ? (
                <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-xs text-green-700">
                    ✅ Widget actif
                  </div>
                </div>
              ) : (
                <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-xs text-blue-700">
                    ⏳ Chargement...
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;