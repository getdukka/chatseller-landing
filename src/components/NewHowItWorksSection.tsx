// src/components/NewHowItWorksSection.tsx 
import React, { useState } from 'react';
import { ArrowRight, Settings, Brain, Zap, Play, Upload, FileText, Globe, TestTube, Sparkles, Heart, MessageSquare, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewHowItWorksSection = () => {
  const { language } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 relative bg-gradient-to-b from-white via-rose-50/30 to-purple-50/30">
      
      {/* Decorative elements beauté - Responsive */}
      <div className="absolute left-0 top-1/4 w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-gradient-to-br from-rose-300/20 to-pink-300/10 rounded-full blur-3xl -z-10" />
      <div className="absolute right-0 bottom-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-gradient-to-br from-purple-300/20 to-rose-300/10 rounded-full blur-2xl -z-10" />
      
      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
        
        {/* Header - Responsive */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-rose-200 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 text-xs sm:text-sm font-semibold text-rose-700 animate-fade-in">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            {language === 'fr' ? '3 étapes simples' : '3 simple steps'}
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight animate-fade-in [animation-delay:200ms]">
            {language === 'fr' ?
              'Connecter. Créer. Vendre. En 5 minutes.' :
              'Connect. Create. Sell. In 5 minutes.'}
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 animate-fade-in [animation-delay:400ms]">
            {language === 'fr' ?
              'Votre Vendeuse IA sera prête à vendre pour vous avant même que vous ayez fini votre café.' :
              'Your AI advisor will be ready to sell for you before you even finish your coffee.'}
          </p>
        </div>

        {/* Steps interactifs - Responsive */}
        <div className="max-w-7xl mx-auto mb-16 sm:mb-20">
          
          {/* Navigation des étapes - Responsive */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="flex bg-white rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-lg border border-gray-200 overflow-x-auto w-full max-w-2xl">
              {getStepsData(language).map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center space-x-2 sm:space-x-3 px-3 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 whitespace-nowrap min-w-0 flex-1 sm:flex-none ${
                    index === activeStep
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-rose-600 hover:bg-rose-50'
                  }`}
                >
                  <span className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 ${
                    index === activeStep ? 'bg-white text-rose-500' : 'bg-gray-100'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="font-semibold text-xs sm:text-sm md:text-base truncate">{step.shortTitle}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contenu de l'étape active - Responsive */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <BeautyStepContent 
              step={getStepsData(language)[activeStep]} 
              stepIndex={activeStep}
              language={language}
            />
          </div>
        </div>

        {/* Timeline récapitulative - VERSION RESPONSIVE CORRIGÉE */}
        <div className="animate-fade-in [animation-delay:800ms]">
          <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-200 max-w-4xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                {language === 'fr' ? 
                  'Temps total de mise en place' :
                  'Total setup time'}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {language === 'fr' ? 
                  'Votre conseillère beauté IA sera active et pourra accompagner vos clients' :
                  'Your AI beauty advisor will be active and ready to assist your customers'}
              </p>
            </div>
            
            {/* Timeline responsive - VERSION MOBILE CORRIGÉE */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-rose-600 mb-1 sm:mb-2">2min</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {language === 'fr' ? 'Connecter' : 'Connect'}
                </div>
              </div>

              <div className="text-lg sm:text-xl md:text-2xl text-gray-400 rotate-90 sm:rotate-0">+</div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 mb-1 sm:mb-2">2min</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {language === 'fr' ? 'Créer' : 'Create'}
                </div>
              </div>

              <div className="text-lg sm:text-xl md:text-2xl text-gray-400 rotate-90 sm:rotate-0">+</div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pink-600 mb-1 sm:mb-2">1min</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {language === 'fr' ? 'Vendre' : 'Sell'}
                </div>
              </div>
              
              <div className="text-lg sm:text-xl md:text-2xl text-gray-400 rotate-90 sm:rotate-0">=</div>
              
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">5min</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {language === 'fr' ? 'Total' : 'Total'}
                </div>
              </div>
            </div>
            
            {/* Features grid responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="font-medium">
                  {language === 'fr' ? 'Aucune compétence technique' : 'No technical skills'}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-blue-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="font-medium">
                  {language === 'fr' ? 'Formation automatique' : 'Automatic training'}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-purple-600 sm:col-span-2 md:col-span-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
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

// Composant contenu d'étape beauté - Responsive
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
    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center p-6 sm:p-8 md:p-12">
      
      {/* Contenu textuel - Responsive */}
      <div className="space-y-4 sm:space-y-6">
        
        {/* Header étape - Responsive */}
        <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center ${step.colorClasses.text} ${step.colorClasses.bgLight} shadow-lg`}>
            {step.icon}
          </div>
          <div>
            <div className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">
              {language === 'fr' ? 'Étape' : 'Step'} {stepIndex + 1}
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              {step.title}
            </h3>
          </div>
        </div>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          {step.description}
        </p>
        
        {/* Fonctionnalités clés - Responsive */}
        <div className="space-y-3 sm:space-y-4">
          <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">
            {language === 'fr' ? 'Ce qui se passe :' : 'What happens:'}
          </h4>
          <ul className="space-y-2 sm:space-y-3">
            {step.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mt-0.5 ${step.colorClasses.bgDark} flex-shrink-0`}>
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Temps et difficulté - Responsive */}
        <div className="flex items-center space-x-4 sm:space-x-6 pt-3 sm:pt-4">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">
              {step.timeEstimate}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">
              {step.difficulty}
            </span>
          </div>
        </div>
      </div>
      
      {/* Visuel interactif - Responsive */}
      <div className="relative mt-6 lg:mt-0">
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
    shortTitle: language === 'fr' ? 'Connecter' : 'Connect',
    title: language === 'fr' ? 'Connectez votre boutique' : 'Connect your store',
    description: language === 'fr' ?
      'Reliez ChatSeller à votre boutique Shopify ou WooCommerce. Vos produits sont automatiquement importés et votre conseillère les connaîtra instantanément.' :
      'Link ChatSeller to your Shopify or WooCommerce store. Your products are automatically imported and your advisor will know them instantly.',
    icon: <Settings className="h-6 w-6 sm:h-8 sm:w-8" />,
    colorClasses: {
      text: 'text-blue-600',
      bgLight: 'bg-blue-50',
      bgDark: 'bg-blue-500'
    },
    features: [
      language === 'fr' ? 'Connexion en un clic à Shopify/WooCommerce' : 'One-click Shopify/WooCommerce connection',
      language === 'fr' ? 'Import automatique de tous vos produits' : 'Automatic import of all your products',
      language === 'fr' ? 'Synchronisation des prix et stocks' : 'Price and stock synchronization',
      language === 'fr' ? 'Aucune compétence technique requise' : 'No technical skills required'
    ],
    timeEstimate: language === 'fr' ? '2 minutes' : '2 minutes',
    difficulty: language === 'fr' ? 'Très facile' : 'Very easy'
  },
  {
    shortTitle: language === 'fr' ? 'Créer' : 'Create',
    title: language === 'fr' ? 'Créez votre conseillère experte' : 'Create your expert advisor',
    description: language === 'fr' ?
      'Donnez une personnalité à votre conseillère et formez-la sur vos produits. Elle apprend automatiquement tout ce qu\'elle doit savoir pour conseiller vos clientes comme vous le feriez.' :
      'Give your advisor a personality and train her on your products. She automatically learns everything she needs to advise your customers just like you would.',
    icon: <Brain className="h-6 w-6 sm:h-8 sm:w-8" />,
    colorClasses: {
      text: 'text-purple-600',
      bgLight: 'bg-purple-50',
      bgDark: 'bg-purple-500'
    },
    features: [
      language === 'fr' ? 'Personnalisez son nom et sa personnalité' : 'Customize her name and personality',
      language === 'fr' ? 'Formation automatique sur vos produits' : 'Automatic training on your products',
      language === 'fr' ? 'Ajoutez vos connaissances métier' : 'Add your business knowledge',
      language === 'fr' ? 'Elle maîtrise votre catalogue en minutes' : 'She masters your catalog in minutes'
    ],
    timeEstimate: language === 'fr' ? '2 minutes' : '2 minutes',
    difficulty: language === 'fr' ? 'Simple' : 'Simple'
  },
  {
    shortTitle: language === 'fr' ? 'Vendre' : 'Sell',
    title: language === 'fr' ? 'Laissez-la vendre pour vous' : 'Let her sell for you',
    description: language === 'fr' ?
      'Activez votre conseillère et regardez-la transformer vos visiteurs en clientes. Elle répond aux questions, recommande les bons produits et collecte les commandes pendant que vous dormez.' :
      'Activate your advisor and watch her turn visitors into customers. She answers questions, recommends the right products, and collects orders while you sleep.',
    icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
    colorClasses: {
      text: 'text-green-600',
      bgLight: 'bg-green-50',
      bgDark: 'bg-green-500'
    },
    features: [
      language === 'fr' ? 'Disponible 24h/24, 7j/7' : 'Available 24/7',
      language === 'fr' ? 'Répond instantanément à chaque cliente' : 'Responds instantly to every customer',
      language === 'fr' ? 'Recommande les produits adaptés' : 'Recommends the right products',
      language === 'fr' ? 'Collecte les commandes automatiquement' : 'Collects orders automatically'
    ],
    timeEstimate: language === 'fr' ? '1 minute' : '1 minute',
    difficulty: language === 'fr' ? 'Instantané' : 'Instant'
  }
];

// Visuels interactifs pour chaque étape - Versions responsives
const InstallationVisual = ({ language }: { language: string }) => (
  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-blue-200">
    <div className="space-y-4 sm:space-y-6">
      
      {/* Header installation */}
      <div className="text-center">
        <div className="text-base sm:text-lg font-bold text-blue-700 mb-2">
          {language === 'fr' ? 'Choisissez votre plateforme' : 'Choose your platform'}
        </div>
      </div>
      
      {/* Plateformes avec vrais logos */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center mb-2 sm:mb-3 mx-auto">
            <img 
              src="/images/logos/shopify.svg" 
              alt="Shopify Logo" 
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900 text-xs sm:text-sm">Shopify</div>
            <div className="text-xs text-green-600 font-medium">
              {language === 'fr' ? 'Widget à installer' : 'Widget to install'}
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center mb-2 sm:mb-3 mx-auto">
            <img 
              src="/images/logos/woocommerce.svg" 
              alt="WooCommerce Logo" 
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900 text-xs sm:text-sm">WooCommerce</div>
            <div className="text-xs text-purple-600 font-medium">
              {language === 'fr' ? 'Widget à installer' : 'Widget to install'}
            </div>
          </div>
        </div>
      </div>
      
      {/* Progression installation */}
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-xs sm:text-sm text-gray-700 font-medium">
            {language === 'fr' ? 'Connexion à votre boutique' : 'Connect to your store'}
          </span>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-blue-500 rounded-full animate-pulse flex items-center justify-center flex-shrink-0">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-xs sm:text-sm text-gray-700 font-medium">
            {language === 'fr' ? 'Import automatique du catalogue' : 'Automatic catalog import'}
          </span>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full"></div>
          </div>
          <span className="text-xs sm:text-sm text-gray-500">
            {language === 'fr' ? 'Configuration terminée' : 'Configuration completed'}
          </span>
        </div>
      </div>
      
      {/* Stats import */}
      <div className="bg-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
        <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">47</div>
        <div className="text-xs sm:text-sm text-blue-700 font-medium">
          {language === 'fr' ? 'produits importés' : 'products imported'}
        </div>
      </div>
    </div>
  </div>
);

const TrainingVisual = ({ language }: { language: string }) => (
  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-purple-200">
    <div className="space-y-4 sm:space-y-6">
      
      {/* Header formation */}
      <div className="text-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm sm:text-base md:text-lg font-bold mx-auto mb-3 sm:mb-4">
          IA
        </div>
        <div className="text-base sm:text-lg font-bold text-purple-700">
          {language === 'fr' ? 'Formation en cours...' : 'Training in progress...'}
        </div>
      </div>
      
      {/* Sources de formation */}
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white rounded-lg border border-purple-100">
          <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-xs sm:text-sm font-medium truncate">
              {language === 'fr' ? 'Site web indexé' : 'Website indexed'}
            </div>
            <div className="text-xs text-gray-500 truncate">naya-beauty.com</div>
          </div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white rounded-lg border border-purple-100">
          <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-xs sm:text-sm font-medium truncate">
              {language === 'fr' ? 'Catalogue PDF traité' : 'PDF catalog processed'}
            </div>
            <div className="text-xs text-gray-500 truncate">catalogue-produits.pdf</div>
          </div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white rounded-lg border border-purple-100">
          <Upload className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-xs sm:text-sm font-medium truncate">
              {language === 'fr' ? 'Connaissances ajoutées' : 'Knowledge added'}
            </div>
            <div className="text-xs text-gray-500 truncate">
              {language === 'fr' ? 'Types de peau, ingrédients...' : 'Skin types, ingredients...'}
            </div>
          </div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-500 rounded-full animate-pulse flex-shrink-0"></div>
        </div>
      </div>
      
      {/* Progression formation */}
      <div className="space-y-2 sm:space-y-3">
        <div className="flex justify-between text-xs sm:text-sm font-medium text-purple-700">
          <span>{language === 'fr' ? 'Formation de la Vendeuse IA' : 'AI Salesperson Training'}</span>
          <span>87%</span>
        </div>
        <div className="w-full bg-purple-200 rounded-full h-2 sm:h-3">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 sm:h-3 rounded-full animate-pulse" style={{width: '87%'}}></div>
        </div>
        <div className="text-xs text-gray-600 text-center">
          {language === 'fr' ? 
            'Apprentissage des spécificités de votre marque en cours...' :
            'Learning your brand specifics in progress...'}
        </div>
      </div>
      
      {/* Expertise acquise */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <div className="bg-purple-100 rounded-lg p-2 sm:p-3 text-center">
          <div className="text-base sm:text-lg font-bold text-purple-600">+2000</div>
          <div className="text-xs text-purple-700">
            {language === 'fr' ? 'Ingrédients' : 'Ingredients'}
          </div>
        </div>
        <div className="bg-pink-100 rounded-lg p-2 sm:p-3 text-center">
          <div className="text-base sm:text-lg font-bold text-pink-600">12</div>
          <div className="text-xs text-pink-700">
            {language === 'fr' ? 'Types peau' : 'Skin types'}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ActivationVisual = ({ language }: { language: string }) => (
  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-green-200">
    <div className="space-y-4 sm:space-y-6">
      
      {/* Playground test */}
      <div className="bg-white rounded-lg sm:rounded-xl border border-green-200 overflow-hidden">
        <div className="bg-green-100 px-3 sm:px-4 py-2 sm:py-3 border-b border-green-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TestTube className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
              <span className="text-xs sm:text-sm font-semibold text-green-700">
                {language === 'fr' ? 'Playground - Test' : 'Playground - Test'}
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
          <div className="flex justify-end">
            <div className="bg-gray-100 rounded-lg px-2 sm:px-3 py-1 sm:py-2 max-w-[80%]">
              <div className="text-xs sm:text-sm">
                {language === 'fr' ?
                  'J\'ai la peau sensible, quel gommage me conseillez-vous ?' :
                  'I have sensitive skin, which exfoliator do you recommend?'}
              </div>
            </div>
          </div>
          
          <div className="flex justify-start">
            <div className="bg-green-100 rounded-lg px-2 sm:px-3 py-1 sm:py-2 max-w-[80%]">
              <div className="text-xs sm:text-sm">
                {language === 'fr' ?
                  'Pour votre peau sensible, je recommande notre Gommage Papaye, formulé avec des enzymes naturelles douces...' :
                  'For your sensitive skin, I recommend our Papaya Exfoliator, formulated with gentle natural enzymes...'}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Widget preview */}
      <div className="relative">
        <div className="text-xs sm:text-sm font-semibold text-green-700 mb-2 sm:mb-3 text-center">
          {language === 'fr' ? 'Widget sur votre site' : 'Widget on your site'}
        </div>
        
        <div className="bg-gray-100 rounded-lg sm:rounded-xl p-3 sm:p-4 relative">
          {/* Site mockup */}
          <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 mb-3 sm:mb-4">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-200 rounded"></div>
              <div>
                <div className="w-16 h-2 sm:w-20 sm:h-3 bg-gray-200 rounded mb-1"></div>
                <div className="w-12 h-1.5 sm:w-16 sm:h-2 bg-gray-100 rounded"></div>
              </div>
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <div className="w-full h-1.5 sm:h-2 bg-gray-100 rounded"></div>
              <div className="w-3/4 h-1.5 sm:h-2 bg-gray-100 rounded"></div>
            </div>
          </div>
          
          {/* Widget ChatSeller */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center animate-bounce">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="absolute -top-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">1</span>
            </div>
          </div>
        </div>
        
        {/* Activation button */}
        <div className="text-center mt-3 sm:mt-4">
          <a href="https://dashboard.chatseller.app/register" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-lg transition-colors animate-pulse text-xs sm:text-sm">
              {language === 'fr' ? '🚀 Activer maintenant' : '🚀 Activate now'}
            </button>
          </a>
        </div>
      </div>
      
      {/* Première conversion simulée */}
      <div className="bg-green-100 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
        <div className="text-base sm:text-lg font-bold text-green-600 mb-1">
          {language === 'fr' ? 'Première conversion !' : 'First conversion!'}
        </div>
        <div className="text-xs sm:text-sm text-green-700">
          {language === 'fr' ? 'Maguette B. vient d\'acheter le Gommage Papaye +42€' : 'Maguette B. just bought the Papaya Exfoliator +42€'}
        </div>
      </div>
    </div>
  </div>
);

export default NewHowItWorksSection;