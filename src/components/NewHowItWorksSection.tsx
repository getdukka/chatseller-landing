// src/components/NewHowItWorksSection.tsx - VERSION BEAUTÉ OPTIMISÉE
import React, { useState } from 'react';
import { ArrowRight, Settings, Brain, Zap, Play, Upload, FileText, Globe, TestTube, Sparkles, Heart, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewHowItWorksSection = () => {
  const { language } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 relative bg-gradient-to-b from-white via-rose-50/30 to-purple-50/30">
      
      {/* Decorative elements beauté */}
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-gradient-to-br from-rose-300/20 to-pink-300/10 rounded-full blur-3xl -z-10" />
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-gradient-to-br from-purple-300/20 to-rose-300/10 rounded-full blur-2xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 mb-8 border border-rose-200 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 text-sm font-semibold text-rose-700 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            {language === 'fr' ? '3 étapes simples' : '3 simple steps'}
            <Heart className="w-4 h-4 ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight animate-fade-in [animation-delay:200ms]">
            {language === 'fr' ? 
              'Créez, formez et activez votre Conseillère IA en 7 minutes' :
              'Create, train, and activate your AI Advisor in 7 minutes'}
          </h2>
          
          <p className="text-xl text-gray-600 animate-fade-in [animation-delay:400ms]">
            {language === 'fr' ? 
              'De l\'installation à la première vente, découvrez comme il est simple d\'adopter ChatSeller' :
              'From installation to first sale, discover how easy it is to adopt ChatSeller'}
          </p>
        </div>

        {/* Steps interactifs */}
        <div className="max-w-7xl mx-auto mb-20">
          
          {/* Navigation des étapes */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
              {getStepsData(language).map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                    index === activeStep
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-rose-600 hover:bg-rose-50'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    index === activeStep ? 'bg-white text-rose-500' : 'bg-gray-100'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="font-semibold hidden sm:block">{step.shortTitle}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contenu de l'étape active */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <BeautyStepContent 
              step={getStepsData(language)[activeStep]} 
              stepIndex={activeStep}
              language={language}
            />
          </div>
        </div>

        {/* Timeline récapitulative */}
        <div className="animate-fade-in [animation-delay:800ms]">
          <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-rose-200 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 
                  'Temps total de mise en place' :
                  'Total setup time'}
              </h3>
              <p className="text-gray-600">
                {language === 'fr' ? 
                  'Votre conseillère beauté IA sera active et génèrera des ventes immédiatement' :
                  'Your AI beauty advisor will be active and generating sales immediately'}
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-rose-600 mb-2">2min</div>
                <div className="text-sm text-gray-600 font-medium">
                  {language === 'fr' ? 'Installation' : 'Installation'}
                </div>
              </div>
              
              <div className="text-2xl text-gray-400">+</div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">3min</div>
                <div className="text-sm text-gray-600 font-medium">
                  {language === 'fr' ? 'Formation IA' : 'AI Training'}
                </div>
              </div>
              
              <div className="text-2xl text-gray-400">+</div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">2min</div>
                <div className="text-sm text-gray-600 font-medium">
                  {language === 'fr' ? 'Activation' : 'Activation'}
                </div>
              </div>
              
              <div className="text-2xl text-gray-400">=</div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">7min</div>
                <div className="text-sm text-gray-600 font-medium">
                  {language === 'fr' ? 'Total' : 'Total'}
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium">
                  {language === 'fr' ? 'Aucune compétence technique' : 'No technical skills'}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-blue-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-medium">
                  {language === 'fr' ? 'Formation automatique' : 'Automatic training'}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-purple-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="font-medium">
                  {language === 'fr' ? 'Support français inclus' : 'French support included'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant contenu d'étape beauté
const BeautyStepContent = ({ 
  step, 
  stepIndex, 
  language 
}: { 
  step: any, 
  stepIndex: number, 
  language: string 
}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12">
      
      {/* Contenu textuel */}
      <div className="space-y-6">
        
        {/* Header étape */}
        <div className="flex items-center space-x-4 mb-6">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.colorClasses.text} ${step.colorClasses.bgLight} shadow-lg`}>
            {step.icon}
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              {language === 'fr' ? 'Étape' : 'Step'} {stepIndex + 1}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {step.title}
            </h3>
          </div>
        </div>
        
        <p className="text-xl text-gray-600 leading-relaxed">
          {step.description}
        </p>
        
        {/* Fonctionnalités clés */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-800 mb-3">
            {language === 'fr' ? 'Ce qui se passe :' : 'What happens:'}
          </h4>
          <ul className="space-y-3">
            {step.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start space-x-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${step.colorClasses.bgDark} flex-shrink-0`}>
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Temps et difficulté */}
        <div className="flex items-center space-x-6 pt-4">
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-green-500" />
            <span className="text-sm font-semibold text-gray-700">
              {step.timeEstimate}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-semibold text-gray-700">
              {step.difficulty}
            </span>
          </div>
        </div>
      </div>
      
      {/* Visuel interactif */}
      <div className="relative">
        {stepIndex === 0 && <InstallationVisual language={language} />}
        {stepIndex === 1 && <TrainingVisual language={language} />}
        {stepIndex === 2 && <ActivationVisual language={language} />}
      </div>
    </div>
  );
};

