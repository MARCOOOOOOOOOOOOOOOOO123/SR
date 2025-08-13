"use client";

import React from 'react';
import styles from '@/app/client-components/InvitationSection/InvitationSection.module.css';

const InvitationSection = () => {
  return (
    <section className={styles.invitationSection}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            IL Y A UNE PLACE POUR TOI AU SACERDOCE ROYAL !
          </h2>
          <p className={styles.address}>
            Rue New Deido (APRES LE MARCHE NEW DEIDO)
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
