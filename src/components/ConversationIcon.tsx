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
    {/* Première bulle de chat (plus grande, rose vif) */}
    <path 
      d="M12 22 C12 12, 22 5, 42 5 C62 5, 72 12, 72 22 C72 32, 72 42, 72 52 C72 62, 62 69, 42 69 C36 69, 30 68, 24 66 L12 76 L18 66 C14 61, 12 52, 12 42 Z" 
      fill="#ec4899"
      stroke="#be185d"
      strokeWidth="1"
    />
    
    {/* Deuxième bulle de chat (plus petite, violet vif) */}
    <path 
      d="M35 12 C35 7, 45 2, 65 2 C85 2, 95 7, 95 17 C95 27, 95 32, 95 42 C95 52, 85 57, 65 57 C59 57, 53 56, 47 54 L35 62 L41 54 C37 49, 35 42, 35 32 Z" 
      fill="#a855f7"
      stroke="#7c3aed"
      strokeWidth="1"
    />
    
    {/* Points de conversation plus visibles et plus gros */}
    <circle cx="32" cy="32" r="3.5" fill="white" stroke="#be185d" strokeWidth="0.5"/>
    <circle cx="42" cy="32" r="3.5" fill="white" stroke="#be185d" strokeWidth="0.5"/>
    <circle cx="52" cy="32" r="3.5" fill="white" stroke="#be185d" strokeWidth="0.5"/>
    
    {/* Point dans la deuxième bulle pour équilibrer */}
    <circle cx="65" cy="27" r="3" fill="white" stroke="#7c3aed" strokeWidth="0.5"/>
    <circle cx="75" cy="32" r="2.5" fill="white" stroke="#7c3aed" strokeWidth="0.5"/>
  </svg>
);

export default ConversationIcon;