// src/components/GTMTracking.tsx
import React from 'react';

const GTMTracking = () => {
  React.useEffect(() => {
    // Initialiser le dataLayer si pas déjà fait
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      
      // Configuration GTM pour ChatSeller
      (window as any).dataLayer.push({
        'event': 'gtm_init',
        'site_name': 'ChatSeller',
        'site_version': 'v2.0_beauty_focus',
        'user_language': document.documentElement.lang || 'fr',
        'page_type': 'landing_page',
        'target_audience': 'beauty_brands',
        'ab_test_active': true
      });

      // Fonction helper pour tracking personnalisé
      (window as any).trackChatseller = function(event: string, data: any = {}) {
        (window as any).dataLayer.push({
          event: event,
          timestamp: new Date().toISOString(),
          ...data
        });
      };

      // Tracking automatique des clics sur les CTAs
      const trackCTAClicks = () => {
        document.addEventListener('click', (event) => {
          const target = event.target as HTMLElement;
          const button = target.closest('button, a');
          
          if (button && button.textContent) {
            const buttonText = button.textContent.trim();
            const href = button.getAttribute('href');
            
            // Identifier les CTAs principaux
            const primaryCTAs = [
              'Essayez gratuitement 14 jours',
              'Try free for 14 days',
              'Créer mon Vendeur IA',
              'Create my AI Seller'
            ];
            
            const secondaryCTAs = [
              'Voir les résultats clients',
              'See client results',
              'Voir une démo',
              'See a demo'
            ];

            if (primaryCTAs.some(cta => buttonText.includes(cta))) {
              (window as any).dataLayer.push({
                event: 'cta_primary_click',
                cta_text: buttonText,
                cta_destination: href || 'unknown',
                element_position: getElementPosition(button),
                timestamp: Date.now()
              });
            } else if (secondaryCTAs.some(cta => buttonText.includes(cta))) {
              (window as any).dataLayer.push({
                event: 'cta_secondary_click',
                cta_text: buttonText,
                cta_destination: href || 'scroll_action',
                element_position: getElementPosition(button)
              });
            }
          }
        });
      };

      // Tracking des interactions avec les formulaires
      const trackFormInteractions = () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
          // Début de saisie
          form.addEventListener('focusin', (event) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
              (window as any).dataLayer.push({
                event: 'form_start',
                form_name: form.getAttribute('name') || 'unnamed_form',
                field_name: target.getAttribute('name') || 'unnamed_field'
              });
            }
          });

          // Soumission
          form.addEventListener('submit', (event) => {
            (window as any).dataLayer.push({
              event: 'form_submit',
              form_name: form.getAttribute('name') || 'unnamed_form'
            });
          });
        });
      };

      // Tracking de l'engagement sur la page
      const trackPageEngagement = () => {
        let maxScroll = 0;
        let timeOnPage = 0;
        let isActive = true;

        // Tracking du scroll
        window.addEventListener('scroll', () => {
          const scrollPercent = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
          );
          
          if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
          }

          // Milestones de scroll
          if (scrollPercent >= 25 && !sessionStorage.getItem('scroll_25')) {
            sessionStorage.setItem('scroll_25', 'true');
            (window as any).dataLayer.push({
              event: 'scroll_milestone',
              scroll_depth: '25%'
            });
          }
          if (scrollPercent >= 50 && !sessionStorage.getItem('scroll_50')) {
            sessionStorage.setItem('scroll_50', 'true');
            (window as any).dataLayer.push({
              event: 'scroll_milestone',
              scroll_depth: '50%'
            });
          }
          if (scrollPercent >= 75 && !sessionStorage.getItem('scroll_75')) {
            sessionStorage.setItem('scroll_75', 'true');
            (window as any).dataLayer.push({
              event: 'scroll_milestone',
              scroll_depth: '75%'
            });
          }
        });

        // Tracking du temps sur la page
        const startTime = Date.now();
        const updateTimeOnPage = () => {
          if (isActive) {
            timeOnPage = Math.round((Date.now() - startTime) / 1000);
          }
        };

        // Activité/inactivité
        document.addEventListener('visibilitychange', () => {
          isActive = !document.hidden;
        });

        // Envoi des métriques d'engagement avant fermeture
        window.addEventListener('beforeunload', () => {
          updateTimeOnPage();
          (window as any).dataLayer.push({
            event: 'page_engagement',
            max_scroll: maxScroll,
            time_on_page: timeOnPage,
            engagement_quality: getEngagementQuality(maxScroll, timeOnPage)
          });
        });

        // Mise à jour périodique
        setInterval(updateTimeOnPage, 10000);
      };

      // Fonction helper pour obtenir la position d'un élément
      function getElementPosition(element: Element): string {
        const rect = element.getBoundingClientRect();
        const sections = ['hero', 'problem', 'solution', 'case-studies', 'how-it-works', 'features', 'pricing', 'faq', 'closing'];
        
        for (const section of sections) {
          const sectionElement = document.getElementById(section) || document.querySelector(`[data-section="${section}"]`);
          if (sectionElement) {
            const sectionRect = sectionElement.getBoundingClientRect();
            if (rect.top >= sectionRect.top && rect.bottom <= sectionRect.bottom) {
              return section;
            }
          }
        }
        
        return 'unknown';
      }

      // Fonction pour évaluer la qualité de l'engagement
      function getEngagementQuality(scrollPercent: number, timeOnPage: number): 'high' | 'medium' | 'low' {
        if (scrollPercent >= 75 && timeOnPage >= 120) return 'high';
        if (scrollPercent >= 50 && timeOnPage >= 60) return 'medium';
        return 'low';
      }

      // Initialiser tous les trackings
      setTimeout(() => {
        trackCTAClicks();
        trackFormInteractions();
        trackPageEngagement();
      }, 1000);

      // Tracking spécifique A/B test
      const trackABTest = () => {
        const variant = localStorage.getItem('ab_hero_variant') || 'A';
        (window as any).dataLayer.push({
          event: 'ab_test_variant',
          test_name: 'hero_headline',
          variant: variant,
          timestamp: Date.now()
        });
      };

      trackABTest();
    }
  }, []);

  return null; // Ce composant ne rend rien visuellement
};

export default GTMTracking;