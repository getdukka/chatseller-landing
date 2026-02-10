// src/components/Footer.tsx
import React from 'react';
import { Linkedin, Shield, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  // Fonction pour naviguer vers les sections de la page d'accueil
  const navigateToHomeSection = (sectionId: string) => {
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '';

    if (isHomePage) {
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
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white via-rose-50/30 to-purple-50/30 border-t border-rose-200/50 relative overflow-hidden">

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-rose-300/10 to-pink-300/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-300/10 to-rose-300/5 rounded-full blur-3xl -z-10" />

      {/* Main footer content */}
      <div className="container px-6 md:px-12 mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BLOC 1 - Brand */}
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
                "La première Vendeuse IA pour les marques beauté. Transformez les visiteurs de votre boutique en ligne en clients fidèles, 24h/24." :
                "The first AI Salesperson for beauty brands. Turn your online store visitors into loyal customers, 24/7."
              }
            </p>

            {/* Compatibility badges */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 bg-white/80 border border-gray-200 rounded-lg px-3 py-1.5">
                <img src="/images/logos/shopify.svg" alt="Shopify" className="h-4 w-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).nextElementSibling!.textContent = 'Shopify'; }} />
                <span className="text-xs font-medium text-gray-700">Shopify</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 border border-gray-200 rounded-lg px-3 py-1.5">
                <img src="/images/logos/woocommerce.svg" alt="WooCommerce" className="h-4 w-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).nextElementSibling!.textContent = 'WooCommerce'; }} />
                <span className="text-xs font-medium text-gray-700">WooCommerce</span>
              </div>
            </div>

            {/* Social links */}
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

          {/* BLOC 2 - Produit */}
          <div>
            <h3 className="font-bold mb-6 text-gray-900 text-lg">
              {language === 'fr' ? 'Produit' : 'Product'}
            </h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => navigateToHomeSection('problem-solution')}
                  className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group cursor-pointer"
                >
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'Comment ça marche' : 'How it works'}
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
                <a
                  href="https://cal.com/chatseller/demo-beaute"
                  className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'Réserver une démo' : 'Book a demo'}
                </a>
              </li>
              <li>
                <a
                  href="https://dashboard.chatseller.app/login"
                  className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group"
                >
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'Se connecter' : 'Log in'}
                </a>
              </li>
            </ul>
          </div>

          {/* BLOC 3 - Aide */}
          <div>
            <h3 className="font-bold mb-6 text-gray-900 text-lg">
              {language === 'fr' ? 'Aide' : 'Help'}
            </h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => navigateToHomeSection('faq')}
                  className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group cursor-pointer"
                >
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  FAQ
                </button>
              </li>
              <li>
                <a
                  href="/support"
                  className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group"
                >
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'Centre d\'aide' : 'Help center'}
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@chatseller.app"
                  className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group"
                >
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'Contacter l\'équipe' : 'Contact the team'}
                </a>
              </li>
              <li>
                <a
                  href="https://docs.chatseller.app"
                  className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* BLOC 4 - Légal */}
          <div>
            <h3 className="font-bold mb-6 text-gray-900 text-lg">
              {language === 'fr' ? 'Légal' : 'Legal'}
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="/terms" className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'Conditions Générales d\'Utilisation' : 'Terms of Service'}
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
                </a>
              </li>
              <li>
                <a href="/legal" className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-gray-600 hover:text-rose-600 transition-colors duration-300 flex items-center group">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                  {language === 'fr' ? 'À Propos' : 'About'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-rose-200/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">

            {/* Copyright */}
            <p className="text-sm text-gray-600">
              © {currentYear} ChatSeller. {language === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}.
            </p>

            {/* RGPD badge */}
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-600 font-medium">
                {language === 'fr' ? 'Conforme RGPD' : 'GDPR Compliant'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
