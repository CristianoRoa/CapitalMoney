// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-transparent">
      
      <nav>
        <ul className="flex space-x-6 text-white">
          <li><a href="#" className="hover:text-gold transition-colors duration-300">Home</a></li>
          <li><a href="#" className="hover:text-gold transition-colors duration-300">Sobre</a></li>
          <li><a href="#" className="hover:text-gold transition-colors duration-300">Serviços</a></li>
          <li><a href="#" className="hover:text-gold transition-colors duration-300">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;