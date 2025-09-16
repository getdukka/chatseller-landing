// src/components/SEOMetaTags.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const SEOMetaTags = () => {
  const { language } = useLanguage();
  
  const isProduction = process.env.NODE_ENV === 'production';
  const baseUrl = isProduction ? 'https://chatseller.app' : 'http://localhost:3000';
  
  const seoData = {
    fr: {
      title: "ChatSeller - Augmentez vos ventes de +400% avec un vendeur IA personnel",
      description: "Transformez vos visiteurs en clients avec ChatSeller, le vendeur IA qui conseille comme une esthéticienne 24/7. Marques beauté: +289% conversions, installation 2 min sur Shopify/WooCommerce.",
      keywords: "vendeur ia, chatbot beauté, conversion e-commerce, shopify, woocommerce, intelligence artificielle, conseil beauté, cosmétiques, skincare",
      ogTitle: "Multipliez vos ventes beauté par 4 avec ChatSeller",
      ogDescription: "Le vendeur IA qui transforme vos visiteurs beauté en clients. +289% conversions prouvées, conseille comme une experte, disponible 24/7.",
      author: "ChatSeller by Dukka"
    },
    en: {
      title: "ChatSeller - Increase your sales by +400% with a personal AI sales agent",
      description: "Turn your visitors into customers with ChatSeller, the AI sales agent that advises like a beautician 24/7. Beauty brands: +289% conversions, 2-min install on Shopify/WooCommerce.", 
      keywords: "ai sales agent, beauty chatbot, ecommerce conversion, shopify, woocommerce, artificial intelligence, beauty advice, cosmetics, skincare",
      ogTitle: "Multiply your beauty sales by 4 with ChatSeller",
      ogDescription: "The AI sales agent that turns your beauty visitors into customers. +289% proven conversions, advises like an expert, available 24/7.",
      author: "ChatSeller by Dukka"
    }
  };

  const currentSEO = seoData[language];

  // JSON-LD Schema pour l'organisation
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ChatSeller",
    "alternateName": "ChatSeller by Dukka",
    "url": baseUrl,
    "logo": `${baseUrl}/logo-chatseller.png`,
    "sameAs": [
      "https://twitter.com/getdukka",
      "https://www.linkedin.com/company/getdukka/",
      "https://github.com/getdukka"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-6-11-70-58-71",
      "contactType": "Customer Service",
      "email": "support@chatseller.app",
      "availableLanguage": ["French", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR",
      "addressRegion": "Île-de-France"
    }
  };

  // JSON-LD Schema pour le produit SaaS
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ChatSeller",
    "description": currentSEO.description,
    "url": baseUrl,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "49",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "49",
        "priceCurrency": "EUR",
        "unitText": "monthly"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "47",
      "bestRating": "5"
    },
    "featureList": [
      "AI Sales Agent",
      "Beauty Product Expertise",
      "Shopify Integration", 
      "WooCommerce Integration",
      "24/7 Customer Support",
      "Conversion Analytics",
      "Multi-language Support"
    ]
  };

  // JSON-LD FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": language === 'fr' ? "Est-ce compliqué d'installer ChatSeller ?" : "Is ChatSeller complicated to install?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === 'fr' ? "Non, l'installation prend seulement 2 minutes avec nos plugins natifs pour Shopify et WooCommerce." : "No, installation takes only 2 minutes with our native plugins for Shopify and WooCommerce."
        }
      },
      {
        "@type": "Question", 
        "name": language === 'fr' ? "Combien coûte ChatSeller ?" : "How much does ChatSeller cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === 'fr' ? "À partir de 49€/mois avec 14 jours d'essai gratuit. Aucun engagement." : "Starting from $59/month with 14 days free trial. No commitment."
        }
      },
      {
        "@type": "Question",
        "name": language === 'fr' ? "Quels résultats puis-je espérer ?" : "What results can I expect?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": language === 'fr' ? "Nos clients observent en moyenne +289% de conversions en 14 jours." : "Our clients observe on average +289% conversions in 14 days."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{currentSEO.title}</title>
      <meta name="description" content={currentSEO.description} />
      <meta name="keywords" content={currentSEO.keywords} />
      <meta name="author" content={currentSEO.author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={language === 'fr' ? 'French' : 'English'} />
      <link rel="canonical" href={`${baseUrl}${language === 'en' ? '/en' : ''}`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={currentSEO.ogTitle} />
      <meta property="og:description" content={currentSEO.ogDescription} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:image" content={`${baseUrl}/og-image-chatseller.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="ChatSeller" />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentSEO.ogTitle} />
      <meta name="twitter:description" content={currentSEO.ogDescription} />
      <meta name="twitter:image" content={`${baseUrl}/twitter-card-chatseller.jpg`} />
      <meta name="twitter:site" content="@getdukka" />
      <meta name="twitter:creator" content="@getdukka" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="ChatSeller" />
      
      {/* Hreflang for multilingual */}
      <link rel="alternate" hrefLang="fr" href={baseUrl} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default SEOMetaTags;