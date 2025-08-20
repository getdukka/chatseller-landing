// src/components/PlatformsSection.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react';

const PlatformLogo = ({ name, icon, url }: { name: string; icon: React.ReactNode; url?: string }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
      <div className="w-12 h-12 flex items-center justify-center mb-2 text-gray-700">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
};

const PlatformsSection = () => {
  const platforms = [
    {
      name: 'Shopify',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.8 5.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1l-.5.3c-.1-.1-.3-.2-.6-.2-.9 0-1.8.8-2.5 2.1-.5-.1-1-.2-1.4-.2-1.3 0-2.2.8-2.2 2.1 0 .4.1.8.2 1.1-.8.4-1.3.9-1.3 1.5 0 .9.9 1.3 2.3 1.3.3 0 .6 0 1-.1l.1.1c.3.3.7.4 1.2.4.8 0 1.7-.5 2.5-1.4.8.2 1.4.3 1.9.3 1.4 0 2.3-.6 2.3-1.6 0-.7-.5-1.3-1.4-1.7zm-7.9 6.8c-.7 0-1.2-.2-1.2-.6 0-.3.3-.6.8-.8.2.3.5.6.8.8-.1.4-.2.6-.4.6zm2.9-2.1c-.4.6-.9 1-1.3 1-.2 0-.3-.1-.3-.3 0-.5.4-1.2 1.1-1.8.2.4.4.7.5 1.1zm1.8-4.6c.3 0 .5.1.6.2-.5.7-.9 1.6-1.1 2.4-.4-.1-.7-.3-1-.4.2-.9.8-2.2 1.5-2.2zm1.7 6.1c-.3 0-.7-.1-1.1-.2.1-.6.1-1.2 0-1.7.3.1.5.2.8.4.4.2.6.4.6.7-.1.5-.2.8-.3.8z"/>
        </svg>
      )
    },
    {
      name: 'WordPress',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.469 12c0 4.424-3.045 8.129-7.116 9.095l4.25-12.313c.788-1.97.872-3.556.872-4.963 0-.512-.033-.985-.097-1.424 1.752 1.898 2.84 4.414 2.84 7.193v.412h.251zm-6.987-6.98c.638-.033 1.213-.1 1.213-.1.57-.067.505-.905-.065-.872 0 0-1.714.134-2.818.134-1.037 0-2.784-.134-2.784-.134-.57-.033-.635.839-.065.872 0 0 .54.067 1.112.1l1.65 4.52-2.321 6.964-3.864-11.484c.638-.033 1.213-.1 1.213-.1.57-.067.505-.905-.065-.872 0 0-1.714.134-2.818.134-.199 0-.433-.005-.681-.013 1.842-2.793 5.011-4.649 8.564-4.649 2.67 0 5.096 1.018 6.917 2.685-.044-.003-.088-.009-.134-.009-.637 0-1.089.554-1.089 1.148 0 .538.311.99.638 1.529.248.437.538.999.538 1.814 0 .562-.217 1.215-.5 2.126l-.656 2.192-2.381-7.083z"/>
          <path d="M12 2.531c-2.35 0-4.531.85-6.219 2.263.358-.012.74-.019 1.138-.019 1.104 0 2.818.134 2.818.134.57.033.635-.805.065-.872 0 0-.575-.067-1.213-.1l3.86 11.484 2.321-6.964-1.65-4.52c-.572-.033-1.112-.1-1.112-.1-.57-.067-.505-.905.065-.872 0 0 1.747.134 2.784.134 1.104 0 2.818-.134 2.818-.134.57.033.635-.805.065-.872 0 0-.575-.067-1.213-.1l3.826 11.389-1.055-3.509c-.458-1.47-.805-2.526-.805-3.434 0-1.314.5-2.226.93-2.929.572-.87 1.107-1.609 1.107-2.479 0-.969-.371-1.663-.936-2.479-1.371-1.842-3.31-3.131-5.575-3.131z"/>
        </svg>
      )
    },
    {
      name: 'WooCommerce',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM7.72 5.73c.29.29.29.76 0 1.06L6.28 8.22c-.29.29-.76.29-1.06 0-.29-.29-.29-.76 0-1.06l1.44-1.43c.29-.29.76-.29 1.06 0zm8.56 0c.29.29.29.76 0 1.06L14.84 8.22c-.29.29-.76.29-1.06 0-.29-.29-.29-.76 0-1.06l1.44-1.43c.29-.29.76-.29 1.06 0z"/>
          <path d="M12 15.38c-.99 0-1.82-.67-2.06-1.57h4.12c-.24.9-1.07 1.57-2.06 1.57z"/>
        </svg>
      )
    },
    {
      name: 'Wix',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.532 9.268l1.06 4.884 1.768-4.884h1.944l1.768 4.884 1.06-4.884H24l-2.472 9.464h-1.944l-1.944-5.688-1.944 5.688h-1.944L12.28 9.268h1.252z"/>
          <path d="M8.472 18.732L6.528 9.268h1.944l1.06 6.36 1.768-6.36h1.944l-2.472 9.464H8.472z"/>
          <path d="M0 9.268h1.944l1.768 6.36 1.768-6.36H7.42l-2.472 9.464H3.004L0 9.268z"/>
        </svg>
      )
    },
    {
      name: 'YouCan',
      icon: (
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
          YC
        </div>
      )
    },
    {
      name: 'PrestaShop',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.279 3.061L15.297 2.22C14.435 1.44 13.26 1 12.04 1c-1.221 0-2.395.44-3.257 1.22l-.982.841C6.836 3.782 6.4 4.956 6.4 6.177v9.646c0 1.221.436 2.395 1.401 3.116l.982.841c.862.78 2.036 1.22 3.257 1.22 1.22 0 2.395-.44 3.257-1.22l.982-.841c.965-.721 1.401-1.895 1.401-3.116V6.177c0-1.221-.436-2.395-1.401-3.116zM12.04 18.8c-.862 0-1.56-.698-1.56-1.56V6.76c0-.862.698-1.56 1.56-1.56s1.56.698 1.56 1.56v10.48c0 .862-.698 1.56-1.56 1.56z"/>
        </svg>
      )
    },
    {
      name: 'HTML/CSS',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      )
    },
    {
      name: 'Magento',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24l-4.455-2.572V8.457L12 5.885l4.455 2.572v12.971L12 24zm6.545-15.428V21.428L24 18.857V5.143l-5.455 3.429zM0 5.143v13.714l5.455 2.571V8.572L0 5.143z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gray-50/50 relative">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-green-200 rounded-full bg-green-50 text-sm font-medium text-green-700 animate-fade-in">
            <CheckCircle className="w-4 h-4 mr-2" />
            Compatible avec toutes les plateformes
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in [animation-delay:200ms]">
            Installez ChatSeller sur 
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> n'importe quelle boutique en ligne</span>
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
            En seulement 2 minutes, intégrez votre Vendeur IA sur votre plateforme préférée
          </p>
        </div>
        
        {/* Grille des plateformes */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto animate-fade-in [animation-delay:600ms]">
          {platforms.map((platform, index) => (
            <PlatformLogo
              key={index}
              name={platform.name}
              icon={platform.icon}
            />
          ))}
        </div>
        
        {/* Statistiques d'installation */}
        <div className="text-center mt-12 animate-fade-in [animation-delay:800ms]">
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">2 min</div>
              <div className="text-sm text-muted-foreground">Installation moyenne</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Compatible</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">0€</div>
              <div className="text-sm text-muted-foreground">Frais d'installation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;