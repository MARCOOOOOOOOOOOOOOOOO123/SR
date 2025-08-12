// Fichier: Dashboard/StatsCards/StatsCards.js
import React from 'react';

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3v2a3 3 0 003 3h2a3 3 0 003-3v-2a3 3 0 00-3-3h-2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18c-2.21 0-4-1.79-4-4v-3c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v3c0 2.21-1.79 4-4 4h-2z"></path></svg>
          </div>
          <span className="text-sm font-semibold text-gray-500">Total des ventes</span>
        </div>
        <p className="text-3xl font-bold text-gray-900">$36,159</p>
        <p className="text-sm text-green-500 mt-2">+5% par rapport au mois dernier</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9l-7 7-7-7"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 15l-7-7-7 7"></path></svg>
          </div>
          <span className="text-sm font-semibold text-gray-500">Visiteurs uniques</span>
        </div>
        <p className="text-3xl font-bold text-gray-900">3,159</p>
        <p className="text-sm text-red-500 mt-2">-2% par rapport au mois dernier</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3v2a3 3 0 003 3h2a3 3 0 003-3v-2a3 3 0 00-3-3h-2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18c-2.21 0-4-1.79-4-4v-3c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v3c0 2.21-1.79 4-4 4h-2z"></path></svg>
          </div>
          <span className="text-sm font-semibold text-gray-500">Ventes nettes</span>
        </div>
        <p className="text-3xl font-bold text-gray-900">$6,159</p>
        <p className="text-sm text-green-500 mt-2">+10% par rapport au mois dernier</p>
      </div>
    </div>
  );
};

export default StatsCards;