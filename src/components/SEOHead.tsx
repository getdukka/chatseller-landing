// src/components/SEOHead.tsx 
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://chatseller.app/og-image.jpg",
  ogType = "website",
  noindex = false
}) => {
  const { language } = useLanguage();
  
  // 🎯 MOTS-CLÉS STRATÉGIQUES PAR LANGUE
  const defaultKeywords = language === 'fr' ? 
    "vendeur IA, agent IA commercial, chatbot e-commerce, intelligence artificielle vente, IA conversationnelle, automatisation vente, Shopify IA, WooCommerce chatbot, augmenter conversion, vente automatique, assistant virtuel, bot commercial, IA marketing, e-commerce automation, vendeur virtuel, agent conversationnel, ChatSeller, Dukka, Sénégal, Afrique, startup IA" :
    "AI seller, AI sales agent, e-commerce chatbot, artificial intelligence sales, conversational AI, sales automation, Shopify AI, WooCommerce chatbot, increase conversion, automatic sales, virtual assistant, commercial bot, AI marketing, e-commerce automation, virtual seller, conversational agent, ChatSeller, Dukka, Senegal, Africa, AI startup";

  // 🎯 TITRES ET DESCRIPTIONS OPTIMISÉS
  const defaultTitle = language === 'fr' ? 
    "ChatSeller - Multipliez vos conversions par 3 avec une Conseillère IA disponible 24/7 | Agent Commercial Intelligence Artificielle" :
    "ChatSeller - Multiply Your Conversions by 3 with a 24/7 AI Advisor | AI Sales Agent";

  const defaultDescription = language === 'fr' ? 
    "🚀 ChatSeller : Le premier Agent IA spécialement conçu pour les marques Shopify et WooCommerce dans le secteur de la beauté. Offrez à vos client.e.s en ligne la même expérience qu'en boutique avec une conseillère IA formée sur vos produits." :
    "🚀 ChatSeller: The first AI Agent specially designed for Shopify and WooCommerce brands in the beauty sector. Provide your online customers with the same experience as in-store with an AI advisor trained on your products.";

  const siteUrl = "https://chatseller.app";
  const currentUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  
  return (
    <Helmet>
      {/* 🎯 MÉTADONNÉES DE BASE */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* 🚫 INDEXATION */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}
      
      {/* 🌍 HREFLANG POUR MULTILANGUE */}
      <link rel="alternate" hrefLang="fr" href={`${siteUrl}/fr`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      
      {/* 📱 MÉTADONNÉES MOBILE */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* 🏢 MÉTADONNÉES ENTREPRISE */}
      <meta name="author" content="Dukka" />
      <meta name="publisher" content="ChatSeller by Dukka" />
      <meta name="copyright" content="© 2025 ChatSeller. All rights reserved." />
      <meta name="application-name" content="ChatSeller" />
      
      {/* 🎯 OPEN GRAPH FACEBOOK */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="ChatSeller" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="ChatSeller - Agents IA pour Marques Beauté" />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'fr' ? 'en_US' : 'fr_FR'} />
      
      {/* 🐦 TWITTER CARDS */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chatseller_app" />
      <meta name="twitter:creator" content="@chatseller_app" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="ChatSeller - AI Agent for Beauty Brands" />
      
      {/* 💼 LINKEDIN */}
      <meta property="linkedin:owner" content="getdukka" />
      
      {/* 🏗️ STRUCTURED DATA - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ChatSeller",
          "description": description || defaultDescription,
          "url": siteUrl,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "14",
            "priceCurrency": "EUR",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock"
          },
          "creator": {
            "@type": "Organization",
            "name": "Dukka",
            "url": "https://getdukka.com",
            "sameAs": [
              "https://twitter.com/getdukka",
              "https://linkedin.com/company/getdukka"
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
      </script>
      
      {/* 🏢 ORGANIZATION SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ChatSeller",
          "alternateName": "Dukka ChatSeller",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "sameAs": [
            "https://twitter.com/getdukka",
            "https://linkedin.com/company/getdukka",
            "https://github.com/getdukka"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33695903221",
            "contactType": "customer service",
            "email": "support@chatseller.app",
            "availableLanguage": ["French", "English"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Montpellier, France",
            "addressLocality": "Montpellier",
            "addressCountry": "FR"
          }
        })}
      </script>
      
      {/* 🛍️ PRODUCT SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "ChatSeller AI Agent for Beauty Brands",
          "description": "Multipliez vos conversions par 3 avec une Conseillère Beauté IA disponible 24/7",
          "brand": {
            "@type": "Brand",
            "name": "ChatSeller"
          },
          "offers": {
            "@type": "Offer",
            "price": "49.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "validFrom": "2025-01-01",
            "seller": {
              "@type": "Organization",
              "name": "Dukka"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "55"
          }
        })}
      </script>
      
      {/* 🔗 PRECONNECT POUR PERFORMANCE */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://connect.facebook.net" />
      
      {/* 📄 SITEMAP */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    </Helmet>
  );
};

export default SEOHead;