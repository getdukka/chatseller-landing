// src/components/Flags.tsx
import React from 'react';

export const FrenchFlag: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" fill="#002395" rx="2"/>
    <rect x="8" width="8" height="16" fill="#FFFFFF"/>
    <rect x="16" width="8" height="16" fill="#ED2939"/>
  </svg>
);

export const UKFlag: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" fill="#012169" rx="2"/>
    <path d="M0 0 L24 16 M24 0 L0 16" stroke="#FFFFFF" strokeWidth="2"/>
    <path d="M0 0 L24 16 M24 0 L0 16" stroke="#C8102E" strokeWidth="1"/>
    <path d="M12 0 V16 M0 8 H24" stroke="#FFFFFF" strokeWidth="3"/>
    <path d="M12 0 V16 M0 8 H24" stroke="#C8102E" strokeWidth="2"/>
  </svg>
);