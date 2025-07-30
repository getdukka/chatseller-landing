// src/components/PricingSection.tsx - TARIFS CORRIGÉS SELON SPÉCIFICATIONS
import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Zap, 
  Crown, 
  Building, 
  ArrowRight,
  Gift,
  Clock,
  Star,
  Computer
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingCard = ({ 
  plan, 
  price, 
  period, 
  description, 
  features, 
  notIncluded = [], 
  isPopular = false, 
  ctaText, 
  ctaLink, 
  badge,
  savings,
  hasTrial = false
}: {
  plan: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
  badge?: string;
  savings?: string;
  hasTrial?: boolean;
}) => {
  return (
    <div className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
      isPopular 
        ? 'border-primary shadow-lg bg-gradient-to-b from-primary/5 to-white scale-105' 
        : 'border-border bg-card/40 hover:bg-card/80'
    }`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
            <Crown className="w-4 h-4 mr-1" />
            {badge}
          </div>
        </div>
      )}
      
      {/* Trial Badge */}
      {hasTrial && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
            <Gift className="w-3 h-3 mr-1" />
            7 jours gratuits
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{plan}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {period && <span className="text-muted-foreground">/{period}</span>}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
        
        {notIncluded.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-400">{feature}</span>
          </div>
        ))}
      </div>
      
      <Button 
        className={`w-full group ${isPopular ? '' : 'variant-outline'}`}
        size="lg"
      >
        <a href={ctaLink} className="flex items-center justify-center w-full">
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </div>
  );
};

const ComparisonTable = () => {
  const features = [
    { feature: "Conversations par mois", starter: "Illimitées", pro: "Illimitées", enterprise: "Illimitées" },
    { feature: "Agents IA", starter: "1", pro: "3 spécialisés", enterprise: "Illimités" },
    { feature: "Base de connaissance", starter: "10 documents", pro: "Illimitée", enterprise: "Illimitée" },
    { feature: "Chat widget personnalisable", starter: "✓", pro: "✓", enterprise: "✓" },
    { feature: "Analytics de base", starter: "✓", pro: "✓", enterprise: "✓" },
    { feature: "Upsell automatique", starter: "✗", pro: "✓", enterprise: "✓" },
    { feature: "Analytics avancées", starter: "✗", pro: "✓", enterprise: "✓" },
    { feature: "Support prioritaire", starter: "✗", pro: "✓", enterprise: "✓" },
    { feature: "API complète", starter: "✗", pro: "✗", enterprise: "✓" },
    { feature: "White-label", starter: "✗", pro: "✗", enterprise: "✓" },
    { feature: "Formation personnalisée", starter: "✗", pro: "✗", enterprise: "✓" }
  ];

  return (
    <div className="mt-16 overflow-x-auto">
      <table className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-6 py-4 text-left font-semibold">Fonctionnalités détaillées</th>
            <th className="px-6 py-4 text-center font-semibold">Starter</th>
            <th className="px-6 py-4 text-center font-semibold bg-primary/10">Professional</th>
            <th className="px-6 py-4 text-center font-semibold">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((row, index) => (
            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-6 py-4 font-medium">{row.feature}</td>
              <td className="px-6 py-4 text-center text-sm">{row.starter}</td>
              <td className="px-6 py-4 text-center text-sm bg-primary/5 font-medium">{row.pro}</td>
              <td className="px-6 py-4 text-center text-sm">{row.enterprise}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ROICalculator = () => {
  const [visitors, setVisitors] = useState(1000);
  const [currentConversion, setCurrentConversion] = useState(2.5);
  const [averageOrder, setAverageOrder] = useState(85);
  
  const currentRevenue = (visitors * (currentConversion / 100) * averageOrder);
  const newConversion = Math.min(currentConversion * 4, 18); // ChatSeller améliore x4 en moyenne, max 18%
  const newRevenue = (visitors * (newConversion / 100) * averageOrder);
  const additionalRevenue = newRevenue - currentRevenue;
  const monthlyProfit = additionalRevenue - 14; // Coût plan Starter
  
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-6">
        Calculez votre retour sur investissement
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium mb-2">Visiteurs/mois</label>
          <input 
            type="number" 
            value={visitors}
            onChange={(e) => setVisitors(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Conversion actuelle (%)</label>
          <input 
            type="number" 
            value={currentConversion}
            step="0.1"
            onChange={(e) => setCurrentConversion(parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Panier moyen (€)</label>
          <input 
            type="number" 
            value={averageOrder}
            onChange={(e) => setAverageOrder(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h4 className="font-semibold text-gray-600 mb-4">Situation actuelle</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Conversions/mois:</span>
              <span className="font-semibold">{Math.round(visitors * (currentConversion / 100))}</span>
            </div>
            <div className="flex justify-between">
              <span>Revenus/mois:</span>
              <span className="font-semibold">{Math.round(currentRevenue).toLocaleString()}€</span>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
          <h4 className="font-semibold text-green-700 mb-4">Avec ChatSeller</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Nouveau taux conversion:</span>
              <span className="font-semibold text-green-700">{newConversion.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span>Nouveaux revenus/mois:</span>
              <span className="font-semibold text-green-700">{Math.round(newRevenue).toLocaleString()}€</span>
            </div>
            <div className="border-t border-green-200 pt-3">
              <div className="flex justify-between text-lg font-bold text-green-700">
                <span>Profit net supplémentaire:</span>
                <span>+{Math.round(monthlyProfit).toLocaleString()}€/mois</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <div className="text-2xl font-bold text-primary mb-2">
          ROI: {Math.round((monthlyProfit / 14) * 100)}% par mois
        </div>
        <p className="text-muted-foreground text-sm">
          ChatSeller se rembourse en {Math.ceil(14 / (monthlyProfit > 0 ? monthlyProfit : 1))} jour(s)
        </p>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="pricing" className="py-24 relative bg-gradient-to-b from-white to-blue-50">
      {/* Decorative elements */}
      <div className="absolute left-0 bottom-1/4 w-1/4 h-1/3 bg-purple-50/50 rounded-r-3xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-green-200 rounded-full bg-green-50 text-sm font-medium text-green-700 animate-fade-in">
            <Gift className="w-4 h-4 mr-2" />
            Essai gratuit disponible sur le plan Starter
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            Choisissez le plan parfait pour 
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> booster vos ventes</span>
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
            Commencez avec 7 jours gratuits sur le plan Starter. Aucun engagement, annulation en 1 clic.
          </p>
        </div>
        
        {/* ✅ PRICING CARDS CORRIGÉS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in [animation-delay:600ms]">
          <PricingCard
            plan="Starter"
            price="14€"
            period="mois"
            description="Parfait pour débuter avec ChatSeller"
            features={[
              "7 jours d'essai gratuit",
              "1 agent IA intelligent",
              "Conversations illimitées",
              "Base de connaissance (10 documents)",
              "Chat widget personnalisable",
              "Analytics de base",
              "Support email",
              "Installation en 2 minutes",
              "Compatible tous sites"
            ]}
            notIncluded={[
              "Upsell automatique",
              "Analytics avancées",
              "Support prioritaire"
            ]}
            ctaText="Commencer l'essai gratuit"
            ctaLink="https://dashboard.chatseller.app/register?plan=starter"
            badge="7 jours gratuits"
            hasTrial={true}
          />
          
          <PricingCard
            plan="Professional"
            price="29€"
            period="mois"
            description="Pour les e-commerçants sérieux"
            features={[
              "Tout du plan Starter",
              "3 agents IA spécialisés",
              "Base de connaissance illimitée",
              "Upsell automatique intelligent",
              "Analytics avancées & ROI",
              "Support prioritaire",
              "Formation personnalisée",
              "Bilingue (FR/EN)",
              "API accès complet"
            ]}
            isPopular={true}
            ctaText="Démarrer le plan Pro"
            ctaLink="https://dashboard.chatseller.app/register?plan=pro"
            badge="Le plus populaire"
          />
          
          <PricingCard
            plan="Enterprise"
            price="Sur mesure"
            period=""
            description="Pour les grandes entreprises"
            features={[
              "Tout du plan Professional",
              "Agents IA illimités",
              "White-label complet", 
              "API complète & webhooks",
              "Intégrations sur mesure",
              "Support dédié 24/7",
              "Formation équipe complète",
              "SLA garanti 99.9%",
              "Conformité RGPD avancée"
            ]}
            ctaText="Nous contacter"
            ctaLink="mailto:enterprise@chatseller.app"
            badge="Solution sur mesure"
          />
        </div>
        
        {/* Comparison Table Toggle */}
        <div className="text-center mb-8">
          <Button 
            variant="outline" 
            onClick={() => setShowComparison(!showComparison)}
            className="group"
          >
            {showComparison ? 'Masquer' : 'Voir'} la comparaison détaillée
            <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${showComparison ? 'rotate-90' : ''}`} />
          </Button>
        </div>
        
        {/* Comparison Table */}
        {showComparison && (
          <div className="animate-fade-in">
            <ComparisonTable />
          </div>
        )}
        
        {/* ROI Calculator */}
        <div className="mt-20">
          <ROICalculator />
        </div>
        
        {/* Social Proof & Guarantees */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in [animation-delay:800ms]">
          <div className="text-center p-6 bg-white/60 rounded-xl border border-gray-200">
            <Computer className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Essai gratuit Starter</h4>
            <p className="text-sm text-muted-foreground">7 jours pour tester sans risque</p>
          </div>
          
          <div className="text-center p-6 bg-white/60 rounded-xl border border-gray-200">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">4.8/5 étoiles</h4>
            <p className="text-sm text-muted-foreground">Note moyenne de nos testeurs</p>
          </div>
          
          <div className="text-center p-6 bg-white/60 rounded-xl border border-gray-200">
            <Zap className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Installation 2 min</h4>
            <p className="text-sm text-muted-foreground">Prêt à vendre immédiatement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;