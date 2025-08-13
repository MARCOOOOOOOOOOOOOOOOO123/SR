// Fichier: app/page.js
import React from 'react';
import Navbar from '@/app/client-components/Navbar/page';
import HeroSection from '@/app/client-components/HeroSection/page';
import SermonSection from '@/app/client-components/SermonSection/page';
import FeaturedMessages from '@/app/client-components/FeaturedMessages/page';
import AboutSection from '@/app/client-components/aboutsection/page'; // Importing the AboutSection component
import Testimonials from '@/app/client-components/TestimonialsSection/page';
import Footer from '@/app/client-components/Footer/page';
import ContactSection from './client-components/ContactSection/page';
import LeadersSection from './client-components/LeadersSection/page';
import DonationsSection from './client-components/DonationsSection/page';
import BibleVerseCarousel from './client-components/BibleVerseCarousel/page';
import UpcomingEventsSection from './client-components/UpcomingEventsSection/page';
import InvitationSection from './client-components/InvitationSection/page';
import styles from '@/app/page.module.css'; // Assuming you have a CSS module for the main page styles


const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection /> {/* Adding the AboutSection component */}
        <UpcomingEventsSection />
        <SermonSection />
        <FeaturedMessages />
        <BibleVerseCarousel />
        <DonationsSection />
        <LeadersSection />
        <Testimonials />
        <ContactSection />
        <InvitationSection />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
