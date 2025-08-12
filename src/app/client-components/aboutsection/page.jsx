import React from 'react';
import styles from '@/app/client-components/aboutsection/AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>NOTRE EGLISE</h2>
          <p className={styles.text}>
            SACERDOCE ROYAL est une famille spirituelle passionnée de Dieu, qui se réunit pour rechercher sa présence, écouter sa parole et passer des supers moments ensemble. Une église qui aime les gens et qui les forme pour qu'à leur tour ils puissent impacter leur génération.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
