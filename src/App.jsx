// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Cotacoes from './components/Cotacoes';
import Footer from './components/Footer';
import Services from './components/Services'; // Você pode criar este componente depois
import About from './components/About';

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <main>
        <Hero />
        <Cotacoes />
        <Services />
        <About />
        
        {/* Adicione outras seções aqui, como "Sobre" e "Serviços" */}
      </main>
      <Footer /> {/* Crie o componente Footer para informações de contato */}
    </div>
  );
}

export default App;