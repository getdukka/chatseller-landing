// src/pages/Privacy.tsx - AVEC TRADUCTIONS COMPLÈTES
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50/60 to-white">
          <div className="container px-6 md:px-12 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 mb-6 border border-green-200 rounded-full bg-green-50 text-sm font-medium text-green-700">
                <Shield className="w-4 h-4 mr-2" />
                {language === 'fr' ? "Conforme RGPD" : "GDPR Compliant"}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {language === 'fr' ? "Politique de" : "Privacy"}
                <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {language === 'fr' ? " Confidentialité" : " Policy"}
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                {language === 'fr' ? 
                  "Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles." :
                  "We respect your privacy and are committed to protecting your personal data."
                }
              </p>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 inline-block">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {language === 'fr' ? "Dernière mise à jour : 14 juillet 2025" : "Last updated: July 14, 2025"}
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1 text-green-600" />
                    {language === 'fr' ? "RGPD Compliant" : "GDPR Compliant"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container px-6 md:px-12 mx-auto">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              {/* 1. Identité du responsable de traitement */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {language === 'fr' ? "1. Responsable du traitement des données" : "1. Data Controller"}
                </h2>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {language === 'fr' ? "Entreprise" : "Company"}
                      </h3>
                      <p className="text-gray-700">TEKKI GROUP</p>
                      <p className="text-gray-700">{language === 'fr' ? "Produit : ChatSeller (par Dukka)" : "Product: ChatSeller (by Dukka)"}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {language === 'fr' ? "Adresse" : "Address"}
                      </h3>
                      <p className="text-gray-700">Ouest-Foire</p>
                      <p className="text-gray-700">Dakar, {language === 'fr' ? "SÉNÉGAL" : "SENEGAL"}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </h3>
                      <p className="text-gray-700">
                        <a href="mailto:support@chatseller.app" className="text-primary hover:underline">
                          support@chatseller.app
                        </a>
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {language === 'fr' ? "Juridiction" : "Jurisdiction"}
                      </h3>
                      <p className="text-gray-700">{language === 'fr' ? "Droit sénégalais" : "Senegalese law"}</p>
                      <p className="text-gray-700">{language === 'fr' ? "Conforme RGPD" : "GDPR Compliant"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Données collectées */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {language === 'fr' ? "2. Données personnelles collectées" : "2. Personal Data Collected"}
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      {language === 'fr' ? "Lors de l'inscription" : "During registration"}
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "Nom et prénom" : "First and last name"}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "Adresse email" : "Email address"}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "Informations de facturation" : "Billing information"}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "URL du site web" : "Website URL"}
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      {language === 'fr' ? "Via l'agent IA ChatSeller" : "Via ChatSeller AI agent"}
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "Conversations avec l'IA" : "Conversations with AI"}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "Données de commande collectées par l'IA" : "Order data collected by AI"}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "Métadonnées de session" : "Session metadata"}
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      {language === 'fr' ? "Données techniques" : "Technical data"}
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "Adresse IP" : "IP address"}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "Type de navigateur" : "Browser type"}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "Données d'usage et analytics" : "Usage data and analytics"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Finalités du traitement */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {language === 'fr' ? "3. Finalités du traitement" : "3. Processing Purposes"}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {language === 'fr' ? "Fourniture du service" : "Service provision"}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {language === 'fr' ? 
                            "Fonctionnement de l'agent IA ChatSeller" :
                            "ChatSeller AI agent operation"
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {language === 'fr' ? "Gestion des comptes" : "Account management"}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {language === 'fr' ? 
                            "Création et administration des comptes" :
                            "Account creation and administration"
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {language === 'fr' ? "Facturation" : "Billing"}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {language === 'fr' ? 
                            "Traitement des paiements et facturation" :
                            "Payment processing and billing"
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {language === 'fr' ? "Support client" : "Customer support"}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {language === 'fr' ? 
                            "Assistance et résolution des problèmes" :
                            "Assistance and problem resolution"
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {language === 'fr' ? "Amélioration du service" : "Service improvement"}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {language === 'fr' ? 
                            "Analyse et optimisation de ChatSeller" :
                            "ChatSeller analysis and optimization"
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {language === 'fr' ? "Conformité légale" : "Legal compliance"}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {language === 'fr' ? 
                            "Respect des obligations légales" :
                            "Compliance with legal obligations"
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Base légale */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {language === 'fr' ? "4. Base légale du traitement" : "4. Legal Basis for Processing"}
                </h2>
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-yellow-900 mb-2">
                        {language === 'fr' ? "Bases légales applicables" : "Applicable legal bases"}
                      </h3>
                      <ul className="space-y-2 text-yellow-800">
                        <li>
                          <strong>{language === 'fr' ? "Exécution du contrat :" : "Contract execution:"}</strong> {language === 'fr' ? "Pour la fourniture du service ChatSeller" : "For ChatSeller service provision"}
                        </li>
                        <li>
                          <strong>{language === 'fr' ? "Consentement :" : "Consent:"}</strong> {language === 'fr' ? "Pour les communications marketing (optionnel)" : "For marketing communications (optional)"}
                        </li>
                        <li>
                          <strong>{language === 'fr' ? "Intérêt légitime :" : "Legitimate interest:"}</strong> {language === 'fr' ? "Pour l'amélioration du service et la sécurité" : "For service improvement and security"}
                        </li>
                        <li>
                          <strong>{language === 'fr' ? "Obligation légale :" : "Legal obligation:"}</strong> {language === 'fr' ? "Pour la facturation et la conformité" : "For billing and compliance"}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Vos droits */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {language === 'fr' ? "5. Vos droits RGPD" : "5. Your GDPR Rights"}
                </h2>
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-semibold mb-4 text-green-900">
                    {language === 'fr' ? "Vous disposez des droits suivants :" : "You have the following rights:"}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "Droit d'accès" : "Right of access"}
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "Droit de rectification" : "Right of rectification"}
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "Droit à l'effacement" : "Right to erasure"}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "Droit à la portabilité" : "Right to portability"}
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "Droit d'opposition" : "Right to object"}
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                        {language === 'fr' ? "Droit de limitation" : "Right to restriction"}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <p className="text-green-800">
                      <strong>{language === 'fr' ? "Pour exercer vos droits :" : "To exercise your rights:"}</strong> {language === 'fr' ? "Contactez-nous à" : "Contact us at"}
                      <a href="mailto:support@chatseller.app" className="text-green-600 hover:underline ml-1">
                        support@chatseller.app
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. Contact */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {language === 'fr' ? "6. Contact" : "6. Contact"}
                </h2>
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-2">
                        {language === 'fr' ? "Questions sur cette politique ?" : "Questions about this policy?"}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {language === 'fr' ? 
                          "Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits, contactez notre équipe." :
                          "For any questions regarding this privacy policy or exercising your rights, contact our team."
                        }
                      </p>
                      <div className="space-y-1">
                        <p><strong>Email :</strong> <a href="mailto:support@chatseller.app" className="text-primary hover:underline">support@chatseller.app</a></p>
                        <p><strong>{language === 'fr' ? "Délai de réponse :" : "Response time:"}</strong> {language === 'fr' ? "72 heures maximum" : "72 hours maximum"}</p>
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