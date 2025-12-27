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
      name: language === 'fr' ? 'Configuration Beauté' : 'Beauty Configuration', 
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
        'Comment installer ChatSeller sur ma boutique Shopify beauté ?' :
        'How do I install ChatSeller on my Shopify beauty store?',
      answer: language === 'fr' ? 
        `**Installation en 2 minutes :**\n\n1. Connectez-vous à votre **Dashboard ChatSeller**\n2. Allez dans "Intégrations" > "Shopify"\n3. Cliquez sur "Connecter ma boutique Shopify"\n4. Autorisez ChatSeller à accéder à votre boutique\n5. Votre conseillère beauté IA est **automatiquement installée** !\n\n*Votre widget apparaîtra immédiatement sur toutes les pages produits beauté.*` :
        `**2-minute installation:**\n\n1. Log into your **ChatSeller Dashboard**\n2. Go to "Integrations" > "Shopify"\n3. Click "Connect my Shopify store"\n4. Authorize ChatSeller to access your store\n5. Your AI beauty advisor is **automatically installed**!\n\n*Your widget will immediately appear on all beauty product pages.*`,
      tags: language === 'fr' ? 
        ['shopify', 'installation', 'beauté', 'automatique'] :
        ['shopify', 'installation', 'beauty', 'automatic']
    },
    {
      category: 'installation',
      question: language === 'fr' ? 
        'ChatSeller fonctionne-t-il avec WooCommerce pour les marques beauté ?' :
        'Does ChatSeller work with WooCommerce for beauty brands?',
      answer: language === 'fr' ? 
        `**Parfaitement compatible avec WooCommerce :**\n\n1. Téléchargez notre **plugin WooCommerce** depuis le dashboard\n2. Installez le plugin dans votre admin WordPress\n3. Entrez votre **clé API ChatSeller**\n4. Configurez les pages où afficher la conseillère\n5. Votre IA beauté est opérationnelle !\n\n*Compatible avec tous les thèmes beauté et cosmétiques WooCommerce.*` :
        `**Perfectly compatible with WooCommerce:**\n\n1. Download our **WooCommerce plugin** from the dashboard\n2. Install the plugin in your WordPress admin\n3. Enter your **ChatSeller API key**\n4. Configure which pages to display the advisor\n5. Your beauty AI is operational!\n\n*Compatible with all WooCommerce beauty and cosmetics themes.*`,
      tags: language === 'fr' ? 
        ['woocommerce', 'plugin', 'wordpress', 'beauté'] :
        ['woocommerce', 'plugin', 'wordpress', 'beauty']
    },
    {
      category: 'configuration',
      question: language === 'fr' ? 
        'Comment configurer ma conseillère IA pour qu\'elle connaisse mes produits beauté ?' :
        'How do I configure my AI advisor to know my beauty products?',
      answer: language === 'fr' ? 
        `**Configuration automatique + personnalisation :**\n\n**Automatique :**\n• ChatSeller **importe automatiquement** tous vos produits\n• Analyse les descriptions, ingrédients, bénéfices\n• Reconnaît les catégories (skincare, maquillage, parfums...)\n\n**Personnalisation avancée :**\n• Ajoutez des **conseils d'utilisation** spécifiques\n• Définissez les **types de peau** compatibles\n• Configurez les **routines beauté** recommandées\n• Ajoutez des **contre-indications** si nécessaire` :
        `**Automatic configuration + customization:**\n\n**Automatic:**\n• ChatSeller **automatically imports** all your products\n• Analyzes descriptions, ingredients, benefits\n• Recognizes categories (skincare, makeup, fragrances...)\n\n**Advanced customization:**\n• Add specific **usage advice**\n• Define compatible **skin types**\n• Configure recommended **beauty routines**\n• Add **contraindications** if necessary`,
      tags: language === 'fr' ? 
        ['configuration', 'produits', 'ingrédients', 'beauté'] :
        ['configuration', 'products', 'ingredients', 'beauty']
    },
    {
      category: 'configuration',
      question: language === 'fr' ? 
        'Comment personnaliser le ton de ma conseillère beauté IA ?' :
        'How do I customize the tone of my AI beauty advisor?',
      answer: language === 'fr' ? 
        `**Personnalisation complète du ton :**\n\n**Dans "Configuration" > "Personnalité" :**\n• **Style de conseil :** Professionnel, Amical, Expert, Tendance\n• **Niveau d'expertise :** Débutant, Intermédiaire, Expert\n• **Approche vente :** Subtile, Directe, Consultative\n• **Vocabulaire :** Technique, Accessible, Luxe, Naturel\n\n**Exemples pré-configurés pour beauté :**\n• "Esthéticienne experte et bienveillante"\n• "Conseillère beauté branchée et moderne"\n• "Experte cosmétiques naturels et bio"` :
        `**Complete tone customization:**\n\n**In "Configuration" > "Personality":**\n• **Advice style:** Professional, Friendly, Expert, Trendy\n• **Expertise level:** Beginner, Intermediate, Expert\n• **Sales approach:** Subtle, Direct, Consultative\n• **Vocabulary:** Technical, Accessible, Luxury, Natural\n\n**Pre-configured examples for beauty:**\n• "Expert and caring beautician"\n• "Trendy and modern beauty advisor"\n• "Natural and organic cosmetics expert"`,
      tags: language === 'fr' ? 
        ['personnalisation', 'ton', 'conseillère', 'beauté'] :
        ['customization', 'tone', 'advisor', 'beauty']
    },
    {
      category: 'products',
      question: language === 'fr' ? 
        'ChatSeller peut-il recommander des routines beauté complètes ?' :
        'Can ChatSeller recommend complete beauty routines?',
      answer: language === 'fr' ? 
        `**Oui, ChatSeller crée des routines personnalisées :**\n\n**Analyse du profil client :**\n• Type de peau (grasse, sèche, mixte, sensible...)\n• Âge et préoccupations (anti-âge, acné, hydratation...)\n• Budget et préférences (bio, naturel, luxe...)\n• Routine actuelle et objectifs\n\n**Recommandations intelligentes :**\n• **Routine matin/soir** adaptée\n• **Ordre d'application** des produits\n• **Fréquence d'utilisation** optimale\n• **Produits complémentaires** de votre catalogue\n• **Alternatives selon le budget**` :
        `**Yes, ChatSeller creates personalized routines:**\n\n**Client profile analysis:**\n• Skin type (oily, dry, combination, sensitive...)\n• Age and concerns (anti-aging, acne, hydration...)\n• Budget and preferences (organic, natural, luxury...)\n• Current routine and goals\n\n**Smart recommendations:**\n• Adapted **morning/evening routine**\n• **Application order** of products\n• **Optimal usage frequency**\n• **Complementary products** from your catalog\n• **Budget alternatives**`,
      tags: language === 'fr' ? 
        ['routines', 'recommandations', 'skincare', 'personnalisé'] :
        ['routines', 'recommendations', 'skincare', 'personalized']
    },
    {
      category: 'products',
      question: language === 'fr' ? 
        'Comment ChatSeller gère-t-il les teintes et nuances en maquillage ?' :
        'How does ChatSeller handle shades and nuances in makeup?',
      answer: language === 'fr' ? 
        `**Gestion avancée des teintes :**\n\n**Import automatique :**\n• Détecte toutes les **variantes de couleurs**\n• Analyse les descriptions de teintes\n• Reconnaît les **carnations compatibles**\n\n**Conseil personnalisé :**\n• Questions sur la **carnation du client**\n• Recommandations de **teintes adaptées**\n• Suggestions d'**alternatives proches**\n• Conseils d'**application et association**\n\n**Support visuel :**\n• Affichage des **nuanciers disponibles**\n• **Comparaison de teintes**\n• Recommandations **saison/occasion**` :
        `**Advanced shade management:**\n\n**Automatic import:**\n• Detects all **color variants**\n• Analyzes shade descriptions\n• Recognizes **compatible skin tones**\n\n**Personalized advice:**\n• Questions about **client's skin tone**\n• **Adapted shade** recommendations\n• Suggestions for **close alternatives**\n• **Application and pairing** advice\n\n**Visual support:**\n• Display of **available color charts**\n• **Shade comparison**\n• **Season/occasion** recommendations`,
      tags: language === 'fr' ? 
        ['maquillage', 'teintes', 'carnation', 'couleurs'] :
        ['makeup', 'shades', 'skin-tone', 'colors']
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
        'Que faire si ma conseillère IA ne répond pas correctement aux questions beauté ?' :
        'What if my AI advisor doesn\'t respond correctly to beauty questions?',
      answer: language === 'fr' ? 
        `**Amélioration continue de l'IA :**\n\n**Diagnostic automatique :**\n• Analysez les **conversations** dans votre dashboard\n• Identifiez les **questions mal comprises**\n• Consultez les **métriques de satisfaction**\n\n**Amélioration rapide :**\n• Ajoutez des **réponses personnalisées** dans "Base de connaissances"\n• Enrichissez les **descriptions produits**\n• Contactez notre équipe pour un **fine-tuning** gratuit\n• Formation IA mise à jour **chaque semaine**\n\n**Support expert :**\n• **Chat en direct** avec nos experts IA beauté\n• **Audit gratuit** de votre configuration` :
        `**Continuous AI improvement:**\n\n**Automatic diagnosis:**\n• Analyze **conversations** in your dashboard\n• Identify **misunderstood questions**\n• Check **satisfaction metrics**\n\n**Quick improvement:**\n• Add **custom answers** in "Knowledge base"\n• Enrich **product descriptions**\n• Contact our team for free **fine-tuning**\n• AI training updated **every week**\n\n**Expert support:**\n• **Live chat** with our beauty AI experts\n• **Free audit** of your configuration`,
      tags: language === 'fr' ? 
        ['dépannage', 'amélioration', 'ia', 'formation'] :
        ['troubleshooting', 'improvement', 'ai', 'training']
    },
    {
      category: 'billing',
      question: language === 'fr' ? 
        'Quels sont les prix ChatSeller pour une marque beauté ?' :
        'What are ChatSeller prices for a beauty brand?',
      answer: language === 'fr' ? 
        `**Plans adaptés aux marques beauté :**\n\n**Starter (29€/mois) :**\n• Jusqu'à **1 000 conversations/mois**\n• Intégration Shopify/WooCommerce\n• Base de connaissances beauté\n\n**Growth (99€/mois) :**\n• Jusqu'à **10 000 conversations/mois**\n• Analytics avancés\n• Personnalisation complète\n• Support prioritaire\n\n**Pro (299€/mois) :**\n• **Conversations illimitées**\n• Multi-boutiques\n• API personnalisée\n• Success manager dédié\n\n**✨ 14 jours gratuits pour toutes les marques beauté**` :
        `**Plans adapted for beauty brands:**\n\n**Starter (€29/month):**\n• Up to **1,000 conversations/month**\n• Shopify/WooCommerce integration\n• Beauty knowledge base\n\n**Growth (€99/month):**\n• Up to **10,000 conversations/month**\n• Advanced analytics\n• Complete customization\n• Priority support\n\n**Pro (€299/month):**\n• **Unlimited conversations**\n• Multi-store\n• Custom API\n• Dedicated success manager\n\n**✨ 14 days free for all beauty brands**`,
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
        `**Flexibilité totale :**\n\n**Changement de plan :**\n• **Upgrade immédiat** : Paiement au prorata\n• **Downgrade** : Effectif au prochain cycle\n• **Pas de frais** de changement\n• **Historique préservé**\n\n**Annulation :**\n• **Annulation immédiate** depuis le dashboard\n• **Pas d'engagement** minimum\n• **Export des données** disponible\n• **Réactivation simple** possible\n\n**Garantie satisfaction :**\n• **Remboursement intégral** sous 30 jours\n• **Migration gratuite** depuis d'autres solutions` :
        `**Total flexibility:**\n\n**Plan changes:**\n• **Immediate upgrade**: Pro-rated payment\n• **Downgrade**: Effective next cycle\n• **No change fees**\n• **History preserved**\n\n**Cancellation:**\n• **Immediate cancellation** from dashboard\n• **No minimum commitment**\n• **Data export** available\n• **Simple reactivation** possible\n\n**Satisfaction guarantee:**\n• **Full refund** within 30 days\n• **Free migration** from other solutions`,
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
          type: 'beauty_brand_support'
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
              {language === 'fr' ? 'Support Marques Beauté' : 'Beauty Brands Support'}
              <Sparkles className="w-4 h-4 ml-2" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {language === 'fr' ? 
                'Centre d\'aide de ChatSeller pour les marques beauté' : 
                'ChatSeller Help Center for Beauty Brands'}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {language === 'fr' ? 
                'Assistance experte pour optimiser votre conseillère IA et maximiser vos conversions' : 
                'Expert assistance to optimize your AI advisor and maximize your conversions'}
            </p>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder={language === 'fr' ? 
                  'Rechercher dans la documentation (ex: "installation Shopify", "Formation Conseillère IA"...)' : 
                  'Search the docs (e.g. "Shopify installation", "AI Advisor training"...)'}
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
                {language === 'fr' ? 'Temps de réponse moyen pour marques beauté' : 'Average response time for beauty brands'}
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-100">
              <Users className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
              <div className="font-bold text-lg text-gray-900 mb-1">24/7</div>
              <div className="text-sm text-gray-600">
                {language === 'fr' ? 'Support disponible pour l\'Europe' : 'Support available for Europe'}
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
                'Réponses aux questions les plus posées par les marques beauté' : 
                'Answers to the most asked questions by beauty brands'}
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
                    'Support dédié aux marques beauté en Afrique' :
                    'Dedicated support for beauty brands in Africa'}
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
                      'Notre équipe beauté vous répondra sous 2h pendant les heures ouvrées.' : 
                      'Our beauty team will respond within 2h during business hours.'}
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
                        {language === 'fr' ? 'Nom de votre marque beauté' : 'Your beauty brand name'}
                      </label>
                      <Input
                        type="text"
                        value={contactForm.brandName}
                        onChange={(e) => setContactForm({...contactForm, brandName: e.target.value})}
                        className="rounded-xl border-gray-200 focus:border-rose-400 focus:ring-rose-100"
                        placeholder={language === 'fr' ? 'Ex: Belle Étoile Cosmétiques' : 'Ex: Étoile Beauty'}
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
                          {language === 'fr' ? 'Configuration Beauté' : 'Beauty Configuration'}
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
                          'Ex: Installation sur Shopify pour cosmétiques' : 
                          'Ex: Shopify installation for cosmetics'}
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