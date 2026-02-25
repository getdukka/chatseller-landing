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

  const defaultKeywords = language === 'fr' ?
    "Mia Vendeuse IA, recruter vendeuse IA, première vendeuse IA beauté, vendeuse IA boutique en ligne, ChatSeller, Shopify IA, WooCommerce chatbot, augmenter ventes beauté, vente automatique 24h/24, marques beauté Afrique, e-commerce beauté IA, conseillère beauté IA, skincare IA" :
    "Mia AI Salesperson, hire AI salesperson, first AI salesperson beauty, AI salesperson online store, ChatSeller, Shopify AI, WooCommerce chatbot, increase beauty sales, automatic selling 24/7, beauty brands Africa, beauty e-commerce AI, AI beauty advisor";

  const defaultTitle = language === 'fr' ?
    "Recrutez Mia — La première Vendeuse IA pour votre boutique en ligne | ChatSeller" :
    "Hire Mia — The first AI Salesperson for your online store | ChatSeller";

  const defaultDescription = language === 'fr' ?
    "Recrutez Mia, la première Vendeuse IA formée sur vos produits beauté. Elle accueille vos clients, lève leurs doutes et finalise leurs commandes 24h/24 — sur Shopify ou WooCommerce. +150% de ventes en moyenne. Essai gratuit 14 jours." :
    "Hire Mia, the first AI Salesperson trained on your beauty products. She welcomes your customers, removes their doubts and closes their orders 24/7 — on Shopify or WooCommerce. +150% sales on average. 14-day free trial.";

  const siteUrl = "https://chatseller.app";
  const currentUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  const ogImageAlt = language === 'fr'
    ? "Mia, la première Vendeuse IA pour boutiques beauté — ChatSeller"
    : "Mia, the first AI Salesperson for beauty stores — ChatSeller";

  return (
    <Helmet>
      {/* MÉTADONNÉES DE BASE */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={currentUrl} />

      {/* INDEXATION */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}

      {/* HREFLANG POUR MULTILANGUE */}
      <link rel="alternate" hrefLang="fr" href={`${siteUrl}/fr`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />

      {/* MÉTADONNÉES MOBILE */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* MÉTADONNÉES ENTREPRISE */}
      <meta name="author" content="ChatSeller" />
      <meta name="publisher" content="ChatSeller by Dukka" />
      <meta name="copyright" content="© 2026 ChatSeller. All rights reserved." />
      <meta name="application-name" content="ChatSeller" />

      {/* OPEN GRAPH FACEBOOK */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="ChatSeller" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'fr' ? 'en_US' : 'fr_FR'} />

      {/* TWITTER CARDS */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ChatsellerApp" />
      <meta name="twitter:creator" content="@ChatsellerApp" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* LINKEDIN */}
      <meta property="linkedin:owner" content="getdukka" />

      {/* STRUCTURED DATA — Mia (le produit recruté) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Mia by ChatSeller",
          "description": language === 'fr'
            ? "Mia est la première Vendeuse IA pour boutiques en ligne, spécialisée beauté. Formée sur vos produits, elle accueille vos clients, lève leurs doutes et finalise leurs commandes 24h/24."
            : "Mia is the first AI Salesperson for online stores, specialized in beauty. Trained on your products, she welcomes your customers, removes their doubts and closes their orders 24/7.",
          "url": siteUrl,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": [
            {
              "@type": "Offer",
              "name": language === 'fr' ? "Mia Découverte" : "Mia Discovery",
              "price": "45.00",
              "priceCurrency": "EUR",
              "priceValidUntil": "2026-12-31",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "Mia Pro",
              "price": "145.00",
              "priceCurrency": "EUR",
              "priceValidUntil": "2026-12-31",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "Mia Premium",
              "price": "299.00",
              "priceCurrency": "EUR",
              "priceValidUntil": "2026-12-31",
              "availability": "https://schema.org/InStock"
            }
          ],
          "creator": {
            "@type": "Organization",
            "name": "ChatSeller",
            "url": siteUrl,
            "sameAs": [
              "https://twitter.com/ChatsellerApp",
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

      {/* ORGANIZATION SCHEMA — ChatSeller (l'agence qui place Mia) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ChatSeller",
          "alternateName": "ChatSeller by Dukka",
          "description": language === 'fr'
            ? "ChatSeller est l'agence qui recrute Mia pour votre boutique en ligne. Nous formons et déployons des Vendeuses IA spécialisées beauté pour les marques e-commerce."
            : "ChatSeller is the agency that recruits Mia for your online store. We train and deploy AI Salespeople specialized in beauty for e-commerce brands.",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "sameAs": [
            "https://twitter.com/ChatsellerApp",
            "https://linkedin.com/company/getdukka",
            "https://instagram.com/chatseller"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+221767826804",
            "contactType": "customer service",
            "email": "support@chatseller.app",
            "availableLanguage": ["French", "English"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Dakar, SENEGAL",
            "addressLocality": "Dakar",
            "addressCountry": "SN"
          }
        })}
      </script>

      {/* PRODUCT SCHEMA — Mia comme entité nommée */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Mia",
          "description": language === 'fr'
            ? "La première Vendeuse IA pour boutiques en ligne. Formée sur vos produits beauté, Mia accueille vos clients, lève leurs doutes et finalise leurs commandes 24h/24. +150% de ventes en moyenne."
            : "The first AI Salesperson for online stores. Trained on your beauty products, Mia welcomes your customers, removes their doubts and closes their orders 24/7. +150% sales on average.",
          "brand": {
            "@type": "Brand",
            "name": "ChatSeller"
          },
          "offers": {
            "@type": "Offer",
            "name": language === 'fr' ? "Mia Découverte" : "Mia Discovery",
            "price": "45.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-01-01",
            "seller": {
              "@type": "Organization",
              "name": "ChatSeller"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "55"
          }
        })}
      </script>

      {/* PRECONNECT POUR PERFORMANCE */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://connect.facebook.net" />

      {/* SITEMAP */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    </Helmet>
  );
};

export default SEOHead;
