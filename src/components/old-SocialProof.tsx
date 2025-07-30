// src/components/SocialProof.tsx
import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  TrendingUp, 
  Users, 
  Globe, 
  Award,
  Play,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialCard = ({ 
  name, 
  business, 
  location, 
  avatar, 
  quote, 
  metrics, 
  rating,
  isVideo = false 
}: {
  name: string;
  business: string;
  location: string;
  avatar: string;
  quote: string;
  metrics: { label: string; value: string; color: string }[];
  rating: number;
  isVideo?: boolean;
}) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -z-0" />
      
      {/* Quote icon */}
      <div className="absolute top-6 right-6 text-blue-100">
        <Quote className="w-8 h-8" />
      </div>
      
      {/* Header */}
      <div className="flex items-start space-x-4 mb-6 relative z-10">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">
            {avatar}
          </div>
          {isVideo && (
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/50 transition-colors">
              <Play className="w-6 h-6 text-white" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
          <p className="text-blue-600 font-medium">{business}</p>
          <p className="text-gray-500 text-sm flex items-center">
            <Globe className="w-3 h-3 mr-1" />
            {location}
          </p>
          
          {/* Star Rating */}
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
          </div>
        </div>
      </div>
      
      {/* Quote */}
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic relative z-10">
        "{quote}"
      </blockquote>
      
      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 relative z-10">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className={`text-2xl font-bold ${metric.color} mb-1`}>
              {metric.value}
            </div>
            <div className="text-sm text-gray-600">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StatsCard = ({ 
  value, 
  label, 
  icon, 
  description 
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}) => {
  return (
    <div className="text-center p-6 bg-white/60 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-lg font-semibold text-gray-700 mb-2">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
};

const CompanyLogo = ({ name, initial }: { name: string; initial: string }) => {
  return (
    <div className="flex items-center space-x-3 px-6 py-4 bg-white/80 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
        {initial}
      </div>
      <div className="font-medium text-gray-700">{name}</div>
    </div>
  );
};

const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maguette Diouf",
      business: "Momo Le Bottier",
      location: "Dakar, Sénégal",
      avatar: "MD",
      quote: "Avec ChatSeller, nos ventes ont explosé ! Notre agent IA répond aux clients 24h/24 et les guide parfaitement jusqu'à l'achat. En 2 mois, nous avons doublé notre chiffre d'affaires en ligne. C'est magique !",
      metrics: [
        { label: "Ventes", value: "+180%", color: "text-green-600" },
        { label: "Utilisation", value: "2 mois", color: "text-blue-600" }
      ],
      rating: 5,
      isVideo: true
    },
    {
      name: "Kouassi Marcel",
      business: "TechShop Abidjan",
      location: "Abidjan, Côte d'Ivoire",
      avatar: "KM",
      quote: "L'agent IA répond aux questions techniques mieux que mes vendeurs ! Mes clients sont impressionnés par la qualité des conseils et recommandations. J'ai gagné 3h par jour et mes conversions ont explosé.",
      metrics: [
        { label: "Conversion", value: "+95%", color: "text-green-600" },
        { label: "Temps gagné", value: "3h/jour", color: "text-purple-600" }
      ],
      rating: 5
    },
    {
      name: "Fatou Cissé",
      business: "6C No Filter",
      location: "Dakar, Sénégal",
      avatar: "FC",
      quote: "ChatSeller a transformé mon site en une vraie boutique avec une vendeuse professionnelle. Mes clients se sentent accompagnés jusqu'à l'achat. Le panier moyen a augmenté de 67% !",
      metrics: [
        { label: "Panier moyen", value: "+67%", color: "text-green-600" },
        { label: "Satisfaction", value: "4.9/5", color: "text-green-600" }
      ],
      rating: 5
    },
    {
      name: "Mohamed Ben Ali",
      business: "ElectroTunis",
      location: "Abidjan, Côte d'Ivoire",
      avatar: "MB",
      quote: "Installation en 2 minutes, résultats dès le premier jour ! L'IA gère parfaitement les questions sur garanties et livraisons. Mes clients font plus confiance maintenant.",
      metrics: [
        { label: "Installation", value: "2 min", color: "text-blue-600" },
        { label: "Confiance client", value: "+85%", color: "text-green-600" }
      ],
      rating: 5
    }
  ];

  const stats = [
    {
      value: "+50",
      label: "E-commerçants",
      icon: <Users className="w-6 h-6" />,
      description: "Adoptent ChatSeller en Afrique"
    },
    {
      value: "+147%",
      label: "Conversion",
      icon: <TrendingUp className="w-6 w-6" />,
      description: "Amélioration moyenne"
    },
    {
      value: "4.9/5",
      label: "Satisfaction",
      icon: <Star className="w-6 h-6" />,
      description: "Note moyenne des clients"
    },
    {
      value: "+45K€",
      label: "Revenus générés",
      icon: <Award className="w-6 h-6" />,
      description: "Pour nos clients en 2025"
    }
  ];

  const companies = [
    { name: "Momo Le Bottier", initial: "MB" },
    { name: "TechShop Abidjan", initial: "TS" },
    { name: "6C No Filter", initial: "6NF" },
    { name: "ElectroTunis", initial: "ET" },
    { name: "BeautyAccra", initial: "BA" },
    { name: "SportRabat", initial: "SR" }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-green-50/30 rounded-r-3xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-green-200 rounded-full bg-green-50 text-sm font-medium text-green-700 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Déjà adopté par +50 e-commerçants africains
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            Ils ont transformé leurs boutiques avec 
            <span className="text-gradient bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> ChatSeller</span>
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
            Découvrez comment nos clients augmentent leurs ventes de +147% en moyenne
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-20 animate-fade-in [animation-delay:600ms]">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              description={stat.description}
            />
          ))}
        </div>
        
        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in [animation-delay:800ms]">
          <div className="relative">
            <TestimonialCard {...testimonials[currentTestimonial]} />
            
            {/* Navigation */}
            {testimonials.length > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentTestimonial(prev => 
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )}
                  className="group"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </Button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-primary w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentTestimonial(prev => 
                    prev === testimonials.length - 1 ? 0 : prev + 1
                  )}
                  className="group"
                >
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {/* Secondary Testimonials Grid 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 animate-fade-in [animation-delay:1000ms]">
          {testimonials.slice(1, 4).map((testimonial, index) => (
            <div key={index} className="transform scale-90">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
        
        {/* Companies Section 
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-8 animate-fade-in [animation-delay:1200ms]">
            Ils nous font confiance
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-fade-in [animation-delay:1400ms]">
            {companies.map((company, index) => (
              <CompanyLogo key={index} {...company} />
            ))}
          </div>
        </div>
        
        {/* Video Testimonials CTA 
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto text-center animate-fade-in [animation-delay:1600ms]">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Play className="w-8 h-8" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Voir tous les témoignages vidéo</h3>
          <p className="text-muted-foreground mb-6">
            Découvrez comment 50+ e-commerçants africains ont transformé leurs boutiques avec ChatSeller
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="group">
              <a href="/testimonials" className="flex items-center">
                Voir les témoignages
                <Play className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline">
              <a href="https://dashboard.chatseller.app/register" className="flex items-center">
                Rejoindre la communauté
                <Users className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div> */}
        
        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in [animation-delay:1800ms]">
          <div className="text-center p-6 bg-white/60 rounded-xl border border-gray-200">
            <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">RGPD Compliant</h4>
            <p className="text-sm text-muted-foreground">Données sécurisées et conformes</p>
          </div>
          
          <div className="text-center p-6 bg-white/60 rounded-xl border border-gray-200">
            <Award className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Made in Africa</h4>
            <p className="text-sm text-muted-foreground">Développé pour le marché africain</p>
          </div>
          
          <div className="text-center p-6 bg-white/60 rounded-xl border border-gray-200">
            <CheckCircle2 className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Support 24/7</h4>
            <p className="text-sm text-muted-foreground">Service client réactif FR/EN</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;