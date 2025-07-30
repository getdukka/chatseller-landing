// src/components/DemoSection.tsx - VRAIE EXPÉRIENCE CHATSELLER
import React, { useState } from 'react';
import { ArrowRight, MessageSquare, ShoppingCart, Star, Smartphone, Monitor, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import ChatModal from './ChatModal';

const DemoSection = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [activeView, setActiveView] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-blue-200 rounded-full bg-blue-50 text-sm font-medium text-blue-700 animate-fade-in">
            <MessageSquare className="w-4 h-4 mr-2" />
            {t('demo')} en temps réel
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            {t('demoTitle')}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in [animation-delay:400ms]">
            {t('demoSubtitle')}
          </p>
          
          <p className="text-muted-foreground mb-8 animate-fade-in [animation-delay:500ms]">
            {t('demoTip')}
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
          {activeView === 'desktop' ? <DesktopDemo /> : <MobileDemo />}
        </div>
        
        {/* Call to Action */}
        <div className="text-center animate-fade-in [animation-delay:1000ms]">
          <Button 
            size="lg" 
            className="group rounded-2xl mb-4"
            onClick={() => setIsChatModalOpen(true)}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Tester le Vendeur IA maintenant
          </Button>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Button size="lg" className="rounded-2xl" asChild>
              <a href="https://dashboard.chatseller.app/register">
                Créer mon Vendeur IA
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* Chat Modal */}
        <ChatModal 
          isOpen={isChatModalOpen} 
          onClose={() => setIsChatModalOpen(false)} 
        />
      </div>
    </section>
  );
};

// ✅ COMPOSANT DEMO DESKTOP AVEC VRAIE EXPÉRIENCE
const DesktopDemo = () => {
  const [showChat, setShowChat] = useState(false);

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
          https://amani-femme.com/produit/mia-ceinture-chauffante
        </div>
      </div>

      {/* Product Page */}
      <div className="p-8 relative">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8 aspect-square flex items-center justify-center">
            <div className="w-64 h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-xl shadow-lg flex items-center justify-center relative">
              {/* Ceinture chauffante stylisée */}
              <div className="w-48 h-16 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center shadow-inner">
                <span className="text-white font-bold text-lg">Mia</span>
                <div className="absolute top-2 right-4 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-bold mb-4">Mia - Ceinture Chauffante</h1>
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
                <span className="text-sm text-gray-600">Soulage les règles douloureuses</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Autonomie 4h</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Solution 100% naturelle</span>
              </div>
            </div>

            {/* ✅ BOUTON ROSE POUR AJOUTER AU PANIER */}
            <Button className="w-full mb-4 rounded-2xl bg-pink-500 hover:bg-pink-600">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Ajouter au panier
            </Button>

            {/* ✅ BOUTON NOIR CHATSELLER COMME DEMANDÉ */}
            <Button 
              onClick={() => setShowChat(!showChat)}
              className="w-full mb-4 rounded-2xl bg-black hover:bg-gray-800 text-white"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              💬 Parler à la vendeuse
            </Button>
          </div>
        </div>

        {/* ✅ CHAT WIDGET CHATSELLER */}
        {showChat && (
          <div className="fixed bottom-6 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in z-50">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">A</span>
                  </div>
                  <div>
                    <div className="font-semibold">Anna - Vendeuse IA</div>
                    <div className="text-xs opacity-90 flex items-center">
                      <div className="w-2 h-2 bg-green-300 rounded-full mr-1 animate-pulse"></div>
                      En ligne • Répond en 2 sec
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setShowChat(false)}
                  className="text-white hover:bg-white/20 rounded p-1"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-4 h-64 overflow-y-auto">
              <ChatPreview />
            </div>
            
            <div className="p-4 border-t bg-gray-50">
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Tapez votre message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ✅ COMPOSANT DEMO MOBILE AVEC VRAIE EXPÉRIENCE
const MobileDemo = () => {
  const [showChat, setShowChat] = useState(false);

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
            
            <h2 className="text-lg font-bold mb-2">Mia - Ceinture chauffante</h2>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400 text-sm">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <span className="text-gray-600 ml-2 text-xs">(127)</span>
            </div>
            <div className="text-xl font-bold text-green-600 mb-4">49€</div>
            
            {/* ✅ BOUTON ROSE AJOUTER AU PANIER */}
            <Button className="w-full mb-3 text-sm rounded-2xl bg-pink-500 hover:bg-pink-600">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Ajouter au panier
            </Button>

            {/* ✅ BOUTON NOIR CHATSELLER */}
            <Button 
              onClick={() => setShowChat(!showChat)}
              className="w-full mb-4 text-sm rounded-2xl bg-black hover:bg-gray-800 text-white"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              💬 Parler à la vendeuse
            </Button>
          </div>

          {/* ✅ INTERFACE CHAT MOBILE PLEIN ÉCRAN */}
          {showChat && (
            <div className="fixed inset-0 bg-white z-50">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">A</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Anna</div>
                      <div className="text-xs opacity-90 flex items-center">
                        <div className="w-2 h-2 bg-green-300 rounded-full mr-1 animate-pulse"></div>
                        En ligne
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowChat(false)} 
                    className="text-white bg-white/20 rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>
              </div>
              
              <div className="p-4 h-80 overflow-y-auto">
                <ChatPreview />
              </div>
              
              <div className="p-4 border-t absolute bottom-0 left-0 right-0 bg-white">
                <div className="flex space-x-2">
                  <input 
                    type="text" 
                    placeholder="Tapez votre message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm"
                  />
                  <button className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ✅ PRÉVISUALISATION CHAT AVEC CEINTURE CHAUFFANTE
const ChatPreview = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-start">
        <div className="bg-gray-100 px-3 py-2 rounded-2xl max-w-xs">
          <div className="text-sm">Bonjour ! Je vois que vous vous intéressez à notre ceinture chauffante Mia. Comment puis-je vous aider ? 😊</div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-2 rounded-2xl max-w-xs">
          <div className="text-sm">Bonjour ! Est-ce que ça soulage vraiment les douleurs menstruelles ?</div>
        </div>
      </div>
      
      <div className="flex justify-start">
        <div className="bg-gray-100 px-3 py-2 rounded-2xl max-w-xs">
          <div className="text-sm">Absolument ! La ceinture Mia utilise la thermothérapie pour détendre les muscles et réduire l'inflammation. Elle chauffe en 30 secondes et offre 4h d'autonomie. Voulez-vous que je vous aide à passer commande ?</div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          Cliquez sur "Tester maintenant" pour continuer cette conversation ! 👆
        </div>
      </div>
    </div>
  );
};

export default DemoSection;