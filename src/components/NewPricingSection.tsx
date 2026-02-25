// src/components/NewPricingSection.tsx - VERSION BEAUTÉ CONVERSION-FOCUSED
import React, { useState } from 'react';
import { Check, ArrowRight, TrendingUp, Sparkles, Zap, Crown, CreditCard, MessageSquare, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const NewPricingSection = () => {
  const { language } = useLanguage();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-24 relative bg-gradient-to-b from-white via-rose-50/30 to-purple-50/30">
      
      {/* Decorative elements beauté */}
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-gradient-to-br from-rose-300/20 to-pink-300/10 rounded-full blur-3xl -z-10" />
      <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-rose-300/10 rounded-full blur-3xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        
        {/* Header spécialisé beauté */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 mb-8 border border-emerald-200 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 text-sm font-semibold text-emerald-700 animate-fade-in">
            <TrendingUp className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Rentable dès la première vente' : 'Profitable from first sale'}
            <Sparkles className="w-4 h-4 ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight animate-fade-in [animation-delay:200ms]">
            {language === 'fr' ?
              'Quel est le salaire de Mia ?' :
              "What is Mia's salary?"}
          </h2>

          <p className="text-xl text-gray-600 mb-8 animate-fade-in [animation-delay:400ms]">
            {language === 'fr' ?
              'Une vendeuse en boutique physique coûte 1 800€/mois — congés, charges et imprévus inclus. Mia commence à 45€. Sans congés, sans charges, sans mauvaises surprises.' :
              'A salesperson in a physical store costs €1,800/month — vacation, taxes and surprises included. Mia starts at €45. No vacation, no overhead, no surprises.'}
          </p>

          {/* Toggle mensuel/annuel */}
          <div className="flex items-center justify-center space-x-4 mb-8 animate-fade-in [animation-delay:500ms]">
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              {language === 'fr' ? 'Mensuel' : 'Monthly'}
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 ${
                billingPeriod === 'yearly' ? 'bg-rose-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              {language === 'fr' ? 'Annuel' : 'Yearly'}
            </span>
            {billingPeriod === 'yearly' && (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                {language === 'fr' ? '-15%' : '-15%'}
              </span>
            )}
          </div>
        </div>

        {/* Grille des plans beauté */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto animate-fade-in [animation-delay:600ms]">
          
          {/* Plan Mia Découverte (ex-Conseiller) */}
          <BeautyPricingCard
            name={language === 'fr' ? 'Mia Découverte' : 'Mia Starter'}
            monthlyPrice={45}
            yearlyPrice={Math.round(45 * 12 * 0.85 / 12)}
            billingPeriod={billingPeriod}
            subtitle={language === 'fr' ? 'Testez Mia sans engagement' : 'Try Mia risk-free'}
            tag={language === 'fr' ? 'Mia rejoint votre boutique et commence à conseiller vos clients. Idéal pour découvrir son impact sur vos ventes.' : 'Mia joins your store and starts advising your customers. Perfect for discovering her impact on your sales.'}
            roiBadge={language === 'fr' ? '1 vente = abonnement remboursé' : '1 sale = subscription paid'}
            fcfaPrice="29 500"
            features={getStarterFeatures(language)}
            cta={language === 'fr' ? 'Tester Mia pendant 14 jours' : 'Try Mia for 14 days'}
            ctaLink="https://dashboard.chatseller.app/register?plan=starter"
            language={language}
          />

          {/* Plan Mia Pro (ex-Vendre) - Le plus populaire */}
          <BeautyPricingCard
            name={language === 'fr' ? 'Mia Pro' : 'Mia Pro'}
            monthlyPrice={145}
            yearlyPrice={Math.round(145 * 12 * 0.85 / 12)}
            billingPeriod={billingPeriod}
            subtitle={language === 'fr' ? 'Mia à pleine puissance' : 'Mia at full power'}
            tag={language === 'fr' ? 'Mia vend à pleine puissance. Recommandations avancées, suggestions de produits complémentaires, analytics de performance.' : 'Mia sells at full power. Advanced recommendations, complementary product suggestions, performance analytics.'}
            roiBadge={language === 'fr' ? '~3 ventes = abonnement remboursé' : '~3 sales = subscription paid'}
            fcfaPrice="95 000"
            features={getGrowthFeatures(language)}
            cta={language === 'fr' ? 'Recruter Mia' : 'Hire Mia'}
            ctaLink="https://dashboard.chatseller.app/register?plan=growth"
            featured={true}
            language={language}
          />

          {/* Plan Mia Premium (ex-Optimiser) */}
          <BeautyPricingCard
            name={language === 'fr' ? 'Mia Premium' : 'Mia Premium'}
            monthlyPrice={299}
            yearlyPrice={Math.round(299 * 12 * 0.85 / 12)}
            billingPeriod={billingPeriod}
            subtitle={language === 'fr' ? 'Pour les boutiques ambitieuses' : 'For ambitious stores'}
            tag={language === 'fr' ? 'Mia dans sa meilleure version. Intelligence conversationnelle complète, données clients précieuses, accompagnement dédié.' : 'Mia at her best. Full conversational intelligence, valuable customer data, dedicated support.'}
            roiBadge={language === 'fr' ? 'Résultats définis selon vos objectifs' : 'Results defined by your goals'}
            fcfaPrice="196 000"
            features={getPerformanceFeatures(language)}
            cta={language === 'fr' ? 'Recruter Mia' : 'Hire Mia'}
            ctaLink="https://dashboard.chatseller.app/register?plan=performance"
            language={language}
            isEnterprise={true}
          />
        </div>

        {/* Micro-copy sous la grille */}
        <div className="text-center mb-16 animate-fade-in [animation-delay:700ms]">
          <div className="inline-flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span className="font-medium">
                {language === 'fr' ? '14 jours d\'essai sans engagement' : '14-day trial, no commitment'}
              </span>
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 text-blue-500 mr-2" />
              <span className="font-medium">
                {language === 'fr' ? 'Mia est opérationnelle en 5 minutes' : 'Mia is live in 5 minutes'}
              </span>
            </div>
            <div className="flex items-center">
              <CreditCard className="w-4 h-4 text-purple-500 mr-2" />
              <span className="font-medium">
                {language === 'fr' ? 'Licenciez-la à tout moment' : 'Let her go anytime'}
              </span>
            </div>
          </div>
        </div>

        {/* Section de justification de valeur - Comparaison vendeuse physique */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in [animation-delay:750ms]">
          <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 border-2 border-rose-200 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {language === 'fr' ?
                  'Une question de perspective' :
                  'A matter of perspective'}
              </h3>
            </div>

            <div className="space-y-4 text-center">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {language === 'fr' ?
                  'Combien paierez-vous chaque mois une excellente vendeuse en boutique physique qui augmente vos ventes jour après jour ?' :
                  'How much would you pay each month for an excellent salesperson in a physical store who increases your sales day after day?'}
              </p>

              <div className="flex items-center justify-center space-x-4 py-4">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-rose-600">
                    {language === 'fr' ? '1 800€' : '€1,800'}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {language === 'fr' ? '/ mois' : '/ month'}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {language === 'fr' ? '(Salaire vendeuse)' : '(Salesperson salary)'}
                  </div>
                </div>

                <div className="text-2xl text-gray-400">→</div>

                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-600">
                    {language === 'fr' ? '45€' : '€45'}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {language === 'fr' ? '/ mois' : '/ month'}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {language === 'fr' ? '(Salaire Mia)' : "(Mia's salary)"}
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur rounded-xl p-6 mt-6 border border-rose-100">
                <p className="text-base md:text-lg text-gray-800 font-medium leading-relaxed">
                  {language === 'fr' ?
                    'Mia est cette vendeuse d\'exception pour votre boutique en ligne. Elle maîtrise vos produits, ne se fatigue jamais, et répond instantanément à tous vos clients, 24h/24.' :
                    'Mia is that exceptional salesperson for your online store. She masters your products, never gets tired, and instantly responds to all your customers, 24/7.'}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                <div className="flex items-center bg-white/60 px-4 py-2 rounded-full">
                  <Check className="w-4 h-4 text-emerald-500 mr-2" />
                  <span className="text-gray-700 font-medium">
                    {language === 'fr' ? 'Toujours disponible' : 'Always available'}
                  </span>
                </div>
                <div className="flex items-center bg-white/60 px-4 py-2 rounded-full">
                  <Check className="w-4 h-4 text-emerald-500 mr-2" />
                  <span className="text-gray-700 font-medium">
                    {language === 'fr' ? 'Jamais de congés' : 'Never on vacation'}
                  </span>
                </div>
                <div className="flex items-center bg-white/60 px-4 py-2 rounded-full">
                  <Check className="w-4 h-4 text-emerald-500 mr-2" />
                  <span className="text-gray-700 font-medium">
                    {language === 'fr' ? 'Expertise constante' : 'Constant expertise'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Calculator beauté */}
        <div className="mb-20 animate-fade-in [animation-delay:800ms]">
          <BeautyROICalculator language={language} />
        </div>
      </div>
    </section>
  );
};

// Composant carte pricing beauté
interface BeautyPricingCardProps {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  billingPeriod: 'monthly' | 'yearly';
  subtitle?: string;
  tag: string;
  roiBadge: string;
  fcfaPrice?: string;
  features: string[];
  cta: string;
  ctaLink: string;
  featured?: boolean;
  language: string;
  isEnterprise?: boolean;
}

const BeautyPricingCard: React.FC<BeautyPricingCardProps> = ({
  name,
  monthlyPrice,
  yearlyPrice,
  billingPeriod,
  subtitle,
  tag,
  roiBadge,
  fcfaPrice,
  features,
  cta,
  ctaLink,
  featured = false,
  language,
  isEnterprise = false
}) => {
  const price = billingPeriod === 'yearly' ? yearlyPrice : monthlyPrice;
  const yearlyDiscount = billingPeriod === 'yearly' ? Math.round((1 - (yearlyPrice / monthlyPrice)) * 100) : 0;

  return (
    <div className={`relative p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl ${
      featured 
        ? 'border-rose-500 shadow-2xl bg-gradient-to-b from-rose-50/80 via-pink-50/50 to-purple-50/30 scale-105 z-10' 
        : 'border-gray-200 bg-white/80 backdrop-blur-sm hover:bg-white'
    }`}>
      
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
            <Crown className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Le plus populaire' : 'Most popular'}
          </div>
        </div>
      )}
      
      {billingPeriod === 'yearly' && !isEnterprise && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            -{yearlyDiscount}%
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-1 text-gray-900">{name}</h3>
        {subtitle && (
          <p className="text-sm font-medium text-rose-600 mb-2">{subtitle}</p>
        )}
        <div className="mb-4">
          <div>
            <span className="text-4xl md:text-5xl font-bold text-gray-900">{price}€</span>
            <span className="text-gray-600 ml-1">
              /{language === 'fr' ? 'mois' : 'month'}
            </span>
            {fcfaPrice && (
              <div className="text-sm text-gray-500 font-medium mt-2">
                {language === 'fr' ? '≈ ' : '≈ '}{fcfaPrice} FCFA/mois
              </div>
            )}
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed min-h-[40px]">{tag}</p>
      </div>

      <div className={`rounded-2xl p-4 mb-8 text-center ${
        featured 
          ? 'bg-gradient-to-r from-emerald-100 to-green-100 border-2 border-emerald-300' 
          : 'bg-emerald-50 border border-emerald-200'
      }`}>
        <div className="text-sm font-semibold text-emerald-700 mb-1">
          {language === 'fr' ? 'Ce qu\'elle vous rapporte :' : 'What she earns you:'}
        </div>
        <div className="text-lg font-bold text-emerald-600">{roiBadge}</div>
      </div>
      
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
              featured ? 'bg-rose-500' : 'bg-green-500'
            }`}>
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm text-gray-700 font-medium leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>

      <Button 
        className={`w-full group rounded-2xl py-4 text-base font-semibold transition-all duration-300 ${
          featured 
            ? 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl' 
            : isEnterprise
              ? 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white'
              : 'bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-700 hover:to-purple-500 text-white shadow-lg hover:shadow-xl'
        }`}
        asChild
      >
        <a href={ctaLink}>
          {cta}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </div>
  );
};

const BeautyROICalculator = ({ language }: { language: string }) => {
  const [visitors, setVisitors] = useState(2500);
  const [conversion, setConversion] = useState(2.8);
  const [averageOrder, setAverageOrder] = useState(85);
  const [plan, setPlan] = useState('vendre');

  const planPrices = { conseiller: 45, vendre: 145, optimiser: 299 };
  const conversionBoosts = { conseiller: 2.0, vendre: 2.5, optimiser: 3.2 };

  const currentRevenue = visitors * (conversion / 100) * averageOrder;
  const newConversion = Math.min(conversion * conversionBoosts[plan as keyof typeof conversionBoosts], 15);
  const newRevenue = visitors * (newConversion / 100) * averageOrder;
  const additionalRevenue = newRevenue - currentRevenue;
  const planCost = planPrices[plan as keyof typeof planPrices];
  const monthlyProfit = additionalRevenue - planCost;
  const roiPercent = Math.round((monthlyProfit / planCost) * 100);
  const paybackDays = Math.ceil(planCost / (monthlyProfit / 30));

  return (
    <div className="bg-gradient-to-br from-purple-50 via-rose-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl border border-purple-200 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'fr' ?
            'Simulez vos ventes avec Mia' :
            'Simulate your sales with Mia'}
        </h3>
        <p className="text-gray-600 text-lg">
          {language === 'fr' ?
            'Estimez les revenus supplémentaires générés par Mia' :
            'Estimate the additional revenue Mia would generate for you'}
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h4 className="font-bold text-gray-800 mb-6 text-xl">
            {language === 'fr' ? 'Statistiques de votre boutique' : 'Store Statistics'}
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-700">
                {language === 'fr' ? 'Visiteurs mensuels' : 'Monthly visitors'}
              </label>
              <input 
                type="number" 
                value={visitors}
                onChange={(e) => setVisitors(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-rose-500 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-700">
                {language === 'fr' ? 'Taux de conversion actuel (%)' : 'Current conversion rate (%)'}
              </label>
              <input 
                type="number" 
                value={conversion}
                step="0.1"
                onChange={(e) => setConversion(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-rose-500 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-700">
                {language === 'fr' ? 'Panier moyen (€)' : 'Average order (€)'}
              </label>
              <input 
                type="number" 
                value={averageOrder}
                onChange={(e) => setAverageOrder(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-rose-500 bg-white"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-800 mb-6 text-xl">
            {language === 'fr' ? 'Ventes prévisionnelles' : 'Sales Forecast'}
          </h4>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-medium">Revenus actuels/mois:</span>
                <span className="font-bold text-lg">{Math.round(currentRevenue).toLocaleString()}€</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-medium">Nouveaux revenus:</span>
                <span className="font-bold text-green-600 text-xl">{Math.round(newRevenue).toLocaleString()}€</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <span className="text-green-700 font-semibold">Taux de conversion :</span>
                <span className="font-bold text-green-600">{conversion.toFixed(1)}% → {newConversion.toFixed(1)}%</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-100 to-green-100 border-2 border-emerald-300 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-emerald-700 font-bold text-lg">Profit net mensuel:</span>
                <span className="text-2xl font-bold text-emerald-600">+{Math.round(monthlyProfit).toLocaleString()}€</span>
              </div>
              <div className="text-emerald-600 text-sm">Après déduction du coût de ChatSeller</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-rose-600 text-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold mb-1">{roiPercent}%</div>
                <div className="text-rose-100 text-xs font-medium uppercase">Revenus générés</div>
              </div>
              <div className="text-center bg-purple-600 text-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold mb-1">{paybackDays}</div>
                <div className="text-purple-100 text-xs font-medium uppercase">Jours pour être rentable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Features par plan - Orientées VALEUR BUSINESS
const getStarterFeatures = (language: string) => [
  language === 'fr' ? 'Apprend et maîtrise tous vos produits' : 'Learns and masters all your products',
  language === 'fr' ? 'Répond instantanément, 24h/24, 7j/7' : 'Responds instantly, 24/7',
  language === 'fr' ? 'Affiche vos produits directement dans la conversation' : 'Shows your products directly in the conversation',
  language === 'fr' ? 'Passe la main à un humain si nécessaire' : 'Hands over to a human when needed',
  language === 'fr' ? 'Vous voyez tout ce qu\'elle fait et dit' : 'You see everything she does and says',
  language === 'fr' ? 'Vend sur 1 boutique Shopify ou WooCommerce' : 'Sells on 1 Shopify or WooCommerce store',
  language === 'fr' ? 'Support en français' : 'French support'
];

const getGrowthFeatures = (language: string) => [
  language === 'fr' ? 'Tout ce qui est inclus dans Mia Découverte' : 'Everything in Mia Starter plan',
  language === 'fr' ? 'Propose naturellement des produits complémentaires' : 'Naturally suggests complementary products',
  language === 'fr' ? 'Ajoute les produits au panier pour le client' : 'Adds products to cart for the customer',
  language === 'fr' ? 'Vous donne des rapports sur ses ventes et vos clients' : 'Gives you reports on her sales and your customers',
  language === 'fr' ? 'Parle plusieurs langues (FR, EN, et plus)' : 'Speaks multiple languages (FR, EN, and more)',
  language === 'fr' ? 'Vend sur jusqu\'à 3 boutiques simultanément' : 'Sells on up to 3 stores simultaneously',
  language === 'fr' ? 'Support prioritaire 7j/7' : 'Priority support 7/7'
];

const getPerformanceFeatures = (language: string) => [
  language === 'fr' ? 'Tout ce qui est inclus dans Mia Pro' : 'Everything in Mia Pro plan',
  language === 'fr' ? 'Un expert dédié suit ses performances avec vous' : 'A dedicated expert tracks her performance with you',
  language === 'fr' ? 'Se connecte à vos outils marketing et CRM' : 'Connects to your marketing tools and CRM',
  language === 'fr' ? 'Personnalisation complète de son interface' : 'Full customization of her interface',
  language === 'fr' ? 'Accès API & Webhooks' : 'API & Webhooks access',
  language === 'fr' ? 'Vend sur un nombre illimité de boutiques' : 'Sells on unlimited stores',
  language === 'fr' ? 'Support VIP 24/7' : '24/7 VIP Support'
];

export default NewPricingSection;