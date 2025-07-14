// src/components/FinalCTA.tsx
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  Clock,
  Star,
  Play,
  Calendar,
  MessageSquare,
  Gift,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialQuote = () => {
  const testimonials = [
    {
      quote: "ChatSeller a doublé mes ventes en 2 mois. C'est magique !",
      author: "Aminata D., FashionDakar",
      metric: "+180% de ventes"
    },
    {
      quote: "L'installation en 2 minutes et les résultats immédiats m'ont bluffé.",
      author: "Mohamed B., ElectroTunis", 
      metric: "+95% de conversion"
    },
    {
      quote: "Mes clients adorent discuter avec l'IA avant d'acheter.",
      author: "Sarah O., Organic Lagos",
      metric: "+67% de panier moyen"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
      <div className="flex items-center mb-4">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">5/5</span>
      </div>
      
      <blockquote className="text-lg font-medium text-gray-900 mb-4 italic">
        "{current.quote}"
      </blockquote>
      
      <div className="flex items-center justify-between">
        <div>
          <cite className="text-sm font-semibold text-gray-700">
            {current.author}
          </cite>
        </div>
        <div className="text-sm font-bold text-green-600">
          {current.metric}
        </div>
      </div>
      
      {/* Progress indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const CTAOption = ({ 
  icon, 
  title, 
  description, 
  ctaText, 
  ctaLink, 
  isPrimary = false,
  badge 
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  isPrimary?: boolean;
  badge?: string;
}) => {
  return (
    <div className={`relative p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${
      isPrimary 
        ? 'border-primary bg-gradient-to-b from-primary/5 to-white shadow-md' 
        : 'border-gray-200 bg-white/60 hover:border-primary/50'
    }`}>
      {badge && (
        <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {badge}
        </div>
      )}
      
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
        isPrimary ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
      }`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <Button 
        className={`w-full group ${isPrimary ? '' : 'variant-outline'}`}
        size="lg"
      >
        <a href={ctaLink} className="flex items-center justify-center w-full">
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </div>
  );
};

const GuaranteeCard = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-200">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          🛡️ Garantie Satisfait ou Remboursé 30 jours
        </h3>
        
        <p className="text-gray-700 mb-4">
          Testez ChatSeller sans risque. Si vous n'êtes pas 100% satisfait, 
          nous vous remboursons intégralement, sans poser de questions.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center justify-center space-x-2 text-green-600">
            <CheckCircle2 className="w-4 h-4" />
            <span>Remboursement intégral</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-blue-600">
            <CheckCircle2 className="w-4 h-4" />
            <span>Aucune question posée</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-purple-600">
            <CheckCircle2 className="w-4 h-4" />
            <span>Traitement sous 24h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FinalCTA = () => {
  const [visitorCount, setVisitorCount] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-300 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container px-6 md:px-12 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-green-200 rounded-full bg-green-50 text-sm font-medium text-green-700 animate-fade-in">
            <Users className="w-4 h-4 mr-2" />
            {visitorCount}+ visiteurs ont consulté cette page aujourd'hui
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            Prêt à transformer vos visiteurs en 
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> clients fidèles</span> ?
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 animate-fade-in [animation-delay:400ms]">
            Rejoignez les 347 e-commerçants africains qui ont choisi ChatSeller et augmenté leurs ventes de +147% en moyenne
          </p>
          
          {/* Key metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12 animate-fade-in [animation-delay:600ms]">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2 min</div>
              <div className="text-sm text-gray-600">Installation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">+147%</div>
              <div className="text-sm text-gray-600">Conversion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Disponibilité</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
        
        {/* CTA Options Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 animate-fade-in [animation-delay:800ms]">
          <CTAOption
            icon={<Zap className="w-6 h-6" />}
            title="Commencer gratuitement"
            description="Testez ChatSeller avec 100 conversations/mois gratuites. Aucune carte bancaire requise."
            ctaText="Créer mon compte gratuit"
            ctaLink="https://dashboard.chatseller.app/register?plan=starter"
          />
          
          <CTAOption
            icon={<TrendingUp className="w-6 h-6" />}
            title="Upgrader vers Pro"
            description="Conversations illimitées, upsell intelligent, analytics avancées. 14 jours d'essai gratuit."
            ctaText="Essayer Pro gratuitement"
            ctaLink="https://dashboard.chatseller.app/register?plan=pro&trial=14"
            isPrimary={true}
            badge="-50%"
          />
          
          <CTAOption
            icon={<Play className="w-6 h-6" />}
            title="Voir une démo"
            description="Découvrez ChatSeller en action avec une démo personnalisée de 15 minutes."
            ctaText="Réserver ma démo"
            ctaLink="https://cal.com/chatseller/demo"
          />
        </div>
        
        {/* Testimonial Carousel */}
        <div className="max-w-2xl mx-auto mb-16 animate-fade-in [animation-delay:1000ms]">
          <h3 className="text-2xl font-bold text-center mb-8">Ce que disent nos clients</h3>
          <TestimonialQuote />
        </div>
        
        {/* Guarantee */}
        <div className="max-w-3xl mx-auto mb-16 animate-fade-in [animation-delay:1200ms]">
          <GuaranteeCard />
        </div>
        
        {/* Trust Elements */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 animate-fade-in [animation-delay:1400ms]">
          <div className="text-center p-4 bg-white/60 rounded-lg border border-gray-200">
            <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <div className="font-semibold text-sm">RGPD Compliant</div>
            <div className="text-xs text-gray-600">Données sécurisées</div>
          </div>
          
          <div className="text-center p-4 bg-white/60 rounded-lg border border-gray-200">
            <Clock className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <div className="font-semibold text-sm">Support 24/7</div>
            <div className="text-xs text-gray-600">Équipe française</div>
          </div>
          
          <div className="text-center p-4 bg-white/60 rounded-lg border border-gray-200">
            <Award className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <div className="font-semibold text-sm">Made in Africa</div>
            <div className="text-xs text-gray-600">Pour l'Afrique</div>
          </div>
          
          <div className="text-center p-4 bg-white/60 rounded-lg border border-gray-200">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="font-semibold text-sm">4.9/5 étoiles</div>
            <div className="text-xs text-gray-600">127 avis Google</div>
          </div>
        </div>
        
        {/* Final Big CTA */}
        <div className="text-center max-w-4xl mx-auto animate-fade-in [animation-delay:1600ms]">
          <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ne laissez plus vos visiteurs partir sans acheter
              </h3>
              
              <p className="text-xl mb-8 opacity-90">
                Transformez votre boutique en machine à conversion dès aujourd'hui
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-4">
                  <a href="https://dashboard.chatseller.app/register?plan=pro&promo=LAUNCH50" className="flex items-center">
                    🚀 Démarrer maintenant (-50%)
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-4">
                  <a href="mailto:support@chatseller.app" className="flex items-center">
                    💬 Parler à un expert
                    <MessageSquare className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm opacity-90">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Installation en 2 minutes</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>14 jours d'essai gratuit</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Satisfait ou remboursé</span>
                </div>
              </div>
              
              <div className="mt-6 text-sm opacity-75">
                🔥 <strong>Offre limitée :</strong> -50% sur tous les plans jusqu'au 31 juillet
              </div>
            </div>
          </div>
        </div>
        
        {/* Last chance message */}
        <div className="text-center mt-12 animate-fade-in [animation-delay:1800ms]">
          <p className="text-gray-600 max-w-2xl mx-auto">
            <strong>Dernière chance :</strong> Cette offre de lancement ne sera plus jamais proposée. 
            Les 347 e-commerçants qui nous ont déjà rejoint ce mois-ci ne regrettent pas leur choix.
            <br />
            <span className="text-primary font-semibold">Et vous, qu'attendez-vous ?</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;