import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getTask } from '../APIRoutes/api.routes';
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
          console.log(res)
      } catch (err) {
        toast.error(err.message, toastOptions);
      }
    }
    fetch();

  },[])
  
  return (
   <>
   <h1>hello</h1>
      {
        tasks.map((task,index)=>{
          return <div key={index} className="task">
            <h1>{task.title}</h1>
             <p>{task.description}</p>
             <p>{task.dueDate}</p>
          </div>
          
        })
      }
   </>
  )
}

export default GetAllTask