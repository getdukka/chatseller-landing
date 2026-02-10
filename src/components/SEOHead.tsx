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
    "Vendeuse IA, vendeuse IA beauté, chatbot e-commerce beauté, IA conversationnelle vente, automatisation vente beauté, Shopify IA, WooCommerce chatbot, augmenter ventes boutique, vente automatique 24h/24, assistant IA beauté, conseillère beauté IA, ChatSeller, marques beauté, skincare IA, e-commerce Afrique" :
    "AI Salesperson, AI beauty salesperson, beauty e-commerce chatbot, conversational AI sales, beauty sales automation, Shopify AI, WooCommerce chatbot, increase store sales, automatic selling 24/7, AI beauty advisor, ChatSeller, beauty brands, skincare AI, Africa e-commerce";

  const defaultTitle = language === 'fr' ?
    "ChatSeller - Vendeuse IA pour boutiques beauté | +150% de ventes" :
    "ChatSeller - AI Salesperson for beauty stores | +150% sales increase";

  const defaultDescription = language === 'fr' ?
    "Intégrez une Vendeuse IA experte de vos produits sur votre boutique Shopify ou WooCommerce. Elle conseille vos clientes, recommande les bons produits et vend 24h/24. +150% de ventes en moyenne. Essai gratuit 14 jours." :
    "Integrate an AI Salesperson who knows your products on your Shopify or WooCommerce store. She advises your customers, recommends the right products and sells 24/7. +150% sales on average. 14-day free trial.";

  const siteUrl = "https://chatseller.app";
  const currentUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

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
      <meta name="author" content="Dukka" />
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
      <meta property="og:image:alt" content={language === 'fr' ? "ChatSeller - Vendeuse IA pour boutiques beauté" : "ChatSeller - AI Salesperson for beauty stores"} />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'fr' ? 'en_US' : 'fr_FR'} />

      {/* TWITTER CARDS */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ChatsellerApp" />
      <meta name="twitter:creator" content="@ChatsellerApp" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={language === 'fr' ? "ChatSeller - Vendeuse IA pour boutiques beauté" : "ChatSeller - AI Salesperson for beauty stores"} />

      {/* LINKEDIN */}
      <meta property="linkedin:owner" content="getdukka" />

      {/* STRUCTURED DATA - JSON-LD */}
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
            "price": "45.00",
            "priceCurrency": "EUR",
            "priceValidUntil": "2026-12-31",
            "availability": "https://schema.org/InStock"
          },
          "creator": {
            "@type": "Organization",
            "name": "Dukka",
            "url": "https://getdukka.com",
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

      {/* ORGANIZATION SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ChatSeller",
          "alternateName": "Dukka ChatSeller",
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

      {/* PRODUCT SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "ChatSeller",
          "description": language === 'fr' ?
            "Vendeuse IA pour boutiques beauté. Elle conseille vos clientes, recommande les bons produits et vend 24h/24. +150% de ventes en moyenne." :
            "AI Salesperson for beauty stores. She advises your customers, recommends the right products and sells 24/7. +150% sales on average.",
          "brand": {
            "@type": "Brand",
            "name": "ChatSeller"
          },
          "offers": {
            "@type": "Offer",
            "price": "45.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-01-01",
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
