// src/pages/Index.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
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
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Composant de correction mobile */}
      <MobileFix />
      
      <Navbar />
      <main className="flex-1">
        {/* Section 1: Hero - Accroche principale (CONSERVÉ) */}
        <Hero />
        
        {/* Section 2: Problème/Solution - Créer le besoin (NOUVEAU) */}
        <ProblemSolution />
        
        {/* Section 3: Fonctionnalités avancées - Montrer la solution (REMPLACE Features) */}
        <AdvancedFeatures />
        
        {/* Section 4: Démo interactive - Prouver que ça marche (CONSERVÉ) */}
        <DemoSection />
        
        {/* Section 5: Preuves sociales - Rassurer avec témoignages (NOUVEAU) 
        <SocialProof />*/}
        
        {/* Section 6: Comparaison - Justifier le choix ChatSeller (NOUVEAU) */}
        <ComparisonSection />
        
        {/* Section 7: Pricing - Présenter l'offre avec ROI (NOUVEAU) */}
        <PricingSection />
        
        {/* Section 8: FAQ - Lever les dernières objections (NOUVEAU) */}
        <FAQSection />
        
        {/* Section 9: Urgence/FOMO - Créer l'urgence d'achat (NOUVEAU) 
        <UrgencyFOMO />*/}
        
        {/* Section 10: CTA Final - Dernière chance de conversion (NOUVEAU) 
        <FinalCTA />*/}
      </main>
      <Footer />
    </div>
  );
};

export default Index;