// src/app/layout.jsx
import { Inter } from 'next/font/google'; // Importation optimisée
import './globals.css';

// Configuration de la police
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Église SACERDOCE ROYAL',
  description: 'Site web de la communauté',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      {/* La classe de la police est appliquée au body */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}