// Fichier: client-components/FeaturedMessages/FeaturedMessages.js
import React from 'react';
import Image from 'next/image';
import styles from './FeaturedMessages.module.css';

const FeaturedMessages = () => {
  // Données de messages fictives pour l'exemple
  const messages = [
    {
      title: "Cette \u00e9glise fait face \u00e0 l'opposition",
      subtitle: "J\u00e9sus a fait face \u00e0 une opposition massive, sommes-nous vraiment ses disciples si nous ne faisons pas face \u00e0 la m\u00eame opposition ? Parce que J\u00e9sus est notre...",
      date: "25 oct. 2024",
      image: "https://placehold.co/600x400/000/fff?text=Message+1",
    },
    {
      title: "Pourquoi le monde est-il ainsi ?",
      subtitle: "Alors que le monde se sent mal \u00e0 l'aise et difficile, nous nous demandons s'il y a des moments o\u00f9 Dieu ressent la m\u00eame chose. Nous vivons peut-\u00eatre dans...",
      date: "20 oct. 2024",
      image: "https://placehold.co/600x400/000/fff?text=Message+2",
    },
    {
      title: "Dieu peut-il gu\u00e9rir ma sant\u00e9 mentale ?",
      subtitle: "Nous aborderons le r\u00f4le que Dieu et votre foi peuvent jouer dans nos esprits, la paix en p\u00e9riode d'incertitude et la puissance contre...",
      date: "5 oct. 2024",
      image: "https://placehold.co/600x400/000/fff?text=Message+3",
    },
    {
      title: "L'\u00e9ternit\u00e9 est-elle r\u00e9elle ?",
      subtitle: "Si l'\u00e9ternit\u00e9 est r\u00e9elle, que ferons-nous dans l'\u00e9ternit\u00e9 ? O\u00f9 irons-nous dans l'\u00e9ternit\u00e9 ? Ce ne sont que quelques-unes des questions...",
      date: "25 sept. 2024",
      image: "https://placehold.co/600x400/000/fff?text=Message+4",
    },
  ];

  return (
    <section className={styles.featuredMessages}>
      <h3 className={styles.sectionTitle}>PLUS DE MESSAGES</h3>
      <div className={styles.messagesGrid}>
        {messages.map((message, index) => (
          <div key={index} className={styles.messageCard}>
            <div className={styles.imageContainer}>
              <Image
                src={message.image}
                alt={message.title}
                width={600}
                height={400}
                className={styles.messageImage}
              />
              <div className={styles.playButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div className={styles.dateLabel}>{message.date}</div>
            </div>
            <div className={styles.messageContent}>
              <h4 className={styles.messageTitle}>{message.title}</h4>
              <p className={styles.messageSubtitle}>{message.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedMessages;

