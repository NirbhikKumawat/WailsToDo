import {useEffect, useState} from 'react';
import './App.css';
import {AddTodo,GetTodos,RemoveTodo} from "../wailsjs/go/main/App.js";

function App() {
    const [todos,setTodos] = useState([]);
    const [input,setInput] = useState("")


    useEffect(()=>{
        refreshTodos();
    },[])

    const refreshTodos = async () => {
        const result = await GetTodos();
        setTodos(result||[])
    }
    const addTodo = async () =>{
        if(input.trim()==="")return;
        await AddTodo(input.trim());
        setInput("")
        await refreshTodos()
    }

    const removeTodo = async (index)=>{
        await RemoveTodo(index)
        await refreshTodos()
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
