import React from 'react'
import ItemCardapio from './ItemCardapio' // Importando o componente que você criou

function App() {
  const itens = [
    { id: 1, nome: "🍔 X-Burger Clássico", preco: 25.90, descricao: "Pão brioche, carne de sol 180g, queijo coalho." },
    { id: 2, nome: "🍟 Batata Frita Especial", preco: 15.00, descricao: "Porção individual com cheddar e bacon." },
    { id: 3, nome: "🌭 Hot Dog Completo", preco: 12.50, descricao: "Salsicha artesanal, purê de batata, milho e batata palha." },
    { id: 4, nome: "🥤 Milkshake de Chocolate", preco: 18.00, descricao: "Feito com sorvete premium e calda de brigadeiro." },
    { id: 5, nome: "🍊 Suco Natural de Laranja", preco: 10.00, descricao: "Suco natural, feito na hora (300ml)." }
  ];

  return (
    <div style={{ backgroundColor: '#FFFDED', minHeight: '100vh', padding: '40px 20px' }}>
      
      {/* CSS do efeito zoom (mantemos aqui no App ou index.css) */}
      <style>{`
        .item-cardapio { transition: transform 0.3s ease; cursor: pointer; }
        .item-cardapio:hover { transform: scale(1.05); }
      `}</style>

      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#E53935', fontSize: '2.5rem' }}>Lanchonete do Marcos</h1>
      </header>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Usando o componente dentro do MAP */}
        {itens.map((lanche) => (
          <ItemCardapio 
            key={lanche.id} 
            nome={lanche.nome} 
            preco={lanche.preco} 
            descricao={lanche.descricao} 
          />
        ))}
      </div>

    </div>
  )
}

export default App