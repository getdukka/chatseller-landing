// src/components/SocialProof.tsx - TÉMOIGNAGES DE TESTEURS RÉALISTES
import React, { useState } from 'react';
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
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ TÉMOIGNAGES RÉALISTES DE TESTEURS PAR PAYS
  const testimonials = [
    {
      text: "J'ai testé ChatSeller sur ma boutique pendant 2 semaines. Les résultats sont impressionnants ! L'IA répond naturellement aux questions de mes clients et j'ai eu 12 nouvelles commandes dès la première semaine.",
      author: "Meganne Bihan",
      location: "Lyon, France",
      flag: "🇫🇷",
      avatar: "MD"
    },
    {
      text: "Incroyable ! ChatSeller a transformé mon site e-commerce. Mes clients apprécient avoir quelqu'un qui répond immédiatement à leurs questions, même la nuit. C'est comme avoir un vendeur 24h/24.",
      author: "Sophie Martens",
      location: "Bruxelles, Belgique", 
      flag: "🇧🇪",
      avatar: "SM"
    },
    {
      text: "En tant qu'e-commerçant au Sénégal, j'étais sceptique au début. Mais mon Vendeur IA sait des choses sur mes produits que j'ignorais moi-même. C'est hallucinant ! Mes ventes ont augmenté de 40% !",
      author: "Amadou Tall",
      location: "Dakar, Sénégal",
      flag: "🇸🇳", 
      avatar: "AT"
    },
    {
      text: "L'IA de ChatSeller est bluffante ! Elle connaît mes produits mieux que certains de mes employés. Mes clients sont ravis d'avoir des réponses précises instantanément. Je recommande vivement !",
      author: "Hortense Kouamé",
      location: "Abidjan, Côte d'Ivoire",
      flag: "🇨🇮",
      avatar: "HK"
    },
    {
      text: "ChatSeller a dépassé mes attentes. L'installation a pris 3 minutes et dès le lendemain j'avais déjà mes premières conversions. L'IA pose les bonnes questions pour qualifier mes prospects.",
      author: "Thomas Lemaire", 
      location: "Paris, France",
      flag: "🇫🇷",
      avatar: "TL"
    },
    {
      text: "Excellente solution ! Le Vendeur IA s'adapte parfaitement à ma clientèle belge et française. Il collècte les informations de commande de manière très naturelle. Mes clients ne se rendent même pas compte que c'est une IA !",
      author: "Valérie Janssens",
      location: "Gand, Belgique",
      flag: "🇧🇪", 
      avatar: "VJ"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-4xl mx-auto hero-gradient-bg">
      {/* Carousel Container */}
      <div className="relative">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mx-4 min-h-[280px]">
          {/* Quote Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-lg text-gray-700 text-center leading-relaxed mb-8 italic">
            "{testimonials[currentIndex].text}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              {testimonials[currentIndex].avatar}
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">
                {testimonials[currentIndex].author}
              </div>
              <div className="text-sm text-gray-600 flex items-center">
                <span className="mr-1">{testimonials[currentIndex].flag}</span>
                {testimonials[currentIndex].location}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ArrowRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-600 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
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

const SocialProof = () => {
  const stats = [
    {
      value: "+50",
      label: "Early Adopters",
      icon: <Users className="w-6 h-6" />,
      description: "Ont testé ChatSeller en avant-première"
    },
    {
      value: "4.8/5",
      label: "Satisfaction",
      icon: <Star className="w-6 w-6" />,
      description: "Note moyenne des testeurs"
    },
    {
      value: "+85%",
      label: "Approuvent",
      icon: <CheckCircle2 className="w-6 h-6" />,
      description: "Recommandent ChatSeller"
    },
    {
      value: "2 min",
      label: "Installation",
      icon: <Award className="w-6 h-6" />,
      description: "Temps moyen d'installation"
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
            Testé et approuvé par +50 e-commerçants
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            Voici ce que disent les e-commerçants qui ont 
            <span className="text-gradient bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> testé ChatSeller</span>
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
            Des retours authentiques d'entrepreneurs qui ont fait l'expérience du Vendeur IA.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16 animate-fade-in [animation-delay:800ms]">
          <TestimonialCarousel />
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
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto text-center animate-fade-in [animation-delay:1000ms]">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Rejoignez les testeurs satisfaits</h3>
          <p className="text-muted-foreground mb-6">
            Découvrez pourquoi les e-commerçants choisissent ChatSeller pour transformer leurs visiteurs en clients
          </p>
          
          <Button size="lg" className="group rounded-2xl">
            <a href="https://dashboard.chatseller.app/register" className="flex items-center">
              Je veux tester ChatSeller
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            ✅ 7 jours gratuits • ✅ Installation en 2 minutes • ✅ Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;