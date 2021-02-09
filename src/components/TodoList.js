import Todo from "./Todo"

const TodoList = ({ todos, setTodos }) => {
 return (
  <div className='todo-container'>
   <ul className="todo-list">
    <Todo />
   </ul>
  </div>
 )
}

export default TodoList
