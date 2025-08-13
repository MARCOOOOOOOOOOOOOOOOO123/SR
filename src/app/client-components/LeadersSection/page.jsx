"use client";

import React from 'react';
import styles from '@/app/client-components/LeadersSection/LeadersSection.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { leaders } from '@/app/client-components/LeadersSection/leaders-data-sacerdoce'; // Utilisation du fichier de données mis à jour

const LeadersSection = () => {
  return (
    <section className={styles.leadersSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>
            NOS LEADERS
          </p>
          <h2 className={styles.title}>
            Rencontrez l'équipe ministérielle qui prend soin de la famille Sacerdoce Royal à Douala.
          </h2>
        </div>
        <div className={styles.leadersGrid}>
          {leaders.map((leader, index) => (
            <Link href={`/leaders/${leader.id}`} key={index}>
              <div className={styles.leaderCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    layout="fill"
                    objectFit="cover"
                    className={styles.leaderImage}
                  />
                  <div className={styles.overlay}>
                    <p className={styles.leaderRole}>{leader.role}</p>
                    <h3 className={styles.leaderName}>{leader.name}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;
