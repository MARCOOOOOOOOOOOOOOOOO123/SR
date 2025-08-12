// Fichier: Dashboard/Sidebar/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-white text-gray-700 w-64 p-4 shadow-lg flex flex-col justify-between">
      <div className="flex-1">
        <div className="text-xl font-bold mb-6">LOGO</div>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-10v10a1 1 0 001 1h3M12 2v20"></path></svg>
                Tableau de bord
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition duration-200">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                Profil
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition duration-200">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Dossiers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition duration-200">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405C18.397 15.004 18 14.502 18 14v-3.8c0-2.81 1.258-5.352 3.242-7.147A.75.75 0 0021 2.25V3a.75.75 0 00-.75-.75H3.75A.75.75 0 003 3v-.75a.75.75 0 00-.242.096C4.742 5.158 6 7.69 6 10.2v3.8c0 .502-.397 1.004-.595 1.795L4 17h5"></path></svg>
                Notification
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition duration-200">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9a2 2 0 002-2v-7a2 2 0 00-2-2H3a2 2 0 00-2 2v7a2 2 0 002 2h9"></path></svg>
                Messages
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition duration-200">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 0a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.57 20.243A8 8 0 1119.43 9.364M8.57 20.243a8 8 0 01-5.657-5.657m5.657 5.657L11 15"></path></svg>
                Centre d'aide
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition duration-200">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110-4m0 4a2 2 0 100-4m0-4a2 2 0 110-4m0 4a2 2 0 100-4m0-4a2 2 0 110-4m0 4a2 2 0 100-4m0-4a2 2 0 110-4m0 4a2 2 0 100-4m0-4a2 2 0 110-4m0 4a2 2 0 100-4m0-4a2 2 0 110-4m0 4a2 2 0 100-4m0-4a2 2 0 110-4m0 4a2 2 0 100-4m0-4a2 2 0 110-4"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M12 12h.01M12 6h.01M12 12h.01M12 18h.01M12 12h.01M12 6h.01M12 12h.01M12 18h.01M12 12h.01M12 6h.01M12 12h.01M12 18h.01M12 12h.01M12 6h.01M12 12h.01M12 18h.01M12 12h.01M12 6h.01M12 12h.01M12 18h.01M12 12h.01M12 6h.01"></path></svg>
                Paramètres
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-8">
        <button className="flex items-center p-2 rounded-lg text-red-500 hover:bg-gray-200 transition duration-200 w-full">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          D\u00e9connexion
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;