// src/components/NewTestimonials.tsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, TrendingUp, Heart, Users, Award, Play, Pause } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewTestimonials = () => {
  const { language } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = getTestimonialsData(language);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-purple-50 via-rose-50 to-pink-50 relative overflow-hidden">
      
      {/* Decorative elements beauté */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-pink-200/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-rose-200/20 to-purple-200/15 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-100/10 to-rose-100/10 rounded-full blur-3xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-8 border border-purple-200 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 text-sm font-semibold text-purple-700 animate-fade-in">
            <Award className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Success Stories Beauté' : 'Beauty Success Stories'}
            <Heart className="w-4 h-4 ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight animate-fade-in [animation-delay:200ms]">
            {language === 'fr' ? 
              'Ces marques beauté transforment leur business avec ChatSeller' :
              'These beauty brands are transforming their business with ChatSeller'}
          </h2>
          
          <p className="text-xl text-gray-600 animate-fade-in [animation-delay:400ms]">
            {language === 'fr' ? 
              'Découvrez comment nos clients atteignent des résultats exceptionnels grâce à leur conseillère IA' :
              'Discover how our clients achieve exceptional results with their AI beauty advisor'}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Main testimonial card */}
          <div 
            className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-rose-50/50 -z-10"></div>
            
            {/* Quote decoration */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="w-24 h-24 text-purple-600" />
            </div>
            
            <div className="relative z-10">
              {/* Testimonial content */}
              <div className="grid md:grid-cols-3 gap-8 items-center">
                
                {/* Left: Founder info */}
                <div className="text-center md:text-left">
                  <div className="relative inline-block mb-6">
                    <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${testimonials[activeTestimonial].color} flex items-center justify-center text-white text-4xl font-bold shadow-xl mx-auto md:mx-0`}>
                      {testimonials[activeTestimonial].initials}
                    </div>
                    
                    {/* Verified badge */}
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-1">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {testimonials[activeTestimonial].brand}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Business metrics */}
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center justify-center md:justify-start mb-1">
                      <Users className="w-4 h-4 mr-2 text-blue-500" />
                      {testimonials[activeTestimonial].businessSize}
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                      {testimonials[activeTestimonial].businessType}
                    </div>
                  </div>
                </div>
                
                {/* Center: Testimonial text */}
                <div className="md:col-span-2">
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed italic mb-8">
                    "{testimonials[activeTestimonial].content}"
                  </blockquote>
                  
                  {/* Key results */}
                  <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {testimonials[activeTestimonial].results.conversion}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {language === 'fr' ? 'Conversion' : 'Conversion'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {testimonials[activeTestimonial].results.revenue}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {language === 'fr' ? 'Revenus' : 'Revenue'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {testimonials[activeTestimonial].results.satisfaction}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {language === 'fr' ? 'Satisfaction' : 'Satisfaction'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Use case highlight */}
                  <div className="mt-6 p-4 bg-white/60 rounded-xl border border-gray-100">
                    <div className="text-sm font-semibold text-gray-800 mb-2">
                      {language === 'fr' ? 'Cas d\'usage principal :' : 'Main use case:'}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[activeTestimonial].useCase}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex items-center justify-between mt-8">
            
            {/* Carousel navigation */}
            <div className="flex items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/80 hover:bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/80 hover:bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="w-12 h-12 bg-white/80 hover:bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                aria-label="Toggle autoplay"
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>
            
            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-purple-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Counter */}
            <div className="text-sm text-gray-500 font-medium">
              {activeTestimonial + 1} / {testimonials.length}
            </div>
          </div>
          
          {/* Thumbnails preview */}
          <div className="flex justify-center space-x-4 mt-8 overflow-x-auto pb-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`flex-shrink-0 flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-white shadow-lg border-2 border-purple-200'
                    : 'bg-white/60 hover:bg-white/80 border border-gray-200'
                }`}
              >
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-sm font-bold shadow-md`}>
                  {testimonial.initials}
                </div>
                <div className="text-left hidden sm:block">
                  <div className="text-sm font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-xs text-gray-600">{testimonial.brand}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-20 text-center animate-fade-in [animation-delay:600ms]">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg max-w-4xl mx-auto">
            <div className="text-sm font-semibold text-gray-600 mb-6">
              {language === 'fr' ? 
                'Résultats moyens de nos marques beauté clientes' :
                'Average results from our beauty brand clients'}
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">+267%</div>
                <div className="text-sm text-gray-600 font-medium">
                  {language === 'fr' ? 'Conversions moyennes' : 'Average conversions'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">+52%</div>
                <div className="text-sm text-gray-600 font-medium">
                  {language === 'fr' ? 'Panier moyen' : 'Average cart'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">96%</div>
                <div className="text-sm text-gray-600 font-medium">
                  {language === 'fr' ? 'Satisfaction client' : 'Customer satisfaction'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">{language === 'fr' ? '3 jours' : '3 days'}</div>
                <div className="text-sm text-gray-600 font-medium">
                  {language === 'fr' ? 'Retour sur investissement' : 'Return on investment'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Données des témoignages avec traductions
const getTestimonialsData = (language: 'fr' | 'en') => [
  {
    name: "Sidy",
    role: language === 'fr' ? 'Fondateur' : 'Founder',
    brand: "Sassoumane",
    initials: "SY",
    color: "from-indigo-600 to-purple-600",
    content: language === 'fr' ? 
      "ChatSeller a révolutionné notre approche client dans le parfum masculin. Notre IA sait parfaitement décrire les notes olfactives et guider nos clients vers le parfum qui leur correspond. Nos conversions ont explosé de 340% en 2 mois." :
      "ChatSeller has revolutionized our customer approach in men's fragrances. Our AI perfectly describes olfactory notes and guides our customers to the right fragrance. Our conversions exploded by 340% in 2 months.",
    businessSize: language === 'fr' ? '5k visiteurs/mois' : '5k visitors/month',
    businessType: language === 'fr' ? 'E-commerce Parfums' : 'Fragrance E-commerce',
    results: {
      conversion: "+340%",
      revenue: "+85k€",
      satisfaction: "98%"
    },
    useCase: language === 'fr' ?
      "Conseil personnalisé sur les fragrances masculines avec description experte des notes olfactives et recommandations selon la personnalité." :
      "Personalized advice on men's fragrances with expert description of olfactory notes and recommendations based on personality."
  },
  {
    name: "Fatou",
    role: language === 'fr' ? 'Fondatrice' : 'Founder',
    brand: "6C No Filter",
    initials: "FT",
    color: "from-emerald-500 to-green-600",
    content: language === 'fr' ?
      "Nos clientes adorent pouvoir poser toutes leurs questions sur les ingrédients naturels. ChatSeller connaît parfaitement notre gamme bio et rassure les peaux sensibles. C'est comme avoir une naturopathe 24h/24." :
      "Our customers love being able to ask all their questions about natural ingredients. ChatSeller knows our organic range perfectly and reassures sensitive skin. It's like having a naturopath 24/7.",
    businessSize: language === 'fr' ? '8k visiteurs/mois' : '8k visitors/month',
    businessType: language === 'fr' ? 'Cosmétiques Bio' : 'Organic Cosmetics',
    results: {
      conversion: "+245%",
      revenue: "+67k€",
      satisfaction: "96%"
    },
    useCase: language === 'fr' ?
      "Éducation sur les cosmétiques naturels, analyse des ingrédients et recommandations pour peaux sensibles avec certifications bio." :
      "Education on natural cosmetics, ingredient analysis and recommendations for sensitive skin with organic certifications."
  },
  {
    name: "Katia",
    role: language === 'fr' ? 'Fondatrice' : 'Founder',
    brand: "Ahovi Cosmetics",
    initials: "KA",
    color: "from-pink-500 to-rose-600",
    content: language === 'fr' ?
      "L'impact sur notre panier moyen a été immédiat. ChatSeller suggère intelligemment des produits complémentaires et éduque nos clientes sur leur routine beauté. Nos ventes croisées ont triplé." :
      "The impact on our average cart was immediate. ChatSeller intelligently suggests complementary products and educates our customers about their beauty routine. Our cross-sales have tripled.",
    businessSize: language === 'fr' ? '12k visiteurs/mois' : '12k visitors/month',
    businessType: language === 'fr' ? 'Cosmétiques Premium' : 'Premium Cosmetics',
    results: {
      conversion: "+189%",
      revenue: "+92k€",
      satisfaction: "94%"
    },
    useCase: language === 'fr' ?
      "Vente croisée intelligente avec conseils routine beauté personnalisée et recommandations produits selon le type de peau." :
      "Intelligent cross-selling with personalized beauty routine advice and product recommendations according to skin type."
  },
  {
    name: "Anta",
    role: language === 'fr' ? 'Fondatrice' : 'Founder',
    brand: "Racines Précieuses",
    initials: "AN",
    color: "from-amber-500 to-orange-600",
    content: language === 'fr' ?
      "Enfin une solution qui comprend les spécificités des cheveux texturés ! ChatSeller guide parfaitement nos clientes dans le choix de leur routine capillaire selon leur type de cheveux et leurs objectifs." :
      "Finally a solution that understands the specifics of textured hair! ChatSeller perfectly guides our customers in choosing their hair routine according to their hair type and goals.",
    businessSize: language === 'fr' ? '6k visiteurs/mois' : '6k visitors/month',
    businessType: language === 'fr' ? 'Soins Capillaires' : 'Hair Care',
    results: {
      conversion: "+298%",
      revenue: "+54k€",
      satisfaction: "97%"
    },
    useCase: language === 'fr' ?
      "Diagnostic capillaire spécialisé cheveux texturés avec routines personnalisées et conseils d'application produits." :
      "Specialized hair diagnosis for textured hair with personalized routines and product application advice."
  },
  {
    name: "Yaye Fatou",
    role: language === 'fr' ? 'Fondatrice' : 'Founder',
    brand: "Yafa Beauty",
    initials: "YF",
    color: "from-violet-500 to-purple-600",
    content: language === 'fr' ?
      "ChatSeller a transformé notre relation client. Nos clientes se sentent accompagnées dans leur parcours beauté, que ce soit pour le visage ou les cheveux. Notre taux de rétention a doublé." :
      "ChatSeller has transformed our customer relationship. Our customers feel supported in their beauty journey, whether for face or hair. Our retention rate has doubled.",
    businessSize: language === 'fr' ? '15k visiteurs/mois' : '15k visitors/month',
    businessType: language === 'fr' ? 'Beauté Globale' : 'Global Beauty',
    results: {
      conversion: "+223%",
      revenue: "+78k€",
      satisfaction: "95%"
    },
    useCase: language === 'fr' ?
      "Conseils beauté holistiques visage + cheveux avec suivi personnalisé et recommandations évolutives selon les saisons." :
      "Holistic beauty advice for face + hair with personalized follow-up and evolving recommendations according to seasons."
  }
];

export default NewTestimonials;