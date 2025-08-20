// src/components/AdvancedFeatures.tsx - AVEC TRADUCTIONS COMPLÈTES
import React from 'react';
import { 
  Brain, 
  ShoppingCart, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Smartphone
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  metric
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
}) => {
  return (
    <div className="p-6 rounded-xl border border-border bg-card/40 hover:bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-soft">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
        <TrendingUp className="w-4 h-4 mr-1" />
        {metric}
      </div>
    </div>
  );
};

const AdvancedFeatures = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: t('instantResponses'),
      description: t('instantResponsesDesc'),
      metric: t('questionsResolved')
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: t('orderCollection'),
      description: t('orderCollectionDesc'),
      metric: t('ordersFinalized')
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: t('productSuggestions'),
      description: t('productSuggestionsDesc'),
      metric: t('averageBasket')
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: t('realTimeTracking'),
      description: t('realTimeTrackingDesc'),
      metric: t('completeVisibility')
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: t('expressInstall'),
      description: t('expressInstallDesc'),
      metric: t('installTime')
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: t('mobileOptimized'),
      description: t('mobileOptimizedDesc'),
      metric: t('mobileOptimizedStat')
    }
  ];

  return (
    <section id="features" className="py-24 relative bg-gradient-to-b from-blue-50/60 to-transparent -z-10">
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-blue-50/50 rounded-l-3xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-primary/20 rounded-full bg-primary/10 text-sm font-medium text-primary animate-fade-in">
            <Zap className="w-4 h-4 mr-2" />
            {t('featuresBadge')}
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            {t('featuresTitle')}
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
            {t('featuresSubtitle')}
          </p>
        </div>
        
        {/* Features Grid - 2 rows of 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-fade-in [animation-delay:600ms]">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              metric={feature.metric}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;