"use client"; // Cette directive indique que ce composant est un composant client

import React, { useState, useEffect } from 'react';
// Importation des styles en tant que module CSS
import styles from '@/app/client-components/TestimonialsSection/TestimonialsSection.module.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
 {
    text: "Le nouveau OptinMonster avec son back-end web est tout simplement incroyable. Avec OptinMonster, nous avons trouvé un moyen simple et très efficace d'augmenter nos abonnés à la newsletter. Cet outil vaut chaque centime !",
    author: "Jane Rowling",
    job: "Banquier",
    avatar: "https://placehold.co/100x100/A0AEC0/000?text=JR"
  },
  {
    text: "J'étais moi-même un sceptique, je n'aimais pas du tout les pop-ups. Mais nous avons doublé nos inscriptions par email, donc les résultats parlent d'eux-mêmes. Ça fonctionne, tout simplement. OptinMonster rend la tâche super facile et vaut largement son prix.",
    author: "Emillia Bubu",
    job: "Commerçante",
    avatar: "https://placehold.co/100x100/667EEA/000?text=EB"
  },
  {
    text: "OptinMonster m'a apporté plus d'abonnés, ce qui est une évidence, mais ce qui est encore plus important, c'est que la mise en place et le bon fonctionnement avec mon site et mon design ont été fluides et excellents ! J'adore le produit et les gens qui sont derrière.",
    author: "Judy Dowson",
    job: "Maire",
    avatar: "https://placehold.co/100x100/A0AEC0/000?text=JD"
  },
    {
    text: "J'ai trouvé dans cette église une communauté qui m'a accueillie à bras ouverts. Les enseignements sont profonds et pertinents pour ma vie quotidienne. C'est un véritable lieu de croissance spirituelle.",
    author: "Elodie M.",
    job: "Infirmière",
    avatar: "https://placehold.co/100x100/A0AEC0/000?text=EM"
  },
  {
    text: "Le ministère de la jeunesse est incroyablement dynamique. J'ai pu développer mon leadership et ma foi dans un environnement sûr et stimulant. Je me sens vraiment à ma place ici.",
    author: "Samuel P.",
    job: "Etudiant",
    avatar: "https://placehold.co/100x100/A0AEC0/000?text=SP"
  },
  {
    text: "Grâce au Sacerdoce Royal, ma vie de prière a été révolutionnée. Le pasteur a une façon unique de précher qui rend la Parole de Dieu accessible et vivante pour tous.",
    author: "Fatima B.",
    job: "Gestionnaire de projet",
    avatar: "https://placehold.co/100x100/A0AEC0/000?text=FB"
  },
  {
    text: "J'ai rencontré des personnes formidables et j'ai trouvé une famille spirituelle. Les événements sont toujours bien organisés et inspirants. Je suis tellement reconnaissante d'en faire partie.",
    author: "Chantal L.",
    job: "Retraitée",
    avatar: "https://placehold.co/100x100/A0AEC0/000?text=CL"
  },
  {
    text: "Les enseignements sur le mariage et la famille ont été une bénédiction pour moi et mon épouse. Ils nous ont aidés à renforcer notre relation et à construire notre foyer sur des bases solides.",
    author: "David et Marie",
    job: " Entrepreneurs",
    avatar: "https://placehold.co/100x100/A0AEC0/000?text=DM"
  }
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
