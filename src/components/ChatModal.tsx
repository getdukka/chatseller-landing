// src/components/ChatModal.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Send, RotateCcw, Mic } from 'lucide-react';
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
  const { t, language } = useLanguage();
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: t('annaWelcome'),
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

  // ✅ FONCTION POUR AJOUTER UNE QUESTION DE RELANCE (TRADUITE)
  const addFollowUpQuestion = (response: string): string => {
    // Ne pas ajouter de question si c'est déjà une question ou une étape de commande
    if (response.includes('?') || orderData.step !== 'initial') {
      return response;
    }

    const followUps = language === 'fr' ? [
      "Avez-vous d'autres questions ou souhaitez-vous commander Mia ?",
      "Puis-je vous aider avec autre chose ou êtes-vous prête à commander ?",
      "D'autres questions sur Mia ou voulez-vous la commander ?",
      "Que souhaitez-vous savoir d'autre ou êtes-vous convaincue ?"
    ] : [
      "Do you have any other questions or would you like to order Mia?",
      "Can I help you with anything else or are you ready to order?",
      "Any other questions about Mia or would you like to order it?",
      "What else would you like to know or are you convinced?"
    ];

    const randomFollowUp = followUps[Math.floor(Math.random() * followUps.length)];
    return response + "\n\n" + randomFollowUp;
  };

  const getAnnaResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // 🔥 LOGIQUE DE COLLECTE DE COMMANDES (TRADUITE)
    if (orderData.step === 'quantity') {
      const quantityMatch = language === 'fr' ? 
        input.match(/\b(un|une|1|deux|2|trois|3|quatre|4)\b/) :
        input.match(/\b(one|1|two|2|three|3|four|4)\b/);
      
      if (quantityMatch) {
        const qtyMap: {[key: string]: number} = language === 'fr' ? {
          'un': 1, 'une': 1, '1': 1,
          'deux': 2, '2': 2,
          'trois': 3, '3': 3,
          'quatre': 4, '4': 4
        } : {
          'one': 1, '1': 1,
          'two': 2, '2': 2,
          'three': 3, '3': 3,
          'four': 4, '4': 4
        };
        const qty = qtyMap[quantityMatch[1]];
        setOrderData(prev => ({ ...prev, quantity: qty, step: 'phone' }));
        
        return language === 'fr' ? 
          `Parfait ! ${qty} ceinture${qty > 1 ? 's' : ''} Mia à 49€ l'unité. Pour la livraison, quel est votre numéro de téléphone ?` :
          `Perfect! ${qty} Mia belt${qty > 1 ? 's' : ''} at €49 each. For delivery, what's your phone number?`;
      }
      
      return language === 'fr' ? 
        "Combien de ceintures Mia souhaitez-vous ? Vous pouvez dire 'une', 'deux', 'trois' ou 'quatre'." :
        "How many Mia belts would you like? You can say 'one', 'two', 'three' or 'four'.";
    }

    if (orderData.step === 'phone') {
      const phoneMatch = input.match(/(\d{8,})/);
      if (phoneMatch) {
        setOrderData(prev => ({ ...prev, phone: phoneMatch[1], step: 'name' }));
        return language === 'fr' ? 
          `Merci ! J'ai noté le ${phoneMatch[1]}. Maintenant, quel est votre nom complet (prénom et nom) ?` :
          `Thank you! I've noted ${phoneMatch[1]}. Now, what's your full name (first and last name)?`;
      }
      return language === 'fr' ? 
        "Je n'ai pas bien saisi votre numéro. Pouvez-vous me donner votre numéro de téléphone pour la livraison ?" :
        "I didn't catch your number properly. Can you give me your phone number for delivery?";
    }

    if (orderData.step === 'name') {
      if (input.trim().split(' ').length >= 2) {
        setOrderData(prev => ({ ...prev, fullName: userInput, step: 'address' }));
        return language === 'fr' ? 
          `Enchanté ${userInput} ! Quelle est votre adresse de livraison complète ?` :
          `Nice to meet you ${userInput}! What's your complete delivery address?`;
      }
      return language === 'fr' ? 
        "Pouvez-vous me donner votre prénom ET votre nom de famille ?" :
        "Can you give me your first AND last name?";
    }

    if (orderData.step === 'address') {
      if (input.length > 10) {
        setOrderData(prev => ({ ...prev, address: userInput, step: 'payment' }));
        return language === 'fr' ? 
          `✅ Parfait ! Récapitulatif de votre commande :\n\n• ${orderData.quantity} ceinture${orderData.quantity > 1 ? 's' : ''} Mia : ${orderData.quantity * 49}€\n• Livraison : Gratuite\n• Total : ${orderData.quantity * 49}€\n\nComment souhaitez-vous payer ? 💳 Carte bancaire, 📱 Mobile Money ou 🚚 Paiement à la livraison ?` :
          `✅ Perfect! Order summary:\n\n• ${orderData.quantity} Mia belt${orderData.quantity > 1 ? 's' : ''}: €${orderData.quantity * 49}\n• Delivery: Free\n• Total: €${orderData.quantity * 49}\n\nHow would you like to pay? 💳 Credit card, 📱 Mobile Money or 🚚 Cash on delivery?`;
      }
      return language === 'fr' ? 
        "Pouvez-vous me donner une adresse plus complète avec votre quartier/ville ?" :
        "Can you give me a more complete address with your neighborhood/city?";
    }

    if (orderData.step === 'payment') {
      if (input.includes('carte') || input.includes('bancaire') || input.includes('cb') || input.includes('card') || input.includes('credit')) {
        setOrderData(prev => ({ ...prev, paymentMethod: 'Carte bancaire', step: 'completed' }));
        return language === 'fr' ? 
          `🎉 Excellente nouvelle ! Votre commande est confirmée !\n\n📋 **RÉCAPITULATIF FINAL**\n• Produit : ${orderData.quantity} Mia à 49€\n• Client : ${orderData.fullName}\n• Téléphone : ${orderData.phone}\n• Livraison : ${orderData.address}\n• Paiement : Carte bancaire\n• **Total : ${orderData.quantity * 49}€**\n\nVous recevrez un email de confirmation et votre Mia sera livrée sous 48-72h ! Merci de faire confiance à Amani 💕` :
          `🎉 Excellent news! Your order is confirmed!\n\n📋 **FINAL SUMMARY**\n• Product: ${orderData.quantity} Mia at €49\n• Customer: ${orderData.fullName}\n• Phone: ${orderData.phone}\n• Delivery: ${orderData.address}\n• Payment: Credit card\n• **Total: €${orderData.quantity * 49}**\n\nYou'll receive a confirmation email and your Mia will be delivered within 48-72h! Thank you for trusting Amani 💕`;
      }
      if (input.includes('mobile') || input.includes('money') || input.includes('orange') || input.includes('wave')) {
        setOrderData(prev => ({ ...prev, paymentMethod: 'Mobile Money', step: 'completed' }));
        return language === 'fr' ? 
          `🎉 Parfait ! Commande confirmée avec Mobile Money !\n\n📋 **RÉCAPITULATIF FINAL**\n• ${orderData.quantity} Mia × 49€ = ${orderData.quantity * 49}€\n• Livraison gratuite\n• Paiement : Mobile Money\n\nVous recevrez les instructions de paiement par SMS au ${orderData.phone}. Livraison sous 48-72h ! 🚚` :
          `🎉 Perfect! Order confirmed with Mobile Money!\n\n📋 **FINAL SUMMARY**\n• ${orderData.quantity} Mia × €49 = €${orderData.quantity * 49}\n• Free delivery\n• Payment: Mobile Money\n\nYou'll receive payment instructions by SMS at ${orderData.phone}. Delivery within 48-72h! 🚚`;
      }
      if (input.includes('livraison') || input.includes('cash') || input.includes('espèce') || input.includes('delivery')) {
        setOrderData(prev => ({ ...prev, paymentMethod: 'Paiement à la livraison', step: 'completed' }));
        return language === 'fr' ? 
          `🎉 Commande validée ! Paiement à la réception !\n\n📋 **RÉCAPITULATIF**\n• ${orderData.quantity} Mia : ${orderData.quantity * 49}€\n• Paiement : À la livraison\n• Livraison : ${orderData.address}\n\nPréparez ${orderData.quantity * 49}€ en espèces. Notre livreur vous contactera au ${orderData.phone} ! 📞✨` :
          `🎉 Order validated! Cash on delivery!\n\n📋 **SUMMARY**\n• ${orderData.quantity} Mia: €${orderData.quantity * 49}\n• Payment: On delivery\n• Delivery: ${orderData.address}\n\nPrepare €${orderData.quantity * 49} in cash. Our delivery driver will contact you at ${orderData.phone}! 📞✨`;
      }
      return language === 'fr' ? 
        "Choisissez votre mode de paiement : 💳 Carte bancaire, 📱 Mobile Money ou 🚚 Paiement à la livraison ?" :
        "Choose your payment method: 💳 Credit card, 📱 Mobile Money or 🚚 Cash on delivery?";
    }

    // 🔥 RÉPONSES EXPERTES SUR MIA ET AMANI (TRADUITES)
    if (input.includes('bonjour') || input.includes('salut') || input.includes('hello') || input.includes('hi')) {
      return addFollowUpQuestion(t('annaGreeting'));
    }

    if (input.includes('prix') || input.includes('coût') || input.includes('tarif') || input.includes('combien') || input.includes('price') || input.includes('cost') || input.includes('much')) {
      return addFollowUpQuestion(t('annaPrice'));
    }

    if (input.includes('fonctionne') || input.includes('marche') || input.includes('efficace') || input.includes('soulage') || input.includes('work') || input.includes('effective') || input.includes('relief')) {
      return addFollowUpQuestion(t('annaHowItWorks'));
    }

    if (input.includes('autonomie') || input.includes('batterie') || input.includes('durée') || input.includes('temps') || input.includes('battery') || input.includes('duration') || input.includes('time')) {
      return addFollowUpQuestion(t('annaBattery'));
    }

    if (input.includes('acheter') || input.includes('commander') || input.includes('commande') || input.includes('prendre') || input.includes('oui') || input.includes('buy') || input.includes('order') || input.includes('purchase') || input.includes('yes')) {
      setOrderData(prev => ({ ...prev, step: 'quantity' }));
      return t('annaQuantityQuestion');
    }

    if (input.includes('livraison') || input.includes('expédition') || input.includes('délai') || input.includes('delivery') || input.includes('shipping')) {
      return addFollowUpQuestion(t('annaDelivery'));
    }

    if (input.includes('garantie') || input.includes('retour') || input.includes('remboursement') || input.includes('warranty') || input.includes('return') || input.includes('refund')) {
      return addFollowUpQuestion(t('annaWarranty'));
    }

    if (input.includes('avis') || input.includes('témoignage') || input.includes('test') || input.includes('review') || input.includes('testimonial')) {
      return addFollowUpQuestion(t('annaReviews'));
    }

    if (input.includes('risque') || input.includes('danger') || input.includes('sécurité') || input.includes('risk') || input.includes('danger') || input.includes('safety')) {
      return addFollowUpQuestion(t('annaSafety'));
    }

    if (input.includes('douleur') || input.includes('règles') || input.includes('menstruel') || input.includes('pain') || input.includes('period') || input.includes('menstrual')) {
      return addFollowUpQuestion(t('annaPain'));
    }

    if (input.includes('amani') || input.includes('marque') || input.includes('brand') || input.includes('company')) {
      return addFollowUpQuestion(t('annaAmani'));
    }

    // ✅ RÉPONSE PAR DÉFAUT - REDIRECTION VERS AMANI (TRADUITE)
    return t('annaDefaultResponse');
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

  // ✅ FONCTION RESET CHAT TRADUITE
  const handleResetChat = () => {
    setMessages([
      {
        id: '1',
        type: 'bot',
        content: t('annaWelcome'),
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
              <div className="font-semibold">{t('chatAnnaTitle')}</div>
              <div className="text-xs opacity-90 flex items-center">
                <div className="w-2 h-2 bg-green-300 rounded-full mr-1 animate-pulse"></div>
                {t('chatOnlineSpecialist')}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={handleResetChat} className="text-white hover:bg-white/20" title={t('chatResetConversation')}>
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
              placeholder={t('chatMiaQuestions')}
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

  // ✅ VERSION DESKTOP
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
              <div className="font-semibold">{t('chatAnnaTitle')}</div>
              <div className="text-xs opacity-90 flex items-center">
                <div className="w-2 h-2 bg-green-300 rounded-full mr-1 animate-pulse"></div>
                {t('chatOnlineSpecialist')}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{t('chatDemo')}</span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleResetChat}
              className="text-white hover:bg-white/20"
              title={t('chatResetConversation')}
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

        {/* Input */}
        <div className="p-4 border-t bg-gray-50">
          <div className="flex items-center space-x-3 bg-white rounded-full p-2 border-2 border-gray-200">
            <div className="flex-1">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t('chatMiaQuestions')}
                className="w-full px-3 py-2 bg-transparent border-0 outline-none resize-none"
                style={{ outline: 'none', boxShadow: 'none' }}
              />
            </div>
            <Button 
              size="icon" 
              variant="ghost"
              className="text-gray-400 hover:text-gray-600 p-2"
              title={t('chatVoiceMessage')}
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