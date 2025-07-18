// src/components/ProblemSolution.tsx
import React from 'react';
import { TrendingDown, TrendingUp, ShoppingCart, MessageSquare, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StatCard = ({ 
  value, 
  label, 
  trend, 
  type = 'problem' 
}: { 
  value: string;
  label: string;
  trend?: string;
  type?: 'problem' | 'solution';
}) => {
  const isProblematic = type === 'problem';
  
  return (
    <div className={`p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-soft ${
      isProblematic 
        ? 'border-red-200 bg-red-50/40 hover:bg-red-50/80' 
        : 'border-green-200 bg-green-50/40 hover:bg-green-50/80'
    }`}>
      <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${
        isProblematic 
          ? 'bg-red-100 text-red-600' 
          : 'bg-green-100 text-green-600'
      }`}>
        {isProblematic ? <TrendingDown className="h-6 w-6" /> : <TrendingUp className="h-6 w-6" />}
      </div>
      <div className={`text-3xl font-bold mb-2 ${
        isProblematic ? 'text-red-700' : 'text-green-700'
      }`}>
        {value}
      </div>
      <p className="text-sm font-medium text-gray-700 mb-1">{label}</p>
      {trend && (
        <p className={`text-xs ${
          isProblematic ? 'text-red-600' : 'text-green-600'
        }`}>
          {trend}
        </p>
      )}
    </div>
  );
};

const ProblemSolution = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-white to-gray-50 -mt-20 md:-mt-32 pt-32 md:pt-48">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-red-50/30 rounded-r-3xl -z-10" />
      <div className="absolute right-0 bottom-1/4 w-1/4 h-1/3 bg-green-50/30 rounded-l-3xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        {/* Problem Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-red-200 rounded-full bg-red-50 text-sm font-medium text-red-700 animate-fade-in">
            <TrendingDown className="w-4 h-4 mr-2" />
            La réalité du e-commerce traditionnel
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            <span className="text-red-600">7 clients sur 10</span> quittent votre boutique sans acheter
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in [animation-delay:400ms]">
            Parce qu’ils ont des questions, des doutes, et qu’il n’y a personne pour les aider et les rassurer.
          </p>
          
          {/* Problem Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in [animation-delay:600ms]">
            <StatCard 
              value="73%" 
              label="Des visiteurs partent sans acheter" 
              trend="selon une étude de Shopify" 
              type="problem"
            />
            <StatCard 
              value="2-3%" 
              label="Taux de conversion moyen" 
              trend="Sur la majorité des sites e-commerce" 
              type="problem"
            />
            <StatCard 
              value="68%" 
              label="Questions restées sans réponse" 
              trend="Parce qu'il n'y a pas de vendeur en ligne" 
              type="problem"
            />
          </div>
          
          {/* Problem Points */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 animate-fade-in [animation-delay:800ms]">
            <div className="flex items-start space-x-4 p-6 bg-white/60 rounded-xl border border-red-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-100 text-red-600 flex-shrink-0 mt-1">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-2">Aucune assistance en ligne</h3>
                <p className="text-gray-600">Vos visiteurs sont seuls face à vos produits. Personne pour les conseiller ou les rassurer.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white/60 rounded-xl border border-red-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-100 text-red-600 flex-shrink-0 mt-1">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-2">Questions sans réponses</h3>
                <p className="text-gray-600">Les clients ont des questions. Tant qu’on ne leur répond pas, ils hésitent et abandonnent leur achat.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white/60 rounded-xl border border-red-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-100 text-red-600 flex-shrink-0 mt-1">
                <Users className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-2">Expérience impersonnelle</h3>
                <p className="text-gray-600">Beaucoup de clients préfèrent parler à quelqu’un avant d’acheter. Votre boutique actuelle ne leur offre pas cette option.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white/60 rounded-xl border border-red-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-100 text-red-600 flex-shrink-0 mt-1">
                <TrendingDown className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-2">Revenus perdus chaque jour</h3>
                <p className="text-gray-600">Chaque visiteur qui part sans acheter, c’est de l’argent qui s’envole. Sur 1000 visiteurs, vous perdez en moyenne 730 ventes.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Transition Divider */}
        <div className="flex items-center justify-center mb-20">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
          <div className="mx-8 p-4 bg-white rounded-full border-2 border-primary shadow-lg">
            <ArrowRight className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
        </div>
        
        {/* Solution Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-green-200 rounded-full bg-green-50 text-sm font-medium text-green-700 animate-fade-in">
            <TrendingUp className="w-4 h-4 mr-2" />
            La solution ChatSeller
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            Transformez chaque visiteur en <span className="text-green-600">client potentiel</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in [animation-delay:400ms]">
            Avec ChatSeller, vos clients vivent la même expérience qu’en boutique physique :
ils sont accueillis, conseillés, rassurés, et passent commande directement… sans jamais rester seuls.
          </p>
          
          {/* Solution Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in [animation-delay:600ms]">
            <StatCard 
              value="4 à 6 fois" 
              label="Plus de ventes en moyenne" 
              trend="constaté chez nos clients" 
              type="solution"
            />
            <StatCard 
              value="7-18%" 
              label="Nouveau taux de conversion" 
              trend="Avec ChatSeller" 
              type="solution"
            />
            <StatCard 
              value="Jusqu'à 10 fois" 
              label="Plus de revenus par mois" 
              trend="Pour 1000 visiteurs sur le site" 
              type="solution"
            />
          </div>
          
          {/* Solution Benefits */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 animate-fade-in [animation-delay:800ms]">
            <div className="flex items-start space-x-4 p-6 bg-white/60 rounded-xl border border-green-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 flex-shrink-0 mt-1">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-2">Agent IA conversationnel</h3>
                <p className="text-gray-600">Vos clients discutent avec votre vendeur IA, comme avec un vrai vendeur qui connaît vos produits. </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white/60 rounded-xl border border-green-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 flex-shrink-0 mt-1">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-2">Prise de commande en direct</h3>
                <p className="text-gray-600">Nom, adresse, téléphone, produit : tout est récupéré directement dans la conversation. Plus besoin de formulaires.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white/60 rounded-xl border border-green-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 flex-shrink-0 mt-1">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-2">Ventes additionnelles automatiques</h3>
                <p className="text-gray-600">Votre vendeur IA suggère des produits en plus pour booster le panier moyen et augmenter vos ventes.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white/60 rounded-xl border border-green-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 flex-shrink-0 mt-1">
                <Users className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-2">Disponible 24h/24, 7j/7</h3>
                <p className="text-gray-600">Vos clients ont un vendeur pro à leur disposition, même la nuit, ce qui augmente leur satisfaction et vos ventes.</p>
              </div>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="animate-fade-in [animation-delay:1000ms]">
            <Button size="lg" className="group">
              <a href="https://dashboard.chatseller.app/register" className="flex items-center">
                Tester l'expérience Chatseller
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Installation en 2 minutes • Essai gratuit de 3 jours • Aucune carte bancaire requise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;