// src/components/Hero.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-transparent -z-10" />
      
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
            ChatSeller est un Agent IA Commercial qui discute avec vos clients, répond intelligemment à leurs questions et collecte leurs commandes, 24h/24. 
          </p>
          
          {/* Social Proof Statistics */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in [animation-delay:500ms]">
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
              <span>Installation en <strong>2 minutes</strong></span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
              <span><strong>3 jours</strong> d'essai gratuit</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
              <span><strong>Carte bancaire</strong> non exigée</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in [animation-delay:600ms]">
            <Button size="lg" className="group" asChild>
              <a href="https://dashboard.chatseller.app/register">
                Tester Chatseller maintenant
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#demo">
                Voir Chatseller en action
              </a>
            </Button>
          </div>
          
          {/* Ajouter ici une capture de l'interface de chat de ChatSeller, avec Chatseller en action, sans oublier de laisser un espace haut pour ne pas trop coller aux boutons CTA */}

        </div>
      </div>
    </section>
  );
};

export default Hero;