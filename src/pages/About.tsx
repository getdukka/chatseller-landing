// src/pages/about.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Heart, 
  Target, 
  Eye, 
  Zap, 
  Globe, 
  Users,
  ArrowRight,
  CheckCircle2,
  Store
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-transparent -z-10" />
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10" />
          
          <div className="container px-6 md:px-12 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 mb-6 border border-blue-200 rounded-full bg-blue-50 text-sm font-medium text-blue-700 animate-fade-in">
                <Heart className="w-4 h-4 mr-2" />
                Développé en Afrique de l'Ouest avec ❤️
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
                À Propos de 
                <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> ChatSeller</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 animate-fade-in [animation-delay:400ms]">
                Nous croyons qu'un site e-commerce ne devrait pas être une simple vitrine silencieuse. 
                Une boutique en ligne doit savoir parler, rassurer, convaincre, vendre — comme un vrai vendeur professionnel, 
                mais sans limite d'horaires.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-6 md:px-12 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">D'où est né ChatSeller ?</h2>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Store className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">L'histoire de Dukka</h3>
                      <p className="text-gray-700 leading-relaxed">
                        ChatSeller est une solution développée par <strong>Dukka</strong>, une startup africaine fondée par 
                        <strong> Ibuka Ndjoli</strong>. Avant ChatSeller, nous travaillions sur une plateforme e-commerce 
                        conversationnelle complète : la meilleure alternative à Shopify en Afrique.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-900 mb-3">La révélation</h4>
                    <blockquote className="text-blue-800 italic">
                      "En discutant avec des e-commerçants, nous avons compris qu'il leur était difficile de quitter 
                      leur site e-commerce actuel pour en tester un nouveau, aussi innovant soit-il. Ceci dit, 
                      l'idée d'avoir un vendeur IA capable d'augmenter la conversion de leurs sites leur plaisait beaucoup."
                    </blockquote>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-green-800 font-medium">Le problème identifié :</p>
                        <p className="text-green-700 mt-1">
                          <em>"On a déjà une boutique en ligne que nous aimons, mais notre problème est la conversion. 
                          Nous attirons beaucoup de visiteurs mais faisons peu de ventes."</em>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-lg font-medium text-gray-900">
                      C'est à partir de cette frustration partagée que <span className="text-primary">ChatSeller est né</span> : 
                      un Agent IA Commercial prêt à l'emploi, capable de s'intégrer facilement à n'importe quelle boutique en ligne existante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20">
          <div className="container px-6 md:px-12 mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Mission */}
                <div className="text-center p-8 bg-gradient-to-b from-blue-50 to-white rounded-2xl border border-blue-100">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">Notre Mission</h3>
                  <p className="text-blue-800 font-medium mb-4">
                    "Transform e-commerce websites into human-like sales experiences."
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Rendre chaque site e-commerce capable de vendre comme un vrai vendeur humain. 
                    Donner aux petits et moyens commerçants, en Afrique et ailleurs, le même niveau 
                    d'expérience client que les plus grandes marques.
                  </p>
                </div>

                {/* Vision */}
                <div className="text-center p-8 bg-gradient-to-b from-purple-50 to-white rounded-2xl border border-purple-100">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-900">Notre Vision</h3>
                  <p className="text-purple-800 font-medium mb-4">
                    Le futur de l'e-commerce est conversationnel.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Dans quelques années, toutes les boutiques en ligne auront un agent IA commercial intégré, 
                    exactement comme chaque magasin physique a ses vendeurs. Nous voulons être parmi les pionniers 
                    de cette révolution.
                  </p>
                </div>

                {/* What Makes Us Unique */}
                <div className="text-center p-8 bg-gradient-to-b from-green-50 to-white rounded-2xl border border-green-100">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-900">Ce qui nous rend uniques</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Conçu pour l'Afrique :</strong> Léger, rapide, pensé pour les connexions mobiles</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Installation simple :</strong> 2 minutes suffisent</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Ton humain :</strong> Un agent qui comprend et s'adapte</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-6 md:px-12 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">L'équipe derrière ChatSeller</h2>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-600 mx-auto mb-6">
                  IN
                </div>
                <h3 className="text-2xl font-bold mb-2">Ibuka Ndjoli</h3>
                <p className="text-primary font-medium mb-4">Fondateur & CEO</p>
                <p className="text-gray-700 leading-relaxed">
                  Entrepreneur passionné basé au Sénégal, Ibuka a fondé Dukka avec la vision de révolutionner 
                  l'e-commerce en Afrique. Convaincu que l'intelligence artificielle peut démocratiser l'accès 
                  à des outils de vente sophistiqués pour tous les commerçants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Section */}
        <section className="py-20">
          <div className="container px-6 md:px-12 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Et demain ?</h2>
                <p className="text-lg text-gray-700">
                  Nous continuons à améliorer ChatSeller pour offrir la meilleure expérience possible à nos utilisateurs.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <Globe className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Intégrations natives</h3>
                  <p className="text-gray-700">
                    Des plugins officiels pour Shopify, WooCommerce, Wix et d'autres plateformes majeures.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <Users className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Nouvelles langues</h3>
                  <p className="text-gray-700">
                    Support étendu des langues locales africaines pour une expérience encore plus personnalisée.
                  </p>
                </div>
              </div>
              
              <div className="text-center bg-gradient-to-r from-primary/10 to-purple-100/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Prêt à transformer votre boutique ?</h3>
                <p className="text-gray-700 mb-6">
                  Rejoignez les centaines d'e-commerçants qui ont déjà choisi ChatSeller pour booster leurs ventes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="group">
                    <a href="https://dashboard.chatseller.app/register" className="flex items-center">
                      Essayer gratuitement
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg">
                    <a href="mailto:support@chatseller.app" className="flex items-center">
                      Nous contacter
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Brand */}
        <section className="py-12 bg-gray-50">
          <div className="container px-6 md:px-12 mx-auto">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-700">
                <span className="text-primary font-bold">ChatSeller</span>, développé en Afrique de l'Ouest avec ❤️ par l'équipe <span className="text-primary font-bold">Dukka</span>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                TEKKI GROUP • Ouest-Foire, Dakar - SÉNÉGAL
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;