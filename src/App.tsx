// App.tsx 
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from "react";

// 🚀 COMPOSANTS AMÉLIORÉS
import SEOHead from "./components/SEOHead";
import AnalyticsProvider from "./components/AnalyticsProvider";
//import ExitIntentPopup from "./components/ExitIntentPopup";

// Pages
import Index from "./pages/Index";
import Support from "./pages/Support";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// 🎯 COMPOSANT POUR TRACKING DES PAGES
const PageTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Track page view avec Analytics
    if ((window as any).trackChatSellerEvent) {
      (window as any).trackChatSellerEvent.pageView(location.pathname);
    }
    
    // Scroll vers le haut à chaque changement de page
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};

const AppRoutes = () => {
  const location = useLocation();
  
  // 🎯 MÉTADONNÉES SEO DYNAMIQUES PAR PAGE
  const getPageSEO = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: "ChatSeller - Vendeuse IA pour boutiques beauté | +150% de ventes",
          description: "Intégrez une Vendeuse IA experte de vos produits sur votre boutique Shopify ou WooCommerce. Elle conseille vos clientes, recommande les bons produits et vend 24h/24. +150% de ventes en moyenne. Essai gratuit 14 jours.",
          keywords: "Vendeuse IA, vendeuse IA beauté, chatbot e-commerce beauté, IA conversationnelle vente, Shopify IA, WooCommerce chatbot, ChatSeller, marques beauté"
        };
      case '/about':
        return {
          title: "À propos de ChatSeller - Vendeuse IA pour boutiques beauté",
          description: "ChatSeller intègre une Vendeuse IA experte de vos produits sur votre boutique en ligne. Elle conseille, recommande et vend 24h/24. +150% de ventes en moyenne.",
          keywords: "ChatSeller histoire, Dukka, startup IA, e-commerce beauté, Vendeuse IA, marques beauté"
        };
      case '/terms':
        return {
          title: "Conditions d'utilisation - ChatSeller | Terms of Service",
          description: "Conditions générales d'utilisation du service ChatSeller. Essai gratuit 14 jours, tarification transparente, annulation en 1 clic.",
          keywords: "conditions utilisation ChatSeller, terms of service, SaaS"
        };
      case '/privacy':
        return {
          title: "Politique de confidentialité - ChatSeller | RGPD Compliant",
          description: "Politique de confidentialité de ChatSeller conforme RGPD. Protection des données personnelles, sécurité, droits utilisateurs.",
          keywords: "confidentialité ChatSeller, RGPD compliant, protection données"
        };
      case '/support':
        return {
          title: "Support & FAQ - ChatSeller | Aide et assistance",
          description: "Centre d'aide ChatSeller. FAQ, guides d'installation, support technique. Réponses à toutes vos questions sur votre Vendeuse IA.",
          keywords: "support ChatSeller, FAQ, aide, installation"
        };
      default:
        return {};
    }
  };

  return (
    <>
      <SEOHead {...getPageSEO()} />
      <PageTracker />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/*<ExitIntentPopup isEnabled={location.pathname === '/'} />*/}
    </>
  );
};

const App = () => {
  // 🔧 SERVICE WORKER POUR PWA
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          })
          .catch(error => {
            console.log('ServiceWorker registration failed: ', error);
          });
      });
    }
  }, []);

  // 🎯 GESTION DES ERREURS GLOBALES
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      if ((window as any).trackChatSellerEvent) {
        (window as any).trackChatSellerEvent.errorOccurred(error.message);
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if ((window as any).trackChatSellerEvent) {
        (window as any).trackChatSellerEvent.errorOccurred(`Promise rejection: ${event.reason}`);
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageProvider>
            <AnalyticsProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </AnalyticsProvider>
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;