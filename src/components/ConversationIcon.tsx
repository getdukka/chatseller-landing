// src/components/ConversationIcon.tsx
import React from 'react';

interface ConversationIconProps {
  className?: string;
}

const ConversationIcon: React.FC<ConversationIconProps> = ({ className = "w-6 h-6" }) => (
  <svg 
    className={className} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Première bulle de chat (plus grande, bleue foncée) */}
    <path 
      d="M15 25 C15 15, 25 10, 40 10 C55 10, 65 15, 65 25 C65 35, 65 45, 65 55 C65 65, 55 70, 40 70 C35 70, 30 69, 25 67 L15 75 L20 65 C17 60, 15 50, 15 40 Z" 
      fill="#2563eb"
      opacity="0.9"
    />
    
    {/* Deuxième bulle de chat (plus petite, bleue claire) */}
    <path 
      d="M40 15 C40 10, 50 5, 65 5 C80 5, 90 10, 90 20 C90 30, 90 35, 90 45 C90 55, 80 60, 65 60 C60 60, 55 59, 50 57 L40 65 L45 55 C42 50, 40 40, 40 30 Z" 
      fill="#3b82f6"
      opacity="0.8"
    />
    
    {/* Points de conversation dans la première bulle */}
    <circle cx="35" cy="35" r="2.5" fill="white" opacity="0.9"/>
    <circle cx="45" cy="35" r="2.5" fill="white" opacity="0.7"/>
    <circle cx="55" cy="35" r="2.5" fill="white" opacity="0.5"/>
  </svg>
);

export default ConversationIcon;