// Fichier: client-components/HeroSection/HeroSection.js
import React from 'react';
import styles from '@/app/client-components/HeroSection/HeroSection.module.css';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className={styles.heroSection} style={{ backgroundImage: "url('https://placehold.co/1920x1080/000000/ffffff?text=Eglise')" }}>
      {/* Superposition sombre sur l'image pour am\u00e9liorer la lisibilit\u00e9 */}
      <div className={styles.overlay}></div>
      
      {/* Contenu principal de la section h\u00e9ro */}
      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          {/* Bloc de texte principal et boutons */}
          <div className={styles.textBlock}>
            <p className={styles.title}>
              Nous sommes <br /> Le Sacerdoce Royal
            </p>
            <p className={styles.subtitle}>
              Nous vous invitons à nous joindre à nous les mardis, vendredis et dimanches.
            </p>
            <div className={styles.buttonsContainer}>
              <button className={styles.buttonWhiteBorder}>
                VISITER
              </button>
              <button className={styles.buttonWhiteBorder}>
                PARTICIPER
              </button>
            </div>
          </div>
          
          {/* Bloc vid\u00e9o avec aper\u00e7u et bouton de lecture */}
          <div className={styles.videoBlock}>
            <span className={styles.videoLabel}>REGARDER LE DERNIER SERMON</span>
            <div className={styles.videoPlayer}>
              <img src="https://placehold.co/600x400/805ad5/ffffff?text=Sermon+Precedent" alt="Aper\u00e7u du sermon d'\u00e9t\u00e9" className={styles.videoThumbnail}/>
              <div className={styles.playOverlay}>
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;