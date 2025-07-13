// src/components/Features.tsx
import React from 'react';
import { ShoppingCart, MessageSquare, TrendingUp, Lightbulb, Clock, Settings } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 rounded-xl border border-border bg-card/40 hover:bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-soft">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Recommandations de produits",
      description: "Suggérez intelligemment des produits basés sur les conversations de vos visiteurs et leur comportement de navigation."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Conversations naturelles",
      description: "Offrez à vos clients des conversations aussi naturelles et pertinentes qu’avec un vrai vendeur."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Optimisation des conversions",
      description: "Vendez plus en répondant au bon moment, en rassurant et en guidant chaque client jusqu’à l’achat."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Analyses intelligentes",
      description: "btenez des données clients précieuses pour améliorer vos offres de produits ou services."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Disponibilité 24/7",
      description: "Fournissez un support client et une assistance commerciale 24/7 sans coûts de personnel."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Integration facile",
      description: "Configuration simple en 2 minutes avec votre boutique en ligne actuelle sans difficultés techniques."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-blue-50/50 rounded-l-3xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tout ce dont vous avez besoin pour booster vos ventes</h2>
          <p className="text-lg text-muted-foreground">
            Des fonctionnalités intelligentes conçues pour améliorer l'expérience client et générer des conversions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
