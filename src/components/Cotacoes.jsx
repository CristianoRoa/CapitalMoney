// src/components/Cotacoes.jsx
import React, { useState, useEffect } from 'react';

const moedasIniciais = [
  { nome: 'Euro', simbolo: 'EUR', valor: 5.4210 },
  { nome: 'Dólar Americano', simbolo: 'USD', valor: 5.0150 },
  { nome: 'Libra Esterlina', simbolo: 'GBP', valor: 6.2570 },
  { nome: 'Iene Japonês', simbolo: 'JPY', valor: 0.0345 },
];

const CotacaoCard = ({ moeda }) => {
  const [valor, setValor] = useState(moeda.valor);
  const [variacao, setVariacao] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simula uma variação aleatória de 0.5% a -0.5%
      const novaVariacao = (Math.random() - 0.5) * 0.01;
      const novoValor = valor * (1 + novaVariacao);

      setValor(parseFloat(novoValor.toFixed(4)));
      setVariacao(novaVariacao);
    }, 3000); // Atualiza a cada 3 segundos

    return () => clearInterval(interval);
  }, [valor]);

  const corVariacao = variacao > 0 ? 'text-green-500' : 'text-red-500';

  return (
    <div className="p-6 rounded-xl border border-gold-800 bg-gray-900 text-white shadow-lg flex-1 min-w-[250px]">
      <h3 className="text-xl font-bold">{moeda.nome} ({moeda.simbolo})</h3>
      <p className="text-4xl font-light text-gold mt-2">${valor}</p>
      <span className={`text-sm mt-1 font-semibold ${corVariacao}`}>
        {variacao > 0 ? '▲' : '▼'} {(variacao * 100).toFixed(2)}%
      </span>
    </div>
  );
};

const Cotacoes = () => {
  return (
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gold mb-12">
          Cotações em Tempo Real
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {moedasIniciais.map((moeda) => (
            <CotacaoCard key={moeda.simbolo} moeda={moeda} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cotacoes;