// src/components/ChatModal.tsx - VENDEUR IA POUR CEINTURE CHAUFFANTE MIA
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Send, Minimize2, Maximize2 } from 'lucide-react';
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

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Bonjour ! 👋 Je suis Anna, votre Vendeuse IA. Je vois que vous vous intéressez à notre ceinture chauffante Mia. Comment puis-je vous aider aujourd'hui ?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    hasInfo: false
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Ajouter le message utilisateur
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Simuler une réponse de l'IA
    setTimeout(() => {
      setIsTyping(false);
      
      let botResponse: Message;
      const input = currentInput.toLowerCase();
      
      // Détection de nom dans la conversation
      if (input.includes('je m\'appelle') || input.includes('je suis') || input.includes('mon nom')) {
        const nameMatch = input.match(/(?:je m'appelle|je suis|mon nom.*?)([\w\s]+)/i);
        if (nameMatch) {
          setCustomerInfo(prev => ({ ...prev, name: nameMatch[1].trim() }));
        }
      }
      
      // Détection de numéro de téléphone
      if (input.match(/\d{10,}/)) {
        const phoneMatch = input.match(/(\d{10,})/);
        if (phoneMatch) {
          setCustomerInfo(prev => ({ ...prev, phone: phoneMatch[1] }));
        }
      }

      if (input.includes('bonjour') || input.includes('salut') || input.includes('hello')) {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: "Bonjour ! 😊 La ceinture Mia est parfaite pour soulager les douleurs menstruelles naturellement. Avez-vous des questions spécifiques sur son fonctionnement ?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else if (input.includes('prix') || input.includes('coût') || input.includes('tarif') || input.includes('combien')) {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: "La ceinture chauffante Mia est proposée à 49€ avec la livraison gratuite ! 🚚 C'est un excellent investissement pour votre bien-être. Souhaitez-vous la commander ?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else if (input.includes('fonctionne') || input.includes('marche') || input.includes('comment') || input.includes('efficace')) {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: "Excellente question ! Mia combine 2 technologies : 🔥 La thermothérapie (chaleur) qui dilate les vaisseaux et détend les muscles, et 💆‍♀️ la massothérapie (vibrations) qui bloque les signaux de douleur. Résultat : soulagement en 5-10 minutes !",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else if (input.includes('autonomie') || input.includes('batterie') || input.includes('durée') || input.includes('temps')) {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: "La ceinture Mia offre 4 heures d'autonomie et se recharge en 2h via USB-C. Elle chauffe en seulement 30 secondes ! ⚡ Parfait pour l'utiliser à la maison, au bureau ou en déplacement.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else if (input.includes('acheter') || input.includes('commander') || input.includes('commande') || input.includes('prendre') || input.includes('oui')) {
        if (!customerInfo.name) {
          botResponse = {
            id: (Date.now() + 100).toString(),
            type: 'bot',
            content: "Parfait ! 🎉 Je vais vous aider à finaliser votre commande. Pour commencer, puis-je avoir votre nom et prénom ?",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
        } else if (!customerInfo.phone) {
          botResponse = {
            id: (Date.now() + 100).toString(),
            type: 'bot',
            content: `Merci ${customerInfo.name} ! Maintenant, quel est votre numéro de téléphone pour la livraison ?`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
        } else {
          botResponse = {
            id: (Date.now() + 100).toString(),
            type: 'bot',
            content: `Parfait ${customerInfo.name} ! ✅ Récapitulatif :\n• Ceinture Mia : 49€\n• Livraison : Gratuite\n• Tel : ${customerInfo.phone}\n\nVotre commande sera traitée sous 24h. Vous préférez payer par carte ou virement ?`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
        }
      } else if (input.includes('livraison') || input.includes('expédition') || input.includes('délai')) {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: "📦 Livraison gratuite en 48-72h partout en France ! Nous expédions aussi vers la Belgique, l'Afrique et DOM-TOM. Vous recevrez un email de suivi dès l'expédition.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else if (input.includes('garantie') || input.includes('retour') || input.includes('remboursement')) {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: "🛡️ Vous êtes protégée ! Garantie 2 ans + 30 jours satisfaite ou remboursée. Si Mia ne vous convient pas, retour gratuit et remboursement intégral, sans justification !",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else if (input.includes('avis') || input.includes('témoignage') || input.includes('efficacité') || input.includes('marche vraiment')) {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: "🌟 Nos clientes adorent Mia ! 4.8/5 étoiles avec plus de 1200 avis. 92% ressentent un soulagement dès la 1ère utilisation. Sarah de Lyon : 'Mia a changé ma vie, fini les anti-inflammatoires !' Voulez-vous la tester ?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else if (input.includes('carte') || input.includes('paiement') || input.includes('virement')) {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: "💳 Paiement 100% sécurisé ! Nous acceptons CB, Visa, Mastercard, PayPal et virement bancaire. Paiement en 3x sans frais possible. Vos données sont cryptées et protégées.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else if (input.match(/[\w\s]+ [\w\s]+/) && !customerInfo.name && input.length > 5) {
        // Détection probable d'un nom
        setCustomerInfo(prev => ({ ...prev, name: currentInput }));
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: `Merci ${currentInput} ! Et quel est votre numéro de téléphone pour la livraison ?`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else if (input.match(/\d{10,}/) && customerInfo.name) {
        // Détection d'un numéro de téléphone
        setCustomerInfo(prev => ({ ...prev, phone: currentInput }));
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: `Parfait ! ✅ Récapitulatif de votre commande :\n\n🎯 Ceinture Mia : 49€\n📞 Téléphone : ${currentInput}\n🚚 Livraison : Gratuite\n\nVotre commande sera expédiée sous 24h ! Comment souhaitez-vous régler ? (CB, PayPal, virement)`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else {
        // Réponse par défaut
        const defaultResponses = [
          "Je peux vous expliquer comment Mia fonctionne, vous parler du prix (49€), ou vous aider à commander. Que souhaitez-vous savoir ?",
          "Mia est efficace contre les crampes menstruelles grâce à la chaleur + massage. Avez-vous des questions sur son utilisation ?",
          "Vous hésitez ? Je comprends ! Mia a 30 jours satisfaite ou remboursée. Voulez-vous connaître les avis de nos clientes ?",
          "La ceinture Mia soulage naturellement sans médicaments. Puis-je vous expliquer comment ça fonctionne ?"
        ];
        
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: defaultResponses[Math.floor(Math.random() * defaultResponses.length)],
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      }
      
      setMessages(prev => [...prev, botResponse]);
    }, 1200 + Math.random() * 800); // Temps de réponse variable pour plus de réalisme
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  // Version mobile : plein écran
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
                En ligne
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white">
            <X className="h-5 w-5" />
          </Button>
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
              placeholder="Tapez votre message..."
              className="flex-1 rounded-full"
            />
            <Button onClick={handleSendMessage} size="icon" className="rounded-full bg-pink-500 hover:bg-pink-600">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Version desktop : modal
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div 
        className={`bg-white rounded-2xl shadow-2xl transition-all duration-300 ${
          isMinimized ? 'w-80 h-16' : 'w-[480px] h-[600px]'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">A</span>
            </div>
            {!isMinimized && (
              <div>
                <div className="font-semibold">Anna - Vendeuse IA</div>
                <div className="text-xs opacity-90 flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-1 animate-pulse"></div>
                  En ligne • Spécialiste bien-être féminin
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/20"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 h-[480px]">
              {messages.map((message) => (
                <MessageBubble key={message.id} {...message} />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Posez vos questions sur la ceinture Mia..."
                  className="flex-1 rounded-full"
                />
                <Button onClick={handleSendMessage} size="icon" className="rounded-full bg-pink-500 hover:bg-pink-600">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Composant de bulle de message
const MessageBubble: React.FC<Message> = ({ type, content, timestamp }) => {
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
            <div className="text-sm whitespace-pre-wrap leading-relaxed">{content}</div>
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

// Indicateur de frappe
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