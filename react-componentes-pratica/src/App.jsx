import './App.css'
import Titulo from './Titulo'
import Aluno from './Aluno'
import Nota from './Nota'
import Produto from './Produto'

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      
      <Titulo />

      <h2>Alunos - Reutilizando componente</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Aluno nome="Carlos" turma="Desenvolvimento de Sistemas" />
        <Aluno nome="Ana" turma="DS" />
        <Aluno nome="Pedro" turma="DS" />
      </div>

      <h2 style={{ marginTop: '30px' }}>Notas</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Nota disciplina="React" nota={8.5} />
        <Nota disciplina="Banco de Dados" nota={9.0} />
        <Nota disciplina="Lógica" nota={7.5} />
      </div>

      <h2 style={{ marginTop: '30px' }}>Produtos</h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <Produto nome="Teclado Mecânico" descricao="Teclado com iluminação RGB" preco={250} disponivel={true} />
        <Produto nome="Mouse sem fio" descricao="Mouse recarregável" preco={120} disponivel={true} />
        <Produto nome="Monitor 24'" descricao="Monitor Full HD 144Hz" preco={890} disponivel={false} />
        <Produto nome="Headset Gamer" descricao="Headset com microfone" preco={199} disponivel={true} />
      </div>

    </div>
  )
}

export default App