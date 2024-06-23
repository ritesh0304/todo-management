import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Task from "../components/Task";
import GetAllTask from '../components/GetAllTask'

export default function TaskManagement() {
  
  const userData=JSON.parse(localStorage.getItem("task-app"));
  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  return (
    <>
       <h1>Your Tasks</h1>
        <Task />
        <GetAllTask/>
      <ToastContainer />
    </>
  );
}
