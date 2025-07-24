import { useState } from 'react'

import './app.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

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
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
    <TodoForm/>
  </div>
 );
}
  

export default App;
