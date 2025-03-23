
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className="h-8 w-8 rounded-full"
    >
      {t(language === 'en' ? 'switchToFrench' : 'switchToEnglish')}
    </Button>
  );
};

export default LanguageToggle;
