// src/components/NewFinalCTASection.tsx
import { ArrowRight, CheckCircle, Heart, Sparkles, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const NewFinalCTASection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-rose-600 via-pink-600 to-purple-700">

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />

      <div className="container px-6 md:px-12 mx-auto relative z-10">

        {/* Main CTA Content */}
        <div className="text-center max-w-5xl mx-auto mb-16">

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">
              {language === 'fr' ? '+10 marques beauté nous font déjà confiance' : '+10 beauty brands already trust us'}
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight animate-fade-in [animation-delay:200ms]">
            {language === 'fr' ?
              'Prête à libérer votre temps et augmenter vos ventes ?' :
              'Ready to free up your time and increase your sales?'}
          </h2>

          {/* Subheadline with key benefits */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in [animation-delay:400ms]">
            {language === 'fr' ?
              'Rejoignez les marques beauté qui font confiance à ChatSeller pour accueillir, conseiller et convertir leurs clientes 24h/24.' :
              'Join the beauty brands that trust ChatSeller to welcome, advise and convert their customers 24/7.'}
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in [animation-delay:600ms]">
            <Button
              size="lg"
              className="group bg-white text-rose-600 hover:bg-gray-50 rounded-full px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://dashboard.chatseller.app/register">
                {language === 'fr' ? 'Créer ma Conseillère IA' : 'Create my AI Advisor'}
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-rose-600 rounded-full px-10 py-6 text-xl font-bold transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://cal.com/chatseller/demo-beaute">
                {language === 'fr' ? 'Voir une démo' : 'See a demo'}
              </a>
            </Button>
          </div>

          {/* Trust indicators - Éléments de réassurance */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/90 text-sm animate-fade-in [animation-delay:800ms]">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
              <span className="font-medium">
                {language === 'fr' ? '30 jours gratuits sans engagement' : '30 days free without commitment'}
              </span>
            </div>
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="font-medium">
                {language === 'fr' ? 'Installation en 5 minutes' : '5-minute installation'}
              </span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-300" />
              <span className="font-medium">
                {language === 'fr' ? 'Satisfait ou remboursé' : 'Satisfied or refunded'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFinalCTASection;
