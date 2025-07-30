// src/contexts/LanguageContext.tsx - TRADUCTION COMPLÈTE
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
  accessDashboard: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroInstallation: string;
  heroTrialDays: string;
  heroNoCard: string;
  heroStartTrial: string;
  heroTalkToAdvisor: string;
  heroSeeInAction: string;
  heroCreateAI: string;
  heroIntegrableEverywhere: string;
  
  // Problem-Solution
  problemTitle: string;
  problemSubtitle: string;
  problemBadge: string;
  problemNoAssistance: string;
  problemNoAssistanceDesc: string;
  problemNoAnswers: string;
  problemNoAnswersDesc: string;
  problemLowConversion: string;
  problemLowConversionDesc: string;
  
  solutionTitle: string;
  solutionSubtitle: string;
  solutionBadge: string;
  solutionAI247: string;
  solutionAI247Desc: string;
  solutionCollectOrders: string;
  solutionCollectOrdersDesc: string;
  solutionUpsell: string;
  solutionUpsellDesc: string;
  solutionTestFree: string;
  solutionInstallInfo: string;
  
  // Features
  featuresTitle: string;
  featuresSubtitle: string;
  featuresBadge: string;
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
  demoBadge: string;
  demoDesktop: string;
  demoMobile: string;
  demoTestNow: string;
  demoClickToTest: string;
  demoTalkToSeller: string;
  startTrial: string;
  
  // Comparison
  comparisonTitle: string;
  comparisonSubtitle: string;
  comparisonBadge: string;
  whyChooseTitle: string;
  traditionalEcommerce: string;
  basicChatbots: string;
  chatsellerSolution: string;
  comparisonTable: string;
  detailedComparison: string;
  hideComparison: string;
  showComparison: string;
  whyWinsTitle: string;
  trueAI: string;
  trueAIDesc: string;
  realOrderCollection: string;
  realOrderCollectionDesc: string;
  designedForAfrica: string;
  designedForAfricaDesc: string;
  smartUpsell: string;
  smartUpsellDesc: string;
  ultraFastInstall: string;
  ultraFastInstallDesc: string;
  profitableInvestment: string;
  profitableInvestmentDesc: string;
  
  // Social Proof
  socialProofTitle: string;
  socialProofSubtitle: string;
  socialProofBadge: string;
  socialProofCTA: string;
  socialProofCTADesc: string;
  socialProofCTAButton: string;
  socialProofBenefits: string;
  rgpdCompliant: string;
  rgpdDesc: string;
  madeInAfrica: string;
  madeInAfricaDesc: string;
  support247: string;
  support247Desc: string;
  
  // Pricing
  pricingTitle: string;
  pricingSubtitle: string;
  pricingBadge: string;
  starterPlan: string;
  starterDesc: string;
  proPlan: string;
  proDesc: string;
  enterprisePlan: string;
  enterpriseDesc: string;
  startTrial7Days: string;
  contactUs: string;
  freeTrial: string;
  mostPopular: string;
  customSolution: string;
  roiCalculatorTitle: string;
  currentSituation: string;
  withChatseller: string;
  monthlyVisitors: string;
  currentConversion: string;
  averageCart: string;
  conversionsMonth: string;
  revenueMonth: string;
  newConversionRate: string;
  newRevenue: string;
  additionalProfit: string;
  roiPerMonth: string;
  paybackTime: string;
  
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
  addToCart: string;
}

