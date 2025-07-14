import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const enTranslations = {
  // Navbar
  "features": "Features",
  "demo": "Demo",
  "pricing": "Pricing",
  "login": "Log in",
  "tryFree": "Try Chatseller Now",
  
  // Hero
  "nowAvailable": "Now available for all e-commerce platforms",
  "heroTitle": "Transform your online store into a human-like sales experience.",
  "heroSubtitle": "ChatSeller is an AI Sales Agent that chats with your customers, answers their questions intelligently, and collects their orders — 24/7.",
  "getStarted": "Try ChatSeller now",
  "watchDemo": "Watch it live",
  "trustedBy": "Trusted by leading brands",
  
  // Features
  "featuresTitle": "Everything you need to boost sales",
  "featuresSubtitle": "Intelligent features designed to enhance customer experience and drive conversions",
  "productRecommendations": "Product Recommendations",
  "productRecommendationsDesc": "Intelligently suggest products based on user conversations and browsing behavior.",
  "naturalConversations": "Natural Conversations",
  "naturalConversationsDesc": "Engage customers with human-like chat experiences that understand context and intent.",
  "conversionOptimization": "Conversion Optimization",
  "conversionOptimizationDesc": "Boost sales with timely assistance, overcoming objections, and guided purchasing.",
  "smartInsights": "Smart Insights",
  "smartInsightsDesc": "Gain valuable customer data and insights to improve your product offerings.",
  "availability": "24/7 Availability",
  "availabilityDesc": "Provide round-the-clock customer support and sales assistance without staffing costs.",
  "easyIntegration": "Easy Integration",
  "easyIntegrationDesc": "Simple setup with your existing e-commerce platform without technical headaches.",
  
  // Demo Section
  "demoTitle": "See ChatSeller in action",
  "demoSubtitle": "Experience how our AI Seller guides customers through their shopping journey, answering questions and making personalized product recommendations.",
  "demoTip": "Try asking about headphones, fitness watches or speakers in the demo.",
  "startTrial": "Try ChatSeller now",
  
  // Chat Interface
  "welcome": "Hello! My name is Mia. I'm your Commercial Assistant. How can I help you today? You can type or use voice input.",
  "typeMessage": "Type your message...",
  "headphoneResponse": "I found these wireless noise-cancelling headphones that might be perfect for you. They have excellent sound quality and a comfortable fit for all-day wear.",
  "watchResponse": "Our latest smart fitness watch would be a great choice. It tracks all your health metrics and has a 7-day battery life.",
  "speakerResponse": "I'd recommend our portable Bluetooth speaker. It's waterproof, has amazing sound quality, and the battery lasts up to 20 hours.",
  "defaultResponse": "I'm here to help you find the perfect product. Could you tell me what you're looking for? We have headphones, fitness watches, speakers, and more.",
  "chatAssistant": "Mia - Shopping Assistant",
  "online": "Online",
  
  // Language toggle
  "switchToFrench": "FR",
  "switchToEnglish": "EN",
  
  // Voice input
  "startListening": "Start voice input",
  "stopListening": "Stop voice input",
  "voiceInputError": "Voice Input Error",
  "voiceInputErrorDesc": "There was a problem with voice recognition. Please try again.",
  "voiceInputNotSupported": "Voice Input Not Supported",
  "voiceInputNotSupportedDesc": "Your browser doesn't support voice input. Try using Chrome or Edge.",
  
  // Offline mode
  "offline": "You're offline",
  "offlineDesc": "Internet connection lost. Some features may be limited.",
  "offlineMode": "Offline Mode",
  "offlineMessageStored": "You're currently offline. Your message has been saved and will be sent when you're back online.",
  "backOnline": "You're back online",
  "backOnlineDesc": "Internet connection restored.",
  "syncingMessages": "Syncing messages",
  "syncingMessagesDesc": "Sending your offline messages...",
};

