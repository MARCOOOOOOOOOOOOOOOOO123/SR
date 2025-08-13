"use client";

import React, { useState, useEffect } from 'react';
import styles from '@/app/client-components/BibleVerseCarousel/BibleVerseCarousel.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const verses = [
  {
    text: "Venez à Jésus, vous tous qui êtes fatigués et chargés, et il vous donnera du repos.",
    reference: "Matthieu 11:28",
  },
  {
    text: "Déchargez-vous sur Dieu de tous vos soucis, car lui-même prend soin de vous.",
    reference: "1 Pierre 5:7",
  },
  {
    text: "Que votre cœur ne se trouble point. Croyez en Dieu, et croyez en Jésus.",
    reference: "Jean 14:1",
  },
  // Vous pouvez ajouter d'autres versets ici
];

const BibleVerseCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % verses.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + verses.length) % verses.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change de verset toutes les 10 secondes

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className={styles.carouselSection}>
      <div className={styles.carouselContainer}>
        <div className={styles.verseContent}>
          <p className={styles.quote}>
            "{verses[currentIndex].text}"
          </p>
          <div className={styles.controls}>
            <button onClick={handlePrev} className={styles.navButton} aria-label="Versets pr\u00e9c\u00e9dents">
              <ChevronLeft size={24} />
            </button>
            <p className={styles.reference}>
              {verses[currentIndex].reference}
            </p>
            <button onClick={handleNext} className={styles.navButton} aria-label="Versets suivants">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BibleVerseCarousel;
