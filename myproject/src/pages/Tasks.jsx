import { useState } from "react";
import Layout from "../components/layout/Layout";
import CreateTasks from "../components/tasks/CreateTasks";
import shortid from "shortid";
import ShowTask from "../components/tasks/ShowTask";

function Tasks(){
const [tasks,settasks]=useState([])
const [visibility,setVisibility]=useState('all')


const addnewtask=(text)=>{
const task={
    text,
    isCompleted:false,
    createAt: new Date(),
    id:shortid.generate()

}
settasks([task,...tasks])
}

    return(

<>
<Layout>
    <h1>this is Tasks</h1>
    <CreateTasks addnewtask={addnewtask}></CreateTasks>
    <ShowTask tasks={tasks}></ShowTask>
</Layout>
</>
    )     
}

export default Tasks;