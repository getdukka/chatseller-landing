// src/components/FAQSection.tsx - AVEC TRADUCTIONS COMPLÈTES
import React, { useState } from 'react';
import { 
  Plus, 
  Minus, 
  MessageCircle, 
  Shield, 
  Zap, 
  CreditCard,
  Globe,
  BarChart3,
  Users,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQItem = ({ 
  question, 
  answer, 
  isOpen, 
  onToggle, 
  icon 
}: {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
}) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white/60 backdrop-blur-sm hover:shadow-md transition-all duration-300">
      <button
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <span className="font-semibold text-gray-900">{question}</span>
        </div>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-5 h-5 text-primary" />
          ) : (
            <Plus className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-5 animate-fade-in">
          <div className="pl-14 text-gray-600 leading-relaxed">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

const ContactCTA = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white">
          <MessageCircle className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-2">{t('contactQuestion')}</h4>
          <p className="text-gray-600 mb-4">
            {t('contactTeam')}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="sm" className="group">
              <a href="mailto:support@chatseller.app" className="flex items-center">
                {t('contactEmail')}
                <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="sm">
              <a href="https://cal.com/chatseller/demo" className="flex items-center">
                {t('bookDemo')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, language } = useLanguage();

  const faqCategories = [
    {
      title: language === 'fr' ? "Questions Techniques" : "Technical Questions",
      icon: <Zap className="w-5 h-5" />,
      questions: [
        {
          question: language === 'fr' ? 
            "ChatSeller fonctionne-t-il sur Shopify ?" : 
            "Does ChatSeller work on Shopify?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>
                  {language === 'fr' ? 
                    "Oui, ChatSeller s'intègre parfaitement sur toutes les plateformes e-commerce :" :
                    "Yes, ChatSeller integrates perfectly on all e-commerce platforms:"
                  }
                </strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Shopify :</strong> {language === 'fr' ? "Plugin officiel, installation en 1 clic" : "Official plugin, 1-click installation"}</li>
                <li><strong>WooCommerce :</strong> {language === 'fr' ? "Plugin WordPress disponible" : "WordPress plugin available"}</li>
                <li><strong>Wix :</strong> {language === 'fr' ? "Widget HTML embeddable" : "Embeddable HTML widget"}</li>
                <li><strong>{language === 'fr' ? "Sites personnalisés" : "Custom sites"} :</strong> {language === 'fr' ? "Simple script JavaScript" : "Simple JavaScript script"}</li>
                <li><strong>Prestashop, Magento :</strong> {language === 'fr' ? "Code d'intégration universel" : "Universal integration code"}</li>
              </ul>
              <p className="mt-3 text-sm text-green-600">
                ✅ <strong>{language === 'fr' ? "Installation en 2 minutes maximum, guide détaillé fourni pour chaque plateforme." : "Maximum 2-minute installation, detailed guide provided for each platform."}</strong>
              </p>
            </div>
          ),
          icon: <Globe className="w-5 h-5" />
        },
        {
          question: language === 'fr' ? 
            "L'agent IA parle-t-il français et anglais ?" : 
            "Does the AI agent speak French and English?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>
                  {language === 'fr' ? 
                    "Oui, ChatSeller est entièrement multilingue :" :
                    "Yes, ChatSeller is fully multilingual:"
                  }
                </strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{language === 'fr' ? "Français" : "French"} :</strong> {language === 'fr' ? "Natif, adapté au marché africain francophone" : "Native, adapted to French-speaking African market"}</li>
                <li><strong>{language === 'fr' ? "Anglais" : "English"} :</strong> {language === 'fr' ? "Support complet pour le marché anglophone" : "Full support for English-speaking market"}</li>
                <li><strong>{language === 'fr' ? "Espagnol" : "Spanish"} :</strong> {language === 'fr' ? "Disponible sur demande" : "Available on request"}</li>
                <li><strong>{language === 'fr' ? "Détection automatique" : "Automatic detection"} :</strong> {language === 'fr' ? "L'IA détecte la langue du visiteur" : "AI detects visitor's language"}</li>
                <li><strong>{language === 'fr' ? "Langage local" : "Local language"} :</strong> {language === 'fr' ? "Expressions et références culturelles adaptées" : "Adapted expressions and cultural references"}</li>
              </ul>
              <p className="mt-3 text-sm text-blue-600">
                💡 {language === 'fr' ? "L'IA s'adapte automatiquement au contexte culturel de vos clients africains." : "AI automatically adapts to the cultural context of your African customers."}
              </p>
            </div>
          ),
          icon: <Globe className="w-5 h-5" />
        },
        {
          question: language === 'fr' ? 
            "Mes données client sont-elles sécurisées ?" : 
            "Are my customer data secure?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>
                  {language === 'fr' ? 
                    "La sécurité est notre priorité absolue :" :
                    "Security is our absolute priority:"
                  }
                </strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{language === 'fr' ? "RGPD compliant" : "GDPR compliant"} :</strong> {language === 'fr' ? "Conformité totale aux réglementations européennes" : "Full compliance with European regulations"}</li>
                <li><strong>{language === 'fr' ? "Chiffrement end-to-end" : "End-to-end encryption"} :</strong> {language === 'fr' ? "Toutes les données sont cryptées" : "All data is encrypted"}</li>
                <li><strong>{language === 'fr' ? "Serveurs européens" : "European servers"} :</strong> {language === 'fr' ? "Hébergement en Europe (pas aux USA)" : "Hosting in Europe (not in USA)"}</li>
                <li><strong>{language === 'fr' ? "Consentement explicite" : "Explicit consent"} :</strong> {language === 'fr' ? "Demande d'autorisation avant collecte" : "Authorization request before collection"}</li>
                <li><strong>{language === 'fr' ? "Droit à l'oubli" : "Right to be forgotten"} :</strong> {language === 'fr' ? "Suppression des données sur demande" : "Data deletion on request"}</li>
                <li><strong>{language === 'fr' ? "Audits réguliers" : "Regular audits"} :</strong> {language === 'fr' ? "Sécurité vérifiée par des tiers" : "Security verified by third parties"}</li>
              </ul>
              <p className="mt-3 text-sm text-green-600">
                🔒 {language === 'fr' ? "Certificat SSL, conformité bancaire, vos données sont plus sécurisées qu'avec la plupart des solutions." : "SSL certificate, banking compliance, your data is more secure than with most solutions."}
              </p>
            </div>
          ),
          icon: <Shield className="w-5 h-5" />
        },
        {
          question: language === 'fr' ? 
            "Comment Chatseller apprend-il sur mes produits ?" : 
            "How does ChatSeller learn about my products?",
          answer: (
            <div>
              <p className="mb-3">
                {language === 'fr' ? 
                  "Votre Vendeur IA utilise la base de connaissances que vous lui fournissez :" :
                  "Your AI Seller uses the knowledge base you provide:"
                }
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{language === 'fr' ? "Import automatique" : "Automatic import"} :</strong> {language === 'fr' ? "Connectez votre catalogue produit" : "Connect your product catalog"}</li>
                <li><strong>{language === 'fr' ? "Documents PDF/Word" : "PDF/Word documents"} :</strong> {language === 'fr' ? "Importez vos guides, FAQ, politiques" : "Import your guides, FAQ, policies"}</li>
                <li><strong>{language === 'fr' ? "Ajout manuel" : "Manual addition"} :</strong> {language === 'fr' ? "Saisissez manuellement les infos importantes" : "Manually enter important information"}</li>
                <li><strong>{language === 'fr' ? "Apprentissage continu" : "Continuous learning"} :</strong> {language === 'fr' ? "L'IA s'améliore avec chaque conversation" : "AI improves with each conversation"}</li>
                <li><strong>{language === 'fr' ? "Mise à jour facile" : "Easy updates"} :</strong> {language === 'fr' ? "Modifiez la base de connaissances depuis votre tableau de bord" : "Update knowledge base from your dashboard"}</li>
              </ul>
              <p className="mt-3 text-sm text-blue-600">
                🧠 {language === 'fr' ? "Plus vous l'utilisez, plus votre vendeur IA devient expert sur vos produits et clients." : "The more you use it, the more expert your AI seller becomes about your products and customers."}
              </p>
            </div>
          ),
          icon: <BarChart3 className="w-5 h-5" />
        }
      ]
    },
    {
      title: language === 'fr' ? "Questions Business" : "Business Questions",
      icon: <Users className="w-5 h-5" />,
      questions: [
        {
          question: language === 'fr' ? 
            "Combien de temps pour voir des résultats ?" : 
            "How long to see results?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>
                  {language === 'fr' ? 
                    "Les résultats sont immédiats :" :
                    "Results are immediate:"
                  }
                </strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{language === 'fr' ? "Jour 1" : "Day 1"} :</strong> {language === 'fr' ? "Vendeur IA opérationnel et conversations actives" : "AI Seller operational and active conversations"}</li>
                <li><strong>{language === 'fr' ? "Semaine 1" : "Week 1"} :</strong> {language === 'fr' ? "+40% d'engagement visiteurs en moyenne" : "+40% visitor engagement on average"}</li>
                <li><strong>{language === 'fr' ? "Semaine 2-3" : "Week 2-3"} :</strong> {language === 'fr' ? "+65% de taux de conversion observé" : "+65% conversion rate observed"}</li>
                <li><strong>{language === 'fr' ? "Mois 1" : "Month 1"} :</strong> {language === 'fr' ? "ROI positif garanti" : "Positive ROI guaranteed"}</li>
                <li><strong>{language === 'fr' ? "Mois 2-3" : "Month 2-3"} :</strong> {language === 'fr' ? "Optimisation complète" : "Complete optimization"}</li>
              </ul>
              <p className="mt-3 text-sm text-green-600">
                📈 <strong>
                  {language === 'fr' ? 
                    "Résultat typique : Environ 2,800€ de revenus supplémentaires dès le premier mois (pour 1000 visiteurs/mois)." :
                    "Typical result: About $3,000 additional revenue from the first month (for 1000 visitors/month)."
                  }
                </strong>
              </p>
            </div>
          ),
          icon: <BarChart3 className="w-5 h-5" />
        },
        {
          question: language === 'fr' ? 
            "ChatSeller va-t-il remplacer mon équipe de vente ?" : 
            "Will ChatSeller replace my sales team?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>
                  {language === 'fr' ? 
                    "Non, ChatSeller complète et optimise votre équipe :" :
                    "No, ChatSeller complements and optimizes your team:"
                  }
                </strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{language === 'fr' ? "Première ligne" : "First line"} :</strong> {language === 'fr' ? "Votre vendeur IA gère les questions répétitives 24h/24" : "Your AI seller handles repetitive questions 24/7"}</li>
                <li><strong>{language === 'fr' ? "Qualification" : "Qualification"} :</strong> {language === 'fr' ? "Il qualifie les potentiels clients avant de les transférer" : "It qualifies potential customers before transferring them"}</li>
                <li><strong>{language === 'fr' ? "Gain de temps" : "Time saving"} :</strong> {language === 'fr' ? "Votre équipe se concentre sur les ventes complexes" : "Your team focuses on complex sales"}</li>
                <li><strong>{language === 'fr' ? "Escalade intelligente" : "Smart escalation"} :</strong> {language === 'fr' ? "Au besoin, l'IA bascule automatiquement vers un humain" : "When needed, AI automatically switches to human"}</li>
                <li><strong>{language === 'fr' ? "Formation équipe" : "Team training"} :</strong> {language === 'fr' ? "Analytics pour améliorer vos vendeurs" : "Analytics to improve your salespeople"}</li>
              </ul>
              <p className="mt-3 text-sm text-blue-600">
                👥 {language === 'fr' ? "Résultat : Votre équipe devient 3x plus efficace en se concentrant sur les vraies opportunités." : "Result: Your team becomes 3x more efficient by focusing on real opportunities."}
              </p>
            </div>
          ),
          icon: <Users className="w-5 h-5" />
        },
        {
          question: language === 'fr' ? 
            "Puis-je personnaliser la personnalité de l'agent IA ?" : 
            "Can I customize the AI agent's personality?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>
                  {language === 'fr' ? 
                    "Absolument ! Vous avez le contrôle total sur votre vendeur IA :" :
                    "Absolutely! You have full control over your AI seller:"
                  }
                </strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{language === 'fr' ? "Personnalité" : "Personality"} :</strong> {language === 'fr' ? "Professionnel, décontracté, expert, amical..." : "Professional, casual, expert, friendly..."}</li>
                <li><strong>{language === 'fr' ? "Ton de voix" : "Tone of voice"} :</strong> {language === 'fr' ? "Adapté à votre marque et clientèle" : "Adapted to your brand and clientele"}</li>
                <li><strong>Avatar :</strong> {language === 'fr' ? "Logo, nom, titre personnalisables" : "Customizable logo, name, title"}</li>
                <li><strong>{language === 'fr' ? "Messages types" : "Template messages"} :</strong> {language === 'fr' ? "Salutations et réponses sur mesure" : "Custom greetings and responses"}</li>
                <li><strong>{language === 'fr' ? "Spécialisation" : "Specialization"} :</strong> {language === 'fr' ? "Mode, tech, alimentaire, beauté..." : "Fashion, tech, food, beauty..."}</li>
                <li><strong>{language === 'fr' ? "Couleurs" : "Colors"} :</strong> {language === 'fr' ? "Widget aux couleurs de votre marque" : "Widget in your brand colors"}</li>
              </ul>
              <p className="mt-3 text-sm text-purple-600">
                🎨 {language === 'fr' ? "Votre agent IA devient une vraie extension de votre équipe avec votre identité." : "Your AI agent becomes a true extension of your team with your identity."}
              </p>
            </div>
          ),
          icon: <Users className="w-5 h-5" />
        },
        {
          question: language === 'fr' ? 
            "Que se passe-t-il si le vendeur IA n'a pas la réponse à une question ?" : 
            "What happens if the AI seller doesn't have the answer to a question?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>
                  {language === 'fr' ? 
                    "Un système de fallback intelligent est intégré pour cela :" :
                    "An intelligent fallback system is integrated for this:"
                  }
                </strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{language === 'fr' ? "Admission honnête" : "Honest admission"} :</strong> {language === 'fr' ? '"Je vais chercher cette information pour vous"' : '"I will look up this information for you"'}</li>
                <li><strong>{language === 'fr' ? "Collecte contact" : "Contact collection"} :</strong> {language === 'fr' ? "Récupère nom/telephone pour suivi humain" : "Collects name/phone for human follow-up"}</li>
                <li><strong>{language === 'fr' ? "Notification équipe" : "Team notification"} :</strong> {language === 'fr' ? "Votre équipe reçoit la question" : "Your team receives the question"}</li>
                <li><strong>{language === 'fr' ? "Base apprentissage" : "Learning base"} :</strong> {language === 'fr' ? "La question enrichit la base de connaissances" : "Question enriches the knowledge base"}</li>
                <li><strong>{language === 'fr' ? "Réponse rapide" : "Quick response"} :</strong> {language === 'fr' ? "Votre équipe répond à la question" : "Your team answers the question"}</li>
              </ul>
              <p className="mt-3 text-sm text-orange-600">
                🔄 {language === 'fr' ? "Chaque question non résolue améliore le vendeur IA pour les prochains clients." : "Each unresolved question improves the AI seller for future customers."}
              </p>
            </div>
          ),
          icon: <MessageCircle className="w-5 h-5" />
        }
      ]
    },
    {
      title: language === 'fr' ? "Questions Pricing & Engagement" : "Pricing & Commitment Questions",
      icon: <CreditCard className="w-5 h-5" />,
      questions: [
        {
          question: language === 'fr' ? 
            "Y a-t-il des frais cachés ou commissions sur mes ventes ?" : 
            "Are there hidden fees or commissions on my sales?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>
                  {language === 'fr' ? 
                    "Prix 100% transparent, aucune commission :" :
                    "100% transparent pricing, no commission:"
                  }
                </strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{language === 'fr' ? "Prix fixe" : "Fixed price"} :</strong> {language === 'fr' ? "14€/mois (Starter) ou 29€/mois (Pro), c'est tout" : "$14/month (Starter) or $29/month (Pro), that's it"}</li>
                <li><strong>{language === 'fr' ? "Aucune commission" : "No commission"} :</strong> {language === 'fr' ? "0% sur vos ventes, 100% pour vous" : "0% on your sales, 100% for you"}</li>
                <li><strong>{language === 'fr' ? "Pas de frais cachés" : "No hidden fees"} :</strong> {language === 'fr' ? "Installation, mises à jour, support inclus" : "Installation, updates, support included"}</li>
                <li><strong>{language === 'fr' ? "Pas de limite" : "No limits"} :</strong> {language === 'fr' ? "Vendez autant que vous voulez" : "Sell as much as you want"}</li>
                <li><strong>{language === 'fr' ? "Facture simple" : "Simple billing"} :</strong> {language === 'fr' ? "Un seul prélèvement mensuel" : "Single monthly charge"}</li>
              </ul>
              <p className="mt-3 text-sm text-green-600">
                💰 <strong>
                  {language === 'fr' ? 
                    "Exemple : Si vous générez +5,000€/mois grâce à ChatSeller, vous payez toujours 14€ ou 29€ par mois." :
                    "Example: If you generate +$5,000/month thanks to ChatSeller, you still pay $14 or $29 per month."
                  }
                </strong>
              </p>
            </div>
          ),
          icon: <CreditCard className="w-5 h-5" />
        },
        {
          question: language === 'fr' ? 
            "Le plan gratuit est-il gratuit à vie ?" : 
            "Is the free plan free for life?",
          answer: (
            <div>
              <p className="mb-3">
                {language === 'fr' ? 
                  "Non, le plan gratuit est limité à 7 jours. Il vous permet de tester Chatseller et décider si l'investissement en vaut le coup." :
                  "No, the free plan is limited to 7 days. It allows you to test ChatSeller and decide if the investment is worth it."
                }
              </p>
              <p className="mt-3 text-sm text-blue-600">
                🎁 {language === 'fr' ? "Nous sommes confiants que vous allez adorer ChatSeller et vouloir passer naturellement au plan payant." : "We're confident you'll love ChatSeller and naturally want to upgrade to a paid plan."}
              </p>
            </div>
          ),
          icon: <CreditCard className="w-5 h-5" />
        },
        {
          question: language === 'fr' ? 
            "Puis-je annuler à tout moment ?" : 
            "Can I cancel anytime?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>
                  {language === 'fr' ? 
                    "Absolument ! Vous avez une liberté totale, et aucun engagement n'est requis :" :
                    "Absolutely! You have complete freedom, and no commitment is required:"
                  }
                </strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{language === 'fr' ? "Annulation en 1 clic" : "1-click cancellation"} :</strong> {language === 'fr' ? "Depuis votre tableau de bord" : "From your dashboard"}</li>
                <li><strong>{language === 'fr' ? "Aucun préavis" : "No notice period"} :</strong> {language === 'fr' ? "Pas de période de préavis obligatoire" : "No mandatory notice period"}</li>
                <li><strong>{language === 'fr' ? "Prorata" : "Pro-rata"} :</strong> {language === 'fr' ? "Remboursement au prorata si annulation" : "Pro-rata refund if cancelled"}</li>
                <li><strong>{language === 'fr' ? "Export données" : "Data export"} :</strong> {language === 'fr' ? "Récupérez vos conversations et analytics" : "Retrieve your conversations and analytics"}</li>
                <li><strong>{language === 'fr' ? "Réactivation facile" : "Easy reactivation"} :</strong> {language === 'fr' ? "Reprenez quand vous voulez" : "Resume whenever you want"}</li>
              </ul>
              <p className="mt-3 text-sm text-green-600">
                ✅ <strong>
                  {language === 'fr' ? 
                    "Garantie 30 jours : Satisfait ou 100% remboursé, sans justification." :
                    "30-day guarantee: Satisfied or 100% refunded, no questions asked."
                  }
                </strong>
              </p>
            </div>
          ),
          icon: <Shield className="w-5 h-5" />
        },
        {
          question: language === 'fr' ? 
            "Quelle est la différence avec les autres chatbots ?" : 
            "What's the difference with other chatbots?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>
                  {language === 'fr' ? 
                    "ChatSeller n'est pas un chatbot, c'est un vendeur IA :" :
                    "ChatSeller is not a chatbot, it's an AI seller:"
                  }
                </strong>
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <h5 className="font-semibold text-gray-900 mb-2">
                  {language === 'fr' ? "Chatbots traditionnels :" : "Traditional chatbots:"}
                </h5>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>{language === 'fr' ? "Réponses automatiques basiques" : "Basic automatic responses"}</li>
                  <li>{language === 'fr' ? "FAQ statique" : "Static FAQ"}</li>
                  <li>{language === 'fr' ? "Pas de collecte de commandes" : "No order collection"}</li>
                  <li>{language === 'fr' ? "Pas de recommandation de produits" : "No product recommendations"}</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-900 mb-2">ChatSeller :</h5>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>{language === 'fr' ? "Conversations naturelles" : "Natural conversations"}</li>
                  <li>{language === 'fr' ? "Collecte vraiment les commandes" : "Actually collects orders"}</li>
                  <li>{language === 'fr' ? "Recommandation intelligente de produits" : "Intelligent product recommendations"}</li>
                  <li>{language === 'fr' ? "Apprentissage sur vos produits spécifiques" : "Learning about your specific products"}</li>
                  <li>{language === 'fr' ? "Analytics de conversion avancées" : "Advanced conversion analytics"}</li>
                </ul>
              </div>
            </div>
          ),
          icon: <Zap className="w-5 h-5" />
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      categoryIndex,
      globalIndex: categoryIndex * 10 + questionIndex
    }))
  );

  return (
    <section id="faq" className="py-24 relative bg-gradient-to-b from-white to-blue-50">
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-purple-50/50 rounded-l-3xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-blue-200 rounded-full bg-blue-50 text-sm font-medium text-blue-700 animate-fade-in">
            <MessageCircle className="w-4 h-4 mr-2" />
            {t('faqAllQuestions')}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            {t('faqTitle')}
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> ChatSeller</span>
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
            {t('faqSubtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 animate-fade-in [animation-delay:600ms]">
            {allQuestions.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                icon={item.icon}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
          
          {/* Contact CTA */}
          <div className="mt-12 animate-fade-in [animation-delay:800ms]">
            <ContactCTA />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;