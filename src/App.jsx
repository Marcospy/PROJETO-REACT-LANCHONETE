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
    vermelho: "#D32F2F", 
    amareloDestaque: "#FFC107",
    laranja: "#F57C00",
    fundoAlegre: "#FFF9E1", // Um creme bem clarinho e "quente"
    branco: "#FFFFFF",
    texto: "#4E342E" // Um marrom bem escuro, combina melhor com amarelo/vermelho que o preto puro
  };

  return (
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
        marginBottom: '40px',
        backgroundColor: cores.vermelho,
        padding: '30px',
        borderRadius: '20px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          color: cores.amareloDestaque, 
          fontSize: '2.5rem', 
          margin: 0,
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          Lanchonete do Marcos
        </h1>
        <p style={{ color: 'white', marginTop: '10px', fontWeight: 'bold' }}>
          ⭐ A melhor lanchonete da região ⭐
        </p>
      </div>
      
      {/* Grid de Itens */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '25px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {itensCardapio.map((item) => (
          <div key={item.id} style={{ 
            backgroundColor: cores.branco, 
            borderRadius: '15px', 
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: `1px solid ${cores.amareloDestaque}`
          }}>
            {/* Faixa colorida no topo do card */}
            <div style={{ backgroundColor: cores.laranja, height: '8px' }}></div>
            
            <div style={{ padding: '20px' }}>
              <h3 style={{ 
                margin: '0 0 10px 0', 
                fontSize: '1.3rem',
                color: cores.vermelho
              }}>
                {item.nome}
              </h3>
              
              <p style={{ 
                margin: '0 0 20px 0', 
                color: '#757575', 
                fontSize: '0.95rem',
                lineHeight: '1.4'
              }}>
                {item.descricao}
              </p>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderTop: '2px dashed #FFECB3',
                paddingTop: '15px'
              }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: cores.laranja }}>PREÇO</span>
                <span style={{ 
                  color: cores.texto, 
                  fontWeight: '900', 
                  fontSize: '1.5rem'
                }}>
                  R$ {item.preco.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer style={{ textAlign: 'center', marginTop: '50px', color: cores.laranja, fontWeight: 'bold' }}>
        <p>Aberto todos os dias até as 23h</p>
      </footer>
    </div>
  )
}

export default App