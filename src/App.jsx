import React from 'react'

function App() {
  const itensCardapio = [
    { id: 1, nome: "🍔 X-Burger Clássico", preco: 25.90, descricao: "Pão brioche, carne de sol 180g, queijo coalho." },
    { id: 2, nome: "🍟 Batata Frita Especial", preco: 15.00, descricao: "Porção individual com cheddar e bacon." },
    { id: 3, nome: "🌭 Hot Dog Completo", preco: 12.50, descricao: "Salsicha artesanal, purê de batata, milho e batata palha." },
    { id: 4, nome: "🥤 Milkshake de Chocolate", preco: 18.00, descricao: "Feito com sorvete premium e calda de brigadeiro." },
    { id: 5, nome: "🍊 Suco Natural de Laranja", preco: 10.00, descricao: "Suco natural, feito na hora (300ml)." }
  ];

  const cores = {
    vermelhoVibrante: "#E53935", // Um vermelho mais aberto e alegre
    laranjaDestaque: "#FB8C00", // Laranja vibrante
    amareloOuro: "#FFD600", // Amarelo sol
    fundoAlegre: "#FFFDED", // Creme ainda mais clarinho
    branco: "#FFFFFF",
    texto: "#3E2723" // Marrom café profundo
  };

  return (
    <>
      {/* MÁGICA AQUI: Inserindo CSS Global diretamente no React 
         para podermos usar o :hover e a classe .item-cardapio
      */}
      <style>
        {`
          .item-cardapio {
            transition: transform 0.3s ease, box-shadow 0.3s ease; /* Animação suave */
            cursor: pointer;
          }

          .item-cardapio:hover {
            transform: scale(1.10) translateZ(10px); /* Amplia 5% e "vem para frente" */
            box-shadow: 0 15px 30px rgba(229, 57, 53, 0.2) !important; /* Sombra vermelha suave no hover */
            border-color: ${cores.vermelhoVibrante} !important; /* Borda muda para vermelho */
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
        
        {/* Cabeçalho */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '50px',
          background: `linear-gradient(135deg, ${cores.vermelhoVibrante} 0%, ${cores.laranjaDestaque} 100%)`, // Gradiente alegre
          padding: '40px',
          borderRadius: '25px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ 
            color: cores.amareloOuro, 
            fontSize: '3rem', 
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Lanchonete do Marcos
          </h1>
          <p style={{ color: 'white', marginTop: '15px', fontWeight: 'bold', fontSize: '1.2rem' }}>
            A alegria do sabor em cada mordida!
          </p>
        </div>
        
        {/* Grid de Itens */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto',
          perspective: '1000px' // Necessário para o efeito 3D (translateZ)
        }}>
          {itensCardapio.map((item) => (
            <div key={item.id} 
              className="item-cardapio" // <-- IMPORTANTE: Aplicando a classe CSS que definimos acima
              style={{ 
                backgroundColor: cores.branco, 
                borderRadius: '20px', 
                overflow: 'hidden',
                boxShadow: '0 6px 15px rgba(0,0,0,0.06)',
                border: `2px solid ${cores.amareloOuro}`,
                position: 'relative' // Para a faixa laranja
              }}>
              
              {/* Detalhe visual */}
              <div style={{ backgroundColor: cores.laranjaDestaque, height: '10px' }}></div>
              
              <div style={{ padding: '25px' }}>
                <h3 style={{ 
                  margin: '0 0 10px 0', 
                  fontSize: '1.4rem',
                  color: cores.vermelhoVibrante,
                  fontWeight: '800'
                }}>
                  {item.nome}
                </h3>
                
                <p style={{ 
                  margin: '0 0 25px 0', 
                  color: '#6D4C41', 
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  fontStyle: 'italic'
                }}>
                  {item.descricao}
                </p>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderTop: `2px dashed ${cores.amareloOuro}`,
                  paddingTop: '20px'
                }}>
                  <span style={{ fontSize: '1rem', fontWeight: 'bold', color: cores.laranjaDestaque, textTransform: 'uppercase' }}>Por</span>
                  <span style={{ 
                    color: cores.texto, 
                    fontWeight: '900', 
                    fontSize: '1.8rem'
                  }}>
                    R$ {item.preco.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
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