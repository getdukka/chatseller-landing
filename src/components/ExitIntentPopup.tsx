// src/components/ExitIntentPopup.tsx - POP-UP DE SORTIE AVEC OFFRE SPÉCIALE
import React, { useState, useEffect, useCallback } from 'react';
import { X, Clock, Gift, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTracking } from './AnalyticsProvider';

interface ExitIntentPopupProps {
  isEnabled?: boolean;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isEnabled = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes en secondes
  const { t, language } = useLanguage();
  const { trackEvent } = useTracking();

  // 🎯 DÉTECTION DE L'INTENTION DE SORTIE
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Détecter si la souris sort par le haut de la page
    if (e.clientY <= 0 && !hasBeenShown && isEnabled) {
      setIsVisible(true);
      setHasBeenShown(true);
      
      // 📊 Tracking de l'événement
      trackEvent('exitIntentShown', {
        trigger: 'mouse_leave',
        page_location: window.location.pathname
      });
      
      // 🍪 Enregistrer dans localStorage pour ne pas re-afficher
      localStorage.setItem('chatsellerExitIntentShown', 'true');
    }
  }, [hasBeenShown, isEnabled, trackEvent]);

  // ⏱️ DÉTECTION DU TEMPS PASSÉ SUR LA PAGE
  useEffect(() => {
    const startTime = Date.now();
    
    const checkTimeSpent = () => {
      const timeSpent = (Date.now() - startTime) / 1000;
      
      // Afficher après 3 minutes si pas encore affiché
      if (timeSpent > 180 && !hasBeenShown && isEnabled) {
        setIsVisible(true);
        setHasBeenShown(true);
        
        trackEvent('exitIntentShown', {
          trigger: 'time_spent',
          time_on_page: timeSpent
        });
        
        localStorage.setItem('chatsellerExitIntentShown', 'true');
      }
    };
    
    const timeInterval = setInterval(checkTimeSpent, 30000); // Vérifier toutes les 30s
    
    return () => clearInterval(timeInterval);
  }, [hasBeenShown, isEnabled, trackEvent]);

  // 🕐 COMPTE À REBOURS DE L'OFFRE
  useEffect(() => {
    if (isVisible && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, timeLeft]);

  // 🍪 VÉRIFIER SI DÉJÀ AFFICHÉ
  useEffect(() => {
    const hasShown = localStorage.getItem('chatsellerExitIntentShown');
    if (hasShown) {
      setHasBeenShown(true);
    }
  }, []);

  // 🖱️ ÉVÉNEMENTS DE SORTIE
  useEffect(() => {
    if (isEnabled) {
      document.addEventListener('mouseleave', handleMouseLeave);
      return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [handleMouseLeave, isEnabled]);

  // 🔐 FERMETURE DU POP-UP
  const handleClose = () => {
    setIsVisible(false);
    trackEvent('exitIntentClosed', {
      action: 'manual_close',
      time_displayed: 15 * 60 - timeLeft
    });
  };

  // 🎯 CLIC SUR L'OFFRE
  const handleOfferClick = () => {
    trackEvent('exitIntentConverted', {
      offer_type: 'extended_trial',
      action: 'cta_click'
    });
    
    // Redirection vers le dashboard avec paramètre spécial
    window.open('https://dashboard.chatseller.app/register?promo=EXITOFFER14', '_blank');
    setIsVisible(false);
  };

  // 📧 CLIC SUR EMAIL
  const handleEmailClick = () => {
    trackEvent('exitIntentEmail', {
      action: 'email_contact'
    });
    
    window.location.href = 'mailto:support@chatseller.app?subject=Question sur ChatSeller&body=Bonjour, j\'aimerais en savoir plus sur ChatSeller...';
    setIsVisible(false);
  };

  // 🎨 FORMATAGE DU TEMPS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* 🎨 HEADER AVEC GRADIENT */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">
                {language === 'fr' ? "Attendez !" : "Wait!"}
              </h3>
              <p className="text-orange-100 text-sm">
                {language === 'fr' ? "Offre spéciale avant de partir" : "Special offer before you leave"}
              </p>
            </div>
          </div>
          
          {/* ⏱️ COMPTEUR */}
          <div className="flex items-center space-x-2 bg-white/20 rounded-lg p-3">
            <Clock className="w-5 h-5 text-orange-200" />
            <span className="text-sm text-orange-100">
              {language === 'fr' ? "Offre valable encore" : "Offer valid for"}
            </span>
            <span className="font-mono text-lg font-bold bg-white text-orange-600 px-2 py-1 rounded">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* 📝 CONTENU */}
        <div className="p-6">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">
              {language === 'fr' ? 
                "🎁 Essai gratuit ÉTENDU !" : 
                "🎁 EXTENDED free trial!"
              }
            </h4>
            <p className="text-gray-600 mb-4">
              {language === 'fr' ? 
                "Obtenez 14 jours d'essai gratuit au lieu de 7 jours pour tester ChatSeller sans risque." :
                "Get 14 days free trial instead of 7 days to test ChatSeller risk-free."
              }
            </p>
            
            {/* ✨ AVANTAGES */}
            <div className="bg-green-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Zap className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">
                  {language === 'fr' ? "Ce que vous obtenez :" : "What you get:"}
                </span>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>✅ {language === 'fr' ? "14 jours d'essai complet" : "14 days complete trial"}</li>
                <li>✅ {language === 'fr' ? "Toutes les fonctionnalités" : "All features included"}</li>
                <li>✅ {language === 'fr' ? "Support prioritaire" : "Priority support"}</li>
                <li>✅ {language === 'fr' ? "Installation gratuite" : "Free installation"}</li>
              </ul>
            </div>
            
            <p className="text-xs text-gray-500 mb-6">
              {language === 'fr' ? 
                "Aucune carte bancaire requise • Annulation en 1 clic" :
                "No credit card required • Cancel in 1 click"
              }
            </p>
          </div>

          {/* 🎯 BOUTONS D'ACTION */}
          <div className="space-y-3">
            <Button 
              onClick={handleOfferClick}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold text-lg group"
            >
              {language === 'fr' ? "🚀 Profiter de l'offre" : "🚀 Get this offer"}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              onClick={handleEmailClick}
              variant="outline" 
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-2"
            >
              {language === 'fr' ? "📧 Poser une question" : "📧 Ask a question"}
            </Button>
          </div>
          
          {/* 🔒 GARANTIE */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              🔒 {language === 'fr' ? "Garantie satisfait ou remboursé 30 jours" : "30-day money-back guarantee"}
            </p>
          </div>
        </div>
        
        {/* 🌟 ÉTOILES DÉCORATIVES */}
        <div className="absolute top-2 left-4 text-yellow-300 opacity-70">
          <div className="animate-pulse">⭐</div>
        </div>
        <div className="absolute top-8 right-8 text-yellow-300 opacity-50">
          <div className="animate-pulse" style={{animationDelay: '0.5s'}}>✨</div>
        </div>
        <div className="absolute bottom-4 left-8 text-yellow-300 opacity-60">
          <div className="animate-pulse" style={{animationDelay: '1s'}}>🌟</div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;