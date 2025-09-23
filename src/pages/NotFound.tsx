// src/pages/NotFound.tsx
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search, Heart, Sparkles, MessageCircle } from "lucide-react";
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
      
      <main className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-rose-50/60 via-pink-50/30 to-white px-4 sm:px-6 relative overflow-hidden pt-24">
        
        {/* Éléments décoratifs beauté */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-rose-200/20 to-pink-200/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-rose-200/10 rounded-full blur-2xl -z-10" />
        
        <div className="text-center max-w-lg mx-auto animate-fade-in relative z-10">
          
          {/* Badge beauté */}
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-rose-200 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 text-sm font-semibold text-rose-700">
            <Heart className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Oops! Page introuvable' : 'Oops! Page not found'}
            <Sparkles className="w-4 h-4 ml-2" />
          </div>
          
          {/* Numéro 404 */}
          <div className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            404
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            {language === 'fr' ? 
              'Cette page beauté n\'existe pas' : 
              'This beauty page doesn\'t exist'}
          </h1>
          
          <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
            {language === 'fr' ? 
              'La page que vous cherchez a peut-être été déplacée ou supprimée. Retournez à l\'accueil pour découvrir nos solutions pour marques beauté.' :
              'The page you\'re looking for may have been moved or deleted. Return home to discover our solutions for beauty brands.'}
          </p>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
          
          {/* Pages suggérées beauté */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-100 shadow-lg">
            <h2 className="font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Search className="w-5 h-5 mr-2 text-rose-600" />
              {language === 'fr' ? 'Pages populaires' : 'Popular pages'}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a 
                href="/#demo" 
                className="flex items-center p-3 rounded-xl hover:bg-rose-50 transition-colors text-sm text-gray-700 hover:text-rose-600"
              >
                <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                {language === 'fr' ? 'Voir la démo' : 'See demo'}
              </a>
              
              <a 
                href="/#how-it-works" 
                className="flex items-center p-3 rounded-xl hover:bg-purple-50 transition-colors text-sm text-gray-700 hover:text-purple-600"
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                {language === 'fr' ? 'Installation' : 'Setup'}
              </a>
              
              <a 
                href="/#pricing" 
                className="flex items-center p-3 rounded-xl hover:bg-green-50 transition-colors text-sm text-gray-700 hover:text-green-600"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                {language === 'fr' ? 'Tarifs' : 'Pricing'}
              </a>
              
              <a 
                href="/support" 
                className="flex items-center p-3 rounded-xl hover:bg-blue-50 transition-colors text-sm text-gray-700 hover:text-blue-600"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                {language === 'fr' ? 'Support' : 'Support'}
              </a>
            </div>
          </div>
          
          {/* CTA spécialisé beauté */}
          <div className="mt-8 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-200">
            <p className="text-sm text-gray-600 mb-3">
              {language === 'fr' ? 
                'Vous êtes une marque beauté ? Découvrez ChatSeller' :
                'Are you a beauty brand? Discover ChatSeller'}
            </p>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
              asChild
            >
              <a href="https://dashboard.chatseller.app/register">
                <Sparkles className="w-4 h-4 mr-2" />
                {language === 'fr' ? 'Essai gratuit 14 jours' : '14-day free trial'}
              </a>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;