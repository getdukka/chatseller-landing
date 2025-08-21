// src/components/DemoSection.tsx - AVEC TRADUCTIONS COMPLÈTES
import React, { useState } from 'react';
import { ArrowRight, MessageSquare, ShoppingCart, Star, Smartphone, Monitor, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import ChatModal from './ChatModal';

const DemoSection = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [activeView, setActiveView] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-blue-200 rounded-full bg-blue-50 text-sm font-medium text-blue-700 animate-fade-in">
            <Play className="w-4 h-4 mr-2" />
            {t('demoBadge')}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            {t('demoTitle')}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in [animation-delay:400ms]">
            {t('demoSubtitle')}
          </p>
          
          <p className="text-muted-foreground mb-8 animate-fade-in [animation-delay:500ms]">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              💡 {t('demoTip')}
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
              {t('demoDesktop')}
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
              {t('demoMobile')}
            </button>
          </div>
        </div>
        
        {/* Demo Product Page */}
        <div className="max-w-5xl mx-auto mb-12 animate-fade-in [animation-delay:800ms]">
          {activeView === 'desktop' ? (
            <DesktopDemo />
          ) : (
            <MobileDemo />
          )}
        </div>
        
        {/* Call to Action */}
        <div className="text-center animate-fade-in [animation-delay:1000ms]">
          <Button size="lg" className="rounded-2xl" asChild>
            <a href="https://dashboard.chatseller.app/register">
              {t('createMyAI')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            {t('installMinutes')} • {t('freeTrialDays')} • {t('noCardRequired')}
          </p>
        </div>
      </div>
    </section>
  );
};

// ✅ COMPOSANT DEMO DESKTOP PROPRE
const DesktopDemo = () => {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const { t, language } = useLanguage();

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

      {/* Product Page */}
      <div className="p-8 relative">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8 aspect-square flex items-center justify-center">
            <div className="w-64 h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-xl shadow-lg flex items-center justify-center relative">
              <div className="w-48 h-16 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center shadow-inner">
                <span className="text-white font-bold text-lg">Mia</span>
                <div className="absolute top-2 right-4 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  <div className="w-1 h-4 bg-red-300 rounded-full animate-pulse opacity-60"></div>
                  <div className="w-1 h-5 bg-orange-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1 h-4 bg-red-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info - VERSION TRADUITE */}
          <div>
            <h1 className="text-2xl font-bold mb-4">
              {language === 'fr' ? 
                "Mia - Ceinture Chauffante Menstruelle" : 
                "Mia - Menstrual Heating Belt"
              }
            </h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-gray-600 ml-2">
                {language === 'fr' ? "(127 avis)" : "(127 reviews)"}
              </span>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-6">
              {language === 'fr' ? "49€" : "$55"}
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  {language === 'fr' ? 
                    "Soulage les règles douloureuses naturellement" : 
                    "Naturally relieves menstrual pain"
                  }
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  {language === 'fr' ? 
                    "Autonomie 4h • Chauffe en 30 secondes" : 
                    "4h battery • Heats in 30 seconds"
                  }
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  {language === 'fr' ? 
                    "Garantie 2 ans • Livraison gratuite" : 
                    "2-year warranty • Free delivery"
                  }
                </span>
              </div>
            </div>

            {/* Bouton Ajouter au panier */}
            <Button className="w-full mb-4 rounded-2xl bg-pink-500 hover:bg-pink-600">
              <ShoppingCart className="w-4 h-4 mr-2" />
              {t('addToCart')}
            </Button>

            {/* ✅ BOUTON CHATSELLER DANS LA ZONE DE DÉMO */}
            <div className="relative">
              <Button 
                onClick={() => setIsChatModalOpen(true)}
                className="w-full mb-4 rounded-2xl bg-black hover:bg-gray-800 text-white group relative overflow-hidden"
              >
                <MessageSquare className="w-4 h-4 mr-1" />
                {t('demoTalkToSeller')}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-1000"></div>
              </Button>
              
              {/* Indicateur de position */}
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full">
                <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                  ← Position du Widget
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de chat Anna */}
      {isChatModalOpen && (
        <ChatModal 
          isOpen={isChatModalOpen} 
          onClose={() => setIsChatModalOpen(false)} 
        />
      )}
    </div>
  );
};

// ✅ COMPOSANT DEMO MOBILE PROPRE
const MobileDemo = () => {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const { t, language } = useLanguage();

  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-gray-900 rounded-t-3xl p-2">
        <div className="bg-white rounded-3xl overflow-hidden">
          {/* Mobile Status Bar */}
          <div className="bg-black text-white px-4 py-2 text-xs flex justify-between">
            <span>9:41</span>
            <span>📶 🔋100%</span>
          </div>

          {/* Mobile Product Page */}
          <div className="p-4">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 mb-4 aspect-square flex items-center justify-center">
              <div className="w-40 h-20 bg-gradient-to-r from-pink-200 to-purple-200 rounded-xl shadow-lg flex items-center justify-center relative">
                <div className="w-32 h-12 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Mia</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-lg font-bold mb-2">
              {language === 'fr' ? 
                "Mia - Ceinture chauffante" : 
                "Mia - Heating belt"
              }
            </h2>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400 text-sm">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <span className="text-gray-600 ml-2 text-xs">
                {language === 'fr' ? "(127)" : "(127)"}
              </span>
            </div>
            <div className="text-xl font-bold text-green-600 mb-4">
              {language === 'fr' ? "49€" : "$55"}
            </div>
            
            {/* Bouton Ajouter au panier mobile */}
            <Button className="w-full mb-3 text-sm rounded-2xl bg-pink-500 hover:bg-pink-600">
              <ShoppingCart className="w-4 h-4 mr-2" />
              {t('addToCart')}
            </Button>

            {/* ✅ BOUTON CHATSELLER MOBILE */}
            <Button 
              onClick={() => setIsChatModalOpen(true)}
              className="w-full mb-4 text-sm rounded-2xl bg-black hover:bg-gray-800 text-white group"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              💬 {t('demoTalkToSeller')}
            </Button>
          </div>
        </div>
      </div>

      {/* Modal de chat mobile */}
      {isChatModalOpen && (
        <ChatModal 
          isOpen={isChatModalOpen} 
          onClose={() => setIsChatModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default DemoSection;