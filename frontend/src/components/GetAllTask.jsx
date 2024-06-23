import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getTask, taskUpdate, taskDelete } from '../APIRoutes/api.routes';
import axios from 'axios';
import TaskModal from './UpdateTaskModal'; // Import the modal component

function GetAllTask() {
  const user = JSON.parse(localStorage.getItem("task-app"));
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({
    _id: "",
    title: "",
    description: "",
    dueDate: ""
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    async function fetch() {
      try {
        const res = await axios.post(getTask, {
          userId: user._id,
        });
        setTasks(res.data.tasks);
      } catch (err) {
        toast.error(err.message, toastOptions);
      }
    }
    fetch();
  }, []);

  const handleUpdate = (task) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentTask(prevTask => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmitModal = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(taskUpdate,{
        currentTask
      });
      // console.log(res)
      if (res.data.success) {
        setIsModalOpen(false);
        alert("succesfully updated")

        // reload option
        setTasks(tasks.map(task => (task._id === currentTask._id ? currentTask : task)));
      }
    } catch (err) {
      toast.error(err.message, toastOptions);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      const response = await axios.post(taskDelete, { taskId });
      if (response.data.success) {
        alert("succesfully deleted");
        setTasks(tasks.filter(task => task._id !== taskId));
      }
    } catch (error) {
      toast.error("Error while deleting the task" || error.msg, toastOptions);
    }
  };
  const calculateDaysLeft = (dueDate) => {

    const due = new Date(dueDate);
    const today = new Date();
    const timeDiff = due - today;
    // console.log(timeDiff)
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft; // Ensure it doesn't show negative days
  };
  return (
    <>
      <h1 className='heading'>Your Tasks : </h1>
      {tasks.map((task, index) => (
        <div key={index}  className={`task ${calculateDaysLeft(task.dueDate) < 0 ? 'disabled' : ''}`} >
          <h3><span>Title : </span>{task.title}</h3>
          <p><span>description: </span>{task.description}</p>
          <p> <span>Days left : </span> {calculateDaysLeft(task.dueDate)}</p>
          <button onClick={() => handleUpdate(task)} disabled={calculateDaysLeft(task.dueDate) < 0} className={`${calculateDaysLeft(task.dueDate) < 0 ? 'cursorDisable' : ''}`}  >Update</button>
          <button onClick={() => handleDelete(task._id)}>Delete</button>
        </div>
      ))}


      <TaskModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        task={currentTask}
        handleChange={handleChange}
        handleSubmitModal={handleSubmitModal}
      />
      <ToastContainer />
    </>
  );
}

export default GetAllTask;
