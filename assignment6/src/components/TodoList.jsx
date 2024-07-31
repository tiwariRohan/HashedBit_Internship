import React,{useState} from 'react';
import './TodoList.css';
function TodoList(){
    const[todos,setTodos]=useState([]);
    const[input,setInput]=useState('');
    
    
    const handleAddTodo=()=>{
        if(input.trim()){
            setTodos([...todos,input]);
            setInput('');
        }
    };
    const handleRemoveTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
      };

    return (
        <div className="todolist-container">
        <h1 className="todolist-heading">To-Do List</h1>
        <div className="todolist-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul className="todolist-items">
          {todos.map((todo, index) => (
            <li key={index} className="todolist-item">
              <span>{todo}</span>
              <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default TodoList;