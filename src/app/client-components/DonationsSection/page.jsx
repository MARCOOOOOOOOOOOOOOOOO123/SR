"use client";

import React, { useState } from 'react';
import styles from '@/app/client-components/DonationsSection/DonationsSection.module.css';
import Image from 'next/image';

const DonationsSection = () => {
  const [paymentMethod, setPaymentMethod] = useState('carte');

  return (
    <section className={styles.donationsSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subtitle}>
            FAIRE UN DON EN LIGNE
          </p>
          <h2 className={styles.title}>
            Simple et sécurisé, vous pouvez donner vos offrandes et dîmes par carte de crédit ou par virement, ou encore par Orange Money ou Momo.
          </h2>
          <p className={styles.prompt}>
            Je choisis de donner par :
          </p>
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.button} ${paymentMethod === 'carte' ? styles.active : ''}`}
              onClick={() => setPaymentMethod('carte')}
            >
              CARTE BANCAIRE
            </button>
            <button
              className={`${styles.button} ${paymentMethod === 'virement' ? styles.active : ''}`}
              onClick={() => setPaymentMethod('virement')}
            >
              VIREMENT
            </button>
             <button
              className={`${styles.button} ${paymentMethod === 'om' ? styles.active : ''}`}
              onClick={() => setPaymentMethod('om')}
            >
              ORANGE MONEY
            </button>
             <button
              className={`${styles.button} ${paymentMethod === 'momo' ? styles.active : ''}`}
              onClick={() => setPaymentMethod('momo')}
            >
              MOBILE MONEY
            </button>
          </div>
        </div>
       {/* L'image de React est ajout\u00e9e ici */}
        <div>
           <Image
                src="/images/don_electro.jpg"
                alt="Image de don \u00e9lectronique"
                width={400}
                height={400}
                className={styles.reactImage}
            />
        </div>
      </div>
    </section>
  );
};

export default DonationsSection;
