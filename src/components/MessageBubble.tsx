
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot, User } from 'lucide-react';

type MessageType = 'user' | 'bot';

interface MessageBubbleProps {
  type: MessageType;
  content: string;
  timestamp?: string;
  isTyping?: boolean;
  productRecommendation?: {
    id: string;
    name: string;
    price: string;
    image: string;
  };
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  type,
  content,
  timestamp,
  isTyping = false,
  productRecommendation
}) => {
  return (
    <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'} w-full mb-4 message-bubble-in`}>
      <div className="flex max-w-[80%]">
        {type === 'bot' && (
          <div className="mr-3 flex-shrink-0">
            <Avatar className="h-8 w-8 border border-border">
              <AvatarImage src="/placeholder.svg" alt="ChatSeller AI" />
              <AvatarFallback className="bg-primary/10 text-primary">
                <Bot className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        )}
        
        <div className="flex flex-col">
          <div
            className={`px-4 py-3 rounded-xl ${
              type === 'user'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            {isTyping ? (
              <div className="loading-dots py-1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <div className="text-sm whitespace-pre-wrap">{content}</div>
            )}
            
            {productRecommendation && (
              <div className="mt-3 p-3 bg-white/80 backdrop-blur-sm rounded-md border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-muted/50 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={productRecommendation.image || '/placeholder.svg'}
                      alt={productRecommendation.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium truncate">{productRecommendation.name}</h4>
                    <p className="text-sm text-primary font-semibold">{productRecommendation.price}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {timestamp && (
            <span className="text-xs text-muted-foreground mt-1 mx-1">
              {timestamp}
            </span>
          )}
        </div>
        
        {type === 'user' && (
          <div className="ml-3 flex-shrink-0">
            <Avatar className="h-8 w-8 border border-border">
              <AvatarImage src="/placeholder.svg" alt="You" />
              <AvatarFallback className="bg-primary/10 text-primary">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
