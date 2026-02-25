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
      title: "Recrutez Mia — La première Vendeuse IA pour votre boutique en ligne | ChatSeller",
      description: "Recrutez Mia, la première Vendeuse IA formée sur vos produits beauté. Elle accueille vos clients, lève leurs doutes et finalise leurs commandes 24h/24 — sur Shopify ou WooCommerce. +150% de ventes en moyenne. Essai gratuit 14 jours.",
      keywords: "Mia Vendeuse IA, recruter vendeuse IA, première vendeuse IA beauté, vendeuse IA boutique en ligne, ChatSeller, Shopify IA, WooCommerce chatbot, augmenter ventes beauté, vente automatique 24h/24, marques beauté Afrique",
      ogTitle: "Mia — La première Vendeuse IA pour votre boutique en ligne",
      ogDescription: "Votre boutique physique a ses vendeuses. Votre boutique en ligne mérite la sienne. Recrutez Mia : elle connaît vos produits, conseille vos clients et vend 24h/24.",
      author: "ChatSeller by Dukka"
    },
    en: {
      title: "Hire Mia — The first AI Salesperson for your online store | ChatSeller",
      description: "Hire Mia, the first AI Salesperson trained on your beauty products. She welcomes your customers, removes their doubts and closes their orders 24/7 — on Shopify or WooCommerce. +150% sales on average. 14-day free trial.",
      keywords: "Mia AI Salesperson, hire AI salesperson, first AI salesperson beauty, AI salesperson online store, ChatSeller, Shopify AI, WooCommerce chatbot, increase beauty sales, automatic selling 24/7, beauty brands Africa",
      ogTitle: "Mia — The first AI Salesperson for your online store",
      ogDescription: "Your physical store has its salespeople. Your online store deserves one too. Hire Mia: she knows your products, advises your customers and sells 24/7.",
      author: "ChatSeller by Dukka"
    }
  };

  const currentSEO = seoData[language];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ChatSeller",
    "alternateName": "ChatSeller by Dukka",
    "description": language === 'fr'
      ? "ChatSeller est l'agence qui recrute Mia pour votre boutique en ligne. Nous formons et déployons des Vendeuses IA spécialisées beauté pour les marques e-commerce."
      : "ChatSeller is the agency that recruits Mia for your online store. We train and deploy AI Salespeople specialized in beauty for e-commerce brands.",
    "url": baseUrl,
    "logo": `${baseUrl}/logo-chatseller.png`,
    "sameAs": [
      "https://twitter.com/ChatsellerApp",
      "https://www.linkedin.com/company/getdukka/",
      "https://github.com/getdukka"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+221767826804",
      "contactType": "Customer Service",
      "email": "support@chatseller.app",
      "availableLanguage": ["French", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SN",
      "addressLocality": "Dakar"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Mia by ChatSeller",
    "description": language === 'fr'
      ? "Mia est la première Vendeuse IA pour boutiques en ligne, spécialisée beauté. Formée sur vos produits, elle accueille vos clients, lève leurs doutes et finalise leurs commandes 24h/24."
      : "Mia is the first AI Salesperson for online stores, specialized in beauty. Trained on your products, she welcomes your customers, removes their doubts and closes their orders 24/7.",
    "url": baseUrl,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "name": language === 'fr' ? "Mia Découverte" : "Mia Discovery",
      "price": "45",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "45",
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
    "featureList": language === 'fr'
      ? [
          "Vendeuse IA formée sur vos produits",
          "Accueil et conseil client 24h/24",
          "Recommandations produits personnalisées",
          "Intégration Shopify native",
          "Intégration WooCommerce native",
          "Suivi des conversions en temps réel",
          "Support multilingue FR/EN"
        ]
      : [
          "AI Salesperson trained on your products",
          "Customer welcome and advice 24/7",
          "Personalized product recommendations",
          "Native Shopify integration",
          "Native WooCommerce integration",
          "Real-time conversion tracking",
          "Multilingual support FR/EN"
        ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": language === 'fr'
          ? "Comment Mia apprend-elle à connaître mes produits ?"
          : "How does Mia learn about my products?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === 'fr'
            ? "Mia est formée directement sur votre catalogue Shopify ou WooCommerce, votre base de connaissances et vos fiches produits. Elle maîtrise vos produits, vos prix et vos argumentaires en quelques minutes."
            : "Mia is trained directly on your Shopify or WooCommerce catalog, your knowledge base and your product pages. She masters your products, prices and selling points in just a few minutes."
        }
      },
      {
        "@type": "Question",
        "name": language === 'fr'
          ? "Quelle est la différence entre Mia et un chatbot classique ?"
          : "What is the difference between Mia and a classic chatbot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === 'fr'
            ? "Mia n'est pas un chatbot de support : c'est une Vendeuse. Elle ne se contente pas de répondre aux questions — elle conseille, rassure, recommande des produits et guide le client jusqu'à l'achat, exactement comme une vendeuse en boutique physique."
            : "Mia is not a support chatbot: she is a Salesperson. She doesn't just answer questions — she advises, reassures, recommends products and guides the customer through to purchase, exactly like a salesperson in a physical store."
        }
      },
      {
        "@type": "Question",
        "name": language === 'fr'
          ? "Combien coûte le recrutement de Mia ?"
          : "How much does hiring Mia cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === 'fr'
            ? "Mia est disponible dès 45€/mois avec 14 jours d'essai gratuit. Aucun engagement, annulation en 1 clic. Pour les marques à fort volume, les plans Mia Pro (145€) et Mia Premium (299€) offrent plus de capacités."
            : "Mia is available from €45/month with a 14-day free trial. No commitment, cancel in 1 click. For high-volume brands, Mia Pro (€145) and Mia Premium (€299) plans offer more capacity."
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
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="ChatSeller" />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentSEO.ogTitle} />
      <meta name="twitter:description" content={currentSEO.ogDescription} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
      <meta name="twitter:site" content="@ChatsellerApp" />
      <meta name="twitter:creator" content="@ChatsellerApp" />

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
