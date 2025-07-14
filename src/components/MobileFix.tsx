// src/components/MobileFix.tsx
import React, { useEffect } from 'react';

const MobileFix = () => {
  useEffect(() => {
    // Ajouter les styles CSS directement via JavaScript
    const style = document.createElement('style');
    style.textContent = `
      /* Fix global pour empêcher le défilement horizontal */
      html, body {
        overflow-x: hidden !important;
        width: 100% !important;
        max-width: 100vw !important;
        position: relative !important;
      }

      /* Conteneur principal */
      #root {
        overflow-x: hidden !important;
        width: 100% !important;
        max-width: 100vw !important;
      }

      /* Tous les conteneurs */
      .container {
        max-width: 100vw !important;
        overflow-x: hidden !important;
      }

      /* Sections principales */
      section {
        max-width: 100vw !important;
        overflow-x: hidden !important;
      }

      /* Fix mobile spécifique */
      @media (max-width: 768px) {
        * {
          max-width: 100vw !important;
        }
        
        .container {
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
        
        /* Images responsives */
        img {
          max-width: 100% !important;
          height: auto !important;
        }
        
        /* Éléments décoratifs */
        .absolute {
          max-width: 100vw !important;
        }
        
        /* Empêcher débordement texte */
        h1, h2, h3, h4, h5, h6, p, div {
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
        }
        
        /* Boutons */
        button {
          max-width: 100% !important;
        }
        
        /* Formulaires */
        input, textarea, select {
          max-width: 100% !important;
          box-sizing: border-box !important;
          font-size: 16px !important;
        }
      }

      /* Fix pour WebKit (Safari) */
      @supports (-webkit-touch-callout: none) {
        html, body {
          overflow-x: hidden !important;
          width: 100% !important;
        }
      }
    `;
    
    document.head.appendChild(style);
    
    // Fonction pour empêcher le défilement horizontal
    const preventHorizontalScroll = () => {
      if (window.scrollX > 0) {
        window.scrollTo(0, window.scrollY);
      }
    };

    // Fonction pour s'assurer que le viewport est correct
    const fixViewport = () => {
      let viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        viewport = document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
        document.head.appendChild(viewport);
      }
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
    };

    // Appliquer les corrections
    fixViewport();
    
    // Écouter les événements de scroll pour empêcher le défilement horizontal
    window.addEventListener('scroll', preventHorizontalScroll);
    window.addEventListener('touchmove', preventHorizontalScroll);
    
    // Cleanup function
    return () => {
      document.head.removeChild(style);
      window.removeEventListener('scroll', preventHorizontalScroll);
      window.removeEventListener('touchmove', preventHorizontalScroll);
    };
  }, []);

  return null; // Ce composant n'affiche rien
};

export default MobileFix;