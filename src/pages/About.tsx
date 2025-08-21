// src/pages/About.tsx - AVEC TRADUCTIONS COMPLÈTES
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
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

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
                {language === 'fr' ? "Développé en Afrique de l'Ouest avec ❤️" : "Developed in West Africa with ❤️"}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
                {language === 'fr' ? "À Propos de" : "About"}
                <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> ChatSeller</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 animate-fade-in [animation-delay:400ms]">
                {language === 'fr' ? 
                  "Nous croyons qu'un site e-commerce ne devrait pas être une simple vitrine silencieuse. Une boutique en ligne doit savoir parler, rassurer, convaincre, vendre — comme un vrai vendeur professionnel, mais sans limite d'horaires." :
                  "We believe an e-commerce site should not be just a silent showcase. An online store must know how to talk, reassure, convince, sell — like a real professional salesperson, but without time limits."
                }
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-6 md:px-12 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  {language === 'fr' ? "D'où est né ChatSeller ?" : "Where was ChatSeller born?"}
                </h2>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Store className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {language === 'fr' ? "L'histoire de Dukka" : "The story of Dukka"}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {language === 'fr' ? 
                          "ChatSeller est une solution développée par Dukka, une startup africaine fondée par Ibuka Ndjoli. Avant ChatSeller, nous travaillions sur une plateforme e-commerce conversationnelle complète : la meilleure alternative à Shopify en Afrique." :
                          "ChatSeller is a solution developed by Dukka, an African startup founded by Ibuka Ndjoli. Before ChatSeller, we were working on a complete conversational e-commerce platform: the best alternative to Shopify in Africa."
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-900 mb-3">
                      {language === 'fr' ? "La révélation" : "The revelation"}
                    </h4>
                    <blockquote className="text-blue-800 italic">
                      {language === 'fr' ? 
                        "\"En discutant avec des e-commerçants, nous avons compris qu'il leur était difficile de quitter leur site e-commerce actuel pour en tester un nouveau, aussi innovant soit-il. Ceci dit, l'idée d'avoir un vendeur IA capable d'augmenter la conversion de leurs sites leur plaisait beaucoup.\"" :
                        "\"In talking with e-merchants, we understood that it was difficult for them to leave their current e-commerce site to test a new one, however innovative it might be. That said, they really liked the idea of having an AI seller capable of increasing the conversion of their sites.\""
                      }
                    </blockquote>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-green-800 font-medium">
                          {language === 'fr' ? "Le problème identifié :" : "The identified problem:"}
                        </p>
                        <p className="text-green-700 mt-1">
                          <em>
                            {language === 'fr' ? 
                              "\"On a déjà une boutique en ligne que nous aimons, mais notre problème est la conversion. Nous attirons beaucoup de visiteurs mais faisons peu de ventes.\"" :
                              "\"We already have an online store that we love, but our problem is conversion. We attract many visitors but make few sales.\""
                            }
                          </em>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-lg font-medium text-gray-900">
                      {language === 'fr' ? 
                        "C'est à partir de cette frustration partagée que ChatSeller est né : un Agent IA Commercial prêt à l'emploi, capable de s'intégrer facilement à n'importe quelle boutique en ligne existante." :
                        "It was from this shared frustration that ChatSeller was born: a ready-to-use AI Sales Agent, capable of easily integrating with any existing online store."
                      }
                      <span className="text-primary"> ChatSeller</span>
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
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    {language === 'fr' ? "Notre Mission" : "Our Mission"}
                  </h3>
                  <p className="text-blue-800 font-medium mb-4">
                    {language === 'fr' ? 
                      "\"Transformer les sites e-commerce en expériences de vente humaines.\"" :
                      "\"Transform e-commerce websites into human-like sales experiences.\""
                    }
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'fr' ? 
                      "Rendre chaque site e-commerce capable de vendre comme un vrai vendeur humain. Donner aux petits et moyens commerçants, en Afrique et ailleurs, le même niveau d'expérience client que les plus grandes marques." :
                      "Make every e-commerce site capable of selling like a real human salesperson. Give small and medium merchants, in Africa and beyond, the same level of customer experience as the biggest brands."
                    }
                  </p>
                </div>

                {/* Vision */}
                <div className="text-center p-8 bg-gradient-to-b from-purple-50 to-white rounded-2xl border border-purple-100">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-900">
                    {language === 'fr' ? "Notre Vision" : "Our Vision"}
                  </h3>
                  <p className="text-purple-800 font-medium mb-4">
                    {language === 'fr' ? 
                      "Le futur de l'e-commerce est conversationnel." :
                      "The future of e-commerce is conversational."
                    }
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'fr' ? 
                      "Dans quelques années, toutes les boutiques en ligne auront un agent IA commercial intégré, exactement comme chaque magasin physique a ses vendeurs. Nous voulons être parmi les pionniers de cette révolution." :
                      "In a few years, all online stores will have an integrated AI sales agent, just like every physical store has its salespeople. We want to be among the pioneers of this revolution."
                    }
                  </p>
                </div>

                {/* What Makes Us Unique */}
                <div className="text-center p-8 bg-gradient-to-b from-green-50 to-white rounded-2xl border border-green-100">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-900">
                    {language === 'fr' ? "Ce qui nous rend uniques" : "What makes us unique"}
                  </h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <strong>
                          {language === 'fr' ? "Conçu pour l'Afrique :" : "Designed for Africa:"}
                        </strong>{" "}
                        {language === 'fr' ? 
                          "Léger, rapide, pensé pour les connexions mobiles" :
                          "Lightweight, fast, designed for mobile connections"
                        }
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <strong>
                          {language === 'fr' ? "Installation simple :" : "Simple installation:"}
                        </strong>{" "}
                        {language === 'fr' ? "2 minutes suffisent" : "2 minutes is enough"}
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <strong>
                          {language === 'fr' ? "Ton humain :" : "Human tone:"}
                        </strong>{" "}
                        {language === 'fr' ? 
                          "Un agent qui comprend et s'adapte" :
                          "An agent that understands and adapts"
                        }
                      </span>
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
              <h2 className="text-3xl font-bold mb-8">
                {language === 'fr' ? "L'équipe derrière ChatSeller" : "The team behind ChatSeller"}
              </h2>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-600 mx-auto mb-6">
                  IN
                </div>
                <h3 className="text-2xl font-bold mb-2">Ibuka Ndjoli</h3>
                <p className="text-primary font-medium mb-4">
                  {language === 'fr' ? "Fondateur & CEO" : "Founder & CEO"}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'fr' ? 
                    "Entrepreneur passionné basé au Sénégal, Ibuka a fondé Dukka avec la vision de révolutionner l'e-commerce en Afrique. Convaincu que l'intelligence artificielle peut démocratiser l'accès à des outils de vente sophistiqués pour tous les commerçants." :
                    "Passionate entrepreneur based in Senegal, Ibuka founded Dukka with the vision of revolutionizing e-commerce in Africa. Convinced that artificial intelligence can democratize access to sophisticated sales tools for all merchants."
                  }
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
                <h2 className="text-3xl font-bold mb-6">
                  {language === 'fr' ? "Et demain ?" : "And tomorrow?"}
                </h2>
                <p className="text-lg text-gray-700">
                  {language === 'fr' ? 
                    "Nous continuons à améliorer ChatSeller pour offrir la meilleure expérience possible à nos utilisateurs." :
                    "We continue to improve ChatSeller to offer the best possible experience to our users."
                  }
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <Globe className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    {language === 'fr' ? "Intégrations natives" : "Native integrations"}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'fr' ? 
                      "Des plugins officiels pour Shopify, WooCommerce, Wix et d'autres plateformes majeures." :
                      "Official plugins for Shopify, WooCommerce, Wix and other major platforms."
                    }
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <Users className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    {language === 'fr' ? "Nouvelles langues" : "New languages"}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'fr' ? 
                      "Support étendu des langues locales africaines pour une expérience encore plus personnalisée." :
                      "Extended support for local African languages for an even more personalized experience."
                    }
                  </p>
                </div>
              </div>
              
              <div className="text-center bg-gradient-to-r from-primary/10 to-purple-100/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'fr' ? "Prêt à transformer votre boutique ?" : "Ready to transform your store?"}
                </h3>
                <p className="text-gray-700 mb-6">
                  {language === 'fr' ? 
                    "Rejoignez les centaines d'e-commerçants qui ont déjà choisi ChatSeller pour booster leurs ventes." :
                    "Join the hundreds of e-merchants who have already chosen ChatSeller to boost their sales."
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="group">
                    <a href="https://dashboard.chatseller.app/register" className="flex items-center">
                      {language === 'fr' ? "Essayer gratuitement" : "Try for free"}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg">
                    <a href="mailto:support@chatseller.app" className="flex items-center">
                      {language === 'fr' ? "Nous contacter" : "Contact us"}
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
                <span className="text-primary font-bold">ChatSeller</span>, 
                {language === 'fr' ? 
                  " développé en Afrique de l'Ouest avec ❤️ par l'équipe " :
                  " developed in West Africa with ❤️ by the team "
                }
                <span className="text-primary font-bold">Dukka</span>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {language === 'fr' ? 
                  "TEKKI GROUP • Ouest-Foire, Dakar - SÉNÉGAL" :
                  "TEKKI GROUP • Ouest-Foire, Dakar - SENEGAL"
                }
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