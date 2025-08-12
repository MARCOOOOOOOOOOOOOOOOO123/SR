import React from 'react';
import styles from '@/app/client-components/Footer/Footer.module.css';
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
        
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Mon Eglise. Tous droits r\u00e9serv\u00e9s.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
