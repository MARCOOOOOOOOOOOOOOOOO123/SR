// Fichier: Dashboard/Header/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-8">
      <div className="flex items-center space-x-2">
        <input type="text" placeholder="Rechercher..." className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button className="p-2 rounded-lg bg-blue-500 text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <span className="font-semibold text-gray-700">ROBERT WILLIAM</span>
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-200 transition duration-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;