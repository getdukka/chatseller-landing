// src/components/ComparisonSection.tsx - AVEC TRADUCTIONS COMPLÈTES
import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Zap, 
  Crown, 
  ArrowRight,
  ShoppingCart,
  MessageSquare,
  TrendingUp,
  Clock,
  Shield,
  Smartphone,
  Globe,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';

const ComparisonRow = ({ 
  feature, 
  traditional, 
  chatbots, 
  chatseller, 
  isHighlight = false 
}: {
  feature: string;
  traditional: string | React.ReactNode;
  chatbots: string | React.ReactNode;
  chatseller: string | React.ReactNode;
  isHighlight?: boolean;
}) => {
  return (
    <tr className={`border-b border-gray-100 hover:bg-gray-50/50 transition-colors ${
      isHighlight ? 'bg-blue-50/30' : ''
    }`}>
      <td className="px-4 py-3 font-medium text-gray-900 text-left text-sm">{feature}</td>
      <td className="px-4 py-3 text-center text-xs">{traditional}</td>
      <td className="px-4 py-3 text-center text-xs">{chatbots}</td>
      <td className={`px-4 py-3 text-center text-xs font-semibold ${
        isHighlight ? 'bg-primary/10' : ''
      }`}>
        {chatseller}
      </td>
    </tr>
  );
};

