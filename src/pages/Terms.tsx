    // src/pages/Terms.tsx
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

const Terms = () => {
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
                Conditions d'utilisation
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Conditions Générales 
                <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> d'Utilisation</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                Les conditions qui régissent l'utilisation du service ChatSeller.
              </p>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 inline-block">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Dernière mise à jour : 14 juillet 2025
                  </div>
                  <div className="flex items-center">
                    <Scale className="w-4 h-4 mr-1 text-blue-600" />
                    Droit sénégalais
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
                <h2 className="text-2xl font-bold mb-6 text-gray-900">1. Informations générales</h2>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Service</h3>
                      <p className="text-gray-700">ChatSeller - Agent IA Commercial</p>
                      <p className="text-gray-700">Développé par Dukka</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Exploitant</h3>
                      <p className="text-gray-700">TEKKI GROUP</p>
                      <p className="text-gray-700">Ouest-Foire, Dakar - SÉNÉGAL</p>
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
                      <h3 className="font-semibold text-gray-900 mb-2">Droit applicable</h3>
                      <p className="text-gray-700">Droit sénégalais</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Objet du service */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">2. Description du service</h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    ChatSeller est un service SaaS (Software as a Service) qui permet d'intégrer un agent IA commercial 
                    sur les sites e-commerce. L'agent IA converse avec les visiteurs, répond à leurs questions et 
                    collecte leurs commandes de manière naturelle.
                  </p>
                  
                  <h3 className="font-semibold text-gray-900 mb-3">Fonctionnalités principales :</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700">Agent IA conversationnel</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700">Collecte de commandes</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700">Upsell intelligent</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700">Analytics et tableau de bord</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Conditions d'accès */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">3. Conditions d'accès et d'utilisation</h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h3 className="text-lg font-semibold mb-4 text-green-900">Essai gratuit</h3>
                    <div className="space-y-2 text-green-800">
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        <span><strong>Durée :</strong> 3 jours d'essai gratuit</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        <span><strong>Inscription :</strong> Aucune carte bancaire requise</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        <span><strong>Fonctionnalités :</strong> Accès complet au service</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Conditions d'éligibilité</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span>Être propriétaire ou gestionnaire d'un site e-commerce</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span>Respecter les lois en vigueur dans votre juridiction</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span>Ne pas utiliser le service à des fins illégales ou malveillantes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span>Fournir des informations exactes lors de l'inscription</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. Tarification */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">4. Tarification et facturation</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-center mb-4">
                      <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-blue-900">Abonnement mensuel</h3>
                    </div>
                    <div className="space-y-3 text-blue-800">
                      <div><strong>Prix :</strong> 14€ par mois</div>
                      <div><strong>Facturation :</strong> Mensuelle, automatique</div>
                      <div><strong>Devise :</strong> Euros (EUR)</div>
                      <div><strong>TVA :</strong> Applicable selon votre localisation</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <div className="flex items-center mb-4">
                      <Shield className="w-6 h-6 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold text-green-900">Garantie</h3>
                    </div>
                    <div className="space-y-3 text-green-800">
                      <div><strong>Durée :</strong> 30 jours</div>
                      <div><strong>Condition :</strong> Satisfait ou remboursé</div>
                      <div><strong>Remboursement :</strong> Intégral</div>
                      <div><strong>Délai :</strong> Sous 7 jours ouvrés</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-yellow-900 mb-2">Modalités de paiement</h3>
                      <ul className="space-y-1 text-yellow-800">
                        <li>• Prélèvement automatique le même jour chaque mois</li>
                        <li>• Moyens de paiement acceptés : carte bancaire</li>
                        <li>• En cas d'échec de paiement : suspension du service après 7 jours</li>
                        <li>• Aucun remboursement au prorata en cas de résiliation en cours de mois</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Résiliation */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">5. Résiliation</h2>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <RefreshCw className="w-6 h-6 text-gray-600 mr-3" />
                      <h3 className="text-lg font-semibold">Résiliation par le client</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                        <span className="text-gray-700"><strong>Liberté totale :</strong> Résiliation possible à tout moment</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                        <span className="text-gray-700"><strong>Modalités :</strong> Via le tableau de bord ou par email</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                        <span className="text-gray-700"><strong>Préavis :</strong> Aucun préavis requis</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                        <span className="text-gray-700"><strong>Effet :</strong> Fin du service à la prochaine échéance de facturation</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h3 className="text-lg font-semibold mb-4 text-red-900">Résiliation par ChatSeller</h3>
                    <p className="text-red-800 mb-3">
                      Nous nous réservons le droit de suspendre ou résilier un compte dans les cas suivants :
                    </p>
                    <ul className="space-y-1 text-red-800">
                      <li>• Non-paiement après mise en demeure</li>
                      <li>• Utilisation contraire aux présentes conditions</li>
                      <li>• Activité frauduleuse ou malveillante</li>
                      <li>• Violation des lois en vigueur</li>
                    </ul>
                    <p className="text-red-800 mt-3 text-sm">
                      <strong>Préavis :</strong> 30 jours par email (sauf cas urgent)
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. Limitations et responsabilité */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">6. Limitations et responsabilité</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="text-lg font-semibold mb-4 text-blue-900">Garanties du service</h3>
                    <div className="space-y-2 text-blue-800">
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        <span><strong>Disponibilité :</strong> 99% de temps de fonctionnement (objectif)</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        <span><strong>Support :</strong> Assistance par email sous 24h</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        <span><strong>Sécurité :</strong> Chiffrement et protection des données</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        <span><strong>Conformité :</strong> Respect des réglementations en vigueur</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-yellow-900 mb-2">Limitations de responsabilité</h3>
                        <ul className="space-y-1 text-yellow-800 text-sm">
                          <li>• ChatSeller est un outil d'aide à la vente, les résultats peuvent varier</li>
                          <li>• Nous ne garantissons pas d'augmentation spécifique des ventes</li>
                          <li>• La responsabilité est limitée au montant des sommes versées</li>
                          <li>• Exclusion des dommages indirects ou de perte d'exploitation</li>
                          <li>• Le client reste responsable de ses obligations légales et fiscales</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Propriété intellectuelle */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">7. Propriété intellectuelle</h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Droits de ChatSeller</h3>
                      <p className="text-gray-700">
                        Le service ChatSeller, son code source, ses algorithmes et sa documentation sont la propriété 
                        exclusive de TEKKI GROUP. Toute reproduction, distribution ou modification non autorisée est interdite.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Droits du client</h3>
                      <p className="text-gray-700">
                        Le client conserve tous les droits sur ses données, contenus et marques. ChatSeller dispose 
                        d'une licence d'utilisation limitée aux fins de fourniture du service.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Licence d'utilisation</h3>
                      <p className="text-gray-700">
                        Licence non-exclusive, non-transférable, limitée à la durée de l'abonnement, 
                        pour l'utilisation du service dans le cadre défini par ces conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. Modifications */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">8. Modifications des conditions</h2>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. 
                      Les modifications entreront en vigueur 30 jours après notification par email.
                    </p>
                    <p className="text-gray-700">
                      <strong>En cas de désaccord</strong> avec les nouvelles conditions, vous pouvez résilier 
                      votre abonnement avant leur entrée en vigueur.
                    </p>
                    <p className="text-gray-700">
                      <strong>Notification :</strong> Les modifications importantes seront communiquées par email 
                      et affichées dans votre tableau de bord.
                    </p>
                  </div>
                </div>
              </div>

              {/* 9. Contact et litiges */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">9. Contact et résolution des litiges</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                    <div className="flex items-center mb-4">
                      <Mail className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-lg font-semibold text-primary">Support client</h3>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Email :</strong> <a href="mailto:support@chatseller.app" className="text-primary hover:underline">support@chatseller.app</a></p>
                      <p><strong>Délai de réponse :</strong> 24h maximum</p>
                      <p><strong>Horaires :</strong> Lundi au vendredi, 9h-18h GMT</p>
                      <p><strong>Langues :</strong> Français, Anglais</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                      <Scale className="w-6 h-6 text-gray-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Juridiction</h3>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Droit applicable :</strong> Droit sénégalais</p>
                      <p><strong>Tribunaux compétents :</strong> Dakar, Sénégal</p>
                      <p><strong>Médiation :</strong> Tentative de résolution amiable préalable</p>
                      <p><strong>Prescription :</strong> 1 an à compter du fait générateur</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer des conditions */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 text-center">
                <p className="text-blue-800 mb-2">
                  <strong>En utilisant ChatSeller, vous acceptez ces conditions d'utilisation.</strong>
                </p>
                <p className="text-blue-700 text-sm">
                  Dernière mise à jour : 14 juillet 2025 • Version 1.0
                </p>
                <p className="text-blue-700 text-sm mt-2">
                  Pour toute question : <a href="mailto:support@chatseller.app" className="text-primary hover:underline">support@chatseller.app</a>
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