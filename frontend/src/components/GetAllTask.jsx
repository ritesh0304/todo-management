import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getTask, taskUpdate, taskDelete } from '../APIRoutes/api.routes';
import axios from 'axios';

function GetAllTask() {
  const user=JSON.parse(localStorage.getItem("task-app"));
  const [tasks,setTasks]=useState([]);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(()=>{
    async function fetch(){
      try {
        const res = await axios.post(getTask, {
           userId:user._id,
        });
          setTasks(res.data.tasks)
          // console.log(res)
      } catch (err) {
        toast.error(err.message, toastOptions);
      }
    }
    fetch();

  },[])
  function handleUpdate(e,task_id){

  }
  async function handleDelete(e,taskId){
       try {
        console.log(taskId)
        console.log(taskDelete)
          const response=await axios.post(taskDelete,{
            taskId
          })
          console.log(response)
          if(response.data.success){
            toast.success("task deleted successfully",toastOptions);
            window.location.reload();
          }
       } catch (error) {
        toast.error("error while deleting the task"|| error.msg, toastOptions)
       }
  }
  return (
   <>
   <h1>hello</h1>
      {
        tasks.map((task,index)=>{
          return <div key={index} className="task">
            <h1>{task.title}</h1>
             <p>{task.description}</p>
             <p>{task.dueDate}</p>
             <button onClick={(e)=>handleUpdate(e,task._id)}>Update</button>
             <button onClick={(e)=>handleDelete(e,task._id)}>Delete</button>
          </div>
          
        })
      }
   </>
  )
}

export default GetAllTask