// Données des étapes avec traductions complètes
const getStepsData = (language: 'fr' | 'en') => [
  {
    shortTitle: language === 'fr' ? 'Installation' : 'Install',
    title: language === 'fr' ? 'Installation ChatSeller' : 'ChatSeller Installation',
    description: language === 'fr' ? 
      'Connectez ChatSeller à votre boutique Shopify ou WooCommerce en quelques clics. Notre plugin s\'installe automatiquement et importe votre catalogue de produits.' :
      'Connect ChatSeller to your Shopify or WooCommerce store in just a few clicks. Our plugin installs automatically and imports your product catalog.',
    icon: <Settings className="h-8 w-8" />,
    colorClasses: {
      text: 'text-blue-600',
      bgLight: 'bg-blue-50',
      bgDark: 'bg-blue-500'
    },
    features: [
      language === 'fr' ? 'Plugin Shopify natif (1 clic)' : 'Native Shopify plugin (1 click)',
      language === 'fr' ? 'Extension WooCommerce automatique' : 'Automatic WooCommerce extension',
      language === 'fr' ? 'Import catalogue produits beauté' : 'Beauty product catalog import',
      language === 'fr' ? 'Configuration des paramètres de base' : 'Basic settings configuration'
    ],
    timeEstimate: language === 'fr' ? '2 minutes' : '2 minutes',
    difficulty: language === 'fr' ? 'Très facile' : 'Very easy'
  },
  {
    shortTitle: language === 'fr' ? 'Formation' : 'Training',
    title: language === 'fr' ? 'Formation de votre Conseillère IA' : 'Training your AI Advisor',
    description: language === 'fr' ? 
      'Créez votre conseillère IA et formez-la avec vos données : site web, fichiers PDF/CSV/Docx, FAQ, ou texte libre. Elle apprend instantanément votre expertise.' :
      'Create your AI beauty advisor and train her with your data: website, PDF/CSV/Docx files, FAQ, or free text. She instantly learns your expertise.',
    icon: <Brain className="h-8 w-8" />,
    colorClasses: {
      text: 'text-purple-600',
      bgLight: 'bg-purple-50',
      bgDark: 'bg-purple-500'
    },
    features: [
      language === 'fr' ? 'Import automatique de votre site web' : 'Automatic website import',
      language === 'fr' ? 'Upload fichiers PDF, CSV, DOCX' : 'Upload PDF, CSV, DOCX files',
      language === 'fr' ? 'Ajout de connaissances par texte libre' : 'Add knowledge via free text',
      language === 'fr' ? 'Formation spécialisée secteur beauté' : 'Beauty industry specialized training'
    ],
    timeEstimate: language === 'fr' ? '3 minutes' : '3 minutes',
    difficulty: language === 'fr' ? 'Simple' : 'Simple'
  },
  {
    shortTitle: language === 'fr' ? 'Activation' : 'Activate',
    title: language === 'fr' ? 'Activation sur votre boutique' : 'Activation on your store',
    description: language === 'fr' ? 
      'Testez votre conseillère dans le Playground, puis activez-la d\'un clic. Le widget apparaît instantanément et commence à convertir vos visiteurs.' :
      'Test your advisor in the Playground, then activate her with one click. The widget appears instantly and starts converting your visitors.',
    icon: <Zap className="h-8 w-8" />,
    colorClasses: {
      text: 'text-green-600',
      bgLight: 'bg-green-50',
      bgDark: 'bg-green-500'
    },
    features: [
      language === 'fr' ? 'Test complet dans le Playground' : 'Complete testing in Playground',
      language === 'fr' ? 'Personnalisation apparence widget' : 'Widget appearance customization',
      language === 'fr' ? 'Activation instantanée d\'un clic' : 'Instant one-click activation',
      language === 'fr' ? 'Début des conversions immédiates' : 'Immediate conversions start'
    ],
    timeEstimate: language === 'fr' ? '2 minutes' : '2 minutes',
    difficulty: language === 'fr' ? 'Instantané' : 'Instant'
  }
];

