// src/components/Footer.tsx
import React from 'react';
import { Twitter, Linkedin, Mail, MapPin, Shield, Star, Clock, Users, Heart, Sparkles, CheckCircle, Award, Globe, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-white via-rose-50/30 to-purple-50/30 border-t border-rose-200/50 relative overflow-hidden">
      
      {/* Decorative elements beauté */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-rose-300/10 to-pink-300/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-300/10 to-rose-300/5 rounded-full blur-3xl -z-10" />

      {/* Trust badges section beauté */}
      <div className="border-b border-rose-100/50">
        <div className="container px-6 md:px-12 mx-auto py-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 text-center">
            <div className="flex items-center space-x-3 text-sm text-gray-700">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  {language === 'fr' ? 'RGPD Compliant' : 'GDPR Compliant'}
                </div>
                <div className="text-xs text-gray-600">
                  {language === 'fr' ? 'Données hébergées en Europe' : 'Data hosted in Europe'}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-sm text-gray-700">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  {language === 'fr' ? 'Spécialisé Beauté' : 'Beauty Specialized'}
                </div>
                <div className="text-xs text-gray-600">
                  {language === 'fr' ? '2000+ ingrédients maîtrisés' : '2000+ ingredients mastered'}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-sm text-gray-700">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  {language === 'fr' ? 'Support 24/7' : '24/7 Support'}
                </div>
                <div className="text-xs text-gray-600">
                  {language === 'fr' ? 'Experts beauté disponibles' : 'Beauty experts available'}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-sm text-gray-700">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  {language === 'fr' ? 'Testé & Approuvé' : 'Tested & Approved'}
                </div>
                <div className="text-xs text-gray-600">
                  {language === 'fr' ? 'Par 50+ marques beauté' : 'By 50+ beauty brands'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container px-6 md:px-12 mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section beauté avec vrai logo SVG */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start mb-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg mr-3">
                  <img 
                    src="/images/logos/fav.svg" 
                    alt="ChatSeller Logo" 
                    className="h-6 w-6"
                  />
                </div>
                <div>
                  <span className="font-display text-2xl font-bold tracking-tight text-gray-900">
                    ChatSeller<span className="text-rose-600">.</span>
                  </span>
                  <div className="text-xs text-rose-600 font-medium">by Dukka</div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {language === 'fr' ? 
                "Le premier Agent IA spécialement conçu pour les marques Shopify et WooCommerce dans le secteur de la beauté. Offrez à vos client.e.s en ligne la même expérience qu'en boutique avec une conseillère IA formée sur vos produits." :
                "The first AI Agent specially designed for Shopify and WooCommerce brands in the beauty sector. Give your online customers the same experience as in-store with an AI advisor trained on your products."
              }
            </p>
            
            {/* Stats rapides */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-rose-100 shadow-sm">
                <div className="text-lg font-bold text-rose-600">+267%</div>
                <div className="text-xs text-gray-600">
                  {language === 'fr' ? 'Conversions' : 'Conversions'}
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-purple-100 shadow-sm">
                <div className="text-lg font-bold text-purple-600">96%</div>
                <div className="text-xs text-gray-600">
                  {language === 'fr' ? 'Satisfaction' : 'Satisfaction'}
                </div>
              </div>
            </div>
            
            {/* Social links beauté */}
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com/chateller" 
                className="w-10 h-10 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50 transition-all duration-300 shadow-sm" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/chatseller/" 
                className="w-10 h-10 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50 transition-all duration-300 shadow-sm" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com/getdukka" 
                className="w-10 h-10 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50 transition-all duration-300 shadow-sm" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Solution Beauté */}
          <div>
            <h3 className="font-bold mb-6 text-gray-900 text-lg flex items-center">
              <Sparkles className="w-5 h-5 text-rose-500 mr-2" />
              {language === 'fr' ? 'A Propos' : 'About us'}
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'L\'IA Experte Beauté' : 'AI Beauty Expert'}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'Comment ça marche' : 'How it works'}
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'Marques clientes' : 'Client brands'}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'Tarifs' : 'Pricing'}
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'FAQ' : 'FAQ'}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Intégrations & Support */}
          <div>
            <h3 className="font-bold mb-6 text-gray-900 text-lg flex items-center">
              <Globe className="w-5 h-5 text-purple-500 mr-2" />
              {language === 'fr' ? 'Intégrations' : 'Integrations'}
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://apps.shopify.com/chatseller" 
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center group"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="w-2 h-2 bg-purple-300 rounded-full mr-3 group-hover:bg-purple-500 transition-colors"></div>
                  Shopify App Store
                </a>
              </li>
              <li>
                <a 
                  href="https://wordpress.org/plugins/chatseller" 
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center group"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="w-2 h-2 bg-purple-300 rounded-full mr-3 group-hover:bg-purple-500 transition-colors"></div>
                  WooCommerce Plugin
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.chatseller.app/integrations" 
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center group"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="w-2 h-2 bg-purple-300 rounded-full mr-3 group-hover:bg-purple-500 transition-colors"></div>
                  API & Webhooks
                </a>
              </li>
              <li>
                <a href="/integrations/ga4" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center group">
                  <div className="w-2 h-2 bg-purple-300 rounded-full mr-3 group-hover:bg-purple-500 transition-colors"></div>
                  Google Analytics 4
                </a>
              </li>
              <li>
                <a href="/integrations/meta" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center group">
                  <div className="w-2 h-2 bg-purple-300 rounded-full mr-3 group-hover:bg-purple-500 transition-colors"></div>
                  Meta Pixel
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support & Légal */}
          <div>
            <h3 className="font-bold mb-6 text-gray-900 text-lg flex items-center">
              <Users className="w-5 h-5 text-blue-500 mr-2" />
              {language === 'fr' ? 'Support & Légal' : 'Support & Legal'}
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="/support" 
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                >
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                  {language === 'fr' ? 'Support technique' : 'Technical support'}
                </a>
              </li>
              <li>
                <a 
                  href="mailto:beauty@chatseller.app" 
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                >
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                  {language === 'fr' ? 'Expert beauté' : 'Beauty expert'}
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.chatseller.app" 
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                  Documentation
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                  {language === 'fr' ? 'Confidentialité' : 'Privacy Policy'}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                  {language === 'fr' ? 'Conditions' : 'Terms of Service'}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-rose-200/50">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-gray-600 mb-2">
                © {currentYear} ChatSeller. {language === 'fr' ? 'Tous droits réservés - Un produit de' : 'All rights reserved - A product of'} {' '}
                <a 
                  href="https://getdukka.com" 
                  className="text-rose-600 hover:text-rose-700 transition-colors font-semibold" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Dukka
                </a>.
              </p>
              <p className="text-xs text-gray-500">
                {language === 'fr' ? 
                  'Spécialement conçu pour les marques beauté' :
                  'Specially designed for beauty brands'}
              </p>
            </div>
            
            {/* Status & certifications */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8">
              
              {/* System status */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <a 
                  href="https://status.chatseller.app" 
                  className="text-xs text-gray-500 hover:text-green-600 transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {language === 'fr' ? 'Tous les systèmes opérationnels' : 'All systems operational'}
                </a>
              </div>
              
              {/* Certifications */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Shield className="w-3 h-3 text-green-600" />
                  <span className="text-xs text-gray-500">RGPD</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-500" />
                  <span className="text-xs text-gray-500">ISO 27001</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  <span className="text-xs text-gray-500">SOC2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;