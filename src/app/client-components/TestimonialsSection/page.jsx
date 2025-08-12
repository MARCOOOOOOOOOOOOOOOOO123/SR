"use client"; // Cette directive indique que ce composant est un composant client

import React, { useState, useEffect } from 'react';
// Importation des styles en tant que module CSS
import styles from '@/app/client-components/TestimonialsSection/TestimonialsSection.module.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "The new OptinMonster with the web back-end is just amazing. With OptinMonster, we found an easy-to-use and very effective way to increase our newsletter subscribers. This tool is worth every penny!",
      author: "Jane Rowling",
      job: "Copywriter",
      avatar: "https://placehold.co/100x100/A0AEC0/000?text=JR"
    },
    {
      text: "I was once a disbeliever myself, I didn't like popups at all. But we doubled our email signups, so the results speak for themselves. It just works. OptinMonster makes it super easy and is well worth the money.",
      author: "Emillia Bubu",
      job: "UI/UX Designer",
      avatar: "https://placehold.co/100x100/667EEA/000?text=EB"
    },
    {
      text: "OptinMonster brought me more subscribers, which is a given, but what's more important was that setting it up and making it work well with my site and design was seamless and excellent! I love the product and the people behind it.",
      author: "Judy Dowson",
      job: "PHP Developer",
      avatar: "https://placehold.co/100x100/A0AEC0/000?text=JD"
    },
  ];
  
  // Utilise useEffect pour g\u00e9rer le d\u00e9filement automatique
  useEffect(() => {
    // D\u00e9finit un intervalle pour changer l'index actif toutes les 5 secondes
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change de diapositive toutes les 5 secondes

    // Nettoie l'intervalle lorsque le composant est d\u00e9mont\u00e9
    return () => clearInterval(interval);
  }, [testimonials.length]); // S'ex\u00e9cute \u00e0 chaque fois que le nombre de t\u00e9moignages change

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        {/* Titre de la section */}
        <p className={styles.subtitle}>
          VOIR CE QUE NOS FIDELES ONT À DIRE
        </p>
        <h2 className={styles.title}>
          Témoignages
        </h2>

        {/* Conteneur du carrousel */}
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselContainer} style={{ transform: `translateX(-${activeIndex * (100 / testimonials.length)}%)`}}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={styles.testimonialCard}
              >
                {/* Icône de guillemets géants */}
                <div className={styles.quoteIcon}>
                  &ldquo;
                </div>
                
                {/* Texte du témoignage */}
                <p className={styles.testimonialText}>
                  {testimonial.text}
                </p>

                {/* Conteneur de l'auteur */}
                <div className={styles.authorInfo}>
                  {/* Avatar de l'auteur */}
                  <img
                    className={styles.authorAvatar}
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/E5E7EB/000?text=JR' }}
                  />
                  
                  {/* Nom et poste de l'auteur */}
                  <p className={styles.authorName}>
                    {testimonial.author}
                  </p>
                  <p className={styles.authorJob}>
                    {testimonial.job}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation par points */}
        <div className={styles.carouselDots}>
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
