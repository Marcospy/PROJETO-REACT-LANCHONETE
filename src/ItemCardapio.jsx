import React from 'react'

// O componente recebe "props" (nome, preco, descricao)
function ItemCardapio({ nome, preco, descricao }) {
  return (
    <div className="item-cardapio" style={{ 
      backgroundColor: '#FFFFFF', 
      borderRadius: '20px', 
      overflow: 'hidden',
      boxShadow: '0 6px 15px rgba(0,0,0,0.06)',
      border: '2px solid #FFD600',
      padding: '25px'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#E53935' }}>
        {nome}
      </h3>
      
      <p style={{ margin: '0 0 25px 0', color: '#6D4C41', fontStyle: 'italic' }}>
        {descricao}
      </p>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderTop: '2px dashed #FFD600',
        paddingTop: '20px'
      }}>
        <span style={{ fontWeight: 'bold', color: '#FB8C00' }}>PREÇO</span>
        <span style={{ fontWeight: '900', fontSize: '1.5rem' }}>
          R$ {preco.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default ItemCardapio;