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
              'Découvrez comment ChatSeller transforme spécifiquement les boutiques des marques beauté et répond à vos besoins spécifiques.' :
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

        {/* Stats rapides beauté */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto animate-fade-in [animation-delay:800ms]">
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-rose-100 shadow-lg">
            <div className="text-3xl font-bold text-rose-600 mb-2">2 min</div>
            <div className="text-sm text-gray-600 font-medium">
              {language === 'fr' ? 'Installation moyenne' : 'Average installation'}
            </div>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-100 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">2000+</div>
            <div className="text-sm text-gray-600 font-medium">
              {language === 'fr' ? 'Ingrédients connus' : 'Known ingredients'}
            </div>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-green-100 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600 font-medium">
              {language === 'fr' ? 'Conseils disponibles' : 'Available advice'}
            </div>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">267%</div>
            <div className="text-sm text-gray-600 font-medium">
              {language === 'fr' ? 'Conversions moyennes' : 'Average conversions'}
            </div>
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
                  'Une question sur votre Chatseller ?' :
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
              <span className="font-medium">+33 6 61 22 33 38</span>
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
                {language === 'fr' ? 'Réserver une démo beauté' : 'Book a beauty demo'}
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
              {language === 'fr' ? '🛡️ Conversions Garanties' : '🛡️ Guaranteed Conversions'}
            </div>
            <div className="text-xs text-green-600">
              {language === 'fr' ? 
                'Remboursé si pas d\'amélioration en 30 jours' :
                'Refunded if no improvement in 30 days'}
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
      'ChatSeller comprend-elle vraiment les spécificités de la beauté ?' :
      'Does ChatSeller really understand beauty specifics?',
    answer: language === 'fr' ? 
      'Absolument ! ChatSeller a été <strong>spécialement formée pour le secteur beauté</strong>. Elle maîtrise plus de <strong>2000+ ingrédients cosmétiques</strong>, connaît les différents types de peau (mixte, sensible, mature, etc.), comprend les routines de soins et sait conseiller les bonnes teintes selon la carnation. Nos clientes beauté voient en moyenne <strong>+267% d\'augmentation de conversions</strong> car l\'IA répond aux questions techniques spécifiques : compatibilité produits, ordre d\'application, contre-indications, etc.' :
      'Absolutely! ChatSeller has been <strong>specially trained for the beauty industry</strong>. It masters over <strong>2000+ cosmetic ingredients</strong>, knows different skin types (combination, sensitive, mature, etc.), understands skincare routines and knows how to recommend the right shades according to skin tone. Our beauty customers see an average <strong>+267% increase in conversions</strong> because the AI answers specific technical questions: product compatibility, application order, contraindications, etc.',
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
      '<strong>Seulement 3 minutes !</strong> ChatSeller importe automatiquement votre catalogue produits depuis Shopify ou WooCommerce. Vous pouvez ensuite enrichir la formation en ajoutant vos fiches techniques PDF, vos guides d\'utilisation ou du texte libre sur vos spécificités (gamme bio, vegan, made in France, etc.). L\'IA apprend instantanément et commence à conseiller vos clientes immédiatement.' :
      '<strong>Only 3 minutes!</strong> ChatSeller automatically imports your product catalog from Shopify or WooCommerce. You can then enrich the training by adding your PDF technical sheets, usage guides or free text about your specifics (organic range, vegan, made in France, etc.). The AI learns instantly and starts advising your customers immediately.',
    icon: <Clock className="w-5 h-5" />,
    category: language === 'fr' ? 'Formation IA' : 'AI Training',
    categoryId: 'formation'
  },
  {
    question: language === 'fr' ? 
      'Quand vais-je voir mes premières conversions supplémentaires ?' :
      'When will I see my first additional conversions?',
    answer: language === 'fr' ? 
      '<strong>Dès l\'activation !</strong> Nos marques beauté voient généralement leurs premières ventes supplémentaires <strong>dans les 24-48h</strong> suivant l\'installation. Pourquoi ? Parce que votre Agent IA répond immédiatement aux questions qui faisaient partir vos clientes : "Convient-il aux peaux sensibles ?", "Quelle teinte choisir ?", "Est-il compatible avec mes autres soins ?". En levant ces objections 24/7, vos conversions décollent naturellement.' :
      '<strong>From activation!</strong> Our beauty brands generally see their first additional sales <strong>within 24-48 hours</strong> after installation. Why? Because your AI Agent immediately answers the questions that made your customers leave: "Is it suitable for sensitive skin?", "Which shade to choose?", "Is it compatible with my other treatments?". By removing these objections 24/7, your conversions naturally take off.',
    icon: <TrendingUp className="w-5 h-5" />,
    category: language === 'fr' ? 'Résultats' : 'Results',
    categoryId: 'resultats',
    featured: true
  },
  {
    question: language === 'fr' ? 
      'L\'installation sur Shopify/WooCommerce est-elle vraiment simple ?' :
      'Is installation on Shopify/WooCommerce really simple?',
    answer: language === 'fr' ? 
      'Oui, <strong>2 minutes chrono !</strong> Pour Shopify : vous installez notre app native depuis l\'App Store Shopify en 1 clic. Pour WooCommerce : vous téléchargez notre extension depuis WordPress et l\'activez. <strong>Aucune compétence technique requise</strong>. Le widget apparaît automatiquement sur votre boutique et votre Agent IA commence à converser avec vos clientes. Si vous avez le moindre souci, notre support en français vous accompagne en 2h maximum.' :
      'Yes, <strong>2 minutes flat!</strong> For Shopify: you install our native app from the Shopify App Store in 1 click. For WooCommerce: you download our extension from WordPress and activate it. <strong>No technical skills required</strong>. The widget automatically appears on your store and your AI Agent starts conversing with your customers. If you have any problem, our support in English helps you within 2 hours maximum.',
    icon: <Zap className="w-5 h-5" />,
    category: language === 'fr' ? 'Installation' : 'Installation',
    categoryId: 'installation'
  },
  {
    question: language === 'fr' ? 
      'ChatSeller va-t-elle remplacer mon équipe ou mon service client ?' :
      'Will ChatSeller replace my team or customer service?',
    answer: language === 'fr' ? 
      '<strong>Absolument pas !</strong> ChatSeller <strong>complète et renforce votre équipe</strong>. Votre Agent IA gère les questions techniques répétitives (ingrédients, utilisation, compatibilité) 24/7, ce qui libère votre équipe pour les cas complexes et la relation client haut de gamme. Les marques beauté que nous servons nous disent que ChatSeller a permis à leur équipe de se concentrer sur la création de contenu, les partenariats influenceurs et le développement produit plutôt que de répondre 50 fois par jour aux mêmes questions techniques.' :
      '<strong>Absolutely not!</strong> ChatSeller <strong>complements and strengthens your team</strong>. Your AI Agent handles repetitive technical questions (ingredients, usage, compatibility) 24/7, which frees up your team for complex cases and high-end customer relations. The beauty brands that we serve tell us that ChatSeller allowed their team to focus on content creation, influencer partnerships and product development rather than answering the same technical questions 50 times a day.',
    icon: <Users className="w-5 h-5" />,
    category: language === 'fr' ? 'Équipe' : 'Team',
    categoryId: 'equipe'
  },
  {
    question: language === 'fr' ? 
      'Mes données et celles de mes clientes sont-elles sécurisées ?' :
      'Are my data and my customers\' data secured?',
    answer: language === 'fr' ? 
      '<strong>Sécurité maximale garantie !</strong> Vos données et celles de vos clientes sont hébergées en <strong>Europe (RGPD compliant)</strong> avec chiffrement bout-en-bout. ChatSeller ne stocke aucune donnée personnelle sensible et respecte strictement les réglementations cosmétiques européennes. Nous avons une <strong>certification SOC2 Type II</strong> et offrons un DPA (Data Processing Agreement) pour les marques qui en ont besoin. Vos formules et secrets de fabrication restent 100% confidentiels.' :
      '<strong>Maximum security guaranteed!</strong> Your beauty catalogs and customer data are hosted in <strong>Europe (GDPR compliant)</strong> with end-to-end encryption. ChatSeller does not store any sensitive personal data and strictly respects European cosmetic regulations. We have <strong>SOC2 Type II certification</strong> and offer a DPA (Data Processing Agreement) for brands that need it. Your formulas and manufacturing secrets remain 100% confidential.',
    icon: <Lock className="w-5 h-5" />,
    category: language === 'fr' ? 'Sécurité' : 'Security',
    categoryId: 'securite'
  },
  {
    question: language === 'fr' ? 
      'Que se passe-t-il si je ne suis pas satisfaite des résultats ?' :
      'What happens if I\'m not satisfied with the results?',
    answer: language === 'fr' ? 
      'Nous offrons une <strong>garantie "conversion ou remboursé" de 30 jours</strong>. Si ChatSeller n\'augmente pas vos conversions de manière mesurable dans les 30 premiers jours, nous vous remboursons intégralement, sans question. De plus, vous commencez par <strong>14 jours d\'essai gratuit sans carte bancaire</strong> pour tester en conditions réelles. Notre taux de satisfaction des marques beauté est de 96% car les résultats parlent d\'eux-mêmes !' :
      'We offer a <strong>"conversion or money back" 30-day guarantee</strong>. If ChatSeller doesn\'t measurably increase your conversions within the first 30 days, we\'ll give you a full refund, no questions asked. Plus, you start with <strong>14 days free trial without credit card</strong> to test in real conditions. Our beauty brands satisfaction rate is 96% because the results speak for themselves!',
    icon: <Shield className="w-5 h-5" />,
    category: language === 'fr' ? 'Garantie' : 'Guarantee',
    categoryId: 'garantie',
    featured: true
  },
  {
    question: language === 'fr' ? 
      'Ma Conseillère IA peut-elle conseiller selon le type de peau de mes clientes ?' :
      'Can my AI Advisor advise according to my customers\' skin type?',
    answer: language === 'fr' ? 
      '<strong>Bien sûr !</strong> ChatSeller maîtrise <strong>12 profils de peau différents</strong> : normale, sèche, grasse, mixte, sensible, mature, acnéique, rosacée, etc. Votre Conseillère IA pose les bonnes questions pour identifier le type de peau ("Avez-vous des brillances en zone T ?", "Ressentez-vous des tiraillements ?") puis recommande les produits adaptés de votre gamme. Elle connaît aussi les ingrédients à éviter selon chaque type (parfums pour peaux sensibles, huiles comédogènes pour peaux grasses, etc.).' :
      '<strong>Of course!</strong> ChatSeller masters <strong>12 different skin profiles</strong>: normal, dry, oily, combination, sensitive, mature, acneic, rosacea, etc. Your AI Advisor the right questions to identify the skin type ("Do you have shine in the T-zone?", "Do you feel tightness?") then recommends suitable products from your range. It also knows ingredients to avoid for each type (fragrances for sensitive skin, comedogenic oils for oily skin, etc.).',
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
    id: 'garantie',
    name: language === 'fr' ? 'Garantie' : 'Guarantee',
    icon: <Shield className="w-4 h-4" />
  }
];

export default NewFAQSection;