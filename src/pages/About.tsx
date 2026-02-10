// src/pages/About.tsx 
import React from 'react';
import NewNavbar from '@/components/NewNavBar';
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
  Store,
  Sparkles,
  Brain,
  TrendingUp,
  Lightbulb,
  Award,
  ShoppingCart,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <NewNavbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section - Thème Beauté */}
        <section className="py-20 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-50/80 via-pink-50/50 to-white -z-10" />
          <div className="absolute top-1/4 right-1/3 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-br from-rose-200/30 to-pink-200/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-rose-200/15 rounded-full blur-2xl -z-10" />
          
          <div className="container px-4 sm:px-6 md:px-12 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-rose-200 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 text-sm font-semibold text-rose-700 animate-fade-in">
                <Heart className="w-4 h-4 mr-2" />
                {language === 'fr' ? "Les Agents IA spécialisés des marques beauté" : "The specialized AI Agents for beauty brands"}
                <Sparkles className="w-4 h-4 ml-2" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 animate-fade-in [animation-delay:200ms] leading-tight">
                {language === 'fr' ? "À Propos de" : "About"}
                <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent"> ChatSeller</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-700 mb-8 animate-fade-in [animation-delay:400ms] leading-relaxed max-w-3xl mx-auto">
                {language === 'fr' ? 
                  "Nous croyons que chaque marque beauté mérite d'avoir sa propre Vendeuse IA experte, capable de guider et convertir ses clientes 24/7 comme le ferait la meilleure esthéticienne en institut." :
                  "We believe every beauty brand deserves to have its own expert AI Salesperson, capable of guiding and converting customers 24/7 just like the best beautician in a salon would."
                }
              </p>
              
              {/* Stats beauté */}
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
                    {language === 'fr' ? 'Marques bêta' : 'Beta brands'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Origin Story - Version beauté */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-rose-50/30">
          <div className="container px-4 sm:px-6 md:px-12 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900">
                  {language === 'fr' ? "Comment ChatSeller s'est spécialisé dans la beauté" : "How ChatSeller specialized in beauty"}
                </h2>
                
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-100">
                  <div className="flex items-start space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Store className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl mb-3 text-gray-900">
                        {language === 'fr' ? "L'histoire de notre pivot beauté" : "The story of our beauty pivot"}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {language === 'fr' ? 
                          "ChatSeller a été initialement développé par Dukka comme une solution d'IA conversationnelle généraliste pour l'e-commerce. Mais en échangeant avec nos premiers utilisateurs, nous avons découvert quelque chose de fascinant..." :
                          "ChatSeller was initially developed by Dukka as a generalist conversational AI solution for e-commerce. But by talking with our first users, we discovered something fascinating..."
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-rose-200 mb-6 sm:mb-8">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-rose-900 mb-3 text-base sm:text-lg">
                          {language === 'fr' ? "La révélation beauté" : "The beauty revelation"}
                        </h4>
                        <blockquote className="text-rose-800 italic text-sm sm:text-base leading-relaxed">
                          {language === 'fr' ?
                            "\"Les marques beauté étaient celles qui obtenaient les MEILLEURS résultats avec ChatSeller. Elles avaient des questions très spécifiques sur les ingrédients, les types de peau, les routines... Et notre IA généraliste ne pouvait pas rivaliser avec l'expertise d'une vraie conseillère beauté.\"" :
                            "\"Beauty brands were the ones getting the BEST results with ChatSeller. They had very specific questions about ingredients, skin types, routines... And our generalist AI couldn't compete with the expertise of a real beauty advisor.\""
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
                            "\"Nos clientes ont des questions très pointues : 'Ce sérum convient-il aux peaux sensibles avec de la rosacée ?' 'Puis-je l'associer à mes soins à la vitamine C ?' Une IA généraliste ne peut pas répondre avec cette expertise.\"" :
                            "\"Our customers have very specific questions: 'Is this serum suitable for sensitive skin with rosacea?' 'Can I combine it with my vitamin C treatments?' A generalist AI can't respond with this expertise.\""
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
                            "\"Si on créait une IA qui maîtrise VRAIMENT la beauté - tous les ingrédients, tous les types de peau, toutes les routines - on pourrait révolutionner l'expérience d'achat beauté en ligne !\"" :
                            "\"If we created an AI that REALLY masters beauty - all ingredients, all skin types, all routines - we could revolutionize the online beauty shopping experience!\""
                          }
                        </em>
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center bg-gradient-to-r from-rose-100 via-pink-100 to-purple-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-rose-200">
                    <div className="flex items-center justify-center mb-3">
                      <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600 mr-3" />
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                        {language === 'fr' ? "Naissance de ChatSeller Beauté" : "Birth of ChatSeller Beauty"}
                      </h4>
                    </div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base leading-relaxed">
                      {language === 'fr' ?
                        "C'est ainsi qu'est née notre spécialisation : une Vendeuse IA qui comprend les différents types de peau et cheveux, et sait créer des routines beauté personnalisées adaptées aux besoins spécifiques de chaque cliente. " :
                        "This is how our specialization was born: an AI Salesperson who understands different skin and hair types, and knows how to create personalized beauty routines adapted to each customer's specific needs. "}
                      <span className="text-rose-600 font-bold">
                        {language === 'fr' ?
                          "Pour que chaque marque beauté puisse offrir l'expertise d'une conseillère qualifiée, 24h/24." :
                          "So every beauty brand can offer the expertise of a qualified advisor, 24/7."
                        }
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values - Version beauté */}
        <section className="py-16 sm:py-20">
          <div className="container px-4 sm:px-6 md:px-12 mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                  {language === 'fr' ? "Notre mission" : "Our mission"}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {language === 'fr' ? 
                    "Transformer l'expérience d'achat beauté en ligne grâce à l'expertise IA" :
                    "Transform the online beauty shopping experience through AI expertise"
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
                      "\"Démocratiser l'expertise beauté pour toutes les marques.\"" :
                      "\"Democratize beauty expertise for all brands.\""
                    }
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {language === 'fr' ? 
                      "Permettre à chaque marque beauté, des startups aux grandes enseignes, d'offrir à leurs clientes le niveau de conseil d'une esthéticienne experte diplômée. Parce que chaque femme mérite des conseils beauté personnalisés." :
                      "Enable every beauty brand, from startups to major retailers, to offer their customers the level of advice of an expert certified beautician. Because every woman deserves personalized beauty advice."
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
                      "D'ici 2028, chaque site beauté aura sa Vendeuse IA spécialisée, exactement comme chaque institut a ses esthéticiennes. Nous serons le leader africain de cette transformation." :
                      "By 2028, every beauty site will have its specialized AI Salesperson, just like every salon has its beauticians. We will be the African leader of this transformation."
                    }
                  </p>
                </div>

                {/* Spécialisation beauté */}
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

        {/* Team Section - Adapté beauté */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-rose-50/50 to-white">
          <div className="container px-4 sm:px-6 md:px-12 mx-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-900">
                {language === 'fr' ? "L'équipe derrière ChatSeller" : "The team behind ChatSeller"}
              </h2>

              <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                {/* Ibuka - CEO */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-100 text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-rose-600 mx-auto mb-4 shadow-lg">
                    IN
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">Ibuka</h3>
                  <p className="text-rose-600 font-semibold mb-4 text-sm sm:text-base">
                    {language === 'fr' ? "Fondateur & CEO" : "Founder & CEO"}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">
                    {language === 'fr' ?
                      "Entrepreneur passionné basé au Sénégal, Ibuka a fondé Dukka avec la vision de révolutionner l'e-commerce grâce à l'IA. Il pilote la stratégie et le développement de ChatSeller pour les marques beauté africaines." :
                      "Passionate entrepreneur based in Senegal, Ibuka founded Dukka with the vision of revolutionizing e-commerce through AI. He leads the strategy and development of ChatSeller for African beauty brands."
                    }
                  </p>
                </div>

                {/* Julia - CTO */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-purple-100 text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-100 via-violet-100 to-indigo-100 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-purple-600 mx-auto mb-4 shadow-lg">
                    JT
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">Julia</h3>
                  <p className="text-purple-600 font-semibold mb-4 text-sm sm:text-base">
                    {language === 'fr' ? "CTO & Lead Dev" : "CTO & Lead Dev"}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">
                    {language === 'fr' ?
                      "Experte en IA et développement logiciel, Julia conçoit et maintient l'architecture technique de ChatSeller. Elle s'assure que notre Vendeuse IA offre des performances optimales et une expérience fluide à chaque interaction." :
                      "Expert in AI and software development, Julia designs and maintains ChatSeller's technical architecture. She ensures our AI Salesperson delivers optimal performance and a smooth experience with every interaction."
                    }
                  </p>
                </div>

                {/* David - CMO */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-emerald-600 mx-auto mb-4 shadow-lg">
                    DM
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">David</h3>
                  <p className="text-emerald-600 font-semibold mb-4 text-sm sm:text-base">
                    {language === 'fr' ? "CMO" : "CMO"}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">
                    {language === 'fr' ?
                      "Spécialiste du marketing digital et de la beauté, David comprend les enjeux des marques africaines. Il accompagne nos clients dans leur croissance et développe notre présence auprès des marques beauté sur le continent." :
                      "Digital marketing and beauty specialist, David understands the challenges of African brands. He supports our clients' growth and develops our presence among beauty brands across the continent."
                    }
                  </p>
                </div>
              </div>

              {/* Quote section */}
              <div className="mt-12 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-rose-200 max-w-3xl mx-auto">
                <p className="text-rose-700 font-medium text-center text-sm sm:text-base italic">
                  {language === 'fr' ?
                    "\"Nous avons choisi de nous spécialiser dans la beauté car c'est un secteur où l'expertise et le conseil personnalisé font toute la différence. Chaque femme est unique, ses besoins beauté aussi.\"" :
                    "\"We chose to specialize in beauty because it's a sector where expertise and personalized advice make all the difference. Every woman is unique, so are her beauty needs.\""
                  }
                </p>
                <p className="text-rose-600 font-semibold text-center mt-3 text-sm">
                  — Ibuka Ndjoli, {language === 'fr' ? "Fondateur" : "Founder"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Future - Beauté */}
        <section className="py-16 sm:py-20">
          <div className="container px-4 sm:px-6 md:px-12 mx-auto">
            <div className="max-w-5xl mx-auto">
              
              {/* Achievements */}
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                  {language === 'fr' ? "Nos réalisations" : "Our achievements"}
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  {language === 'fr' ? 
                    "ChatSeller transforme l'expérience d'achat des clientes des marques beauté" :
                    "ChatSeller transforms the shopping experience for beauty brand customers"
                  }
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
                <div className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-rose-100">
                  <div className="text-2xl sm:text-3xl font-bold text-rose-600 mb-2">+10</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {language === 'fr' ? 'Marques bêta' : 'Beta brands'}
                  </div>
                </div>

                <div className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-purple-100">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">14</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {language === 'fr' ? 'jours d\'essai gratuit' : 'days free trial'}
                  </div>
                </div>

                <div className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-2">2</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {language === 'fr' ? 'pays (Sénégal, CI)' : 'countries (Senegal, CI)'}
                  </div>
                </div>

                <div className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-blue-100">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {language === 'fr' ? 'Disponibilité' : 'Availability'}
                  </div>
                </div>
              </div>
              
              {/* Future plans */}
              <div className="mb-12 sm:mb-16">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900">
                  {language === 'fr' ? "L'avenir de ChatSeller" : "The future of ChatSeller"}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-rose-100">
                    <div className="flex items-center mb-4">
                      <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600 mr-3" />
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                        {language === 'fr' ? "Expansion africaine" : "African expansion"}
                      </h4>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {language === 'fr' ?
                        "Après notre lancement au Sénégal et en Côte d'Ivoire, nous étendons ChatSeller dans toute l'Afrique francophone puis anglophone, en nous adaptant aux spécificités locales de chaque marché beauté." :
                        "After our launch in Senegal and Ivory Coast, we're expanding ChatSeller across French-speaking then English-speaking Africa, adapting to the local specificities of each beauty market."
                      }
                    </p>
                  </div>

                  <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-purple-100">
                    <div className="flex items-center mb-4">
                      <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mr-3" />
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                        {language === 'fr' ? "IA beauté avancée" : "Advanced beauty AI"}
                      </h4>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {language === 'fr' ?
                        "Analyse visuelle des problèmes de peau, recommandations de routines personnalisées, expertise approfondie sur les ingrédients locaux africains (karité, baobab, touloucouna...)." :
                        "Visual analysis of skin problems, personalized routine recommendations, deep expertise on local African ingredients (shea butter, baobab, touloucouna...)."
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
                    {language === 'fr' ? "Prêt à transformer votre marque beauté ?" : "Ready to transform your beauty brand?"}
                  </h3>
                  <p className="text-gray-700 mb-6 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    {language === 'fr' ? 
                      "Rejoignez les marques beauté qui ont choisi ChatSeller pour offrir l'expertise d'une Vendeuse IA à leurs clientes et booster leurs conversions." :
                      "Join the beauty brands that chose ChatSeller to offer AI Salesperson expertise to their customers and boost their conversions."
                    }
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Button size="lg" className="group bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <a href="https://dashboard.chatseller.app/register" className="flex items-center">
                      <Sparkles className="w-5 h-5 mr-2" />
                      {language === 'fr' ? "Essai gratuit 14 jours" : "14-day free trial"}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="border-2 border-purple-300 hover:border-purple-400 hover:bg-purple-50 text-purple-700" asChild>
                    <a href="mailto:support@chatseller.app" className="flex items-center">
                      <Heart className="w-5 h-5 mr-2" />
                      {language === 'fr' ? "Parler à un expert" : "Talk to an expert"}
                    </a>
                  </Button>
                </div>
                
                <div className="flex items-center justify-center mt-6 text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="font-medium">
                    {language === 'fr' ?
                      "Programme bêta : +10 marques beauté convaincues en Afrique" :
                      "Beta program: 10+ beauty brands convinced in Africa"
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