// src/components/ComparisonSection.tsx
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
      <td className="px-6 py-4 font-medium text-gray-900 text-left">{feature}</td>
      <td className="px-6 py-4 text-center text-sm">{traditional}</td>
      <td className="px-6 py-4 text-center text-sm">{chatbots}</td>
      <td className={`px-6 py-4 text-center text-sm font-semibold ${
        isHighlight ? 'bg-primary/10' : ''
      }`}>
        {chatseller}
      </td>
    </tr>
  );
};

const FeatureIcon = ({ icon, isAvailable }: { icon: React.ReactNode; isAvailable: boolean }) => {
  return (
    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
      isAvailable ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
    }`}>
      {isAvailable ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
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
  return (
    <div className={`p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${
      isChatseller 
        ? 'border-primary bg-gradient-to-b from-primary/5 to-white shadow-md scale-105' 
        : 'border-gray-200 bg-white/60'
    }`}>
      {isChatseller && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <Crown className="w-4 h-4 mr-1" />
            Recommandé
          </div>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className={`text-xl font-bold mb-2 ${isChatseller ? 'text-primary' : 'text-gray-900'}`}>
          {name}
        </h3>
        <p className="text-gray-600 mb-4">{type}</p>
        <div className={`text-2xl font-bold ${isChatseller ? 'text-primary' : 'text-gray-900'}`}>
          {price}
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-green-700 mb-3 flex items-center">
            <Check className="w-4 h-4 mr-2" />
            Avantages
          </h4>
          <ul className="space-y-2">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-red-700 mb-3 flex items-center">
            <X className="w-4 h-4 mr-2" />
            Inconvénients
          </h4>
          <ul className="space-y-2">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm">
                <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
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

const ComparisonSection = () => {
  const [activeTab, setActiveTab] = useState<'table' | 'cards'>('table');

  const competitors = [
    {
      name: "E-commerce Classique",
      type: "Boutique traditionnelle",
      pros: [
        "Contrôle total du design",
        "Pas d'abonnement mensuel",
        "Interface familière"
      ],
      cons: [
        "Aucune interaction client",
        "Taux conversion 2-3% seulement",
        "Abandon panier 73%",
        "Aucun support automatique",
        "Ventes limitées"
      ],
      price: "0€/mois"
    },
    {
      name: "Chatbots Basiques",
      type: "Zendesk, Intercom, Crisp",
      pros: [
        "Réponses automatiques rapides",
        "Interface de chat simple",
        "Support multilingue basique"
      ],
      cons: [
        "Réponses robotiques et limitées",
        "Aucune collecte de commandes",
        "Pas d'upsell intelligent",
        "Configuration complexe",
        "Prix élevés (+40€/mois)"
      ],
      price: "+40€/mois"
    },
    {
      name: "ChatSeller",
      type: "Agent IA Commercial",
      pros: [
        "Conversations naturelles avec IA GPT-4o",
        "Collecte vraiment les commandes",
        "Upsell intelligent +34% panier",
        "Installation en 2 minutes",
        "Support en français & anglais",
        "Analytics de conversion avancées",
        "Mobile-first",
        "RGPD compliant"
      ],
        cons: [
            "Peut nécessiter un temps d'adaptation",
            "Pas de personnalisation avancée"
        ],
      price: "14€/mois",
      isChatseller: true
    }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-white to-blue-50">
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 bg-purple-50/50 rounded-l-3xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-purple-200 rounded-full bg-purple-50 text-sm font-medium text-purple-700 animate-fade-in">
            <Star className="w-4 h-4 mr-2" />
            Comparaison objective et transparente
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            Pourquoi choisir 
            <span className="text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> ChatSeller</span>
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
            Comparaison honnête entre ChatSeller et les autres options disponibles sur le marché
          </p>
        </div>
        
        {/* Tab Navigation */}
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
              Tableau comparatif
            </button>
            <button
              onClick={() => setActiveTab('cards')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'cards'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Comparaison détaillée
            </button>
          </div>
        </div>
        
        {/* Comparison Table */}
        {activeTab === 'table' && (
          <div className="max-w-6xl mx-auto mb-16 animate-fade-in [animation-delay:800ms]">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Critère</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">E-commerce Classique</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Chatbots Basiques</th>
                    <th className="px-6 py-4 text-center font-semibold bg-primary/10 text-primary">ChatSeller</th>
                  </tr>
                </thead>
                <tbody>
                  <ComparisonRow
                    feature="Engagement visiteur"
                    traditional={<FeatureIcon icon={<X />} isAvailable={false} />}
                    chatbots="Basique"
                    chatseller={<FeatureIcon icon={<Check />} isAvailable={true} />}
                    isHighlight={true}
                  />
                  <ComparisonRow
                    feature="Collecte commandes"
                    traditional="Formulaires statiques"
                    chatbots={<FeatureIcon icon={<X />} isAvailable={false} />}
                    chatseller="Conversation naturelle"
                    isHighlight={true}
                  />
                  <ComparisonRow
                    feature="Intelligence IA"
                    traditional={<FeatureIcon icon={<X />} isAvailable={false} />}
                    chatbots="Limitée"
                    chatseller="GPT-4o - Claude 3"
                  />
                  <ComparisonRow
                    feature="Upsell automatique"
                    traditional={<FeatureIcon icon={<X />} isAvailable={false} />}
                    chatbots={<FeatureIcon icon={<X />} isAvailable={false} />}
                    chatseller="+34% de vente upsell"
                    isHighlight={true}
                  />
                  <ComparisonRow
                    feature="Assistance 24/7"
                    traditional={<FeatureIcon icon={<X />} isAvailable={false} />}
                    chatbots="Basique"
                    chatseller="En français & Anglais"
                  />
                  <ComparisonRow
                    feature="Mobile-first"
                    traditional={<FeatureIcon icon={<X />} isAvailable={false} />}
                    chatbots="Standard"
                    chatseller="Fonctionne sur telephone"
                    isHighlight={true}
                  />
                  <ComparisonRow
                    feature="Installation"
                    traditional="Complexe"
                    chatbots="Complexe"
                    chatseller="En 2 minutes"
                  />
                  <ComparisonRow
                    feature="Prix mensuel"
                    traditional="0€"
                    chatbots="+40€"
                    chatseller="14€"
                  />
                  <ComparisonRow
                    feature="Taux de conversion"
                    traditional="2-3%"
                    chatbots="3-4%"
                    chatseller="7-18%"
                    isHighlight={true}
                  />
                  <ComparisonRow
                    feature="ROI moyen"
                    traditional="Faible"
                    chatbots="Moyen"
                    chatseller="x40 en 3 mois"
                    isHighlight={true}
                  />
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* Comparison Cards */}
        {activeTab === 'cards' && (
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 animate-fade-in [animation-delay:800ms]">
            {competitors.map((competitor, index) => (
              <div key={index} className="relative">
                <CompetitorCard {...competitor} />
              </div>
            ))}
          </div>
        )}
        
        {/* Why ChatSeller Wins */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in [animation-delay:1000ms]">
          <h3 className="text-2xl font-bold text-center mb-8">
            Voici pourquoi ChatSeller surpasse la concurrence
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Vraie Intelligence IA</h4>
                  <p className="text-green-800 text-sm">
                    Contrairement aux chatbots basiques, ChatSeller utilise l'IA pour des conversations naturelles et pertinentes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Collecte Vraiment les Commandes</h4>
                  <p className="text-blue-800 text-sm">
                    ChatSeller collecte naturellement le nom, le téléphone, l'adresse de vos clients et finalise les commandes dans la conversation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Conçu pour l'Afrique et le monde</h4>
                  <p className="text-purple-800 text-sm">
                    Mobile-first, multilingue FR/EN, adapté aux connexions lentes et au marché africain.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Upsell Intelligent</h4>
                  <p className="text-orange-800 text-sm">
                    +34% de panier moyen grâce aux recommandations intelligentes basées sur le contexte de la conversation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Installation Ultra-Rapide</h4>
                  <p className="text-red-800 text-sm">
                    2 minutes vs 2 semaines pour la concurrence. Chatseller est prêt à vendre immédiatement, sans développeur.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-gray-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Investissement rentable</h4>
                  <p className="text-gray-700 text-sm">
                    Chatseller se rembourse au bout de 3 mois avec un ROI moyen de +187%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final Comparison CTA 
        <div className="text-center animate-fade-in [animation-delay:1200ms]">
          <div className="bg-gradient-to-r from-primary/10 to-purple-100/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Le choix est évident</h3>
            <p className="text-muted-foreground mb-6">
              ChatSeller combine le meilleur de toutes les solutions sans leurs inconvénients
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <Check className="w-4 h-4" />
                <span>+147% conversion</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-600">
                <Check className="w-4 h-4" />
                <span>Installation en 2 min</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-purple-600">
                <Check className="w-4 h-4" />
                <span>Investissement rentable</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <a href="https://dashboard.chatseller.app/register" className="flex items-center">
                  Essayer ChatSeller gratuitement
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#demo" className="flex items-center">
                  Voir la démo
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              ✅ 14 jours d'essai gratuit • ✅ Satisfait ou remboursé • ✅ Service client réactif
            </p>
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default ComparisonSection;