const FeatureIcon = ({ icon, isAvailable }: { icon: React.ReactNode; isAvailable: boolean }) => {
  return (
    <div className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
      isAvailable ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
    }`}>
      {isAvailable ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
    </div>
  );
};

const CompetitorCard = ({ 
  name, 
  type, 
  pros, 
  cons, 
  price, 
  isChatseller = false 
}: {
  name: string;
  type: string;
  pros: string[];
  cons: string[];
  price: string;
  isChatseller?: boolean;
}) => {
  const { t } = useLanguage();
  
  return (
    <div className={`p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg relative ${
      isChatseller 
        ? 'border-primary bg-gradient-to-b from-primary/5 to-white shadow-md scale-105' 
        : 'border-gray-200 bg-white/60'
    }`}>
      {isChatseller && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <Crown className="w-4 h-4 mr-1" />
            {t('mostPopular')}
          </div>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className={`text-xl font-bold mb-2 ${isChatseller ? 'text-primary' : 'text-gray-900'}`}>
          {name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{type}</p>
        <div className={`text-2xl font-bold ${isChatseller ? 'text-primary' : 'text-gray-900'}`}>
          {price}
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-green-700 mb-3 flex items-center text-sm">
            <Check className="w-4 h-4 mr-2" />
            Avantages
          </h4>
          <ul className="space-y-2">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start space-x-2 text-xs">
                <Check className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-red-700 mb-3 flex items-center text-sm">
            <X className="w-4 h-4 mr-2" />
            Inconvénients
          </h4>
          <ul className="space-y-2">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start space-x-2 text-xs">
                <X className="w-3 h-3 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {isChatseller && (
        <div className="mt-6">
          <Button className="w-full group">
            <a href="https://dashboard.chatseller.app/register" className="flex items-center justify-center w-full">
              Choisir ChatSeller
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      )}
    </div>
  );
};

// ✅ COMPOSANT MOBILE CARDS AU LIEU DU TABLEAU
const MobileComparisonCards = () => {
  const [activeCard, setActiveCard] = useState(0);
  const { t, language } = useLanguage();
  
  const solutions = [
    {
      name: t('traditionalEcommerce'),
      type: language === 'fr' ? "Boutique traditionnelle" : "Traditional shop",
      price: language === 'fr' ? "0€/mois" : "$0/month",
      features: {
        engagement: { available: false, text: language === 'fr' ? "Aucune interaction" : "No interaction" },
        collecte: { available: false, text: language === 'fr' ? "Formulaires statiques" : "Static forms" },
        ia: { available: false, text: language === 'fr' ? "Aucune IA" : "No AI" },
        upsell: { available: false, text: language === 'fr' ? "Manuel uniquement" : "Manual only" },
        support: { available: false, text: language === 'fr' ? "Aucun support auto" : "No auto support" },
        mobile: { available: false, text: "Standard" },
        installation: { available: false, text: language === 'fr' ? "Complexe" : "Complex" },
        conversion: { available: false, text: "2-3%" },
        roi: { available: false, text: language === 'fr' ? "Faible" : "Low" }
      }
    },
    {
      name: t('basicChatbots'),
      type: "Zendesk, Intercom, Crisp",
      price: language === 'fr' ? "+40€/mois" : "+$50/month",
      features: {
        engagement: { available: true, text: language === 'fr' ? "Basique" : "Basic" },
        collecte: { available: false, text: language === 'fr' ? "Pas de collecte" : "No collection" },
        ia: { available: true, text: language === 'fr' ? "Limitée" : "Limited" },
        upsell: { available: false, text: language === 'fr' ? "Non disponible" : "Not available" },
        support: { available: true, text: language === 'fr' ? "Basique" : "Basic" },
        mobile: { available: true, text: "Standard" },
        installation: { available: false, text: language === 'fr' ? "Complexe" : "Complex" },
        conversion: { available: true, text: "3-4%" },
        roi: { available: true, text: language === 'fr' ? "Moyen" : "Medium" }
      }
    },
    {
      name: "ChatSeller",
      type: language === 'fr' ? "Agent IA Commercial" : "AI Sales Agent",
      price: language === 'fr' ? "19€/mois" : "$14/month",
      isChatseller: true,
      features: {
        engagement: { available: true, text: language === 'fr' ? "Conversation naturelle" : "Natural conversation" },
        collecte: { available: true, text: language === 'fr' ? "Automatique dans chat" : "Automatic in chat" },
        ia: { available: true, text: "GPT-4o - Claude 4" },
        upsell: { available: true, text: language === 'fr' ? "+34% panier moyen" : "+34% average cart" },
        support: { available: true, text: "24/7 FR/EN" },
        mobile: { available: true, text: "Mobile-first" },
        installation: { available: true, text: language === 'fr' ? "2 minutes" : "2 minutes" },
        conversion: { available: true, text: "7-18%" },
        roi: { available: true, text: language === 'fr' ? "x40 en 3 mois" : "x40 in 3 months" }
      }
    }
  ];

  const featureNames = {
    engagement: language === 'fr' ? "Engagement visiteur" : "Visitor engagement",
    collecte: language === 'fr' ? "Collecte commandes" : "Order collection", 
    ia: language === 'fr' ? "Modèle IA" : "AI Model",
    upsell: language === 'fr' ? "Upsell automatique" : "Automatic upsell",
    support: language === 'fr' ? "Assistance 24/7" : "24/7 Support",
    mobile: "Mobile-first",
    installation: "Installation",
    conversion: language === 'fr' ? "Taux conversion" : "Conversion rate",
    roi: "ROI"
  };

  return (
    <div className="space-y-6">
      {/* Navigation Cards */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {solutions.map((solution, index) => (
          <button
            key={index}
            onClick={() => setActiveCard(index)}
            className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeCard === index
                ? solution.isChatseller
                  ? 'bg-primary text-white'
                  : 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {solution.name}
          </button>
        ))}
      </div>

      {/* Active Card Content */}
      <div className={`p-6 rounded-xl border ${
        solutions[activeCard].isChatseller
          ? 'border-primary bg-gradient-to-b from-primary/5 to-white'
          : 'border-gray-200 bg-white'
      }`}>
        <div className="text-center mb-6">
          <h3 className={`text-xl font-bold mb-2 ${
            solutions[activeCard].isChatseller ? 'text-primary' : 'text-gray-900'
          }`}>
            {solutions[activeCard].name}
          </h3>
          <p className="text-gray-600 text-sm mb-2">{solutions[activeCard].type}</p>
          <div className={`text-2xl font-bold ${
            solutions[activeCard].isChatseller ? 'text-primary' : 'text-gray-900'
          }`}>
            {solutions[activeCard].price}
          </div>
        </div>

        <div className="space-y-3">
          {Object.entries(featureNames).map(([key, label]) => {
            const feature = solutions[activeCard].features[key as keyof typeof solutions[0]['features']];
            return (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{label}</span>
                <div className="flex items-center space-x-2">
                  <FeatureIcon icon={<Check />} isAvailable={feature.available} />
                  <span className="text-xs text-gray-600">{feature.text}</span>
                </div>
              </div>
            );
          })}
        </div>

        {solutions[activeCard].isChatseller && (
          <div className="mt-6">
            <Button className="w-full group">
              <a href="https://dashboard.chatseller.app/register" className="flex items-center justify-center w-full">
                {t('createMyAI')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const ComparisonSection = () => {
  const [activeTab, setActiveTab] = useState<'table' | 'cards'>('table');
  const isMobile = useIsMobile();
  const { t, language } = useLanguage();

  // ✅ FORCER L'AFFICHAGE MOBILE SUR PETITS ÉCRANS
  React.useEffect(() => {
    if (isMobile) {
      setActiveTab('cards');
    }
  }, [isMobile]);

  const competitors = [
    {
      name: t('traditionalEcommerce'),
      type: language === 'fr' ? "Boutique traditionnelle" : "Traditional shop",
      pros: [
        language === 'fr' ? "Contrôle total du design" : "Full design control",
        language === 'fr' ? "Pas d'abonnement mensuel" : "No monthly subscription",
        language === 'fr' ? "Interface familière" : "Familiar interface"
      ],
      cons: [
        language === 'fr' ? "Aucune interaction client" : "No customer interaction",
        language === 'fr' ? "Taux conversion 2-3% seulement" : "Only 2-3% conversion rate",
        language === 'fr' ? "Abandon panier 73%" : "73% cart abandonment",
        language === 'fr' ? "Aucun support automatique" : "No automatic support",
        language === 'fr' ? "Ventes limitées" : "Limited sales"
      ],
      price: language === 'fr' ? "0€/mois" : "$0/month"
    },
    {
      name: t('basicChatbots'),
      type: "Zendesk, Intercom, Crisp",
      pros: [
        language === 'fr' ? "Réponses automatiques rapides" : "Fast automatic responses",
        language === 'fr' ? "Interface de chat simple" : "Simple chat interface",
        language === 'fr' ? "Support multilingue basique" : "Basic multilingual support"
      ],
      cons: [
        language === 'fr' ? "Réponses robotiques et limitées" : "Robotic and limited responses",
        language === 'fr' ? "Aucune collecte de commandes" : "No order collection",
        language === 'fr' ? "Pas d'upsell intelligent" : "No intelligent upselling",
        language === 'fr' ? "Configuration complexe" : "Complex configuration",
        language === 'fr' ? "Prix élevés (+40€/mois)" : "High prices (+$50/month)"
      ],
      price: language === 'fr' ? "+40€/mois" : "+$50/month"
    },
    {
      name: "ChatSeller",
      type: language === 'fr' ? "Agent IA Commercial" : "AI Sales Agent",
      pros: [
        language === 'fr' ? "Conversations naturelles avec IA" : "Natural AI conversations",
        language === 'fr' ? "Collecte vraiment les commandes" : "Actually collects orders",
        language === 'fr' ? "Upsell intelligent +34% panier" : "Smart upselling +34% cart",
        language === 'fr' ? "Installation en 2 minutes" : "2-minute installation",
        language === 'fr' ? "Support en français & anglais" : "French & English support",
        language === 'fr' ? "Analytics de conversion avancées" : "Advanced conversion analytics",
        "Mobile-first",
        language === 'fr' ? "RGPD compliant" : "GDPR compliant"
      ],
      cons: [
        language === 'fr' ? "Peut nécessiter un temps d'adaptation" : "May require adaptation time",
        language === 'fr' ? "Nouveau sur le marché" : "New to the market"
      ],
      price: language === 'fr' ? "19€/mois" : "$14/month",
      isChatseller: true
    }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-white to-purple-50">
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 bg-purple-50/50 rounded-l-3xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-purple-200 rounded-full bg-purple-50 text-sm font-medium text-purple-700 animate-fade-in">
            <Star className="w-4 h-4 mr-2" />
            {t('comparisonBadge')}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            {t('comparisonTitle')}
            <span className="text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> ChatSeller</span>
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
            {t('comparisonSubtitle')}
          </p>
        </div>
        
        {/* ✅ TAB NAVIGATION - MASQUÉ SUR MOBILE */}
        {!isMobile && (
          <div className="flex justify-center mb-12 animate-fade-in [animation-delay:600ms]">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('table')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'table'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('comparisonTable')}
              </button>
              <button
                onClick={() => setActiveTab('cards')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'cards'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('detailedComparison')}
              </button>
            </div>
          </div>
        )}
        
        {/* ✅ AFFICHAGE CONDITIONNEL OPTIMISÉ MOBILE */}
        {(activeTab === 'table' && !isMobile) && (
          <div className="max-w-6xl mx-auto mb-16 animate-fade-in [animation-delay:800ms]">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">
                      {language === 'fr' ? 'Critère' : 'Criteria'}
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">{t('traditionalEcommerce')}</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">{t('basicChatbots')}</th>
                    <th className="px-6 py-4 text-center font-semibold bg-primary/10 text-primary">ChatSeller</th>
                  </tr>
                </thead>
                <tbody>
                  <ComparisonRow
                    feature={language === 'fr' ? "Engagement visiteur" : "Visitor engagement"}
                    traditional={<FeatureIcon icon={<X />} isAvailable={false} />}
                    chatbots={language === 'fr' ? "Basique" : "Basic"}
                    chatseller={<FeatureIcon icon={<Check />} isAvailable={true} />}
                    isHighlight={true}
                  />
                  <ComparisonRow
                    feature={language === 'fr' ? "Collecte commandes" : "Order collection"}
                    traditional={language === 'fr' ? "Formulaires statiques" : "Static forms"}
                    chatbots={<FeatureIcon icon={<X />} isAvailable={false} />}
                    chatseller={language === 'fr' ? "Conversation naturelle" : "Natural conversation"}
                    isHighlight={true}
                  />
                  <ComparisonRow
                    feature={language === 'fr' ? "Modèle IA" : "AI Model"}
                    traditional={<FeatureIcon icon={<X />} isAvailable={false} />}
                    chatbots={language === 'fr' ? "Limitée" : "Limited"}
                    chatseller="GPT-4o - Claude 4"
                  />
                  <ComparisonRow
                    feature={language === 'fr' ? "Upsell automatique" : "Automatic upselling"}
                    traditional={<FeatureIcon icon={<X />} isAvailable={false} />}
                    chatbots={<FeatureIcon icon={<X />} isAvailable={false} />}
                    chatseller={language === 'fr' ? "+34% de vente upsell" : "+34% upsell sales"}
                    isHighlight={true}
                  />
                  <ComparisonRow
                    feature={language === 'fr' ? "Assistance 24/7" : "24/7 Support"}
                    traditional={<FeatureIcon icon={<X />} isAvailable={false} />}
                    chatbots={language === 'fr' ? "Basique" : "Basic"}
                    chatseller={language === 'fr' ? "En français & Anglais" : "In French & English"}
                  />
                  <ComparisonRow
                    feature="Mobile-first"
                    traditional={<FeatureIcon icon={<X />} isAvailable={false} />}
                    chatbots="Standard"
                    chatseller={language === 'fr' ? "Fonctionne sur téléphone" : "Works on mobile"}
                    isHighlight={true}
                  />
                  <ComparisonRow
                    feature="Installation"
                    traditional={language === 'fr' ? "Complexe" : "Complex"}
                    chatbots={language === 'fr' ? "Complexe" : "Complex"}
                    chatseller={language === 'fr' ? "En 2 minutes" : "In 2 minutes"}
                  />
                  <ComparisonRow
                    feature={language === 'fr' ? "Prix mensuel" : "Monthly price"}
                    traditional={language === 'fr' ? "0€" : "$0"}
                    chatbots={language === 'fr' ? "+40€" : "+$45"}
                    chatseller={language === 'fr' ? "19€" : "$22"}
                  />
                  <ComparisonRow
                    feature={language === 'fr' ? "Taux de conversion" : "Conversion rate"}
                    traditional="2-3%"
                    chatbots="3-4%"
                    chatseller="7-18%"
                    isHighlight={true}
                  />
                  <ComparisonRow
                    feature={language === 'fr' ? "ROI moyen" : "Average ROI"}
                    traditional={language === 'fr' ? "Faible" : "Low"}
                    chatbots={language === 'fr' ? "Moyen" : "Medium"}
                    chatseller={language === 'fr' ? "x40 en 3 mois" : "x40 in 3 months"}
                    isHighlight={true}
                  />
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* ✅ MOBILE CARDS OU DESKTOP CARDS */}
        {(activeTab === 'cards' || isMobile) && (
          <div className="animate-fade-in [animation-delay:800ms]">
            {isMobile ? (
              <MobileComparisonCards />
            ) : (
              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                {competitors.map((competitor, index) => (
                  <div key={index} className="relative">
                    <CompetitorCard {...competitor} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* ✅ WHY CHATSELLER WINS - OPTIMISÉ MOBILE */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in [animation-delay:1000ms]">
          <h3 className="text-2xl font-bold text-center pt-8 mb-8">
            {t('whyWinsTitle')}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">{t('trueAI')}</h4>
                  <p className="text-green-800 text-sm">
                    {t('trueAIDesc')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">{t('realOrderCollection')}</h4>
                  <p className="text-blue-800 text-sm">
                    {t('realOrderCollectionDesc')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">{t('designedForWorld')}</h4>
                  <p className="text-purple-800 text-sm">
                    {t('designedForWorldDesc')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">{t('smartUpsell')}</h4>
                  <p className="text-orange-800 text-sm">
                    {t('smartUpsellDesc')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">{t('ultraFastInstall')}</h4>
                  <p className="text-red-800 text-sm">
                    {t('ultraFastInstallDesc')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-gray-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('profitableInvestment')}</h4>
                  <p className="text-gray-700 text-sm">
                    {t('profitableInvestmentDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;