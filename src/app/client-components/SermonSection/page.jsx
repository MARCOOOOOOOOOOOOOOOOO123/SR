// Fichier: client-components/SermonSection/SermonSection.js
import React from 'react';
import styles from '@/app/client-components/SermonSection/SermonSection.module.css';
import Image from 'next/image';

const SermonSection = () => {
  return (
    <div className={styles.sermonSection}>
      <p className={styles.moreFromSeries}>Plus de la série</p>
      <div className={styles.seriesContainer}>
        <div className={styles.seriesImage}>
          <Image src="http://googleusercontent.com/file_content/0" alt="Le pouvoir de la semence" layout="fill" objectFit="cover" />
          <div className={styles.imageOverlay}>
            <h1>LE POUVOIR DE LA SEMENCE</h1>
          </div>
        </div>
        <div className={styles.seriesList}>
          <p>Découvrez l'impact profond que les petites actions...</p>
          <div className={styles.seriesItem}>
            <span>PT. 1</span>
            <div>
              <p>Semence de Parole</p>
              <span>Pasteur GEDEON</span>
            </div>
          </div>
          <div className={styles.seriesItem}>
            <span>PT. 2</span>
            <div>
              <p>Semence de Louange</p>
              <span>Pasteur JEAN MARC</span>
            </div>
          </div>
          <div className={styles.seriesItem}>
            <span>PT. 3</span>
            <div>
              <p>Semence Généreuse</p>
              <span>Pasteur JEAN MARC</span>
            </div>
          </div>
          <div className={styles.seriesItem}>
            <span>PT. 4</span>
            <div>
              <p>Plan, Vision, Rêve.</p>
              <span>Pasteur NADINE</span>
            </div>
          </div>
          <button className={styles.viewFullSeries}>Voir la série complète</button>
        </div>
      </div>
    </div>
  );
};

export default SermonSection;