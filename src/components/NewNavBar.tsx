// src/components/NewNavbar.tsx 
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight, Sparkles, Star, Zap, Gift, CreditCard } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { useIsMobile } from '@/hooks/use-mobile';

const NewNavbar = () => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fonction de scroll fluide vers les sections - CORRIGÉE
  const scrollToSection = (sectionId: string) => {
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '';
    
    if (isHomePage) {
      // Si on est déjà sur la page d'accueil, scroller vers la section
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Hauteur du navbar fixe
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
    setMobileMenuOpen(false);
  };

  const navigationItems = [
    {
      label: language === 'fr' ? 'Solution' : 'Solution',
      sectionId: 'problem-solution',
      icon: <Sparkles className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />,
      description: language === 'fr' ? 'Comment ChatSeller vous aide' : 'How ChatSeller helps you'
    },
    {
      label: language === 'fr' ? 'Comment ça marche' : 'How it works',
      sectionId: 'how-it-works',
      icon: <Zap className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />,
      description: language === 'fr' ? '3 étapes simples en 5 minutes' : '3 simple steps in 5 minutes'
    },
    {
      label: language === 'fr' ? 'Fonctionnalités' : 'Features',
      sectionId: 'features',
      icon: <Gift className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />,
      description: language === 'fr' ? 'Fonctionnalités spécialisées beauté' : 'Specialized beauty features'
    },
    {
      label: language === 'fr' ? 'Tarifs' : 'Pricing',
      sectionId: 'pricing',
      icon: <CreditCard className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />,
      description: language === 'fr' ? 'Plans adaptés aux marques beauté' : 'Plans for beauty brands'
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'py-2 sm:py-3 bg-white/95 backdrop-blur-md shadow-lg border-b border-rose-100/50' 
          : 'py-4 sm:py-6 bg-gradient-to-r from-rose-50/80 via-pink-50/80 to-purple-50/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Logo avec vraie image SVG - Responsive */}
        <button 
          onClick={() => scrollToSection('hero')}
          className="flex flex-col items-start group cursor-pointer flex-shrink-0"
        >
          <div className="flex items-center">
            <img 
              src="/images/logos/fav.svg" 
              alt="ChatSeller Logo" 
              className={`transition-all duration-300 mr-2 ${
                isScrolled ? 'h-4 w-4 sm:h-5 sm:w-5' : 'h-5 w-5 sm:h-6 sm:w-6'
              }`}
            />
            <span className={`font-display font-bold tracking-tight transition-all duration-300 ${
              isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
            }`}>
              ChatSeller<span className="text-rose-600">.</span>
            </span>
          </div>
          <span className={`text-xs text-rose-600/70 ml-6 sm:ml-8 font-medium transition-all duration-300 ${
            isScrolled ? '-mt-0.5 opacity-60' : '-mt-1 opacity-80'
          }`}>
            by Dukka
          </span>
        </button>

        {/* Navigation Desktop - RESPONSIVE AVEC BREAKPOINTS OPTIMISÉS */}
        <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors duration-200 flex items-center group relative whitespace-nowrap"
            >
              {item.label}
              {item.icon}
            </button>
          ))}
          
          <LanguageToggle />

          {/* CTAs BEAUTÉ OPTIMISÉS - Responsive */}
          <div className="flex items-center space-x-2 2xl:space-x-3">
            <Button
              variant="ghost"
              className={`rounded-full hover:bg-rose-50 text-gray-700 hover:text-rose-600 transition-all duration-200 whitespace-nowrap ${
                isScrolled ? 'text-xs px-2 py-1.5' : 'text-sm px-3 py-2 2xl:px-4 2xl:py-2'
              }`}
              asChild
            >
              <a href="https://dashboard.chatseller.app/login">
                {language === 'fr' ? 'Connexion' : 'Login'}
              </a>
            </Button>

            <Button
              className={`group relative overflow-hidden rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap ${
                isScrolled ? 'text-xs px-3 py-2' : 'text-sm px-4 py-2 2xl:px-6 2xl:py-3'
              }`}
              asChild
            >
              <a href="https://dashboard.chatseller.app/register">
                <span className="hidden 2xl:inline">
                  {language === 'fr' ? 'Essayer gratuitement' : 'Try it now for Free'}
                </span>
                <span className="inline 2xl:hidden">
                  {language === 'fr' ? 'Créer IA' : 'Create AI'}
                </span>
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-1000"></span>
              </a>
            </Button>
          </div>
        </nav>

        {/* Navigation Tablette - NOUVEAU MENU SIMPLIFIÉ POUR TABLETTES */}
        <nav className="hidden lg:flex xl:hidden items-center space-x-4">
          {/* Navigation réduite pour tablette */}
          <button
            onClick={() => scrollToSection('problem-solution')}
            className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors duration-200 flex items-center group"
          >
            {language === 'fr' ? 'Solution' : 'Solution'}
            <Sparkles className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors duration-200 flex items-center group"
          >
            {language === 'fr' ? 'Comment ça marche' : 'How it works'}
            <Zap className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={() => scrollToSection('pricing')}
            className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors duration-200 flex items-center group"
          >
            {language === 'fr' ? 'Tarifs' : 'Pricing'}
            <CreditCard className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <LanguageToggle />

          {/* CTAs pour tablette */}
          <Button
            className={`group relative overflow-hidden rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 ${
              isScrolled ? 'text-xs px-3 py-2' : 'text-sm px-4 py-2'
            }`}
            asChild
          >
            <a href="https://dashboard.chatseller.app/register">
              {language === 'fr' ? 'Essai gratuit' : 'Free trial'}
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </nav>

        {/* Mobile menu button - NOUVEAU BREAKPOINT */}
        <div className="flex items-center lg:hidden">
          <LanguageToggle />
          <button
            className="ml-2 p-2 rounded-lg hover:bg-rose-50 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-gray-700" />
            ) : (
              <Menu className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu avec animations beauté */}
      <div className={`lg:hidden absolute bg-white top-full left-0 right-0 transition-all duration-300 ease-in-out ${
        mobileMenuOpen 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-md shadow-xl border-t border-rose-100">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            
            {/* Navigation mobile */}
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-base font-medium text-gray-700 py-3 border-b border-rose-100 transition-colors hover:text-rose-600 flex items-center justify-between group"
              >
                <div className="flex items-center">
                  <span>{item.label}</span>
                  <div className="ml-2 text-rose-400 group-hover:text-rose-600 transition-colors">
                    {React.cloneElement(item.icon as React.ReactElement, { 
                      className: "h-4 w-4 opacity-100" 
                    })}
                  </div>
                </div>
                <div className="text-xs text-gray-500 group-hover:text-rose-500 transition-colors text-right">
                  {item.description}
                </div>
              </button>
            ))}
            
            {/* CTAs Mobile */}
            <div className="flex flex-col space-y-3 mt-4">
              <Button
                variant="ghost"
                className="justify-start text-base py-3 hover:bg-rose-50 rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
                asChild
              >
                <a href="https://dashboard.chatseller.app/login">
                  {language === 'fr' ? 'Se connecter' : 'Login'}
                </a>
              </Button>

              <Button
                className="w-full text-base py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
                asChild
              >
                <a href="https://dashboard.chatseller.app/register">
                  {language === 'fr' ? 'Essayer gratuitement' : 'Try it now for Free'}
                </a>
              </Button>
            </div>
            
            {/* Info mobile */}
            <div className="mt-6 pt-4 border-t border-rose-100 text-center">
              <div className="text-xs text-gray-500 mb-2">
                {language === 'fr' ?
                  'Spécialisé pour les marques beauté' :
                  'Specialized for beauty brands'}
              </div>
              <div className="flex justify-center items-center space-x-4 text-xs text-gray-400">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                  {language === 'fr' ? '14 jours gratuits' : '14 days free'}
                </span>
                <span className="flex items-center">
                  <Star className="w-3 h-3 mr-1 text-yellow-500" />
                  {language === 'fr' ? '+10 marques bêta' : '+10 beta brands'}
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NewNavbar;