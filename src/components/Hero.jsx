// src/components/Hero.jsx
import React from 'react';
import CurrencyVideo from '../assets/Dolár.mp4';
import Logo from '../assets/capital money.png';

const Hero = () => {
  const numeroWhatsApp = "5548998122073"; // Substitua pelo seu número com o código do país e DDD
  
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center bg-black overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute z-0 w-full h-full object-cover opacity-30"
      >
        <source src={CurrencyVideo} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20 p-6">
        <img 
          src={Logo} 
          alt="Capital Money Logo" 
          className="mx-auto w-64 md:w-96 drop-shadow-lg"
        />
        <p className="mt-4 text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow-md">
          Seu futuro financeiro em ouro. Negocie com confiança e veja seu capital crescer.
        </p>
        {/* Botão agora é um link para o WhatsApp */}
        <a 
          href={`https://wa.me/${5548998122073}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-8 px-8 py-3 bg-gold text-black text-lg font-semibold rounded-full hover:bg-white transition-colors duration-300 shadow-xl"
        >
          Converse com um Especialista
        </a>
      </div>
    </section>
  );
};

export default Hero;