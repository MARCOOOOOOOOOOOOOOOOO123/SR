// Fichier: client-components/Navbar/Navbar.js
"use client";
import React, { useState } from 'react';
import styles from '@/app/client-components/Navbar/Navbar.module.css';


const icons = {
  church: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.313-2.687 6-6 6S0 14.313 0 11s2.687-6 6-6 6 2.687 6 6zm10 0c0 3.313-2.687 6-6 6s-6-2.687-6-6 2.687-6 6-6 6 2.687 6 6zm-10 0c0 3.313-2.687 6-6 6s-6-2.687-6-6 2.687-6 6-6 6 2.687 6 6zM12 17l4-2 4 2V5H4v12l4-2z"/></svg>,
  video: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18H3a2 2 0 01-2-2V8a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2z"></path></svg>,
  music: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM9 19v2m3-12h3M9 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>,
  mic: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM3.46 14.8c1.34 3.013 4.385 5.2 8.54 5.2s7.199-2.187 8.54-5.2M21 12H3"/></svg>,
  paper: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm0 0v6h6m-9 9h6m-6-4h6m-6-4h2"/></svg>,
  briefcase: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20V5l12-3v16l-12 3zm0 0L3 17V4l6 3m12-3L9 5M3 17v4m12-4v4M9 5v3m12-6L9 5"/></svg>,
  people: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292m0 0a4 4 0 100 5.292m0-5.292c-3.13 0-5.711 2.308-5.711 5.292s2.581 5.292 5.711 5.292 5.711-2.308 5.711-5.292-2.581-5.292-5.711-5.292zm0-5.292a4 4 0 110 5.292m0 0a4 4 0 100 5.292m0-5.292c-3.13 0-5.711 2.308-5.711 5.292s2.581 5.292 5.711 5.292 5.711-2.308 5.711-5.292-2.581-5.292-5.711-5.292zM12 17v2m0 0v2M12 17a4 4 0 110 5.292m0 0a4 4 0 100 5.292m0-5.292c-3.13 0-5.711 2.308-5.711 5.292s2.581 5.292 5.711 5.292 5.711-2.308 5.711-5.292-2.581-5.292-5.711-5.292z"></path></svg>,
  graduation: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v4l9-5-9-5-9 5 9 5zm0 0V4m-9 1l9-5 9 5"/></svg>,
  tools: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19v-2m0-2V9a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-4m-4 0v-2m4 0v-2m-4 4h4m-4 0a4 4 0 01-4-4v-4a4 4 0 014-4h4a4 4 0 014 4v4a4 4 0 01-4 4h-4z"/></svg>,
  hands: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c0 3.313-2.687 6-6 6S0 17.313 0 14c0-2.28 1.28-4.225 3.125-5.296L12 14zM12 14c0-3.313 2.687-6 6-6s6 2.687 6 6c0 2.28-1.28 4.225-3.125 5.296L12 14z"/></svg>,
  pray: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17l4-2 4 2V5H4v12l4-2z"/></svg>,
  book: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292m0 0a4 4 0 100 5.292m0-5.292c-3.13 0-5.711 2.308-5.711 5.292s2.581 5.292 5.711 5.292 5.711-2.308 5.711-5.292-2.581-5.292-5.711-5.292zM12 17v2m0 0v2M12 17a4 4 0 110 5.292m0 0a4 4 0 100 5.292m0-5.292c-3.13 0-5.711 2.308-5.711 5.292s2.581 5.292 5.711 5.292 5.711-2.308 5.711-5.292-2.581-5.292-5.711-5.292z"></path></svg>,
  rocket: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19c0-3.313-2.687-6-6-6S0 15.687 0 19s2.687 6 6 6 6-2.687 6-6zm10 0c0-3.313-2.687-6-6-6s-6 2.687-6 6 2.687 6 6 6 6-2.687 6-6zm-10 0c0-3.313-2.687-6-6-6s-6 2.687-6 6 2.687 6 6 6 6-2.687 6-6zM12 17l4-2 4 2V5H4v12l4-2z"/></svg>,
};


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);

  const handleMouseEnter = (menuName) => {
    setActiveMenu(menuName);
  };


  const handleMouseLeave = () => {
    setActiveMenu(null);
  };


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  const toggleMobileSubMenu = (menuName) => {
    setActiveMobileMenu(activeMobileMenu === menuName ? null : menuName);
  };


  const navLinks = [
    {
      name: 'A propos',
      menu: [
        { icon: icons.church, title: 'Notre Histoire' },
        { icon: icons.pray, title: 'Nos Croyances' },
        { icon: icons.people, title: 'Leadership' },
        { icon: icons.hands, title: 'Service' },
      ]
    },
    {
      name: 'Media',
      menu: [
        { icon: icons.church, title: 'Regarder sermons' },
        { icon: icons.video, title: 'Regarder vidéos' },
        { icon: icons.music, title: 'Ecouter musique' },
        { icon: icons.mic, title: 'Ecouter podcasts' },
        { icon: icons.paper, title: 'Lire articles' },
        { icon: icons.briefcase, title: 'Lire ressources' },
      ]
    },
    {
      name: 'Ministeres',
      menu: [
        { icon: icons.people, title: 'Enfants' },
        { icon: icons.people, title: 'Etudiants' },
        { icon: icons.graduation, title: 'Collège' },
        { icon: icons.people, title: 'Femmes' },
        { icon: icons.people, title: 'Hommes' },
        { icon: icons.people, title: 'Mariage' },
        { icon: icons.people, title: 'Réfugiés' },
      ]
    },
    {
      name: 'Initiatives',
      menu: [
        { icon: icons.hands, title: 'Counseling' },
        { icon: icons.tools, title: 'Creative' },
        { icon: icons.book, title: 'Institut' },
        { icon: icons.rocket, title: 'Pour la Ville' },
        { icon: icons.rocket, title: 'Pour les Nations' },
      ]
    },
    {
      name: 'Participer',
      menu: [
        { icon: icons.church, title: 'Suivre cours' },
        { icon: icons.people, title: 'Rejoindre groupe' },
        { icon: icons.hands, title: 'Servir' },
        { icon: icons.book, title: 'Apprendre programmes' },
        { icon: icons.graduation, title: 'Devenir Leader' },
      ]
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          {/* Logo */}
          <div className={styles.logo}></div>
          <span className={styles.brandName}>SACERDOCE ROYAL</span>
        </div>
        
        {/* Navigation pour les \u00e9crans de bureau */}
        <nav className={styles.navLinksDesktop}>
          {navLinks.map((link) => (
            <div
              key={link.name}
              className={styles.navLinkContainer}
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className={styles.navLink}>
                {link.name}
              </a>
              {activeMenu === link.name && (
                <div className={styles.dropdownMenu}>
                  {link.menu.map((item, index) => (
                    <a href="#" key={index} className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>{item.icon}</div>
                      <span className={styles.dropdownTitle}>{item.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="#" className={styles.navLink}>Donner</a>
        </nav>
        
        {/* Boutons d'action et de menu mobile */}
        <div className={styles.actionButtonsContainer}>
          <button className={styles.visitButton}>
            VISITER
          </button>
          <button className={styles.menuButtonMobile} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            {navLinks.map((link) => (
              <div key={link.name}>
                <button
                  onClick={() => toggleMobileSubMenu(link.name)}
                  className={styles.mobileNavLink}
                >
                  <span>{link.name}</span>
                  <span>{activeMobileMenu === link.name ? ' -' : ' +'}</span>
                </button>
                {activeMobileMenu === link.name && (
                  <div className={styles.mobileDropdownMenu}>
                    {link.menu.map((item, index) => (
                      <a href="#" key={index} className={styles.mobileDropdownItem}>
                        <div className={styles.mobileDropdownIcon}>{item.icon}</div>
                        <span className={styles.mobileDropdownTitle}>{item.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#" className={styles.mobileNavLink}>Donner</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
