// nuxt.config.ts - CONFIGURATION COMPLÈTE POUR LA LANDING
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // ✅ MODULES
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  // ✅ CSS
  css: ['~/assets/css/main.css'],

  // ✅ VARIABLES D'ENVIRONNEMENT PUBLIQUES
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    }
  },

  // ✅ CONFIGURATION APP
  app: {
    head: {
      title: 'ChatSeller - Le Vendeur IA qui transforme vos visiteurs en clients',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Créez un Vendeur IA qui discute avec vos clients, répond intelligemment à leurs questions et collecte leurs commandes, 24h/24. Installation en 2 minutes.' 
        },
        { name: 'keywords', content: 'chatbot, IA, vendeur automatique, e-commerce, conversion, Shopify, WooCommerce' },
        { property: 'og:title', content: 'ChatSeller - Le Vendeur IA pour e-commerce' },
        { property: 'og:description', content: 'Transformez vos visiteurs en clients avec notre Vendeur IA. +147% de conversion en moyenne.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://chatseller.app' },
        { property: 'og:image', content: 'https://chatseller.app/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ChatSeller - Le Vendeur IA pour e-commerce' },
        { name: 'twitter:description', content: 'Transformez vos visiteurs en clients avec notre Vendeur IA. +147% de conversion en moyenne.' },
        { name: 'twitter:image', content: 'https://chatseller.app/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://chatseller.app' }
      ]
    }
  },

  // ✅ TYPESCRIPT
  typescript: {
    strict: false,
    typeCheck: false
  },

  // ✅ CONFIGURATION NITRO POUR LE DÉPLOIEMENT
  nitro: {
    preset: 'vercel'
  },

  // ✅ CONFIGURATION BUILD
  build: {
    transpile: ['@supabase/supabase-js']
  },

  // ✅ CONFIGURATION RENDU
  ssr: true,

  // ✅ CONFIGURATION COMPATIBILITÉ
  compatibilityDate: '2024-12-01'
})