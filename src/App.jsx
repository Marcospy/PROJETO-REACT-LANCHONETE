import React, { useState } from 'react'
import ItemCardapio from './ItemCardapio'

function App() {
  // PASSO 3: Estado do contador
  const [totalItens, setTotalItens] = useState(0);

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

  const cores = {
    vermelhoVibrante: "#E53935",
    laranjaDestaque: "#FB8C00",
    amareloOuro: "#FFD600",
    fundoAlegre: "#FFFDED",
    texto: "#3E2723"
  };

  return (
    <>
      <style>
        {`
          .item-cardapio {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
          }
          .item-cardapio:hover {
            transform: scale(1.10) translateZ(10px);
            box-shadow: 0 15px 30px rgba(229, 57, 53, 0.2) !important;
          }
          /* Estilo do botão adicionar */
          .btn-adicionar {
            background-color: ${cores.vermelhoVibrante};
            color: white;
            border: none;
            padding: 12px;
            border-radius: 10px;
            font-weight: bold;
            cursor: pointer;
            width: 100%;
            margin-top: 15px;
            transition: background 0.2s;
          }
          .btn-adicionar:hover {
            background-color: ${cores.laranjaDestaque};
          }
        `}
      </style>

      <div style={{ 
        backgroundColor: cores.fundoAlegre, 
        minHeight: '100vh', 
        padding: '40px 20px', 
        fontFamily: "'Poppins', sans-serif, 'Arial'",
        color: cores.texto
      }}>
        
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '50px',
          background: `linear-gradient(135deg, ${cores.vermelhoVibrante} 0%, ${cores.laranjaDestaque} 100%)`,
          padding: '40px',
          borderRadius: '25px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ color: cores.amareloOuro, fontSize: '3rem', margin: 0, textTransform: 'uppercase', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Lanchonete do Marcos
          </h1>
          
          {/* PASSO 3: Exibição do Total */}
          <div style={{ 
            backgroundColor: 'white', 
            display: 'inline-block', 
            padding: '10px 25px', 
            borderRadius: '50px', 
            marginTop: '20px',
            fontWeight: 'bold',
            color: cores.vermelhoVibrante,
            border: `2px solid ${cores.amareloOuro}`
          }}>
            🛒 Total de itens no pedido: {totalItens}
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto', perspective: '1000px' }}>
          {itens.map((lanche) => (
            <ItemCardapio 
              key={lanche.id} 
              nome={lanche.nome} 
              preco={lanche.preco} 
              descricao={lanche.descricao}
              aoAdicionar={adicionarAoPedido} // Passando a função
            />
          ))}
        </div>

        <footer style={{ textAlign: 'center', marginTop: '60px', color: cores.texto, fontWeight: 'bold' }}>
          <p>Aberto todos os dias até as 23h</p>
        </footer>
      </div>
    </>
  )
}

export default App