// src/pages/Index.tsx
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PlatformsSection from '../components/PlatformsSection';
import ProblemSolutionVisual from '../components/ProblemSolutionVisual';
import AdvancedFeatures from '../components/AdvancedFeatures';
import DemoSection from '../components/DemoSection';
import SocialProof from '../components/SocialProof';
import ComparisonSection from '../components/ComparisonSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import UrgencyFOMO from '../components/UrgencyFOMO';
import FinalCTA from '../components/FinalCTA';
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
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Composant de correction mobile */}
      <MobileFix />
      
      <Navbar />
      <main className="flex-1">
        {/* Section 1: Hero - Accroche principale avec animation */}
        <Hero />

        {/* Section 2: Plateformes - Compatibilité avec toutes les plateformes */}
        <PlatformsSection />
        
        {/* Section 2: Problème/Solution - Version visuelle améliorée */}
        <ProblemSolutionVisual />
        
        {/* Section 3: Fonctionnalités avancées - Montrer la solution */}
        <AdvancedFeatures />
        
        {/* Section 4: Démo interactive - Prouver que ça marche */}
        <DemoSection />
        
        {/* Section 5: Preuves sociales - Rassurer avec témoignages */}
        <SocialProof />
        
        {/* Section 6: Comparaison - Justifier le choix ChatSeller */}
        <ComparisonSection />
        
        {/* Section 7: Pricing - Présenter l'offre avec ROI */}
        <PricingSection />
        
        {/* Section 8: FAQ - Lever les dernières objections */}
        <FAQSection />
        
        {/* Section 9: Urgence/FOMO - Créer l'urgence d'achat 
        <UrgencyFOMO />*/}
        
        {/* Section 10: CTA Final - Dernière chance de conversion 
        <FinalCTA />*/}
      </main>
      <Footer />
    </div>
  );
};

export default Index;