// French translations
const frTranslations = {
  // Navbar
  "features": "Fonctionnalités",
  "demo": "Démo",
  "pricing": "Tarifs",
  "login": "Connexion",
  "tryFree": "Tester ChatSeller",
  
  // Hero
  "nowAvailable": "Disponible pour Shopify, WooCommerce et sites personnalisés",
  "heroTitle": "Le Vendeur IA qui transforme vos visiteurs en clients.",
  "heroSubtitle": "ChatSeller est un Agent IA Commercial qui discute avec vos clients, répond intelligemment à leurs questions et collecte leurs commandes, 24h/24.",
  "getStarted": "Tester ChatSeller maintenant",
  "watchDemo": "Voir ChatSeller en action",
  "trustedBy": "Utilisé par les grandes marques",
  
  // Features
  "featuresTitle": "Tout ce dont vous avez besoin pour booster vos ventes",
  "featuresSubtitle": "Des fonctionnalités intelligentes conçues pour améliorer l'expérience client et générer des conversions",
  "productRecommendations": "Recommandations de produits",
  "productRecommendationsDesc": "Suggérez intelligemment des produits basés sur les conversations de vos visiteurs et leur comportement de navigation.",
  "naturalConversations": "Conversations naturelles",
  "naturalConversationsDesc": "Offrez à vos clients des conversations aussi naturelles et pertinentes qu’avec un vrai vendeur.",
  "conversionOptimization": "Optimisation des conversions",
  "conversionOptimizationDesc": "Vendez plus en répondant au bon moment, en rassurant et en guidant chaque client jusqu’à l’achat.",
  "smartInsights": "Analyses intelligentes",
  "smartInsightsDesc": "Obtenez des données clients précieuses pour améliorer vos offres de produits.",
  "availability": "Disponibilité 24/7",
  "availabilityDesc": "Fournissez un support client et une assistance commerciale 24/7 sans coûts de personnel.",
  "easyIntegration": "Intégration facile",
  "easyIntegrationDesc": "Configuration simple en 2 minutes avec votre plateforme e-commerce actuelle sans difficultés techniques.",
  
  // Demo Section
  "demoTitle": "Voir ChatSeller en action",
  "demoSubtitle": "Découvrez comment Chatseller guide les clients dans leur parcours d'achat, répond aux questions et fait des recommandations de produits personnalisées.",
  "demoTip": "Essayez de demander des informations sur les écouteurs, les montres de fitness ou les haut-parleurs dans la démo.",
  "startTrial": "Tester ChatSeller maintenant",
  
  // Chat Interface
  "welcome": "Bonjour 👋🏼 Je suis Mia, votre Assistante d'achat. Comment puis-je vous aider aujourd'hui ? Vous pouvez répondre par écrit ou utiliser le micro.",
  "typeMessage": "Ecrivez votre message...",
  "headphoneResponse": "J'ai trouvé ces écouteurs sans fil à réduction de bruit qui pourraient être parfaits pour vous. Ils ont une excellente qualité sonore et un ajustement confortable pour une utilisation toute la journée.",
  "watchResponse": "Notre dernière montre fitness intelligente serait un excellent choix. Elle suit toutes vos données de santé et a une autonomie de 7 jours.",
  "speakerResponse": "Je vous recommande notre haut-parleur Bluetooth portable. Il est étanche, a une qualité sonore incroyable et la batterie dure jusqu'à 20 heures.",
  "defaultResponse": "Je suis là pour vous aider à trouver le produit parfait. Pouvez-vous me dire ce que vous recherchez ? Nous avons des écouteurs, des montres de fitness, des haut-parleurs et plus encore.",
  "chatAssistant": "Mia - Assistante d'achat",
  "online": "En ligne",
  
  // Language toggle
  "switchToFrench": "FR",
  "switchToEnglish": "EN",
  
  // Voice input
  "startListening": "Démarrer l'entrée vocale",
  "stopListening": "Arrêter l'entrée vocale",
  "voiceInputError": "Erreur d'entrée vocale",
  "voiceInputErrorDesc": "Il y a eu un problème avec la reconnaissance vocale. Veuillez réessayer.",
  "voiceInputNotSupported": "Entrée vocale non prise en charge",
  "voiceInputNotSupportedDesc": "Votre navigateur ne prend pas en charge l'entrée vocale. Essayez d'utiliser Chrome ou Edge.",
  
  // Offline mode
  "offline": "Vous êtes hors ligne",
  "offlineDesc": "Connexion Internet perdue. Certaines fonctionnalités peuvent être limitées.",
  "offlineMode": "Mode Hors Ligne",
  "offlineMessageStored": "Vous êtes actuellement hors ligne. Votre message a été enregistré et sera envoyé lorsque vous serez de nouveau en ligne.",
  "backOnline": "Vous êtes de nouveau en ligne",
  "backOnlineDesc": "Connexion Internet rétablie.",
  "syncingMessages": "Synchronisation des messages",
  "syncingMessagesDesc": "Envoi de vos messages hors ligne...",
};

const translations = {
  en: enTranslations,
  fr: frTranslations,
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to get the language from localStorage, defaulting to browser language or 'fr' for French-speaking Africa
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'fr' ? 'fr' : 'en';
  };

  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return (savedLanguage as Language) || getBrowserLanguage();
  });

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  const t = (key: string): string => {
  const langTranslations = translations[language];
  return (langTranslations as Record<string, string>)[key] || key;
};

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
