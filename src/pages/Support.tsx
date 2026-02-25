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
  ArrowRight,
  Heart,
  Sparkles,
  ShoppingCart,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NewNavbar from '@/components/NewNavBar';
import Footer from '../components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const SupportPage = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    brandName: '',
    platform: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const supportCategories = [
    { 
      id: 'all', 
      name: language === 'fr' ? 'Toutes les catégories' : 'All categories', 
      icon: <HelpCircle className="w-4 h-4" /> 
    },
    { 
      id: 'installation', 
      name: language === 'fr' ? 'Installation & Intégration' : 'Installation & Integration', 
      icon: <Zap className="w-4 h-4" /> 
    },
    {
      id: 'configuration',
      name: language === 'fr' ? 'Configuration de Mia' : 'Configure Mia',
      icon: <Heart className="w-4 h-4" />
    },
    { 
      id: 'products', 
      name: language === 'fr' ? 'Gestion Produits' : 'Product Management', 
      icon: <ShoppingCart className="w-4 h-4" /> 
    },
    { 
      id: 'technical', 
      name: language === 'fr' ? 'Support Technique' : 'Technical Support', 
      icon: <Settings className="w-4 h-4" /> 
    },
    { 
      id: 'billing', 
      name: language === 'fr' ? 'Facturation' : 'Billing', 
      icon: <MessageCircle className="w-4 h-4" /> 
    }
  ];

  const beautyFAQData = [
    {
      category: 'installation',
      question: language === 'fr' ?
        'Comment recruter Mia sur ma boutique Shopify ?' :
        'How do I recruit Mia on my Shopify store?',
      answer: language === 'fr' ?
        `**Mia opérationnelle en 2 minutes :**\n\n1. Connectez-vous à votre **Dashboard ChatSeller**\n2. Allez dans "Intégrations" > "Shopify"\n3. Cliquez sur "Connecter ma boutique Shopify"\n4. Autorisez ChatSeller à accéder à votre boutique\n5. Mia est **automatiquement recrutée** et prête à vendre !\n\n*Le widget de Mia apparaîtra immédiatement sur toutes les pages de votre boutique.*` :
        `**Mia up and running in 2 minutes:**\n\n1. Log into your **ChatSeller Dashboard**\n2. Go to "Integrations" > "Shopify"\n3. Click "Connect my Shopify store"\n4. Authorize ChatSeller to access your store\n5. Mia is **automatically recruited** and ready to sell!\n\n*Mia's widget will immediately appear on all pages of your store.*`,
      tags: language === 'fr' ?
        ['shopify', 'installation', 'mia', 'automatique'] :
        ['shopify', 'installation', 'mia', 'automatic']
    },
    {
      category: 'installation',
      question: language === 'fr' ?
        'Mia fonctionne-t-elle avec WooCommerce ?' :
        'Does Mia work with WooCommerce?',
      answer: language === 'fr' ?
        `**Parfaitement compatible avec WooCommerce :**\n\n1. Téléchargez notre **plugin WooCommerce** depuis le dashboard\n2. Installez le plugin dans votre admin WordPress\n3. Entrez votre **clé API ChatSeller**\n4. Configurez les pages où afficher Mia\n5. Mia est opérationnelle et prête à vendre !\n\n*Compatible avec tous les thèmes WooCommerce.*` :
        `**Perfectly compatible with WooCommerce:**\n\n1. Download our **WooCommerce plugin** from the dashboard\n2. Install the plugin in your WordPress admin\n3. Enter your **ChatSeller API key**\n4. Configure which pages to display Mia\n5. Mia is operational and ready to sell!\n\n*Compatible with all WooCommerce themes.*`,
      tags: language === 'fr' ?
        ['woocommerce', 'plugin', 'wordpress', 'mia'] :
        ['woocommerce', 'plugin', 'wordpress', 'mia']
    },
    {
      category: 'configuration',
      question: language === 'fr' ?
        'Comment former Mia sur mes produits et ma marque ?' :
        'How do I train Mia on my products and brand?',
      answer: language === 'fr' ?
        `**Mia apprend votre catalogue automatiquement :**\n\n**Import automatique :**\n• Mia **importe automatiquement** tous vos produits Shopify/WooCommerce\n• Elle analyse les descriptions, bénéfices et caractéristiques\n• Elle reconnaît les catégories produits et recommande intelligemment\n\n**Formation avancée (Base de connaissances) :**\n• Ajoutez des **pages de votre site** (Mia les lit toutes)\n• Téléversez des **fiches produits, guides ou PDF**\n• Rédigez des **instructions spécifiques** pour Mia\n• Plus Mia sait, mieux elle vend !` :
        `**Mia learns your catalog automatically:**\n\n**Automatic import:**\n• Mia **automatically imports** all your Shopify/WooCommerce products\n• She analyzes descriptions, benefits, and features\n• She recognizes product categories and makes smart recommendations\n\n**Advanced training (Knowledge base):**\n• Add **pages from your site** (Mia reads them all)\n• Upload **product sheets, guides, or PDFs**\n• Write **specific instructions** for Mia\n• The more Mia knows, the better she sells!`,
      tags: language === 'fr' ?
        ['formation', 'produits', 'mia', 'configuration'] :
        ['training', 'products', 'mia', 'configuration']
    },
    {
      category: 'configuration',
      question: language === 'fr' ?
        'Comment personnaliser la personnalité de Mia ?' :
        'How do I customize Mia\'s personality?',
      answer: language === 'fr' ?
        `**Mia s'adapte à votre image de marque :**\n\n**Dans "Vendeuse IA" > "Personnalité" :**\n• **Nom :** Donnez à Mia le nom que vous voulez (Mia, Léa, Aïcha...)\n• **Style :** Professionnel, Amical, Expert, Décontracté\n• **Message de bienvenue :** Personnalisez comment Mia accueille vos visiteurs\n• **Couleur du widget :** Assorti à votre charte graphique\n\n**Exemples de Mia selon votre marque :**\n• "Mia, votre styliste personnelle disponible 24/7"\n• "Léa, experte produits de la maison"\n• "Aïcha, conseillère de confiance de votre marque"` :
        `**Mia adapts to your brand image:**\n\n**In "AI Salesperson" > "Personality":**\n• **Name:** Give Mia the name you want (Mia, Léa, Aïcha...)\n• **Style:** Professional, Friendly, Expert, Casual\n• **Welcome message:** Customize how Mia greets your visitors\n• **Widget color:** Matching your brand colors\n\n**Examples of Mia for your brand:**\n• "Mia, your personal stylist available 24/7"\n• "Léa, product expert of the house"\n• "Aïcha, trusted advisor of your brand"`,
      tags: language === 'fr' ?
        ['personnalisation', 'mia', 'personnalité', 'configuration'] :
        ['customization', 'mia', 'personality', 'configuration']
    },
    {
      category: 'products',
      question: language === 'fr' ?
        'Mia peut-elle recommander des produits et générer des ventes ?' :
        'Can Mia recommend products and generate sales?',
      answer: language === 'fr' ?
        `**Oui, c'est le cœur du métier de Mia :**\n\n**Analyse du besoin client :**\n• Mia pose les **bonnes questions** pour comprendre le besoin\n• Elle analyse les réponses et identifie les produits adaptés\n• Elle présente les produits avec leurs **photos, prix et bénéfices**\n\n**Vente conversationnelle :**\n• **Recommandations personnalisées** depuis votre catalogue\n• **Upsell et cross-sell** naturels dans la conversation\n• Collecte les **commandes directement dans le chat**\n• **Rassure et lève les objections** avant l'achat\n\n*En moyenne, les boutiques utilisant Mia voient +150% de conversions.*` :
        `**Yes, that's Mia's core job:**\n\n**Customer need analysis:**\n• Mia asks the **right questions** to understand the need\n• She analyzes responses and identifies suitable products\n• She presents products with their **photos, prices, and benefits**\n\n**Conversational selling:**\n• **Personalized recommendations** from your catalog\n• Natural **upsell and cross-sell** within conversation\n• Collects **orders directly in the chat**\n• **Reassures and handles objections** before purchase\n\n*On average, stores using Mia see +150% conversions.*`,
      tags: language === 'fr' ?
        ['recommandations', 'ventes', 'mia', 'conversions'] :
        ['recommendations', 'sales', 'mia', 'conversions']
    },
    {
      category: 'products',
      question: language === 'fr' ?
        'Mia gère-t-elle les variantes produits (couleurs, tailles, formats) ?' :
        'Does Mia handle product variants (colors, sizes, formats)?',
      answer: language === 'fr' ?
        `**Oui, Mia maîtrise toutes vos variantes :**\n\n**Import automatique des variantes :**\n• Détecte toutes les **variantes Shopify/WooCommerce**\n• Analyse les descriptions et caractéristiques de chaque variante\n• Identifie les compatibilités entre variantes et profils clients\n\n**Recommandation intelligente :**\n• Mia pose les **bonnes questions** pour trouver la variante parfaite\n• Elle propose des **alternatives proches** si une variante est épuisée\n• Elle affiche la **fiche produit complète** avec le bon variant sélectionné` :
        `**Yes, Mia masters all your variants:**\n\n**Automatic variant import:**\n• Detects all **Shopify/WooCommerce variants**\n• Analyzes descriptions and characteristics of each variant\n• Identifies compatibility between variants and client profiles\n\n**Smart recommendation:**\n• Mia asks the **right questions** to find the perfect variant\n• She suggests **close alternatives** if a variant is out of stock\n• She displays the **complete product card** with the right variant selected`,
      tags: language === 'fr' ?
        ['variantes', 'produits', 'mia', 'stock'] :
        ['variants', 'products', 'mia', 'stock']
    },
    {
      category: 'technical',
      question: language === 'fr' ? 
        'Le widget ChatSeller ralentit-il mon site beauté ?' :
        'Does the ChatSeller widget slow down my beauty site?',
      answer: language === 'fr' ? 
        `**Performance optimisée pour l'e-commerce beauté :**\n\n**Chargement ultra-rapide :**\n• Widget de seulement **45KB** compressé\n• **Chargement asynchrone** (n'interrompt pas votre site)\n• **CDN mondial** pour une latence minimale\n• **Cache intelligent** des réponses fréquentes\n\n**Impact performance :**\n• **0% d'impact** sur votre score PageSpeed\n• Compatible **SEO et Core Web Vitals**\n• Optimisé pour **mobile et desktop**\n• Tests réalisés sur 200+ sites beauté` :
        `**Performance optimized for beauty e-commerce:**\n\n**Ultra-fast loading:**\n• Widget only **45KB** compressed\n• **Asynchronous loading** (doesn't interrupt your site)\n• **Global CDN** for minimal latency\n• **Smart caching** of frequent responses\n\n**Performance impact:**\n• **0% impact** on your PageSpeed score\n• Compatible **SEO and Core Web Vitals**\n• Optimized for **mobile and desktop**\n• Tested on 200+ beauty sites`,
      tags: language === 'fr' ? 
        ['performance', 'vitesse', 'seo', 'technique'] :
        ['performance', 'speed', 'seo', 'technical']
    },
    {
      category: 'technical',
      question: language === 'fr' ?
        'Que faire si Mia ne répond pas bien à une question ?' :
        'What if Mia doesn\'t respond well to a question?',
      answer: language === 'fr' ?
        `**Former Mia pour qu'elle s'améliore :**\n\n**Diagnostic rapide :**\n• Relisez les **conversations** dans votre dashboard\n• Identifiez les **questions mal comprises**\n• Vérifiez que les **descriptions produits** sont complètes\n\n**Former Mia rapidement :**\n• Ajoutez des **informations** dans "Base de connaissances" → Mia les apprend immédiatement\n• Enrichissez les **fiches produits** avec l'IA intégrée\n• Contactez notre équipe pour un **audit gratuit** de la configuration\n\n**Support expert :**\n• **Chat en direct** avec nos experts ChatSeller\n• Réponse sous **2h** pendant les heures ouvrées` :
        `**Train Mia to improve:**\n\n**Quick diagnosis:**\n• Review **conversations** in your dashboard\n• Identify **misunderstood questions**\n• Check that **product descriptions** are complete\n\n**Train Mia quickly:**\n• Add **information** in "Knowledge base" → Mia learns immediately\n• Enrich **product sheets** with the built-in AI\n• Contact our team for a **free configuration audit**\n\n**Expert support:**\n• **Live chat** with our ChatSeller experts\n• Response within **2h** during business hours`,
      tags: language === 'fr' ?
        ['dépannage', 'formation', 'mia', 'amélioration'] :
        ['troubleshooting', 'training', 'mia', 'improvement']
    },
    {
      category: 'billing',
      question: language === 'fr' ?
        'Quels sont les tarifs pour recruter Mia ?' :
        'What are the pricing plans to recruit Mia?',
      answer: language === 'fr' ? 
        `**3 plans pour recruter Mia :**\n\n**Mia Découverte (45€/mois) :**\n• Jusqu'à **1 000 conversations/mois**\n• Intégration Shopify/WooCommerce\n• Base de connaissances + enrichissement IA\n\n**Mia Pro (145€/mois) :**\n• Jusqu'à **10 000 conversations/mois**\n• Analytics avancés\n• Personnalisation complète\n• Support prioritaire\n\n**Mia Premium (299€/mois) :**\n• **Conversations illimitées**\n• Multi-boutiques\n• API personnalisée\n• Success manager dédié\n\n**✨ 14 jours d'essai gratuits — sans carte bancaire**` :
        `**3 plans to recruit Mia:**\n\n**Mia Starter (€45/month):**\n• Up to **1,000 conversations/month**\n• Shopify/WooCommerce integration\n• Knowledge base + AI enrichment\n\n**Mia Pro (€145/month):**\n• Up to **10,000 conversations/month**\n• Advanced analytics\n• Complete customization\n• Priority support\n\n**Mia Premium (€299/month):**\n• **Unlimited conversations**\n• Multi-store\n• Custom API\n• Dedicated success manager\n\n**✨ 14-day free trial — no credit card required**`,
      tags: language === 'fr' ? 
        ['prix', 'plans', 'facturation', 'beauté'] :
        ['pricing', 'plans', 'billing', 'beauty']
    },
    {
      category: 'billing',
      question: language === 'fr' ? 
        'Puis-je changer de plan ou annuler mon abonnement ?' :
        'Can I change plans or cancel my subscription?',
      answer: language === 'fr' ? 
        `**Flexibilité totale :**\n\n**Changement de plan :**\n• **Upgrade immédiat** : Paiement au prorata\n• **Downgrade** : Effectif au prochain cycle\n• **Pas de frais** de changement\n• **Historique préservé**\n\n**Annulation :**\n• **Annulation immédiate** depuis le dashboard\n• **Pas d'engagement** minimum\n• **Export des données** disponible\n• **Réactivation simple** possible\n\n**Garantie satisfaction :**\n• **Annulation en 1 clic** depuis le dashboard\n• **Migration gratuite** depuis d'autres solutions` :
        `**Total flexibility:**\n\n**Plan changes:**\n• **Immediate upgrade**: Pro-rated payment\n• **Downgrade**: Effective next cycle\n• **No change fees**\n• **History preserved**\n\n**Cancellation:**\n• **Immediate cancellation** from dashboard\n• **No minimum commitment**\n• **Data export** available\n• **Simple reactivation** possible\n\n**Satisfaction guarantee:**\n• **Cancel in 1 click** from dashboard\n• **Free migration** from other solutions`,
      tags: language === 'fr' ? 
        ['annulation', 'changement', 'flexibilité', 'remboursement'] :
        ['cancellation', 'changes', 'flexibility', 'refund']
    }
  ];

  const filteredFAQ = beautyFAQData.filter(item => {
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
    setSubmitError('');
    
    try {
      const response = await fetch('https://chatseller-api-production.up.railway.app/api/v1/public/support/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...contactForm,
          type: 'brand_support'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setContactForm({
          name: '',
          email: '',
          brandName: '',
          platform: '',
          subject: '',
          message: '',
          category: 'general'
        });
      } else {
        setSubmitError(data.error || (language === 'fr' ? 'Une erreur est survenue. Veuillez réessayer.' : 'An error occurred. Please try again.'));
      }
    } catch (error) {
      setSubmitError(language === 'fr' ? 'Une erreur est survenue. Veuillez réessayer.' : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const parseMarkdown = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">$1</code>');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/30 to-white">
      <NewNavbar />
      
      {/* Header Beauté */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-rose-50 via-pink-50/50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-rose-200/20 to-pink-200/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-rose-200/10 rounded-full blur-2xl -z-10" />
        
        <div className="container px-6 mx-auto relative z-10">
          <div className="flex items-center mb-6">
            <Button variant="ghost" className="mr-4 hover:bg-rose-100" asChild>
              <a href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}
              </a>
            </Button>
          </div>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 mb-6 border border-rose-200 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 text-sm font-semibold text-rose-700">
              <Heart className="w-4 h-4 mr-2" />
              {language === 'fr' ? 'Centre d\'aide ChatSeller' : 'ChatSeller Help Center'}
              <Sparkles className="w-4 h-4 ml-2" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {language === 'fr' ?
                'Recruter et configurer Mia pour votre boutique' :
                'Recruit and configure Mia for your store'}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {language === 'fr' ?
                'Tout ce qu\'il faut savoir pour intégrer Mia, votre Vendeuse IA, et maximiser vos ventes conversationnelles' :
                'Everything you need to integrate Mia, your AI Salesperson, and maximize your conversational sales'}
            </p>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder={language === 'fr' ?
                  'Rechercher (ex: "installer Mia", "configurer la personnalité", "commandes"...)' :
                  'Search (e.g. "install Mia", "configure personality", "orders"...)'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-2xl border-rose-200 focus:border-rose-400 focus:ring-rose-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Support Beauté */}
      <section className="py-8 border-b border-rose-100 bg-white">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-100">
              <Clock className="w-10 h-10 text-rose-500 mx-auto mb-3" />
              <div className="font-bold text-lg text-gray-900 mb-1">
                {language === 'fr' ? '< 2h' : '< 2h'}
              </div>
              <div className="text-sm text-gray-600">
                {language === 'fr' ? 'Temps de réponse moyen' : 'Average response time'}
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-100">
              <Users className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
              <div className="font-bold text-lg text-gray-900 mb-1">24/7</div>
              <div className="text-sm text-gray-600">
                {language === 'fr' ? 'Support disponible' : 'Support available'}
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100">
              <CheckCircle className="w-10 h-10 text-purple-500 mx-auto mb-3" />
              <div className="font-bold text-lg text-gray-900 mb-1">98%</div>
              <div className="text-sm text-gray-600">
                {language === 'fr' ? 'Problèmes résolus en 24h' : 'Issues resolved within 24h'}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-6 mx-auto py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Section FAQ Beauté */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">
              {language === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions'}
            </h2>
            <p className="text-gray-600 mb-8">
              {language === 'fr' ?
                'Tout ce qu\'il faut savoir pour recruter et tirer le meilleur de Mia' :
                'Everything you need to know to recruit and get the most out of Mia'}
            </p>
            
            {/* Filtres Catégories */}
            <div className="flex flex-wrap gap-3 mb-8">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-rose-50 border border-gray-200 hover:border-rose-200'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>
            
            {/* Items FAQ */}
            <div className="space-y-4">
              {filteredFAQ.map((item, index) => (
                <BeautyFAQItem key={index} {...item} parseMarkdown={parseMarkdown} />
              ))}
              
              {filteredFAQ.length === 0 && (
                <div className="text-center py-16">
                  <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {language === 'fr' ? 'Aucun résultat trouvé' : 'No results found'}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {language === 'fr' ? 
                      'Essayez avec d\'autres mots-clés ou contactez notre équipe directement.' : 
                      'Try with other keywords or contact our team directly.'}
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700"
                  >
                    {language === 'fr' ? 'Voir toutes les questions' : 'See all questions'}
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {/* Formulaire Contact Beauté */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-rose-100 sticky top-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {language === 'fr' ? 'Contactez nos experts' : 'Contact our experts'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'fr' ?
                    'Notre équipe répond à toutes vos questions sur Mia' :
                    'Our team answers all your questions about Mia'}
                </p>
              </div>
              
              {submitSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                  <h4 className="font-bold text-emerald-900 mb-3 text-lg">
                    {language === 'fr' ? 'Message envoyé !' : 'Message sent!'}
                  </h4>
                  <p className="text-emerald-700 text-sm mb-6">
                    {language === 'fr' ?
                      'Notre équipe vous répondra sous 2h pendant les heures ouvrées.' :
                      'Our team will respond within 2h during business hours.'}
                  </p>
                  <Button 
                    className="mt-4 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700" 
                    onClick={() => setSubmitSuccess(false)}
                  >
                    {language === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
                  </Button>
                </div>
              ) : (
                <>
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-red-700 text-sm font-medium">{submitError}</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmitContact} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {language === 'fr' ? 'Nom complet' : 'Full name'}
                      </label>
                      <Input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-100"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {language === 'fr' ? 'Email professionnel' : 'Professional email'}
                      </label>
                      <Input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-100"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {language === 'fr' ? 'Nom de votre boutique' : 'Your store name'}
                      </label>
                      <Input
                        type="text"
                        value={contactForm.brandName}
                        onChange={(e) => setContactForm({...contactForm, brandName: e.target.value})}
                        className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-100"
                        placeholder={language === 'fr' ? 'Ex: Ahovi Cosmetics' : 'Ex: Étoile Store'}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {language === 'fr' ? 'Plateforme e-commerce' : 'E-commerce platform'}
                      </label>
                      <select
                        value={contactForm.platform}
                        onChange={(e) => setContactForm({...contactForm, platform: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-400"
                      >
                        <option value="">
                          {language === 'fr' ? 'Sélectionnez votre plateforme' : 'Select your platform'}
                        </option>
                        <option value="shopify">Shopify</option>
                        <option value="woocommerce">WooCommerce</option>
                        <option value="prestashop">PrestaShop</option>
                        <option value="magento">Magento</option>
                        <option value="custom">
                          {language === 'fr' ? 'Site personnalisé' : 'Custom site'}
                        </option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {language === 'fr' ? 'Catégorie' : 'Category'}
                      </label>
                      <select
                        value={contactForm.category}
                        onChange={(e) => setContactForm({...contactForm, category: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-400"
                      >
                        <option value="general">
                          {language === 'fr' ? 'Question générale' : 'General question'}
                        </option>
                        <option value="installation">
                          {language === 'fr' ? 'Installation & Intégration' : 'Installation & Integration'}
                        </option>
                        <option value="configuration">
                          {language === 'fr' ? 'Configuration de Mia' : 'Configure Mia'}
                        </option>
                        <option value="technical">
                          {language === 'fr' ? 'Problème technique' : 'Technical issue'}
                        </option>
                        <option value="billing">
                          {language === 'fr' ? 'Facturation' : 'Billing'}
                        </option>
                        <option value="demo">
                          {language === 'fr' ? 'Demander une démo' : 'Request a demo'}
                        </option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {language === 'fr' ? 'Sujet' : 'Subject'}
                      </label>
                      <Input
                        type="text"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                        className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-100"
                        placeholder={language === 'fr' ?
                          'Ex: Recruter Mia sur Shopify' :
                          'Ex: Recruit Mia on Shopify'}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {language === 'fr' ? 'Message' : 'Message'}
                      </label>
                      <textarea
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-400 resize-none"
                        placeholder={language === 'fr' ? 
                          'Décrivez votre besoin ou votre problème. Plus vous êtes précis, plus nous pourrons vous aider efficacement.' : 
                          'Describe your need or issue. The more specific you are, the better we can help you.'}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          {language === 'fr' ? 'Envoi en cours...' : 'Sending...'}
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5 mr-2" />
                          {language === 'fr' ? 'Envoyer le message' : 'Send message'}
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
              
              <div className="mt-8 pt-6 border-t border-rose-100 text-center">
                <p className="text-sm text-gray-600 mb-3">
                  {language === 'fr' ? 'Besoin d\'aide urgente ?' : 'Need urgent help?'}
                </p>
                <div className="space-y-2">
                  <a 
                    href="mailto:support@chatseller.app"
                    className="block text-rose-600 hover:text-rose-700 font-semibold text-sm hover:underline"
                  >
                    support@chatseller.app
                  </a>
                  <p className="text-xs text-gray-500">
                    {language === 'fr' ? 
                      'Support en français • Réponse sous 2h en journée' : 
                      'French support • Response within 2h during the day'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// Composant FAQ Item spécialisé beauté
const BeautyFAQItem = ({ 
  question, 
  answer, 
  tags, 
  parseMarkdown 
}: { 
  question: string; 
  answer: string; 
  tags: string[];
  parseMarkdown: (text: string) => string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-2xl border border-rose-100 shadow-sm hover:shadow-lg transition-all duration-300">
      <button
        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-rose-50/50 rounded-2xl transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900 pr-4 text-base leading-relaxed">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </button>
      
      {isOpen && (
        <div className="px-8 pb-6">
          <div 
            className="text-gray-700 whitespace-pre-line mb-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(answer) }}
          />
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-medium rounded-full"
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