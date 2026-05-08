import React from 'react'

function ItemCardapio({ nome, preco, descricao, aoAdicionar }) {
  const cores = {
    vermelhoVibrante: "#E53935",
    laranjaDestaque: "#FB8C00",
    amareloOuro: "#FFD600",
    branco: "#FFFFFF",
    texto: "#3E2723"
  };

  return (
    <div className="item-cardapio" style={{ 
      backgroundColor: cores.branco, 
      borderRadius: '20px', 
      overflow: 'hidden',
      boxShadow: '0 6px 15px rgba(0,0,0,0.06)',
      border: `2px solid ${cores.amareloOuro}`,
      position: 'relative'
    }}>
      <div style={{ backgroundColor: cores.laranjaDestaque, height: '10px' }}></div>
      
      <div style={{ padding: '25px' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.4rem', color: cores.vermelhoVibrante, fontWeight: '800' }}>
          {nome}
        </h3>
        
        <p style={{ margin: '0 0 25px 0', color: '#6D4C41', fontSize: '1rem', fontStyle: 'italic' }}>
          {descricao}
        </p>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderTop: `2px dashed ${cores.amareloOuro}`,
          paddingTop: '20px'
        }}>
          <span style={{ fontWeight: 'bold', color: cores.laranjaDestaque }}>Por</span>
          <span style={{ color: cores.texto, fontWeight: '900', fontSize: '1.8rem' }}>
            R$ {preco.toFixed(2)}
          </span>
        </div>

        {/* PASSO 3: Botão de Adicionar */}
        <button className="btn-adicionar" onClick={aoAdicionar}>
          Adicionar ao pedido
        </button>
      </div>
    </div>
  );
}

export default ItemCardapio;