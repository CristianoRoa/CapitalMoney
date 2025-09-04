// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="text-xl font-bold text-gold mb-4">Capital Money</div>
        <p className="text-sm text-gray-400">
          Rua Fictícia, 123 - Centro, Cidade Fictícia<br />
          Email: contato@capitalmoney.com<br />
          Telefone: (99) 99999-9999
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          {/* Você pode adicionar ícones para redes sociais aqui */}
          <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">LinkedIn</a>
        </div>
        <p className="mt-8 text-xs text-gray-500">
          &copy; 2025 Capital Money. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;