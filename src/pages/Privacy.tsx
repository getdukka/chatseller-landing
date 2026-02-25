// src/pages/Privacy.tsx 
import React from 'react';
import NewNavbar from '@/components/NewNavBar';
import Footer from '../components/Footer';
import { Shield, Mail, MapPin, Clock, CheckCircle2, AlertCircle, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';


const Privacy = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <NewNavbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section - Thème Beauté */}
        <section className="py-20 bg-gradient-to-b from-rose-50/60 via-pink-50/30 to-white">
          <div className="container px-6 md:px-12 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 mb-8 border border-emerald-200 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 text-sm font-semibold text-emerald-700">
                <Shield className="w-4 h-4 mr-2" />
                {language === 'fr' ? "Conforme RGPD" : "GDPR Compliant"}
                <Sparkles className="w-4 h-4 ml-2" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                {language === 'fr' ? "Politique de" : "Privacy"}
                <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {language === 'fr' ? " Confidentialité" : " Policy"}
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                {language === 'fr' ?
                  "Nous respectons la confidentialité de vos données et celles de vos clients. Découvrez comment ChatSeller protège vos informations." :
                  "We respect the confidentiality of your data and that of your customers. Discover how ChatSeller protects your information."
                }
              </p>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-rose-100 inline-block">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-rose-600" />
                    {language === 'fr' ? "Dernière mise à jour : 14 juillet 2025" : "Last updated: July 14, 2025"}
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600" />
                    {language === 'fr' ? "RGPD Compliant" : "GDPR Compliant"}
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-pink-600" />
                    {language === 'fr' ? "Vendeuse IA" : "AI Salesperson"}
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
              
              {/* 1. Identité du responsable de traitement */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  {language === 'fr' ? "Responsable du traitement des données" : "Data Controller"}
                </h2>
                
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-200">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <Heart className="w-5 h-5 mr-2 text-rose-600" />
                        {language === 'fr' ? "ChatSeller — Mia, votre Vendeuse IA" : "ChatSeller — Mia, your AI Salesperson"}
                      </h3>
                      <div className="space-y-2 text-gray-700">
                        <p><strong>{language === 'fr' ? "Entreprise :" : "Company:"}</strong> DUKKA</p>
                        <p><strong>{language === 'fr' ? "Produit :" : "Product:"}</strong> ChatSeller</p>
                        <p className="text-sm text-rose-600 font-medium">
                          {language === 'fr' ?
                            "🎯 Vendeuse IA pour boutiques e-commerce en Afrique" :
                            "🎯 AI Salesperson for e-commerce stores in Africa"
                          }
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-rose-600" />
                        {language === 'fr' ? "Coordonnées" : "Contact Details"}
                      </h3>
                      <div className="space-y-2 text-gray-700">
                        <p>Cité Keur Gui</p>
                        <p>Dakar, {language === 'fr' ? "SÉNÉGAL" : "SENEGAL"}</p>
                        <p className="mt-4">
                          <Mail className="w-4 h-4 inline mr-2 text-rose-600" />
                          <a href="mailto:support@chatseller.app" className="text-rose-600 hover:text-rose-700 font-medium">
                            support@chatseller.app
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-2 mt-6 pt-6 border-t border-rose-200">
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center px-4 py-2 bg-white/60 rounded-full border border-rose-200">
                          <Shield className="w-4 h-4 mr-2 text-emerald-600" />
                          <span className="text-sm font-medium">{language === 'fr' ? "Droit sénégalais" : "Senegalese law"}</span>
                        </div>
                        <div className="flex items-center px-4 py-2 bg-white/60 rounded-full border border-rose-200">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600" />
                          <span className="text-sm font-medium">{language === 'fr' ? "Conforme RGPD" : "GDPR Compliant"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Données collectées - Spécialisé Beauté */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  {language === 'fr' ? "Données personnelles collectées" : "Personal Data Collected"}
                </h2>
                
                <div className="space-y-8">
                  {/* Données marques beauté */}
                  <div className="bg-white rounded-2xl p-8 border border-purple-200 shadow-lg">
                    <h3 className="text-xl font-bold mb-6 text-purple-700 flex items-center">
                      <Heart className="w-5 h-5 mr-2" />
                      {language === 'fr' ? "Informations sur votre boutique" : "Your store information"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "Nom et informations de l'entreprise" : "Company name and information"}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "Adresse email professionnelle" : "Business email address"}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "URL boutique Shopify/WooCommerce" : "Shopify/WooCommerce store URL"}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "Secteur et type de boutique" : "Store sector and type"}
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "Informations de facturation" : "Billing information"}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "Catalogue produits" : "Product catalog"}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "Préférences de configuration de Mia" : "Mia configuration preferences"}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "Base de connaissances de votre marque" : "Your brand knowledge base"}
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Données clients finaux beauté */}
                  <div className="bg-white rounded-2xl p-8 border border-rose-200 shadow-lg">
                    <h3 className="text-xl font-bold mb-6 text-rose-700 flex items-center">
                      <Sparkles className="w-5 h-5 mr-2" />
                      {language === 'fr' ? "Données des conversations Mia (clients finaux)" : "Mia conversation data (end customers)"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "Questions et besoins exprimés" : "Questions and expressed needs"}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "Préférences produits" : "Product preferences"}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "Historique des conversations avec Mia" : "Conversation history with Mia"}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "Historique des conseils donnés" : "History of advice given"}
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "Recommandations produits" : "Product recommendations"}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "Informations de commande (si achat via chat)" : "Order information (if purchased via chat)"}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "Données de conversion/vente" : "Conversion/sales data"}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                          {language === 'fr' ? "Métadonnées de session" : "Session metadata"}
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Données techniques */}
                  <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg">
                    <h3 className="text-xl font-bold mb-6 text-blue-700">
                      {language === 'fr' ? "Données techniques et analytics" : "Technical and analytics data"}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                        {language === 'fr' ? "Adresse IP" : "IP address"}
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                        {language === 'fr' ? "Type de navigateur" : "Browser type"}
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                        {language === 'fr' ? "Géolocalisation (pays)" : "Geolocation (country)"}
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                        {language === 'fr' ? "Performances widget" : "Widget performance"}
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                        {language === 'fr' ? "Métriques de conversion" : "Conversion metrics"}
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3" />
                        {language === 'fr' ? "Analytics de vente" : "Sales analytics"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Finalités du traitement - Adapté beauté */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  {language === 'fr' ? "Finalités du traitement" : "Processing Purposes"}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 border border-rose-200 shadow-sm">
                      <h4 className="font-bold text-rose-700 mb-3 flex items-center">
                        <Heart className="w-5 h-5 mr-2" />
                        {language === 'fr' ? "Services Mia" : "Mia services"}
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• {language === 'fr' ? "Vente conversationnelle IA (Mia)" : "AI conversational selling (Mia)"}</li>
                        <li>• {language === 'fr' ? "Recommandations produits personnalisées" : "Personalized product recommendations"}</li>
                        <li>• {language === 'fr' ? "Collecte de commandes via le chat" : "Order collection via chat"}</li>
                        <li>• {language === 'fr' ? "Optimisation des conversions" : "Conversion optimization"}</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 border border-purple-200 shadow-sm">
                      <h4 className="font-bold text-purple-700 mb-3 flex items-center">
                        <Sparkles className="w-5 h-5 mr-2" />
                        {language === 'fr' ? "Gestion des comptes" : "Account management"}
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• {language === 'fr' ? "Authentification et accès" : "Authentication and access"}</li>
                        <li>• {language === 'fr' ? "Configuration de Mia" : "Mia configuration"}</li>
                        <li>• {language === 'fr' ? "Gestion catalogue produits" : "Product catalog management"}</li>
                        <li>• {language === 'fr' ? "Support client dédié" : "Dedicated customer support"}</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 border border-emerald-200 shadow-sm">
                      <h4 className="font-bold text-emerald-700 mb-3 flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        {language === 'fr' ? "Analytics et optimisation" : "Analytics and optimization"}
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• {language === 'fr' ? "Mesure ROI des conversions" : "Conversion ROI measurement"}</li>
                        <li>• {language === 'fr' ? "Analyse des tendances produits" : "Product trend analysis"}</li>
                        <li>• {language === 'fr' ? "Amélioration de Mia" : "Mia improvement"}</li>
                        <li>• {language === 'fr' ? "Rapports de performance" : "Performance reports"}</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm">
                      <h4 className="font-bold text-blue-700 mb-3">
                        {language === 'fr' ? "Conformité et facturation" : "Compliance and billing"}
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• {language === 'fr' ? "Traitement des paiements" : "Payment processing"}</li>
                        <li>• {language === 'fr' ? "Facturation automatisée" : "Automated billing"}</li>
                        <li>• {language === 'fr' ? "Obligations légales RGPD" : "GDPR legal obligations"}</li>
                        <li>• {language === 'fr' ? "Sécurité des données" : "Data security"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Base légale */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  {language === 'fr' ? "Base légale du traitement" : "Legal Basis for Processing"}
                </h2>
                
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
                  <div className="flex items-start space-x-4 mb-6">
                    <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-yellow-900 mb-4 text-xl">
                        {language === 'fr' ? "Bases légales applicables" : "Applicable legal bases"}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-white/60 rounded-xl p-4 border border-yellow-300">
                        <h4 className="font-bold text-yellow-900 mb-2">
                          {language === 'fr' ? "🤝 Exécution du contrat" : "🤝 Contract execution"}
                        </h4>
                        <p className="text-yellow-800 text-sm">
                          {language === 'fr' ?
                            "Fourniture des services ChatSeller (Mia) aux boutiques" :
                            "Provision of ChatSeller (Mia) services to stores"}
                        </p>
                      </div>
                      
                      <div className="bg-white/60 rounded-xl p-4 border border-yellow-300">
                        <h4 className="font-bold text-yellow-900 mb-2">
                          {language === 'fr' ? "✅ Consentement" : "✅ Consent"}
                        </h4>
                        <p className="text-yellow-800 text-sm">
                          {language === 'fr' ?
                            "Communications marketing (optionnel)" :
                            "Marketing communications (optional)"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/60 rounded-xl p-4 border border-yellow-300">
                        <h4 className="font-bold text-yellow-900 mb-2">
                          {language === 'fr' ? "⚖️ Intérêt légitime" : "⚖️ Legitimate interest"}
                        </h4>
                        <p className="text-yellow-800 text-sm">
                          {language === 'fr' ?
                            "Amélioration de Mia, sécurité, analytics" :
                            "Mia improvement, security, analytics"}
                        </p>
                      </div>
                      
                      <div className="bg-white/60 rounded-xl p-4 border border-yellow-300">
                        <h4 className="font-bold text-yellow-900 mb-2">
                          {language === 'fr' ? "📋 Obligation légale" : "📋 Legal obligation"}
                        </h4>
                        <p className="text-yellow-800 text-sm">
                          {language === 'fr' ? 
                            "Facturation, conformité fiscale et légale" :
                            "Billing, tax and legal compliance"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Vos droits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  {language === 'fr' ? "Vos droits RGPD" : "Your GDPR Rights"}
                </h2>
                
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200">
                  <h3 className="text-xl font-bold mb-6 text-emerald-900 flex items-center">
                    <Shield className="w-6 h-6 mr-3" />
                    {language === 'fr' ? "Vous disposez des droits suivants :" : "You have the following rights:"}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="bg-white/70 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3" />
                          <h4 className="font-bold text-emerald-800">{language === 'fr' ? "Droit d'accès" : "Right of access"}</h4>
                        </div>
                        <p className="text-emerald-700 text-sm">
                          {language === 'fr' ? "Consulter vos données collectées" : "View your collected data"}
                        </p>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3" />
                          <h4 className="font-bold text-emerald-800">{language === 'fr' ? "Droit de rectification" : "Right of rectification"}</h4>
                        </div>
                        <p className="text-emerald-700 text-sm">
                          {language === 'fr' ? "Corriger vos informations" : "Correct your information"}
                        </p>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3" />
                          <h4 className="font-bold text-emerald-800">{language === 'fr' ? "Droit à l'effacement" : "Right to erasure"}</h4>
                        </div>
                        <p className="text-emerald-700 text-sm">
                          {language === 'fr' ? "Supprimer vos données" : "Delete your data"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/70 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3" />
                          <h4 className="font-bold text-emerald-800">{language === 'fr' ? "Droit à la portabilité" : "Right to portability"}</h4>
                        </div>
                        <p className="text-emerald-700 text-sm">
                          {language === 'fr' ? "Récupérer vos données" : "Retrieve your data"}
                        </p>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3" />
                          <h4 className="font-bold text-emerald-800">{language === 'fr' ? "Droit d'opposition" : "Right to object"}</h4>
                        </div>
                        <p className="text-emerald-700 text-sm">
                          {language === 'fr' ? "S'opposer au traitement" : "Object to processing"}
                        </p>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3" />
                          <h4 className="font-bold text-emerald-800">{language === 'fr' ? "Droit de limitation" : "Right to restriction"}</h4>
                        </div>
                        <p className="text-emerald-700 text-sm">
                          {language === 'fr' ? "Limiter le traitement" : "Restrict processing"}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-white rounded-xl border border-emerald-300">
                    <p className="text-emerald-800 text-center">
                      <strong>{language === 'fr' ? "Pour exercer vos droits :" : "To exercise your rights:"}</strong> 
                      <br className="md:hidden" />
                      {language === 'fr' ? " Contactez-nous à " : " Contact us at "}
                      <a href="mailto:support@chatseller.app" className="text-emerald-600 hover:text-emerald-700 font-bold">
                        support@chatseller.app
                      </a>
                    </p>
                    <p className="text-emerald-700 text-sm text-center mt-2">
                      {language === 'fr' ? "Délai de réponse : 72h maximum" : "Response time: 72h maximum"}
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. Contact - Style beauté */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  {language === 'fr' ? "Contact et support" : "Contact and support"}
                </h2>
                
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-200">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-rose-900 mb-4">
                        {language === 'fr' ? "Questions sur cette politique ?" : "Questions about this policy?"}
                      </h3>
                      <p className="text-gray-700 mb-6">
                        {language === 'fr' ?
                          "Notre équipe est là pour répondre à toutes vos questions concernant cette politique de confidentialité ou l'exercice de vos droits." :
                          "Our team is here to answer all your questions regarding this privacy policy or exercising your rights."
                        }
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/60 rounded-xl p-4">
                          <h4 className="font-bold text-rose-700 mb-2">
                            {language === 'fr' ? "📧 Email support" : "📧 Email support"}
                          </h4>
                          <p>
                            <a href="mailto:support@chatseller.app" className="text-rose-600 hover:text-rose-700 font-bold">
                              support@chatseller.app
                            </a>
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {language === 'fr' ? "Réponse sous 72h" : "Response within 72h"}
                          </p>
                        </div>
                        
                        <div className="bg-white/60 rounded-xl p-4">
                          <h4 className="font-bold text-rose-700 mb-2">
                            {language === 'fr' ? "🎯 Support spécialisé" : "🎯 Specialized support"}
                          </h4>
                          <p className="text-sm text-gray-700">
                            {language === 'fr' ?
                              "Équipe experte en protection des données" :
                              "Expert data protection team"}
                          </p>
                        </div>
                      </div>
                    </div>
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

export default Privacy;