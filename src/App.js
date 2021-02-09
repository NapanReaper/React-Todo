import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([])
  const [filterValue, setFilterValue] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  //Run once when the app starts
  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [filterValue, todos])

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', [])
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }


  const filterHandler = () => {
    switch (filterValue) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Todo list</h1>
      </header>
      <Form setTodos={setTodos} todos={todos} setFilterValue={setFilterValue} />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
