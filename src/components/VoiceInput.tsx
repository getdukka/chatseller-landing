
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

interface VoiceInputProps {
  onTranscript: (text: string) => void;
  disabled?: boolean;
}

const VoiceInput: React.FC<VoiceInputProps> = ({ onTranscript, disabled = false }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [recognition, setRecognition] = useState<any>(null);
  const { toast } = useToast();
  const { language, t } = useLanguage();

  useEffect(() => {
    // Check if browser supports SpeechRecognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = false;
    recognitionInstance.interimResults = true;
    recognitionInstance.lang = language === 'en' ? 'en-US' : 'fr-FR';

    recognitionInstance.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');
      
      if (event.results[0].isFinal) {
        onTranscript(transcript);
        setIsListening(false);
      }
    };

    recognitionInstance.onerror = (event: any) => {
      console.error('Speech recognition error', event.error);
      setIsListening(false);
      toast({
        title: t('voiceInputError'),
        description: t('voiceInputErrorDesc'),
        variant: 'destructive',
      });
    };

    recognitionInstance.onend = () => {
      setIsListening(false);
    };

    setRecognition(recognitionInstance);

    return () => {
      if (recognitionInstance) {
        recognitionInstance.stop();
      }
    };
  }, [language, onTranscript, toast, t]);

  useEffect(() => {
    if (recognition) {
      recognition.lang = language === 'en' ? 'en-US' : 'fr-FR';
    }
  }, [language, recognition]);

  const toggleListening = () => {
    if (!isSupported) {
      toast({
        title: t('voiceInputNotSupported'),
        description: t('voiceInputNotSupportedDesc'),
        variant: 'destructive',
      });
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      try {
        recognition.start();
        setIsListening(true);
      } catch (error) {
        console.error('Speech recognition error:', error);
        toast({
          title: t('voiceInputError'),
          description: t('voiceInputErrorDesc'),
          variant: 'destructive',
        });
      }
    }
  };

  if (!isSupported) {
    return null;
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={`h-8 w-8 ${isListening ? 'text-primary animate-pulse' : ''}`}
      onClick={toggleListening}
      disabled={disabled}
      title={isListening ? t('stopListening') : t('startListening')}
    >
      {isListening ? (
        <MicOff className="h-4 w-4" />
      ) : (
        <Mic className="h-4 w-4" />
      )}
    </Button>
  );
};

export default VoiceInput;
