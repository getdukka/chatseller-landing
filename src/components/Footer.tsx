// src/components/Footer.tsx - COMPLÈTEMENT TRADUIT
import React from 'react';
import { Twitter, Linkedin, Mail, MapPin, Shield, Star, Clock, Users } from 'lucide-react';
import ConversationIcon from './ConversationIcon';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  return (
    <footer className="bg-white border-t border-border">
      {/* Trust badges section 
      <div className="border-b border-gray-100">
        <div className="container px-6 md:px-12 mx-auto py-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="h-4 w-4 text-green-600" />
              <span>{t('rgpdCompliant')}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>{t('madeInAfrica')}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="h-4 w-4 text-blue-600" />
              <span>{t('support247')}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Users className="h-4 w-4 text-purple-600" />
              <span>{t('footerTestedApproved')}</span>
            </div>
          </div>
        </div>
      </div>
      */}

      {/* Main footer content */}
      <div className="container px-6 md:px-12 mx-auto py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start mb-4">
              <div className="flex items-center mb-2">
                <ConversationIcon className="h-6 w-6 text-primary mr-2" />
                <span className="font-display text-xl font-bold tracking-tight">
                  ChatSeller<span className="text-primary">.</span>
                </span>
              </div>
              <span className="text-xs text-primary ml-8 -mt-3 font-medium">by Dukka</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {language === 'fr' ? 
                "Agent IA Commercial pour e-commerce. Transformez votre page produit en vendeur autonome qui accueille vos visiteurs, réponds à leurs questions et collecte leurs commandes." :
                "AI Sales Agent for e-commerce. Transform your product page into an autonomous seller that welcomes your visitors, answers their questions and collects their orders."
              }
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://twitter.com/getdukka" 
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/getdukka/" 
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/getdukka" 
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Produit */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">{t('footerProduct')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('features')}
                </a>
              </li>
              <li>
                <a href="#demo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('demo')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('pricing')}
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.chatseller.app" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          
          {/* Entreprise & Ressources */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">{t('footerCompany')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {language === 'fr' ? "À propos" : "About"}
                </a>
              </li>
              <li>
                <a 
                  href="https://chatseller.substack.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {language === 'fr' ? "Actualités" : "News"}
                </a>
              </li>
              <li>
                <a href="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a 
                  href="https://getdukka.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Dukka
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">{t('footerContactLegal')}</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:support@chatseller.app" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footerTechnicalSupport')}
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@chatseller.app" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footerCommercialContact')}
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footerPrivacy')}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footerTerms')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground mb-2">
                © {currentYear} ChatSeller. {t('footerAllRightsReserved')} {' '}
                <a 
                  href="https://getdukka.com" 
                  className="text-primary hover:text-primary/80 transition-colors font-semibold" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Dukka
                </a>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted-foreground">{t('footerPoweredByAI')}</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              <a 
                href="https://chatseller-api-production.up.railway.app/health" 
                className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>{t('footerSystemsOperational')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;