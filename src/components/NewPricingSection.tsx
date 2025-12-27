// src/components/NewPricingSection.tsx - VERSION BEAUTÉ CONVERSION-FOCUSED
import React, { useState } from 'react';
import { Check, ArrowRight, Calculator, TrendingUp, Zap, Crown, Heart, Sparkles, CreditCard, Users, Globe, BarChart3, Shield, HelpCircle, MessageSquare } from 'lucide-react';
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
            {language === 'fr' ? 'ROI garanti dès la première vente' : 'ROI guaranteed from first sale'}
            <Sparkles className="w-4 h-4 ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight animate-fade-in [animation-delay:200ms]">
            {language === 'fr' ? 
              'Un investissement qui se rembourse dès la première vente' :
              'An investment that pays for itself from the first sale'}
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 animate-fade-in [animation-delay:400ms]">
            {language === 'fr' ? 
              'Une seule vente supplémentaire par mois suffit à rentabiliser ChatSeller. Combien de ventes perdez-vous actuellement faute de répondre à temps ?' :
              'Just one additional sale per month is enough to make ChatSeller profitable. How many sales are you currently losing due to delayed responses?'}
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
          
          {/* Plan Starter */}
          <BeautyPricingCard
            name="Starter"
            monthlyPrice={45}
            yearlyPrice={Math.round(45 * 12 * 0.85 / 12)}
            billingPeriod={billingPeriod}
            tag={language === 'fr' ? 'Idéal pour démarrer et prouver le ROI' : 'Perfect to start and prove ROI'}
            roiBadge={language === 'fr' ? '1 vente = abonnement remboursé' : '1 sale = subscription paid'}
            fcfaPrice="29 500"
            features={getStarterFeatures(language)}
            cta={language === 'fr' ? 'Essayer gratuitement 14 jours' : 'Try free for 14 days'}
            ctaLink="https://dashboard.chatseller.app/register?plan=starter"
            language={language}
          />

          {/* Plan Growth - Le plus populaire */}
          <BeautyPricingCard
            name="Growth"
            monthlyPrice={145}
            yearlyPrice={Math.round(145 * 12 * 0.85 / 12)}
            billingPeriod={billingPeriod}
            tag={language === 'fr' ? 'Pour les boutiques en croissance' : 'For growing beauty stores'}
            roiBadge={language === 'fr' ? '~3 ventes = abonnement remboursé' : '~3 sales = subscription paid'}
            fcfaPrice="95 000"
            features={getGrowthFeatures(language)}
            cta={language === 'fr' ? 'Commencer avec Growth' : 'Start with Growth'}
            ctaLink="https://dashboard.chatseller.app/register?plan=growth"
            featured={true}
            language={language}
          />

          {/* Plan Performance */}
          <BeautyPricingCard
            name="Performance"
            monthlyPrice={299}
            yearlyPrice={Math.round(299 * 12 * 0.85 / 12)}
            billingPeriod={billingPeriod}
            tag={language === 'fr' ? 'Maximum de conversions & reporting avancé' : 'Maximum conversions & advanced reporting'}
            roiBadge={language === 'fr' ? 'Configuré selon vos objectifs' : 'Configured to your goals'}
            fcfaPrice="196 000"
            features={getPerformanceFeatures(language)}
            cta={language === 'fr' ? 'Contacter notre équipe' : 'Contact our team'}
            ctaLink="mailto:enterprise@chatseller.app"
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
                {language === 'fr' ? '14 jours d\'essai sans CB' : '14-day trial without credit card'}
              </span>
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 text-blue-500 mr-2" />
              <span className="font-medium">
                {language === 'fr' ? 'Installation 1 clic' : '1-click installation'}
              </span>
            </div>
            <div className="flex items-center">
              <CreditCard className="w-4 h-4 text-purple-500 mr-2" />
              <span className="font-medium">
                {language === 'fr' ? 'Annulation en 1 clic' : '1-click cancellation'}
              </span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <div className="inline-block bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 rounded-xl px-6 py-3">
              <span className="text-rose-700 font-bold text-lg">
                {language === 'fr' ? 
                  '💎 1 vente gagnée = abonnement remboursé' :
                  '💎 1 sale gained = subscription paid'}
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
                    {language === 'fr' ? '+200 000' : '+200,000'}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {language === 'fr' ? 'FCFA / mois' : 'FCFA / month'}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {language === 'fr' ? '(Salaire vendeuse)' : '(Salesperson salary)'}
                  </div>
                </div>

                <div className="text-2xl text-gray-400">→</div>

                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-600">
                    {language === 'fr' ? '29 500' : '29,500'}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {language === 'fr' ? 'FCFA / mois' : 'FCFA / month'}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {language === 'fr' ? '(ChatSeller Starter)' : '(ChatSeller Starter)'}
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur rounded-xl p-6 mt-6">
                <p className="text-base md:text-lg text-gray-800 font-medium leading-relaxed">
                  {language === 'fr' ?
                    'ChatSeller, c\'est cette vendeuse d\'exception pour votre boutique en ligne. Elle ne dort jamais, ne se fatigue jamais, et répond instantanément à toutes vos clientes, 24h/24.' :
                    'ChatSeller is that exceptional salesperson for your online store. She never sleeps, never gets tired, and instantly responds to all your customers, 24/7.'}
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

        {/* Add-ons section 
        <div className="mb-16 animate-fade-in [animation-delay:900ms]">
          <BeautyAddOnsSection language={language} />
        </div>*/}

        {/* Guarantee section beauté */}
        <div className="text-center animate-fade-in [animation-delay:1100ms]">
          <div className="bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-50 rounded-3xl p-8 border border-emerald-200 max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Check className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {language === 'fr' ? 
                'Conversion garantie ou remboursée' :
                'Guaranteed conversion or your money back'}
            </h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {language === 'fr' ? 
                'Si ChatSeller ne vous convient pas, nous vous remboursons intégralement. Aucune question posée.' :
                'If ChatSeller does not suit you, we will refund you in full. No questions asked.'}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span className="font-medium">
                  {language === 'fr' ? 'Aucun engagement' : 'No commitment'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span className="font-medium">
                  {language === 'fr' ? 'Données exportables' : 'Exportable data'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span className="font-medium">
                  {language === 'fr' ? 'Support français inclus' : 'English support included'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant carte pricing beauté optimisé
interface BeautyPricingCardProps {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  billingPeriod: 'monthly' | 'yearly';
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
      
      {/* Badge le plus populaire */}
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
            <Crown className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Le plus populaire' : 'Most popular'}
          </div>
        </div>
      )}
      
      {/* Réduction annuelle */}
      {billingPeriod === 'yearly' && !isEnterprise && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            -{yearlyDiscount}%
          </div>
        </div>
      )}
      
      {/* Header plan */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{name}</h3>
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
            {billingPeriod === 'yearly' && (
              <div className="text-sm text-green-600 font-medium mt-1">
                {language === 'fr' ? 'Facturé annuellement' : 'Billed annually'}
              </div>
            )}
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{tag}</p>
      </div>

      {/* Badge ROI prominant */}
      <div className={`rounded-2xl p-4 mb-8 text-center ${
        featured 
          ? 'bg-gradient-to-r from-emerald-100 to-green-100 border-2 border-emerald-300' 
          : 'bg-emerald-50 border border-emerald-200'
      }`}>
        <div className="text-sm font-semibold text-emerald-700 mb-1">
          {language === 'fr' ? 'ROI typique :' : 'Typical ROI:'}
        </div>
        <div className="text-lg font-bold text-emerald-600">{roiBadge}</div>
      </div>
      
      {/* Features spécialisées beauté */}
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

      
      {/* CTA */}
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

// ROI Calculator spécialisé beauté
const BeautyROICalculator = ({ language }: { language: string }) => {
  const [visitors, setVisitors] = useState(2500);
  const [conversion, setConversion] = useState(2.8);
  const [averageOrder, setAverageOrder] = useState(85);
  const [plan, setPlan] = useState('growth');

  const planPrices = { starter: 45, growth: 145, performance: 299 };
  const conversionBoosts = { starter: 2.4, growth: 3.2, performance: 4.1 };

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
            'Calculez votre ROI avec ChatSeller' :
            'Calculate your ROI with ChatSeller'}
        </h3>
        <p className="text-gray-600 text-lg">
          {language === 'fr' ? 
            'Estimez les ventes supplémentaires générées par votre Agent IA' :
            'Estimate additional sales generated by your AI Agent'}
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* Inputs spécialisés beauté */}
        <div className="space-y-6">
          <h4 className="font-bold text-gray-800 mb-6 text-xl">
            {language === 'fr' ? 'Votre boutique en ligne actuelle' : 'Your current online store'}
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
                className="w-full px-4 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white"
                placeholder="2500"
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
                className="w-full px-4 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white"
                placeholder="2.8"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-700">
                {language === 'fr' ? 'Panier moyen actuel (€)' : 'Current average order (€)'}
              </label>
              <input 
                type="number" 
                value={averageOrder}
                onChange={(e) => setAverageOrder(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white"
                placeholder="85"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-700">
                {language === 'fr' ? 'Plan ChatSeller choisi' : 'Selected ChatSeller plan'}
              </label>
              <select 
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white"
              >
                <option value="starter">Starter - {language === 'fr' ? '45€/mois' : '45€/month'}</option>
                <option value="growth">Growth - {language === 'fr' ? '145€/mois' : '145€/month'}</option>
                <option value="performance">Performance - {language === 'fr' ? '299€/mois' : '299€/month'}</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Results avec design beauté */}
        <div>
          <h4 className="font-bold text-gray-800 mb-6 text-xl">
            {language === 'fr' ? 'Résultats avec ChatSeller' : 'Results with ChatSeller'}
          </h4>
          
          <div className="space-y-6">
            
            {/* Revenus comparés */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-medium">
                  {language === 'fr' ? 'Revenus actuels/mois:' : 'Current revenue/month:'}
                </span>
                <span className="font-bold text-lg">{Math.round(currentRevenue).toLocaleString()}€</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-medium">
                  {language === 'fr' ? 'Nouveaux revenus/mois:' : 'New revenue/month:'}
                </span>
                <span className="font-bold text-green-600 text-xl">{Math.round(newRevenue).toLocaleString()}€</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-green-700 font-semibold">
                    {language === 'fr' ? 'Conversion:' : 'Conversion:'}
                  </span>
                  <span className="font-bold text-green-600">
                    {conversion.toFixed(1)}% → {newConversion.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Profit net */}
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 border-2 border-emerald-300 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-emerald-700 font-semibold">
                  {language === 'fr' ? 'Revenus supplémentaires:' : 'Additional revenue:'}
                </span>
                <span className="font-bold text-emerald-600 text-xl">+{Math.round(additionalRevenue).toLocaleString()}€</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-emerald-700 font-semibold">
                  {language === 'fr' ? 'Coût ChatSeller:' : 'ChatSeller cost:'}
                </span>
                <span className="text-emerald-600 font-bold">-{planCost}€</span>
              </div>
              <div className="border-t border-emerald-300 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-700 font-bold text-lg">
                    {language === 'fr' ? 'Profit net mensuel:' : 'Net monthly profit:'}
                  </span>
                  <span className="text-2xl font-bold text-emerald-600">+{Math.round(monthlyProfit).toLocaleString()}€</span>
                </div>
              </div>
            </div>

            {/* ROI et temps de retour */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-rose-600 text-white rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">{roiPercent}%</div>
                <div className="text-rose-100 text-sm font-medium">
                  {language === 'fr' ? 'ROI mensuel' : 'Monthly ROI'}
                </div>
              </div>
              
              <div className="text-center bg-purple-600 text-white rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">{paybackDays}</div>
                <div className="text-purple-100 text-sm font-medium">
                  {language === 'fr' ? 'jours pour se rembourser' : 'days to pay back'}
                </div>
              </div>
            </div>

            {/* Message de motivation */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-2xl p-6 text-center">
              <div className="text-green-700 font-bold text-lg mb-2">
                {monthlyProfit > 1000 ? '🚀' : monthlyProfit > 500 ? '💎' : '✨'}
                {language === 'fr' ? 
                  ` ${monthlyProfit > 1000 ? 'Excellente' : monthlyProfit > 500 ? 'Très bonne' : 'Belle'} opportunité !` :
                  ` ${monthlyProfit > 1000 ? 'Excellent' : monthlyProfit > 500 ? 'Very good' : 'Great'} opportunity !`}
              </div>
              <div className="text-sm text-black">
                {language === 'fr' ? 
                  'Commencez votre essai gratuit de 14 jours dès maintenant' :
                  'Start your 14-day free trial now'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Section Add-ons beauté
const BeautyAddOnsSection = ({ language }: { language: string }) => {
  const addOns = [
    {
      name: language === 'fr' ? 'WhatsApp Business' : 'WhatsApp Business',
      price: '29€',
      description: language === 'fr' ? 
        'Votre Conseillère IA directement sur WhatsApp' :
        'Your AI Advisor directly on WhatsApp',
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      name: language === 'fr' ? 'Domaines supplémentaires' : 'Additional domains',
      price: '19€',
      description: language === 'fr' ? 
        'Ajoutez un site web ou domaine supplémentaire' :
        'Add an additional website or domain',
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: language === 'fr' ? 'Agents multi-persona' : 'Multi-persona agents',
      price: '10€',
      description: language === 'fr' ? 
        'Ajoutez un Agent IA supplementaire avec une personnalité différente' :
        'Add an additional AI Agent with a different personality',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    
    {/*<div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {language === 'fr' ? 'Options supplémentaires' : 'Additional options'}
        </h3>
        <p className="text-gray-600">
          {language === 'fr' ? 
            'Personnalisez davantage l\'expérience de vos client.e.s'
            'Further customize your customers\' experience'}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {addOns.map((addon, index) => (
          <div key={index} className="text-center p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              {addon.icon}
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">{addon.name}</h4>
            <div className="text-2xl font-bold text-rose-600 mb-2">{addon.price}/mois</div>
            <p className="text-sm text-gray-600">{addon.description}</p>
          </div>
        ))}
      </div>
    </div>*/}
  );
};

// Features par plan avec traductions - Simplifiées pour les marques beauté
const getStarterFeatures = (language: string) => [
  language === 'fr' ? 'Conversations illimitées' : 'Unlimited conversations',
  language === 'fr' ? '1 boutique Shopify ou WooCommerce' : '1 Shopify or WooCommerce store',
  language === 'fr' ? '1 Conseillère IA formée sur votre catalogue' : '1 AI Seller trained on your catalog',
  language === 'fr' ? '50 fichiers en Base de connaissances' : '50 files in Knowledge Base',
  language === 'fr' ? 'Recommandations produits intelligentes' : 'Smart product recommendations',
  language === 'fr' ? 'Dashboard de suivi des performances' : 'Performance tracking dashboard',
  language === 'fr' ? 'Support en français' : 'French support'
];

const getGrowthFeatures = (language: string) => [
  language === 'fr' ? 'Conversations illimitées' : 'Unlimited conversations',
  language === 'fr' ? 'Jusqu\'à 3 boutiques Shopify ou WooCommerce' : 'Up to 3 Shopify or WooCommerce stores',
  language === 'fr' ? '1 Conseillère IA formée sur votre catalogue' : '1 AI Seller trained on your catalog',
  language === 'fr' ? '200 fichiers en Base de connaissances' : '200 files in Knowledge Base',
  language === 'fr' ? 'Recommandations produits intelligentes' : 'Smart product recommendations',
  language === 'fr' ? 'Dashboard de suivi des performances' : 'Performance tracking dashboard',
  language === 'fr' ? 'Multi-langue (Français, Anglais, etc.)' : 'Multi-language (French, English, etc.)',
  language === 'fr' ? 'Analytics avancées & exports CSV' : 'Advanced analytics & CSV exports',
  language === 'fr' ? 'Support prioritaire' : 'Priority support'
];

const getPerformanceFeatures = (language: string) => [
  language === 'fr' ? 'Conversations illimitées (fair-use)' : 'Unlimited conversations (fair-use)',
  language === 'fr' ? 'Boutiques illimitées' : 'Unlimited stores',
  language === 'fr' ? 'Conseillères IA formées sur votre catalogue' : 'AI Sellers trained on your catalog',
  language === 'fr' ? 'Fichiers illimités en Base de connaissances' : 'Unlimited files in Knowledge Base',
  language === 'fr' ? 'Recommandations produits intelligentes' : 'Smart product recommendations',
  language === 'fr' ? 'Dashboard de suivi des performances avancé' : 'Advanced performance tracking dashboard',
  language === 'fr' ? 'Multi-langue & personnalisation complète' : 'Multi-language & full customization',
  language === 'fr' ? 'Intégrations CRM sur mesure (API/Webhooks)' : 'Custom CRM integrations (API/Webhooks)',
  language === 'fr' ? 'Success Manager dédié & support 24/7' : 'Dedicated Success Manager & 24/7 support'
];

export default NewPricingSection;