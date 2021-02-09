import React from 'react'

const Todo = () => {
 return (
  <div className='todo'>
   <li className="todo-item">
    Test
   </li>
   <button className="complete-btn">
    <i className="fas fa-check"></i>
   </button>
   <button className='trash-btn'>
    <i i className="fas fa-trash"></i>
   </button>
  </div>
 )
}

export default Todo