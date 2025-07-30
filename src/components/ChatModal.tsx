// src/components/ChatModal.tsx
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
      content: "Bonjour ! Je suis Habib, Conseiller Commerciale chez ChatSeller. Je peux vous expliquer comment notre solution peut transformer vos visiteurs en acheteurs. Que souhaitez-vous savoir ? 😊",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
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
    setInputValue('');
    setIsTyping(true);

    // Simuler une réponse de l'IA
    setTimeout(() => {
      setIsTyping(false);
      
      let botResponse: Message;
      const input = inputValue.toLowerCase();
      
      if (input.includes('prix') || input.includes('tarif') || input.includes('coût')) {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: "Nos tarifs sont très abordables : Plan Starter à 14€/mois et Plan Pro à 29€/mois. Vous bénéficiez de 7 jours d'essai gratuit sans engagement ! Voulez-vous que je vous explique les fonctionnalités incluses ?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else if (input.includes('comment') || input.includes('marche') || input.includes('fonctionne')) {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: "ChatSeller s'installe en 2 minutes sur votre site ! Votre Vendeur IA répond aux questions de vos clients 24h/24, les conseille et collecte leurs commandes directement dans la conversation. Résultat : +147% de conversion en moyenne ! Souhaitez-vous voir une démo ?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else if (input.includes('installation') || input.includes('installer') || input.includes('intégrer')) {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: "L'installation est ultra-simple ! 1) Créez votre compte Chatseller 2) Configurez votre Vendeur IA 3) Copiez un petit code sur votre site. C'est tout ! Chatseller est compatible avec Shopify, WooCommerce, Wix et sites personnalisés. Voulez-vous commencer votre essai gratuit ?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else if (input.includes('démo') || input.includes('demo') || input.includes('test') || input.includes('essai')) {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: "Parfait ! Vous pouvez commencer votre essai gratuit de 7 jours dès maintenant, sans carte bancaire. Cliquez ici pour créer votre compte : https://dashboard.chatseller.app/register 🚀",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: "Je peux vous parler de nos tarifs, vous expliquer comment ça marche, ou vous guider pour l'installation. Je peux aussi vous donner accès à notre essai gratuit de 7 jours ! Que préférez-vous ?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      }
      
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
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
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">M</span>
            </div>
            <div>
              <div className="font-semibold">Habib - Conseiller ChatSeller</div>
              <div className="text-xs opacity-90">Conseiller Chatseller</div>
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
            <Button onClick={handleSendMessage} size="icon" className="rounded-full">
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
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">H</span>
            </div>
            {!isMinimized && (
              <div>
                <div className="font-semibold">Habib - Conseiller ChatSeller</div>
                <div className="text-xs opacity-90">Conseiller Chatseller</div>
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
                  placeholder="Tapez votre message..."
                  className="flex-1 rounded-full"
                />
                <Button onClick={handleSendMessage} size="icon" className="rounded-full">
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
      <div className="flex max-w-[80%] items-end space-x-2">
        {type === 'bot' && (
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mb-1">
            H
          </div>
        )}
        <div>
          <div
            className={`px-4 py-2 rounded-2xl ${
              type === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            <div className="text-sm whitespace-pre-wrap">{content}</div>
          </div>
          <div className="text-xs text-gray-500 mt-1 px-2">{timestamp}</div>
        </div>
        {type === 'user' && (
          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold mb-1">
            V
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
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
          H
        </div>
        <div className="bg-gray-100 px-4 py-2 rounded-2xl">
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