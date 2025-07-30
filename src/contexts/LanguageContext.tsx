// src/contexts/LanguageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface Translations {
  // Navigation
  features: string;
  demo: string;
  pricing: string;
  login: string;
  tryFree: string;
  switchToFrench: string;
  switchToEnglish: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroInstallation: string;
  heroTrialDays: string;
  heroNoCard: string;
  heroStartTrial: string;
  heroTalkToAdvisor: string;
  
  // Problem-Solution
  problemTitle: string;
  problemSubtitle: string;
  problemNoAssistance: string;
  problemNoAssistanceDesc: string;
  problemNoAnswers: string;
  problemNoAnswersDesc: string;
  problemLowConversion: string;
  problemLowConversionDesc: string;
  
  solutionTitle: string;
  solutionSubtitle: string;
  solutionAI247: string;
  solutionAI247Desc: string;
  solutionCollectOrders: string;
  solutionCollectOrdersDesc: string;
  solutionUpsell: string;
  solutionUpsellDesc: string;
  
  // Features
  featuresTitle: string;
  featuresSubtitle: string;
  instantResponses: string;
  instantResponsesDesc: string;
  orderCollection: string;
  orderCollectionDesc: string;
  productSuggestions: string;
  productSuggestionsDesc: string;
  realTimeTracking: string;
  realTimeTrackingDesc: string;
  expressInstall: string;
  expressInstallDesc: string;
  mobileOptimized: string;
  mobileOptimizedDesc: string;
  
  // Demo
  demoTitle: string;
  demoSubtitle: string;
  demoTip: string;
  startTrial: string;
  
  // Comparison
  comparisonTitle: string;
  comparisonSubtitle: string;
  whyChooseTitle: string;
  traditionalEcommerce: string;
  basicChatbots: string;
  chatsellerSolution: string;
  
  // Pricing
  pricingTitle: string;
  pricingSubtitle: string;
  starterPlan: string;
  starterDesc: string;
  proPlan: string;
  proDesc: string;
  enterprisePlan: string;
  enterpriseDesc: string;
  startTrial7Days: string;
  contactUs: string;
  
  // FAQ
  faqTitle: string;
  faqSubtitle: string;
  faqInstallQuestion: string;
  faqInstallAnswer: string;
  faqAIQuestion: string;
  faqAIAnswer: string;
  faqTrialQuestion: string;
  faqTrialAnswer: string;
  faqLanguageQuestion: string;
  faqLanguageAnswer: string;
  faqSecurityQuestion: string;
  faqSecurityAnswer: string;
  faqCustomizationQuestion: string;
  faqCustomizationAnswer: string;
  
  // Chat
  chatAssistant: string;
  online: string;
  offlineMode: string;
  typeMessage: string;
  welcome: string;
  
  // Common
  learnMore: string;
  getStarted: string;
  freeTrialDays: string;
  noCardRequired: string;
  installMinutes: string;
}

