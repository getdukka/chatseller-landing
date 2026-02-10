// src/components/NewFAQSection.tsx - VERSION BEAUTÉ SPÉCIALISÉE
import React, { useState } from 'react';
import { 
  Plus, 
  Minus, 
  MessageCircle, 
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  Clock,
  Shield,
  Zap,
  Heart,
  Sparkles,
  Brain,
  TrendingUp,
  Globe,
  Lock,
  Users,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const NewFAQSection = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqData = getBeautyFAQData(language);
  const categories = getCategories(language);

  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.categoryId === activeCategory);

  return (
    <section id="faq" className="py-24 relative bg-gradient-to-b from-white via-rose-50/30 to-purple-50/30">
      
      {/* Decorative elements beauté */}
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-gradient-to-br from-rose-300/20 to-pink-300/10 rounded-full blur-3xl -z-10" />
      <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-rose-300/10 rounded-full blur-3xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        
        {/* Header spécialisé beauté */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 mb-8 border border-rose-200 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 text-sm font-semibold text-rose-700 animate-fade-in">
            <HelpCircle className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Questions des marques beauté' : 'Beauty brands questions'}
            <Heart className="w-4 h-4 ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight animate-fade-in [animation-delay:200ms]">
            {language === 'fr' ? 
              'Toutes vos questions sur ChatSeller' :
              'All your questions about ChatSeller'}
          </h2>
          
          <p className="text-xl text-gray-600 animate-fade-in [animation-delay:400ms]">
            {language === 'fr' ? 
              'Découvrez comment ChatSeller transforme spécifiquement les boutiques en ligne des marques beauté et répond à vos besoins spécifiques.' :
              'Discover how ChatSeller specifically transforms beauty brand stores and meets your specific needs.'}
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in [animation-delay:500ms]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-rose-300 hover:text-rose-600'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
        
        {/* FAQ Grid spécialisée beauté */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-in [animation-delay:600ms]">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <BeautyFAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                icon={faq.icon}
                category={faq.category}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                featured={faq.featured}
              />
            ))}
          </div>
        </div>

        {/* Contact CTA beauté */}
        <div className="animate-fade-in [animation-delay:1000ms]">
          <BeautyContactCTA language={language} />
        </div>
      </div>
    </section>
  );
};

