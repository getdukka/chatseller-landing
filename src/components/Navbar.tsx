// src/components/Navbar.tsx - NAVBAR AVEC NOUVEAU LOGO ET BY DUKKA EN BLEU
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import ConversationIcon from './ConversationIcon';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/hooks/useSupabase';

const Navbar = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoggedIn, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
        <a href="/" className="flex flex-col items-start">
          <div className="flex items-center">
            <ConversationIcon className="h-6 w-6 text-primary mr-2" />
            <span className="font-display text-xl font-bold tracking-tight">
              ChatSeller<span className="text-primary">.</span>
            </span>
          </div>
          <span className="text-xs text-primary ml-8 -mt-1 font-medium">by Dukka</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t('features')}
          </a>
          <a href="#demo" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t('demo')}
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t('pricing')}
          </a>
          <a href="/support" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t('support')}
          </a>
          <LanguageToggle />
          
          {/* ✅ AFFICHAGE CONDITIONNEL BASÉ SUR L'AUTHENTIFICATION */}
          {!loading && (
            <>
              {isLoggedIn ? (
                <Button className="text-sm group relative overflow-hidden rounded-full" asChild>
                  <a href="https://dashboard.chatseller.app">
                    {t('accessDashboard')}
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-1000"></span>
                  </a>
                </Button>
              ) : (
                <>
                  <Button variant="ghost" className="text-sm rounded-full" asChild>
                    <a href="https://dashboard.chatseller.app/login">
                      {t('login')}
                    </a>
                  </Button>
                  <Button className="text-sm group relative overflow-hidden rounded-full" asChild>
                    <a href="https://dashboard.chatseller.app/register">
                      {t('tryFree')} 
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-1000"></span>
                    </a>
                  </Button>
                </>
              )}
            </>
          )}
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <LanguageToggle />
          <button
            className="ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a 
              href="#features" 
              className="text-base font-medium text-foreground py-2 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('features')}
            </a>
            <a 
              href="#demo" 
              className="text-base font-medium text-foreground py-2 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('demo')}
            </a>
            <a 
              href="#pricing" 
              className="text-base font-medium text-foreground py-2 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('pricing')}
            </a>
            <a 
              href="/support" 
              className="text-base font-medium text-foreground py-2 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('support')}
            </a>
            
            {/* ✅ MENU MOBILE CONDITIONNEL */}
            {!loading && (
              <>
                {isLoggedIn ? (
                  <Button className="text-base w-full rounded-2xl" onClick={() => setMobileMenuOpen(false)} asChild>
                    <a href="https://dashboard.chatseller.app">
                      {t('accessDashboard')}
                    </a>
                  </Button>
                ) : (
                  <>
                    <Button variant="ghost" className="justify-start text-base py-2" onClick={() => setMobileMenuOpen(false)} asChild>
                      <a href="https://dashboard.chatseller.app/login">
                        {t('login')}
                      </a>
                    </Button>
                    <Button className="text-base w-full rounded-2xl" onClick={() => setMobileMenuOpen(false)} asChild>
                      <a href="https://dashboard.chatseller.app/register">
                        {t('tryFree')}
                      </a>
                    </Button>
                  </>
                )}
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;