// src/pages/Terms.tsx - AVEC TRADUCTIONS COMPLÈTES
import React from 'react';
import Navbar from '../components/Navbar';
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
  Scale
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Terms = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50/60 to-white">
          <div className="container px-6 md:px-12 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 mb-6 border border-blue-200 rounded-full bg-blue-50 text-sm font-medium text-blue-700">
                <FileText className="w-4 h-4 mr-2" />
                {language === 'fr' ? "Conditions d'utilisation" : "Terms of Service"}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {language === 'fr' ? "Conditions Générales" : "Terms of"}
                <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {language === 'fr' ? " d'Utilisation" : " Service"}
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                {language === 'fr' ? 
                  "Les conditions qui régissent l'utilisation du service ChatSeller." :
                  "The terms that govern the use of the ChatSeller service."
                }
              </p>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 inline-block">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {language === 'fr' ? "Dernière mise à jour : 14 juillet 2025" : "Last updated: July 14, 2025"}
                  </div>
                  <div className="flex items-center">
                    <Scale className="w-4 h-4 mr-1 text-blue-600" />
                    {language === 'fr' ? "Droit sénégalais" : "Senegalese law"}
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
              
              {/* 1. Informations générales */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {language === 'fr' ? "1. Informations générales" : "1. General Information"}
                </h2>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {language === 'fr' ? "Service" : "Service"}
                      </h3>
                      <p className="text-gray-700">ChatSeller - {language === 'fr' ? "Agent IA Commercial" : "AI Sales Agent"}</p>
                      <p className="text-gray-700">{language === 'fr' ? "Développé par Dukka" : "Developed by Dukka"}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {language === 'fr' ? "Exploitant" : "Operator"}
                      </h3>
                      <p className="text-gray-700">TEKKI GROUP</p>
                      <p className="text-gray-700">Ouest-Foire, Dakar - {language === 'fr' ? "SÉNÉGAL" : "SENEGAL"}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                      <p className="text-gray-700">
                        <a href="mailto:support@chatseller.app" className="text-primary hover:underline">
                          support@chatseller.app
                        </a>
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {language === 'fr' ? "Droit applicable" : "Applicable law"}
                      </h3>
                      <p className="text-gray-700">{language === 'fr' ? "Droit sénégalais" : "Senegalese law"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Objet du service */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {language === 'fr' ? "2. Description du service" : "2. Service Description"}
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {language === 'fr' ? 
                      "ChatSeller est un service SaaS (Software as a Service) qui permet d'intégrer un agent IA commercial sur les sites e-commerce. L'agent IA converse avec les visiteurs, répond à leurs questions et collecte leurs commandes de manière naturelle." :
                      "ChatSeller is a SaaS (Software as a Service) service that allows integrating an AI sales agent on e-commerce sites. The AI agent converses with visitors, answers their questions and collects their orders naturally."
                    }
                  </p>
                  
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {language === 'fr' ? "Fonctionnalités principales :" : "Main features:"}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700">
                        {language === 'fr' ? "Agent IA conversationnel" : "Conversational AI agent"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700">
                        {language === 'fr' ? "Collecte de commandes" : "Order collection"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700">
                        {language === 'fr' ? "Upsell intelligent" : "Smart upselling"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700">
                        {language === 'fr' ? "Analytics et tableau de bord" : "Analytics and dashboard"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Conditions d'accès */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {language === 'fr' ? "3. Conditions d'accès et d'utilisation" : "3. Access and Usage Conditions"}
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h3 className="text-lg font-semibold mb-4 text-green-900">
                      {language === 'fr' ? "Essai gratuit" : "Free trial"}
                    </h3>
                    <div className="space-y-2 text-green-800">
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        <span><strong>{language === 'fr' ? "Durée :" : "Duration:"}</strong> {language === 'fr' ? "7 jours d'essai gratuit" : "7-day free trial"}</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        <span><strong>{language === 'fr' ? "Inscription :" : "Registration:"}</strong> {language === 'fr' ? "Aucune carte bancaire requise" : "No credit card required"}</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        <span><strong>{language === 'fr' ? "Fonctionnalités :" : "Features:"}</strong> {language === 'fr' ? "Accès complet au service" : "Full access to service"}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">
                      {language === 'fr' ? "Conditions d'éligibilité" : "Eligibility conditions"}
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span>
                          {language === 'fr' ? 
                            "Être propriétaire ou gestionnaire d'un site e-commerce" :
                            "Be owner or manager of an e-commerce site"
                          }
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span>
                          {language === 'fr' ? 
                            "Respecter les lois en vigueur dans votre juridiction" :
                            "Comply with laws in force in your jurisdiction"
                          }
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span>
                          {language === 'fr' ? 
                            "Ne pas utiliser le service à des fins illégales ou malveillantes" :
                            "Not use the service for illegal or malicious purposes"
                          }
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span>
                          {language === 'fr' ? 
                            "Fournir des informations exactes lors de l'inscription" :
                            "Provide accurate information during registration"
                          }
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. Tarification */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {language === 'fr' ? "4. Tarification et facturation" : "4. Pricing and Billing"}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-center mb-4">
                      <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-blue-900">
                        {language === 'fr' ? "Abonnement mensuel" : "Monthly subscription"}
                      </h3>
                    </div>
                    <div className="space-y-3 text-blue-800">
                      <div><strong>{language === 'fr' ? "Prix :" : "Price:"}</strong> {language === 'fr' ? "19€ par mois" : "$14 per month"}</div>
                      <div><strong>{language === 'fr' ? "Facturation :" : "Billing:"}</strong> {language === 'fr' ? "Mensuelle, automatique" : "Monthly, automatic"}</div>
                      <div><strong>{language === 'fr' ? "Devise :" : "Currency:"}</strong> {language === 'fr' ? "Euros (EUR)" : "US Dollars (USD)"}</div>
                      <div><strong>TVA :</strong> {language === 'fr' ? "Applicable selon votre localisation" : "Applicable based on your location"}</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <div className="flex items-center mb-4">
                      <Shield className="w-6 h-6 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold text-green-900">
                        {language === 'fr' ? "Garantie" : "Guarantee"}
                      </h3>
                    </div>
                    <div className="space-y-3 text-green-800">
                      <div><strong>{language === 'fr' ? "Durée :" : "Duration:"}</strong> {language === 'fr' ? "30 jours" : "30 days"}</div>
                      <div><strong>{language === 'fr' ? "Condition :" : "Condition:"}</strong> {language === 'fr' ? "Satisfait ou remboursé" : "Satisfied or refunded"}</div>
                      <div><strong>{language === 'fr' ? "Remboursement :" : "Refund:"}</strong> {language === 'fr' ? "Intégral" : "Full"}</div>
                      <div><strong>{language === 'fr' ? "Délai :" : "Timeframe:"}</strong> {language === 'fr' ? "Sous 7 jours ouvrés" : "Within 7 business days"}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-yellow-900 mb-2">
                        {language === 'fr' ? "Modalités de paiement" : "Payment terms"}
                      </h3>
                      <ul className="space-y-1 text-yellow-800">
                        <li>• {language === 'fr' ? "Prélèvement automatique le même jour chaque mois" : "Automatic deduction on the same day each month"}</li>
                        <li>• {language === 'fr' ? "Moyens de paiement acceptés : carte bancaire" : "Accepted payment methods: credit card"}</li>
                        <li>• {language === 'fr' ? "En cas d'échec de paiement : suspension du service après 7 jours" : "In case of payment failure: service suspension after 7 days"}</li>
                        <li>• {language === 'fr' ? "Aucun remboursement au prorata en cas de résiliation en cours de mois" : "No pro-rata refund in case of mid-month cancellation"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Résiliation */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {language === 'fr' ? "5. Résiliation" : "5. Termination"}
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <RefreshCw className="w-6 h-6 text-gray-600 mr-3" />
                      <h3 className="text-lg font-semibold">
                        {language === 'fr' ? "Résiliation par le client" : "Termination by customer"}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>{language === 'fr' ? "Liberté totale :" : "Complete freedom:"}</strong> {language === 'fr' ? "Résiliation possible à tout moment" : "Cancellation possible at any time"}
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>{language === 'fr' ? "Modalités :" : "Methods:"}</strong> {language === 'fr' ? "Via le tableau de bord ou par email" : "Via dashboard or by email"}
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>{language === 'fr' ? "Préavis :" : "Notice:"}</strong> {language === 'fr' ? "Aucun préavis requis" : "No notice required"}
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>{language === 'fr' ? "Effet :" : "Effect:"}</strong> {language === 'fr' ? "Fin du service à la prochaine échéance de facturation" : "End of service at next billing period"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact et litiges */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {language === 'fr' ? "6. Contact et résolution des litiges" : "6. Contact and Dispute Resolution"}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                    <div className="flex items-center mb-4">
                      <Mail className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-lg font-semibold text-primary">
                        {language === 'fr' ? "Support client" : "Customer support"}
                      </h3>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Email :</strong> <a href="mailto:support@chatseller.app" className="text-primary hover:underline">support@chatseller.app</a></p>
                      <p><strong>{language === 'fr' ? "Délai de réponse :" : "Response time:"}</strong> {language === 'fr' ? "24h maximum" : "24h maximum"}</p>
                      <p><strong>{language === 'fr' ? "Horaires :" : "Hours:"}</strong> {language === 'fr' ? "Lundi au vendredi, 9h-18h GMT" : "Monday to Friday, 9am-6pm GMT"}</p>
                      <p><strong>{language === 'fr' ? "Langues :" : "Languages:"}</strong> {language === 'fr' ? "Français, Anglais" : "French, English"}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                      <Scale className="w-6 h-6 text-gray-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {language === 'fr' ? "Juridiction" : "Jurisdiction"}
                      </h3>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>{language === 'fr' ? "Droit applicable :" : "Applicable law:"}</strong> {language === 'fr' ? "Droit sénégalais" : "Senegalese law"}</p>
                      <p><strong>{language === 'fr' ? "Tribunaux compétents :" : "Competent courts:"}</strong> {language === 'fr' ? "Dakar, Sénégal" : "Dakar, Senegal"}</p>
                      <p><strong>{language === 'fr' ? "Médiation :" : "Mediation:"}</strong> {language === 'fr' ? "Tentative de résolution amiable préalable" : "Prior amicable resolution attempt"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer des conditions */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 text-center">
                <p className="text-blue-800 mb-2">
                  <strong>
                    {language === 'fr' ? 
                      "En utilisant ChatSeller, vous acceptez ces conditions d'utilisation." :
                      "By using ChatSeller, you accept these terms of use."
                    }
                  </strong>
                </p>
                <p className="text-blue-700 text-sm">
                  {language === 'fr' ? 
                    "Dernière mise à jour : 14 juillet 2025 • Version 1.0" :
                    "Last updated: July 14, 2025 • Version 1.0"
                  }
                </p>
                <p className="text-blue-700 text-sm mt-2">
                  {language === 'fr' ? "Pour toute question :" : "For any questions:"} <a href="mailto:support@chatseller.app" className="text-primary hover:underline">support@chatseller.app</a>
                </p>
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