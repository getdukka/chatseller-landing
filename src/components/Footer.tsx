// src/components/Footer.tsx 
import React from 'react';
import { Linkedin, Shield, Users, Sparkles, Globe, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  // Fonction pour naviguer vers les sections de la page d'accueil
  const navigateToHomeSection = (sectionId: string) => {
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '';
    
    if (isHomePage) {
      // Si on est déjà sur la page d'accueil, scroller vers la section
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Si on est sur une autre page, naviguer vers l'accueil avec l'ancre
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white via-rose-50/30 to-purple-50/30 border-t border-rose-200/50 relative overflow-hidden">
      
      {/* Decorative elements beauté */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-rose-300/10 to-pink-300/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-300/10 to-rose-300/5 rounded-full blur-3xl -z-10" />

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
                "La Conseillère IA qui vend pour les marques beauté. Offrez à vos clientes en ligne la même attention qu'en boutique physique, et augmentez vos ventes." :
                "The AI Advisor that sells for beauty brands. Give your online customers the same attention as in a physical store, and increase your sales."
              }
            </p>

            {/* Social links beauté */}
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com/chatseller" 
                className="w-10 h-10 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50 transition-all duration-300 shadow-sm" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/getdukka/" 
                className="w-10 h-10 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50 transition-all duration-300 shadow-sm" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://x.com/ChatsellerApp" 
                className="w-10 h-10 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50 transition-all duration-300 shadow-sm" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Solution Beauté - LIENS CORRIGÉS */}
          <div>
            <h3 className="font-bold mb-6 text-gray-900 text-lg flex items-center">
              <Sparkles className="w-5 h-5 text-rose-500 mr-2" />
              {language === 'fr' ? 'A Propos' : 'About us'}
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="/about" className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'L\'IA Experte Beauté' : 'AI Beauty Expert'}
                </a>
              </li>
              <li>
                <button 
                  onClick={() => navigateToHomeSection('how-it-works')}
                  className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group cursor-pointer"
                >
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'Comment ça marche' : 'How it works'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToHomeSection('features')}
                  className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group cursor-pointer"
                >
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'Fonctionnalités' : 'Features'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToHomeSection('pricing')}
                  className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group cursor-pointer"
                >
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'Tarifs' : 'Pricing'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToHomeSection('faq')}
                  className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group cursor-pointer"
                >
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'FAQ' : 'FAQ'}
                </button>
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
                  href="#" 
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
                  href="#" 
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
                  href="#" 
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center group"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="w-2 h-2 bg-purple-300 rounded-full mr-3 group-hover:bg-purple-500 transition-colors"></div>
                  API & Webhooks
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center group">
                  <div className="w-2 h-2 bg-purple-300 rounded-full mr-3 group-hover:bg-purple-500 transition-colors"></div>
                  Google Analytics 4
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center group">
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
                  {language === 'fr' ? 'Conseils stratégiques' : 'Strategic advice'}
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
                © {currentYear} ChatSeller. {language === 'fr' ? 'Tous droits réservés' : 'All rights reserved'} {' '}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;