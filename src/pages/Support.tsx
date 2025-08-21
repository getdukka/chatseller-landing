// src/pages/Support.tsx
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MessageCircle, 
  HelpCircle, 
  CheckCircle, 
  AlertCircle,
  Mail,
  Clock,
  Users,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const supportCategories = [
    { id: 'all', name: 'Tous', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'installation', name: 'Installation', icon: <Zap className="w-4 h-4" /> },
    { id: 'configuration', name: 'Configuration', icon: <Users className="w-4 h-4" /> },
    { id: 'billing', name: 'Facturation', icon: <MessageCircle className="w-4 h-4" /> },
    { id: 'technical', name: 'Technique', icon: <AlertCircle className="w-4 h-4" /> }
  ];

  const faqData = [
    {
      category: 'installation',
      question: 'Comment installer ChatSeller sur mon site Shopify ?',
      answer: `L'installation sur Shopify est très simple :
      
1. **Connectez-vous** à votre Dashboard ChatSeller
2. **Créez votre agent IA** avec vos informations produit
3. **Copiez le code d'intégration** fourni
4. Dans Shopify Admin → **Boutique en ligne** → **Thèmes** → **Actions** → **Modifier le code**
5. Ouvrez **theme.liquid** et collez le code avant </head>
6. **Sauvegardez** - Votre vendeur IA est actif !

⏱️ **Temps total : 2-3 minutes maximum**

Need help? Contactez-nous via le formulaire ci-dessous.`,
      tags: ['shopify', 'installation', 'code']
    },
    {
      category: 'installation',
      question: 'ChatSeller fonctionne-t-il sur WooCommerce ?',
      answer: `Oui ! ChatSeller est parfaitement compatible avec WooCommerce :

**Méthode 1 - Plugin (Recommandée)**
1. Téléchargez notre plugin WordPress depuis le Dashboard
2. Installez via **Extensions** → **Ajouter** → **Téléverser**
3. Activez et configurez avec votre clé API

**Méthode 2 - Code manuel**
1. Copiez le code d'intégration depuis votre Dashboard
2. Allez dans **Apparence** → **Éditeur de thème**
3. Ajoutez le code dans **functions.php** ou dans un fichier de template

✅ **Compatible avec toutes les versions WooCommerce 3.0+**`,
      tags: ['woocommerce', 'wordpress', 'plugin']
    },
    {
      category: 'installation',
      question: 'Puis-je installer ChatSeller sur un site HTML personnalisé ?',
      answer: `Absolument ! ChatSeller fonctionne sur n'importe quel site web :

**Installation universelle :**
1. Copiez le code JavaScript depuis votre Dashboard
2. Collez-le dans la section <head> ou avant </body>
3. Le widget s'affiche automatiquement

**Personnalisation avancée :**
- Position du bouton configurable
- Couleurs et design adaptables
- Intégration avec votre panier existant
- API disponible pour développeurs

💡 **Fonctionne avec :** HTML, PHP, React, Vue, Angular, etc.`,
      tags: ['html', 'javascript', 'custom']
    },
    {
      category: 'configuration',
      question: 'Comment personnaliser la personnalité de mon agent IA ?',
      answer: `Vous avez un contrôle total sur votre agent IA :

**Dans le Dashboard → Configuration Agent :**

**1. Personnalité de base**
- Ton : Professionnel, Amical, Expert, Décontracté
- Style : Direct, Consultant, Storytelling, Technique

**2. Messages personnalisés**
- Message d'accueil
- Réponses aux objections courantes
- Messages de relance

**3. Connaissances produits**
- Importez vos fiches produits
- Ajoutez vos FAQ
- Configurez les arguments de vente

**4. Objectifs commerciaux**
- Priorités de vente
- Produits à pousser
- Seuils de négociation

💡 **Conseil :** Testez différentes personnalités avec notre simulateur intégré !`,
      tags: ['personnalisation', 'agent', 'configuration']
    },
    {
      category: 'configuration',
      question: 'Comment l\'agent IA apprend-il sur mes produits ?',
      answer: `L'agent IA se forme sur vos produits via plusieurs méthodes :

**1. Import automatique**
- Connectez votre catalogue (Shopify, WooCommerce, etc.)
- Synchronisation automatique des nouveaux produits
- Mise à jour des prix et stock en temps réel

**2. Base de connaissances**
- Uploadez vos documents PDF/Word
- FAQ existantes
- Guides d'utilisation
- Politiques de retour/garantie

**3. Apprentissage continu**
- L'IA analyse les conversations
- Améliore ses réponses automatiquement
- Vous signale les questions récurrentes

**4. Configuration manuelle**
- Ajoutez des informations spécifiques
- Définissez les arguments de vente
- Configurez les réponses aux objections

📈 **Résultat :** Un agent de plus en plus expert sur VOS produits`,
      tags: ['apprentissage', 'produits', 'base-connaissances']
    },
    {
      category: 'technical',
      question: 'Que faire si le widget ne s\'affiche pas ?',
      answer: `Voici comment diagnostiquer et résoudre le problème :

**Vérifications de base :**
1. ✅ Le code est-il correctement installé ?
2. ✅ Pas d'erreurs dans la console navigateur (F12)
3. ✅ Votre plan est-il actif ?
4. ✅ L'agent IA est-il activé ?

**Solutions courantes :**

**Shopify :** Videz le cache (Boutique en ligne → Préférences → Purger le cache)

**WordPress :** Désactivez temporairement les plugins de cache (WP Rocket, W3 Total Cache)

**Sites personnalisés :** Vérifiez qu'il n'y a pas de conflit JavaScript

**Bloqueurs de pub :** Ajoutez widget.chatseller.app à la liste blanche

**Toujours pas résolu ?**
Contactez-nous avec :
- URL de votre site
- Navigateur utilisé
- Capture d'écran de la console (F12)

⚡ **Support prioritaire pour les clients Pro/Enterprise**`,
      tags: ['bug', 'widget', 'affichage', 'dépannage']
    },
    {
      category: 'technical',
      question: 'ChatSeller ralentit-il mon site web ?',
      answer: `Non ! ChatSeller est optimisé pour la performance :

**Optimisations techniques :**
- ⚡ **Chargement asynchrone** : N'impacte pas le temps de chargement
- 🪶 **Script léger** : Seulement 45kb compressé
- 🚀 **CDN global** : Livraison ultra-rapide depuis le serveur le plus proche
- 💾 **Cache intelligent** : Le widget se charge instantanément après la première visite

**Tests de performance :**
- **Page Speed** : Aucun impact sur le score Google
- **Time to Interactive** : +0.1s maximum
- **Lighthouse** : Score maintenu

**Monitoring inclus :**
- Surveillance 24/7 de la performance
- Alertes automatiques en cas de problème
- Optimisations continues

🎯 **Résultat :** Plus de conversions SANS ralentir votre site`,
      tags: ['performance', 'vitesse', 'seo']
    },
    {
      category: 'billing',
      question: 'Comment fonctionne la facturation de ChatSeller ?',
      answer: `Facturation simple et transparente :

**Plans disponibles :**
- **Starter** : 19€/mois - 1000 messages
- **Professional** : 29€/mois - 5000 messages  
- **Enterprise** : Sur mesure - Illimité

**Ce qui est inclus :**
✅ **Tous les plans :** Pas de commission sur vos ventes
✅ **Pas de frais cachés** : Prix fixe mensuel
✅ **7 jours gratuits** sur le plan Starter
✅ **Annulation en 1 clic** à tout moment

**Méthodes de paiement :**
- Carte bancaire (Visa, Mastercard)
- PayPal
- Virement SEPA (sur demande)

**Facturation :**
- Prélèvement automatique le même jour chaque mois
- Facture envoyée par email
- Historique dans votre Dashboard

💡 **Garantie** : Satisfait ou remboursé sous 30 jours`,
      tags: ['prix', 'facturation', 'abonnement']
    },
    {
      category: 'billing',
      question: 'Puis-je changer de plan à tout moment ?',
      answer: `Oui, vous avez une flexibilité totale :

**Upgrade (Starter → Pro/Enterprise) :**
- ✅ **Immédiat** : Nouvelles fonctionnalités activées instantanément
- ✅ **Prorata** : Vous payez seulement la différence jusqu'à la fin du mois
- ✅ **Sans interruption** : Votre agent IA reste actif

**Downgrade (Pro → Starter) :**
- 📅 **Fin de période** : Changement effectif au prochain cycle
- 💾 **Données conservées** : Aucune perte d'historique
- ⚠️ **Limites appliquées** : Fonctions avancées désactivées

**Annulation :**
- 🔴 **En 1 clic** depuis votre Dashboard
- 📱 **Aucun préavis** requis
- 💸 **Remboursement prorata** si annulation en cours de mois

**Réactivation :**
- ✅ **Instantanée** : Reprenez où vous vous étiez arrêté
- 📊 **Historique préservé** : Toutes vos données sont sauvegardées

🎯 **Aucun engagement, liberté totale !**`,
      tags: ['changement-plan', 'annulation', 'flexibilité']
    }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const handleSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi (remplace par vraie API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setContactForm({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-6 mx-auto">
          <div className="flex items-center mb-6">
            <Button variant="ghost" className="mr-4" asChild>
              <a href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </a>
            </Button>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Centre d'aide ChatSeller
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Trouvez rapidement les réponses à vos questions ou contactez notre équipe support
            </p>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher dans la documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 border-b">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="font-semibold"> 2 minutes</div>
              <div className="text-sm text-gray-600">Temps de réponse moyen</div>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="font-semibold">24/7</div>
              <div className="text-sm text-gray-600">Support disponible</div>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <CheckCircle className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="font-semibold">98%</div>
              <div className="text-sm text-gray-600">Problèmes résolus</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-6 mx-auto py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>
            
            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQ.map((item, index) => (
                <FAQItem key={index} {...item} />
              ))}
              
              {filteredFAQ.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Aucun résultat trouvé
                  </h3>
                  <p className="text-gray-600">
                    Essayez d'autres mots-clés ou contactez notre support
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm border sticky top-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                Contactez le support
              </h3>
              
              {submitSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="font-semibold text-green-900 mb-2">
                    Message envoyé !
                  </h4>
                  <p className="text-green-700 text-sm">
                    Notre équipe vous répondra sous 2h en moyenne.
                  </p>
                  <Button 
                    className="mt-4" 
                    onClick={() => setSubmitSuccess(false)}
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmitContact} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nom complet</label>
                    <Input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Catégorie</label>
                    <select
                      value={contactForm.category}
                      onChange={(e) => setContactForm({...contactForm, category: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="general">Question générale</option>
                      <option value="technical">Problème technique</option>
                      <option value="billing">Facturation</option>
                      <option value="feature">Demande de fonctionnalité</option>
                      <option value="bug">Signaler un bug</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Sujet</label>
                    <Input
                      type="text"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Décrivez votre problème ou question en détail..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              )}
              
              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm text-gray-600 mb-2">Besoin d'aide urgente ?</p>
                <a 
                  href="mailto:support@chatseller.app"
                  className="text-primary hover:underline font-medium"
                >
                  support@chatseller.app
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer, tags }: { question: string; answer: string; tags: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-lg border">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <ArrowRight className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4">
          <div className="text-gray-600 whitespace-pre-line mb-4">
            {answer}
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportPage;