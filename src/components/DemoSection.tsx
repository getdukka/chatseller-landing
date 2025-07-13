// src/components/DemoSection.tsx
import React from 'react';
import ChatInterface from './ChatInterface';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const DemoSection = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-6 md:px-12 mx-auto">
        {/* African-inspired pattern decoration */}
        <div className="hidden md:block absolute right-0 w-32 h-64 overflow-hidden opacity-10">
          <div className="w-full h-full bg-primary transform rotate-45 scale-150"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6 relative">
              <span className="absolute inset-0 border-b-2 border-primary -bottom-1 left-0 w-1/2"></span>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t('demoTitle')}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              {t('demoSubtitle')}
            </p>
            <p className="text-muted-foreground mb-8">
              {t('demoTip')}
            </p>
            <Button className="group relative overflow-hidden">
              {t('startTrial')} 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-1000"></span>
            </Button>
          </div>
          
          <div className="flex justify-center relative">
            {/* Visual decoration inspired by West African textile patterns */}
            <div className="absolute -z-10 w-full h-full max-w-md">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full"></div>
              <div className="absolute top-1/3 left-0 w-12 h-12 bg-primary/5 rounded-full"></div>
              <div className="absolute top-2/3 right-0 w-20 h-20 bg-primary/5 rounded-full"></div>
            </div>
            
            <ChatInterface />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
