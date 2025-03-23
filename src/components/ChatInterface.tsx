
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Plus, Paperclip, Maximize2, Minimize2 } from 'lucide-react';
import MessageBubble from './MessageBubble';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

// Define message types
interface BaseMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: string;
}

interface BotMessage extends BaseMessage {
  type: 'bot';
  productRecommendation?: {
    id: string;
    name: string;
    price: string;
    image: string;
  };
}

interface UserMessage extends BaseMessage {
  type: 'user';
}

type Message = BotMessage | UserMessage;

// Example product data
const exampleProducts = [
  {
    id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    price: '$249.99',
    image: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Track your health metrics, workouts, and sleep with this advanced fitness watch.',
    price: '$179.99',
    image: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof portable speaker with 360° sound and 20-hour battery life.',
    price: '$89.99',
    image: '/placeholder.svg'
  }
];

const ChatInterface = () => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize messages with welcome message based on current language
  useEffect(() => {
    setMessages([
      {
        id: '1',
        type: 'bot',
        content: t('welcome'),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, [language, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage: UserMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      
      let botResponse: BotMessage;
      
      // Demo responses based on user input
      if (inputValue.toLowerCase().includes('headphone') || 
          inputValue.toLowerCase().includes('écouteur') || 
          inputValue.toLowerCase().includes('casque')) {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: t('headphoneResponse'),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          productRecommendation: exampleProducts[0]
        };
      } else if (inputValue.toLowerCase().includes('watch') || 
                inputValue.toLowerCase().includes('fitness') || 
                inputValue.toLowerCase().includes('montre')) {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: t('watchResponse'),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          productRecommendation: exampleProducts[1]
        };
      } else if (inputValue.toLowerCase().includes('speaker') || 
                inputValue.toLowerCase().includes('haut-parleur') || 
                inputValue.toLowerCase().includes('enceinte')) {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: t('speakerResponse'),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          productRecommendation: exampleProducts[2]
        };
      } else {
        botResponse = {
          id: (Date.now() + 100).toString(),
          type: 'bot',
          content: t('defaultResponse'),
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

  return (
    <div 
      className={`bg-white rounded-2xl border border-border shadow-lg overflow-hidden transition-all duration-300 ${
        isExpanded 
          ? 'fixed bottom-0 right-0 top-0 z-50 w-full md:w-[420px] m-0 md:m-6 md:top-auto' 
          : 'w-full h-[600px]'
      }`}
    >
      {/* Chat header */}
      <div className="px-4 py-3 border-b flex items-center justify-between bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
            <div className="w-3 h-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-sm">{t('chatAssistant')}</h3>
            <p className="text-xs text-muted-foreground">{t('online')}</p>
          </div>
        </div>
        <div className="flex items-center">
          <LanguageToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 ml-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Messages container */}
      <div className="p-4 overflow-y-auto h-[calc(100%-120px)]">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            type={message.type}
            content={message.content}
            timestamp={message.timestamp}
            productRecommendation={message.type === 'bot' ? message.productRecommendation : undefined}
          />
        ))}
        
        {isTyping && (
          <MessageBubble
            type="bot"
            content=""
            isTyping={true}
          />
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Chat input */}
      <div className="px-4 py-3 border-t bg-white">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="h-8 w-8 mr-1">
            <Plus className="h-4 w-4 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 mr-2">
            <Paperclip className="h-4 w-4 text-muted-foreground" />
          </Button>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t('typeMessage')}
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full bg-secondary"
          />
          <Button 
            onClick={handleSendMessage} 
            size="icon" 
            className="h-8 w-8 ml-2"
            disabled={inputValue.trim() === ''}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
