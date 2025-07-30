// src/components/Hero.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import ChatModal from './ChatModal';

const Hero = () => {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-visible">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-white -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-indigo-200/20 rounded-full blur-2xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-blue-100 rounded-full bg-blue-50 text-xs font-medium text-blue-600 animate-fade-in">
            <span className="flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Intégrable sur n'importe quelle boutique en ligne
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in [animation-delay:200ms]">
            Le
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Vendeur IA</span> qui transforme vos visiteurs en clients.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl animate-fade-in [animation-delay:400ms]">
            ChatSeller est un Agent IA qui discute avec vos clients, répond intelligemment à leurs questions et collecte leurs commandes, 24h/24. 
          </p>
          
          {/* Social Proof Statistics */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in [animation-delay:500ms]">
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
              <span>Installation en <strong>2 minutes</strong></span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
              <span><strong>7 jours</strong> d'essai gratuit</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
              <span><strong>Carte bancaire</strong> non exigée</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12 animate-fade-in [animation-delay:600ms]">
            <Button size="lg" className="group rounded-2xl" asChild>
              <a href="https://dashboard.chatseller.app/register">
                Tester Chatseller maintenant
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-2xl"
              onClick={() => setIsChatModalOpen(true)}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Parler à un conseiller
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animation d'échange IA-Client au lieu de l'image statique */}
      <div className="relative z-10 mt-2 animate-fade-in [animation-delay:800ms]">
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

// Composant d'animation de conversation
const ConversationAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const conversation = [
    { type: 'bot', message: "Bonjour ! Je suis Mia, votre conseillère IA. Comment puis-je vous aider aujourd'hui ? 👋", delay: 1000 },
    { type: 'user', message: "Salut ! Je cherche un casque sans fil de qualité pour le sport.", delay: 2000 },
    { type: 'bot', message: "Parfait ! Pour le sport, je recommande notre casque SportPro avec résistance IPX7. Quel est votre budget ?", delay: 3000 },
    { type: 'user', message: "Autour de 80-100€ maximum.", delay: 4000 },
    { type: 'bot', message: "Excellent ! Le SportPro à 89€ est parfait. Autonomie 12h, étanche, très confortable. Voulez-vous que je prépare votre commande ?", delay: 5000 },
    { type: 'user', message: "Oui, allons-y !", delay: 6000 }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % conversation.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mx-auto max-w-2xl">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">M</span>
          </div>
          <div>
            <div className="font-semibold text-sm">Mia - Conseillère IA</div>
            <div className="flex items-center text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
              En ligne
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-400">ChatSeller Demo</div>
      </div>
      
      <div className="space-y-4 h-80 overflow-hidden">
        {conversation.slice(0, currentStep + 1).map((msg, index) => (
          <div 
            key={index}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div className={`max-w-xs px-4 py-2 rounded-2xl ${
              msg.type === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              <div className="text-sm">{msg.message}</div>
            </div>
          </div>
        ))}
        
        {/* Indicateur de frappe si c'est le tour du bot */}
        {currentStep < conversation.length - 1 && conversation[currentStep + 1]?.type === 'bot' && (
          <div className="flex justify-start">
            <div className="bg-gray-100 px-4 py-2 rounded-2xl">
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