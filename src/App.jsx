import React, { useState } from 'react' // 1. Importamos o useState
import ItemCardapio from './ItemCardapio'

function App() {
  // 2. Criamos o estado do contador (começa em 0)
  const [totalItens, setTotalItens] = useState(0);

  // 3. Função que será chamada quando clicar no botão
  const adicionarAoPedido = () => {
    setTotalItens(totalItens + 1);
  };

  const itens = [
    { id: 1, nome: "🍔 X-Burger Clássico", preco: 25.90, descricao: "Pão brioche, carne de sol 180g, queijo coalho." },
    { id: 2, nome: "🍟 Batata Frita Especial", preco: 15.00, descricao: "Porção individual com cheddar e bacon." },
    { id: 3, nome: "🌭 Hot Dog Completo", preco: 12.50, descricao: "Salsicha artesanal, purê de batata, milho e batata palha." },
    { id: 4, nome: "🥤 Milkshake de Chocolate", preco: 18.00, descricao: "Feito com sorvete premium e calda de brigadeiro." },
    { id: 5, nome: "🍊 Suco Natural de Laranja", preco: 10.00, descricao: "Suco natural, feito na hora (300ml)." }
  ];

  return (
    <>
      <style>
        {`.item-cardapio { transition: transform 0.3s ease; cursor: pointer; }
          .item-cardapio:hover { transform: scale(1.05); }
          .btn-adicionar { 
            background-color: #E53935; color: white; border: none; 
            padding: 10px 15px; border-radius: 8px; font-weight: bold; 
            cursor: pointer; transition: background 0.2s; width: 100%; margin-top: 15px;
          }
          .btn-adicionar:hover { background-color: #FB8C00; }
          .contador-container {
            background: white; padding: 10px 20px; border-radius: 50px;
            display: inline-block; margin-top: 15px; color: #E53935;
            font-weight: bold; border: 2px solid #FFD600;
          }
        `}
      </style>

      <div style={{ backgroundColor: '#FFFDED', minHeight: '100vh', padding: '40px 20px', fontFamily: 'Arial' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '50px', background: 'linear-gradient(135deg, #E53935 0%, #FB8C00 100%)', padding: '40px', borderRadius: '25px' }}>
          <h1 style={{ color: '#FFD600', margin: 0 }}>Lanchonete do Marcos</h1>
          
          {/* 4. Mostrando o total na tela */}
          <div className="contador-container">
            🛒 Total de itens no pedido: {totalItens}
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {itens.map((lanche) => (
            <ItemCardapio 
              key={lanche.id} 
              nome={lanche.nome} 
              preco={lanche.preco} 
              descricao={lanche.descricao}
              funcaoAdicionar={adicionarAoPedido} // 5. Passamos a função para o filho
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App