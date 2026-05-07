import React from 'react'

function App() {
  // Dados do cardápio
  const itensCardapio = [
    { id: 1, nome: "🍔 X-Burger Clássico", preco: 25.90 },
    { id: 2, nome: "🍟 Batata Frita Especial", preco: 15.00 },
    { id: 3, nome: "🌭 Hot Dog Completo", preco: 12.50 },
    { id: 4, nome: "🥃 Milkshake de Chocolate", preco: 18.00 },
    { id: 5, nome: "🥤 Suco Natural de Laranja", preco: 10.00 }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Lanchonete do Marcos</h1>
      <hr />
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {itensCardapio.map((item) => (
          <li key={item.id} style={{ marginBottom: '15px', borderBottom: '1px solid #eee' }}>
            <h3 style={{ margin: '0 0 5px 0' }}>{item.nome}</h3>
            <p style={{ color: 'green', fontWeight: 'bold' }}>
              R$ {item.preco.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

