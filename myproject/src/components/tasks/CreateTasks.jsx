import { useState } from "react";

function CreateTasks({addnewtask}){
const [text,setText]=useState("")
return(

    <div>
        <input type="text" placeholder="type your tasks"  value={text} onChange={(event)=>{
 setText(event.target.value)



        }}/>
        <button onClick={()=>{


   if(text){
    addnewtask(text)
    setText('')
   }else{
    alert("please fill this")
   }
          
        }}>Create tasks</button>

        <p>{text}</p>
    </div>

    
)
}

export default CreateTasks;