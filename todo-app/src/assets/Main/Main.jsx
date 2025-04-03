import { useState } from "react";

    

function Main(){
    const [list,setList] = useState([]);
    const [input,setInput] = useState('');
    function addTask(){
        setList([...list, input]);
        setInput('');
    }
    function handleInput(event){
        setInput(event.target.value);
    }
    return(
        <>
            <input onChange={handleInput} type="text" />
            <button onClick={addTask}>Add</button>
            <ol>
                {
                    list.map((todo)=><li>{todo}</li>)
                }
            </ol>
        </>
    )
}

export default Main;