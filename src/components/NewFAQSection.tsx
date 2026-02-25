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
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 mb-8 border border-rose-200 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 text-sm font-semibold text-rose-700 animate-fade-in">
            <HelpCircle className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Questions des marques beauté' : 'Beauty brands questions'}
            <Heart className="w-4 h-4 ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight animate-fade-in [animation-delay:200ms]">
            {language === 'fr' ?
              'Toutes vos questions sur Mia' :
              'All your questions about Mia'}
          </h2>

          <p className="text-xl text-gray-600 animate-fade-in [animation-delay:400ms]">
            {language === 'fr' ?
              'Découvrez comment Mia accompagne vos clients et ce qu\'elle peut faire pour votre boutique en ligne.' :
              'Discover how Mia supports your customers and what she can do for your online store.'}
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
        
        {/* FAQ Grid */}
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

        {/* Contact CTA */}
        <div className="animate-fade-in [animation-delay:1000ms]">
          <BeautyContactCTA language={language} />
        </div>
      </div>
    </section>
  );
};

// Composant FAQ
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

// Contact CTA
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
                  'Une question sur Mia ?' :
                  'A question about Mia?'}
              </h3>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
            {language === 'fr' ? 
              'Notre équipe est là pour vous accompagner. Nous connaissons les spécificités de votre secteur et vous aidons à tirer le meilleur de Mia.' :
              'Our team is here to support you. We know the specifics of your industry and help you get the best out of Mia.'}
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
                {language === 'fr' ? 'Accompagnement personnalisé' : 'Personalized onboarding'}
              </span>
            </div>
          </div>

          {/* Contact methods */}
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
        
        {/* Right side - Actions */}
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
                {language === 'fr' ? 'Voir Mia en action' : 'See Mia in action'}
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
                {language === 'fr' ? 'Tester Mia pendant 14 jours' : 'Try Mia for 14 days'}
              </span>
              <CheckCircle2 className="ml-2 h-4 w-4 flex-shrink-0" />
            </a>
          </Button>

          {/* Garantie */}
          <div className="text-center mt-4 sm:mt-6 p-3 sm:p-4 bg-white/60 rounded-xl border border-green-200">
            <div className="text-green-700 font-bold text-sm mb-1">
              {language === 'fr' ? '🛡️ Sans engagement' : '🛡️ No commitment'}
            </div>
            <div className="text-xs text-green-600">
              {language === 'fr' ?
                '14 jours gratuits — licenciez-la à tout moment' :
                '14 days free — dismiss her at any time'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Données FAQ
const getBeautyFAQData = (language: 'fr' | 'en') => [
  {
    question: language === 'fr' ?
      'Mia comprend-elle vraiment les spécificités du secteur de la beauté ?' :
      'Does Mia really understand the specifics of the beauty industry?',
    answer: language === 'fr' ?
      'Oui ! Mia maîtrise plus de 2 000 ingrédients cosmétiques, les différents types de peau et de cheveux, les routines de soins et les problématiques beauté courantes. Elle est ensuite <strong>formée sur vos produits spécifiques</strong> : elle les apprend, les comprend et sait comment les présenter à vos clients. Vous pouvez l\'enrichir avec vos fiches produits, vos guides et votre philosophie de marque pour qu\'elle vous représente parfaitement.' :
      'Yes! Mia masters over 2,000 cosmetic ingredients, different skin and hair types, care routines and common beauty concerns. She is then <strong>trained on your specific products</strong>: she learns them, understands them and knows how to present them to your customers. You can enrich her with your product sheets, guides and brand philosophy so she represents you perfectly.',
    icon: <Brain className="w-5 h-5" />,
    category: language === 'fr' ? 'Expertise Beauté' : 'Beauty Expertise',
    categoryId: 'expertise',
    featured: true
  },
  {
    question: language === 'fr' ?
      'Combien de temps faut-il pour former Mia à mes produits ?' :
      'How long does it take to train Mia on my products?',
    answer: language === 'fr' ?
      '<strong>Quelques minutes seulement.</strong> Mia importe automatiquement votre catalogue depuis Shopify ou WooCommerce dès les premières étapes de son intégration. Vous pouvez ensuite lui transmettre des documents supplémentaires — fiches techniques, guides d\'utilisation, routines de soins — pour qu\'elle approfondisse sa connaissance de votre marque. Plus vous lui apprenez, plus elle est efficace.' :
      '<strong>Only a few minutes.</strong> Mia automatically imports your catalog from Shopify or WooCommerce from the very first steps of her setup. You can then give her additional documents — technical sheets, usage guides, care routines — so she deepens her knowledge of your brand. The more you teach her, the more effective she becomes.',
    icon: <Clock className="w-5 h-5" />,
    category: language === 'fr' ? 'Formation de Mia' : 'Training Mia',
    categoryId: 'formation'
  },
  {
    question: language === 'fr' ?
      'Comment Mia va-t-elle m\'aider à vendre plus ?' :
      'How will Mia help me sell more?',
    answer: language === 'fr' ?
      '<strong>En répondant aux questions qui font généralement partir vos clients sans acheter.</strong> Mia est disponible 24h/24 pour répondre immédiatement : "Convient-il aux peaux sensibles ?", "Quelle teinte choisir ?", "Est-il compatible avec mes autres soins ?". Au lieu de quitter votre site sans réponse, vos clients obtiennent l\'information dont ils ont besoin pour acheter en confiance. Mia peut aussi proposer des produits complémentaires adaptés à leur profil, ce qui augmente naturellement le panier moyen.' :
      '<strong>By answering the questions that usually make your customers leave without buying.</strong> Mia is available 24/7 to immediately answer: "Is it suitable for sensitive skin?", "Which shade to choose?", "Is it compatible with my other treatments?". Instead of leaving your site without an answer, your customers get the information they need to buy with confidence. Mia can also suggest complementary products suited to their profile, which naturally increases the average order value.',
    icon: <TrendingUp className="w-5 h-5" />,
    category: language === 'fr' ? 'Résultats' : 'Results',
    categoryId: 'resultats',
    featured: true
  },
  {
    question: language === 'fr' ?
      'Comment Mia s\'installe-t-elle sur ma boutique ?' :
      'How does Mia get installed on my store?',
    answer: language === 'fr' ?
      'Mia fonctionne sur <strong>Shopify et WooCommerce</strong>. L\'installation se fait en copiant-collant un bloc de code dans votre boutique — si vous n\'êtes pas à l\'aise avec ça, un bouton vous permet d\'envoyer le code directement à votre développeur. Aucune compétence technique n\'est requise de votre côté. Nous travaillons sur une application Shopify et un plugin WordPress pour rendre l\'installation encore plus simple. Si vous utilisez une autre plateforme, <a href="mailto:support@chatseller.app" class="text-rose-600 font-semibold hover:underline">contactez-nous</a> pour vérifier la compatibilité.' :
      'Mia works on <strong>Shopify and WooCommerce</strong>. Installation is done by copying and pasting a code block into your store — if you\'re not comfortable with that, a button lets you send the code directly to your developer. No technical skills are required on your end. We are working on a Shopify app and WordPress plugin to make installation even simpler. If you use another platform, <a href="mailto:support@chatseller.app" class="text-rose-600 font-semibold hover:underline">contact us</a> to check compatibility.',
    icon: <Zap className="w-5 h-5" />,
    category: language === 'fr' ? 'Installation' : 'Installation',
    categoryId: 'installation'
  },
  {
    question: language === 'fr' ?
      'Mia va-t-elle remplacer mon service client ?' :
      'Will Mia replace my customer service?',
    answer: language === 'fr' ?
      '<strong>Non, Mia est une conseillère de vente, pas un service client.</strong> Elle répond aux questions sur les produits, conseille vos clients et les guide vers l\'achat. Pour les questions plus complexes — suivi de commande, réclamations, retours — vos clients peuvent toujours vous contacter directement. Mia libère votre temps en gérant les questions produits répétitives 24h/24, ce qui vous permet de vous concentrer sur la création, le développement et les échanges à forte valeur avec vos clients.' :
      '<strong>No, Mia is a sales advisor, not customer service.</strong> She answers product questions, advises your customers and guides them toward purchase. For more complex questions — order tracking, complaints, returns — your customers can always contact you directly. Mia frees up your time by handling repetitive product questions 24/7, allowing you to focus on creation, development and high-value exchanges with your customers.',
    icon: <Users className="w-5 h-5" />,
    category: language === 'fr' ? 'Fonctionnement' : 'How it works',
    categoryId: 'fonctionnement'
  },
  {
    question: language === 'fr' ?
      'Mes données et celles de mes clients sont-elles sécurisées ?' :
      'Are my data and my customers\' data secured?',
    answer: language === 'fr' ?
      '<strong>Oui, vos données sont protégées.</strong> Mia respecte les standards de sécurité et de confidentialité des données. Les informations sur vos produits et les conversations avec vos clients sont traitées de manière sécurisée. Nous ne partageons jamais vos données avec des tiers. Vos formules et informations propriétaires restent confidentielles et ne sont utilisées que pour former Mia à votre marque.' :
      '<strong>Yes, your data is protected.</strong> Mia respects data security and privacy standards. Your product information and conversations with your customers are processed securely. We never share your data with third parties. Your formulas and proprietary information remain confidential and are only used to train Mia on your brand.',
    icon: <Lock className="w-5 h-5" />,
    category: language === 'fr' ? 'Sécurité' : 'Security',
    categoryId: 'securite'
  },
  {
    question: language === 'fr' ?
      'Combien de temps avant de voir des résultats ?' :
      'How long before seeing results?',
    answer: language === 'fr' ?
      'Mia commence à accueillir vos clients <strong>dès qu\'elle est active sur votre boutique</strong>. Les premières conversations ont lieu immédiatement. Pour mesurer son impact sur vos ventes, comptez généralement <strong>1 à 2 semaines</strong> — le temps que suffisamment de clients interagissent avec elle et que vous puissiez analyser ses performances depuis votre tableau de bord.' :
      'Mia starts welcoming your customers <strong>as soon as she is active on your store</strong>. The first conversations happen immediately. To measure her impact on your sales, generally count <strong>1 to 2 weeks</strong> — the time for enough customers to interact with her and for you to analyze her performance from your dashboard.',
    icon: <Clock className="w-5 h-5" />,
    category: language === 'fr' ? 'Résultats' : 'Results',
    categoryId: 'resultats'
  },
  {
    question: language === 'fr' ?
      'Est-ce que ça fonctionne sur WhatsApp ?' :
      'Does it work on WhatsApp?',
    answer: language === 'fr' ?
      '<strong>Pas encore, mais c\'est notre priorité !</strong> Mia sera bientôt disponible sur WhatsApp. En la recrutant aujourd\'hui, vous serez parmi les premiers à y avoir accès dès le lancement. Pour l\'instant, Mia accueille vos clients directement sur votre boutique en ligne, accessible 24h/24.' :
      '<strong>Not yet, but it\'s our priority!</strong> Mia will soon be available on WhatsApp. By hiring her today, you will be among the first to have access when it launches. For now, Mia welcomes your customers directly on your online store, accessible 24/7.',
    icon: <MessageCircle className="w-5 h-5" />,
    category: language === 'fr' ? 'Fonctionnement' : 'How it works',
    categoryId: 'fonctionnement'
  },
  {
    question: language === 'fr' ?
      'Puis-je personnaliser la façon dont Mia s\'exprime ?' :
      'Can I customize how Mia communicates?',
    answer: language === 'fr' ?
      '<strong>Oui, complètement.</strong> Lors de son intégration, vous définissez son prénom, son ton de communication et son niveau d\'expertise. Vous pouvez aussi lui transmettre des documents sur votre marque, votre philosophie et vos valeurs pour qu\'elle parle exactement comme vous le souhaitez. Plus vous lui donnez de matière, plus ses réponses seront précises et alignées avec l\'identité de votre marque.' :
      '<strong>Yes, completely.</strong> During her setup, you define her name, communication tone and level of expertise. You can also give her documents about your brand, philosophy and values so she speaks exactly as you wish. The more material you give her, the more precise her responses will be and aligned with your brand identity.',
    icon: <Sparkles className="w-5 h-5" />,
    category: language === 'fr' ? 'Formation de Mia' : 'Training Mia',
    categoryId: 'formation'
  },
  {
    question: language === 'fr' ?
      'Comment je vous contacte si j\'ai besoin d\'aide ?' :
      'How do I contact you if I need help?',
    answer: language === 'fr' ?
      'Notre équipe est disponible par <strong>email</strong> (<a href="mailto:support@chatseller.app" class="text-rose-600 font-semibold hover:underline">support@chatseller.app</a>) et par <strong>WhatsApp</strong> (<a href="https://wa.me/221767826804" class="text-rose-600 font-semibold hover:underline">+221 76 782 68 04</a>). Nous répondons en français et en anglais, généralement sous 24h. Les marques avec un plan Pro ou Premium bénéficient d\'un support prioritaire avec des temps de réponse encore plus rapides.' :
      'Our team is available by <strong>email</strong> (<a href="mailto:support@chatseller.app" class="text-rose-600 font-semibold hover:underline">support@chatseller.app</a>) and by <strong>WhatsApp</strong> (<a href="https://wa.me/221767826804" class="text-rose-600 font-semibold hover:underline">+221 76 782 68 04</a>). We respond in French and English, generally within 24h. Brands with a Pro or Premium plan benefit from priority support with even faster response times.',
    icon: <Phone className="w-5 h-5" />,
    category: language === 'fr' ? 'Support' : 'Support',
    categoryId: 'support'
  },
  {
    question: language === 'fr' ?
      'Puis-je tester Mia avant de m\'engager ?' :
      'Can I test Mia before committing?',
    answer: language === 'fr' ?
      'Oui ! Vous pouvez recruter Mia pour un <strong>essai de 14 jours sans engagement et sans carte bancaire</strong>. Testez-la dans votre espace, activez-la sur votre boutique et voyez concrètement comment elle accueille vos clients et l\'impact sur vos ventes. Vous pouvez la licencier à tout moment en un clic depuis votre tableau de bord.' :
      'Yes! You can hire Mia for a <strong>14-day trial with no commitment and no credit card</strong>. Test her in your space, activate her on your store and see concretely how she welcomes your customers and the impact on your sales. You can dismiss her at any time with one click from your dashboard.',
    icon: <Shield className="w-5 h-5" />,
    category: language === 'fr' ? 'Garantie' : 'Guarantee',
    categoryId: 'garantie',
    featured: true
  },
  {
    question: language === 'fr' ?
      'Mia peut-elle vraiment conseiller sur la beauté africaine ?' :
      'Can Mia really advise on African beauty?',
    answer: language === 'fr' ?
      '<strong>Absolument.</strong> Mia a été conçue en pensant aux marques beauté africaines et à leurs clients. Elle maîtrise les types de peau et de cheveux africains, les problématiques spécifiques comme l\'hyperpigmentation ou les cheveux texturés, et les ingrédients locaux comme le karité, le baobab ou le touloucouna. Vous pouvez l\'enrichir avec vos propres connaissances sur vos formulations et les besoins de vos clients. Elle sera aussi pertinente qu\'une vraie experte beauté africaine.' :
      '<strong>Absolutely.</strong> Mia was designed with African beauty brands and their customers in mind. She masters African skin and hair types, specific concerns like hyperpigmentation or textured hair, and local ingredients like shea butter, baobab or touloucouna. You can enrich her with your own knowledge about your formulations and your customers\' needs. She will be as relevant as a real African beauty expert.',
    icon: <Heart className="w-5 h-5" />,
    category: language === 'fr' ? 'Expertise Beauté' : 'Beauty Expertise',
    categoryId: 'expertise'
  }
];

// Catégories de FAQ
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
    name: language === 'fr' ? 'Formation de Mia' : 'Training Mia',
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
