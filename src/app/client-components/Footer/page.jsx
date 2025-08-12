import React from 'react';
import styles from '@/app/client-components/HeroSection/HeroSection.module.css';
import Image from 'next/image';

// Composant de pied de page
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <h4 className="text-xl font-bold mb-2">Mon Eglise</h4>
          <p className="text-sm text-gray-400">123 Rue de la Foi, 75001 Paris, France</p>
          <p className="text-sm text-gray-400">contact@moneglise.fr</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-white transition duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14 10h2v4h-2v-4zM16 10h2v4h-2v-4zM12 10h2v4h-2v-4z"></path></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM10 18H8V10h2v8zM12 18h2v-8h-2v8zm-2-12h4v2h-4V6z"></path></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6a2 2 0 100 4 2 2 0 000-4zM12 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>
          </a>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Mon Eglise. Tous droits r\u00e9serv\u00e9s.
        </p>
      </div>
    </footer>
  );
};

export default App;
