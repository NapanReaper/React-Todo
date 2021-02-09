import Todo from "./Todo"

const TodoList = ({ todos, setTodos }) => {
 const handleDelete = (id) => {
  setTodos(todos.filter(todo => todo.id !== id))
 }
 const handleComplete = (id) => {
  setTodos(todos.map(todo => {
   if (todo.id === id) {
    return { ...todo, completed: !todo.completed }
   }
   return todo
  }))
 }
 return (
  <div className='todo-container'>
   <ul className="todo-list">
    {todos.map(todo => (
     <Todo todo={todo} key={todo.id} handleComplete={handleComplete} handleDelete={handleDelete} />
    ))}
   </ul>
  </div>
 )
}

export default TodoList
