
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="font-display text-xl font-bold tracking-tight">ChatSeller<span className="text-primary">.</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t('features')}
          </a>
          <a href="#demo" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t('demo')}
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t('pricing')}
          </a>
          <LanguageToggle />
          <Button variant="ghost" className="text-sm">
            {t('login')}
          </Button>
          <Button className="text-sm group">
            {t('tryFree')} <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm border-t">
          <nav className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('features')}
            </a>
            <a 
              href="#demo" 
              className="text-sm font-medium text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('demo')}
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('pricing')}
            </a>
            <div className="flex items-center py-2">
              <LanguageToggle />
            </div>
            <Button variant="ghost" className="justify-start text-sm px-0" onClick={() => setMobileMenuOpen(false)}>
              {t('login')}
            </Button>
            <Button className="text-sm w-full sm:w-auto" onClick={() => setMobileMenuOpen(false)}>
              {t('tryFree')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