const translations: Record<Language, Translations> = {
  fr: {
    // Navigation
    features: 'Fonctionnalités',
    demo: 'Démo',
    pricing: 'Tarifs',
    login: 'Connexion',
    tryFree: 'Essayer gratuitement',
    switchToFrench: 'FR',
    switchToEnglish: 'EN',
    
    // Hero Section
    heroTitle: 'Le Vendeur IA qui transforme vos visiteurs en clients.',
    heroSubtitle: 'ChatSeller est un Agent IA qui discute avec vos clients, répond intelligemment à leurs questions et collecte leurs commandes, 24h/24.',
    heroInstallation: 'Installation en 2 minutes',
    heroTrialDays: '7 jours d\'essai gratuit',
    heroNoCard: 'Carte bancaire non exigée',
    heroStartTrial: 'Tester Chatseller maintenant',
    heroTalkToAdvisor: 'Parler à un conseiller',
    
    // Problem-Solution
    problemTitle: '73% de vos visiteurs partent sans acheter',
    problemSubtitle: 'Parce qu\'ils ont des questions, des doutes, et qu\'il n\'y a personne pour les aider et les rassurer.',
    problemNoAssistance: 'Aucune assistance en ligne',
    problemNoAssistanceDesc: 'Vos visiteurs sont seuls face à vos produits. Personne pour les conseiller ou les rassurer.',
    problemNoAnswers: 'Questions sans réponses',
    problemNoAnswersDesc: 'Les clients ont des questions. Tant qu\'on ne leur répond pas, ils hésitent et abandonnent leur achat.',
    problemLowConversion: 'Taux de conversion faible',
    problemLowConversionDesc: 'Seulement 2-3% de conversion moyenne',
    
    solutionTitle: 'Transformez chaque visiteur en client',
    solutionSubtitle: 'Avec ChatSeller, vos clients vivent la même expérience qu\'en boutique physique',
    solutionAI247: 'Vendeur IA 24/7',
    solutionAI247Desc: 'Accueille et conseille chaque visiteur',
    solutionCollectOrders: 'Collecte les commandes',
    solutionCollectOrdersDesc: 'Récupère nom, téléphone, adresse dans la conversation',
    solutionUpsell: 'Ventes additionnelles',
    solutionUpsellDesc: '+34% de panier moyen automatiquement',
    
    // Features
    featuresTitle: 'Tout ce dont vous avez besoin pour transformer vos visiteurs en clients',
    featuresSubtitle: 'Toutes les fonctions qu\'il vous faut pour vendre plus, plus vite, sans rester collé à votre téléphone.',
    instantResponses: 'Réponses instantanées et naturelles',
    instantResponsesDesc: 'Votre vendeur IA est formé sur vos produits et répond comme un vrai commercial expérimenté.',
    orderCollection: 'Prise de Commandes en direct',
    orderCollectionDesc: 'Il collecte naturellement nom, téléphone, adresse dans la conversation et crée la commande.',
    productSuggestions: 'Suggestion de produits en plus',
    productSuggestionsDesc: 'Il propose automatiquement des produits complémentaires basés sur les préférences du client.',
    realTimeTracking: 'Suivi des ventes en temps réel',
    realTimeTrackingDesc: 'Vous disposez d\'un tableau de bord complet pour suivre vos conversations et vos ventes en temps réel.',
    expressInstall: 'Installation Express',
    expressInstallDesc: 'Vous pouvez intégrer Chatseller en 2 minutes sur votre boutique Shopify, WooCommerce, Wix ou autre.',
    mobileOptimized: '100% adapté aux smartphones',
    mobileOptimizedDesc: 'L\'interface de Chatseller est parfaitement adaptée aux Smartphones pour une expérience utilisateur optimale.',
    
    // Demo
    demoTitle: 'Testez ChatSeller en live',
    demoSubtitle: 'Discutez avec notre Agent IA pour découvrir comment il peut transformer votre boutique',
    demoTip: 'Essayez de lui poser des questions sur les prix, l\'installation ou les fonctionnalités !',
    startTrial: 'Commencer l\'essai gratuit',
    
    // Comparison
    comparisonTitle: 'Pourquoi choisir ChatSeller',
    comparisonSubtitle: 'Comparaison honnête entre ChatSeller et les autres options disponibles sur le marché',
    whyChooseTitle: 'Voici pourquoi ChatSeller surpasse la concurrence',
    traditionalEcommerce: 'E-commerce Classique',
    basicChatbots: 'Chatbots Basiques',
    chatsellerSolution: 'ChatSeller',
    
    // Pricing
    pricingTitle: 'Choisissez le plan parfait pour booster vos ventes',
    pricingSubtitle: 'Commencez avec 7 jours gratuits et évoluez selon vos besoins. Aucun engagement, annulation en 1 clic.',
    starterPlan: 'Starter',
    starterDesc: 'Parfait pour débuter avec ChatSeller',
    proPlan: 'Professional',
    proDesc: 'Pour les e-commerçants sérieux',
    enterprisePlan: 'Enterprise',
    enterpriseDesc: 'Pour les grandes entreprises',
    startTrial7Days: 'Commencer l\'essai 7 jours gratuits',
    contactUs: 'Nous contacter',
    
    // FAQ
    faqTitle: 'Tout ce que vous devez savoir sur ChatSeller',
    faqSubtitle: 'Les réponses aux questions les plus posées par nos futurs clients',
    faqInstallQuestion: 'Comment ChatSeller s\'installe-t-il sur mon site ?',
    faqInstallAnswer: 'L\'installation est ultra-simple ! Après avoir créé votre compte, vous copiez un petit code JavaScript dans votre site (comme Google Analytics). Compatible avec Shopify, WooCommerce, Wix, et tous les sites personnalisés. L\'installation prend littéralement 2 minutes.',
    faqAIQuestion: 'L\'agent IA peut-il vraiment remplacer un vendeur humain ?',
    faqAIAnswer: 'L\'agent IA ChatSeller est spécialement formé pour la vente en ligne. Il connaît vos produits, répond aux questions courantes, rassure sur les garanties, propose des produits complémentaires et collecte les commandes. Pour les cas complexes, il peut transférer vers un humain. Nos clients voient en moyenne +147% de conversion !',
    faqTrialQuestion: 'Que se passe-t-il après les 7 jours d\'essai gratuit ?',
    faqTrialAnswer: 'Après 7 jours, vous choisissez votre plan ou votre compte reste gratuit avec des fonctions limitées. Aucune carte bancaire n\'est demandée pendant l\'essai. Vous pouvez annuler en 1 clic à tout moment, sans frais cachés.',
    faqLanguageQuestion: 'ChatSeller fonctionne-t-il en français et en anglais ?',
    faqLanguageAnswer: 'Oui ! ChatSeller est parfaitement bilingue français/anglais. Vous pouvez configurer la langue par défaut, et l\'IA s\'adapte automatiquement à la langue du client. Idéal pour toucher une clientèle internationale.',
    faqSecurityQuestion: 'Mes données et celles de mes clients sont-elles sécurisées ?',
    faqSecurityAnswer: 'Absolument ! ChatSeller est conforme RGPD. Toutes les données sont chiffrées et hébergées en Europe. Nous ne vendons jamais vos données. Vous gardez le contrôle total sur les informations collectées.',
    faqCustomizationQuestion: 'Puis-je personnaliser l\'apparence et le comportement de l\'agent ?',
    faqCustomizationAnswer: 'Oui ! Vous pouvez personnaliser l\'avatar, les couleurs, les messages d\'accueil, et même la personnalité de votre agent IA. Vous pouvez aussi lui donner des instructions spécifiques sur vos produits et votre façon de vendre.',
    
    // Chat
    chatAssistant: 'Assistant IA',
    online: 'En ligne',
    offlineMode: 'Mode hors ligne',
    typeMessage: 'Tapez votre message...',
    welcome: 'Bonjour ! Je suis votre assistant IA. Comment puis-je vous aider aujourd\'hui ?',
    
    // Common
    learnMore: 'En savoir plus',
    getStarted: 'Commencer',
    freeTrialDays: '7 jours d\'essai gratuit',
    noCardRequired: 'Aucune carte bancaire requise',
    installMinutes: 'Installation en 2 minutes'
  },
  
  en: {
    // Navigation
    features: 'Features',
    demo: 'Demo',
    pricing: 'Pricing',
    login: 'Login',
    tryFree: 'Try for free',
    switchToFrench: 'FR',
    switchToEnglish: 'EN',
    
    // Hero Section
    heroTitle: 'The AI Sales Agent that turns visitors into customers.',
    heroSubtitle: 'ChatSeller is an AI Agent that talks to your customers, intelligently answers their questions, and collects their orders, 24/7.',
    heroInstallation: '2-minute installation',
    heroTrialDays: '7-day free trial',
    heroNoCard: 'No credit card required',
    heroStartTrial: 'Try ChatSeller now',
    heroTalkToAdvisor: 'Talk to an advisor',
    
    // Problem-Solution
    problemTitle: '73% of your visitors leave without buying',
    problemSubtitle: 'Because they have questions, doubts, and there\'s no one to help and reassure them.',
    problemNoAssistance: 'No online assistance',
    problemNoAssistanceDesc: 'Your visitors are alone with your products. No one to advise or reassure them.',
    problemNoAnswers: 'Unanswered questions',
    problemNoAnswersDesc: 'Customers have questions. As long as they\'re not answered, they hesitate and abandon their purchase.',
    problemLowConversion: 'Low conversion rate',
    problemLowConversionDesc: 'Only 2-3% average conversion',
    
    solutionTitle: 'Turn every visitor into a customer',
    solutionSubtitle: 'With ChatSeller, your customers experience the same as in a physical store',
    solutionAI247: 'AI Sales Agent 24/7',
    solutionAI247Desc: 'Welcomes and advises every visitor',
    solutionCollectOrders: 'Collects orders',
    solutionCollectOrdersDesc: 'Gathers name, phone, address in the conversation',
    solutionUpsell: 'Additional sales',
    solutionUpsellDesc: '+34% average cart automatically',
    
    // Features
    featuresTitle: 'Everything you need to turn visitors into customers',
    featuresSubtitle: 'All the functions you need to sell more, faster, without being glued to your phone.',
    instantResponses: 'Instant and natural responses',
    instantResponsesDesc: 'Your AI sales agent is trained on your products and responds like an experienced salesperson.',
    orderCollection: 'Live Order Collection',
    orderCollectionDesc: 'It naturally collects name, phone, address in the conversation and creates the order.',
    productSuggestions: 'Additional product suggestions',
    productSuggestionsDesc: 'It automatically suggests complementary products based on customer preferences.',
    realTimeTracking: 'Real-time sales tracking',
    realTimeTrackingDesc: 'You have a complete dashboard to track your conversations and sales in real time.',
    expressInstall: 'Express Installation',
    expressInstallDesc: 'You can integrate ChatSeller in 2 minutes on your Shopify, WooCommerce, Wix or other store.',
    mobileOptimized: '100% smartphone optimized',
    mobileOptimizedDesc: 'ChatSeller\'s interface is perfectly adapted to smartphones for optimal user experience.',
    
    // Demo
    demoTitle: 'Test ChatSeller live',
    demoSubtitle: 'Chat with our AI Agent to discover how it can transform your store',
    demoTip: 'Try asking questions about pricing, installation, or features!',
    startTrial: 'Start free trial',
    
    // Comparison
    comparisonTitle: 'Why choose ChatSeller',
    comparisonSubtitle: 'Honest comparison between ChatSeller and other options available on the market',
    whyChooseTitle: 'Here\'s why ChatSeller outperforms the competition',
    traditionalEcommerce: 'Traditional E-commerce',
    basicChatbots: 'Basic Chatbots',
    chatsellerSolution: 'ChatSeller',
    
    // Pricing
    pricingTitle: 'Choose the perfect plan to boost your sales',
    pricingSubtitle: 'Start with 7 free days and evolve according to your needs. No commitment, cancel in 1 click.',
    starterPlan: 'Starter',
    starterDesc: 'Perfect to get started with ChatSeller',
    proPlan: 'Professional',
    proDesc: 'For serious e-commerce businesses',
    enterprisePlan: 'Enterprise',
    enterpriseDesc: 'For large companies',
    startTrial7Days: 'Start 7-day free trial',
    contactUs: 'Contact us',
    
    // FAQ
    faqTitle: 'Everything you need to know about ChatSeller',
    faqSubtitle: 'Answers to the most frequently asked questions by our future customers',
    faqInstallQuestion: 'How does ChatSeller install on my site?',
    faqInstallAnswer: 'Installation is ultra-simple! After creating your account, you copy a small JavaScript code into your site (like Google Analytics). Compatible with Shopify, WooCommerce, Wix, and all custom sites. Installation literally takes 2 minutes.',
    faqAIQuestion: 'Can the AI agent really replace a human salesperson?',
    faqAIAnswer: 'The ChatSeller AI agent is specially trained for online sales. It knows your products, answers common questions, reassures about warranties, suggests complementary products, and collects orders. For complex cases, it can transfer to a human. Our customers see an average of +147% conversion!',
    faqTrialQuestion: 'What happens after the 7-day free trial?',
    faqTrialAnswer: 'After 7 days, you choose your plan or your account remains free with limited functions. No credit card is required during the trial. You can cancel in 1 click at any time, without hidden fees.',
    faqLanguageQuestion: 'Does ChatSeller work in French and English?',
    faqLanguageAnswer: 'Yes! ChatSeller is perfectly bilingual French/English. You can configure the default language, and the AI automatically adapts to the customer\'s language. Ideal for reaching an international clientele.',
    faqSecurityQuestion: 'Are my data and my customers\' data secure?',
    faqSecurityAnswer: 'Absolutely! ChatSeller is GDPR compliant. All data is encrypted and hosted in Europe. We never sell your data. You maintain full control over the information collected.',
    faqCustomizationQuestion: 'Can I customize the appearance and behavior of the agent?',
    faqCustomizationAnswer: 'Yes! You can customize the avatar, colors, welcome messages, and even your AI agent\'s personality. You can also give it specific instructions about your products and your way of selling.',
    
    // Chat
    chatAssistant: 'AI Assistant',
    online: 'Online',
    offlineMode: 'Offline mode',
    typeMessage: 'Type your message...',
    welcome: 'Hello! I\'m your AI assistant. How can I help you today?',
    
    // Common
    learnMore: 'Learn more',
    getStarted: 'Get started',
    freeTrialDays: '7-day free trial',
    noCardRequired: 'No credit card required',
    installMinutes: '2-minute installation'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: keyof Translations): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};