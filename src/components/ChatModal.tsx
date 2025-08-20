// src/components/ChatModal.tsx - VERSION FINALE CORRIGÉE
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Send, RotateCcw, Mic } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: string;
}

interface OrderData {
  quantity: number;
  phone: string;
  fullName: string;
  address: string;
  paymentMethod: string;
  step: 'initial' | 'quantity' | 'phone' | 'name' | 'address' | 'payment' | 'completed';
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Bonjour ! 👋 Je suis Anna, Vendeuse chez Amani. Je vois que vous vous intéressez à notre ceinture chauffante Mia. Comment puis-je vous aider aujourd'hui ?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [orderData, setOrderData] = useState<OrderData>({
    quantity: 0,
    phone: '',
    fullName: '',
    address: '',
    paymentMethod: '',
    step: 'initial'
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (content: string, type: 'bot' | 'user') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // ✅ FONCTION POUR FORMATER LE TEXTE MARKDOWN
  const formatText = (text: string): React.ReactNode => {
    // Remplacer **texte** par du gras
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // ✅ FONCTION POUR AJOUTER UNE QUESTION DE RELANCE
  const addFollowUpQuestion = (response: string): string => {
    // Ne pas ajouter de question si c'est déjà une question ou une étape de commande
    if (response.includes('?') || orderData.step !== 'initial') {
      return response;
    }

    const followUps = [
      "Avez-vous d'autres questions ou souhaitez-vous commander Mia ?",
      "Puis-je vous aider avec autre chose ou êtes-vous prête à commander ?",
      "D'autres questions sur Mia ou voulez-vous la commander ?",
      "Que souhaitez-vous savoir d'autre ou êtes-vous convaincue ?"
    ];

    const randomFollowUp = followUps[Math.floor(Math.random() * followUps.length)];
    return response + "\n\n" + randomFollowUp;
  };

  const getAnnaResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // 🔥 LOGIQUE DE COLLECTE DE COMMANDES (inchangée)
    if (orderData.step === 'quantity') {
      const quantityMatch = input.match(/\b(un|une|1|deux|2|trois|3|quatre|4)\b/);
      if (quantityMatch) {
        const qtyMap: {[key: string]: number} = {
          'un': 1, 'une': 1, '1': 1,
          'deux': 2, '2': 2,
          'trois': 3, '3': 3,
          'quatre': 4, '4': 4
        };
        const qty = qtyMap[quantityMatch[1]];
        setOrderData(prev => ({ ...prev, quantity: qty, step: 'phone' }));
        return `Parfait ! ${qty} ceinture${qty > 1 ? 's' : ''} Mia à 49€ l'unité. Pour la livraison, quel est votre numéro de téléphone ?`;
      }
      return "Combien de ceintures Mia souhaitez-vous ? Vous pouvez dire 'une', 'deux', 'trois' ou 'quatre'.";
    }

    if (orderData.step === 'phone') {
      const phoneMatch = input.match(/(\d{8,})/);
      if (phoneMatch) {
        setOrderData(prev => ({ ...prev, phone: phoneMatch[1], step: 'name' }));
        return `Merci ! J'ai noté le ${phoneMatch[1]}. Maintenant, quel est votre nom complet (prénom et nom) ?`;
      }
      return "Je n'ai pas bien saisi votre numéro. Pouvez-vous me donner votre numéro de téléphone pour la livraison ?";
    }

    if (orderData.step === 'name') {
      if (input.trim().split(' ').length >= 2) {
        setOrderData(prev => ({ ...prev, fullName: userInput, step: 'address' }));
        return `Enchanté ${userInput} ! Quelle est votre adresse de livraison complète ?`;
      }
      return "Pouvez-vous me donner votre prénom ET votre nom de famille ?";
    }

    if (orderData.step === 'address') {
      if (input.length > 10) {
        setOrderData(prev => ({ ...prev, address: userInput, step: 'payment' }));
        return `✅ Parfait ! Récapitulatif de votre commande :\n\n• ${orderData.quantity} ceinture${orderData.quantity > 1 ? 's' : ''} Mia : ${orderData.quantity * 49}€\n• Livraison : Gratuite\n• Total : ${orderData.quantity * 49}€\n\nComment souhaitez-vous payer ? 💳 Carte bancaire, 📱 Mobile Money ou 🚚 Paiement à la livraison ?`;
      }
      return "Pouvez-vous me donner une adresse plus complète avec votre quartier/ville ?";
    }

    if (orderData.step === 'payment') {
      if (input.includes('carte') || input.includes('bancaire') || input.includes('cb')) {
        setOrderData(prev => ({ ...prev, paymentMethod: 'Carte bancaire', step: 'completed' }));
        return `🎉 Excellente nouvelle ! Votre commande est confirmée !\n\n📋 **RÉCAPITULATIF FINAL**\n• Produit : ${orderData.quantity} Mia à 49€\n• Client : ${orderData.fullName}\n• Téléphone : ${orderData.phone}\n• Livraison : ${orderData.address}\n• Paiement : Carte bancaire\n• **Total : ${orderData.quantity * 49}€**\n\nVous recevrez un email de confirmation et votre Mia sera livrée sous 48-72h ! Merci de faire confiance à Amani 💕`;
      }
      if (input.includes('mobile') || input.includes('money') || input.includes('orange') || input.includes('wave')) {
        setOrderData(prev => ({ ...prev, paymentMethod: 'Mobile Money', step: 'completed' }));
        return `🎉 Parfait ! Commande confirmée avec Mobile Money !\n\n📋 **RÉCAPITULATIF FINAL**\n• ${orderData.quantity} Mia × 49€ = ${orderData.quantity * 49}€\n• Livraison gratuite\n• Paiement : Mobile Money\n\nVous recevrez les instructions de paiement par SMS au ${orderData.phone}. Livraison sous 48-72h ! 🚚`;
      }
      if (input.includes('livraison') || input.includes('cash') || input.includes('espèce')) {
        setOrderData(prev => ({ ...prev, paymentMethod: 'Paiement à la livraison', step: 'completed' }));
        return `🎉 Commande validée ! Paiement à la réception !\n\n📋 **RÉCAPITULATIF**\n• ${orderData.quantity} Mia : ${orderData.quantity * 49}€\n• Paiement : À la livraison\n• Livraison : ${orderData.address}\n\nPréparez ${orderData.quantity * 49}€ en espèces. Notre livreur vous contactera au ${orderData.phone} ! 📞✨`;
      }
      return "Choisissez votre mode de paiement : 💳 Carte bancaire, 📱 Mobile Money ou 🚚 Paiement à la livraison ?";
    }

    // 🔥 RÉPONSES EXPERTES SUR MIA ET AMANI (avec questions de relance)
    if (input.includes('bonjour') || input.includes('salut') || input.includes('hello')) {
      return addFollowUpQuestion("Bonjour ! 😊 Je suis ravie de vous aider. La ceinture Mia est notre solution révolutionnaire contre les douleurs menstruelles.");
    }

    if (input.includes('prix') || input.includes('coût') || input.includes('tarif') || input.includes('combien')) {
      return addFollowUpQuestion("La ceinture chauffante Mia est à 49€ avec la livraison gratuite ! 🚚 C'est un investissement unique pour des années de soulagement. Comparé aux anti-douleurs mensuels, Mia se rembourse en 3-4 mois.");
    }

    if (input.includes('fonctionne') || input.includes('marche') || input.includes('efficace') || input.includes('soulage')) {
      return addFollowUpQuestion("Excellente question ! Mia combine 3 technologies scientifiquement prouvées :\n\n🔥 **Thermothérapie** : La chaleur (45°C) dilate les vaisseaux sanguins et détend les muscles\n💆 **Massothérapie** : Les vibrations bloquent les signaux de douleur vers le cerveau\n🌸 **Relaxation** : L'effet combiné réduit le stress et l'anxiété\n\nRésultat : 92% de nos clientes ressentent un soulagement dès la première utilisation !");
    }

    if (input.includes('autonomie') || input.includes('batterie') || input.includes('durée') || input.includes('temps')) {
      return addFollowUpQuestion("Mia a une autonomie de 4 heures et se recharge en 2h via USB-C ! ⚡ Elle chauffe en seulement 30 secondes. Parfaite pour l'utiliser à la maison, au bureau ou en déplacement. Sa batterie lithium haute qualité dure des années.");
    }

    if (input.includes('acheter') || input.includes('commander') || input.includes('commande') || input.includes('prendre') || input.includes('oui')) {
      setOrderData(prev => ({ ...prev, step: 'quantity' }));
      return "Fantastique ! 🎉 Je vais vous aider à finaliser votre commande. Combien de ceintures Mia souhaitez-vous ? (1, 2, 3 ou 4 maximum par commande)";
    }

    if (input.includes('livraison') || input.includes('expédition') || input.includes('délai')) {
      return addFollowUpQuestion("🚚 Livraison gratuite partout au Sénégal sous 48-72h ! Nous livrons aussi en Côte d'Ivoire, Mali, Burkina Faso (+5€). Colis discret, suivi par SMS. Nos livreurs sont formés pour la confidentialité.");
    }

    if (input.includes('garantie') || input.includes('retour') || input.includes('remboursement')) {
      return addFollowUpQuestion("🛡️ Vous êtes 100% protégée ! Garantie constructeur 2 ans + 30 jours satisfaite ou remboursée. Si Mia ne vous convient pas, retour gratuit et remboursement intégral, sans justification !");
    }

    if (input.includes('avis') || input.includes('témoignage') || input.includes('test')) {
      return addFollowUpQuestion("🌟 Nos clientes adorent Mia ! 4.8/5 étoiles, plus de 850 avis positifs. Fatou (Dakar) : 'Mia a changé ma vie !'. Aïcha (Thiès) : 'Fini les anti-inflammatoires !'. 94% recommandent à leurs amies.");
    }

    if (input.includes('risque') || input.includes('danger') || input.includes('sécurité')) {
      return addFollowUpQuestion("Mia est 100% sûre ! Certifiée CE, température contrôlée (45°C max), arrêt automatique après 4h. Plus de 850 femmes l'utilisent sans problème. Aucun effet secondaire contrairement aux médicaments.");
    }

    if (input.includes('douleur') || input.includes('règles') || input.includes('menstruel')) {
      return addFollowUpQuestion("Je comprends parfaitement ! 75% des femmes au Sénégal souffrent de douleurs menstruelles 'insupportables'. Mia a été spécialement conçue après une étude avec 50 femmes sénégalaises. Elle agit sur la source de la douleur, pas juste les symptômes.");
    }

    if (input.includes('amani') || input.includes('marque')) {
      return addFollowUpQuestion("Amani signifie 'paix' en swahili 🕊️. Notre mission : apporter sérénité et bien-être aux femmes africaines. Nous développons des solutions naturelles, efficaces et abordables. 'La chaleur dont vous avez besoin' - c'est notre promesse !");
    }

    // ✅ RÉPONSE PAR DÉFAUT - REDIRECTION VERS AMANI
    return "🤖 Ceci est une **démo** de ChatSeller ! Pour voir un véritable Vendeur IA en action et découvrir Amani, visitez : **https://amani-wellness.com** 🌟\n\nLà-bas, vous discuterez avec la vraie Vendeuse IA d'Amani, parfaitement formée sur leurs produits. C'est exactement ce que ChatSeller peut créer pour VOTRE boutique !\n\nSouhaitez-vous créer votre propre Vendeur IA avec ChatSeller ?";
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    addMessage(inputValue, 'user');
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const response = getAnnaResponse(currentInput);
      addMessage(response, 'bot');
    }, 1200 + Math.random() * 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // ✅ FONCTION RESET CHAT
  const handleResetChat = () => {
    setMessages([
      {
        id: '1',
        type: 'bot',
        content: "Bonjour ! 👋 Je suis Anna, Vendeuse chez Amani. Je vois que vous vous intéressez à notre ceinture chauffante Mia. Comment puis-je vous aider aujourd'hui ?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setOrderData({
      quantity: 0,
      phone: '',
      fullName: '',
      address: '',
      paymentMethod: '',
      step: 'initial'
    });
    setInputValue('');
  };

  if (!isOpen) return null;

  // Version mobile : plein écran (INCHANGÉE)
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 bg-white">
        {/* Header mobile */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">A</span>
            </div>
            <div>
              <div className="font-semibold">Anna - Vendeuse IA</div>
              <div className="text-xs opacity-90 flex items-center">
                <div className="w-2 h-2 bg-green-300 rounded-full mr-1 animate-pulse"></div>
                En ligne • Spécialiste bien-être féminin
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={handleResetChat} className="text-white hover:bg-white/20">
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 h-[calc(100vh-140px)]">
          {messages.map((message) => (
            <MessageBubble key={message.id} {...message} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        {/* Input mobile */}
        <div className="p-4 border-t bg-white">
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Posez vos questions sur Mia..."
              className="flex-1 rounded-full border-2 border-gray-200"
              style={{ outline: 'none', boxShadow: 'none' }}
            />
            <Button onClick={handleSendMessage} size="icon" className="rounded-full bg-pink-500 hover:bg-pink-600">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // ✅ VERSION DESKTOP CORRIGÉE - PLUS LARGE ET INPUT INTÉGRÉ
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-[600px] h-[650px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">A</span>
            </div>
            <div>
              <div className="font-semibold">Anna - Vendeuse IA</div>
              <div className="text-xs opacity-90 flex items-center">
                <div className="w-2 h-2 bg-green-300 rounded-full mr-1 animate-pulse"></div>
                En ligne • Spécialiste bien-être féminin
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Démo</span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleResetChat}
              className="text-white hover:bg-white/20"
              title="Recommencer la conversation"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 min-h-0">
          {messages.map((message) => (
            <MessageBubble key={message.id} {...message} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        {/* ✅ INPUT INTÉGRÉ CORRECTEMENT */}
        <div className="p-4 border-t bg-gray-50">
          <div className="flex items-center space-x-3 bg-white rounded-full p-2 border-2 border-gray-200">
            <div className="flex-1">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Posez vos questions sur la ceinture Mia..."
                className="w-full px-3 py-2 bg-transparent border-0 outline-none resize-none"
                style={{ outline: 'none', boxShadow: 'none' }}
              />
            </div>
            <Button 
              size="icon" 
              variant="ghost"
              className="text-gray-400 hover:text-gray-600 p-2"
              title="Message vocal (démo)"
            >
              <Mic className="h-4 w-4" />
            </Button>
            <Button 
              onClick={handleSendMessage} 
              size="icon" 
              className="rounded-full bg-pink-500 hover:bg-pink-600 p-2"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ COMPOSANT MESSAGE AVEC FORMATAGE MARKDOWN
const MessageBubble: React.FC<Message> = ({ type, content, timestamp }) => {
  // ✅ FONCTION POUR FORMATER LE TEXTE
  const formatText = (text: string): React.ReactNode => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className="flex max-w-[85%] items-end space-x-2">
        {type === 'bot' && (
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold mb-1">
            A
          </div>
        )}
        <div>
          <div
            className={`px-4 py-3 rounded-2xl ${
              type === 'user'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'bg-gray-100 text-gray-800 border border-gray-200'
            }`}
          >
            <div className="text-sm whitespace-pre-wrap leading-relaxed">
              {formatText(content)}
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-1 px-2">{timestamp}</div>
        </div>
        {type === 'user' && (
          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold mb-1">
            👤
          </div>
        )}
      </div>
    </div>
  );
};

// Indicateur de frappe (inchangé)
const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex items-end space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
          A
        </div>
        <div className="bg-gray-100 px-4 py-3 rounded-2xl border border-gray-200">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;