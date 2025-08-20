// src/components/PlatformsSection.tsx - AVEC TRADUCTIONS
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// 🔍 IMPORTS DES LOGOS - Télécharge ces logos selon cette nomenclature exacte
import ShopifyLogo from '@/assets/platform-logos/shopify.svg';
import WordPressLogo from '@/assets/platform-logos/wordpress.svg';
import WooCommerceLogo from '@/assets/platform-logos/woocommerce.svg';
import WixLogo from '@/assets/platform-logos/wix.svg';
import YouCanLogo from '@/assets/platform-logos/youcan.svg';
import PrestaShopLogo from '@/assets/platform-logos/prestashop.svg';
import HTMLLogo from '@/assets/platform-logos/html.svg';
import MagentoLogo from '@/assets/platform-logos/magento.svg';

const PlatformLogo = ({ 
  name, 
  logoSrc, 
  fallbackIcon 
}: { 
  name: string; 
  logoSrc: string; 
  fallbackIcon: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105 group">
      <div className="w-12 h-12 flex items-center justify-center mb-2 text-gray-700 relative">
        {/* Image du logo avec fallback */}
        <img 
          src={logoSrc} 
          alt={`${name} logo`}
          className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            // Si l'image ne charge pas, afficher l'icône de fallback
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.nextElementSibling && ((target.nextElementSibling as HTMLElement).style.display = 'block');
          }}
        />
        {/* Fallback icon (caché par défaut) */}
        <div className="hidden">
          {fallbackIcon}
        </div>
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
        {name}
      </span>
    </div>
  );
};

const PlatformsSection = () => {
  const { t } = useLanguage();
  
  const platforms = [
    {
      name: 'Shopify',
      logoSrc: ShopifyLogo,
      fallbackIcon: (
        <div className="w-8 h-8 bg-green-100 rounded text-green-600 flex items-center justify-center text-xs font-bold">
          S
        </div>
      )
    },
    {
      name: 'WordPress', 
      logoSrc: WordPressLogo,
      fallbackIcon: (
        <div className="w-8 h-8 bg-blue-100 rounded text-blue-600 flex items-center justify-center text-xs font-bold">
          WP
        </div>
      )
    },
    {
      name: 'WooCommerce',
      logoSrc: WooCommerceLogo,
      fallbackIcon: (
        <div className="w-8 h-8 bg-purple-100 rounded text-purple-600 flex items-center justify-center text-xs font-bold">
          WC
        </div>
      )
    },
    {
      name: 'Wix',
      logoSrc: WixLogo,
      fallbackIcon: (
        <div className="w-8 h-8 bg-black rounded text-white flex items-center justify-center text-xs font-bold">
          W
        </div>
      )
    },
    {
      name: 'YouCan',
      logoSrc: YouCanLogo,
      fallbackIcon: (
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded text-white flex items-center justify-center text-xs font-bold">
          YC
        </div>
      )
    },
    {
      name: 'PrestaShop',
      logoSrc: PrestaShopLogo,
      fallbackIcon: (
        <div className="w-8 h-8 bg-red-100 rounded text-red-600 flex items-center justify-center text-xs font-bold">
          PS
        </div>
      )
    },
    {
      name: 'HTML/CSS',
      logoSrc: HTMLLogo,
      fallbackIcon: (
        <div className="w-8 h-8 bg-orange-100 rounded text-orange-600 flex items-center justify-center text-xs font-bold">
          &lt;/&gt;
        </div>
      )
    },
    {
      name: 'Magento',
      logoSrc: MagentoLogo,
      fallbackIcon: (
        <div className="w-8 h-8 bg-orange-100 rounded text-orange-600 flex items-center justify-center text-xs font-bold">
          M
        </div>
      )
    }
  ];

  return (
    <section className="py-16 bg-gray-50/50 relative">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-green-200 rounded-full bg-green-50 text-sm font-medium text-green-700 animate-fade-in">
            <CheckCircle className="w-4 h-4 mr-2" />
            {t('platformsCompatible')}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in [animation-delay:200ms]">
            {t('platformsTitle')}
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
            {t('platformsSubtitle')}
          </p>
        </div>
        
        {/* Grille des plateformes */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto animate-fade-in [animation-delay:600ms]">
          {platforms.map((platform, index) => (
            <PlatformLogo
              key={index}
              name={platform.name}
              logoSrc={platform.logoSrc}
              fallbackIcon={platform.fallbackIcon}
            />
          ))}
        </div>
        
        {/* Statistiques d'installation */}
        <div className="text-center mt-12 animate-fade-in [animation-delay:800ms]">
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">{t('platformsMinInstall')}</div>
              <div className="text-sm text-muted-foreground">{t('platformsInstallTime')}</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{t('platformsFullCompatible')}</div>
              <div className="text-sm text-muted-foreground">{t('platformsCompatibility')}</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{t('platformsZeroFees')}</div>
              <div className="text-sm text-muted-foreground">{t('platformsInstallCost')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;