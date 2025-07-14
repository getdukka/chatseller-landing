// src/components/UrgencyFOMO.tsx
import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Users, 
  TrendingUp, 
  Zap, 
  Gift, 
  Star,
  ArrowRight,
  Calendar,
  Target,
  Award,
  AlertCircle,
  CheckCircle2,
  Crown
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const CountdownTimer = ({ endDate }: { endDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div className="bg-white rounded-lg shadow-lg p-4 mb-2 border-2 border-red-200">
        <div className="text-3xl font-bold text-red-600">{value.toString().padStart(2, '0')}</div>
      </div>
      <div className="text-sm font-medium text-gray-600">{label}</div>
    </div>
  );

  return (
    <div className="flex justify-center space-x-4">
      <TimeUnit value={timeLeft.days} label="Jours" />
      <TimeUnit value={timeLeft.hours} label="Heures" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Secondes" />
    </div>
  );
};

const ActivityFeed = () => {
  const [activities, setActivities] = useState([
    { name: "Aminata D.", action: "vient de s'inscrire", location: "Dakar", time: "Il y a 2 min" },
    { name: "Mohamed B.", action: "a démarré son essai", location: "Tunis", time: "Il y a 5 min" },
    { name: "Sarah O.", action: "a upgradeé vers Pro", location: "Lagos", time: "Il y a 8 min" },
    { name: "Kouassi M.", action: "vient de s'inscrire", location: "Abidjan", time: "Il y a 12 min" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivities = [
        "vient de s'inscrire",
        "a démarré son essai", 
        "a upgradeé vers Pro",
        "a installé ChatSeller"
      ];
      
      const names = [
        "Fatou K.", "Ibrahim S.", "Mariam D.", "Youssef B.", 
        "Awa T.", "Omar F.", "Khadija M.", "Mamadou L."
      ];
      
      const locations = [
        "Dakar", "Abidjan", "Lagos", "Tunis", "Casablanca", 
        "Accra", "Bamako", "Ouagadougou"
      ];

      const newActivity = {
        name: names[Math.floor(Math.random() * names.length)],
        action: newActivities[Math.floor(Math.random() * newActivities.length)],
        location: locations[Math.floor(Math.random() * locations.length)],
        time: "Il y a quelques secondes"
      };

      setActivities(prev => [newActivity, ...prev.slice(0, 3)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">
          <Users className="w-4 h-4" />
        </div>
        <h4 className="font-semibold text-gray-900">Activité en temps réel</h4>
        <div className="ml-auto flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
          <span className="text-xs text-green-600">Live</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div 
            key={index} 
            className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
              index === 0 ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
            }`}
          >
            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
              {activity.name.charAt(0)}
            </div>
            <div className="flex-1 text-sm">
              <span className="font-medium text-gray-900">{activity.name}</span>
              <span className="text-gray-600"> {activity.action}</span>
              <span className="text-gray-500"> • {activity.location}</span>
            </div>
            <div className="text-xs text-gray-500">{activity.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StatsCounter = () => {
  const [stats, setStats] = useState({
    signups: 347,
    revenue: 284700,
    conversions: 1249
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        signups: prev.signups + Math.floor(Math.random() * 3),
        revenue: prev.revenue + Math.floor(Math.random() * 500),
        conversions: prev.conversions + Math.floor(Math.random() * 5)
      }));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Users className="w-6 h-6" />
        </div>
        <div className="text-3xl font-bold text-blue-600 mb-2">{stats.signups}+</div>
        <div className="text-sm text-gray-600">E-commerçants ce mois-ci</div>
        <div className="text-xs text-green-600 mt-1">+{Math.floor(Math.random() * 5) + 1} aujourd'hui</div>
      </div>
      
      <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="w-6 h-6" />
        </div>
        <div className="text-3xl font-bold text-green-600 mb-2">€{stats.revenue.toLocaleString()}</div>
        <div className="text-sm text-gray-600">Revenus générés ce mois</div>
        <div className="text-xs text-green-600 mt-1">+€{Math.floor(Math.random() * 1000) + 500} aujourd'hui</div>
      </div>
      
      <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Target className="w-6 h-6" />
        </div>
        <div className="text-3xl font-bold text-purple-600 mb-2">{stats.conversions}+</div>
        <div className="text-sm text-gray-600">Conversions cette semaine</div>
        <div className="text-xs text-green-600 mt-1">+{Math.floor(Math.random() * 10) + 1} aujourd'hui</div>
      </div>
    </div>
  );
};

const UrgencyFOMO = () => {
  // Date de fin de l'offre (dans 13 jours à partir d'aujourd'hui)
  const offerEndDate = new Date();
  offerEndDate.setDate(offerEndDate.getDate() + 13);

  return (
    <section className="py-24 relative bg-gradient-to-b from-red-50 to-orange-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-300 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container px-6 md:px-12 mx-auto relative z-10">
        {/* Main Urgency Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 border-2 border-red-300 rounded-full bg-red-100 text-sm font-bold text-red-700 animate-bounce">
            <Gift className="w-4 h-4 mr-2" />
            🔥 OFFRE DE LANCEMENT LIMITÉE 🔥
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            <span className="text-red-600">-50%</span> sur tous les plans ChatSeller
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 animate-fade-in [animation-delay:400ms]">
            Rejoignez l'élite des e-commerçants qui transforment leurs visiteurs en clients
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-8 animate-fade-in [animation-delay:600ms]">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">L'offre se termine dans :</h3>
            <CountdownTimer endDate={offerEndDate} />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in [animation-delay:800ms]">
            <div className="flex items-center text-sm text-red-700 bg-red-100 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 mr-2" />
              Offre limitée dans le temps
            </div>
            <div className="flex items-center text-sm text-orange-700 bg-orange-100 px-4 py-2 rounded-full">
              <AlertCircle className="w-4 h-4 mr-2" />
              Plus que 50 places disponibles
            </div>
            <div className="flex items-center text-sm text-green-700 bg-green-100 px-4 py-2 rounded-full">
              <Star className="w-4 h-4 mr-2" />
              Garantie satisfait ou remboursé
            </div>
          </div>
        </div>
        
        {/* Pricing Cards with FOMO */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 animate-fade-in [animation-delay:1000ms]">
          {/* Starter Plan */}
          <div className="relative p-8 bg-white rounded-2xl shadow-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
            <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              GRATUIT
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-4">Plan Starter</h3>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold">0€</div>
              <div className="text-gray-600">À vie</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                <span>100 conversations/mois</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                <span>Agent IA intelligent</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                <span>Installation 2 minutes</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                <span>Support email</span>
              </li>
            </ul>
            
            <Button className="w-full" size="lg">
              <a href="https://dashboard.chatseller.app/register?plan=starter" className="flex items-center justify-center w-full">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <p className="text-center text-xs text-gray-500 mt-3">
              Aucune carte bancaire requise
            </p>
          </div>
          
          {/* Pro Plan */}
          <div className="relative p-8 bg-gradient-to-b from-primary/5 to-purple-50 rounded-2xl shadow-xl border-2 border-primary hover:border-primary/80 transition-all duration-300 scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                <Crown className="w-4 h-4 mr-2" />
                LE PLUS POPULAIRE
              </div>
            </div>
            
            <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              -50%
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-4 text-primary">Plan Professional</h3>
            <div className="text-center mb-6">
              <div className="text-sm text-gray-500 line-through">59€/mois</div>
              <div className="text-4xl font-bold text-primary">29€</div>
              <div className="text-gray-600">par mois</div>
              <div className="text-sm text-red-600 font-semibold">Économisez 360€/an !</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                <span>Conversations illimitées</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                <span>3 agents IA spécialisés</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                <span>Upsell intelligent +34%</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                <span>Analytics avancées</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                <span>Support prioritaire 24/7</span>
              </li>
            </ul>
            
            <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700" size="lg">
              <a href="https://dashboard.chatseller.app/register?plan=pro&promo=LAUNCH50" className="flex items-center justify-center w-full">
                Profiter de -50% maintenant
                <Zap className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <p className="text-center text-xs text-gray-600 mt-3">
              14 jours d'essai gratuit • Annulation en 1 clic
            </p>
          </div>
        </div>
        
        {/* Social Proof Stats */}
        <div className="mb-16 animate-fade-in [animation-delay:1200ms]">
          <StatsCounter />
        </div>
        
        {/* Activity Feed */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16 animate-fade-in [animation-delay:1400ms]">
          <ActivityFeed />
          
          {/* FOMO Messages */}
          <div className="space-y-4">
            <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-orange-400">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">⚠️ Places limitées</h4>
                  <p className="text-gray-700 text-sm">
                    Nous limitons notre lancement à 500 e-commerçants pour garantir un support optimal. 
                    <strong className="text-orange-600"> Plus que 50 places disponibles.</strong>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-red-400">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🕒 Derniers jours</h4>
                  <p className="text-gray-700 text-sm">
                    Cette réduction de 50% ne sera plus jamais proposée après le lancement officiel. 
                    <strong className="text-red-600"> C'est votre dernière chance d'économiser 360€/an.</strong>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-green-400">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🏆 Bonus exclusifs</h4>
                  <p className="text-gray-700 text-sm">
                    Les 100 premiers inscrits reçoivent <strong className="text-green-600">1h de formation gratuite</strong> + 
                    modèles de conversation personnalisés pour leur secteur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final FOMO CTA */}
        <div className="text-center max-w-3xl mx-auto animate-fade-in [animation-delay:1600ms]">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">⏰ Ne ratez pas cette opportunité unique</h3>
            <p className="text-xl mb-6 opacity-90">
              Transformez votre boutique en machine à conversion dès aujourd'hui
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Plus de 347 e-commerçants nous font confiance</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>+147% de conversion en moyenne</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>ROI positif dès le 1er mois</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold">
                <a href="https://dashboard.chatseller.app/register?plan=pro&promo=LAUNCH50" className="flex items-center">
                  🚀 Profiter de -50% maintenant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <a href="#demo" className="flex items-center">
                  Voir la démo d'abord
                </a>
              </Button>
            </div>
            
            <p className="text-sm mt-4 opacity-75">
              🛡️ Garantie satisfait ou remboursé 30 jours • 🚀 Installation en 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencyFOMO;