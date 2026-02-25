// src/components/ChatModal.tsx 
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Send, RotateCcw, Mic, ShoppingCart, Heart, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: string;
  products?: BeautyProduct[];
  suggestions?: string[];
}

interface BeautyProduct {
  name: string;
  price: string;
  description: string;
  shade?: string;
  skinType?: string;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: getWelcomeMessage(language),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: language === 'fr' ? [
        'J\'ai une perte de cheveux aux tempes 😟'
      ] : [
        'I have hair loss at the temples 😟'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (content: string, type: 'bot' | 'user', products?: BeautyProduct[], suggestions?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      products,
      suggestions
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const formatText = (text: string): React.ReactNode => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-semibold text-rose-700">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const getMiaResponse = (userInput: string): { response: string, products?: BeautyProduct[], suggestions?: string[] } => {
    const input = userInput.toLowerCase();

    // Étape 1: Message d'accueil
    if (input.includes('bonjour') || input.includes('salut') || input.includes('hello') || input.includes('hi') || input.includes('coucou')) {
      return {
        response: language === 'fr' ?
          'Bonjour ! Je suis **Mia**, votre conseillère capillaire. Je vais prendre le temps de comprendre vos besoins pour vous orienter vers les meilleurs soins naturels pour vos cheveux. Que puis-je faire pour vous aujourd\'hui ?' :
          'Hello! I\'m **Mia**, your hair care advisor. I\'ll take the time to understand your needs to guide you to the best natural hair care. What can I do for you today?',
        suggestions: language === 'fr' ? [
          'J\'ai une perte de cheveux aux tempes 😟'
        ] : [
          'I have hair loss at the temples 😟'
        ]
      };
    }

    // Étape 2: Perte de cheveux aux tempes → Question sur la durée
    if (input.includes('tempe') || input.includes('perte') || input.includes('tombe') || input.includes('chute') || input.includes('temple') || input.includes('loss') || input.includes('falling') || input.includes('thinning')) {
      return {
        response: language === 'fr' ?
          'Je comprends parfaitement votre inquiétude. La perte de cheveux au niveau des tempes est un problème courant, surtout avec les coiffures trop serrées ou certains traitements chimiques. Depuis combien de temps avez-vous remarqué cette perte de cheveux ?' :
          'I completely understand your concern. Hair loss at the temples is a common problem, especially with hairstyles that are too tight or certain chemical treatments. How long have you noticed this hair loss?',
        suggestions: language === 'fr' ? [
          'C\'est récent (quelques semaines)'
        ] : [
          'It\'s recent (a few weeks)'
        ]
      };
    }

    // Étape 3: Durée récente → Question sur les tresses
    if (input.includes('récent') || input.includes('semaine') || input.includes('recent') || input.includes('week')) {
      return {
        response: language === 'fr' ?
          'D\'accord, je vois. Et est-ce que vous portez souvent des tresses serrées ou des nattes ? Ces coiffures peuvent créer une tension sur les tempes et fragiliser les cheveux.' :
          'Okay, I see. And do you often wear tight braids or plaits? These hairstyles can create tension on the temples and weaken the hair.',
        suggestions: language === 'fr' ? [
          'Oui, je porte des tresses serrées'
        ] : [
          'Yes, I wear tight braids'
        ]
      };
    }

    // Étape 4: Tresses serrées → Réversibilité + Question type de cheveux
    if (input.includes('tresse') || input.includes('natte') || input.includes('serré') || input.includes('braid') || input.includes('tight')) {
      return {
        response: language === 'fr' ?
          'C\'est très certainement la cause principale. La bonne nouvelle, c\'est que dans la majorité des cas, **c\'est réversible** ! Avec les bons soins et en changeant certaines habitudes, vos cheveux peuvent repousser. Est-ce que vos cheveux sont plutôt secs et cassants ?' :
          'That\'s most likely the main cause. The good news is that in most cases, **it\'s reversible**! With the right care and changing certain habits, your hair can grow back. Is your hair rather dry and brittle?',
        suggestions: language === 'fr' ? [
          'Oui, mes cheveux sont secs et cassants'
        ] : [
          'Yes, my hair is dry and brittle'
        ]
      };
    }

    // Étape 5: Cheveux secs → Recommandation produit
    if (input.includes('sec') || input.includes('cassant') || input.includes('abîmé') || input.includes('dry') || input.includes('brittle') || input.includes('damaged')) {
      const products = language === 'fr' ? [
        {
          name: 'Masque Fortifiant Ricin & Hibiscus',
          price: '23€',
          description: '100% naturel - Stimule la repousse',
        }
      ] : [
        {
          name: 'Castor & Hibiscus Strengthening Mask',
          price: '23€',
          description: '100% natural - Stimulates regrowth',
        }
      ];

      return {
        response: language === 'fr' ?
          'Parfait, je vais pouvoir vous conseiller au mieux. Pour votre cas, je recommande notre **Masque Fortifiant Ricin & Hibiscus**. C\'est un soin 100% naturel qui combine l\'huile de ricin (reconnue pour stimuler la pousse) et l\'hibiscus (qui renforce la fibre capillaire). Il nourrit en profondeur les cheveux secs et cassants tout en stimulant la repousse au niveau des tempes.' :
          'Perfect, I\'ll be able to advise you best. For your case, I recommend our **Castor & Hibiscus Strengthening Mask**. It\'s a 100% natural treatment that combines castor oil (known to stimulate growth) and hibiscus (which strengthens the hair fiber). It deeply nourishes dry and brittle hair while stimulating regrowth at the temples.',
        products,
        suggestions: language === 'fr' ? [
          'Combien de temps pour voir des résultats ?'
        ] : [
          'How long to see results?'
        ]
      };
    }

    // Étape 6: Question résultats → Délai + Mode d'emploi
    if (input.includes('résultat') || input.includes('combien') || input.includes('temps') || input.includes('result') || input.includes('long') || input.includes('time')) {
      return {
        response: language === 'fr' ?
          'Avec un traitement régulier, vous devriez voir les premiers signes de repousse après **6 à 8 semaines**. La clé : la régularité et arrêter les coiffures trop serrées pendant la période de soin. Les follicules ne sont pas morts, ils sont juste en "repos forcé" à cause de la tension mécanique.' :
          'With regular treatment, you should see the first signs of regrowth after **6 to 8 weeks**. The key: regularity and stopping hairstyles that are too tight during the treatment period. The follicles are not dead, they are just in "forced rest" due to mechanical tension.',
        suggestions: language === 'fr' ? [
          'Comment l\'utiliser exactement ?'
        ] : [
          'How to use it exactly?'
        ]
      };
    }

    // Étape 7: Mode d'emploi → Instructions complètes + Duo recommandé
    if (input.includes('utilise') || input.includes('applique') || input.includes('comment') || input.includes('mode') || input.includes('exactement') || input.includes('use') || input.includes('apply') || input.includes('how') || input.includes('exactly')) {
      const products = language === 'fr' ? [
        {
          name: 'Masque Fortifiant Ricin & Hibiscus',
          price: '23€',
          description: '100% naturel - Stimule la repousse',
        },
        {
          name: 'Huile Activatrice de Pousse',
          price: '15€',
          description: 'Huile légère - Usage quotidien',
        }
      ] : [
        {
          name: 'Castor & Hibiscus Strengthening Mask',
          price: '23€',
          description: '100% natural - Stimulates regrowth',
        },
        {
          name: 'Growth Activating Oil',
          price: '15€',
          description: 'Light oil - Daily use',
        }
      ];

      return {
        response: language === 'fr' ?
          'C\'est très simple ! Appliquez le masque **2 fois par semaine** sur cheveux humides, en insistant bien sur les tempes. Laissez poser **30 minutes minimum** sous une charlotte, puis lavez vos cheveux. Pour maximiser les résultats, je vous conseille aussi notre **Huile Activatrice de Pousse**. Quelques gouttes chaque soir sur les tempes, massez délicatement en mouvements circulaires. Ensemble, ils forment un duo très efficace !' :
          'It\'s very simple! Apply the mask **twice a week** on damp hair, paying special attention to the temples. Leave on for **at least 30 minutes** under a cap, then wash your hair. To maximize results, I also recommend our **Growth Activating Oil**. A few drops every evening on the temples, massage gently in circular motions. Together, they form a very effective duo!',
        products,
        suggestions: language === 'fr' ? [
          'Je veux commander le duo complet !'
        ] : [
          'I want to order the complete duo!'
        ]
      };
    }

    // Étape 8: Commande duo → Message final avec ajout au panier
    if (input.includes('commander') || input.includes('prend') || input.includes('duo') || input.includes('order') || input.includes('take') || input.includes('buy')) {
      return {
        response: language === 'fr' ?
          'Parfait ! 🎉 J\'ai ajouté les 2 produits à votre commande :\n\n✅ **Masque Fortifiant Ricin & Hibiscus** - 23€\n✅ **Huile Activatrice de Pousse** - 15€\n\n**Total : 38€**\n\nJ\'aurais besoin de quelques informations pour créer votre commande. A quel nom dois-je établir la commande ?' :
          'Perfect! 🎉 I\'ve added the 2 products to your order:\n\n✅ **Castor & Hibiscus Strengthening Mask** - 23€\n✅ **Growth Activating Oil** - 15€\n\n**Total: 38€**\n\nClick the button below to complete your purchase. You can adjust quantities if needed before payment. Delivery within 48h in France'
      };
    }

    // Questions sur les types de peau
    if (input.includes('peau mixte') || input.includes('combination skin') || input.includes('zone t') || input.includes('t-zone')) {
      const products = language === 'fr' ? [
        {
          name: 'Fond de Teint Éclat Naturel',
          price: '45€',
          description: 'Contrôle parfaitement les brillances en zone T',
          shade: 'Beige Naturel',
          skinType: 'Peau mixte'
        },
        {
          name: 'Sérum Équilibrant',
          price: '38€',
          description: 'Hydrate les joues, matifie la zone T',
          skinType: 'Peau mixte'
        }
      ] : [
        {
          name: 'Natural Glow Foundation',
          price: '€45',
          description: 'Perfectly controls shine in T-zone',
          shade: 'Natural Beige',
          skinType: 'Combination skin'
        },
        {
          name: 'Balancing Serum',
          price: '€38',
          description: 'Moisturizes cheeks, mattifies T-zone',
          skinType: 'Combination skin'
        }
      ];
      
      return {
        response: language === 'fr' ?
          'Parfait ! La **peau mixte** est très courante et j\'ai exactement ce qu\'il vous faut. Notre **Fond de Teint Éclat Naturel** est spécialement formulé pour équilibrer les zones grasses et sèches. Il contient de l\'**acide salicylique doux** pour contrôler les brillances en zone T, tout en apportant l\'hydratation nécessaire aux joues. Quelle est votre carnation ? Claire, médium ou foncée ?' :
          'Perfect! **Combination skin** is very common and I have exactly what you need. Our **Natural Glow Foundation** is specially formulated to balance oily and dry areas. It contains **gentle salicylic acid** to control T-zone shine while providing necessary hydration to cheeks. What\'s your complexion? Fair, medium or deep?',
        products
      };
    }

    // Questions sur la peau sensible
    if (input.includes('peau sensible') || input.includes('sensible') || input.includes('allergie') || input.includes('réaction') || input.includes('sensitive') || input.includes('allergy') || input.includes('reaction')) {
      return {
        response: language === 'fr' ?
          'Je comprends parfaitement vos préoccupations ! Pour les **peaux sensibles**, nous avons développé une gamme **hypoallergénique** spécifique. Tous nos produits peaux sensibles sont **sans parfum, sans parabènes** et **testés dermatologiquement**. Ils contiennent des **actifs apaisants** comme l\'aloe vera et la camomille. Avez-vous identifié des ingrédients qui vous posent problème ?' :
          'I completely understand your concerns! For **sensitive skin**, we\'ve developed a specific **hypoallergenic** range. All our sensitive skin products are **fragrance-free, paraben-free** and **dermatologically tested**. They contain **soothing active ingredients** like aloe vera and chamomile. Have you identified any ingredients that cause you problems?'
      };
    }

    // Questions sur les carnations
    if (input.includes('carnation') || input.includes('teinte') || input.includes('couleur') || input.includes('nuance') || input.includes('complexion') || input.includes('shade') || input.includes('color') || input.includes('match')) {
      return {
        response: language === 'fr' ?
          'Excellente question ! **Trouver sa teinte parfaite** est essentiel. Voici ma méthode infaillible :\n\n🔍 **Test du poignet** : Regardez vos veines\n• Veines **bleues** → sous-tons froids → teintes rosées\n• Veines **vertes** → sous-tons chauds → teintes dorées\n• Veines **violettes** → sous-tons neutres → teintes beiges\n\n✨ **Nos teintes** couvrent tous les sous-tons de très clair à très foncé. Je propose toujours des **échantillons gratuits** pour tester chez vous ! Décrivez-moi votre carnation ?' :
          'Excellent question! **Finding your perfect shade** is essential. Here\'s my foolproof method:\n\n🔍 **Wrist test**: Look at your veins\n• **Blue** veins → cool undertones → rosy shades\n• **Green** veins → warm undertones → golden shades\n• **Purple** veins → neutral undertones → beige shades\n\n✨ **Our shades** cover all undertones from very fair to very deep. I always offer **free samples** to test at home! Can you describe your complexion?'
      };
    }

    // Questions sur les soins anti-âge
    if (input.includes('anti-âge') || input.includes('rides') || input.includes('ridules') || input.includes('fermeté') || input.includes('anti-aging') || input.includes('wrinkles') || input.includes('fine lines') || input.includes('firmness')) {
      const products = language === 'fr' ? [
        {
          name: 'Sérum Anti-Rides Intensif',
          price: '68€',
          description: 'Rétinol + Acide Hyaluronique',
        },
        {
          name: 'Crème Fermeté Premium',
          price: '82€',
          description: 'Peptides + Collagène marin',
        }
      ] : [
        {
          name: 'Intensive Anti-Wrinkle Serum',
          price: '€68',
          description: 'Retinol + Hyaluronic Acid',
        },
        {
          name: 'Premium Firming Cream',
          price: '€82',
          description: 'Peptides + Marine Collagen',
        }
      ];

      return {
        response: language === 'fr' ?
          'L\'**anti-âge** est ma spécialité ! Notre gamme premium combine les **dernières innovations scientifiques**. Mon coup de cœur : le **Sérum Anti-Rides Intensif** avec du rétinol encapsulé (moins d\'irritation) et de l\'acide hyaluronique 5 poids moléculaires. Les résultats sont visibles dès **2 semaines** ! Quel est votre âge et vos préoccupations principales ?' :
          '**Anti-aging** is my specialty! Our premium range combines the **latest scientific innovations**. My favorite: the **Intensive Anti-Wrinkle Serum** with encapsulated retinol (less irritation) and 5 molecular weight hyaluronic acid. Results are visible from **2 weeks**! What\'s your age and main concerns?',
        products
      };
    }

    // Questions sur le maquillage quotidien
    if (input.includes('maquillage quotidien') || input.includes('tous les jours') || input.includes('naturel') || input.includes('simple') || input.includes('daily makeup') || input.includes('everyday') || input.includes('natural') || input.includes('simple')) {
      return {
        response: language === 'fr' ?
          'J\'adore créer des **looks naturels** qui subliment sans en faire trop ! Ma routine **5 minutes chrono** :\n\n✨ **Base** : BB crème + correcteur léger\n👁️ **Yeux** : Mascara brun + fard nude\n💋 **Lèvres** : Baume teinté ou gloss discret\n🌸 **Joues** : Blush pêche ou rose naturel\n\nL\'objectif : avoir l\'air **naturellement radieuse** ! Quel style vous correspond le mieux ?' :
          'I love creating **natural looks** that enhance without overdoing it! My **5-minute** routine:\n\n✨ **Base**: BB cream + light concealer\n👁️ **Eyes**: Brown mascara + nude eyeshadow\n💋 **Lips**: Tinted balm or subtle gloss\n🌸 **Cheeks**: Peach or natural pink blush\n\nThe goal: looking **naturally radiant**! Which style suits you best?'
      };
    }

    // Questions sur les prix/budget
    if (input.includes('prix') || input.includes('coût') || input.includes('budget') || input.includes('cher') || input.includes('abordable') || input.includes('price') || input.includes('cost') || input.includes('expensive') || input.includes('affordable')) {
      return {
        response: language === 'fr' ?
          'Je comprends l\'importance du **budget beauté** ! Nous avons des options pour tous les portefeuilles :\n\n💝 **Gamme Essentielle** : 15-35€ (qualité/prix imbattable)\n✨ **Gamme Premium** : 40-80€ (formules avancées)\n🌟 **Gamme Luxe** : 85€+ (ingrédients rares, packaging premium)\n\n**Astuce** : Je recommande toujours de commencer par les **basiques de qualité** puis d\'investir dans les soins ciblés. Quel est votre budget approximatif ?' :
          'I understand the importance of **beauty budget**! We have options for all wallets:\n\n💝 **Essential Range**: €15-35 (unbeatable value)\n✨ **Premium Range**: €40-80 (advanced formulas)\n🌟 **Luxury Range**: €85+ (rare ingredients, premium packaging)\n\n**Tip**: I always recommend starting with **quality basics** then investing in targeted treatments. What\'s your approximate budget?'
      };
    }

    // Questions sur la routine beauté
    if (input.includes('routine') || input.includes('étapes') || input.includes('ordre') || input.includes('matin') || input.includes('soir') || input.includes('morning') || input.includes('evening') || input.includes('steps') || input.includes('order')) {
      return {
        response: language === 'fr' ?
          'Une **bonne routine** est la clé d\'une belle peau ! Voici ma routine **universelle** adaptable :\n\n🌅 **MATIN** :\n1. Nettoyant doux\n2. Sérum vitamine C\n3. Crème hydratante\n4. Crème solaire (indispensable !)\n\n🌙 **SOIR** :\n1. Démaquillage complet\n2. Nettoyant\n3. Sérum ciblé (acide, rétinol...)\n4. Crème de nuit nourrissante\n\n**Règle d\'or** : toujours du plus liquide au plus épais ! Quel est votre besoin prioritaire ?' :
          'A **good routine** is the key to beautiful skin! Here\'s my **universal** adaptable routine:\n\n🌅 **MORNING**:\n1. Gentle cleanser\n2. Vitamin C serum\n3. Moisturizing cream\n4. Sunscreen (essential!)\n\n🌙 **EVENING**:\n1. Complete makeup removal\n2. Cleanser\n3. Targeted serum (acid, retinol...)\n4. Nourishing night cream\n\n**Golden rule**: always from most liquid to thickest! What\'s your priority need?'
      };
    }

    // Questions sur les tendances
    if (input.includes('tendance') || input.includes('mode') || input.includes('nouveauté') || input.includes('trend') || input.includes('fashion') || input.includes('new') || input.includes('latest')) {
      return {
        response: language === 'fr' ?
          'J\'adore parler **tendances** ! En ce moment, c\'est le règne du :\n\n🌟 **Clean Girl Aesthetic** : peau glasée, sourcils brossés, lèvres glossy\n💧 **Skincare Makeup** : produits qui soignent ET embellissent\n🌈 **Couleurs Vives** : bleus électriques, verts émeraude sur les yeux\n✨ **Glow naturel** : highlighters subtils, peau rayonnante\n\nMon conseil : **adaptez les tendances à votre personnalité** ! Laquelle vous tente ?' :
          'I love talking **trends**! Right now, it\'s the reign of:\n\n🌟 **Clean Girl Aesthetic**: glazed skin, brushed brows, glossy lips\n💧 **Skincare Makeup**: products that care AND beautify\n🌈 **Vibrant Colors**: electric blues, emerald greens on eyes\n✨ **Natural Glow**: subtle highlighters, radiant skin\n\nMy advice: **adapt trends to your personality**! Which one tempts you?'
      };
    }

    // Questions techniques/application
    if (input.includes('appliquer') || input.includes('technique') || input.includes('pinceau') || input.includes('éponge') || input.includes('apply') || input.includes('technique') || input.includes('brush') || input.includes('sponge')) {
      return {
        response: language === 'fr' ?
          'Les **bonnes techniques** font toute la différence ! Mes secrets de pro :\n\n🖌️ **Fond de teint** :\n• Pinceau plat : couvrance maximale\n• Beauty blender humide : fini naturel\n• Doigts : zones précises\n\n👁️ **Fard à paupières** :\n• Pinceau plat : couleur intense\n• Pinceau flou : estompage parfait\n\n💋 **Rouge à lèvres** : toujours avec un pinceau pour la précision !\n\n**Astuce** : tapotez toujours, ne frottez jamais ! Quelle technique vous pose problème ?' :
          'The **right techniques** make all the difference! My pro secrets:\n\n🖌️ **Foundation**:\n• Flat brush: maximum coverage\n• Damp beauty blender: natural finish\n• Fingers: precise areas\n\n👁️ **Eyeshadow**:\n• Flat brush: intense color\n• Fluffy brush: perfect blending\n\n💋 **Lipstick**: always with a brush for precision!\n\n**Tip**: always tap, never rub! Which technique is problematic for you?'
      };
    }

    // Questions sur les saisons
    if (input.includes('saison') || input.includes('hiver') || input.includes('été') || input.includes('automne') || input.includes('printemps') || input.includes('season') || input.includes('winter') || input.includes('summer') || input.includes('fall') || input.includes('spring')) {
      return {
        response: language === 'fr' ?
          'Adapter sa **beauté aux saisons** est essentiel ! Ma philosophie saisonnière :\n\n❄️ **Hiver** : hydratation intense, couleurs profondes (bordeaux, prune)\n🌸 **Printemps** : fraîcheur, pastels délicats (rose, corail)\n☀️ **Été** : protection solaire, teints bronzés, waterproof\n🍂 **Automne** : tons chauds (orange, doré, terre de sienne)\n\nLa nature nous inspire ! Dans quelle saison êtes-vous et qu\'aimez-vous porter ?' :
          'Adapting your **beauty to the seasons** is essential! My seasonal philosophy:\n\n❄️ **Winter**: intense hydration, deep colors (burgundy, plum)\n🌸 **Spring**: freshness, delicate pastels (pink, coral)\n☀️ **Summer**: sun protection, bronzed complexions, waterproof\n🍂 **Autumn**: warm tones (orange, gold, sienna)\n\nNature inspires us! What season are you in and what do you like to wear?'
      };
    }

    // Réponse par défaut pour les questions non prévues (texte libre)
    const defaultResponse = language === 'fr' ?
      'Merci pour votre message 😊\n\nJe dois vous préciser que ceci est une **démo guidée** pour vous donner un aperçu de la façon dont je travaille avec les visiteurs et clients de votre boutique en ligne. Dans cette démo, je suis configurée pour vous montrer un cas précis : la perte de cheveux aux tempes.\n\nSur votre vraie boutique, c\'est différent. Je connais l\'intégralité de vos produits, je réponds à toutes les questions de vos clients — capillaires, skincare, maquillage, parfums — et je les accompagne jusqu\'à l\'achat.\n\nPour voir tout ce que je peux faire pour votre boutique, prenez-moi en essai pendant 14 jours 👉 [Je veux faire l\'essai](https://dashboard.chatseller.app/register)\n\nPour continuer cette démo, cliquez sur la suggestion ci-dessous 👇' :
      'Thank you for your message 😊\n\nI should mention that this is a **guided demo** to give you a glimpse of how I work with your online store\'s visitors and customers. In this demo, I\'m configured to show you one specific use case: temple hair loss.\n\nOn your real store, it\'s different. I know all your products, I answer all your customers\' questions — hair care, skincare, makeup, fragrances — and I guide them all the way to purchase.\n\nTo see everything I can do for your store, try me free for 14 days 👉 [Start my free trial](https://dashboard.chatseller.app/register)\n\nTo continue this demo, click the suggestion below 👇';

    return {
      response: defaultResponse,
      suggestions: language === 'fr' ? [
        'J\'ai une perte de cheveux aux tempes 😟'
      ] : [
        'I have hair loss at the temples 😟'
      ]
    };
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    addMessage(inputValue, 'user');
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const { response, products, suggestions } = getMiaResponse(currentInput);
      addMessage(response, 'bot', products, suggestions);
    }, 1200 + Math.random() * 800);
  };

  const handleQuickReply = (suggestion: string) => {
    addMessage(suggestion, 'user');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const { response, products, suggestions } = getMiaResponse(suggestion);
      addMessage(response, 'bot', products, suggestions);
    }, 1200 + Math.random() * 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: '1',
        type: 'bot',
        content: getWelcomeMessage(language),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: language === 'fr' ? [
          'J\'ai une perte de cheveux aux tempes 😟'
        ] : [
          'I have hair loss at the temples 😟'
        ]
      }
    ]);
    setInputValue('');
  };

  if (!isOpen) return null;

  // Version mobile : plein écran
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 bg-white">
        {/* Header mobile style capture */}
        <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/30">
              <img src="/images/mia-avatar.png" alt="Mia" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-lg">
                {language === 'fr' ? 'Mia' : 'Mia'}
              </div>
              <div className="text-sm opacity-90">
                {language === 'fr' ? 'Conseillère Capillaire' : 'Hair Care Advisor'}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              <span className="text-sm opacity-90">
                {language === 'fr' ? 'En ligne' : 'Online'}
              </span>
            </div>
            <Button variant="ghost" size="icon" onClick={handleResetChat} className="text-white hover:bg-white/20">
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Badge Démo Guidée */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-200 px-4 py-3">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="font-semibold text-purple-800">
              {language === 'fr' ? '💡 Démo Guidée' : '💡 Guided Demo'}
            </span>
            <span className="text-purple-600 text-xs">
              {language === 'fr' ? '- Sur votre site, Mia répond à TOUTES les questions' : '- On your site, AI answers ALL questions'}
            </span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 h-[calc(100vh-200px)] bg-gradient-to-b from-gray-50 to-white">
          {messages.map((message) => (
            <BeautyMessageBubble key={message.id} {...message} language={language} onQuickReply={handleQuickReply} />
          ))}
          {isTyping && <BeautyTypingIndicator language={language} />}
          <div ref={messagesEndRef} />
        </div>

        {/* Input mobile style capture */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex space-x-3 items-center">
            <div className="flex-1 relative">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={language === 'fr' ? 'Posez votre question ici...' : 'Ask your hair care question...'}
                className="rounded-full border-gray-300 pr-4 pl-4 py-3 focus:border-rose-400 focus:ring-rose-400"
              />
            </div>
            <Button 
              onClick={handleSendMessage} 
              size="icon" 
              className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-lg"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Version desktop style capture
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-[650px] h-[700px] flex flex-col overflow-hidden">
        {/* Header desktop style capture */}
        <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/30">
              <img src="/images/mia-avatar.png" alt="Mia" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-lg">
                {language === 'fr' ? 'Mia' : 'Mia'}
              </div>
              <div className="text-sm opacity-90">
                {language === 'fr' ? 'Conseillère Capillaire' : 'Hair Care Advisor'}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              <span className="text-sm opacity-90">
                {language === 'fr' ? 'En ligne' : 'Online'}
              </span>
            </div>
            <Button variant="ghost" size="icon" onClick={handleResetChat} className="text-white hover:bg-white/20" title={language === 'fr' ? 'Nouvelle conversation' : 'New conversation'}>
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Badge Démo Guidée */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-200 px-6 py-3">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="font-semibold text-purple-800">
              {language === 'fr' ? '💡 Démo Guidée' : '💡 Guided Demo'}
            </span>
            <span className="text-purple-600 text-xs">
              {language === 'fr' ? '- Sur votre site, Mia répond à TOUTES les questions' : '- On your site, AI answers ALL questions'}
            </span>
          </div>
        </div>

        {/* Messages avec style capture */}
        <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
          {messages.map((message) => (
            <BeautyMessageBubble key={message.id} {...message} language={language} onQuickReply={handleQuickReply} />
          ))}
          {isTyping && <BeautyTypingIndicator language={language} />}
          <div ref={messagesEndRef} />
        </div>

        {/* Input desktop style capture */}
        <div className="p-6 bg-white border-t border-gray-100">
          <div className="flex space-x-3 items-center">
            <div className="flex-1">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={language === 'fr' ? 'Posez votre question ici...' : 'Ask your hair care question...'}
                className="rounded-full border-gray-300 px-4 py-3 focus:border-rose-400 focus:ring-rose-400"
              />
            </div>
            <Button 
              onClick={handleSendMessage} 
              size="icon" 
              className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-lg"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant message beauté modernisé
const BeautyMessageBubble: React.FC<Message & { language: string; onQuickReply: (suggestion: string) => void }> = ({ type, content, timestamp, products, suggestions, language, onQuickReply }) => {
  const formatText = (text: string): React.ReactNode => {
    const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-semibold text-rose-700">{part.slice(2, -2)}</strong>;
      }
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        return <a key={index} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-rose-600 font-semibold underline hover:text-rose-700">{linkMatch[1]}</a>;
      }
      return part;
    });
  };

  return (
    <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className="flex max-w-[85%] items-start space-x-3">
        {type === 'bot' && (
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 mt-1 border-2 border-rose-200">
            <img src="/images/mia-avatar.png" alt="Mia" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex-1">
          <div
            className={`px-4 py-3 rounded-2xl ${
              type === 'user'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white ml-auto'
                : 'bg-white border border-gray-200 text-gray-800 shadow-sm'
            } ${type === 'user' ? 'rounded-br-md' : 'rounded-bl-md'}`}
          >
            <div className="text-sm whitespace-pre-wrap leading-relaxed">
              {formatText(content)}
            </div>
          </div>
          
          {/* Produits recommandés */}
          {products && products.length > 0 && (
            <div className="mt-3 space-y-2">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-3 cursor-pointer hover:from-rose-100 hover:to-pink-100 transition-all duration-300 group border border-rose-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-rose-100 flex-shrink-0">
                      <img
                        src={`/images/products/${product.name.toLowerCase().includes('masque') ? 'masque-ricin-hibiscus.png' : product.name.toLowerCase().includes('huile') ? 'huile-pousse.png' : 'serum.png'}`}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-rose-300 to-pink-300 flex items-center justify-center"><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg></div>';
                          }
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-800">{product.name}</div>
                      <div className="text-xs text-gray-600">{product.description}</div>
                      {product.shade && (
                        <div className="text-xs text-rose-600 font-medium">
                          {language === 'fr' ? 'Teinte: ' : 'Shade: '}{product.shade}
                        </div>
                      )}
                      {product.skinType && (
                        <div className="text-xs text-purple-600 font-medium">
                          {product.skinType}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-base font-bold text-rose-600">{product.price}</div>
                    <ShoppingCart className="w-4 h-4 text-rose-600 group-hover:scale-110 transition-transform duration-200" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quick Replies - Suggestions de réponses */}
          {suggestions && suggestions.length > 0 && type === 'bot' && (
            <div className="mt-3 flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => onQuickReply(suggestion)}
                  className="inline-flex items-center px-4 py-2 bg-white border-2 border-rose-300 text-rose-700 rounded-full text-sm font-medium hover:bg-rose-50 hover:border-rose-400 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <div className="text-xs text-gray-400 mt-2">{timestamp}</div>
        </div>
      </div>
    </div>
  );
};

// Indicateur de frappe modernisé
const BeautyTypingIndicator = ({ language }: { language: string }) => {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-rose-200">
          <img src="/images/mia-avatar.png" alt="Mia" className="w-full h-full object-cover" />
        </div>
        <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
          <div className="flex space-x-1 items-center">
            <div className="text-xs text-gray-500 mr-2">
              {language === 'fr' ? 'Mia écrit' : 'Mia is typing'}
            </div>
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Messages de bienvenue améliorés
const getWelcomeMessage = (language: string) => {
  return language === 'fr' ?
    'Bonjour ! Je suis **Mia**, votre conseillère capillaire chez Nywele. Comment puis-je vous aider avec vos cheveux aujourd\'hui ? ✨' :
    'Hello! I\'m **Mia**, your hair care advisor at Nywele. How can I help you with your hair today? ✨';
};

export default ChatModal;