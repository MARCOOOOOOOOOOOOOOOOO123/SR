/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: [
      'googleusercontent.com',
      'upload.wikimedia.org',
      'placehold.co' // Ajout de ce domaine pour les placeholders
    ],
  },
};

export default nextConfig;
