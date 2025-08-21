// src/components/PricingSection.tsx - TRADUCTION COMPLÈTE
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
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { language } = useLanguage();

  const features = [
    { 
      feature: language === 'fr' ? "Crédits messages par mois" : "Message credits per month", 
      starter: "1000", 
      pro: "5000", 
      enterprise: language === 'fr' ? "Illimitées" : "Unlimited" 
    },
    { 
      feature: language === 'fr' ? "Vendeurs IA" : "AI Sales Agents", 
      starter: "1", 
      pro: language === 'fr' ? "3 spécialisés" : "3 specialized", 
      enterprise: language === 'fr' ? "Illimités" : "Unlimited" 
    },
    { 
      feature: language === 'fr' ? "Base de connaissance" : "Knowledge base", 
      starter: language === 'fr' ? "10 documents" : "10 documents", 
      pro: language === 'fr' ? "50 documents" : "50 documents", 
      enterprise: language === 'fr' ? "Illimitée" : "Unlimited" 
    },
    { 
      feature: language === 'fr' ? "Chat widget personnalisable" : "Customizable chat widget", 
      starter: "✓", 
      pro: "✓", 
      enterprise: "✓" 
    },
    { 
      feature: language === 'fr' ? "Analytics de base" : "Basic analytics", 
      starter: "✓", 
      pro: "✓", 
      enterprise: "✓" 
    },
    { 
      feature: language === 'fr' ? "Upsell automatique" : "Automatic upsell", 
      starter: "✗", 
      pro: "✓", 
      enterprise: "✓" 
    },
    { 
      feature: language === 'fr' ? "Analytics avancées" : "Advanced analytics", 
      starter: "✗", 
      pro: "✓", 
      enterprise: "✓" 
    },
    { 
      feature: language === 'fr' ? "Support prioritaire" : "Priority support", 
      starter: "✗", 
      pro: "✓", 
      enterprise: "✓" 
    },
    { 
      feature: language === 'fr' ? "API complète" : "Full API", 
      starter: "✗", 
      pro: "✗", 
      enterprise: "✓" 
    },
    { 
      feature: "White-label", 
      starter: "✗", 
      pro: "✗", 
      enterprise: "✓" 
    },
    { 
      feature: language === 'fr' ? "Formation personnalisée" : "Custom training", 
      starter: "✗", 
      pro: "✗", 
      enterprise: "✓" 
    }
  ];

  return (
    <div className="mt-16 overflow-x-auto">
      <table className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-6 py-4 text-left font-semibold">
              {language === 'fr' ? 'Fonctionnalités détaillées' : 'Detailed features'}
            </th>
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

// ✅ ROI CALCULATOR AVEC TRADUCTION CORRIGÉE
const ROICalculator = () => {
  const { t, language } = useLanguage();
  const [visitors, setVisitors] = useState(1000);
  const [currentConversion, setCurrentConversion] = useState(2.5);
  const [averageOrder, setAverageOrder] = useState(85);
  
  const currentRevenue = (visitors * (currentConversion / 100) * averageOrder);
  const newConversion = Math.min(currentConversion * 4, 18); // ChatSeller améliore x4 en moyenne, max 18%
  const newRevenue = (visitors * (newConversion / 100) * averageOrder);
  const additionalRevenue = newRevenue - currentRevenue;
  const monthlyProfit = additionalRevenue - (language === 'fr' ? 19 : 20); // Coût plan Starter
  const roiPercent = Math.round((monthlyProfit / (language === 'fr' ? 19 : 20)) * 100);
  const paybackDays = Math.ceil((language === 'fr' ? 19 : 20) / (monthlyProfit > 0 ? monthlyProfit / 30 : 1));
  
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-6">
        {t('roiCalculatorTitle')}
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium mb-2">{t('monthlyVisitors')}</label>
          <input 
            type="number" 
            value={visitors}
            onChange={(e) => setVisitors(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('currentConversion')}</label>
          <input 
            type="number" 
            value={currentConversion}
            step="0.1"
            onChange={(e) => setCurrentConversion(parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('averageCart')}</label>
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
          <h4 className="font-semibold text-gray-600 mb-4">{t('currentSituation')}</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>{t('conversionsMonth')}</span>
              <span className="font-semibold">{Math.round(visitors * (currentConversion / 100))}</span>
            </div>
            <div className="flex justify-between">
              <span>{t('revenueMonth')}</span>
              <span className="font-semibold">
                {language === 'fr' ? 
                  `${Math.round(currentRevenue).toLocaleString()}€` : 
                  `$${Math.round(currentRevenue).toLocaleString()}`
                }
              </span>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
          <h4 className="font-semibold text-green-700 mb-4">{t('withChatseller')}</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>{t('newConversionRate')}</span>
              <span className="font-semibold text-green-700">{newConversion.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span>{t('newRevenue')}</span>
              <span className="font-semibold text-green-700">
                {language === 'fr' ? 
                  `${Math.round(newRevenue).toLocaleString()}€` : 
                  `$${Math.round(newRevenue).toLocaleString()}`
                }
              </span>
            </div>
            <div className="border-t border-green-200 pt-3">
              <div className="flex justify-between text-lg font-bold text-green-700">
                <span>{t('additionalProfit')}</span>
                <span>
                  {language === 'fr' ? 
                    `+${Math.round(monthlyProfit).toLocaleString()}€/mois` : 
                    `+$${Math.round(monthlyProfit).toLocaleString()}/month`
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* ✅ SECTION CORRIGÉE AVEC TRADUCTION APPROPRIÉE */}
      <div className="text-center mt-6">
        <div className="text-2xl font-bold text-primary mb-2">
          {language === 'fr' ? 
            `ROI: ${roiPercent}% par mois` : 
            `ROI: ${roiPercent}% per month`
          }
        </div>
        <p className="text-muted-foreground text-sm">
          {language === 'fr' ? 
            `ChatSeller se rembourse en ${paybackDays} jour${paybackDays > 1 ? 's' : ''}` : 
            `ChatSeller pays for itself in ${paybackDays} day${paybackDays > 1 ? 's' : ''}`
          }
        </p>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const { t, language } = useLanguage();
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="pricing" className="py-24 relative bg-gradient-to-b from-white to-blue-50">
      {/* Decorative elements */}
      <div className="absolute left-0 bottom-1/4 w-1/4 h-1/3 bg-purple-50/50 rounded-r-3xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-green-200 rounded-full bg-green-50 text-sm font-medium text-green-700 animate-fade-in">
            <Gift className="w-4 h-4 mr-2" />
            {t('pricingBadge')}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            {t('pricingTitle')}
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
            {t('pricingSubtitle')}
          </p>
        </div>
        
        {/* ✅ PRICING CARDS AVEC TRADUCTION */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in [animation-delay:600ms]">
          <PricingCard
            plan={t('starterPlan')}
            price="19€"
            period={language === 'fr' ? 'mois' : 'month'}
            description={t('starterDesc')}
            features={[
              t('freeTrial'),
              language === 'fr' ? "1 Vendeur IA intelligent" : "1 Intelligent AI Sales Agent",
              language === 'fr' ? "1000 crédits messages par mois" : "1000 message credits per month",
              language === 'fr' ? "Base de connaissance (10 documents)" : "Knowledge base (10 documents)",
              language === 'fr' ? "Chat widget personnalisable" : "Customizable chat widget",
              language === 'fr' ? "Analytics de base" : "Basic analytics",
              language === 'fr' ? "Support email" : "Email support",
              t('installMinutes'),
              language === 'fr' ? "Compatible sur tous les sites" : "Compatible with all websites"
            ]}
            notIncluded={[
              language === 'fr' ? "Upsell automatique" : "Automatic upsell",
              language === 'fr' ? "Analytics avancées" : "Advanced analytics",
              language === 'fr' ? "Support prioritaire" : "Priority support"
            ]}
            ctaText={t('startTrial7Days')}
            ctaLink="https://dashboard.chatseller.app/register?plan=starter"
            badge={t('freeTrial')}
            hasTrial={true}
          />
          
          <PricingCard
            plan={t('proPlan')}
            price="29€"
            period={language === 'fr' ? 'mois' : 'month'}
            description={t('proDesc')}
            features={[
              language === 'fr' ? "Tout du plan Starter" : "Everything in Starter",
              language === 'fr' ? "3 Vendeurs IA spécialisés" : "3 Specialized AI Sales Agents",
              language === 'fr' ? "5000 crédits messages par mois" : "5000 message credits per month",
              language === 'fr' ? "Base de connaissance (50 documents)" : "Knowledge base (50 documents)",
              language === 'fr' ? "Upsell automatique intelligent" : "Intelligent automatic upsell",
              language === 'fr' ? "Analytics avancées & ROI" : "Advanced analytics & ROI",
              language === 'fr' ? "Bilingue (FR/EN)" : "Bilingual (FR/EN)",
              language === 'fr' ? "Support prioritaire" : "Priority support",
              language === 'fr' ? "Priorité Nouveautés" : "Feature Priority",
            ]}
            isPopular={true}
            ctaText={language === 'fr' ? "Démarrer le plan Pro" : "Start Pro plan"}
            ctaLink="https://dashboard.chatseller.app/register?plan=pro"
            badge={t('mostPopular')}
          />
          
          <PricingCard
            plan={t('enterprisePlan')}
            price={language === 'fr' ? "Sur mesure" : "Custom"}
            period=""
            description={t('enterpriseDesc')}
            features={[
              language === 'fr' ? "Tout du plan Pro" : "Everything in Pro",
              language === 'fr' ? "Jusqu'à 10 Vendeurs IA" : "Up to 10 AI Sales Agents",
              language === 'fr' ? "White-label complet" : "Complete white-label", 
              language === 'fr' ? "API complète & webhooks" : "Full API & webhooks",
              language === 'fr' ? "Intégrations sur mesure" : "Custom integrations",
              language === 'fr' ? "Support dédié 24/7" : "Dedicated 24/7 support",
              language === 'fr' ? "Formation équipe complète" : "Complete team training",
              language === 'fr' ? "SLA garanti 99.9%" : "99.9% SLA guarantee",
              language === 'fr' ? "Conformité RGPD avancée" : "Advanced GDPR compliance"
            ]}
            ctaText={t('contactUs')}
            ctaLink="mailto:enterprise@chatseller.app"
            badge={t('customSolution')}
          />
        </div>
        
        {/* Comparison Table Toggle */}
        <div className="text-center mb-8">
          <Button 
            variant="outline" 
            onClick={() => setShowComparison(!showComparison)}
            className="group"
          >
            {showComparison 
              ? (language === 'fr' ? 'Masquer' : 'Hide') 
              : (language === 'fr' ? 'Voir' : 'Show')
            } {language === 'fr' ? 'la comparaison détaillée' : 'detailed comparison'}
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
            <h4 className="font-semibold mb-2">
              {language === 'fr' ? 'Essai gratuit Starter' : 'Free Starter trial'}
            </h4>
            <p className="text-sm text-muted-foreground">
              {language === 'fr' ? '7 jours pour tester sans risque' : '7 days to test risk-free'}
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/60 rounded-xl border border-gray-200">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">
              {language === 'fr' ? '4.8/5 étoiles' : '4.8/5 stars'}
              </h4>
            <p className="text-sm text-muted-foreground">
              {language === 'fr' ? 'Note moyenne de nos testeurs' : 'Average rating from our testers'}
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/60 rounded-xl border border-gray-200">
            <Zap className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">{t('installMinutes')}</h4>
            <p className="text-sm text-muted-foreground">
              {language === 'fr' ? 'Prêt à vendre immédiatement' : 'Ready to sell immediately'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;