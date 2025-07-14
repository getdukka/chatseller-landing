// src/pages/Privacy.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const Privacy = () => {
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
                Conforme RGPD
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Politique de 
                <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Confidentialité</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles.
              </p>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 inline-block">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Dernière mise à jour : 14 juillet 2025
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1 text-green-600" />
                    RGPD Compliant
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
                <h2 className="text-2xl font-bold mb-6 text-gray-900">1. Responsable du traitement des données</h2>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Entreprise</h3>
                      <p className="text-gray-700">TEKKI GROUP</p>
                      <p className="text-gray-700">Produit : ChatSeller (par Dukka)</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Adresse
                      </h3>
                      <p className="text-gray-700">Ouest-Foire</p>
                      <p className="text-gray-700">Dakar, SÉNÉGAL</p>
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
                      <h3 className="font-semibold text-gray-900 mb-2">Juridiction</h3>
                      <p className="text-gray-700">Droit sénégalais</p>
                      <p className="text-gray-700">Conforme RGPD</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Données collectées */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">2. Données personnelles collectées</h2>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Lors de l'inscription</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Nom et prénom</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Adresse email</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Informations de facturation</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />URL du site web</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Via l'agent IA ChatSeller</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Conversations avec l'IA</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Données de commande collectées par l'IA</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Métadonnées de session</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Données techniques</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Adresse IP</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Type de navigateur</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Données d'usage et analytics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Finalités du traitement */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">3. Finalités du traitement</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Fourniture du service</h4>
                        <p className="text-gray-600 text-sm">Fonctionnement de l'agent IA ChatSeller</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Gestion des comptes</h4>
                        <p className="text-gray-600 text-sm">Création et administration des comptes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Facturation</h4>
                        <p className="text-gray-600 text-sm">Traitement des paiements et facturation</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Support client</h4>
                        <p className="text-gray-600 text-sm">Assistance et résolution des problèmes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Amélioration du service</h4>
                        <p className="text-gray-600 text-sm">Analyse et optimisation de ChatSeller</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Conformité légale</h4>
                        <p className="text-gray-600 text-sm">Respect des obligations légales</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Base légale */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">4. Base légale du traitement</h2>
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-yellow-900 mb-2">Bases légales applicables</h3>
                      <ul className="space-y-2 text-yellow-800">
                        <li><strong>Exécution du contrat :</strong> Pour la fourniture du service ChatSeller</li>
                        <li><strong>Consentement :</strong> Pour les communications marketing (optionnel)</li>
                        <li><strong>Intérêt légitime :</strong> Pour l'amélioration du service et la sécurité</li>
                        <li><strong>Obligation légale :</strong> Pour la facturation et la conformité</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Sous-traitants */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">5. Sous-traitants et transferts</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Sous-traitants utilisés</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">OpenAI</h4>
                          <p className="text-sm text-gray-600">Intelligence artificielle</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Supabase</h4>
                          <p className="text-sm text-gray-600">Base de données</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Vercel</h4>
                          <p className="text-sm text-gray-600">Hébergement frontend</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Railway</h4>
                          <p className="text-sm text-gray-600">Hébergement backend</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="text-lg font-semibold mb-4 text-blue-900">Garanties de protection</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" />Accords de sous-traitance RGPD</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" />Chiffrement des données</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" />Serveurs sécurisés</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" />Conformité internationale</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 6. Durée de conservation */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">6. Durée de conservation</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Clock className="w-6 h-6 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Données de compte actif</h4>
                      <p className="text-sm text-gray-600">Pendant toute la durée de votre abonnement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Clock className="w-6 h-6 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Après résiliation</h4>
                      <p className="text-sm text-gray-600">30 jours (sauf obligations légales)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Clock className="w-6 h-6 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Données de facturation</h4>
                      <p className="text-sm text-gray-600">10 ans (obligation comptable)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Vos droits */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">7. Vos droits RGPD</h2>
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-semibold mb-4 text-green-900">Vous disposez des droits suivants :</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Droit d'accès</div>
                      <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Droit de rectification</div>
                      <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Droit à l'effacement</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Droit à la portabilité</div>
                      <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Droit d'opposition</div>
                      <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />Droit de limitation</div>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <p className="text-green-800">
                      <strong>Pour exercer vos droits :</strong> Contactez-nous à 
                      <a href="mailto:support@chatseller.app" className="text-green-600 hover:underline ml-1">
                        support@chatseller.app
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* 8. Contact */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">8. Contact</h2>
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Questions sur cette politique ?</h3>
                      <p className="text-gray-700 mb-3">
                        Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits, 
                        contactez notre équipe.
                      </p>
                      <div className="space-y-1">
                        <p><strong>Email :</strong> <a href="mailto:support@chatseller.app" className="text-primary hover:underline">support@chatseller.app</a></p>
                        <p><strong>Délai de réponse :</strong> 72 heures maximum</p>
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