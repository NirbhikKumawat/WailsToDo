import {useState} from 'react';
import './App.css';

function App() {
    const [todos,setTodos] = useState([]);
    const [input,setInput] = useState("")

    const addTodo = () =>{
        if(input.trim()==="")return;
        setTodos([...todos,input.trim()])
        setInput("")
    }

    const removeTodo = (index)=>{
        setTodos(todos.filter((_,i)=>i !==index));
    };

    return(
        <div className="app">
            <h1>My To-Do List</h1>
            <div className="input-area">
                <input type="text" placeholder="Add a new task" value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button onClick={addTodo}>Add</button>
            </div>

            <ul>
                {todos.map((todo,i)=>(
                    <li key={i}>
                        {todo}
                        <button onClick={()=> removeTodo(i)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
