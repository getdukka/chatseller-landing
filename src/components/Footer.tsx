import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="font-display text-xl font-bold tracking-tight mb-4">
              ChatSeller<span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Agent IA Commercial pour e-commerce. Transformez votre page produit en vendeur autonome qui guide vos visiteurs jusqu'à la commande.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ibukandjoli" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/ibukandjoli/" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/getdukka" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Produit */}
          <div>
            <h3 className="font-medium mb-4">Produit</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Fonctionnalités</a></li>
              <li><a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Démo Interactive</a></li>
              <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tarifs</a></li>
              <li><a href="https://widget.chatseller.app" className="text-sm text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Tester le Widget</a></li>
              <li><a href="https://docs.chatseller.app" className="text-sm text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Documentation</a></li>
            </ul>
          </div>
          
          {/* Entreprise */}
          <div>
            <h3 className="font-medium mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li><a href="https://ibukasharing.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">À propos</a></li>
              <li><a href="https://ibukasharing.com/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Blog</a></li>
              <li><a href="https://dashboard.chatseller.app" className="text-sm text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Dashboard</a></li>
              <li><a href="mailto:ibuka@chatseller.app" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="https://github.com/getdukka" className="text-sm text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Open Source</a></li>
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div>
            <h3 className="font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="mailto:support@chatseller.app" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Support Technique</a></li>
              <li><a href="https://docs.chatseller.app/integration" className="text-sm text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Guide d'Installation</a></li>
              <li><a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Confidentialité</a></li>
              <li><a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Conditions d'utilisation</a></li>
              <li><a href="/gdpr" className="text-sm text-muted-foreground hover:text-foreground transition-colors">RGPD</a></li>
            </ul>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Dakar, Sénégal</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="mailto:hello@chatseller.app" className="hover:text-foreground transition-colors">
                  hello@chatseller.app
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} ChatSeller. Tous droits réservés. Développé avec ❤️ en Afrique de l'Ouest par{' '}
            <a href="https://ibukasharing.com" className="text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">
              Ibuka Ndjoli
            </a>.
          </p>
          
          <div className="flex items-center space-x-4">
            <span className="text-xs text-muted-foreground">Alimenté par GPT-4o-mini</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <a href="https://api.chatseller.app/health" className="text-xs text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                Tous systèmes opérationnels
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;