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
      title: "ChatSeller - Vendeuse IA pour boutiques beauté | +150% de ventes",
      description: "Intégrez une Vendeuse IA experte de vos produits sur votre boutique Shopify ou WooCommerce. Elle conseille vos clientes, recommande les bons produits et vend 24h/24. +150% de ventes en moyenne. Essai gratuit 14 jours.",
      keywords: "Vendeuse IA, vendeuse IA beauté, chatbot e-commerce beauté, IA conversationnelle vente, Shopify IA, WooCommerce chatbot, augmenter ventes boutique, conseillère beauté IA, ChatSeller",
      ogTitle: "ChatSeller - Votre Vendeuse IA experte beauté, disponible 24h/24",
      ogDescription: "Intégrez une Vendeuse IA sur votre boutique en ligne. Elle conseille vos clientes, recommande les bons produits et vend 24h/24. +150% de ventes en moyenne.",
      author: "ChatSeller by Dukka"
    },
    en: {
      title: "ChatSeller - AI Salesperson for beauty stores | +150% sales increase",
      description: "Integrate an AI Salesperson who knows your products on your Shopify or WooCommerce store. She advises your customers, recommends the right products and sells 24/7. +150% sales on average. 14-day free trial.",
      keywords: "AI Salesperson, AI beauty salesperson, beauty e-commerce chatbot, conversational AI sales, Shopify AI, WooCommerce chatbot, increase store sales, AI beauty advisor, ChatSeller",
      ogTitle: "ChatSeller - Your expert AI beauty Salesperson, available 24/7",
      ogDescription: "Integrate an AI Salesperson on your online store. She advises your customers, recommends the right products and sells 24/7. +150% sales on average.",
      author: "ChatSeller by Dukka"
    }
  };

  const currentSEO = seoData[language];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ChatSeller",
    "alternateName": "ChatSeller by Dukka",
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
    "name": "ChatSeller",
    "description": currentSEO.description,
    "url": baseUrl,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
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
    "featureList": [
      "AI Salesperson",
      "Beauty Product Expertise",
      "Shopify Integration",
      "WooCommerce Integration",
      "24/7 Automated Sales",
      "Conversion Analytics",
      "Multi-language Support"
    ]
  };

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
          "text": language === 'fr' ? "À partir de 45€/mois avec 14 jours d'essai gratuit. Aucun engagement, annulation en 1 clic." : "Starting from €45/month with 14 days free trial. No commitment, cancel in 1 click."
        }
      },
      {
        "@type": "Question",
        "name": language === 'fr' ? "Quels résultats puis-je espérer ?" : "What results can I expect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === 'fr' ? "Nos clients observent en moyenne +150% de ventes supplémentaires grâce à leur Vendeuse IA." : "Our clients observe on average +150% additional sales thanks to their AI Salesperson."
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
