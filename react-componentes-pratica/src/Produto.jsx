function Produto({ nome, descricao, preco, disponivel }) {
    return (
      <div style={{ 
        border: '1px solid #ddd', 
        padding: '16px', 
        borderRadius: '10px', 
        width: '220px',
        margin: '10px'
      }}>
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <p><strong>R$ {preco}</strong></p>
        <p style={{ color: disponivel ? 'green' : 'red' }}>
          {disponivel ? 'Disponível' : 'Indisponível'}
        </p>
        <button>Comprar</button>
      </div>
    )
  }
  
  export default Produto