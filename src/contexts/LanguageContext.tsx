
import React, { createContext, useState, useContext, ReactNode } from 'react';

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
  "tryFree": "Try for free",
  
  // Hero
  "nowAvailable": "Now available for all e-commerce platforms",
  "heroTitle": "Transform your online store with AI-powered sales assistance",
  "heroSubtitle": "ChatSeller helps you boost conversions, enhance customer experience, and drive sales 24/7 with personalized shopping assistance.",
  "getStarted": "Get started free",
  "watchDemo": "Watch demo",
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
  "demoSubtitle": "Experience how our AI assistant guides customers through their shopping journey, answering questions and making personalized product recommendations.",
  "demoTip": "Try asking about headphones, fitness watches or speakers in the demo.",
  "startTrial": "Start your free trial",
  
  // Chat Interface
  "welcome": "Hello! Welcome to our store. How can I help you today?",
  "typeMessage": "Type your message...",
  "headphoneResponse": "I found these wireless noise-cancelling headphones that might be perfect for you. They have excellent sound quality and a comfortable fit for all-day wear.",
  "watchResponse": "Our latest smart fitness watch would be a great choice. It tracks all your health metrics and has a 7-day battery life.",
  "speakerResponse": "I'd recommend our portable Bluetooth speaker. It's waterproof, has amazing sound quality, and the battery lasts up to 20 hours.",
  "defaultResponse": "I'm here to help you find the perfect product. Could you tell me what you're looking for? We have headphones, fitness watches, speakers, and more.",
  "chatAssistant": "ChatSeller Assistant",
  "online": "Online",
  
  // Language toggle
  "switchToFrench": "FR",
  "switchToEnglish": "EN",
};

// French translations
const frTranslations = {
  // Navbar
  "features": "Fonctionnalités",
  "demo": "Démo",
  "pricing": "Tarifs",
  "login": "Connexion",
  "tryFree": "Essai gratuit",
  
  // Hero
  "nowAvailable": "Maintenant disponible pour toutes les plateformes e-commerce",
  "heroTitle": "Transformez votre boutique en ligne avec l'assistance commerciale alimentée par l'IA",
  "heroSubtitle": "ChatSeller vous aide à augmenter les conversions, améliorer l'expérience client et stimuler les ventes 24/7 avec une assistance personnalisée.",
  "getStarted": "Commencer gratuitement",
  "watchDemo": "Voir la démo",
  "trustedBy": "Utilisé par les grandes marques",
  
  // Features
  "featuresTitle": "Tout ce dont vous avez besoin pour stimuler vos ventes",
  "featuresSubtitle": "Des fonctionnalités intelligentes conçues pour améliorer l'expérience client et générer des conversions",
  "productRecommendations": "Recommandations de produits",
  "productRecommendationsDesc": "Suggérez intelligemment des produits basés sur les conversations des utilisateurs et leur comportement de navigation.",
  "naturalConversations": "Conversations naturelles",
  "naturalConversationsDesc": "Engagez les clients avec des expériences de chat semblables à celles d'un humain qui comprennent le contexte et l'intention.",
  "conversionOptimization": "Optimisation des conversions",
  "conversionOptimizationDesc": "Augmentez les ventes avec une assistance opportune, surmontez les objections et guidez les achats.",
  "smartInsights": "Analyses intelligentes",
  "smartInsightsDesc": "Obtenez des données clients précieuses pour améliorer vos offres de produits.",
  "availability": "Disponibilité 24/7",
  "availabilityDesc": "Fournissez un support client et une assistance commerciale 24/7 sans coûts de personnel.",
  "easyIntegration": "Intégration facile",
  "easyIntegrationDesc": "Configuration simple avec votre plateforme e-commerce existante sans difficultés techniques.",
  
  // Demo Section
  "demoTitle": "Voir ChatSeller en action",
  "demoSubtitle": "Découvrez comment notre assistant IA guide les clients dans leur parcours d'achat, répond aux questions et fait des recommandations de produits personnalisées.",
  "demoTip": "Essayez de demander des informations sur les écouteurs, les montres de fitness ou les haut-parleurs dans la démo.",
  "startTrial": "Commencez votre essai gratuit",
  
  // Chat Interface
  "welcome": "Bonjour ! Bienvenue dans notre boutique. Comment puis-je vous aider aujourd'hui ?",
  "typeMessage": "Tapez votre message...",
  "headphoneResponse": "J'ai trouvé ces écouteurs sans fil à réduction de bruit qui pourraient être parfaits pour vous. Ils ont une excellente qualité sonore et un ajustement confortable pour une utilisation toute la journée.",
  "watchResponse": "Notre dernière montre fitness intelligente serait un excellent choix. Elle suit toutes vos données de santé et a une autonomie de 7 jours.",
  "speakerResponse": "Je vous recommande notre haut-parleur Bluetooth portable. Il est étanche, a une qualité sonore incroyable et la batterie dure jusqu'à 20 heures.",
  "defaultResponse": "Je suis là pour vous aider à trouver le produit parfait. Pouvez-vous me dire ce que vous recherchez ? Nous avons des écouteurs, des montres de fitness, des haut-parleurs et plus encore.",
  "chatAssistant": "Assistant ChatSeller",
  "online": "En ligne",
  
  // Language toggle
  "switchToFrench": "FR",
  "switchToEnglish": "EN",
};

const translations = {
  en: enTranslations,
  fr: frTranslations,
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
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
