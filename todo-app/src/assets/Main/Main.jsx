import { useState } from "react";
import './Main.css'
import bin from '/bin.png'

function Main(){
    const [list,setList] = useState([]);
    const [input,setInput] = useState('');
    function addTask(){
        if(input!=""){
            setList([...list,{id:Date.now(),text:input}])
            setInput("");
        }
        
    }
    function handlKey(event){
        if(event.key==='Enter'){
            addTask();
        }
    }
    function handleInput(event){
        setInput(event.target.value);
    }
    function handleReset(){
        setList([]);
        setInput('');
    }
    function handleDelete(id){
        setList(list.filter((todo)=> todo.id!=id)); 
    }
    return(
        <>
            <input onKeyDown={handlKey} value={input} onChange={handleInput} type="text" />
            <button  onClick={addTask}>Add</button>
            <button onClick={handleReset} >Reset</button>
            <ol>
                {
                    list.map((todo,index)=><li key={index}>{todo.text}
                    <img src={bin} onClick={()=>handleDelete(todo.id)} alt="" />
                    </li>)
                }
            </ol>
        </>
    )
}

export default Main;