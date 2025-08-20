// src/components/ProblemSolutionVisual.tsx - AVEC ANIMATIONS CSS PURES
import React, { useState, useEffect } from 'react';
import { TrendingDown, TrendingUp, ShoppingCart, MessageSquare, Users, ArrowRight, X, Check, Zap, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProblemSolutionVisual = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-white to-gray-50 -mt-20 md:-mt-32 pt-32 md:pt-48">
      <div className="container px-6 md:px-12 mx-auto">
        
        {/* Problem Section - Visual */}
        <div className="text-center max-w-6xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-8 border border-red-200 rounded-full bg-red-50 text-sm font-medium text-red-700 animate-fade-in">
            <TrendingDown className="w-4 h-4 mr-2" />
            Le problème de tous les e-commerçants
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-12 animate-fade-in [animation-delay:200ms]">
            <span className="text-red-600">73% de vos visiteurs</span> partent sans acheter
          </h2>

          {/* Visual Problem Illustration */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Animated Problem Illustration */}
            <div className="animate-fade-in [animation-delay:400ms]">
              <ProblemAnimatedIllustration />
            </div>
            
            {/* Right: Problem Points */}
            <div className="space-y-6 text-left animate-fade-in [animation-delay:600ms]">
              <ProblemPoint 
                icon={<X className="h-6 w-6 text-red-500" />}
                title="Aucune assistance"
                description="Vos clients sont seuls face à vos produits"
              />
              <ProblemPoint 
                icon={<MessageSquare className="h-6 w-6 text-red-500" />}
                title="Questions sans réponses"
                description="68% des questions restent sans réponse"
              />
              <ProblemPoint 
                icon={<TrendingDown className="h-6 w-6 text-red-500" />}
                title="Taux de conversion faible"
                description="Seulement 2-3% de conversion en moyenne"
              />
            </div>
          </div>

          {/* Problem Stats Visual */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in [animation-delay:800ms]">
            <StatCardVisual 
              value="73%" 
              label="partent sans acheter" 
              color="red"
              icon={<TrendingDown className="h-8 w-8" />}
            />
            <StatCardVisual 
              value="68%" 
              label="questions sans réponse" 
              color="red"
              icon={<MessageSquare className="h-8 w-8" />}
            />
            <StatCardVisual 
              value="2-3%" 
              label="taux de conversion moyen" 
              color="red"
              icon={<ShoppingCart className="h-8 w-8" />}
            />
          </div>
        </div>
        
        {/* Transition Arrow */}
        <div className="flex items-center justify-center mb-20">
          <div className="flex items-center bg-white rounded-full shadow-lg p-6 border-4 border-primary animate-pulse">
            <ArrowRight className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        {/* Solution Section - Visual */}
        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 mb-8 border border-green-200 rounded-full bg-green-50 text-sm font-medium text-green-700 animate-fade-in">
            <TrendingUp className="w-4 h-4 mr-2" />
            La solution ChatSeller
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-12 animate-fade-in [animation-delay:200ms]">
            Transformez chaque visiteur en <span className="text-green-600">client</span>
          </h2>

          {/* Visual Solution Illustration */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Solution Points */}
            <div className="space-y-6 text-left order-2 lg:order-1 animate-fade-in [animation-delay:600ms]">
              <SolutionPoint 
                icon={<Check className="h-6 w-6 text-green-500" />}
                title="Vendeur IA disponible 24/7"
                description="Accueille, rassure et conseille chaque visiteur"
              />
              <SolutionPoint 
                icon={<ShoppingCart className="h-6 w-6 text-green-500" />}
                title="Collecte les commandes"
                description="Récupère nom, téléphone, adresse dans la conversation"
              />
              <SolutionPoint 
                icon={<TrendingUp className="h-6 w-6 text-green-500" />}
                title="Ventes additionnelles"
                description="Recommande des produits complémentaires"
              />
            </div>
            
            {/* Right: Animated Solution Illustration */}
            <div className="order-1 lg:order-2 animate-fade-in [animation-delay:400ms]">
              <SolutionAnimatedIllustration />
            </div>
          </div>

          {/* Solution Stats Visual */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in [animation-delay:800ms]">
            <StatCardVisual 
              value="4-6x" 
              label="plus de ventes" 
              color="green"
              icon={<TrendingUp className="h-8 w-8" />}
            />
            <StatCardVisual 
              value="7-18%" 
              label="nouveau taux conversion" 
              color="green"
              icon={<Zap className="h-8 w-8" />}
            />
            <StatCardVisual 
              value="+147%" 
              label="revenus en moyenne" 
              color="green"
              icon={<TrendingUp className="h-8 w-8" />}
            />
          </div>
          
          {/* Final CTA */}
          <div className="animate-fade-in [animation-delay:1000ms]">
            <Button size="lg" className="group rounded-full">
              <a href="https://dashboard.chatseller.app/register" className="flex items-center">
                Tester ChatSeller Gratuitement
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Installation en 2 minutes • Sans carte bancaire • Annulation en 1 clic
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ ANIMATION PROBLÈME : BOUTIQUE CLASSIQUE SANS ASSISTANCE
const ProblemAnimatedIllustration = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 overflow-hidden shadow-lg">
      {/* Site e-commerce basique */}
      <div className="bg-white rounded-lg p-4 h-full shadow-inner relative">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xs text-gray-400 flex items-center">
            <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
            Ma-Boutique.com
          </div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>
        
        {/* Produit - Ceinture chauffante avec plus de détails */}
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 h-32 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-purple-50/50"></div>
          <div className="relative z-10 w-20 h-12 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-pink-700 text-xs font-bold">Mia</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse shadow-sm"></div>
          </div>
          {/* Effets visuels de chaleur */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1">
              <div className="w-1 h-3 bg-red-300 rounded-full animate-pulse opacity-60"></div>
              <div className="w-1 h-4 bg-orange-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1 h-3 bg-red-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse" style={{animationDelay: '0.1s'}}></div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-semibold text-green-600">49€</div>
          <div className="bg-pink-500 text-white px-3 py-1 rounded text-xs hover:bg-pink-600 transition-colors cursor-pointer">
            Acheter
          </div>
        </div>

        {/* ✅ ANIMATION DU PROBLÈME AMÉLIORÉE */}
        <div className="absolute bottom-4 left-4 right-4">
          {step === 0 && (
            <div className="bg-blue-100 border-l-4 border-blue-400 rounded p-3 animate-bounce shadow-sm">
              <div className="flex items-center text-xs text-blue-700">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-2 animate-pulse">
                  👤
                </div>
                <span className="font-medium">Nouveau visiteur arrive...</span>
              </div>
            </div>
          )}
          
          {step === 1 && (
            <div className="bg-orange-100 border-l-4 border-orange-400 rounded p-3 animate-pulse shadow-sm">
              <div className="text-xs text-orange-700">
                <div className="flex items-center mb-1">
                  <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center mr-2">
                    🤔
                  </div>
                  <span className="font-medium">Questions sans réponses</span>
                </div>
                <div className="text-xs opacity-80">"Est-ce que ça marche vraiment ?"</div>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="bg-red-100 border-l-4 border-red-400 rounded p-3 animate-pulse shadow-sm">
              <div className="text-xs text-red-700">
                <div className="flex items-center mb-1">
                  <div className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center mr-2">
                    😟
                  </div>
                  <span className="font-medium">Doutes et hésitations</span>
                </div>
                <div className="text-xs opacity-80">"Personne pour m'aider..."</div>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="bg-gray-100 border-l-4 border-gray-400 rounded p-3 shadow-sm">
              <div className="text-xs text-gray-600">
                <div className="flex items-center mb-1">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                    👋
                  </div>
                  <span className="font-medium">Abandon du panier</span>
                </div>
                <div className="text-xs opacity-80">Visiteur parti sans acheter 😞</div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Flèche de sortie améliorée */}
      <div className="absolute top-1/2 -right-8 text-red-500 animate-bounce">
        <div className="flex items-center">
          <ArrowRight className="h-6 w-6" />
          <div className="ml-2">
            <div className="text-xs text-red-600 font-bold whitespace-nowrap">73% partent</div>
            <div className="text-xs text-red-500 whitespace-nowrap">sans acheter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ ANIMATION SOLUTION : BOUTIQUE AVEC CHATSELLER
const SolutionAnimatedIllustration = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 h-96 overflow-hidden shadow-lg">
      {/* Site avec ChatSeller */}
      <div className="bg-white rounded-lg p-4 h-full shadow-lg relative">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xs text-gray-600 flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Ma-Boutique.com
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
              <Check className="h-4 w-4 text-white" />
            </div>
            <span className="text-xs text-green-600 font-medium">ChatSeller</span>
          </div>
        </div>
        
        {/* Produit amélioré */}
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 h-20 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-purple-50/50"></div>
          <div className="relative z-10 w-16 h-10 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-pink-700 text-xs font-bold">Mia</span>
          </div>
          {/* Effets visuels de qualité */}
          <div className="absolute top-1 right-2">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full mx-0.5"></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-xs font-semibold mb-2">Ceinture Chauffante Mia</div>
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm font-semibold text-green-600">49€</div>
          <div className="bg-pink-500 text-white px-3 py-1 rounded text-xs hover:bg-pink-600 transition-colors">
            Acheter
          </div>
        </div>

        {/* ✅ BOUTON CHATSELLER AMÉLIORÉ */}
        <div className="bg-gradient-to-r from-gray-800 to-black text-white px-3 py-2 rounded-lg mb-3 text-center cursor-pointer hover:from-gray-700 hover:to-gray-900 transition-all shadow-md">
          <div className="text-xs flex items-center justify-center">
            <MessageSquare className="w-3 h-3 mr-1" />
            💬 Parler à la vendeuse
          </div>
        </div>

        {/* ✅ ANIMATION DE LA SOLUTION AMÉLIORÉE */}
        <div className="absolute bottom-4 left-4 right-4">
          {step === 0 && (
            <div className="bg-blue-100 border-l-4 border-blue-400 rounded p-3 animate-pulse shadow-sm">
              <div className="flex items-center text-xs text-blue-700">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-2">
                  🤖
                </div>
                <div>
                  <div className="font-medium">Anna accueille le visiteur</div>
                  <div className="text-xs opacity-80">Réponse instantanée</div>
                </div>
              </div>
            </div>
          )}
          
          {step === 1 && (
            <div className="bg-purple-100 border-l-4 border-purple-400 rounded p-3 shadow-sm">
              <div className="text-xs text-purple-700">
                <div className="flex items-center mb-1">
                  <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mr-2">
                    💬
                  </div>
                  <span className="font-medium">Conseil expert</span>
                </div>
                <div className="text-xs opacity-80">"Cette ceinture soulage en 5 min !"</div>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="bg-yellow-100 border-l-4 border-yellow-400 rounded p-3 shadow-sm">
              <div className="text-xs text-yellow-700">
                <div className="flex items-center mb-1">
                  <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center mr-2">
                    📝
                  </div>
                  <span className="font-medium">Collecte informations</span>
                </div>
                <div className="text-xs opacity-80">Nom, téléphone, adresse</div>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="bg-green-100 border-l-4 border-green-400 rounded p-3 animate-pulse shadow-sm">
              <div className="text-xs text-green-700">
                <div className="flex items-center mb-1">
                  <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center mr-2">
                    ✅
                  </div>
                  <span className="font-medium">Commande finalisée !</span>
                </div>
                <div className="text-xs opacity-80">Client satisfait 😊</div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Flèche de conversion améliorée */}
      <div className="absolute top-1/2 -right-8 text-green-500 animate-bounce">
        <div className="flex items-center">
          <Check className="h-6 w-6" />
          <div className="ml-2">
            <div className="text-xs text-green-600 font-bold whitespace-nowrap">+147% ventes</div>
            <div className="text-xs text-green-500 whitespace-nowrap">conversion</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composants helper inchangés
const ProblemPoint = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border border-red-100 hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const SolutionPoint = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border border-green-100 hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const StatCardVisual = ({ value, label, color, icon }: { value: string; label: string; color: 'red' | 'green'; icon: React.ReactNode }) => {
  const colorClasses = color === 'red' 
    ? 'border-red-200 bg-red-50 text-red-700' 
    : 'border-green-200 bg-green-50 text-green-700';
  
  return (
    <div className={`p-8 rounded-2xl border ${colorClasses} text-center relative overflow-hidden hover:shadow-lg transition-shadow`}>
      <div className="absolute top-4 right-4 opacity-20">
        {icon}
      </div>
      <div className="text-4xl font-bold mb-2 animate-pulse">{value}</div>
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default ProblemSolutionVisual;