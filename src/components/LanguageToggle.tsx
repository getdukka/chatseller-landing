// src/components/LanguageToggle.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className={`rounded-full flex items-center ${isMobile ? 'px-2' : 'px-3'}`}
    >
      <Globe className="h-4 w-4 mr-1" />
      {t(language === 'en' ? 'switchToFrench' : 'switchToEnglish')}
    </Button>
  );
};

export default LanguageToggle;
