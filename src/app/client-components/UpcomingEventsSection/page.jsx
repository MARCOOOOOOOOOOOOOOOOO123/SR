"use client";

import React from 'react';
import styles from '@/app/client-components/UpcomingEventsSection/UpcomingEventsSection.module.css';
import { ArrowRight } from 'lucide-react';

const events = [
  {
    day: '20',
    month: 'Août',
    title: 'CULTE DE CÉLÉBRATION À New Deido',
  },
  {
    day: '25',
    month: 'Août',
    title: 'LES MERCREDIS DE L\'ESPRIT',
  },
  {
    day: '30',
    month: 'Août',
    title: 'RENCONTRE JEUNESSE (14-25 ANS)',
  },
  // Ajoutez d'autres \u00e9v\u00e9nements ici
];

const UpcomingEventsSection = () => {
  return (
    <section className={styles.eventsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>
            EVENEMENTS À VENIR
          </p>
          <h2 className={styles.title}>
            Ne manquez pas les prochains rendez-vous de SACERDOCE ROYAL
          </h2>
        </div>
        <div className={styles.eventsList}>
          {events.map((event, index) => (
            <div key={index} className={styles.eventItem}>
              <div className={styles.date}>
                <span className={styles.day}>{event.day}</span>
                <span className={styles.month}>{event.month}</span>
              </div>
              <h3 className={styles.eventTitle}>
                {event.title}
              </h3>
              <a href="#" aria-label="Détails de l'évènement" className={styles.detailsLink}>
                <ArrowRight size={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
