// src/pages/NotFound.tsx
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Home, Search, Sparkles, MessageCircle, TrendingUp, Check } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import NewNavbar from '@/components/NewNavBar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <NewNavbar />

      <main className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-rose-50/60 via-pink-50/30 to-white px-4 sm:px-6 relative overflow-hidden pt-24 pb-16">

        {/* Éléments décoratifs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-rose-200/20 to-pink-200/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-rose-200/10 rounded-full blur-2xl -z-10" />

        <div className="text-center max-w-2xl mx-auto animate-fade-in relative z-10">

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-rose-200 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 text-sm font-semibold text-rose-700">
            <Sparkles className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Page introuvable' : 'Page not found'}
          </div>

          {/* 404 */}
          <div className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            404
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            {language === 'fr' ?
              'Cette page n\'existe pas' :
              'This page doesn\'t exist'}
          </h1>

          <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
            {language === 'fr' ?
              'La page que vous cherchez a peut-être été déplacée. Pendant que vous y êtes, découvrez comment Mia peut transformer les visiteurs de votre boutique en acheteurs.' :
              'The page you\'re looking for may have been moved. While you\'re here, discover how Mia can turn your store visitors into buyers.'}
          </p>

          {/* Boutons de navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              className="group bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="/">
                <Home className="mr-2 h-4 w-4" />
                {language === 'fr' ? 'Retour à l\'accueil' : 'Return to home'}
                <ArrowLeft className="ml-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>
            </Button>

            <Button
              variant="outline"
              className="border-2 border-purple-300 hover:border-purple-400 hover:bg-purple-50 text-purple-700"
              asChild
            >
              <a href="/support">
                <MessageCircle className="mr-2 h-4 w-4" />
                {language === 'fr' ? 'Contacter le support' : 'Contact support'}
              </a>
            </Button>
          </div>

          {/* Card Mia — CTA conversion */}
          <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 border-2 border-rose-200 rounded-3xl p-8 mb-10 text-left shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">
                  {language === 'fr'
                    ? 'Votre boutique en ligne mérite une vendeuse'
                    : 'Your online store deserves a salesperson'}
                </h2>
                <p className="text-sm text-gray-600">
                  {language === 'fr'
                    ? 'Mia est la première Vendeuse IA formée sur vos produits. Elle vend 24h/24 à votre place.'
                    : 'Mia is the first AI Salesperson trained on your products. She sells 24/7 on your behalf.'}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              {[
                language === 'fr' ? '+150% de ventes en moyenne' : '+150% sales on average',
                language === 'fr' ? 'Opérationnelle en 5 minutes' : 'Live in 5 minutes',
                language === 'fr' ? 'Dès 45€/mois' : 'From €45/month',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/70 rounded-xl px-3 py-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Button
              className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold py-4 rounded-2xl shadow-lg group"
              asChild
            >
              <a href="https://dashboard.chatseller.app/register">
                <Sparkles className="w-4 h-4 mr-2" />
                {language === 'fr' ? 'Recruter Mia — 14 jours gratuits' : 'Hire Mia — 14 days free'}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Pages suggérées */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center justify-center text-sm">
              <Search className="w-4 h-4 mr-2 text-rose-600" />
              {language === 'fr' ? 'Pages populaires' : 'Popular pages'}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { href: '/#problem-solution', label: language === 'fr' ? 'Voir Mia en action' : 'See Mia in action', color: 'rose' },
                { href: '/#pricing', label: language === 'fr' ? 'Tarifs' : 'Pricing', color: 'green' },
                { href: '/#how-it-works', label: language === 'fr' ? 'Comment ça marche' : 'How it works', color: 'purple' },
                { href: '/support', label: language === 'fr' ? 'Support' : 'Support', color: 'blue' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center p-3 rounded-xl hover:bg-${link.color}-50 transition-colors text-xs text-gray-700 hover:text-${link.color}-600 font-medium`}
                >
                  <div className={`w-2 h-2 bg-${link.color}-400 rounded-full mr-2 flex-shrink-0`}></div>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
