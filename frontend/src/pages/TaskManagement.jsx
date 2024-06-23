import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Task from "../components/Task";
import GetAllTask from '../components/GetAllTask'
import { useNavigate } from "react-router-dom";

export default function TaskManagement() {
  const navigate=useNavigate();
  const userData=JSON.parse(localStorage.getItem("task-app"));
  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  function handleClick(){
     localStorage.clear();
     navigate('/login');
  }
  useEffect(()=>{
    // console.log(userData)
    if (!userData) {
      navigate('/login');
    }
  },[])
  return (
   userData?(<>
       <h1>Your Tasks</h1>
       <div>
        <button className="logoutBtn" onClick={handleClick} >Logout</button>
       </div>
        <Task />
        <GetAllTask/>
      <ToastContainer />
    </>):(
      null
    )
  );
}
