// src/components/AnalyticsProvider.tsx 
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// 🔧 CONFIGURATION DES IDS (à remplacer par les vrais)
const ANALYTICS_CONFIG = {
  GA4_ID: 'G-XXXXXXXXXX',        // À remplacer par votre ID GA4
  META_PIXEL_ID: 'XXXXXXXXXXXX', // À remplacer par votre Pixel ID Meta
  LINKEDIN_PARTNER_ID: 'XXXXXX'  // À remplacer par votre Partner ID LinkedIn
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  
  // 🎯 TRACKING D'ÉVÉNEMENTS GA4
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: 'engagement',
        event_label: 'ChatSeller',
        ...parameters
      });
    }
  };

  // 🎯 TRACKING META PIXEL
  const trackMetaEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, parameters);
    }
  };

  // 🎯 TRACKING LINKEDIN
  const trackLinkedInEvent = (conversionId: number) => {
    if (typeof window !== 'undefined' && (window as any).lintrk) {
      (window as any).lintrk('track', { conversion_id: conversionId });
    }
  };

  // 🔗 FONCTIONS D'ÉVÉNEMENTS BUSINESS
  useEffect(() => {
    // Exposition des fonctions de tracking globalement
    (window as any).trackChatSellerEvent = {
      // 🎯 ÉVÉNEMENTS CTA
      heroCtaClick: () => {
        trackEvent('cta_click', { 
          cta_location: 'hero',
          cta_text: 'Créer mon Vendeur IA'
        });
        trackMetaEvent('Lead');
        trackLinkedInEvent(1); // ID conversion LinkedIn à définir
      },
      
      demoCtaClick: () => {
        trackEvent('cta_click', { 
          cta_location: 'demo',
          cta_text: 'Voir en action'
        });
        trackMetaEvent('ViewContent', { content_type: 'demo' });
      },
      
      // 🎯 ÉVÉNEMENTS CHAT
      chatModalOpen: () => {
        trackEvent('chat_opened', { engagement_type: 'demo' });
        trackMetaEvent('ViewContent', { content_type: 'chat_demo' });
      },
      
      chatMessageSent: () => {
        trackEvent('chat_message_sent', { engagement_type: 'demo' });
      },
      
      // 🎯 ÉVÉNEMENTS NAVIGATION
      pageView: (pageName: string) => {
        trackEvent('page_view', { page_name: pageName });
      },
      
      // 🎯 ÉVÉNEMENTS ENGAGEMENT
      scrollDepth: (percentage: number) => {
        if (percentage >= 75) {
          trackEvent('scroll_depth', { 
            scroll_percentage: percentage,
            engagement_level: 'high'
          });
        }
      },
      
      timeOnPage: (seconds: number) => {
        if (seconds >= 30) {
          trackEvent('engagement_time', { 
            time_seconds: seconds,
            engagement_level: seconds >= 120 ? 'high' : 'medium'
          });
        }
      },
      
      // 🎯 ÉVÉNEMENTS CONVERSION
      signupStart: () => {
        trackEvent('sign_up', { method: 'email' });
        trackMetaEvent('CompleteRegistration');
        trackLinkedInEvent(2); // ID conversion signup
      },
      
      trialStart: () => {
        trackEvent('begin_checkout', { 
          currency: 'EUR',
          value: 0,
          item_category: 'trial'
        });
        trackMetaEvent('StartTrial');
      },
      
      // 🎯 ÉVÉNEMENTS ERREUR
      errorOccurred: (errorType: string) => {
        trackEvent('exception', { 
          description: errorType,
          fatal: false
        });
      }
    };
    
    // 📊 TRACKING AUTOMATIQUE DU SCROLL
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if ([25, 50, 75, 90].includes(scrollPercent)) {
          (window as any).trackChatSellerEvent.scrollDepth(scrollPercent);
        }
      }
    };
    
    // ⏱️ TRACKING DU TEMPS PASSÉ
    const startTime = Date.now();
    const trackTimeSpent = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      (window as any).trackChatSellerEvent.timeOnPage(timeSpent);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', trackTimeSpent);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', trackTimeSpent);
    };
  }, []);

  return (
    <>
      <Helmet>
        {/* 📊 GOOGLE ANALYTICS 4 */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA4_ID}`} />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ANALYTICS_CONFIG.GA4_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              content_group1: 'ChatSeller Landing',
              custom_map: {
                'custom_parameter_1': 'user_engagement'
              },
              // 🎯 CONSENTEMENT RGPD
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
            
            // 🎯 ENHANCED E-COMMERCE
            gtag('config', '${ANALYTICS_CONFIG.GA4_ID}', {
              send_page_view: true,
              debug_mode: ${process.env.NODE_ENV === 'development'}
            });
          `}
        </script>
        
        {/* 📘 META PIXEL (FACEBOOK) */}
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            fbq('init', '${ANALYTICS_CONFIG.META_PIXEL_ID}');
            fbq('track', 'PageView');
            
            // 🎯 ÉVÉNEMENTS E-COMMERCE
            fbq('track', 'ViewContent', {
              content_type: 'product',
              content_category: 'AI Software',
              content_name: 'ChatSeller AI Sales Agent'
            });
          `}
        </script>
        
        {/* 💼 LINKEDIN INSIGHT TAG */}
        <script>
          {`
            _linkedin_partner_id = "${ANALYTICS_CONFIG.LINKEDIN_PARTNER_ID}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </script>
        <script>
          {`
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </script>
        
        {/* 🍪 HOTJAR (OPTIONNEL) */}
        <script>
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3926284,hjsv:6}; // ID Hotjar à remplacer
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </script>
      </Helmet>
      
      {/* 📘 META PIXEL NOSCRIPT - En dehors de Helmet */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display: 'none'}}
          src={`https://www.facebook.com/tr?id=${ANALYTICS_CONFIG.META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      
      {/* 💼 LINKEDIN NOSCRIPT - En dehors de Helmet */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display: 'none'}} 
          alt="" 
          src={`https://px.ads.linkedin.com/collect/?pid=${ANALYTICS_CONFIG.LINKEDIN_PARTNER_ID}&fmt=gif`} 
        />
      </noscript>
      
      {children}
    </>
  );
};

// 🎯 HOOK POUR TRACKING FACILE
export const useTracking = () => {
  return {
    trackEvent: (eventName: string, parameters?: Record<string, any>) => {
      if ((window as any).trackChatSellerEvent) {
        (window as any).trackChatSellerEvent[eventName]?.(parameters);
      }
    },
    trackCustom: (eventName: string, parameters?: Record<string, any>) => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, parameters);
      }
    }
  };
};

export default AnalyticsProvider;