// src/pages/Index.tsx
import React, { useEffect } from 'react';
import NewNavbar from '@/components/NewNavBar';
import NewHero from '../components/NewHero';
import NewBeautyProblemSection from '@/components/NewBeautyProblemSection';
import NewProblemSolutionSection from '@/components/NewProblemSolutionSection';
import NewVisualDemoSection from '@/components/NewVisualDemoSection';
import NewBusinessProofSection from '@/components/NewBusinessProofSection';
import NewHowItWorksSection from '../components/NewHowItWorksSection';
import NewDifferentiationSection from '@/components/NewDifferentiationSection';
import NewFeaturesSection from '../components/NewFeaturesSection';
// import NewCaseStudiesSection from '../components/NewCaseStudiesSection'; // MASQUÉ: Faux contenu
// import NewTestimonials from '@/components/NewTestimonials'; // MASQUÉ: Faux contenu
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

        {/* Section 2: Problème des marques beauté - 3 frustrations */}
        <NewBeautyProblemSection />

        {/* Section 3: Problème/Solution - La révélation */}
        <NewProblemSolutionSection />

        {/* Section 4: Démo visuelle - De la question à l'achat */}
        <NewVisualDemoSection />

        {/* Section 5: Preuve Business - KPIs mesurables */}
        <NewBusinessProofSection />

        {/* Section 6: Comment ça marche - 3 étapes simples */}
        <NewHowItWorksSection />

        {/* Section 7: Différenciation - Pas un chatbot */}
        <NewDifferentiationSection />

        {/* Section 8: Fonctionnalités orientées conversion */}
        <NewFeaturesSection />

        {/* Section 7: Études de cas avec preuves chiffrées - MASQUÉ: Faux contenu, en attente du vrai */}
        {/* <NewCaseStudiesSection /> */}

        {/* Section 8: Témoignages clients - MASQUÉ: Faux contenu, en attente du vrai */}
        {/* <NewTestimonials /> */}

        {/* Section 9: Pricing ROI-first */}
        <NewPricingSection />

        {/* Section 10: FAQ - Questions fréquentes sur Chatseller */}
        <NewFAQSection />

        {/* Section 11: CTA Final */}
        <NewFinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
