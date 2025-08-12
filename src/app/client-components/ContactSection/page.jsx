"use client"; // Composant client pour les interactions du formulaire

import React from 'react';
import styles from '@/app/client-components/ContactSection/ContactSection.module.css';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactCard}>
        {/* Partie gauche du formulaire */}
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <div className={styles.diamond} />
            <h2 className={styles.formTitle}>Contactez-nous</h2>
            <p className={styles.formSubtitle}>
              N'hésitez pas à nous contacter à tout moment. Nous vous répondrons
              dans les plus brefs délais !
            </p>
          </div>
          <form className={styles.form}>
            <input type="text" placeholder="Nom" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
            <textarea
              placeholder="Message"
              className={styles.textarea}
              rows="4"
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              ENVOYER
            </button>
          </form>
        </div>

        {/* Partie droite des informations de contact */}
        <div className={styles.infoContainer}>
          <div className={styles.infoHeader}>
            <div className={styles.yellowSquare} />
            <div className={styles.yellowLine} />
          </div>
          <h3 className={styles.infoTitle}>Info</h3>
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <Mail className={styles.infoIcon} size={24} />
              <p className={styles.infoText}>contact@sreglise.com</p>
            </div>
            <div className={styles.infoItem}>
              <Phone className={styles.infoIcon} size={24} />
              <p className={styles.infoText}>+237 6 89 12 34 56</p>
            </div>
            <div className={styles.infoItem}>
              <MapPin className={styles.infoIcon} size={24} />
              <p className={styles.infoText}>Rue New Deido</p>
            </div>
            <div className={styles.infoItem}>
              <Clock className={styles.infoIcon} size={24} />
              <p className={styles.infoText}>Mar : 17:00 - 20:00</p> <br/>
              <p className={styles.infoText}>ven : 17:00 - 20:00</p> <br/>
              <p className={styles.infoText}>Dim : 08:00 - 12:00</p>
            </div>
          </div>
          <div className={styles.infoFooter}>
            <div className={styles.yellowSquareSmall} />
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
