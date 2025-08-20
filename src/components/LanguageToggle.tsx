// src/components/LanguageToggle.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { FrenchFlag, UKFlag } from './Flags';
import { useIsMobile } from '@/hooks/use-mobile';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className={`rounded-full flex items-center hover:bg-gray-100 transition-colors ${isMobile ? 'px-2' : 'px-3'}`}
    >
      {language === 'fr' ? (
        <>
          <UKFlag className="w-4 h-4 mr-1.5" />
          <span className="text-sm font-medium">EN</span>
        </>
      ) : (
        <>
          <FrenchFlag className="w-4 h-4 mr-1.5" />
          <span className="text-sm font-medium">FR</span>
        </>
      )}
    </Button>
  );
};

export default LanguageToggle;