// Visuels interactifs pour chaque étape
const InstallationVisual = ({ language }: { language: string }) => (
  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
    <div className="space-y-6">
      
      {/* Header installation */}
      <div className="text-center">
        <div className="text-lg font-bold text-blue-700 mb-2">
          {language === 'fr' ? 'Choisissez votre plateforme' : 'Choose your platform'}
        </div>
      </div>
      
      {/* Plateformes avec vrais logos */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 border border-blue-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 flex items-center justify-center mb-3 mx-auto">
            <img 
              src="/src/assets/platform-logos/shopify.svg" 
              alt="Shopify Logo" 
              className="w-10 h-10"
            />
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900">Shopify</div>
            <div className="text-sm text-green-600 font-medium">
              {language === 'fr' ? 'Plugin natif' : 'Native plugin'}
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-blue-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 flex items-center justify-center mb-3 mx-auto">
            <img 
              src="/src/assets/platform-logos/woocommerce.svg" 
              alt="WooCommerce Logo" 
              className="w-10 h-10"
            />
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900">WooCommerce</div>
            <div className="text-sm text-purple-600 font-medium">
              {language === 'fr' ? 'Extension auto' : 'Auto extension'}
            </div>
          </div>
        </div>
      </div>
      
      {/* Progression installation */}
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-sm text-gray-700 font-medium">
            {language === 'fr' ? 'Connexion à votre boutique' : 'Connect to your store'}
          </span>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-sm text-gray-700 font-medium">
            {language === 'fr' ? 'Import automatique du catalogue' : 'Automatic catalog import'}
          </span>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-500">
            {language === 'fr' ? 'Configuration terminée' : 'Configuration completed'}
          </span>
        </div>
      </div>
      
      {/* Stats import */}
      <div className="bg-blue-100 rounded-xl p-4 text-center">
        <div className="text-2xl font-bold text-blue-600 mb-1">247</div>
        <div className="text-sm text-blue-700 font-medium">
          {language === 'fr' ? 'produits beauté importés' : 'beauty products imported'}
        </div>
      </div>
    </div>
  </div>
);

const TrainingVisual = ({ language }: { language: string }) => (
  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
    <div className="space-y-6">
      
      {/* Header formation */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">
          IA
        </div>
        <div className="text-lg font-bold text-purple-700">
          {language === 'fr' ? 'Formation en cours...' : 'Training in progress...'}
        </div>
      </div>
      
      {/* Sources de formation */}
      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-purple-100">
          <Globe className="w-5 h-5 text-blue-500" />
          <div className="flex-1">
            <div className="text-sm font-medium">
              {language === 'fr' ? 'Site web analysé' : 'Website analyzed'}
            </div>
            <div className="text-xs text-gray-500">beaute-premium.com</div>
          </div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-purple-100">
          <FileText className="w-5 h-5 text-purple-500" />
          <div className="flex-1">
            <div className="text-sm font-medium">
              {language === 'fr' ? 'Catalogue PDF traité' : 'PDF catalog processed'}
            </div>
            <div className="text-xs text-gray-500">catalogue-produits.pdf</div>
          </div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-purple-100">
          <Upload className="w-5 h-5 text-green-500" />
          <div className="flex-1">
            <div className="text-sm font-medium">
              {language === 'fr' ? 'Connaissances beauté ajoutées' : 'Beauty knowledge added'}
            </div>
            <div className="text-xs text-gray-500">
              {language === 'fr' ? 'Types de peau, ingrédients...' : 'Skin types, ingredients...'}
            </div>
          </div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Progression formation */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm font-medium text-purple-700">
          <span>{language === 'fr' ? 'Formation IA' : 'AI Training'}</span>
          <span>87%</span>
        </div>
        <div className="w-full bg-purple-200 rounded-full h-3">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full animate-pulse" style={{width: '87%'}}></div>
        </div>
        <div className="text-xs text-gray-600 text-center">
          {language === 'fr' ? 
            'Apprentissage des spécificités beauté en cours...' :
            'Learning beauty specifics in progress...'}
        </div>
      </div>
      
      {/* Expertise acquise */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-purple-100 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-purple-600">2000+</div>
          <div className="text-xs text-purple-700">
            {language === 'fr' ? 'Ingrédients' : 'Ingredients'}
          </div>
        </div>
        <div className="bg-pink-100 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-pink-600">12</div>
          <div className="text-xs text-pink-700">
            {language === 'fr' ? 'Types peau' : 'Skin types'}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ActivationVisual = ({ language }: { language: string }) => (
  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
    <div className="space-y-6">
      
      {/* Playground test */}
      <div className="bg-white rounded-xl border border-green-200 overflow-hidden">
        <div className="bg-green-100 px-4 py-3 border-b border-green-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TestTube className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700">
                {language === 'fr' ? 'Playground - Test' : 'Playground - Test'}
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="p-4 space-y-3">
          <div className="flex justify-end">
            <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-xs">
              <div className="text-sm">
                {language === 'fr' ? 
                  'J\'ai la peau sensible, quel sérum me conseillez-vous ?' :
                  'I have sensitive skin, which serum do you recommend?'}
              </div>
            </div>
          </div>
          
          <div className="flex justify-start">
            <div className="bg-green-100 rounded-lg px-3 py-2 max-w-xs">
              <div className="text-sm">
                {language === 'fr' ?
                  'Pour votre peau sensible, je recommande notre sérum à la vitamine C douce, formulé sans parfum...' :
                  'For your sensitive skin, I recommend our gentle vitamin C serum, formulated without fragrance...'}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Widget preview */}
      <div className="relative">
        <div className="text-sm font-semibold text-green-700 mb-3 text-center">
          {language === 'fr' ? 'Widget sur votre site' : 'Widget on your site'}
        </div>
        
        <div className="bg-gray-100 rounded-xl p-4 relative">
          {/* Site mockup */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-purple-200 rounded"></div>
              <div>
                <div className="w-20 h-3 bg-gray-200 rounded mb-1"></div>
                <div className="w-16 h-2 bg-gray-100 rounded"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-2 bg-gray-100 rounded"></div>
              <div className="w-3/4 h-2 bg-gray-100 rounded"></div>
            </div>
          </div>
          
          {/* Widget ChatSeller */}
          <div className="absolute bottom-6 right-6">
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-14 h-14 rounded-full shadow-lg flex items-center justify-center animate-bounce">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">1</span>
            </div>
          </div>
        </div>
        
        {/* Activation button */}
        <div className="text-center mt-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-colors animate-pulse">
            {language === 'fr' ? '🚀 Activer maintenant' : '🚀 Activate now'}
          </button>
        </div>
      </div>
      
      {/* Première conversion simulée */}
      <div className="bg-green-100 rounded-xl p-4 text-center">
        <div className="text-lg font-bold text-green-600 mb-1">
          {language === 'fr' ? 'Première conversion !' : 'First conversion!'}
        </div>
        <div className="text-sm text-green-700">
          {language === 'fr' ? 'Marie L. vient d\'acheter le sérum +42€' : 'Marie L. just bought the serum +42€'}
        </div>
      </div>
    </div>
  </div>
);

export default NewHowItWorksSection;