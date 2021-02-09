import { useState } from "react"

const Form = ({ todos, setTodos, setFilterValue }) => {
 const [inputText, setInputText] = useState('')
 const handleInputChange = (e) => {
  setInputText(e.target.value)
 }
 const handleSubmit = (e) => {
  e.preventDefault();
  setTodos([...todos, {
   text: inputText,
   completed: false,
   id: Date.now()
  }]);
  setInputText('')
 }
 return (
  <form onSubmit={handleSubmit}>
   <input type="text" className='todo-list' value={inputText} onChange={handleInputChange} />
   <button className='todo-button' type='submit'>
    <i className="fas fa-plus-square"></i>
   </button>
   <div className="select">
    <select name="todos" className="filter-todo" onChange={(e) => setFilterValue(e.target.value)}>
     <option value="all">All</option>
     <option value="completed">Completed</option>
     <option value="uncompleted">Uncompleted</option>
    </select>
   </div>
  </form>
 )
}

export default Form
