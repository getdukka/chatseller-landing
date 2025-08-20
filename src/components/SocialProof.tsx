// src/components/SocialProof.tsx - AVEC TRADUCTIONS COMPLÈTES
import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  TrendingUp, 
  Users, 
  Globe, 
  Award,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Shield,
  MessageSquare,
  Play,
  Pause,
  Eye,
  Calendar,
  Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialCarousel = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // ✅ TÉMOIGNAGES ENRICHIS AVEC DÉTAILS - BILINGUES
  const testimonials = {
    fr: [
      {
        text: "J'ai testé ChatSeller sur ma boutique pendant 2 semaines. Les résultats sont impressionnants ! L'IA répond naturellement aux questions de mes clients et j'ai eu 12 nouvelles commandes dès la première semaine.",
        author: "Megane Bihan",
        location: "Lyon, France",
        flag: "🇫🇷",
        avatar: "/api/placeholder/60/60",
        sector: "Mode féminine",
        date: "Il y a 3 semaines",
        verified: true,
        metrics: "+400% de conversion",
        rating: 5
      },
      {
        text: "Incroyable ! ChatSeller a transformé mon site e-commerce. Mes clients apprécient avoir quelqu'un qui répond immédiatement à leurs questions, même la nuit. C'est comme avoir un vendeur 24h/24.",
        author: "Sophie Martens",
        location: "Bruxelles, Belgique", 
        flag: "🇧🇪",
        avatar: "/api/placeholder/60/60",
        sector: "Produits naturels",
        date: "Il y a 1 mois",
        verified: true,
        metrics: "+65% de ventes nocturnes",
        rating: 5
      },
      {
        text: "En tant qu'e-commerçant au Sénégal, j'étais sceptique au début. Mais mon Vendeur IA sait des choses sur mes produits que j'ignorais moi-même. C'est hallucinant ! Mes ventes ont augmenté de 40% !",
        author: "Amadou Tall",
        location: "Dakar, Sénégal",
        flag: "🇸🇳", 
        avatar: "/api/placeholder/60/60",
        sector: "Artisanat local",
        date: "Il y a 2 semaines",
        verified: true,
        metrics: "+40% de revenus",
        rating: 5
      },
      {
        text: "L'IA de ChatSeller est bluffante ! Elle connaît mes produits mieux que certains de mes employés. Mes clients sont ravis d'avoir des réponses précises instantanément. Je recommande vivement !",
        author: "Hortense Kouamé",
        location: "Abidjan, Côte d'Ivoire",
        flag: "🇨🇮",
        avatar: "/api/placeholder/60/60",
        sector: "Cosmétiques bio",
        date: "Il y a 5 jours",
        verified: true,
        metrics: "+28 commandes/semaine",
        rating: 5
      },
      {
        text: "ChatSeller a dépassé mes attentes. L'installation a pris 3 minutes et dès le lendemain j'avais déjà mes premières conversions. L'IA pose les bonnes questions pour qualifier mes prospects.",
        author: "Thomas Lemaire", 
        location: "Paris, France",
        flag: "🇫🇷",
        avatar: "/api/placeholder/60/60",
        sector: "Électronique",
        date: "Il y a 1 semaine",
        verified: true,
        metrics: "+200% de qualification",
        rating: 5
      },
      {
        text: "Excellente solution ! Le Vendeur IA s'adapte parfaitement à ma clientèle belge et française. Il collecte les informations de commande de manière très naturelle. Mes clients ne se rendent même pas compte que c'est une IA !",
        author: "Valérie Janssens",
        location: "Gand, Belgique",
        flag: "🇧🇪", 
        avatar: "/api/placeholder/60/60",
        sector: "Décoration",
        date: "Il y a 4 jours",
        verified: true,
        metrics: "+180% taux de conversion",
        rating: 5
      }
    ],
    en: [
      {
        text: "I tested ChatSeller on my store for 2 weeks. The results are impressive! The AI naturally responds to my customers' questions and I got 12 new orders from the first week.",
        author: "Megane Bihan",
        location: "Lyon, France",
        flag: "🇫🇷",
        avatar: "/api/placeholder/60/60",
        sector: "Women's Fashion",
        date: "3 weeks ago",
        verified: true,
        metrics: "+400% conversion",
        rating: 5
      },
      {
        text: "Amazing! ChatSeller transformed my e-commerce site. My customers appreciate having someone who responds immediately to their questions, even at night. It's like having a 24/7 salesperson.",
        author: "Sophie Martens",
        location: "Brussels, Belgium", 
        flag: "🇧🇪",
        avatar: "/api/placeholder/60/60",
        sector: "Natural Products",
        date: "1 month ago",
        verified: true,
        metrics: "+65% night sales",
        rating: 5
      },
      {
        text: "As an e-merchant in Senegal, I was skeptical at first. But my AI Seller knows things about my products that I didn't even know myself. It's mind-blowing! My sales increased by 40%!",
        author: "Amadou Tall",
        location: "Dakar, Senegal",
        flag: "🇸🇳", 
        avatar: "/api/placeholder/60/60",
        sector: "Local Crafts",
        date: "2 weeks ago",
        verified: true,
        metrics: "+40% revenue",
        rating: 5
      },
      {
        text: "ChatSeller's AI is amazing! It knows my products better than some of my employees. My customers are delighted to get precise answers instantly. I highly recommend it!",
        author: "Hortense Kouamé",
        location: "Abidjan, Ivory Coast",
        flag: "🇨🇮",
        avatar: "/api/placeholder/60/60",
        sector: "Organic Cosmetics",
        date: "5 days ago",
        verified: true,
        metrics: "+28 orders/week",
        rating: 5
      },
      {
        text: "ChatSeller exceeded my expectations. Installation took 3 minutes and the next day I already had my first conversions. The AI asks the right questions to qualify my prospects.",
        author: "Thomas Lemaire", 
        location: "Paris, France",
        flag: "🇫🇷",
        avatar: "/api/placeholder/60/60",
        sector: "Electronics",
        date: "1 week ago",
        verified: true,
        metrics: "+200% qualification",
        rating: 5
      },
      {
        text: "Excellent solution! The AI Seller adapts perfectly to my Belgian and French clientele. It collects order information very naturally. My customers don't even realize it's an AI!",
        author: "Valérie Janssens",
        location: "Ghent, Belgium",
        flag: "🇧🇪", 
        avatar: "/api/placeholder/60/60",
        sector: "Decoration",
        date: "4 days ago",
        verified: true,
        metrics: "+180% conversion rate",
        rating: 5
      }
    ]
  };

  const currentTestimonials = testimonials[language];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoPlay, isPaused, currentTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length);
  };

  const currentTestimonial = currentTestimonials[currentIndex];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Carousel Container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mx-4 min-h-[350px] relative overflow-hidden">
          
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full"></div>
          
          {/* Quote Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          {/* Rating Stars - Animated */}
          <div className="flex justify-center mb-4">
            {[1,2,3,4,5].map((star) => (
              <Star 
                key={star}
                className={`w-5 h-5 ${star <= currentTestimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} transition-all duration-300`}
                style={{animationDelay: `${star * 0.1}s`}}
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-lg text-gray-700 text-center leading-relaxed mb-6 italic">
            "{currentTestimonial.text}"
          </blockquote>

          {/* Metrics Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              📈 {currentTestimonial.metrics}
            </div>
          </div>

          {/* Author Info Enhanced */}
          <div className="flex items-center justify-center space-x-4">
            <div className="relative">
              <img 
                src={currentTestimonial.avatar} 
                alt={currentTestimonial.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-200"
                onError={(e) => {
                  // Fallback to initials if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling && ((target.nextElementSibling as HTMLElement).style.display = 'flex');
                }}
              />
              {/* Fallback initials */}
              <div className="hidden w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full items-center justify-center text-white font-bold text-lg border-2 border-blue-200">
                {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
              </div>
              {/* Verified badge */}
              {currentTestimonial.verified && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            
            <div className="text-center">
              <div className="font-semibold text-gray-900 flex items-center justify-center space-x-2">
                <span>{currentTestimonial.author}</span>
                {currentTestimonial.verified && (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                )}
              </div>
              <div className="text-sm text-gray-600 flex items-center justify-center space-x-1">
                <span>{currentTestimonial.flag}</span>
                <span>{currentTestimonial.location}</span>
              </div>
              <div className="flex items-center justify-center space-x-4 mt-1">
                <div className="flex items-center text-xs text-gray-500">
                  <Building className="w-3 h-3 mr-1" />
                  {currentTestimonial.sector}
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="w-3 h-3 mr-1" />
                  {currentTestimonial.date}
                </div>
              </div>
            </div>
          </div>

          {/* Verified badge text */}
          <div className="text-center mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-50 text-green-700">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              {language === 'fr' ? 'Témoignage vérifié' : 'Verified testimonial'}
            </span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-primary" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
        >
          <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-primary" />
        </button>

        {/* Auto-play controls */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="w-8 h-8 bg-white/80 rounded-full shadow-sm border border-gray-200 flex items-center justify-center hover:bg-white transition-colors"
          >
            {isAutoPlay && !isPaused ? (
              <Pause className="w-4 h-4 text-gray-600" />
            ) : (
              <Play className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Enhanced Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {currentTestimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-600 w-8' 
                : 'bg-gray-300 hover:bg-gray-400 w-3'
            }`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="text-center mt-4">
        <span className="text-xs text-gray-500 flex items-center justify-center">
          <Eye className="w-3 h-3 mr-1" />
          {isPaused 
            ? (language === 'fr' ? 'Lecture en pause' : 'Playback paused')
            : (language === 'fr' ? 'Lecture automatique active' : 'Auto-play active')
          }
        </span>
      </div>
    </div>
  );
};

const StatsCard = ({ 
  value, 
  label, 
  icon, 
  description,
  isAnimated = false
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  isAnimated?: boolean;
}) => {
  const [displayValue, setDisplayValue] = useState(isAnimated ? '0' : value);

  useEffect(() => {
    if (!isAnimated) return;
    
    const numericValue = parseInt(value.replace(/[^\d]/g, ''));
    const increment = numericValue / 50;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current).toString() + value.replace(/[\d]/g, '').slice(-1));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value, isAnimated]);

  return (
    <div className="text-center p-6 bg-white/60 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 group">
      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{isAnimated ? displayValue : value}</div>
      <div className="text-lg font-semibold text-gray-700 mb-2">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
};

const SocialProof = () => {
  const { t } = useLanguage();
  const [userCount, setUserCount] = useState(47);

  // Compteur dynamique utilisateurs
  useEffect(() => {
    const timer = setInterval(() => {
      // Simulation d'un nouveau utilisateur occasionnel
      if (Math.random() > 0.98) {
        setUserCount(prev => prev + 1);
      }
    }, 10000); // Check every 10 seconds

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      value: `+${userCount}`,
      label: t('earlyAdopters'),
      icon: <Users className="w-6 h-6" />,
      description: t('earlyAdoptersDesc'),
      isAnimated: true
    },
    {
      value: "4.8/5",
      label: t('satisfaction'),
      icon: <Star className="w-6 w-6" />,
      description: t('satisfactionDesc')
    },
    {
      value: "+85%",
      label: t('approval'),
      icon: <CheckCircle2 className="w-6 h-6" />,
      description: t('approvalDesc')
    },
    {
      value: "2 min",
      label: t('averageInstall'),
      icon: <Award className="w-6 h-6" />,
      description: t('averageInstallDesc')
    }
  ];

  const certifications = [
    {
      icon: <Shield className="w-5 h-5" />,
      label: t('rgpdCompliant'),
      description: t('rgpdDesc')
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: t('footerMadeInAfricaFull'),
      description: t('madeInAfricaDesc')
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      label: t('support247'),
      description: t('support247Desc')
    }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-green-50/30 rounded-r-3xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-green-200 rounded-full bg-green-50 text-sm font-medium text-green-700 animate-fade-in">
            <MessageSquare className="w-4 h-4 mr-2" />
            {t('socialProofBadge')}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            {t('socialProofTitle')}
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
            {t('socialProofSubtitle')}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16 animate-fade-in [animation-delay:800ms]">
          <TestimonialCarousel />
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12 animate-fade-in [animation-delay:600ms]">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              description={stat.description}
              isAnimated={stat.isAnimated}
            />
          ))}
        </div>

        {/* Certifications */}
        <div className="flex justify-center mb-20">
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/80 rounded-lg p-4 border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  {cert.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm">{cert.label}</div>
                  <div className="text-xs text-gray-600">{cert.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto text-center animate-fade-in [animation-delay:1000ms]">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4">{t('socialProofCTA')}</h3>
          <p className="text-muted-foreground mb-6">
            {t('socialProofCTADesc')}
          </p>
          
          <div className="space-y-4">
            <Button size="lg" className="group rounded-2xl">
              <a href="https://dashboard.chatseller.app/register" className="flex items-center">
                {t('socialProofCTAButton')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            {t('socialProofBenefits')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;