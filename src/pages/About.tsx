// src/pages/About.tsx
import React from 'react';
import NewNavbar from '@/components/NewNavBar';
import Footer from '../components/Footer';
import {
  Heart,
  Target,
  Eye,
  Globe,
  ArrowRight,
  CheckCircle2,
  Store,
  Sparkles,
  Brain,
  TrendingUp,
  Lightbulb,
  ShoppingCart,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <NewNavbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-50/80 via-pink-50/50 to-white -z-10" />
          <div className="absolute top-1/4 right-1/3 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-br from-rose-200/30 to-pink-200/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-rose-200/15 rounded-full blur-2xl -z-10" />

          <div className="container px-4 sm:px-6 md:px-12 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-rose-200 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 text-sm font-semibold text-rose-700 animate-fade-in">
                <Sparkles className="w-4 h-4 mr-2" />
                {language === 'fr' ? "Qui est Mia ?" : "Who is Mia?"}
                <Heart className="w-4 h-4 ml-2" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 animate-fade-in [animation-delay:200ms] leading-tight">
                {language === 'fr' ? "Nous avons créé" : "We created"}
                <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent"> Mia</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 mb-8 animate-fade-in [animation-delay:400ms] leading-relaxed max-w-3xl mx-auto">
                {language === 'fr' ?
                  "Les marques beauté perdent des ventes chaque jour faute de conseils disponibles en ligne. Mia est née pour changer ça : une Vendeuse IA spécialisée beauté, disponible 24h/24, qui connaît vos produits sur le bout des doigts et convertit vos visiteurs en acheteurs." :
                  "Beauty brands lose sales every day due to lack of online advice. Mia was created to change that: a specialized beauty AI Salesperson, available 24/7, who knows your products inside out and converts your visitors into buyers."
                }
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto animate-fade-in [animation-delay:600ms]">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-rose-600">14</div>
                  <div className="text-sm text-gray-600 font-medium">
                    {language === 'fr' ? 'jours d\'essai gratuit' : 'days free trial'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">
                    {language === 'fr' ? 'Disponibilité' : 'Availability'}
                  </div>
                </div>
                <div className="text-center col-span-2 sm:col-span-1">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-600">+10</div>
                  <div className="text-sm text-gray-600 font-medium">
                    {language === 'fr' ? 'Marques convaincues' : 'Convinced brands'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-rose-50/30">
          <div className="container px-4 sm:px-6 md:px-12 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900">
                  {language === 'fr' ? "Comment Mia est née" : "How Mia was born"}
                </h2>

                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-100">
                  <div className="flex items-start space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Store className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl mb-3 text-gray-900">
                        {language === 'fr' ? "L'idée derrière Mia" : "The idea behind Mia"}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {language === 'fr' ?
                          "ChatSeller a été développé par Dukka pour aider les marques beauté à vendre en ligne. En travaillant avec nos premières marques partenaires, nous avons vite compris qu'une IA généraliste ne suffisait pas — il fallait une vraie experte beauté. Mia est née de ce constat." :
                          "ChatSeller was developed by Dukka to help beauty brands sell online. Working with our first partner brands, we quickly understood that a generalist AI wasn't enough — a real beauty expert was needed. Mia was born from this realization."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-rose-200 mb-6 sm:mb-8">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-rose-900 mb-3 text-base sm:text-lg">
                          {language === 'fr' ? "Le déclic" : "The turning point"}
                        </h4>
                        <blockquote className="text-rose-800 italic text-sm sm:text-base leading-relaxed">
                          {language === 'fr' ?
                            "\"Les marques beauté posaient des questions très pointues : sur les ingrédients, les types de peau, les routines... Une IA généraliste ne pouvait pas répondre avec l'expertise d'une vraie vendeuse beauté. Il fallait créer Mia.\"" :
                            "\"Beauty brands were asking very specific questions about ingredients, skin types, routines... A generalist AI couldn't respond with the expertise of a real beauty salesperson. We had to create Mia.\""
                          }
                        </blockquote>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 sm:p-6 border border-purple-200">
                      <div className="flex items-center mb-3">
                        <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mr-3" />
                        <h5 className="font-bold text-purple-900 text-sm sm:text-base">
                          {language === 'fr' ? "Le défi identifié" : "The identified challenge"}
                        </h5>
                      </div>
                      <p className="text-purple-700 text-sm leading-relaxed">
                        <em>
                          {language === 'fr' ?
                            "\"Les clients posent des questions très pointues : 'Ce sérum convient-il aux peaux sensibles avec de la rosacée ?' 'Puis-je l'associer à mes soins à la vitamine C ?' Mia répond avec l'expertise d'une vraie vendeuse beauté.\"" :
                            "\"Customers ask very specific questions: 'Is this serum suitable for sensitive skin with rosacea?' 'Can I combine it with my vitamin C treatments?' Mia responds with the expertise of a real beauty salesperson.\""
                          }
                        </em>
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 sm:p-6 border border-emerald-200">
                      <div className="flex items-center mb-3">
                        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 mr-3" />
                        <h5 className="font-bold text-emerald-900 text-sm sm:text-base">
                          {language === 'fr' ? "L'opportunité" : "The opportunity"}
                        </h5>
                      </div>
                      <p className="text-emerald-700 text-sm leading-relaxed">
                        <em>
                          {language === 'fr' ?
                            "\"Si on créait une Vendeuse IA qui maîtrise VRAIMENT la beauté — tous les ingrédients, tous les types de peau, toutes les routines — chaque marque pourrait vendre comme une boutique physique, 24h/24 !\"" :
                            "\"If we created an AI Salesperson who REALLY masters beauty — all ingredients, all skin types, all routines — every brand could sell like a physical store, 24/7!\""
                          }
                        </em>
                      </p>
                    </div>
                  </div>

                  <div className="text-center bg-gradient-to-r from-rose-100 via-pink-100 to-purple-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-rose-200">
                    <div className="flex items-center justify-center mb-3">
                      <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600 mr-3" />
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                        {language === 'fr' ? "La naissance de Mia" : "The birth of Mia"}
                      </h4>
                    </div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base leading-relaxed">
                      {language === 'fr' ?
                        "Nous avons créé Mia : une Vendeuse IA qui comprend les différents types de peau et cheveux, maîtrise les ingrédients, connaît les routines et sait conseiller chaque client avec précision. " :
                        "We created Mia: an AI Salesperson who understands different skin and hair types, masters ingredients, knows routines and advises each customer with precision. "}
                      <span className="text-rose-600 font-bold">
                        {language === 'fr' ?
                          "Pour que chaque marque beauté puisse recruter sa propre experte, disponible 24h/24." :
                          "So every beauty brand can recruit their own expert, available 24/7."
                        }
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 sm:py-20">
          <div className="container px-4 sm:px-6 md:px-12 mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                  {language === 'fr' ? "Pourquoi nous avons créé Mia" : "Why we created Mia"}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {language === 'fr' ?
                    "La raison d'être de Mia et ce qu'elle représente pour les marques beauté" :
                    "Mia's purpose and what she means for beauty brands"
                  }
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Mission */}
                <div className="text-center p-6 sm:p-8 bg-gradient-to-b from-rose-50 to-pink-50 rounded-2xl sm:rounded-3xl border border-rose-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-rose-900">
                    {language === 'fr' ? "Notre Mission" : "Our Mission"}
                  </h3>
                  <p className="text-rose-800 font-medium mb-4 text-sm sm:text-base">
                    {language === 'fr' ?
                      "\"Donner à chaque marque beauté sa propre Vendeuse IA experte.\"" :
                      "\"Give every beauty brand their own expert AI Salesperson.\""
                    }
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {language === 'fr' ?
                      "Permettre à chaque marque beauté, des startups aux grandes enseignes, de recruter Mia : une Vendeuse IA qui maîtrise leurs produits, conseille leurs clients et vend pour eux 24h/24. Parce que chaque client mérite des conseils beauté personnalisés." :
                      "Enable every beauty brand, from startups to major retailers, to recruit Mia: an AI Salesperson who masters their products, advises their customers and sells for them 24/7. Because every customer deserves personalized beauty advice."
                    }
                  </p>
                </div>

                {/* Vision */}
                <div className="text-center p-6 sm:p-8 bg-gradient-to-b from-purple-50 to-violet-50 rounded-2xl sm:rounded-3xl border border-purple-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-900">
                    {language === 'fr' ? "Notre Vision" : "Our Vision"}
                  </h3>
                  <p className="text-purple-800 font-medium mb-4 text-sm sm:text-base">
                    {language === 'fr' ?
                      "L'avenir de la beauté est conversationnel et expert." :
                      "The future of beauty is conversational and expert."
                    }
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {language === 'fr' ?
                      "D'ici 2028, chaque site beauté aura sa Mia — sa Vendeuse IA spécialisée — exactement comme chaque boutique physique a ses vendeuses. Nous construisons cette infrastructure pour les marques beauté du monde entier." :
                      "By 2028, every beauty site will have its Mia — its specialized AI Salesperson — just like every physical store has its salespeople. We're building this infrastructure for beauty brands worldwide."
                    }
                  </p>
                </div>

                {/* Spécialisation */}
                <div className="text-center p-6 sm:p-8 bg-gradient-to-b from-emerald-50 to-green-50 rounded-2xl sm:rounded-3xl border border-emerald-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-900">
                    {language === 'fr' ? "Notre Spécialisation" : "Our Specialization"}
                  </h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">
                        <strong>
                          {language === 'fr' ? "Expertise approfondie :" : "Deep expertise:"}
                        </strong>{" "}
                        {language === 'fr' ?
                          "Ingrédients cosmétiques et beauté africaine" :
                          "Cosmetic ingredients and African beauty"
                        }
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">
                        <strong>
                          {language === 'fr' ? "Personnalisation :" : "Personalization:"}
                        </strong>{" "}
                        {language === 'fr' ? "Différents types de peau et cheveux" : "Different skin and hair types"}
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">
                        <strong>
                          {language === 'fr' ? "Disponibilité :" : "Availability:"}
                        </strong>{" "}
                        {language === 'fr' ? "Vendeuse IA 24/7" : "AI Salesperson 24/7"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-rose-50/50 to-white">
          <div className="container px-4 sm:px-6 md:px-12 mx-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-900">
                {language === 'fr' ? "L'équipe qui a créé Mia" : "The team that created Mia"}
              </h2>

              <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                {/* Ibuka - CEO */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-100 text-center">
                  <img
                    src="/images/team/ibuka.webp"
                    alt="Ibuka - Fondateur & CEO"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto mb-4 shadow-lg border-2 border-rose-200"
                  />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">Ibuka</h3>
                  <p className="text-rose-600 font-semibold mb-4 text-sm sm:text-base">
                    {language === 'fr' ? "Fondateur & CEO" : "Founder & CEO"}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">
                    {language === 'fr' ?
                      "Entrepreneur passionné basé au Sénégal, Ibuka a fondé Dukka avec la vision de révolutionner la vente en ligne grâce à l'IA. Il a eu l'idée de Mia et pilote la stratégie de ChatSeller pour les marques beauté." :
                      "Passionate entrepreneur based in Senegal, Ibuka founded Dukka with the vision of revolutionizing online sales through AI. He conceived Mia and leads ChatSeller's strategy for beauty brands."
                    }
                  </p>
                </div>

                {/* Jeremie - CTO */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-purple-100 text-center">
                  <img
                    src="/images/team/jeremie.webp"
                    alt="Jeremie - CTO & Lead Dev"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto mb-4 shadow-lg border-2 border-purple-200"
                  />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">Jeremie</h3>
                  <p className="text-purple-600 font-semibold mb-4 text-sm sm:text-base">
                    {language === 'fr' ? "CTO & Lead Dev" : "CTO & Lead Dev"}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">
                    {language === 'fr' ?
                      "Expert en IA et développement logiciel, Jeremie a conçu et construit Mia de A à Z. Il s'assure qu'elle soit toujours plus performante, plus précise, et qu'elle offre une expérience fluide à chaque client." :
                      "Expert in AI and software development, Jeremie designed and built Mia from scratch. He ensures she's always more performant, more precise, and delivers a smooth experience to every customer."
                    }
                  </p>
                </div>

                {/* Yacine - CMO */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 text-center">
                  <img
                    src="/images/team/julia.webp"
                    alt="Yacine - CMO"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto mb-4 shadow-lg border-2 border-emerald-200"
                  />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">Yacine</h3>
                  <p className="text-emerald-600 font-semibold mb-4 text-sm sm:text-base">
                    {language === 'fr' ? "CMO" : "CMO"}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">
                    {language === 'fr' ?
                      "Spécialiste du marketing digital et de la beauté, Yacine a façonné la personnalité et l'expertise beauté de Mia. Elle accompagne nos marques partenaires dans leur croissance et les aide à tirer le meilleur de leur Vendeuse IA." :
                      "Digital marketing and beauty specialist, Yacine shaped Mia's personality and beauty expertise. She supports our partner brands in their growth and helps them get the most out of their AI Salesperson."
                    }
                  </p>
                </div>
              </div>

              {/* Quote section */}
              <div className="mt-12 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-rose-200 max-w-3xl mx-auto">
                <p className="text-rose-700 font-medium text-center text-sm sm:text-base italic">
                  {language === 'fr' ?
                    "\"Nous avons créé Mia parce que la beauté est un secteur où l'expertise et le conseil personnalisé font toute la différence. Chaque client est unique, ses besoins beauté aussi. Mia s'en souvient à chaque conversation.\"" :
                    "\"We created Mia because beauty is a sector where expertise and personalized advice make all the difference. Every customer is unique, and so are their beauty needs. Mia remembers that in every conversation.\""
                  }
                </p>
                <p className="text-rose-600 font-semibold text-center mt-3 text-sm">
                  — Ibuka Ndjoli, {language === 'fr' ? "Fondateur" : "Founder"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future plans */}
        <section className="py-16 sm:py-20">
          <div className="container px-4 sm:px-6 md:px-12 mx-auto">
            <div className="max-w-5xl mx-auto">

              <div className="mb-12 sm:mb-16">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900">
                  {language === 'fr' ? "Ce que Mia va devenir" : "What Mia is becoming"}
                </h3>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-rose-100">
                    <div className="flex items-center mb-4">
                      <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600 mr-3" />
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                        {language === 'fr' ? "Mia parle plus de langues" : "Mia speaks more languages"}
                      </h4>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {language === 'fr' ?
                        "Mia parle déjà français et anglais. Demain, elle parlera wolof, arabe, swahili et d'autres langues africaines — pour que chaque marque puisse recruter une Vendeuse IA qui parle la langue de ses clients." :
                        "Mia already speaks French and English. Tomorrow, she'll speak Wolof, Arabic, Swahili and more — so every brand can recruit an AI Salesperson who speaks their customers' language."
                      }
                    </p>
                  </div>

                  <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-purple-100">
                    <div className="flex items-center mb-4">
                      <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mr-3" />
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                        {language === 'fr' ? "Mia devient encore plus experte" : "Mia becomes even more expert"}
                      </h4>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {language === 'fr' ?
                        "Mia apprend en continu : analyse visuelle des problèmes de peau, routines ultra-personnalisées, maîtrise approfondie des ingrédients locaux africains (karité, baobab, touloucouna...). Plus vous la recrutez tôt, plus elle sera experte pour votre marque." :
                        "Mia learns continuously: visual skin analysis, ultra-personalized routines, deep mastery of local African ingredients (shea, baobab, touloucouna...). The earlier you recruit her, the more expert she becomes for your brand."
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Final */}
              <div className="text-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-xl">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                    {language === 'fr' ? "Prêt à recruter Mia ?" : "Ready to hire Mia?"}
                  </h3>
                  <p className="text-gray-700 mb-6 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    {language === 'fr' ?
                      "Elle apprend vos produits, conseille vos clients et vend pour vous 24h/24 — sans congés, sans charges, sans mauvaises surprises." :
                      "She learns your products, advises your customers and sells for you 24/7 — no vacation, no overhead, no surprises."
                    }
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Button size="lg" className="group bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <a href="https://dashboard.chatseller.app/register" className="flex items-center">
                      <Sparkles className="w-5 h-5 mr-2" />
                      {language === 'fr' ? "Recruter Mia — 14 jours gratuits" : "Hire Mia — 14 days free"}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>

                  <Button variant="outline" size="lg" className="border-2 border-purple-300 hover:border-purple-400 hover:bg-purple-50 text-purple-700" asChild>
                    <a href="https://cal.com/chatseller/demo-beaute" className="flex items-center">
                      <Heart className="w-5 h-5 mr-2" />
                      {language === 'fr' ? "Voir une démo" : "See a demo"}
                    </a>
                  </Button>
                </div>

                <div className="flex items-center justify-center mt-6 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  <span className="font-medium">
                    {language === 'fr' ?
                      "+10 marques beauté ont déjà recruté Mia" :
                      "10+ beauty brands have already hired Mia"
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
