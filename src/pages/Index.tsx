// src/pages/Index.tsx 
import React, { useEffect } from 'react';
import NewNavbar from '@/components/NewNavBar';
import NewHero from '../components/NewHero';
import NewProblemSolutionSection from '@/components/NewProblemSolutionSection';
import NewDemoSection from '@/components/NewDemoSection';
import NewHowItWorksSection from '../components/NewHowItWorksSection';
import NewFeaturesSection from '../components/NewFeaturesSection';
import NewCaseStudiesSection from '../components/NewCaseStudiesSection';
import NewTestimonials from '@/components/NewTestimonials';
import NewPricingSection from '../components/NewPricingSection';
import NewFAQSection from '../components/NewFAQSection';
import NewFinalCTASection from '@/components/NewFinalCTASection';
import Footer from '../components/Footer';
import MobileFix from '../components/MobileFix';

const Index = () => {
  // Corriger le problème de scroll automatique vers #demo
  useEffect(() => {
    // S'assurer que la page s'ouvre en haut
    if (window.location.hash === '#demo' || window.location.hash === '') {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo(0, 0);
    }

    // Track page view pour analytics
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'page_view',
        page_title: 'ChatSeller - Vendeur IA pour marques beauté',
        page_location: window.location.href
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Composant de correction mobile */}
      <MobileFix />
      
      <NewNavbar />
      <main className="flex-1">
        {/* Section 1: Hero avec A/B test et focus conversion */}
        <NewHero />
        
        {/* Section 2: Problème/Solution - 73% partent sans acheter */}
        <NewProblemSolutionSection />
        
        {/* Section 3: Demo - Vidéo de démonstration */}
        <NewDemoSection />
        
        {/* Section 4: Comment ça marche - 3 étapes simples */}
        <NewHowItWorksSection />

        {/* Section 5: Fonctionnalités orientées conversion */}
        <NewFeaturesSection />

        {/* Section 6: Études de cas avec preuves chiffrées */}
        <NewCaseStudiesSection />

        {/* Section 7: Témoignages clients */}
        <NewTestimonials />
        
        {/* Section 8: Pricing ROI-first (garder l'ancien temporairement) */}
        <NewPricingSection />
        
        {/* Section 9: FAQ - Questions fréquentes sur Chatseller */}
        <NewFAQSection />

        {/* Section 10: CTA Final*/}
        <NewFinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;