// src/pages/Terms.tsx 
import React from 'react';
import NewNavbar from '@/components/NewNavBar';
import Footer from '../components/Footer';
import { 
  FileText, 
  Clock, 
  Shield, 
  CreditCard, 
  CheckCircle2, 
  AlertCircle,
  RefreshCw,
  Mail,
  Scale,
  Heart,
  Sparkles,
  ShoppingBag,
  Users
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';


const Terms = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <NewNavbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section - Adaptée Beauté */}
        <section className="py-20 bg-gradient-to-b from-rose-50/60 via-pink-50/30 to-white relative overflow-hidden">
          {/* Decorative elements beauté */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-rose-200/20 to-pink-200/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-rose-200/10 rounded-full blur-2xl -z-10" />
          
          <div className="container px-6 md:px-12 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 mb-8 border border-rose-200 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 text-sm font-semibold text-rose-700">
                <FileText className="w-4 h-4 mr-2" />
                {language === 'fr' ? "Conditions d'utilisation" : "Terms of Service"}
                <Heart className="w-4 h-4 ml-2" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                {language === 'fr' ? "Conditions Générales" : "Terms of"}
                <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent ml-2">
                  {language === 'fr' ? "d'Utilisation" : "Service"}
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {language === 'fr' ? 
                  "Les conditions qui régissent l'utilisation de ChatSeller, votre conseillère IA spécialisée pour marques beauté." :
                  "The terms that govern the use of ChatSeller, your specialized AI advisor for beauty brands."
                }
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-rose-100 max-w-3xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-rose-500" />
                      <span className="font-medium">
                        {language === 'fr' ? "Dernière mise à jour" : "Last updated"}
                      </span>
                    </div>
                    <span className="text-gray-800 font-semibold">
                      {language === 'fr' ? "1er septembre 2025" : "September 1st, 2025"}
                    </span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Scale className="w-4 h-4 mr-2 text-rose-500" />
                      <span className="font-medium">
                        {language === 'fr' ? "Droit applicable" : "Applicable law"}
                      </span>
                    </div>
                    <span className="text-gray-800 font-semibold">
                      {language === 'fr' ? "Droit français" : "French law"}
                    </span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-rose-500" />
                      <span className="font-medium">
                        {language === 'fr' ? "Secteur ciblé" : "Target sector"}
                      </span>
                    </div>
                    <span className="text-gray-800 font-semibold">
                      {language === 'fr' ? "Marques beauté" : "Beauty brands"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container px-6 md:px-12 mx-auto">
            <div className="max-w-4xl mx-auto">
              
              {/* 1. Informations générales - Adaptées Beauté */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                  <Sparkles className="w-8 h-8 text-rose-500 mr-3" />
                  {language === 'fr' ? "1. À propos de ChatSeller" : "1. About ChatSeller"}
                </h2>
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-200">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                          <Heart className="w-5 h-5 text-rose-500 mr-2" />
                          {language === 'fr' ? "Service spécialisé" : "Specialized service"}
                        </h3>
                        <p className="text-gray-700">
                          {language === 'fr' ? 
                            "ChatSeller - Conseillère IA beauté experte pour marques cosmétiques, parfums, soins et maquillage" :
                            "ChatSeller - Expert beauty AI advisor for cosmetics, fragrance, skincare and makeup brands"
                          }
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          {language === 'fr' ? "Développé par Dukka" : "Developed by Dukka"}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                          <ShoppingBag className="w-5 h-5 text-rose-500 mr-2" />
                          {language === 'fr' ? "Public ciblé" : "Target audience"}
                        </h3>
                        <div className="space-y-2 text-gray-700">
                          <div className="flex items-center">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                            <span>{language === 'fr' ? "Marques beauté en Afrique" : "Beauty brands in Africa"}</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                            <span>{language === 'fr' ? "E-commerces Shopify et WooCommerce" : "Shopify and WooCommerce e-commerce"}</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                            <span>{language === 'fr' ? "Secteurs : skincare, maquillage, parfums, soins capillaires" : "Sectors: skincare, makeup, fragrances, hair care"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">
                          {language === 'fr' ? "Exploitant du service" : "Service operator"}
                        </h3>
                        <div className="space-y-2 text-gray-700">
                          <p><strong>DUKKA</strong></p>
                          <p>Ouest-Foire, Dakar</p>
                          <p><strong>{language === 'fr' ? "SÉNÉGAL" : "SENEGAL"}</strong></p>
                          <p className="pt-2">
                            <strong>Contact :</strong>{' '}
                            <a href="mailto:support@chatseller.app" className="text-rose-600 hover:text-rose-700 underline">
                              support@chatseller.app
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">
                          {language === 'fr' ? "Juridiction" : "Jurisdiction"}
                        </h3>
                        <div className="space-y-1 text-gray-700">
                          <p><strong>{language === 'fr' ? "Droit applicable :" : "Applicable law:"}</strong> {language === 'fr' ? "Droit sénégalais" : "Senegalese law"}</p>
                          <p><strong>{language === 'fr' ? "Tribunaux compétents :" : "Competent courts:"}</strong> {language === 'fr' ? "Dakar, Sénégal" : "Dakar, Senegal"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Description du service - Spécialisée beauté */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">
                  {language === 'fr' ? "2. Service ChatSeller pour marques beauté" : "2. ChatSeller service for beauty brands"}
                </h2>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {language === 'fr' ? 
                      "ChatSeller est une solution SaaS spécialement conçue pour les marques beauté qui souhaitent offrir une expérience conseil premium à leurs clientes en ligne, similaire à celle des meilleures boutiques physiques." :
                      "ChatSeller is a SaaS solution specifically designed for beauty brands that want to offer a premium advisory experience to their customers online, similar to that of the best physical stores."
                    }
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <Sparkles className="w-5 h-5 text-purple-500 mr-2" />
                        {language === 'fr' ? "Expertise beauté avancée" : "Advanced beauty expertise"}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {language === 'fr' ? "Expertise beauté africaine et ingrédients locaux" : "African beauty expertise and local ingredients"}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {language === 'fr' ? "Diagnostic précis des types de peau et cheveux" : "Accurate skin and hair type diagnosis"}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {language === 'fr' ? "Recommandations routines personnalisées" : "Personalized routine recommendations"}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {language === 'fr' ? "Connaissance des contre-indications" : "Knowledge of contraindications"}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <Heart className="w-5 h-5 text-rose-500 mr-2" />
                        {language === 'fr' ? "Conversion & ventes" : "Conversion & sales"}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {language === 'fr' ? "Upsell intelligent et contextuel" : "Smart and contextual upselling"}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {language === 'fr' ? "Collecte de commandes naturelle" : "Natural order collection"}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {language === 'fr' ? "Analytics et ROI mesurables" : "Measurable analytics and ROI"}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {language === 'fr' ? "Support Shopify et WooCommerce natif" : "Native Shopify and WooCommerce support"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
                    <h4 className="font-bold text-emerald-800 mb-3 flex items-center">
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      {language === 'fr' ? "Avantages clés" : "Key benefits"}
                    </h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-emerald-700">24/7</div>
                        <div className="text-xs text-emerald-600 font-medium">
                          {language === 'fr' ? "Disponibilité" : "Availability"}
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-emerald-700">14 jours</div>
                        <div className="text-xs text-emerald-600 font-medium">
                          {language === 'fr' ? "Essai gratuit" : "Free trial"}
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-emerald-700">+10</div>
                        <div className="text-xs text-emerald-600 font-medium">
                          {language === 'fr' ? "Marques bêta" : "Beta brands"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Conditions d'accès - Spécifiques beauté */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">
                  {language === 'fr' ? "3. Conditions d'accès pour marques beauté" : "3. Access conditions for beauty brands"}
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                    <h3 className="text-2xl font-bold mb-6 text-blue-900 flex items-center">
                      <Shield className="w-6 h-6 mr-3" />
                      {language === 'fr' ? "Essai gratuit spécial beauté" : "Special beauty free trial"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="text-blue-800">
                            <strong>{language === 'fr' ? "Durée :" : "Duration:"}</strong> {language === 'fr' ? "14 jours d'essai gratuit" : "14-day free trial"}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="text-blue-800">
                            <strong>{language === 'fr' ? "Inscription :" : "Registration:"}</strong> {language === 'fr' ? "Aucune carte bancaire requise" : "No credit card required"}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="text-blue-800">
                            <strong>{language === 'fr' ? "Support :" : "Support:"}</strong> {language === 'fr' ? "Configuration personnalisée incluse" : "Personalized setup included"}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="text-blue-800">
                            <strong>{language === 'fr' ? "Fonctionnalités :" : "Features:"}</strong> {language === 'fr' ? "Accès complet expertise beauté" : "Full access to beauty expertise"}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="text-blue-800">
                            <strong>{language === 'fr' ? "Installation :" : "Installation:"}</strong> {language === 'fr' ? "Plugin 2 minutes" : "2-minute plugin"}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="text-blue-800">
                            <strong>{language === 'fr' ? "Analytics :" : "Analytics:"}</strong> {language === 'fr' ? "Métriques beautés temps réel" : "Real-time beauty metrics"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold mb-6 text-gray-900">
                      {language === 'fr' ? "Conditions d'éligibilité pour marques beauté" : "Eligibility conditions for beauty brands"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800 mb-3">
                          {language === 'fr' ? "Critères techniques" : "Technical criteria"}
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                            <span className="text-gray-700 text-sm">
                              {language === 'fr' ? 
                                "Site e-commerce sur Shopify ou WooCommerce" :
                                "E-commerce site on Shopify or WooCommerce"
                              }
                            </span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                            <span className="text-gray-700 text-sm">
                              {language === 'fr' ? 
                                "Catalogue produits beauté actif" :
                                "Active beauty product catalog"
                              }
                            </span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                            <span className="text-gray-700 text-sm">
                              {language === 'fr' ?
                                "Basé en Afrique (Sénégal, Côte d'Ivoire, etc.)" :
                                "Based in Africa (Senegal, Ivory Coast, etc.)"
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800 mb-3">
                          {language === 'fr' ? "Critères légaux" : "Legal criteria"}
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                            <span className="text-gray-700 text-sm">
                              {language === 'fr' ? 
                                "Respect des réglementations cosmétiques européennes" :
                                "Compliance with European cosmetics regulations"
                              }
                            </span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                            <span className="text-gray-700 text-sm">
                              {language === 'fr' ? 
                                "Produits conformes aux normes RGPD" :
                                "GDPR compliant products"
                              }
                            </span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                            <span className="text-gray-700 text-sm">
                              {language === 'fr' ? 
                                "Informations commerciales exactes" :
                                "Accurate business information"
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Tarification - Adaptée beauté */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">
                  {language === 'fr' ? "4. Tarification pour marques beauté" : "4. Pricing for beauty brands"}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-200">
                    <div className="flex items-center mb-6">
                      <CreditCard className="w-8 h-8 text-rose-600 mr-4" />
                      <h3 className="text-2xl font-bold text-rose-900">
                        {language === 'fr' ? "Plan Beauté Standard" : "Standard Beauty Plan"}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div className="text-center py-4">
                        <div className="text-4xl font-bold text-rose-600">29€</div>
                        <div className="text-rose-700">{language === 'fr' ? "par mois" : "per month"}</div>
                      </div>
                      <div className="space-y-3 text-rose-800">
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                          <span className="text-sm"><strong>{language === 'fr' ? "Expertise beauté complète" : "Complete beauty expertise"}</strong></span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                          <span className="text-sm"><strong>{language === 'fr' ? "2000+ conversations/mois" : "2000+ conversations/month"}</strong></span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                          <span className="text-sm"><strong>{language === 'fr' ? "Analytics beauté avancés" : "Advanced beauty analytics"}</strong></span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                          <span className="text-sm"><strong>{language === 'fr' ? "Support email prioritaire" : "Priority email support"}</strong></span>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-rose-200">
                        <div className="text-xs text-rose-700 space-y-1">
                          <div><strong>{language === 'fr' ? "Facturation :" : "Billing:"}</strong> {language === 'fr' ? "Mensuelle automatique" : "Automatic monthly"}</div>
                          <div><strong>{language === 'fr' ? "Devise :" : "Currency:"}</strong> {language === 'fr' ? "Euros (EUR)" : "Euros (EUR)"}</div>
                          <div><strong>TVA :</strong> {language === 'fr' ? "Incluse pour UE" : "Included for EU"}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200">
                    <div className="flex items-center mb-6">
                      <Shield className="w-8 h-8 text-purple-600 mr-4" />
                      <h3 className="text-2xl font-bold text-purple-900">
                        {language === 'fr' ? "Garantie Beauté" : "Beauty Guarantee"}
                      </h3>
                    </div>
                    <div className="space-y-4 text-purple-800">
                      <div className="text-center py-4">
                        <div className="text-4xl font-bold text-purple-600">30</div>
                        <div className="text-purple-700">{language === 'fr' ? "jours satisfait ou remboursé" : "days satisfied or refunded"}</div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                          <span className="text-sm"><strong>{language === 'fr' ? "Remboursement :" : "Refund:"}</strong> {language === 'fr' ? "100% sans question" : "100% no questions asked"}</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                          <span className="text-sm"><strong>{language === 'fr' ? "Délai :" : "Timeframe:"}</strong> {language === 'fr' ? "Sous 5 jours ouvrés" : "Within 5 business days"}</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                          <span className="text-sm"><strong>{language === 'fr' ? "Condition :" : "Condition:"}</strong> {language === 'fr' ? "Si conversions < +100%" : "If conversions < +100%"}</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                          <span className="text-sm"><strong>{language === 'fr' ? "Support :" : "Support:"}</strong> {language === 'fr' ? "Accompagnement personnalisé" : "Personalized support"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                  <div className="flex items-start space-x-4">
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-amber-900 mb-3">
                        {language === 'fr' ? "Modalités de paiement pour marques beauté" : "Payment terms for beauty brands"}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-amber-800 text-sm">
                          <li>• {language === 'fr' ? "Paiement sécurisé par carte bancaire" : "Secure payment by credit card"}</li>
                          <li>• {language === 'fr' ? "Prélèvement automatique mensuel" : "Automatic monthly deduction"}</li>
                          <li>• {language === 'fr' ? "Factures compatibles comptabilité entreprise" : "Business accounting compatible invoices"}</li>
                        </ul>
                        <ul className="space-y-2 text-amber-800 text-sm">
                          <li>• {language === 'fr' ? "TVA incluse si applicable selon le pays" : "VAT included if applicable by country"}</li>
                          <li>• {language === 'fr' ? "Résiliation possible à tout moment" : "Cancellation possible at any time"}</li>
                          <li>• {language === 'fr' ? "Service actif jusqu'à fin de période payée" : "Service active until end of paid period"}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Résiliation */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">
                  {language === 'fr' ? "5. Résiliation et flexibilité" : "5. Termination and flexibility"}
                </h2>
                
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-6">
                        <RefreshCw className="w-6 h-6 text-green-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">
                          {language === 'fr' ? "Résiliation par la marque" : "Termination by brand"}
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-900">{language === 'fr' ? "Liberté totale" : "Complete freedom"}</span>
                            <p className="text-gray-600 text-sm">{language === 'fr' ? "Annulation possible à tout moment depuis votre tableau de bord" : "Cancellation possible at any time from your dashboard"}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-900">{language === 'fr' ? "Aucun engagement" : "No commitment"}</span>
                            <p className="text-gray-600 text-sm">{language === 'fr' ? "Pas de contrat longue durée ni de pénalités" : "No long-term contract or penalties"}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-900">{language === 'fr' ? "Export des données" : "Data export"}</span>
                            <p className="text-gray-600 text-sm">{language === 'fr' ? "Récupérez toutes vos conversations et analytics" : "Retrieve all your conversations and analytics"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-6">
                        <Shield className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">
                          {language === 'fr' ? "Protection des données beauté" : "Beauty data protection"}
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-900">{language === 'fr' ? "Conservation limitée" : "Limited retention"}</span>
                            <p className="text-gray-600 text-sm">{language === 'fr' ? "Données supprimées 30 jours après résiliation" : "Data deleted 30 days after termination"}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-900">{language === 'fr' ? "Confidentialité garantie" : "Guaranteed confidentiality"}</span>
                            <p className="text-gray-600 text-sm">{language === 'fr' ? "Vos formulations et secrets beauté restent privés" : "Your formulations and beauty secrets remain private"}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-900">RGPD</span>
                            <p className="text-gray-600 text-sm">{language === 'fr' ? "Conformité européenne totale des données clients" : "Full European compliance for customer data"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact et support spécialisé beauté */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">
                  {language === 'fr' ? "6. Support spécialisé marques beauté" : "6. Specialized support for beauty brands"}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-200">
                    <div className="flex items-center mb-6">
                      <Mail className="w-8 h-8 text-rose-600 mr-4" />
                      <h3 className="text-xl font-bold text-rose-900">
                        {language === 'fr' ? "Équipe beauté dédiée" : "Dedicated beauty team"}
                      </h3>
                    </div>
                    <div className="space-y-4 text-rose-800">
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-semibold">Email :</span> <a href="mailto:beauty@chatseller.app" className="text-rose-600 hover:underline">beauty@chatseller.app</a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-semibold">{language === 'fr' ? "Délai de réponse :" : "Response time:"}</span> {language === 'fr' ? "12h maximum" : "12h maximum"}
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-semibold">{language === 'fr' ? "Expertise :" : "Expertise:"}</span> {language === 'fr' ? "Consultants formés secteur beauté" : "Beauty sector trained consultants"}
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-semibold">{language === 'fr' ? "Horaires :" : "Hours:"}</span> {language === 'fr' ? "9h-19h, Dakar (GMT)" : "9am-7pm, Dakar (GMT)"}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200">
                    <div className="flex items-center mb-6">
                      <Scale className="w-8 h-8 text-purple-600 mr-4" />
                      <h3 className="text-xl font-bold text-purple-900">
                        {language === 'fr' ? "Cadre juridique" : "Legal framework"}
                      </h3>
                    </div>
                    <div className="space-y-4 text-purple-800">
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-semibold">{language === 'fr' ? "Droit applicable :" : "Applicable law:"}</span> {language === 'fr' ? "Droit sénégalais & UE" : "Senegalese & EU law"}
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-semibold">{language === 'fr' ? "Tribunaux :" : "Courts:"}</span> {language === 'fr' ? "Dakar, Sénégal" : "Dakar, Senegal"}
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-semibold">{language === 'fr' ? "Médiation :" : "Mediation:"}</span> {language === 'fr' ? "Résolution amiable prioritaire" : "Priority amicable resolution"}
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-semibold">{language === 'fr' ? "Protection :" : "Protection:"}</span> {language === 'fr' ? "Conformité RGPD beauté" : "GDPR beauty compliance"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer des conditions - Spécialisé beauté */}
              <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-purple-50 rounded-2xl p-8 border border-rose-200 text-center">
                <div className="max-w-2xl mx-auto space-y-4">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <Heart className="w-6 h-6 text-rose-500" />
                    <Sparkles className="w-6 h-6 text-pink-500" />
                    <ShoppingBag className="w-6 h-6 text-purple-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {language === 'fr' ? 
                      "Rejoignez les marques beauté qui transforment leur e-commerce" :
                      "Join the beauty brands transforming their e-commerce"
                    }
                  </h3>
                  
                  <p className="text-gray-700 mb-4">
                    {language === 'fr' ? 
                      "En utilisant ChatSeller, vous acceptez ces conditions spécialement conçues pour les marques beauté et bénéficiez d'une expertise secteur unique." :
                      "By using ChatSeller, you accept these terms specially designed for beauty brands and benefit from unique sector expertise."
                    }
                  </p>
                  
                  <div className="bg-white/60 rounded-xl p-4 space-y-2">
                    <p className="text-sm text-gray-600">
                      <strong>
                        {language === 'fr' ? "Version beauté 2.0 •" : "Beauty version 2.0 •"}
                      </strong>{' '}
                      {language === 'fr' ? "Dernière mise à jour : 1er septembre 2025" : "Last updated: September 1st, 2025"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {language === 'fr' ? "Support beauté dédié :" : "Dedicated beauty support:"}{' '}
                      <a href="mailto:beauty@chatseller.app" className="text-rose-600 hover:underline font-medium">
                        beauty@chatseller.app
                      </a>
                    </p>
                  </div>
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

export default Terms;