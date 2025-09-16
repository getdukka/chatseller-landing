// src/components/NewClosingSection.tsx
import React from 'react';
import { ArrowRight, Play, Sparkles, TrendingUp, CheckCircle2, Clock, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const NewClosingSection = () => {
  const { t } = useLanguage();

  // Tracking pour le CTA final
  const handleFinalCTA = (type: 'primary' | 'secondary') => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'click_final_cta',
        cta_type: type,
        section: 'closing'
      });
    }
  };

  return (
    <section className="py-24 relative bg-gradient-to-b from-blue-50 to-purple-100 overflow-hidden">
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-purple-50/30 to-pink-100/50 -z-10" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/20 rounded-full blur-3xl animate-pulse -z-10" style={{animationDelay: '1s'}} />
      
      <div className="container px-6 md:px-12 mx-auto relative z-10">
        
        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge with sparkles */}
          <div className="inline-flex items-center px-4 py-2 mb-8 border border-purple-200/60 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 text-sm font-medium text-purple-700 animate-fade-in shadow-sm">
            <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
            <span className="mr-2">Marques beauté</span>
            <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
              +289% conversions
            </span>
          </div>
          
          {/* Main headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in [animation-delay:200ms] leading-tight">
            {t('closingTitle')}
          </h2>
          
          {/* Subtext with social proof */}
          <p className="text-xl text-gray-700 mb-8 animate-fade-in [animation-delay:400ms] leading-relaxed max-w-3xl mx-auto">
            Plus de <span className="font-bold text-purple-600">47 marques beauté</span> ont déjà transformé leurs visiteurs en clients avec ChatSeller. 
            Rejoignez-les et <span className="font-bold text-green-600">multipliez vos ventes dès aujourd'hui</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-12 animate-fade-in [animation-delay:600ms]">
            <Button 
              size="lg" 
              className="group rounded-full px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" 
              onClick={() => handleFinalCTA('primary')}
              asChild
            >
              <a href="https://dashboard.chatseller.app/register">
                {t('closingCTAPrimary')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="group rounded-full px-8 py-4 text-lg font-semibold border-2 border-gray-300 hover:border-gray-400 hover:bg-white/80 transition-all duration-300 backdrop-blur-sm"
              onClick={() => {
                handleFinalCTA('secondary');
                document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="mr-2 h-5 w-5" />
              {t('closingCTASecondary')}
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in [animation-delay:500ms]">
            <div className="flex items-center text-sm text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
              <span>{t('newHeroTrialPeriod')}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
              <Clock className="w-4 h-4 text-blue-500 mr-2" />
              <span>Installation en 2 minutes</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-purple-500 mr-2" />
              <span>Aucune carte bancaire</span>
            </div>
          </div>

          {/* Final visual */}
          <div className="animate-fade-in [animation-delay:800ms]">
            <ClosingVisual />
          </div>

          {/* Last social proof */}
          <div className="mt-16 animate-fade-in [animation-delay:1000ms]">
            <FinalSocialProof />
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant visuel final
const ClosingVisual = () => {
  return (
    <div className="relative max-w-3xl mx-auto">
      
      {/* Mockup boutique beauté avec widget */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        
        {/* Browser bar */}
        <div className="bg-gray-100 px-4 py-3 border-b flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 mx-4">
            ma-boutique-beaute.com
          </div>
        </div>

        {/* Contenu boutique */}
        <div className="p-6">
          
          {/* Header boutique */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Belle Éclat Cosmétiques</h3>
              <p className="text-sm text-gray-600">Soins naturels & maquillage bio</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 font-medium">Vendeur IA actif</span>
            </div>
          </div>

          {/* Produits en grille */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { name: "Sérum Vitamine C", price: "45€", color: "from-orange-200 to-yellow-200" },
              { name: "Crème Nuit Bio", price: "52€", color: "from-purple-200 to-pink-200" },
              { name: "Masque Hydratant", price: "38€", color: "from-blue-200 to-cyan-200" }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-3 text-center">
                <div className={`h-16 bg-gradient-to-br ${product.color} rounded-lg mb-2`}></div>
                <div className="text-xs font-medium text-gray-800">{product.name}</div>
                <div className="text-sm font-bold text-green-600">{product.price}</div>
              </div>
            ))}
          </div>

          {/* Widget ChatSeller en conversation */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200 relative overflow-hidden">
            {/* Effet brillance */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/40 to-transparent rounded-bl-full"></div>
            
            <div className="relative">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AI</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-purple-800">Sophie - Conseillère Beauté IA</div>
                  <div className="text-xs text-purple-600">En ligne • Experte soins visage</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-sm text-gray-800">
                  "Bonjour ! 👋 Je vois que vous vous intéressez à nos soins. Pour vous conseiller au mieux, quel est votre type de peau ?"
                </p>
                
                <div className="mt-3 space-y-2">
                  <button className="bg-purple-100 hover:bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs transition-colors">
                    Peau sèche
                  </button>
                  <button className="bg-purple-100 hover:bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs transition-colors ml-2">
                    Peau mixte
                  </button>
                  <button className="bg-purple-100 hover:bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs transition-colors ml-2">
                    Peau grasse
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Métriques flottantes */}
      <div className="absolute -right-4 top-1/3 animate-bounce">
        <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
          +289% conversions
        </div>
      </div>
      
      <div className="absolute -left-4 bottom-1/3 animate-bounce" style={{animationDelay: '0.5s'}}>
        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
          24/7 conseil expert
        </div>
      </div>

      <div className="absolute -top-4 left-1/3 animate-bounce" style={{animationDelay: '1s'}}>
        <div className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
          ROI +2,180%
        </div>
      </div>
    </div>
  );
};

// Social proof final
const FinalSocialProof = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">47+</div>
          <div className="text-sm text-gray-600">Marques beauté clientes</div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">+289%</div>
          <div className="text-sm text-gray-600">Conversions en moyenne</div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">2 min</div>
          <div className="text-sm text-gray-600">Installation moyenne</div>
        </div>
      </div>
      
      <div className="text-center mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
          <Users className="w-4 h-4" />
          <span>Rejoignez les marques qui transforment déjà leurs visiteurs en clients</span>
        </div>
      </div>
    </div>
  );
};

export default NewClosingSection;