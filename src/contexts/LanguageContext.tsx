// src/contexts/LanguageContext.tsx - TRADUCTION COMPLÈTE DE TOUTE LA LANDING PAGE
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
  support: string;
  
  // Hero Section
  heroTitle: string;
  heroTitleVendeurIA: string;
  heroTitleEnd: string;
  heroSubtitle: string;
  heroInstallation: string;
  heroTrialDays: string;
  heroNoCard: string;
  heroStartTrial: string;
  heroTalkToAdvisor: string;
  heroSeeInAction: string;
  heroCreateAI: string;
  heroIntegrableEverywhere: string;
  betaBadge: string;
  
  // Platforms Section
  platformsTitle: string;
  platformsSubtitle: string;
  platformsCompatible: string;
  platformsInstallTime: string;
  platformsCompatibility: string;
  platformsInstallCost: string;
  platformsMinInstall: string;
  platformsFullCompatible: string;
  platformsZeroFees: string;
  
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
  problemPartWithout: string;
  problemLeaveWithout: string;
  problemTransformVisitor: string;
  problemClient: string;
  
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
  solutionMoreSales: string;
  solutionNewConversion: string;
  solutionAdditionalRevenue: string;
  
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
  designedForWorld: string;
  designedForWorldDesc: string;
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
  earlyAdopters: string;
  earlyAdoptersDesc: string;
  satisfaction: string;
  satisfactionDesc: string;
  approval: string;
  approvalDesc: string;
  averageInstall: string;
  averageInstallDesc: string;
  
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
  faqAllQuestions: string;
  contactQuestion: string;
  contactTeam: string;
  contactEmail: string;
  bookDemo: string;
  
  // Footer
  footerProduct: string;
  footerCompany: string;
  footerContactLegal: string;
  footerTechnicalSupport: string;
  footerCommercialContact: string;
  footerPrivacy: string;
  footerTerms: string;
  footerPoweredByAI: string;
  footerSystemsOperational: string;
  footerAllRightsReserved: string;
  footerCreatedBy: string;
  footerRevolutionizing: string;
  footerAbout: string;
  footerSupport: string;
  footerDemo: string;
  footerFaq: string;
  footerPricing: string;
  footerTestWidget: string;
  footerDocumentation: string;
  footerDashboard: string;
  footerDukka: string;
  footerPrivacyPolicy: string;
  footerTermsOfUse: string;
  footerGdprCompliant: string;
  footerSecureData: string;
  footerMadeInAfricaFull: string;
  footerSupportFull: string;
  footerTestedApproved: string;
  
  // Chat
  chatAssistant: string;
  online: string;
  offlineMode: string;
  typeMessage: string;
  welcome: string;
  chatDemo: string;
  chatAnnaTitle: string;
  chatOnlineSpecialist: string;
  chatResetConversation: string;
  chatVoiceMessage: string;
  chatMiaQuestions: string;
  
  // Anna Chat Responses
  annaWelcome: string;
  annaGreeting: string;
  annaPrice: string;
  annaHowItWorks: string;
  annaBattery: string;
  annaDelivery: string;
  annaWarranty: string;
  annaReviews: string;
  annaSafety: string;
  annaPain: string;
  annaAmani: string;
  annaQuantityQuestion: string;
  annaPhoneQuestion: string;
  annaNameQuestion: string;
  annaAddressQuestion: string;
  annaPaymentQuestion: string;
  annaOrderConfirmed: string;
  annaFinalRecap: string;
  annaDefaultResponse: string;
  
  // Common
  learnMore: string;
  getStarted: string;
  freeTrialDays: string;
  noCardRequired: string;
  installMinutes: string;
  addToCart: string;
  month: string;
  year: string;
  createMyAI: string;
  
  // Stats
  questionsResolved: string;
  ordersFinalized: string;
  averageBasket: string;
  completeVisibility: string;
  installTime: string;
  mobileOptimizedStat: string;
  
  // New visitor flow
  newVisitorArrives: string;
  questionsUnanswered: string;
  doubtsHesitations: string;
  cartAbandonment: string;
  visitorLeft: string;
  annaWelcomesVisitor: string;
  instantResponse: string;
  expertAdvice: string;
  collectsInfo: string;
  orderFinalized: string;
  satisfiedCustomer: string;
  conversionIncrease: string;

  // ===================
  // SUPPORT PAGE TRANSLATIONS
  // ===================
  
  // Support Page Header
  supportPageTitle: string;
  supportPageSubtitle: string;
  supportBackToHome: string;
  supportSearchPlaceholder: string;
  
  // Support Stats
  supportResponseTime: string;
  supportAvailability: string;
  supportResolutionRate: string;
  supportAverageResponseTime: string;
  supportAvailable247: string;
  supportProblemsResolved: string;
  
  // Support Categories
  supportAllCategories: string;
  supportInstallation: string;
  supportConfiguration: string;
  supportBilling: string;
  supportTechnical: string;
  
  // FAQ Section
  supportFaqTitle: string;
  supportNoResultsTitle: string;
  supportNoResultsDesc: string;
  
  // FAQ Questions & Answers - Installation
  faqShopifyInstallQ: string;
  faqShopifyInstallA: string;
  faqWooCommerceQ: string;
  faqWooCommerceA: string;
  faqCustomHtmlQ: string;
  faqCustomHtmlA: string;
  
  // FAQ Questions & Answers - Configuration  
  faqPersonalityQ: string;
  faqPersonalityA: string;
  faqLearningQ: string;
  faqLearningA: string;
  
  // FAQ Questions & Answers - Technical
  faqWidgetNotShowingQ: string;
  faqWidgetNotShowingA: string;
  faqSlowSiteQ: string;
  faqSlowSiteA: string;
  
  // FAQ Questions & Answers - Billing
  faqBillingHowQ: string;
  faqBillingHowA: string;
  faqChangePlanQ: string;
  faqChangePlanA: string;
  
  // Contact Form
  supportContactTitle: string;
  supportContactSuccess: string;
  supportContactSuccessDesc: string;
  supportContactError: string;
  supportContactSendAnother: string;
  supportContactFullName: string;
  supportContactEmail: string;
  supportContactCategory: string;
  supportContactSubject: string;
  supportContactMessage: string;
  supportContactMessagePlaceholder: string;
  supportContactSendButton: string;
  supportContactSending: string;
  supportContactUrgentHelp: string;
  
  // Contact Categories
  contactCategoryGeneral: string;
  contactCategoryTechnical: string;
  contactCategoryBilling: string;
  contactCategoryFeature: string;
  contactCategoryBug: string;
  
  // Common Support Terms
  supportTags: string;
  supportMinutes: string;
  supportHours: string;
  supportDays: string;
  supportAIVendor: string; // pour remplacer "Agent IA" par "Vendeur IA" ou "AI Seller"
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
    support: 'Support',
    
    // Hero Section
    heroTitle: 'Le',
    heroTitleVendeurIA: 'Vendeur IA',
    heroTitleEnd: 'qui transforme vos visiteurs en clients.',
    heroSubtitle: 'Plus qu\'un chatbot : un vrai commercial IA qui collecte les commandes dans la conversation et booste vos ventes 24h/24.',
    heroInstallation: 'Installation en 2 minutes',
    heroTrialDays: '7 jours d\'essai gratuit',
    heroNoCard: 'Carte bancaire non exigée',
    heroStartTrial: 'Créer mon Vendeur IA',
    heroTalkToAdvisor: 'Parler à un conseiller',
    heroSeeInAction: 'Voir ChatSeller en action',
    heroCreateAI: 'Créer mon Vendeur IA',
    heroIntegrableEverywhere: 'Intégrable sur n\'importe quelle boutique en ligne',
    betaBadge: 'BETA',
    
    // Platforms Section
    platformsTitle: 'Installez Chatseller sur n\'importe quel site',
    platformsSubtitle: 'En seulement 2 minutes, intégrez votre Vendeur IA sur votre plateforme préférée',
    platformsCompatible: 'Compatible avec toutes les plateformes',
    platformsInstallTime: 'Temps d\'installation',
    platformsCompatibility: 'Compatible avec votre site',
    platformsInstallCost: 'Pour démarrer',
    platformsMinInstall: '2 min',
    platformsFullCompatible: '100%',
    platformsZeroFees: '0€',
    
    // Problem-Solution
    problemTitle: '73% de vos visiteurs',
    problemSubtitle: 'Parce qu\'ils ont des questions, des doutes, et qu\'il n\'y a personne pour les aider et les rassurer.',
    problemBadge: 'Le problème de tous les e-commerçants',
    problemNoAssistance: 'Aucune assistance',
    problemNoAssistanceDesc: 'Vos clients sont seuls face à vos produits',
    problemNoAnswers: 'Questions sans réponses',
    problemNoAnswersDesc: '68% des questions restent sans réponse',
    problemLowConversion: 'Taux de conversion faible',
    problemLowConversionDesc: 'Seulement 2-3% de conversion moyenne',
    problemPartWithout: 'partent sans acheter',
    problemLeaveWithout: 'sans acheter',
    problemTransformVisitor: 'Transformez chaque visiteur en',
    problemClient: 'client',
    
    solutionTitle: 'Transformez chaque visiteur en client',
    solutionSubtitle: 'Avec ChatSeller, vos clients vivent la même expérience qu\'en boutique physique',
    solutionBadge: 'La solution ChatSeller',
    solutionAI247: 'Vendeur IA 24/7',
    solutionAI247Desc: 'Accueille et conseille chaque visiteur',
    solutionCollectOrders: 'Collecte les commandes',
    solutionCollectOrdersDesc: 'Récupère nom, téléphone, adresse dans la conversation',
    solutionUpsell: 'Ventes additionnelles',
    solutionUpsellDesc: '+34% de panier moyen automatiquement',
    solutionTestFree: 'Tester ChatSeller Gratuitement',
    solutionInstallInfo: 'Installation en 2 minutes • Sans carte bancaire • Annulation en 1 clic',
    solutionMoreSales: 'plus de ventes',
    solutionNewConversion: 'nouveau taux conversion',
    solutionAdditionalRevenue: 'revenus en moyenne',
    
    // Features
    featuresTitle: 'Tout ce dont vous avez besoin pour transformer vos visiteurs en clients',
    featuresSubtitle: 'Nous intégrons tout ce qu\'il vous faut pour vendre plus, plus vite, sans rester collé à votre téléphone.',
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
    mobileOptimized: '100% adaptée aux smartphones',
    mobileOptimizedDesc: 'L\'interface de Chatseller est parfaitement adaptée aux Smartphones pour une expérience utilisateur optimale.',
    
    // Demo
    demoTitle: 'Testez ChatSeller en live',
    demoSubtitle: 'Discutez avec Anna, la Vendeuse IA d\'AMANI, spécialisée en bien-être féminin',
    demoTip: 'Cliquez sur "Parler à la vendeuse" dans la démo ci-dessous !',
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
    designedForWorld: 'Conçu pour tout type d\'e-commerce',
    designedForWorldDesc: 'Mobile-first, multilingue FR/EN, adaptée aux connexions lentes et à tous les marchés.',
    smartUpsell: 'Upsell Intelligent',
    smartUpsellDesc: '+34% de panier moyen grâce aux recommandations intelligentes basées sur le contexte de la conversation.',
    ultraFastInstall: 'Installation Ultra-Rapide',
    ultraFastInstallDesc: 'En seulement 2 minutes, et sans développeur, votre Vendeur IA est prêt à discuter avec les visiteurs de votre boutique et les transformer en clients.',
    profitableInvestment: 'Investissement rentable',
    profitableInvestmentDesc: 'ChatSeller se rembourse au bout de 3 mois avec un ROI moyen de +187%.',
    
    // Social Proof
    socialProofTitle: 'Voici ce que disent les e-commerçants qui ont testé ChatSeller',
    socialProofSubtitle: 'Des retours authentiques d\'entrepreneurs qui ont fait l\'expérience du Vendeur IA.',
    socialProofBadge: 'Testé et approuvé par +55 e-commerçants',
    socialProofCTA: 'Créez vous aussi votre Vendeur IA dès aujourd\'hui',
    socialProofCTADesc: 'Offrez aux visiteurs de votre boutique en ligne une expérience similaire à celle d\'une boutique physique.',
    socialProofCTAButton: 'Créer mon Vendeur IA',
    socialProofBenefits: '✅ 7 jours gratuits • ✅ Installation en 2 minutes • ✅ Sans engagement',
    rgpdCompliant: 'RGPD Compliant',
    rgpdDesc: 'Données sécurisées et conformes',
    madeInAfrica: 'Pour toute plateforme',
    madeInAfricaDesc: 'Intégrable sur tous les sites',
    support247: 'Support 24/7',
    support247Desc: 'Service client réactif FR/EN',
    earlyAdopters: 'Early Adopters',
    earlyAdoptersDesc: 'Ont testé ChatSeller en avant-première',
    satisfaction: 'Satisfaction',
    satisfactionDesc: 'Note moyenne des testeurs',
    approval: 'Approuvent',
    approvalDesc: 'Recommandent ChatSeller',
    averageInstall: 'Installation',
    averageInstallDesc: 'Temps moyen d\'installation',
    
    // Pricing
    pricingTitle: 'Choisissez le plan parfait pour booster vos ventes',
    pricingSubtitle: 'Commencez avec 7 jours gratuits sur le plan Starter. Aucun engagement requis.',
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
    faqTitle: 'Questions fréquentes sur ChatSeller',
    faqSubtitle: 'Tout ce que vous devez savoir avant d\'ajouter votre Vendeur IA sur votre site web.',
    faqAllQuestions: 'Toutes vos questions ont des réponses',
    contactQuestion: 'Vous ne trouvez pas votre réponse ?',
    contactTeam: 'Notre équipe est là pour répondre à toutes vos questions spécifiques.',
    contactEmail: 'Nous contacter',
    bookDemo: 'Réserver une démo',
    
    // Footer
    footerProduct: 'Produit',
    footerCompany: 'Entreprise',
    footerContactLegal: 'Contact & Légal',
    footerTechnicalSupport: 'Support Technique',
    footerCommercialContact: 'Contact Commercial',
    footerPrivacy: 'Confidentialité',
    footerTerms: 'Conditions d\'utilisation',
    footerPoweredByAI: 'Alimenté par l\'IA',
    footerSystemsOperational: 'Systèmes opérationnels',
    footerAllRightsReserved: 'Tous droits réservés. Créé par',
    footerCreatedBy: 'Créé par',
    footerRevolutionizing: 'DUKKA • Révolutionner l\'e-commerce en Afrique',
    footerAbout: 'À propos',
    footerSupport: 'Support & FAQ',
    footerDemo: 'Démo Interactive',
    footerFaq: 'FAQ',
    footerPricing: 'Tarifs',
    footerTestWidget: 'Tester le Widget',
    footerDocumentation: 'Documentation',
    footerDashboard: 'Dashboard',
    footerDukka: 'Dukka Platform',
    footerPrivacyPolicy: 'Confidentialité',
    footerTermsOfUse: 'Conditions d\'utilisation',
    footerGdprCompliant: 'Conforme RGPD',
    footerSecureData: 'Données sécurisées',
    footerMadeInAfricaFull: 'Toute Plateforme',
    footerSupportFull: 'Support 24/7',
    footerTestedApproved: '+50 e-commerçants satisfaits',
    
    // Chat
    chatAssistant: 'Assistant IA',
    online: 'En ligne',
    offlineMode: 'Mode hors ligne',
    typeMessage: 'Tapez votre message...',
    welcome: 'Bonjour ! Je suis votre assistant IA. Comment puis-je vous aider aujourd\'hui ?',
    chatDemo: 'Démo',
    chatAnnaTitle: 'Anna - Vendeuse IA',
    chatOnlineSpecialist: 'En ligne • Ceinture Chauffante Mia - 49€',
    chatResetConversation: 'Recommencer la conversation',
    chatVoiceMessage: 'Message vocal (démo)',
    chatMiaQuestions: 'Posez vos questions sur la ceinture Mia...',
    
    // Anna Chat Responses
    annaWelcome: 'Bonjour ! 👋 Je suis Anna, Vendeuse chez Amani. Je vois que vous vous intéressez à notre ceinture chauffante Mia. Comment puis-je vous aider aujourd\'hui ?',
    annaGreeting: 'Bonjour ! 😊 Je suis ravie de vous aider. La ceinture Mia est notre solution révolutionnaire contre les douleurs menstruelles.',
    annaPrice: 'La ceinture chauffante Mia est à 49€ avec la livraison gratuite ! 🚚 C\'est un investissement unique pour des années de soulagement. Comparé aux anti-douleurs mensuels, Mia se rembourse en 3-4 mois.',
    annaHowItWorks: 'Excellente question ! Mia combine 3 technologies scientifiquement prouvées :\n\n🔥 **Thermothérapie** : La chaleur (45°C) dilate les vaisseaux sanguins et détend les muscles\n💆 **Massothérapie** : Les vibrations bloquent les signaux de douleur vers le cerveau\n🌸 **Relaxation** : L\'effet combiné réduit le stress et l\'anxiété\n\nRésultat : 92% de nos clientes ressentent un soulagement dès la première utilisation !',
    annaBattery: 'Mia a une autonomie de 4 heures et se recharge en 2h via USB-C ! ⚡ Elle chauffe en seulement 30 secondes. Parfaite pour l\'utiliser à la maison, au bureau ou en déplacement. Sa batterie lithium haute qualité dure des années.',
    annaDelivery: '🚚 Livraison gratuite partout au Sénégal sous 48-72h ! Nous livrons aussi en Côte d\'Ivoire, Mali, Burkina Faso (+5€). Colis discret, suivi par SMS. Nos livreurs sont formés pour la confidentialité.',
    annaWarranty: '🛡️ Vous êtes 100% protégée ! Garantie constructeur 2 ans + 30 jours satisfaite ou remboursée. Si Mia ne vous convient pas, retour gratuit et remboursement intégral, sans justification !',
    annaReviews: '🌟 Nos clientes adorent Mia ! 4.8/5 étoiles, plus de 850 avis positifs. Fatou (Dakar) : \'Mia a changé ma vie !\'. Aïcha (Thiès) : \'Fini les anti-inflammatoires !\'. 94% recommandent à leurs amies.',
    annaSafety: 'Mia est 100% sûre ! Certifiée CE, température contrôlée (45°C max), arrêt automatique après 4h. Plus de 850 femmes l\'utilisent sans problème. Aucun effet secondaire contrairement aux médicaments.',
    annaPain: 'Je comprends parfaitement ! 75% des femmes au Sénégal souffrent de douleurs menstruelles \'insupportables\'. Mia a été spécialement conçue après une étude avec 50 femmes sénégalaises. Elle agit sur la source de la douleur, pas juste les symptômes.',
    annaAmani: 'Amani signifie \'paix\' en swahili 🕊️. Notre mission : apporter sérénité et bien-être aux femmes africaines. Nous développons des solutions naturelles, efficaces et abordables. \'La chaleur dont vous avez besoin\' - c\'est notre promesse !',
    annaQuantityQuestion: 'Fantastique ! 🎉 Je vais vous aider à finaliser votre commande. Combien de ceintures Mia souhaitez-vous ? (1, 2, 3 ou 4 maximum par commande)',
    annaPhoneQuestion: 'Pour la livraison, quel est votre numéro de téléphone ?',
    annaNameQuestion: 'Maintenant, quel est votre nom complet (prénom et nom) ?',
    annaAddressQuestion: 'Quelle est votre adresse de livraison complète ?',
    annaPaymentQuestion: 'Comment souhaitez-vous payer ? 💳 Carte bancaire, 📱 Mobile Money ou 🚚 Paiement à la livraison ?',
    annaOrderConfirmed: '🎉 Excellente nouvelle ! Votre commande est confirmée !',
    annaFinalRecap: '**RÉCAPITULATIF FINAL**',
    annaDefaultResponse: '🤖 Ceci est une **démo** de ChatSeller ! Pour voir un véritable Vendeur IA en action et découvrir Amani, visitez : **https://amani-wellness.com** 🌟\n\nLà-bas, vous discuterez avec la vraie Vendeuse IA d\'Amani, parfaitement formée sur leurs produits. C\'est exactement ce que ChatSeller peut créer pour VOTRE boutique !\n\nSouhaitez-vous créer votre propre Vendeur IA avec ChatSeller ?',
    
    // Common
    learnMore: 'En savoir plus',
    getStarted: 'Commencer',
    freeTrialDays: '7 jours d\'essai gratuit',
    noCardRequired: 'Aucune carte bancaire requise',
    installMinutes: 'Installation en 2 minutes',
    addToCart: 'Ajouter au panier',
    month: 'mois',
    year: 'année',
    createMyAI: 'Créer mon Vendeur IA',
    
    // Stats
    questionsResolved: '92% de questions résolues',
    ordersFinalized: '+63% de commandes finalisées',
    averageBasket: '+34% de panier moyen',
    completeVisibility: 'Visibilité complète ROI',
    installTime: '2 min d\'installation',
    mobileOptimizedStat: '100% optimisé pour mobile',
    
    // New visitor flow
    newVisitorArrives: 'Nouveau visiteur arrive...',
    questionsUnanswered: 'Questions sans réponses',
    doubtsHesitations: 'Doutes et hésitations',
    cartAbandonment: 'Abandon du panier',
    visitorLeft: 'Visiteur parti sans acheter 😞',
    annaWelcomesVisitor: 'Anna accueille le visiteur',
    instantResponse: 'Réponse instantanée',
    expertAdvice: 'Conseil expert',
    collectsInfo: 'Collecte informations',
    orderFinalized: 'Commande finalisée !',
    satisfiedCustomer: 'Client satisfait 😊',
    conversionIncrease: '+147% ventes',

  // ===================
    // SUPPORT PAGE TRANSLATIONS FR
    // ===================
    
    // Support Page Header
    supportPageTitle: "Centre d'aide ChatSeller",
    supportPageSubtitle: "Trouvez rapidement les réponses à vos questions ou contactez notre équipe support",
    supportBackToHome: "Retour à l'accueil",
    supportSearchPlaceholder: "Rechercher dans la documentation...",
    
    // Support Stats
    supportResponseTime: "2 minutes",
    supportAvailability: "24/7",
    supportResolutionRate: "98%",
    supportAverageResponseTime: "Temps de réponse moyen",
    supportAvailable247: "Support disponible",
    supportProblemsResolved: "Problèmes résolus",
    
    // Support Categories
    supportAllCategories: "Tous",
    supportInstallation: "Installation", 
    supportConfiguration: "Configuration",
    supportBilling: "Facturation",
    supportTechnical: "Technique",
    
    // FAQ Section
    supportFaqTitle: "Questions fréquentes",
    supportNoResultsTitle: "Aucun résultat trouvé",
    supportNoResultsDesc: "Essayez d'autres mots-clés ou contactez notre support",
    
    // FAQ Questions & Answers - Installation
    faqShopifyInstallQ: "Comment installer ChatSeller sur mon site Shopify ?",
    faqShopifyInstallA: `L'installation sur Shopify est très simple :
      
1. **Connectez-vous** à votre Dashboard ChatSeller
2. **Créez votre Vendeur IA** avec vos informations produit
3. **Copiez le code d'intégration** fourni
4. Dans Shopify Admin → **Boutique en ligne** → **Thèmes** → **Actions** → **Modifier le code**
5. Ouvrez **theme.liquid** et collez le code avant </head>
6. **Sauvegardez** - Votre Vendeur IA est actif !

⏱️ **Temps total : 2-3 minutes maximum**

Need help? Contactez-nous via le formulaire ci-dessous.`,

    faqWooCommerceQ: "ChatSeller fonctionne-t-il sur WooCommerce ?",
    faqWooCommerceA: `Oui ! ChatSeller est parfaitement compatible avec WooCommerce :

**Méthode 1 - Plugin (Recommandée)**
1. Téléchargez notre plugin WordPress depuis le Dashboard
2. Installez via **Extensions** → **Ajouter** → **Téléverser**
3. Activez et configurez avec votre clé API

**Méthode 2 - Code manuel**
1. Copiez le code d'intégration depuis votre Dashboard
2. Allez dans **Apparence** → **Éditeur de thème**
3. Ajoutez le code dans **functions.php** ou dans un fichier de template

✅ **Compatible avec toutes les versions WooCommerce 3.0+**`,

    faqCustomHtmlQ: "Puis-je installer ChatSeller sur un site HTML personnalisé ?",
    faqCustomHtmlA: `Absolument ! ChatSeller fonctionne sur n'importe quel site web :

**Installation universelle :**
1. Copiez le code JavaScript depuis votre Dashboard
2. Collez-le dans la section &lt;head&gt; ou avant &lt;/body&gt;
3. Le widget s'affiche automatiquement

**Personnalisation avancée :**
- Position du bouton configurable
- Couleurs et design adaptables
- Intégration avec votre panier existant
- API disponible pour développeurs

💡 **Fonctionne avec :** HTML, PHP, React, Vue, Angular, etc.`,

    // FAQ Questions & Answers - Configuration
    faqPersonalityQ: "Comment personnaliser la personnalité de mon Vendeur IA ?",
    faqPersonalityA: `Vous avez un contrôle total sur votre Vendeur IA :

**Dans le Dashboard → Configuration Vendeur :**

**1. Personnalité de base**
- Ton : Professionnel, Amical, Expert, Décontracté
- Style : Direct, Consultant, Storytelling, Technique

**2. Messages personnalisés**
- Message d'accueil
- Réponses aux objections courantes
- Messages de relance

**3. Connaissances produits**
- Importez vos fiches produits
- Ajoutez vos FAQ
- Configurez les arguments de vente

**4. Objectifs commerciaux**
- Priorités de vente
- Produits à pousser
- Seuils de négociation

💡 **Conseil :** Testez différentes personnalités avec notre simulateur intégré !`,

    faqLearningQ: "Comment le Vendeur IA apprend-il sur mes produits ?",
    faqLearningA: `Le Vendeur IA se forme sur vos produits via plusieurs méthodes :

**1. Import automatique**
- Connectez votre catalogue (Shopify, WooCommerce, etc.)
- Synchronisation automatique des nouveaux produits
- Mise à jour des prix et stock en temps réel

**2. Base de connaissances**
- Uploadez vos documents PDF/Word
- FAQ existantes
- Guides d'utilisation
- Politiques de retour/garantie

**3. Apprentissage continu**
- L'IA analyse les conversations
- Améliore ses réponses automatiquement
- Vous signale les questions récurrentes

**4. Configuration manuelle**
- Ajoutez des informations spécifiques
- Définissez les arguments de vente
- Configurez les réponses aux objections

📈 **Résultat :** Un Vendeur de plus en plus expert sur VOS produits`,

    // FAQ Questions & Answers - Technical
    faqWidgetNotShowingQ: "Que faire si le widget ne s'affiche pas ?",
    faqWidgetNotShowingA: `Voici comment diagnostiquer et résoudre le problème :

**Vérifications de base :**
1. ✅ Le code est-il correctement installé ?
2. ✅ Pas d'erreurs dans la console navigateur (F12)
3. ✅ Votre plan est-il actif ?
4. ✅ Le Vendeur IA est-il activé ?

**Solutions courantes :**

**Shopify :** Videz le cache (Boutique en ligne → Préférences → Purger le cache)

**WordPress :** Désactivez temporairement les plugins de cache (WP Rocket, W3 Total Cache)

**Sites personnalisés :** Vérifiez qu'il n'y a pas de conflit JavaScript

**Bloqueurs de pub :** Ajoutez widget.chatseller.app à la liste blanche

**Toujours pas résolu ?**
Contactez-nous avec :
- URL de votre site
- Navigateur utilisé
- Capture d'écran de la console (F12)

⚡ **Support prioritaire pour les clients Pro/Enterprise**`,

    faqSlowSiteQ: "ChatSeller ralentit-il mon site web ?",
    faqSlowSiteA: `Non ! ChatSeller est optimisé pour la performance :

**Optimisations techniques :**
- ⚡ **Chargement asynchrone** : N'impacte pas le temps de chargement
- 🪶 **Script léger** : Seulement 45kb compressé
- 🚀 **CDN global** : Livraison ultra-rapide depuis le serveur le plus proche
- 💾 **Cache intelligent** : Le widget se charge instantanément après la première visite

**Tests de performance :**
- **Page Speed** : Aucun impact sur le score Google
- **Time to Interactive** : +0.1s maximum
- **Lighthouse** : Score maintenu

**Monitoring inclus :**
- Surveillance 24/7 de la performance
- Alertes automatiques en cas de problème
- Optimisations continues

🎯 **Résultat :** Plus de conversions SANS ralentir votre site`,

    // FAQ Questions & Answers - Billing
    faqBillingHowQ: "Comment fonctionne la facturation de ChatSeller ?",
    faqBillingHowA: `Facturation simple et transparente :

**Plans disponibles :**
- **Starter** : 19€/mois - 1000 messages
- **Professional** : 29€/mois - 5000 messages  
- **Enterprise** : Sur mesure - Illimité

**Ce qui est inclus :**
✅ **Tous les plans :** Pas de commission sur vos ventes
✅ **Pas de frais cachés** : Prix fixe mensuel
✅ **7 jours gratuits** sur le plan Starter
✅ **Annulation en 1 clic** à tout moment

**Méthodes de paiement :**
- Carte bancaire (Visa, Mastercard)

**Facturation :**
- Prélèvement automatique le même jour chaque mois
- Facture envoyée par email
- Historique dans votre Dashboard

💡 **Garantie** : Satisfait ou remboursé sous 30 jours`,

    faqChangePlanQ: "Puis-je changer de plan à tout moment ?",
    faqChangePlanA: `Oui, vous avez une flexibilité totale :

**Upgrade (Starter → Pro/Enterprise) :**
- ✅ **Immédiat** : Nouvelles fonctionnalités activées instantanément
- ✅ **Prorata** : Vous payez seulement la différence jusqu'à la fin du mois
- ✅ **Sans interruption** : Votre Vendeur IA reste actif

**Downgrade (Pro → Starter) :**
- 📅 **Fin de période** : Changement effectif au prochain cycle
- 💾 **Données conservées** : Aucune perte d'historique
- ⚠️ **Limites appliquées** : Fonctions avancées désactivées

**Annulation :**
- 🔴 **En 1 clic** depuis votre Dashboard
- 📱 **Aucun préavis** requis
- 💸 **Remboursement prorata** si annulation en cours de mois

**Réactivation :**
- ✅ **Instantanée** : Reprenez où vous vous étiez arrêté
- 📊 **Historique préservé** : Toutes vos données sont sauvegardées

🎯 **Aucun engagement, liberté totale !**`,

    // Contact Form
    supportContactTitle: "Contactez le support",
    supportContactSuccess: "Message envoyé !",
    supportContactSuccessDesc: "Notre équipe vous répondra sous 2h en moyenne. Vous devriez recevoir un email de confirmation sous peu.",
    supportContactError: "Une erreur est survenue lors de l'envoi.",
    supportContactSendAnother: "Envoyer un autre message",
    supportContactFullName: "Nom complet",
    supportContactEmail: "Email",
    supportContactCategory: "Catégorie",
    supportContactSubject: "Sujet",
    supportContactMessage: "Message",
    supportContactMessagePlaceholder: "Décrivez votre problème ou question en détail...",
    supportContactSendButton: "Envoyer le message",
    supportContactSending: "Envoi en cours...",
    supportContactUrgentHelp: "Besoin d'aide urgente ?",
    
    // Contact Categories
    contactCategoryGeneral: "Question générale",
    contactCategoryTechnical: "Problème technique",
    contactCategoryBilling: "Facturation",
    contactCategoryFeature: "Demande de fonctionnalité",
    contactCategoryBug: "Signaler un bug",
    
    // Common Support Terms
    supportTags: "mots-clés",
    supportMinutes: "minutes",
    supportHours: "heures", 
    supportDays: "jours",
    supportAIVendor: "Vendeur IA",
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
    support: 'Support',
    
    // Hero Section
    heroTitle: 'The',
    heroTitleVendeurIA: 'AI Sales Agent',
    heroTitleEnd: 'that turns visitors into customers.',
    heroSubtitle: 'More than a chatbot: a real AI sales agent that collects orders within the conversation and boosts your sales 24/7.',
    heroInstallation: '2-minute installation',
    heroTrialDays: '7-day free trial',
    heroNoCard: 'No credit card required',
    heroStartTrial: 'Create my AI Seller',
    heroTalkToAdvisor: 'Talk to an advisor',
    heroSeeInAction: 'See ChatSeller in action',
    heroCreateAI: 'Create my AI Seller',
    heroIntegrableEverywhere: 'Integrable on any online store',
    betaBadge: 'BETA',
    
    // Platforms Section
    platformsTitle: 'Install Chatseller on any website',
    platformsSubtitle: 'In just 2 minutes, integrate your AI Seller on your favorite platform',
    platformsCompatible: 'Compatible with all platforms',
    platformsInstallTime: 'Installation time',
    platformsCompatibility: 'Compatible with your site',
    platformsInstallCost: 'To start',
    platformsMinInstall: '2 min',
    platformsFullCompatible: '100%',
    platformsZeroFees: '$0',
    
    // Problem-Solution
    problemTitle: '73% of your visitors',
    problemSubtitle: 'Because they have questions, doubts, and there\'s no one to help and reassure them.',
    problemBadge: 'The problem of all e-merchants',
    problemNoAssistance: 'No assistance',
    problemNoAssistanceDesc: 'Your customers are alone with your products',
    problemNoAnswers: 'Unanswered questions',
    problemNoAnswersDesc: '68% of questions remain unanswered',
    problemLowConversion: 'Low conversion rate',
    problemLowConversionDesc: 'Only 2-3% average conversion',
    problemPartWithout: 'leave without buying',
    problemLeaveWithout: 'without buying',
    problemTransformVisitor: 'Turn every visitor into a',
    problemClient: 'customer',
    
    solutionTitle: 'Turn every visitor into a customer',
    solutionSubtitle: 'With ChatSeller, your customers experience the same as in a physical store',
    solutionBadge: 'The ChatSeller solution',
    solutionAI247: 'AI Sales Agent 24/7',
    solutionAI247Desc: 'Welcomes and advises every visitor',
    solutionCollectOrders: 'Collects orders',
    solutionCollectOrdersDesc: 'Gathers name, phone, address in the conversation',
    solutionUpsell: 'Additional sales',
    solutionUpsellDesc: '+34% average cart automatically',
    solutionTestFree: 'Try ChatSeller for Free',
    solutionInstallInfo: '2-minute installation • No credit card • Cancel in 1 click',
    solutionMoreSales: 'more sales',
    solutionNewConversion: 'new conversion rate',
    solutionAdditionalRevenue: 'average revenue',
    
    // Features
    featuresTitle: 'Everything you need to turn visitors into customers',
    featuresSubtitle: 'We integrate everything you need to sell more, faster, without being glued to your phone.',
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
    demoSubtitle: 'Chat with Anna, AMANI\'s AI Saleswoman, specialized in women\'s wellness',
    demoTip: 'Click "Talk to the salesperson" in the demo below!',
    demoBadge: 'Real-time demo',
    demoDesktop: 'Desktop View',
    demoMobile: 'Mobile View',
    demoTestNow: 'Test the AI Seller now',
    demoClickToTest: 'Click "Test now" to continue this conversation!',
    demoTalkToSeller: 'Talk to the salesperson',
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
    designedForWorld: 'Designed for all e-commerce',
    designedForWorldDesc: 'Mobile-first, multilingual FR/EN, adapted to slow connections and all markets.',
    smartUpsell: 'Smart Upsell',
    smartUpsellDesc: '+34% average cart thanks to intelligent recommendations based on conversation context.',
    ultraFastInstall: 'Ultra-Fast Installation',
    ultraFastInstallDesc: 'In just 2 minutes, without a developer, your AI Seller is ready to chat with your store visitors and turn them into customers.',
    profitableInvestment: 'Profitable investment',
    profitableInvestmentDesc: 'ChatSeller pays for itself within 3 months with an average ROI of +187%.',
    
    // Social Proof
    socialProofTitle: 'What e-merchants who tested ChatSeller say',
    socialProofSubtitle: 'Authentic feedback from entrepreneurs who experienced the AI Seller.',
    socialProofBadge: 'Tested and approved by +55 e-merchants',
    socialProofCTA: 'Create your AI Seller today too',
    socialProofCTADesc: 'Offer your online store visitors an experience similar to a physical store.',
    socialProofCTAButton: 'Create my AI Seller',
    socialProofBenefits: '✅ 7 days free • ✅ 2-minute installation • ✅ No commitment',
    rgpdCompliant: 'GDPR Compliant',
    rgpdDesc: 'Secure and compliant data',
    madeInAfrica: 'For every platform',
    madeInAfricaDesc: 'Integrable on all websites',
    support247: '24/7 Support',
    support247Desc: 'Responsive customer service FR/EN',
    earlyAdopters: 'Early Adopters',
    earlyAdoptersDesc: 'Tested ChatSeller in preview',
    satisfaction: 'Satisfaction',
    satisfactionDesc: 'Average rating from testers',
    approval: 'Approve',
    approvalDesc: 'Recommend ChatSeller',
    averageInstall: 'Installation',
    averageInstallDesc: 'Average installation time',
    
    // Pricing
    pricingTitle: 'Choose the perfect plan to boost your sales',
    pricingSubtitle: 'Start with 7 free days on the Starter plan. No commitment required.',
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
    faqTitle: 'Frequently asked questions about ChatSeller',
    faqSubtitle: 'Everything you need to know before adding your AI Seller to your website.',
    faqAllQuestions: 'All your questions have answers',
    contactQuestion: 'Can\'t find your answer?',
    contactTeam: 'Our team is here to answer all your specific questions.',
    contactEmail: 'Contact us',
    bookDemo: 'Book a demo',
    
    // Footer
    footerProduct: 'Product',
    footerCompany: 'Company',
    footerContactLegal: 'Contact & Legal',
    footerTechnicalSupport: 'Technical Support',
    footerCommercialContact: 'Commercial Contact',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms of use',
    footerPoweredByAI: 'Powered by AI',
    footerSystemsOperational: 'Systems operational',
    footerAllRightsReserved: 'All rights reserved. Created by',
    footerCreatedBy: 'Created by',
    footerRevolutionizing: 'DUKKA • Revolutionizing e-commerce in Africa',
    footerAbout: 'About',
    footerSupport: 'Support & FAQ',
    footerDemo: 'Interactive Demo',
    footerFaq: 'FAQ',
    footerPricing: 'Pricing',
    footerTestWidget: 'Test Widget',
    footerDocumentation: 'Documentation',
    footerDashboard: 'Dashboard',
    footerDukka: 'Dukka Platform',
    footerPrivacyPolicy: 'Privacy',
    footerTermsOfUse: 'Terms of use',
    footerGdprCompliant: 'GDPR Compliant',
    footerSecureData: 'Secure data',
    footerMadeInAfricaFull: 'All Platforms',
    footerSupportFull: '24/7 Support',
    footerTestedApproved: '+50 satisfied e-merchants',
    
    // Chat
    chatAssistant: 'AI Assistant',
    online: 'Online',
    offlineMode: 'Offline mode',
    typeMessage: 'Type your message...',
    welcome: 'Hello! I\'m your AI assistant. How can I help you today?',
    chatDemo: 'Demo',
    chatAnnaTitle: 'Anna - AI Saleswoman',
    chatOnlineSpecialist: 'Online • Mia Heating Belt - $55',
    chatResetConversation: 'Restart conversation',
    chatVoiceMessage: 'Voice message (demo)',
    chatMiaQuestions: 'Ask your questions about the Mia belt...',
    
    // Anna Chat Responses
    annaWelcome: 'Hello! 👋 I\'m Anna, Saleswoman at Amani. I see you\'re interested in our Mia heating belt. How can I help you today?',
    annaGreeting: 'Hello! 😊 I\'m delighted to help you. The Mia belt is our revolutionary solution against menstrual pain.',
    annaPrice: 'The Mia heating belt is $55 with free delivery! 🚚 It\'s a one-time investment for years of relief. Compared to monthly painkillers, Mia pays for itself in 3-4 months.',
    annaHowItWorks: 'Excellent question! Mia combines 3 scientifically proven technologies:\n\n🔥 **Thermotherapy**: Heat (45°C) dilates blood vessels and relaxes muscles\n💆 **Massage therapy**: Vibrations block pain signals to the brain\n🌸 **Relaxation**: The combined effect reduces stress and anxiety\n\nResult: 92% of our customers feel relief from the first use!',
    annaBattery: 'Mia has a 4-hour battery life and charges in 2h via USB-C! ⚡ It heats up in just 30 seconds. Perfect for use at home, office or on the go. Its high-quality lithium battery lasts for years.',
    annaDelivery: '🚚 Free delivery throughout Senegal within 48-72h! We also deliver to Côte d\'Ivoire, Mali, Burkina Faso (+€5). Discreet package, SMS tracking. Our delivery drivers are trained for confidentiality.',
    annaWarranty: '🛡️ You are 100% protected! 2-year manufacturer warranty + 30 days satisfied or refunded. If Mia doesn\'t suit you, free return and full refund, no questions asked!',
    annaReviews: '🌟 Our customers love Mia! 4.8/5 stars, over 850 positive reviews. Fatou (Dakar): \'Mia changed my life!\'. Aïcha (Thiès): \'No more anti-inflammatories!\'. 94% recommend to their friends.',
    annaSafety: 'Mia is 100% safe! CE certified, controlled temperature (45°C max), automatic shut-off after 4h. Over 850 women use it without problems. No side effects unlike medications.',
    annaPain: 'I understand perfectly! 75% of women in Senegal suffer from \'unbearable\' menstrual pain. Mia was specially designed after a study with 50 Senegalese women. It acts on the source of pain, not just symptoms.',
    annaAmani: 'Amani means \'peace\' in Swahili 🕊️. Our mission: bring serenity and well-being to African women. We develop natural, effective and affordable solutions. \'The warmth you need\' - that\'s our promise!',
    annaQuantityQuestion: 'Fantastic! 🎉 I\'ll help you finalize your order. How many Mia belts would you like? (1, 2, 3 or 4 maximum per order)',
    annaPhoneQuestion: 'For delivery, what is your phone number?',
    annaNameQuestion: 'Now, what is your full name (first and last name)?',
    annaAddressQuestion: 'What is your complete delivery address?',
    annaPaymentQuestion: 'How would you like to pay? 💳 Credit card, 📱 Mobile Money or 🚚 Cash on delivery?',
    annaOrderConfirmed: '🎉 Excellent news! Your order is confirmed!',
    annaFinalRecap: '**FINAL SUMMARY**',
    annaDefaultResponse: '🤖 This is a ChatSeller **demo**! To see a real AI Seller in action and discover Amani, visit: **https://amani-wellness.com** 🌟\n\nThere, you\'ll chat with Amani\'s real AI Saleswoman, perfectly trained on their products. This is exactly what ChatSeller can create for YOUR store!\n\nWould you like to create your own AI Seller with ChatSeller?',
    
    // Common
    learnMore: 'Learn more',
    getStarted: 'Get started',
    freeTrialDays: '7-day free trial',
    noCardRequired: 'No credit card required',
    installMinutes: '2-minute installation',
    addToCart: 'Add to cart',
    month: 'month',
    year: 'year',
    createMyAI: 'Create my AI Seller',
    
    // Stats
    questionsResolved: '92% questions resolved',
    ordersFinalized: '+63% orders finalized',
    averageBasket: '+34% average basket',
    completeVisibility: 'Complete ROI visibility',
    installTime: '2 min installation',
    mobileOptimizedStat: '100% mobile optimized',
    
    // New visitor flow
    newVisitorArrives: 'New visitor arrives...',
    questionsUnanswered: 'Unanswered questions',
    doubtsHesitations: 'Doubts and hesitations',
    cartAbandonment: 'Cart abandonment',
    visitorLeft: 'Visitor left without buying 😞',
    annaWelcomesVisitor: 'Anna welcomes visitor',
    instantResponse: 'Instant response',
    expertAdvice: 'Expert advice',
    collectsInfo: 'Collects information',
    orderFinalized: 'Order finalized!',
    satisfiedCustomer: 'Satisfied customer 😊',
    conversionIncrease: '+147% sales',

  // ===================
    // SUPPORT PAGE TRANSLATIONS EN
    // ===================
    
    // Support Page Header
    supportPageTitle: "ChatSeller Help Center",
    supportPageSubtitle: "Find answers to your questions quickly or contact our support team",
    supportBackToHome: "Back to home",
    supportSearchPlaceholder: "Search documentation...",
    
    // Support Stats
    supportResponseTime: "2 minutes",
    supportAvailability: "24/7",
    supportResolutionRate: "98%",
    supportAverageResponseTime: "Average response time",
    supportAvailable247: "Support available",
    supportProblemsResolved: "Problems resolved",
    
    // Support Categories
    supportAllCategories: "All",
    supportInstallation: "Installation",
    supportConfiguration: "Configuration", 
    supportBilling: "Billing",
    supportTechnical: "Technical",
    
    // FAQ Section
    supportFaqTitle: "Frequently asked questions",
    supportNoResultsTitle: "No results found",
    supportNoResultsDesc: "Try other keywords or contact our support",
    
    // FAQ Questions & Answers - Installation
    faqShopifyInstallQ: "How to install ChatSeller on my Shopify store?",
    faqShopifyInstallA: `Installing on Shopify is very simple:
      
1. **Log in** to your ChatSeller Dashboard
2. **Create your AI Seller** with your product information
3. **Copy the integration code** provided
4. In Shopify Admin → **Online Store** → **Themes** → **Actions** → **Edit code**
5. Open **theme.liquid** and paste the code before </head>
6. **Save** - Your AI Seller is active!

⏱️ **Total time: 2-3 minutes maximum**

Need help? Contact us via the form below.`,

    faqWooCommerceQ: "Does ChatSeller work with WooCommerce?",
    faqWooCommerceA: `Yes! ChatSeller is perfectly compatible with WooCommerce:

**Method 1 - Plugin (Recommended)**
1. Download our WordPress plugin from the Dashboard
2. Install via **Plugins** → **Add New** → **Upload**
3. Activate and configure with your API key

**Method 2 - Manual code**
1. Copy the integration code from your Dashboard
2. Go to **Appearance** → **Theme Editor**
3. Add the code in **functions.php** or in a template file

✅ **Compatible with all WooCommerce 3.0+ versions**`,

    faqCustomHtmlQ: "Can I install ChatSeller on a custom HTML site?",
    faqCustomHtmlA: `Absolutely! ChatSeller works on any website:

**Universal installation:**
1. Copy the JavaScript code from your Dashboard
2. Paste it in the &lt;head&gt; section or before &lt;/body&gt;
3. The widget appears automatically

**Advanced customization:**
- Configurable button position
- Adaptable colors and design
- Integration with your existing cart
- API available for developers

💡 **Works with:** HTML, PHP, React, Vue, Angular, etc.`,

    // FAQ Questions & Answers - Configuration
    faqPersonalityQ: "How to customize my AI Seller's personality?",
    faqPersonalityA: `You have full control over your AI Seller:

**In Dashboard → Seller Configuration:**

**1. Basic personality**
- Tone: Professional, Friendly, Expert, Casual
- Style: Direct, Consultant, Storytelling, Technical

**2. Custom messages**
- Welcome message
- Common objection responses
- Follow-up messages

**3. Product knowledge**
- Import your product sheets
- Add your FAQs
- Configure sales arguments

**4. Commercial objectives**
- Sales priorities
- Products to promote
- Negotiation thresholds

💡 **Tip:** Test different personalities with our integrated simulator!`,

    faqLearningQ: "How does the AI Seller learn about my products?",
    faqLearningA: `The AI Seller learns about your products through several methods:

**1. Automatic import**
- Connect your catalog (Shopify, WooCommerce, etc.)
- Automatic synchronization of new products
- Real-time price and stock updates

**2. Knowledge base**
- Upload your PDF/Word documents
- Existing FAQs
- User guides
- Return/warranty policies

**3. Continuous learning**
- AI analyzes conversations
- Automatically improves responses
- Reports recurring questions

**4. Manual configuration**
- Add specific information
- Define sales arguments
- Configure objection responses

📈 **Result:** A Seller increasingly expert on YOUR products`,

    // FAQ Questions & Answers - Technical
    faqWidgetNotShowingQ: "What to do if the widget doesn't appear?",
    faqWidgetNotShowingA: `Here's how to diagnose and solve the problem:

**Basic checks:**
1. ✅ Is the code correctly installed?
2. ✅ No errors in browser console (F12)
3. ✅ Is your plan active?
4. ✅ Is the AI Seller activated?

**Common solutions:**

**Shopify:** Clear cache (Online Store → Preferences → Purge cache)

**WordPress:** Temporarily disable cache plugins (WP Rocket, W3 Total Cache)

**Custom sites:** Check for JavaScript conflicts

**Ad blockers:** Add widget.chatseller.app to whitelist

**Still not resolved?**
Contact us with:
- Your site URL
- Browser used
- Console screenshot (F12)

⚡ **Priority support for Pro/Enterprise customers**`,

    faqSlowSiteQ: "Does ChatSeller slow down my website?",
    faqSlowSiteA: `No! ChatSeller is optimized for performance:

**Technical optimizations:**
- ⚡ **Asynchronous loading**: No impact on loading time
- 🪶 **Lightweight script**: Only 45kb compressed
- 🚀 **Global CDN**: Ultra-fast delivery from nearest server
- 💾 **Smart cache**: Widget loads instantly after first visit

**Performance tests:**
- **Page Speed**: No impact on Google score
- **Time to Interactive**: +0.1s maximum
- **Lighthouse**: Score maintained

**Monitoring included:**
- 24/7 performance monitoring
- Automatic alerts for issues
- Continuous optimizations

🎯 **Result:** More conversions WITHOUT slowing your site`,

    // FAQ Questions & Answers - Billing
    faqBillingHowQ: "How does ChatSeller billing work?",
    faqBillingHowA: `Simple and transparent billing:

**Available plans:**
- **Starter**: $22/month - 1000 messages
- **Professional**: $33/month - 5000 messages  
- **Enterprise**: Custom - Unlimited

**What's included:**
✅ **All plans:** No commission on your sales
✅ **No hidden fees:** Fixed monthly price
✅ **7 days free** on Starter plan
✅ **Cancel in 1 click** anytime

**Payment methods:**
- Credit card (Visa, Mastercard)

**Billing:**
- Automatic payment same day each month
- Invoice sent by email
- History in your Dashboard

💡 **Guarantee:** Satisfied or refunded within 30 days`,

    faqChangePlanQ: "Can I change plans anytime?",
    faqChangePlanA: `Yes, you have total flexibility:

**Upgrade (Starter → Pro/Enterprise):**
- ✅ **Immediate**: New features activated instantly
- ✅ **Prorated**: You only pay the difference until month end
- ✅ **No interruption**: Your AI Seller stays active

**Downgrade (Pro → Starter):**
- 📅 **End of period**: Change effective next cycle
- 💾 **Data preserved**: No history loss
- ⚠️ **Limits applied**: Advanced features disabled

**Cancellation:**
- 🔴 **1 click** from your Dashboard
- 📱 **No notice** required
- 💸 **Prorated refund** if cancelled mid-month

**Reactivation:**
- ✅ **Instant**: Resume where you left off
- 📊 **History preserved**: All your data is saved

🎯 **No commitment, total freedom!**`,

    // Contact Form
    supportContactTitle: "Contact support",
    supportContactSuccess: "Message sent!",
    supportContactSuccessDesc: "Our team will respond within 2h on average. You should receive a confirmation email shortly.",
    supportContactError: "An error occurred while sending.",
    supportContactSendAnother: "Send another message",
    supportContactFullName: "Full name",
    supportContactEmail: "Email",
    supportContactCategory: "Category",
    supportContactSubject: "Subject",
    supportContactMessage: "Message",
    supportContactMessagePlaceholder: "Describe your problem or question in detail...",
    supportContactSendButton: "Send message",
    supportContactSending: "Sending...",
    supportContactUrgentHelp: "Need urgent help?",
    
    // Contact Categories
    contactCategoryGeneral: "General question",
    contactCategoryTechnical: "Technical problem",
    contactCategoryBilling: "Billing",
    contactCategoryFeature: "Feature request",
    contactCategoryBug: "Report bug",
    
    // Common Support Terms
    supportTags: "keywords",
    supportMinutes: "minutes",
    supportHours: "hours",
    supportDays: "days", 
    supportAIVendor: "AI Seller",
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