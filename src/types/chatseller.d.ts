// src/types/chatseller.d.ts
// Déclarations TypeScript pour ChatSeller Widget

interface ChatSellerAgentConfig {
  id: string;
  name: string;
  title: string;
  welcomeMessage: string;
  fallbackMessage: string;
  personality: string;
}

interface ChatSellerConfig {
  shopId: string;
  agentId: string;
  apiUrl: string;
  buttonText: string;
  primaryColor: string;
  position: string;
  theme: string;
  language: string;
  borderRadius: string;
  autoDetectProduct: boolean;
  debug: boolean;
  agentConfig: ChatSellerAgentConfig;
}

interface ChatSellerSDK {
  init: (config: ChatSellerConfig) => void;
  isReady?: boolean;
  refreshProduct?: () => void;
}

// Étendre l'interface Window globale
declare global {
  interface Window {
    ChatSellerConfig: ChatSellerConfig;
    ChatSeller: ChatSellerSDK;
    ChatSellerInitialized?: boolean;
    ChatSellerLoaded?: boolean;
  }
}

export {};