// Composant FAQ spécialisé beauté
const BeautyFAQItem = ({ 
  question, 
  answer, 
  icon,
  category,
  isOpen, 
  onToggle,
  featured = false
}: {
  question: string;
  answer: string;
  icon: React.ReactNode;
  category: string;
  isOpen: boolean;
  onToggle: () => void;
  featured?: boolean;
}) => {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
      featured 
        ? 'border-rose-300 bg-gradient-to-r from-rose-50/80 to-pink-50/60 shadow-lg' 
        : 'border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:border-rose-200'
    }`}>
      <button
        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center space-x-4 flex-1">
          <div className={`w-12 h-12 flex items-center justify-center rounded-xl shadow-sm ${
            featured 
              ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white' 
              : 'bg-rose-100 text-rose-600'
          }`}>
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                featured 
                  ? 'bg-rose-600 text-white' 
                  : 'bg-rose-100 text-rose-700'
              }`}>
                {category}
              </span>
              {featured && (
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                  TOP
                </span>
              )}
            </div>
            <span className="font-bold text-gray-900 text-left block text-lg leading-tight">{question}</span>
          </div>
        </div>
        <div className="flex-shrink-0 ml-6">
          <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
            isOpen 
              ? 'bg-rose-500 text-white' 
              : 'bg-gray-100 text-gray-400 hover:bg-rose-100 hover:text-rose-600'
          }`}>
            {isOpen ? (
              <Minus className="w-5 h-5" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </div>
        </div>
      </button>
      
      {isOpen && (
        <div className="px-8 pb-6 animate-fade-in">
          <div className="pl-16 text-gray-700 leading-relaxed text-base">
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        </div>
      )}
    </div>
  );
};

// Contact CTA spécialisé beauté
const BeautyContactCTA = ({ language }: { language: string }) => {
  return (
    <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-rose-200 shadow-xl max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        
        {/* Left side - Content */}
        <div>
          <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {language === 'fr' ? 
                  'Une question sur Chatseller ?' :
                  'A question about Chatseller?'}
              </h3>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
            {language === 'fr' ? 
              'Notre équipe d\'experts est là pour vous accompagner. Nous connaissons les spécificités de votre secteur et vous aidons à optimiser vos conversions.' :
              'Our experts team is here to support you. We know the specifics of your industry and we help you optimize your conversions.'}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="font-semibold">
                {language === 'fr' ? 'Réponse sous 2h' : 'Response within 2h'}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="font-semibold">
                {language === 'fr' ? 'Expertise secteur beauté' : 'Beauty industry expertise'}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="font-semibold">
                {language === 'fr' ? 'Support en français' : 'English support'}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="font-semibold">
                {language === 'fr' ? 'Conseil ROI personnalisé' : 'Personalized ROI advice'}
              </span>
            </div>
          </div>

          {/* Contact methods - Responsive */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-rose-500 flex-shrink-0" />
              <span className="font-medium">+221 76 782 68 04</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0" />
              <span className="font-medium">support@chatseller.app</span>
            </div>
          </div>
        </div>
        
        {/* Right side - Actions - MOBILE OPTIMISÉ */}
        <div className="space-y-3 sm:space-y-4">
          <Button 
            size="lg" 
            className="w-full group rounded-xl sm:rounded-2xl py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-semibold bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a href="mailto:support@chatseller.app">
              <span className="truncate">
                {language === 'fr' ? 'Poser ma question par email' : 'Ask my question by email'}
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="w-full group rounded-xl sm:rounded-2xl py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-semibold border-2 border-purple-300 hover:border-purple-400 hover:bg-purple-50 text-purple-700 transition-all duration-300"
            asChild
          >
            <a href="https://cal.com/chatseller/demo-beaute">
              <span className="truncate">
                {language === 'fr' ? 'Réserver une démo' : 'Book a demo'}
              </span>
              <Sparkles className="ml-2 h-4 w-4 flex-shrink-0" />
            </a>
          </Button>

          <Button 
            size="lg" 
            variant="ghost"
            className="w-full group rounded-xl sm:rounded-2xl py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-semibold text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-all duration-300"
            asChild
          >
            <a href="https://dashboard.chatseller.app/register">
              <span className="truncate">
                {language === 'fr' ? 'Essayer gratuitement 14 jours' : 'Try free for 14 days'}
              </span>
              <CheckCircle2 className="ml-2 h-4 w-4 flex-shrink-0" />
            </a>
          </Button>

          {/* Garantie - Mobile optimisée */}
          <div className="text-center mt-4 sm:mt-6 p-3 sm:p-4 bg-white/60 rounded-xl border border-green-200">
            <div className="text-green-700 font-bold text-sm mb-1">
              {language === 'fr' ? '🛡️ Essai Gratuit' : '🛡️ Free Trial'}
            </div>
            <div className="text-xs text-green-600">
              {language === 'fr' ?
                '14 jours gratuits, annulation en 1 clic' :
                '14 days free, cancel with 1 click'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Données FAQ spécialisées beauté
const getBeautyFAQData = (language: 'fr' | 'en') => [
  {
    question: language === 'fr' ?
      'ChatSeller comprend-elle vraiment les spécificités du secteur de la beauté ?' :
      'Does ChatSeller really understand the specifics of the beauty industry?',
    answer: language === 'fr' ?
      'Oui ! Outre la base de connaissances de +2000 ingrédients, types de peau et cheveux, parfums, etc., ChatSeller est <strong>formée sur votre catalogue produits</strong> et peut être enrichie avec vos connaissances spécifiques. Elle comprend les différents types de peau (mixte, sensible, mature, etc.), les routines de soins et peut conseiller les bonnes teintes selon la carnation. Votre Vendeuse IA répond aux questions techniques de vos clientes : compatibilité produits, ordre d\'application, conseils d\'utilisation personnalisés, etc. Plus vous l\'enrichissez avec vos fiches produits et guides, plus elle devient experte de votre marque.' :
      'Yes! In addition to the knowledge base of +2000 ingredients, skin and hair types, fragrances, etc., ChatSeller is <strong>trained on your product catalog</strong> and can be enriched with your specific knowledge. It understands different skin types (combination, sensitive, mature, etc.), care routines and can advise the right shades according to complexion. Your AI Advisor answers your customers\' technical questions: product compatibility, order of application, personalized usage advice, etc. The more you enrich it with your product sheets and guides, the more it becomes an expert of your brand.',
    icon: <Brain className="w-5 h-5" />,
    category: language === 'fr' ? 'Expertise Beauté' : 'Beauty Expertise',
    categoryId: 'expertise',
    featured: true
  },
  {
    question: language === 'fr' ?
      'Combien de temps pour former l\'IA à mon catalogue de produits ?' :
      'How long to train AI on my product catalog?',
    answer: language === 'fr' ?
      '<strong>Quelques minutes seulement !</strong> ChatSeller importe automatiquement votre catalogue produits depuis Shopify ou WooCommerce. Vous pouvez ensuite enrichir sa base de connaissances en ajoutant vos fiches techniques PDF, vos guides d\'utilisation ou du texte libre sur les spécificités de vos produits. Votre Vendeuse IA apprend instantanément et commence à conseiller vos clientes immédiatement.' :
      '<strong>Only a few minutes!</strong> ChatSeller automatically imports your product catalog from Shopify or WooCommerce. You can then enrich her knowledge base by adding your PDF technical sheets, usage guides or free text about your product specifics. Your AI Advisor learns instantly and starts advising your customers immediately.',
    icon: <Clock className="w-5 h-5" />,
    category: language === 'fr' ? 'Formation IA' : 'AI Training',
    categoryId: 'formation'
  },
  {
    question: language === 'fr' ?
      'Comment ChatSeller va-t-elle m\'aider à convertir mes visiteurs ?' :
      'How will ChatSeller help me convert my visitors?',
    answer: language === 'fr' ?
      '<strong>En répondant aux questions qui font généralement partir vos clientes.</strong> Votre Vendeuse IA est disponible 24/7 pour répondre immédiatement aux questions techniques : "Convient-il aux peaux sensibles ?", "Quelle teinte choisir ?", "Est-il compatible avec mes autres soins ?". Au lieu d\'abandonner leur panier par manque de réponse, vos clientes obtiennent l\'information dont elles ont besoin pour acheter en confiance. Votre Vendeuse IA peut également recommander des produits complémentaires adaptés à leur besoin.' :
      '<strong>By answering the questions that generally make your customers leave.</strong> Your AI Advisor is available 24/7 to immediately answer technical questions: "Is it suitable for sensitive skin?", "Which shade to choose?", "Is it compatible with my other treatments?". Instead of abandoning their cart for lack of answer, your customers get the information they need to buy with confidence. Your AI Advisor can also recommend complementary products adapted to their needs.',
    icon: <TrendingUp className="w-5 h-5" />,
    category: language === 'fr' ? 'Résultats' : 'Results',
    categoryId: 'resultats',
    featured: true
  },
  {
    question: language === 'fr' ?
      'ChatSeller fonctionne-t-il avec ma boutique en ligne ?' :
      'Does ChatSeller work with my online store?',
    answer: language === 'fr' ?
      'Oui, <strong>si vous avez une boutique Shopify ou WooCommerce</strong>. L\'installation prend 2 minutes et ne nécessite aucune compétence technique : vous copiez-collez simplement le code du widget ChatSeller dans votre boutique. Nous travaillons actuellement sur une app Shopify et un plugin WordPress pour rendre l\'installation encore plus simple. Si vous utilisez une autre plateforme, <a href="mailto:support@chatseller.app" class="text-rose-600 font-semibold hover:underline">contactez-nous</a> pour vérifier la compatibilité.' :
      'Yes, <strong>if you have a Shopify or WooCommerce store</strong>. Installation takes 2 minutes and requires no technical skills: you simply copy-paste the ChatSeller widget code into your store. We are currently working on a Shopify app and WordPress plugin to make installation even simpler. If you use another platform, <a href="mailto:support@chatseller.app" class="text-rose-600 font-semibold hover:underline">contact us</a> to check compatibility.',
    icon: <Zap className="w-5 h-5" />,
    category: language === 'fr' ? 'Installation' : 'Installation',
    categoryId: 'installation'
  },
  {
    question: language === 'fr' ?
      'ChatSeller va-t-il remplacer mon service client ?' :
      'Will ChatSeller replace my customer service?',
    answer: language === 'fr' ?
      '<strong>Non, ChatSeller est une conseillère de vente, pas un support client.</strong> Elle répond aux questions sur les produits, conseille vos clientes et les aide à choisir les bons produits pour leurs besoins. Pour les questions complexes (suivi de commande, réclamations, retours...), vos clientes peuvent toujours vous contacter directement. ChatSeller libère votre temps en gérant les questions produits répétitives 24/7, vous permettant de vous concentrer sur la création, le développement et les relations clients à forte valeur ajoutée.' :
      '<strong>No, ChatSeller is a sales advisor, not customer support.</strong> It answers questions about products, advises your customers and helps them choose the right products for their needs. For complex questions (order tracking, complaints, returns...), your customers can always contact you directly. ChatSeller frees up your time by handling repetitive product questions 24/7, allowing you to focus on creation, development and high-value customer relationships.',
    icon: <Users className="w-5 h-5" />,
    category: language === 'fr' ? 'Fonctionnement' : 'How it works',
    categoryId: 'fonctionnement'
  },
  {
    question: language === 'fr' ?
      'Mes données et celles de mes clientes sont-elles sécurisées ?' :
      'Are my data and my customers\' data secured?',
    answer: language === 'fr' ?
      '<strong>Oui, vos données sont protégées.</strong> ChatSeller respecte les standards de sécurité et de confidentialité des données. Vos informations produits et les conversations avec vos clientes sont traitées de manière sécurisée. Nous ne partageons jamais vos données avec des tiers. Vos formules et informations propriétaires restent confidentielles et ne sont utilisées que pour former votre Vendeuse IA personnelle.' :
      '<strong>Yes, your data is protected.</strong> ChatSeller respects data security and privacy standards. Your product information and conversations with your customers are processed securely. We never share your data with third parties. Your formulas and proprietary information remain confidential and are only used to train your personal AI Advisor.',
    icon: <Lock className="w-5 h-5" />,
    category: language === 'fr' ? 'Sécurité' : 'Security',
    categoryId: 'securite'
  },
  {
    question: language === 'fr' ?
      'Combien de temps pour voir des résultats ?' :
      'How long to see results?',
    answer: language === 'fr' ?
      'Votre Conseillère commence à interagir avec vos clientes <strong>dès l\'activation de Chatseller sur votre site</strong>. Les premières conversations ont lieu immédiatement. Pour mesurer l\'impact sur vos ventes, comptez généralement <strong>1-2 semaines d\'utilisation</strong>. C\'est le temps nécessaire pour que suffisamment de clientes interagissent avec votre Vendeuse IA et que vous puissiez analyser les données de performance dans votre dashboard.' :
      'Your Advisor starts interacting with your customers <strong>from activation on your site</strong>. The first conversations happen immediately. To measure the impact on your sales, generally count <strong>1-2 weeks of use</strong>. This is the time needed for enough customers to interact with your AI Advisor and for you to analyze performance data in your dashboard.',
    icon: <Clock className="w-5 h-5" />,
    category: language === 'fr' ? 'Résultats' : 'Results',
    categoryId: 'resultats'
  },
  {
    question: language === 'fr' ?
      'Est-ce que ça fonctionne sur WhatsApp ?' :
      'Does it work on WhatsApp?',
    answer: language === 'fr' ?
      '<strong>Pas encore, mais c\'est notre priorité !</strong> L\'intégration WhatsApp est en développement et sera disponible prochainement. En rejoignant ChatSeller aujourd\'hui, vous serez parmi les premiers à y avoir accès dès sa sortie. Pour l\'instant, votre Vendeuse IA est disponible directement sur votre boutique en ligne via notre widget de chat, accessible 24/7 pour toutes vos clientes.' :
      '<strong>Not yet, but it\'s our priority!</strong> WhatsApp integration is in development and will be available soon. By joining ChatSeller today, you will be among the first to have access when it launches. For now, your AI Advisor is available directly on your online store via our chat widget, accessible 24/7 for all your customers.',
    icon: <MessageCircle className="w-5 h-5" />,
    category: language === 'fr' ? 'Fonctionnement' : 'How it works',
    categoryId: 'fonctionnement'
  },
  {
    question: language === 'fr' ?
      'Puis-je personnaliser les réponses de ma Conseillère ?' :
      'Can I customize my Advisor\'s responses?',
    answer: language === 'fr' ?
      '<strong>Oui !</strong> Votre Conseillère se forme automatiquement sur votre catalogue et le contenu de votre site. Vous pouvez aussi ajouter des informations spécifiques dans votre Base de connaissances : fiches produits détaillées, guides d\'utilisation, routines de soins, etc. Vous pouvez également définir le ton de communication (professionnel, amical, expert) et lui apprendre les particularités de votre marque. Plus vous enrichissez sa base de connaissances, plus ses réponses seront précises et alignées avec votre identité de marque.' :
      '<strong>Yes!</strong> Your Advisor automatically trains on your catalog and website content. You can also add specific information to your Knowledge Base: detailed product sheets, usage guides, skincare routines, etc. You can also define the communication tone (professional, friendly, expert) and teach it your brand\'s particularities. The more you enrich its knowledge base, the more precise its responses will be and aligned with your brand identity.',
    icon: <Sparkles className="w-5 h-5" />,
    category: language === 'fr' ? 'Formation IA' : 'AI Training',
    categoryId: 'formation'
  },
  {
    question: language === 'fr' ?
      'Comment je vous contacte si j\'ai besoin d\'aide ?' :
      'How do I contact you if I need help?',
    answer: language === 'fr' ?
      'Notre équipe est disponible par <strong>email</strong> (<a href="mailto:support@chatseller.app" class="text-rose-600 font-semibold hover:underline">support@chatseller.app</a>) et par <strong>WhatsApp</strong> (<a href="https://wa.me/221767826804" class="text-rose-600 font-semibold hover:underline">+221 76 782 68 04</a>). Si vous faites partie de nos 100 premiers utilisateurs, vous avez aussi accès à un accompagnement personnalisé. Nous répondons en français et en anglais, généralement sous 24h. Pour les plans Growth et Performance, vous bénéficiez d\'un support prioritaire avec des temps de réponse encore plus rapides.' :
      'Our team is available by <strong>email</strong> (<a href="mailto:support@chatseller.app" class="text-rose-600 font-semibold hover:underline">support@chatseller.app</a>) and by <strong>WhatsApp</strong> (<a href="https://wa.me/221767826804" class="text-rose-600 font-semibold hover:underline">+221 76 782 68 04</a>). If you are among our first 100 users, you also have access to personalized support. We respond in French and English, generally within 24h. For Growth and Performance plans, you benefit from priority support with even faster response times.',
    icon: <Phone className="w-5 h-5" />,
    category: language === 'fr' ? 'Support' : 'Support',
    categoryId: 'support'
  },
  {
    question: language === 'fr' ?
      'Puis-je tester ChatSeller avant de m\'engager ?' :
      'Can I test ChatSeller before committing?',
    answer: language === 'fr' ?
      'Oui ! Vous pouvez commencer par un <strong>essai gratuit de 14 jours sans carte bancaire</strong> pour tester ChatSeller en conditions réelles sur votre boutique. Vous pouvez annuler à tout moment en 1 clic depuis votre dashboard, sans engagement. Cela vous permet de voir concrètement comment l\'Agent IA répond aux questions de vos clientes et l\'impact sur votre taux de conversion avant de vous abonner.' :
      'Yes! You can start with a <strong>14-day free trial without credit card</strong> to test ChatSeller in real conditions on your store. You can cancel at any time with 1 click from your dashboard, no commitment. This allows you to concretely see how the AI Agent answers your customers\' questions and the impact on your conversion rate before subscribing.',
    icon: <Shield className="w-5 h-5" />,
    category: language === 'fr' ? 'Garantie' : 'Guarantee',
    categoryId: 'garantie',
    featured: true
  },
  {
    question: language === 'fr' ?
      'Ma Vendeuse IA peut-elle vraiment conseiller sur la beauté africaine ?' :
      'Can my AI Advisor really advise on African beauty?',
    answer: language === 'fr' ?
      '<strong>Absolument.</strong> ChatSeller a été spécifiquement conçu pour les marques beauté. Notre base de connaissances inclut les types de peau et cheveux africains, les problématiques spécifiques (hyperpigmentation, cheveux texturés, etc.), et les ingrédients locaux (karité, baobab, touloucouna...). Vous pouvez enrichir votre Vendeuse IA avec vos propres connaissances sur vos produits, vos formulations et les besoins spécifiques de vos clientes. Votre Vendeuse IA sera aussi pertinente qu\'une vraie experte beauté africaine.' :
      '<strong>Absolutely.</strong> ChatSeller has been specifically designed for African beauty. Our knowledge base includes African skin and hair types, specific issues (hyperpigmentation, textured hair, etc.), and local ingredients (shea butter, baobab, touloucouna...). You can enrich your AI Advisor with your own knowledge about your products, your formulations and the specific needs of your customers. Your Advisor will be as relevant as a real African beauty expert.',
    icon: <Heart className="w-5 h-5" />,
    category: language === 'fr' ? 'Expertise Beauté' : 'Beauty Expertise',
    categoryId: 'expertise'
  }
];

// Catégories de FAQ avec traductions
const getCategories = (language: 'fr' | 'en') => [
  {
    id: 'all',
    name: language === 'fr' ? 'Toutes' : 'All',
    icon: <HelpCircle className="w-4 h-4" />
  },
  {
    id: 'expertise',
    name: language === 'fr' ? 'Expertise Beauté' : 'Beauty Expertise',
    icon: <Brain className="w-4 h-4" />
  },
  {
    id: 'resultats',
    name: language === 'fr' ? 'Résultats' : 'Results',
    icon: <TrendingUp className="w-4 h-4" />
  },
  {
    id: 'installation',
    name: language === 'fr' ? 'Installation' : 'Installation',
    icon: <Zap className="w-4 h-4" />
  },
  {
    id: 'formation',
    name: language === 'fr' ? 'Formation IA' : 'AI Training',
    icon: <Clock className="w-4 h-4" />
  },
  {
    id: 'fonctionnement',
    name: language === 'fr' ? 'Fonctionnement' : 'How it works',
    icon: <Users className="w-4 h-4" />
  },
  {
    id: 'support',
    name: language === 'fr' ? 'Support' : 'Support',
    icon: <Phone className="w-4 h-4" />
  },
  {
    id: 'garantie',
    name: language === 'fr' ? 'Garantie' : 'Guarantee',
    icon: <Shield className="w-4 h-4" />
  }
];

export default NewFAQSection;