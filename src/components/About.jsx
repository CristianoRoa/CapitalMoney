// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section style={{ backgroundColor: '#000', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FFD700', marginBottom: '2rem' }}>
          Sobre a Capital Money
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
            Na Capital Money, nossa missão é transformar a maneira como você lida com suas finanças. Com anos de experiência no mercado de câmbio e um compromisso inabalável com a transparência e a segurança, oferecemos soluções inovadoras para que você possa negociar moedas internacionais com total confiança. Acreditamos que o acesso a informações precisas e um serviço de excelência são a chave para o seu crescimento financeiro.
          </p>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
            Nossa equipe de especialistas está sempre pronta para oferecer o suporte necessário, garantindo que suas operações sejam eficientes e bem-sucedidas. Junte-se a nós e descubra um novo patamar de oportunidades no mundo das finanças globais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;