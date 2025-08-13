"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { leaders } from '@/app/client-components/LeadersSection/leaders-data-sacerdoce'; // Mettez à jour ce chemin si nécessaire
import { Instagram, Facebook, Youtube, ArrowLeft } from 'lucide-react';
import styles from '@/app/client-components/leaders/[leaderId]/LeaderProfilePage.module.css'; // Créez ce fichier CSS
import { ArrowRight } from 'lucide-react';

const LeaderProfilePage = ({ params }) => {
  const leaderId = params.leaderId;
  const leader = leaders.find(l => l.id === leaderId);

  if (!leader) {
    return (
      <div className={styles.notFound}>
        <h1>Leader non trouv\u00e9</h1>
        <p>Retournez \u00e0 la <Link href="/">page d'accueil</Link>.</p>
      </div>
    );
  }

  return (
    <section className={styles.profileSection}>
      <div className={styles.header}>
        <Link href="/" className={styles.backButton}>
          <ArrowLeft size={24} />
          <span>Retour \u00e0 l'accueil</span>
        </Link>
      </div>
      <div className={styles.profileContent}>
        <div className={styles.imageContainer}>
          <Image
            src={leader.profileImage}
            alt={leader.name}
            layout="fill"
            objectFit="cover"
            className={styles.profileImage}
            // Ajout de la propri\u00e9t\u00e9 'unoptimized' pour g\u00e9rer les SVG de placehold.co
            unoptimized={true}
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.name}>{leader.name}</h1>
          <p className={styles.role}>{leader.role}</p>
          <div className={styles.socials}>
            {leader.socials.instagram && (
              <a href={leader.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            )}
            {leader.socials.facebook && (
              <a href={leader.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={24} />
              </a>
            )}
            {leader.socials.youtube && (
              <a href={leader.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={24} />
              </a>
            )}
          </div>
          <p className={styles.description}>{leader.description}</p>
        </div>
      </div>
    </section>
  );
};

export default LeaderProfilePage;

