// src/components/Hero.tsx - STYLE CLUELY AVEC BACKGROUND AMÉLIORÉ
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, MessageSquare, Play } from 'lucide-react';
import ChatModal from './ChatModal';

const Hero = () => {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden hero-gradient-bg">
      {/* ✅ BACKGROUND STYLE CLUELY - VERSION PLUS VISIBLE */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 -z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/60 -z-10" />
      
      {/* ✅ CERCLES DÉCORATIFS BEAUCOUP PLUS VISIBLES */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-blue-200/60 to-purple-200/50 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/60 to-pink-200/50 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-indigo-200/40 to-blue-200/40 rounded-full blur-2xl -z-10 animate-pulse" style={{animationDelay: '2s'}} />
      
      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-blue-200/60 rounded-full bg-white/70 backdrop-blur-sm text-sm font-medium text-blue-700 animate-fade-in shadow-sm">
            <span className="flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Intégrable sur n'importe quelle boutique en ligne
          </div>
          
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in [animation-delay:200ms]">
            Le
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Vendeur IA</span> qui transforme vos visiteurs en clients.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl animate-fade-in [animation-delay:400ms] leading-relaxed">
            Plus qu'un chatbot : un vrai commercial IA qui collecte les commandes dans la conversation et booste vos ventes 24h/24. 
          </p>

          {/* ✅ BOUTONS STYLE CLUELY AVEC BORDURES ARRONDIES */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12 animate-fade-in [animation-delay:600ms]">
            <Button 
              size="lg" 
              className="group rounded-full px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
              asChild
            >
              <a href="https://dashboard.chatseller.app/register">
                Créer mon Vendeur IA
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            {/* ✅ BOUTON NOIR AVEC TEXTE BLANC COMME DEMANDÉ */}
            <Button 
              size="lg" 
              className="group rounded-full px-8 py-4 text-base font-semibold bg-black hover:bg-gray-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="#demo">
              <Play className="mr-2 h-4 w-4" />
              Voir ChatSeller en action
              </a>
            </Button>
          </div>
          
          {/* Social Proof Statistics */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in [animation-delay:500ms]">
            <div className="flex items-center text-sm text-muted-foreground bg-white/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-200/50">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
              <span>Installation en <strong>2 minutes</strong></span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground bg-white/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-200/50">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
              <span><strong>7 jours</strong> d'essai gratuit</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground bg-white/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-200/50">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
              <span><strong>Carte bancaire</strong> non exigée</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* ✅ ANIMATION CONVERSATION AMÉLIORÉE */}
      <div className="relative z-10 mt-8 animate-fade-in [animation-delay:800ms]">
        <div className="max-w-3xl mx-auto px-6">
          <ConversationAnimation />
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

// ✅ ANIMATION CONVERSATION AMÉLIORÉE
const ConversationAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const conversation = [
    { type: 'bot', message: "Bonjour 👋 Je suis Anna, Vendeuse chez Amani. Comment puis-je vous aider ?", delay: 1000 },
    { type: 'user', message: "Bonjour Anna ! J'aimerais savoir comment cette ceinture chauffante soulage les douleurs menstruelles.", delay: 2000 },
    { type: 'bot', message: "Excellente question ! La ceinture chauffante Mia agit de 2 façons : la chaleur liquéfie le sang et facilite son écoulement, et le massage détend les muscles. La combinaison des deux réduit drastiquement la douleur. Voulez-vous que je vous aide à passer commande ?", delay: 3000 },
    { type: 'user', message: "Oui, je vais la prendre.", delay: 4000 },
    { type: 'bot', message: "Excellente décision ☺️ Combien d'exemplaires souhaitez-vous commander ?", delay: 5000 },
    { type: 'user', message: "Juste un seul, pour l'instant.", delay: 6000 }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % conversation.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 p-6 mx-auto max-w-2xl">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">A</span>
          </div>
          <div>
            <div className="font-semibold text-sm">Anna - Assistante d'achat</div>
            <div className="flex items-center text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
              En ligne
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">ChatSeller Demo</div>
      </div>
      
      <div className="space-y-4 h-80 overflow-hidden">
        {conversation.slice(0, currentStep + 1).map((msg, index) => (
          <div 
            key={index}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div className={`max-w-xs px-4 py-3 rounded-2xl ${
              msg.type === 'user' 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                : 'bg-gray-100 text-gray-800 border border-gray-200'
            } shadow-sm`}>
              <div className="text-sm leading-relaxed">{msg.message}</div>
            </div>
          </div>
        ))}
        
        {/* Indicateur de frappe si c'est le tour du bot */}
        {currentStep < conversation.length - 1 && conversation[currentStep + 1]?.type === 'bot' && (
          <div className="flex justify-start">
            <div className="bg-gray-100 border border-gray-200 px-4 py-3 rounded-2xl shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;