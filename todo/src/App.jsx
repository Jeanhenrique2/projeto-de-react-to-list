import { useState } from 'react'

import './app.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      iscompleted: false,
    },
    {
     id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      iscompleted: false, 
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      iscompleted: false, 
    },
  ])
 
  return ( 
  <div className="app"> 
<h1>Lista de tarefas</h1>
<div className="todo-list">
{todos.map((todo) =>(
  <div className="todo">
    <div className="content">
<p>{todo.text}</p>
<p className="category">({todo.category})</p>
</div>
<div>
  <button>Completar</button>
  <button>Excluir</button>
</div>
 </div>
))}
</div>
  </div>
  )
  }

export default App
