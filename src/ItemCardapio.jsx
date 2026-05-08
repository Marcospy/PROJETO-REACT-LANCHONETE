import React from 'react'

// Recebemos a função 'funcaoAdicionar' via props
function ItemCardapio({ nome, preco, descricao, funcaoAdicionar }) {
  return (
    <div className="item-cardapio" style={{ 
      backgroundColor: 'white', borderRadius: '20px', border: '2px solid #FFD600', padding: '25px' 
    }}>
      <div style={{ backgroundColor: '#FB8C00', height: '10px', margin: '-25px -25px 20px -25px' }}></div>
      
      <h3 style={{ color: '#E53935', margin: '0 0 10px 0' }}>{nome}</h3>
      <p style={{ color: '#6D4C41', fontStyle: 'italic', fontSize: '0.9rem' }}>{descricao}</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px dashed #FFD600', paddingTop: '15px', marginTop: '15px' }}>
        <span style={{ fontWeight: '900', fontSize: '1.4rem' }}>R$ {preco.toFixed(2)}</span>
      </div>

      {/* 6. Botão que chama a função do pai ao clicar */}
      <button 
        className="btn-adicionar" 
        onClick={funcaoAdicionar}
      >
        Adicionar ao Pedido
      </button>
    </div>
  );
}

export default ItemCardapio;