const translations: Record<Language, Translations> = {
  fr: {
    // Navigation
    features: 'Fonctionnalités',
    demo: 'Démo',
    pricing: 'Tarifs',
    login: 'Connexion',
    tryFree: 'Créer mon Vendeur IA',
    switchToFrench: 'FR',
    switchToEnglish: 'EN',
    accessDashboard: 'Accéder au Dashboard',
    
    // Hero Section
    heroTitle: 'Le Vendeur IA qui transforme vos visiteurs en clients.',
    heroSubtitle: 'Créez un Vendeur IA qui discute avec vos clients, répond intelligemment à leurs questions et collecte leurs commandes, 24h/24.',
    heroInstallation: 'Installation en 2 minutes',
    heroTrialDays: '7 jours d\'essai gratuit',
    heroNoCard: 'Carte bancaire non exigée',
    heroStartTrial: 'Créer mon Vendeur IA',
    heroTalkToAdvisor: 'Parler à un conseiller',
    heroSeeInAction: 'Voir ChatSeller en action',
    heroCreateAI: 'Créer mon Vendeur IA',
    heroIntegrableEverywhere: 'Intégrable sur n\'importe quelle boutique en ligne',
    
    // Problem-Solution
    problemTitle: '73% de vos visiteurs partent sans acheter',
    problemSubtitle: 'Parce qu\'ils ont des questions, des doutes, et qu\'il n\'y a personne pour les aider et les rassurer.',
    problemBadge: 'Le problème de tous les e-commerçants',
    problemNoAssistance: 'Aucune assistance',
    problemNoAssistanceDesc: 'Vos clients sont seuls face à vos produits',
    problemNoAnswers: 'Questions sans réponses',
    problemNoAnswersDesc: '68% des questions restent sans réponse',
    problemLowConversion: 'Taux de conversion faible',
    problemLowConversionDesc: 'Seulement 2-3% de conversion moyenne',
    
    solutionTitle: 'Transformez chaque visiteur en client',
    solutionSubtitle: 'Avec ChatSeller, vos clients vivent la même expérience qu\'en boutique physique',
    solutionBadge: 'La solution ChatSeller',
    solutionAI247: 'Vendeur IA 24/7',
    solutionAI247Desc: 'Accueille et conseille chaque visiteur',
    solutionCollectOrders: 'Collecte les commandes',
    solutionCollectOrdersDesc: 'Récupère nom, téléphone, adresse dans la conversation',
    solutionUpsell: 'Ventes additionnelles',
    solutionUpsellDesc: '+34% de panier moyen automatiquement',
    solutionTestFree: 'Tester ChatSeller 7 jours gratuits',
    solutionInstallInfo: 'Installation en 2 minutes • Sans carte bancaire • Annulation en 1 clic',
    
    // Features
    featuresTitle: 'Tout ce dont vous avez besoin pour transformer vos visiteurs en clients',
    featuresSubtitle: 'Toutes les fonctions qu\'il vous faut pour vendre plus, plus vite, sans rester collé à votre téléphone.',
    featuresBadge: 'Plus qu\'un chatbot : un vendeur IA complet',
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
    demoBadge: 'Démo en temps réel',
    demoDesktop: 'Vue Desktop',
    demoMobile: 'Vue Mobile',
    demoTestNow: 'Tester le Vendeur IA maintenant',
    demoClickToTest: 'Cliquez sur "Tester maintenant" pour continuer cette conversation !',
    demoTalkToSeller: 'Parler à la vendeuse',
    startTrial: 'Commencer l\'essai gratuit',
    
    // Comparison
    comparisonTitle: 'Pourquoi choisir ChatSeller',
    comparisonSubtitle: 'Comparaison honnête entre ChatSeller et les autres options disponibles sur le marché',
    comparisonBadge: 'Comparaison objective et transparente',
    whyChooseTitle: 'Voici pourquoi ChatSeller surpasse la concurrence',
    traditionalEcommerce: 'E-commerce Classique',
    basicChatbots: 'Chatbots Basiques',
    chatsellerSolution: 'ChatSeller',
    comparisonTable: 'Tableau comparatif',
    detailedComparison: 'Comparaison détaillée',
    hideComparison: 'Masquer',
    showComparison: 'Voir',
    whyWinsTitle: 'Voici pourquoi ChatSeller surpasse la concurrence',
    trueAI: 'Vraie Intelligence IA',
    trueAIDesc: 'Contrairement aux chatbots basiques, ChatSeller utilise l\'IA pour des conversations naturelles et pertinentes.',
    realOrderCollection: 'Collecte Vraiment les Commandes',
    realOrderCollectionDesc: 'ChatSeller collecte naturellement le nom, le téléphone, l\'adresse de vos clients et finalise les commandes dans la conversation.',
    designedForAfrica: 'Conçu pour l\'Afrique et le monde',
    designedForAfricaDesc: 'Mobile-first, multilingue FR/EN, adapté aux connexions lentes et au marché africain.',
    smartUpsell: 'Upsell Intelligent',
    smartUpsellDesc: '+34% de panier moyen grâce aux recommandations intelligentes basées sur le contexte de la conversation.',
    ultraFastInstall: 'Installation Ultra-Rapide',
    ultraFastInstallDesc: '2 minutes vs 2 semaines pour la concurrence. ChatSeller est prêt à vendre immédiatement, sans développeur.',
    profitableInvestment: 'Investissement rentable',
    profitableInvestmentDesc: 'ChatSeller se rembourse au bout de 3 mois avec un ROI moyen de +187%.',
    
    // Social Proof
    socialProofTitle: 'Ce que disent les e-commerçants qui ont testé ChatSeller',
    socialProofSubtitle: 'Des retours authentiques d\'entrepreneurs qui ont testé notre Vendeur IA en avant-première',
    socialProofBadge: 'Testé et approuvé par +50 e-commerçants',
    socialProofCTA: 'Rejoignez les testeurs satisfaits',
    socialProofCTADesc: 'Découvrez pourquoi les e-commerçants choisissent ChatSeller pour transformer leurs visiteurs en clients',
    socialProofCTAButton: 'Je veux tester ChatSeller',
    socialProofBenefits: '✅ 7 jours gratuits • ✅ Installation en 2 minutes • ✅ Sans engagement',
    rgpdCompliant: 'RGPD Compliant',
    rgpdDesc: 'Données sécurisées et conformes',
    madeInAfrica: 'Made in Africa',
    madeInAfricaDesc: 'Développé pour le marché africain',
    support247: 'Support 24/7',
    support247Desc: 'Service client réactif FR/EN',
    
    // Pricing
    pricingTitle: 'Choisissez le plan parfait pour booster vos ventes',
    pricingSubtitle: 'Commencez avec 7 jours gratuits sur le plan Starter. Aucun engagement, annulation en 1 clic.',
    pricingBadge: 'Essai gratuit disponible sur le plan Starter',
    starterPlan: 'Starter',
    starterDesc: 'Parfait pour débuter avec ChatSeller',
    proPlan: 'Professional',
    proDesc: 'Pour les e-commerçants sérieux',
    enterprisePlan: 'Enterprise',
    enterpriseDesc: 'Pour les grandes entreprises',
    startTrial7Days: 'Commencer l\'essai gratuit',
    contactUs: 'Nous contacter',
    freeTrial: '7 jours gratuits',
    mostPopular: 'Le plus populaire',
    customSolution: 'Solution sur mesure',
    roiCalculatorTitle: 'Calculez votre retour sur investissement',
    currentSituation: 'Situation actuelle',
    withChatseller: 'Avec ChatSeller',
    monthlyVisitors: 'Visiteurs/mois',
    currentConversion: 'Conversion actuelle (%)',
    averageCart: 'Panier moyen (€)',
    conversionsMonth: 'Conversions/mois:',
    revenueMonth: 'Revenus/mois:',
    newConversionRate: 'Nouveau taux conversion:',
    newRevenue: 'Nouveaux revenus/mois:',
    additionalProfit: 'Profit net supplémentaire:',
    roiPerMonth: 'ROI: % par mois',
    paybackTime: 'ChatSeller se rembourse en jour(s)',
    
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
    installMinutes: 'Installation en 2 minutes',
    addToCart: 'Ajouter au panier'
  },
  
  en: {
    // Navigation
    features: 'Features',
    demo: 'Demo',
    pricing: 'Pricing',
    login: 'Login',
    tryFree: 'Create my AI Seller',
    switchToFrench: 'FR',
    switchToEnglish: 'EN',
    accessDashboard: 'Access Dashboard',
    
    // Hero Section
    heroTitle: 'The AI Sales Agent that turns visitors into customers.',
    heroSubtitle: 'Create an AI Sales Agent that talks to your customers, intelligently answers their questions, and collects their orders, 24/7.',
    heroInstallation: '2-minute installation',
    heroTrialDays: '7-day free trial',
    heroNoCard: 'No credit card required',
    heroStartTrial: 'Create my AI Seller',
    heroTalkToAdvisor: 'Talk to an advisor',
    heroSeeInAction: 'See ChatSeller in action',
    heroCreateAI: 'Create my AI Seller',
    heroIntegrableEverywhere: 'Integrable on any online store',
    
    // Problem-Solution
    problemTitle: '73% of your visitors leave without buying',
    problemSubtitle: 'Because they have questions, doubts, and there\'s no one to help and reassure them.',
    problemBadge: 'The problem of all e-merchants',
    problemNoAssistance: 'No assistance',
    problemNoAssistanceDesc: 'Your customers are alone with your products',
    problemNoAnswers: 'Unanswered questions',
    problemNoAnswersDesc: '68% of questions remain unanswered',
    problemLowConversion: 'Low conversion rate',
    problemLowConversionDesc: 'Only 2-3% average conversion',
    
    solutionTitle: 'Turn every visitor into a customer',
    solutionSubtitle: 'With ChatSeller, your customers experience the same as in a physical store',
    solutionBadge: 'The ChatSeller solution',
    solutionAI247: 'AI Sales Agent 24/7',
    solutionAI247Desc: 'Welcomes and advises every visitor',
    solutionCollectOrders: 'Collects orders',
    solutionCollectOrdersDesc: 'Gathers name, phone, address in the conversation',
    solutionUpsell: 'Additional sales',
    solutionUpsellDesc: '+34% average cart automatically',
    solutionTestFree: 'Test ChatSeller 7 days free',
    solutionInstallInfo: '2-minute installation • No credit card • Cancel in 1 click',
    
    // Features
    featuresTitle: 'Everything you need to turn visitors into customers',
    featuresSubtitle: 'All the functions you need to sell more, faster, without being glued to your phone.',
    featuresBadge: 'More than a chatbot: a complete AI seller',
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
    demoBadge: 'Real-time demo',
    demoDesktop: 'Desktop View',
    demoMobile: 'Mobile View',
    demoTestNow: 'Test the AI Seller now',
    demoClickToTest: 'Click "Test now" to continue this conversation!',
    demoTalkToSeller: 'Talk to the seller',
    startTrial: 'Start free trial',
    
    // Comparison
    comparisonTitle: 'Why choose ChatSeller',
    comparisonSubtitle: 'Honest comparison between ChatSeller and other options available on the market',
    comparisonBadge: 'Objective and transparent comparison',
    whyChooseTitle: 'Here\'s why ChatSeller outperforms the competition',
    traditionalEcommerce: 'Traditional E-commerce',
    basicChatbots: 'Basic Chatbots',
    chatsellerSolution: 'ChatSeller',
    comparisonTable: 'Comparison table',
    detailedComparison: 'Detailed comparison',
    hideComparison: 'Hide',
    showComparison: 'Show',
    whyWinsTitle: 'Here\'s why ChatSeller outperforms the competition',
    trueAI: 'True AI Intelligence',
    trueAIDesc: 'Unlike basic chatbots, ChatSeller uses AI for natural and relevant conversations.',
    realOrderCollection: 'Really Collects Orders',
    realOrderCollectionDesc: 'ChatSeller naturally collects customers\' names, phone numbers, addresses and finalizes orders in the conversation.',
    designedForAfrica: 'Designed for Africa and the world',
    designedForAfricaDesc: 'Mobile-first, multilingual FR/EN, adapted to slow connections and the African market.',
    smartUpsell: 'Smart Upsell',
    smartUpsellDesc: '+34% average cart thanks to intelligent recommendations based on conversation context.',
    ultraFastInstall: 'Ultra-Fast Installation',
    ultraFastInstallDesc: '2 minutes vs 2 weeks for the competition. ChatSeller is ready to sell immediately, without a developer.',
    profitableInvestment: 'Profitable investment',
    profitableInvestmentDesc: 'ChatSeller pays for itself within 3 months with an average ROI of +187%.',
    
    // Social Proof
    socialProofTitle: 'What e-merchants who tested ChatSeller say',
    socialProofSubtitle: 'Authentic feedback from entrepreneurs who tested our AI Seller in preview',
    socialProofBadge: 'Tested and approved by +50 e-merchants',
    socialProofCTA: 'Join satisfied testers',
    socialProofCTADesc: 'Discover why e-merchants choose ChatSeller to transform their visitors into customers',
    socialProofCTAButton: 'I want to test ChatSeller',
    socialProofBenefits: '✅ 7 days free • ✅ 2-minute installation • ✅ No commitment',
    rgpdCompliant: 'GDPR Compliant',
    rgpdDesc: 'Secure and compliant data',
    madeInAfrica: 'Made in Africa',
    madeInAfricaDesc: 'Developed for the African market',
    support247: '24/7 Support',
    support247Desc: 'Responsive customer service FR/EN',
    
    // Pricing
    pricingTitle: 'Choose the perfect plan to boost your sales',
    pricingSubtitle: 'Start with 7 free days on the Starter plan. No commitment, cancel in 1 click.',
    pricingBadge: 'Free trial available on Starter plan',
    starterPlan: 'Starter',
    starterDesc: 'Perfect to get started with ChatSeller',
    proPlan: 'Professional',
    proDesc: 'For serious e-commerce businesses',
    enterprisePlan: 'Enterprise',
    enterpriseDesc: 'For large companies',
    startTrial7Days: 'Start free trial',
    contactUs: 'Contact us',
    freeTrial: '7 days free',
    mostPopular: 'Most popular',
    customSolution: 'Custom solution',
    roiCalculatorTitle: 'Calculate your return on investment',
    currentSituation: 'Current situation',
    withChatseller: 'With ChatSeller',
    monthlyVisitors: 'Visitors/month',
    currentConversion: 'Current conversion (%)',
    averageCart: 'Average cart ($)',
    conversionsMonth: 'Conversions/month:',
    revenueMonth: 'Revenue/month:',
    newConversionRate: 'New conversion rate:',
    newRevenue: 'New revenue/month:',
    additionalProfit: 'Additional net profit:',
    roiPerMonth: 'ROI: % per month',
    paybackTime: 'ChatSeller pays for itself in day(s)',
    
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
    installMinutes: '2-minute installation',
    addToCart: 'Add to cart'
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