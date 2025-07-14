// src/components/FAQSection.tsx
import React, { useState } from 'react';
import { 
  Plus, 
  Minus, 
  MessageCircle, 
  Shield, 
  Zap, 
  CreditCard,
  Globe,
  BarChart3,
  Users,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQItem = ({ 
  question, 
  answer, 
  isOpen, 
  onToggle, 
  icon 
}: {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
}) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white/60 backdrop-blur-sm hover:shadow-md transition-all duration-300">
      <button
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <span className="font-semibold text-gray-900">{question}</span>
        </div>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-5 h-5 text-primary" />
          ) : (
            <Plus className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-5 animate-fade-in">
          <div className="pl-14 text-gray-600 leading-relaxed">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

const ContactCTA = () => (
  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
    <div className="flex items-start space-x-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white">
        <MessageCircle className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 mb-2">Vous ne trouvez pas votre réponse ?</h4>
        <p className="text-gray-600 mb-4">
          Notre équipe est là pour répondre à toutes vos questions spécifiques.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button size="sm" className="group">
            <a href="mailto:support@chatseller.app" className="flex items-center">
              Nous contacter
              <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="outline" size="sm">
            <a href="https://cal.com/chatseller/demo" className="flex items-center">
              Réserver une démo
            </a>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      title: "Questions Techniques",
      icon: <Zap className="w-5 h-5" />,
      questions: [
        {
          question: "ChatSeller fonctionne-t-il sur Shopify, WooCommerce et Wix ?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>Oui, ChatSeller s'intègre parfaitement sur toutes les plateformes e-commerce :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Shopify :</strong> Plugin officiel, installation en 1 clic</li>
                <li><strong>WooCommerce :</strong> Plugin WordPress disponible</li>
                <li><strong>Wix :</strong> Widget HTML embeddable</li>
                <li><strong>Sites personnalisés :</strong> Simple script JavaScript</li>
                <li><strong>Prestashop, Magento :</strong> Code d'intégration universel</li>
              </ul>
              <p className="mt-3 text-sm text-green-600">
                ✅ Installation en 2 minutes maximum, guide détaillé fourni pour chaque plateforme.
              </p>
            </div>
          ),
          icon: <Globe className="w-5 h-5" />
        },
        {
          question: "L'agent IA parle-t-il français et anglais ?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>Oui, ChatSeller est entièrement multilingue :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Français :</strong> Natif, adapté au marché africain francophone</li>
                <li><strong>Anglais :</strong> Support complet pour le marché anglophone</li>
                <li><strong>Espagnol :</strong> Disponible sur demande</li>
                <li><strong>Détection automatique :</strong> L'IA détecte la langue du visiteur</li>
                <li><strong>Langage local :</strong> Expressions et références culturelles adaptées</li>
              </ul>
              <p className="mt-3 text-sm text-blue-600">
                💡 L'IA s'adapte automatiquement au contexte culturel de vos clients africains.
              </p>
            </div>
          ),
          icon: <Globe className="w-5 h-5" />
        },
        {
          question: "Mes données client sont-elles sécurisées ?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>La sécurité est notre priorité absolue :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>RGPD compliant :</strong> Conformité totale aux réglementations européennes</li>
                <li><strong>Chiffrement end-to-end :</strong> Toutes les données sont cryptées</li>
                <li><strong>Serveurs européens :</strong> Hébergement en Europe (pas aux USA)</li>
                <li><strong>Consentement explicite :</strong> Demande d'autorisation avant collecte</li>
                <li><strong>Droit à l'oubli :</strong> Suppression des données sur demande</li>
                <li><strong>Audits réguliers :</strong> Sécurité vérifiée par des tiers</li>
              </ul>
              <p className="mt-3 text-sm text-green-600">
                🔒 Certificat SSL, conformité bancaire, vos données sont plus sécurisées qu'avec la plupart des solutions.
              </p>
            </div>
          ),
          icon: <Shield className="w-5 h-5" />
        },
        {
          question: "Comment l'IA apprend-elle sur mes produits ?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>Formation simple et rapide de votre agent IA :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Import automatique :</strong> Connectez votre catalogue produit</li>
                <li><strong>Documents PDF/Word :</strong> Uploadez vos guides, FAQ, politiques</li>
                <li><strong>Formation manuelle :</strong> Saisissez les infos importantes</li>
                <li><strong>Apprentissage continu :</strong> L'IA s'améliore avec chaque conversation</li>
                <li><strong>Mise à jour facile :</strong> Modifiez les connaissances depuis le dashboard</li>
              </ul>
              <p className="mt-3 text-sm text-blue-600">
                🧠 Plus vous l'utilisez, plus l'IA devient experte sur vos produits et clients.
              </p>
            </div>
          ),
          icon: <BarChart3 className="w-5 h-5" />
        }
      ]
    },
    {
      title: "Questions Business",
      icon: <Users className="w-5 h-5" />,
      questions: [
        {
          question: "Combien de temps pour voir des résultats ?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>Les résultats sont immédiats :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Jour 1 :</strong> Agent IA opérationnel et conversations actives</li>
                <li><strong>Semaine 1 :</strong> +40% d'engagement visiteurs en moyenne</li>
                <li><strong>Semaine 2-3 :</strong> +65% de taux de conversion observé</li>
                <li><strong>Mois 1 :</strong> ROI positif garanti ou remboursement</li>
                <li><strong>Mois 2-3 :</strong> Optimisation complète, +147% conversion</li>
              </ul>
              <p className="mt-3 text-sm text-green-600">
                📈 <strong>Résultat typique :</strong> +2,847€ de revenus supplémentaires dès le premier mois (pour 1000 visiteurs/mois).
              </p>
            </div>
          ),
          icon: <BarChart3 className="w-5 h-5" />
        },
        {
          question: "ChatSeller va-t-il remplacer mon équipe de vente ?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>Non, ChatSeller complète et optimise votre équipe :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Première ligne :</strong> L'IA gère les questions répétitives 24h/24</li>
                <li><strong>Qualification :</strong> L'IA qualifie les leads avant de les transférer</li>
                <li><strong>Gain de temps :</strong> Votre équipe se concentre sur les ventes complexes</li>
                <li><strong>Escalade intelligente :</strong> Transfert automatique si besoin humain</li>
                <li><strong>Formation équipe :</strong> Analytics pour améliorer vos vendeurs</li>
              </ul>
              <p className="mt-3 text-sm text-blue-600">
                👥 Résultat : Votre équipe devient 3x plus efficace en se concentrant sur les vraies opportunités.
              </p>
            </div>
          ),
          icon: <Users className="w-5 h-5" />
        },
        {
          question: "Puis-je personnaliser la personnalité de l'agent IA ?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>Absolument ! Contrôle total sur votre agent :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personnalité :</strong> Professionnel, décontracté, expert, amical...</li>
                <li><strong>Ton de voix :</strong> Adapté à votre marque et clientèle</li>
                <li><strong>Avatar :</strong> Photo, nom, titre personnalisables</li>
                <li><strong>Messages types :</strong> Salutations et réponses sur mesure</li>
                <li><strong>Spécialisation :</strong> Mode, tech, alimentaire, beauté...</li>
                <li><strong>Couleurs :</strong> Widget aux couleurs de votre marque</li>
              </ul>
              <p className="mt-3 text-sm text-purple-600">
                🎨 Votre agent IA devient une vraie extension de votre équipe avec votre identité.
              </p>
            </div>
          ),
          icon: <Users className="w-5 h-5" />
        },
        {
          question: "Que se passe-t-il si l'IA ne sait pas répondre ?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>Système de fallback intelligent :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Admission honnête :</strong> "Je vais chercher cette information pour vous"</li>
                <li><strong>Collecte contact :</strong> Récupère nom/email pour suivi humain</li>
                <li><strong>Notification équipe :</strong> Votre équipe reçoit la question</li>
                <li><strong>Base apprentissage :</strong> La question enrichit la base IA</li>
                <li><strong>Réponse rapide :</strong> Votre équipe répond sous 2h en moyenne</li>
              </ul>
              <p className="mt-3 text-sm text-orange-600">
                🔄 Chaque question non résolue améliore l'IA pour les prochains clients.
              </p>
            </div>
          ),
          icon: <MessageCircle className="w-5 h-5" />
        }
      ]
    },
    {
      title: "Questions Pricing & Engagement",
      icon: <CreditCard className="w-5 h-5" />,
      questions: [
        {
          question: "Y a-t-il des frais cachés ou commissions sur mes ventes ?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>Prix 100% transparent, aucune commission :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Prix fixe :</strong> 0€ (Starter) ou 29€/mois (Pro), c'est tout</li>
                <li><strong>Aucune commission :</strong> 0% sur vos ventes, 100% pour vous</li>
                <li><strong>Pas de frais cachés :</strong> Installation, mises à jour, support inclus</li>
                <li><strong>Pas de limite :</strong> Vendez autant que vous voulez</li>
                <li><strong>Facture simple :</strong> Un seul prélèvement mensuel</li>
              </ul>
              <p className="mt-3 text-sm text-green-600">
                💰 <strong>Exemple :</strong> Si vous générez +5,000€/mois grâce à ChatSeller, vous payez toujours 29€/mois.
              </p>
            </div>
          ),
          icon: <CreditCard className="w-5 h-5" />
        },
        {
          question: "Le plan gratuit est-il vraiment gratuit à vie ?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>Oui, gratuit à vie avec de vraies fonctionnalités :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>100 conversations/mois :</strong> Suffisant pour tester et petites boutiques</li>
                <li><strong>Agent IA complet :</strong> Même intelligence que les plans payants</li>
                <li><strong>Pas de carte bancaire :</strong> Inscription sans aucun moyen de paiement</li>
                <li><strong>Support inclus :</strong> Email support même en gratuit</li>
                <li><strong>Upgrade simple :</strong> Passez au Pro quand vous voulez</li>
              </ul>
              <p className="mt-3 text-sm text-blue-600">
                🎁 Nous sommes confiants que vous allez adorer ChatSeller et vouloir upgrader naturellement.
              </p>
            </div>
          ),
          icon: <CreditCard className="w-5 h-5" />
        },
        {
          question: "Puis-je annuler à tout moment ?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>Liberté totale, aucun engagement :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Annulation 1 clic :</strong> Depuis votre dashboard, immédiat</li>
                <li><strong>Aucun préavis :</strong> Pas de période de préavis obligatoire</li>
                <li><strong>Prorata :</strong> Remboursement au prorata si annulation</li>
                <li><strong>Export données :</strong> Récupérez vos conversations et analytics</li>
                <li><strong>Réactivation facile :</strong> Reprenez quand vous voulez</li>
              </ul>
              <p className="mt-3 text-sm text-green-600">
                ✅ <strong>Garantie 30 jours :</strong> Satisfait ou 100% remboursé, sans justification.
              </p>
            </div>
          ),
          icon: <Shield className="w-5 h-5" />
        },
        {
          question: "Quelle est la différence avec les autres chatbots ?",
          answer: (
            <div>
              <p className="mb-3">
                <strong>ChatSeller n'est pas un chatbot, c'est un vendeur IA :</strong>
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <h5 className="font-semibold text-gray-900 mb-2">Chatbots traditionnels :</h5>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Réponses automatiques basiques</li>
                  <li>FAQ statique</li>
                  <li>Pas de collecte de commandes</li>
                  <li>Pas d'upsell intelligent</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-900 mb-2">ChatSeller :</h5>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Conversations naturelles avec IA GPT-4</li>
                  <li>Collecte vraiment les commandes</li>
                  <li>Upsell intelligent et contextuel</li>
                  <li>Apprentissage sur vos produits spécifiques</li>
                  <li>Analytics de conversion avancées</li>
                </ul>
              </div>
            </div>
          ),
          icon: <Zap className="w-5 h-5" />
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      categoryIndex,
      globalIndex: categoryIndex * 10 + questionIndex
    }))
  );

  return (
    <section id="faq" className="py-24 relative bg-gradient-to-b from-white to-blue-50">
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-purple-50/50 rounded-l-3xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-blue-200 rounded-full bg-blue-50 text-sm font-medium text-blue-700 animate-fade-in">
            <MessageCircle className="w-4 h-4 mr-2" />
            Toutes vos questions ont des réponses
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            Questions fréquentes sur 
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> ChatSeller</span>
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
            Tout ce que vous devez savoir avant d'ajouter notre Vendeur IA sur votre site. 
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 animate-fade-in [animation-delay:600ms]">
            {allQuestions.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                icon={item.icon}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
          
          {/* Contact CTA */}
          <div className="mt-12 animate-fade-in [animation-delay:800ms]">
            <ContactCTA />
          </div>
          
          {/* Bottom Statistics 
          <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in [animation-delay:1000ms]">
            <div className="text-center p-6 bg-white/60 rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-primary mb-2">2 min</div>
              <p className="text-sm text-muted-foreground">Installation moyenne</p>
            </div>
            
            <div className="text-center p-6 bg-white/60 rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">+147%</div>
              <p className="text-sm text-muted-foreground">Conversion moyenne</p>
            </div>
            
            <div className="text-center p-6 bg-white/60 rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <p className="text-sm text-muted-foreground">Satisfaction client</p>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;