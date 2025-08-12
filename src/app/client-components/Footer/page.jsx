import React from 'react';
import styles from '@/app/client-components/Footer/Footer.module.css';

// Importation d'ic\u00f4nes Lucide React pour les r\u00e9seaux sociaux
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

// Composant de pied de page personnalis\u00e9 pour un projet d'\u00e9glise
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoAndSlogan}>
          <div className={styles.logo}>
            {/* \u00c0 personnaliser avec le logo de l'\u00e9glise */}
            <h2 className={styles.brandName}>SACERDOCE ROYAL</h2>
            <p className={styles.slogan}>Slogan de l'Eglise</p>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linkGroup}>
            <p className={styles.linkTitle}>A propos</p>
            <a href="#" className={styles.link}>Qui sommes-nous ?</a>
            <a href="#" className={styles.link}>Nos valeurs</a>
            <a href="#" className={styles.link}>Témoignages</a>
            <a href="#" className={styles.link}>Contact</a>
          </div>
          <div className={styles.linkGroup}>
            <p className={styles.linkTitle}>Services</p>
            <a href="#" className={styles.link}>Offices religieux</a>
            <a href="#" className={styles.link}>Groupes de jeunesse</a>
            <a href="#" className={styles.link}>Études bibliques</a>
            <a href="#" className={styles.link}>Dons</a>
          </div>
          <div className={styles.linkGroup}>
            <p className={styles.linkTitle}>Médias</p>
            <a href="#" className={styles.link}>Prédications</a>
            <a href="#" className={styles.link}>Actualités</a>
            <a href="#" className={styles.link}>Événements</a>
            <a href="#" className={styles.link}>Galerie</a>
          </div>
          <div className={styles.linkGroup}>
            <p className={styles.linkTitle}>Plus</p>
            <a href="#" className={styles.link}>Adhérer</a>
            <a href="#" className={styles.link}>Bénévolat</a>
            <a href="#" className={styles.link}>Confidentialité</a>
            <a href="#" className={styles.link}>Conditions</a>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.bottomSection}>
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
          <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
          <a href="#" aria-label="YouTube"><Youtube size={24} /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} SACERDOCE ROYAL. Tous droits réserves.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
