// src/components/NewFinalCTASection.tsx
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Clock, TrendingUp, Heart, Sparkles, Users, Shield, Zap, Star, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const NewFinalCTASection = () => {
  const { language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 32 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Rotate testimonials
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % finalTestimonials.length);
    }, 4000);

    return () => clearInterval(testimonialTimer);
  }, []);

  const finalTestimonials = [
    {
      text: language === 'fr' ? 
        "ChatSeller a transformé notre boutique beauté. +340% de conversions en 2 mois !" :
        "ChatSeller transformed our beauty store. +340% conversions in 2 months!",
      author: "Sidy - Sassoumane",
      metric: "+340%"
    },
    {
      text: language === 'fr' ? 
        "Nos clientes adorent avoir une experte beauté disponible 24/7. Game changer !" :
        "Our customers love having a beauty expert available 24/7. Game changer!",
      author: "Fatou - 6C No Filter",
      metric: "24/7"
    },
    {
      text: language === 'fr' ? 
        "ROI visible dès la première semaine. ChatSeller s'est rentabilisé en 3 jours." :
        "Visible ROI from the first week. ChatSeller paid for itself in 3 days.",
      author: "Katia - Ahovi Cosmetics",
      metric: "3 jours"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-rose-600 via-pink-600 to-purple-700">
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      
      <div className="container px-6 md:px-12 mx-auto relative z-10">
        
        {/* Main CTA Content */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight animate-fade-in [animation-delay:200ms]">
            {language === 'fr' ? 
              'Prête à offrir à vos clientes une expérience unique en ligne ?' :
              'Ready to offer your customers a unique online experience?'}
          </h2>
          
          {/* Subheadline with key benefits */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in [animation-delay:400ms]">
            {language === 'fr' ? 
              'Rejoignez les marques beauté qui ont déjà adopté Chatseller et multiplié leurs conversions par 3 grâce à leur conseillère IA experte de leurs produits.' :
              'Join beauty brands that have already adopted Chatseller and tripled their conversions thanks to their AI advisor expert in their products.'}
          </p>
          
          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in [animation-delay:800ms]">
            <Button 
              size="lg"
              className="group bg-white text-rose-600 hover:bg-gray-50 rounded-full px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://dashboard.chatseller.app/register">
                {language === 'fr' ? 'Créer ma conseillère IA' : 'Create my AI advisor'}
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="group bg-black-800 text-white hover:bg-white hover:text-rose-600 rounded-full px-10 py-6 text-xl font-bold transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://cal.com/chatseller/demo-beaute">
                {language === 'fr' ? 'Voir une démo' : 'See a demo'}
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm animate-fade-in [animation-delay:1000ms]">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
              <span className="font-medium">
                {language === 'fr' ? '14 jours gratuits sans CB' : '14 days free without credit card'}
              </span>
            </div>
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="font-medium">
                {language === 'fr' ? 'Installation en 2 minutes' : '2-minute installation'}
              </span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-300" />
              <span className="font-medium">
                {language === 'fr' ? 'Conversion garantie ou remboursée' : 'Conversion guarantee or money back'}
              </span>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Stats */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center">
            <div className="text-4xl font-bold text-white mb-2">267%</div>
            <div className="text-white/80 font-medium mb-4">
              {language === 'fr' ? 'Conversions moyennes' : 'Average conversions'}
            </div>
            <div className="flex justify-center">
              <TrendingUp className="w-8 h-8 text-green-300" />
            </div>
          </div>

          {/* Rotating Testimonial */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            <div className="flex items-center justify-center mb-4">
              <div className="text-3xl font-bold text-white">
                {finalTestimonials[currentTestimonial].metric}
              </div>
            </div>
            <blockquote className="text-white/90 text-center italic mb-4 min-h-[60px] flex items-center justify-center">
              "{finalTestimonials[currentTestimonial].text}"
            </blockquote>
            <div className="text-white/70 text-sm font-medium text-center">
              — {finalTestimonials[currentTestimonial].author}
            </div>
          </div>

          {/* Users count */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center">
            <div className="text-4xl font-bold text-white mb-2">+10</div>
            <div className="text-white/80 font-medium mb-4">
              {language === 'fr' ? 'Marques beauté' : 'Beauty brands'}
            </div>
            <div className="flex justify-center">
              <Heart className="w-8 h-8 text-pink-300" />
            </div>
          </div>
        </div>

        {/* Final reassurance 
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {language === 'fr' ? 
                'Pourquoi les marques beauté nous choisissent' :
                'Why beauty brands choose us'}
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold mb-2">
                  {language === 'fr' ? 'Expertise beauté' : 'Beauty expertise'}
                </div>
                <div className="text-white/80 text-sm">
                  {language === 'fr' ? 
                    '2000+ ingrédients, 12 types de peau' :
                    '2000+ ingredients, 12 skin types'}
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold mb-2">
                  {language === 'fr' ? 'Support français' : 'French support'}
                </div>
                <div className="text-white/80 text-sm">
                  {language === 'fr' ? 
                    'Équipe experte secteur beauté' :
                    'Beauty industry expert team'}
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold mb-2">
                  {language === 'fr' ? 'Résultats garantis' : 'Guaranteed results'}
                </div>
                <div className="text-white/80 text-sm">
                  {language === 'fr' ? 
                    '30 jours ou remboursé' :
                    '30 days or money back'}
                </div>
              </div>
            </div>

            <div className="text-white/90 text-lg mb-8">
              {language === 'fr' ? 
                'Rejoignez les marques beauté qui transforment déjà leur expérience client avec ChatSeller' :
                'Join beauty brands already transforming their customer experience with ChatSeller'}
            </div>

            {/* Final CTA 
            <Button 
              size="lg"
              className="group bg-white text-rose-600 hover:bg-gray-50 rounded-2xl px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://dashboard.chatseller.app/register">
                {language === 'fr' ? 
                  'Commencer mon essai gratuit maintenant' :
                  'Start my free trial now'}
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default NewFinalCTASection;