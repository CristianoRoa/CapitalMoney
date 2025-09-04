// src/components/Services.jsx
import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div style={{ backgroundColor: '#111', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FFD700', marginBottom: '10px' }}>{title}</h3>
      <p style={{ fontSize: '1rem', color: '#ccc' }}>{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section style={{ backgroundColor: '#000', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FFD700', marginBottom: '4rem' }}>Nossos Serviços</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <ServiceCard
            title="Análise de Mercado"
            description="Utilizamos ferramentas avançadas para fornecer insights precisos e estratégicos sobre o mercado de câmbio em tempo real."
          />
          <ServiceCard
            title="Segurança Máxima"
            description="Garantimos a proteção de suas transações com a mais alta tecnologia de criptografia e protocolos de segurança."
          />
          <ServiceCard
            title="Suporte 24/7"
            description="Nossa equipe de especialistas está disponível 24 horas por dia, 7 dias por semana, para tirar todas as suas dúvidas."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;