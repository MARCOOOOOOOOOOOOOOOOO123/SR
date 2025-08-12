// Fichier: app/page.js
import React from 'react';
import Navbar from '@/app/client-components/Navbar/page';
import HeroSection from '@/app/client-components/HeroSection/page';
import SermonSection from '@/app/client-components/SermonSection/page';
import FeaturedMessages from '@/app/client-components/FeaturedMessages/page';
import AboutSection from '@/app/client-components/aboutsection/page'; // Importing the AboutSection component
import Testimonials from '@/app/client-components/TestimonialsSection/page';
import Footer from '@/app/client-components/Footer/page';
import styles from '@/app/page.module.css'; // Assuming you have a CSS module for the main page styles


const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection /> {/* Adding the AboutSection component */}
        <SermonSection />
        <FeaturedMessages />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
