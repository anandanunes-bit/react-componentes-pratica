function Aluno({ nome, turma }) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '8px' }}>
        <h3>{nome}</h3>
        <p>Turma: {turma}</p>
      </div>
    )
  }
  
  export default Aluno