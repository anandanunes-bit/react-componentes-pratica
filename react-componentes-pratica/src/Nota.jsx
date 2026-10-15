function Nota({ disciplina, nota }) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '8px' }}>
        <p><strong>Disciplina:</strong> {disciplina}</p>
        <p><strong>Nota:</strong> {nota}</p>
      </div>
    )
  }
  
  export default Nota