// src/pages/Support.tsx - VERSION TRADUITE COMPLÈTE
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
import { useLanguage } from '@/contexts/LanguageContext';

const SupportPage = () => {
  const { t } = useLanguage();
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
  const [submitError, setSubmitError] = useState('');

  const supportCategories = [
    { id: 'all', name: t('supportAllCategories'), icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'installation', name: t('supportInstallation'), icon: <Zap className="w-4 h-4" /> },
    { id: 'configuration', name: t('supportConfiguration'), icon: <Users className="w-4 h-4" /> },
    { id: 'billing', name: t('supportBilling'), icon: <MessageCircle className="w-4 h-4" /> },
    { id: 'technical', name: t('supportTechnical'), icon: <AlertCircle className="w-4 h-4" /> }
  ];

  const faqData = [
    {
      category: 'installation',
      question: t('faqShopifyInstallQ'),
      answer: t('faqShopifyInstallA'),
      tags: ['shopify', 'installation', 'code']
    },
    {
      category: 'installation',
      question: t('faqWooCommerceQ'),
      answer: t('faqWooCommerceA'),
      tags: ['woocommerce', 'wordpress', 'plugin']
    },
    {
      category: 'installation',
      question: t('faqCustomHtmlQ'),
      answer: t('faqCustomHtmlA'),
      tags: ['html', 'javascript', 'custom']
    },
    {
      category: 'configuration',
      question: t('faqPersonalityQ'),
      answer: t('faqPersonalityA'),
      tags: ['personnalisation', 'vendeur', 'configuration']
    },
    {
      category: 'configuration',
      question: t('faqLearningQ'),
      answer: t('faqLearningA'),
      tags: ['apprentissage', 'produits', 'base-connaissances']
    },
    {
      category: 'technical',
      question: t('faqWidgetNotShowingQ'),
      answer: t('faqWidgetNotShowingA'),
      tags: ['bug', 'widget', 'affichage', 'dépannage']
    },
    {
      category: 'technical',
      question: t('faqSlowSiteQ'),
      answer: t('faqSlowSiteA'),
      tags: ['performance', 'vitesse', 'seo']
    },
    {
      category: 'billing',
      question: t('faqBillingHowQ'),
      answer: t('faqBillingHowA'),
      tags: ['prix', 'facturation', 'abonnement']
    },
    {
      category: 'billing',
      question: t('faqChangePlanQ'),
      answer: t('faqChangePlanA'),
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
    setSubmitError('');
    
    try {
      const response = await fetch('https://chatseller-api-production.up.railway.app/api/v1/public/support/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setContactForm({
          name: '',
          email: '',
          subject: '',
          message: '',
          category: 'general'
        });
      } else {
        setSubmitError(data.error || t('supportContactError'));
      }
    } catch (error) {
      setSubmitError(t('supportContactError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction pour parser le markdown simple
  const parseMarkdown = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded text-sm">$1</code>');
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
                {t('supportBackToHome')}
              </a>
            </Button>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              {t('supportPageTitle')}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {t('supportPageSubtitle')}
            </p>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder={t('supportSearchPlaceholder')}
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
              <div className="font-semibold">{t('supportResponseTime')}</div>
              <div className="text-sm text-gray-600">{t('supportAverageResponseTime')}</div>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="font-semibold">{t('supportAvailability')}</div>
              <div className="text-sm text-gray-600">{t('supportAvailable247')}</div>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <CheckCircle className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="font-semibold">{t('supportResolutionRate')}</div>
              <div className="text-sm text-gray-600">{t('supportProblemsResolved')}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-6 mx-auto py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">{t('supportFaqTitle')}</h2>
            
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
                <FAQItem key={index} {...item} parseMarkdown={parseMarkdown} />
              ))}
              
              {filteredFAQ.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {t('supportNoResultsTitle')}
                  </h3>
                  <p className="text-gray-600">
                    {t('supportNoResultsDesc')}
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
                {t('supportContactTitle')}
              </h3>
              
              {submitSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="font-semibold text-green-900 mb-2">
                    {t('supportContactSuccess')}
                  </h4>
                  <p className="text-green-700 text-sm mb-4">
                    {t('supportContactSuccessDesc')}
                  </p>
                  <Button 
                    className="mt-4" 
                    onClick={() => setSubmitSuccess(false)}
                  >
                    {t('supportContactSendAnother')}
                  </Button>
                </div>
              ) : (
                <>
                  {submitError && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 text-sm">{submitError}</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmitContact} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">{t('supportContactFullName')}</label>
                      <Input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">{t('supportContactEmail')}</label>
                      <Input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">{t('supportContactCategory')}</label>
                      <select
                        value={contactForm.category}
                        onChange={(e) => setContactForm({...contactForm, category: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="general">{t('contactCategoryGeneral')}</option>
                        <option value="technical">{t('contactCategoryTechnical')}</option>
                        <option value="billing">{t('contactCategoryBilling')}</option>
                        <option value="feature">{t('contactCategoryFeature')}</option>
                        <option value="bug">{t('contactCategoryBug')}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">{t('supportContactSubject')}</label>
                      <Input
                        type="text"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">{t('supportContactMessage')}</label>
                      <textarea
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder={t('supportContactMessagePlaceholder')}
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
                          {t('supportContactSending')}
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4 mr-2" />
                          {t('supportContactSendButton')}
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
              
              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm text-gray-600 mb-2">{t('supportContactUrgentHelp')}</p>
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

// FAQ Item Component avec parsing markdown
const FAQItem = ({ 
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
          <div 
            className="text-gray-600 whitespace-pre-line mb-4"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(answer) }}
          />
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