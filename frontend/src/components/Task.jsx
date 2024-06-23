import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setTask } from "../APIRoutes/api.routes";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Task() {
  const navigate=useNavigate();
  const userData=localStorage.getItem("task-app");
  if(!userData){
    navigate("/")
  }
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate:'',
    userId: JSON.parse(localStorage.getItem("task-app"))?._id || "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  function handleChange(e) {
    const { name, value } = e.target;
    const formattedValue =
      name === "dueDate" ? new Date(value).toISOString().substr(0, 10) : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: formattedValue,
    }));
  }

  function handleValidation() {
    if (formData.title == "") {
      toast.error("email is required", toastOptions);
      return false;
    } else if (formData.description == "") {
      toast.error("password is required", toastOptions);
      return false;
    }
    return true;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let validation = handleValidation();
    if (validation) {
      try {
        const res = await axios.post(setTask, {
          formData,
        });
        // console.log(res.data.success)
        if (res.data.success) {
          window.location.reload();
        }
      } catch (err) {
        toast.error(err.message, toastOptions);
      }
    }
  }
  return (
    <>
      <form className="taskForm" onSubmit={handleSubmit}>
        <div className="taskTitle">
        Title :  <label htmlFor="title">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="enter the title"
              onChange={(e) => handleChange(e)}
              value={formData.title}
              autoComplete="on"
            />
          </label>
        </div>
        <div className="taskDescription">
        Description : <label htmlFor="description">
            <textarea
              id="description"
              name="description"
              placeholder="enter the description"
              onChange={(e) => handleChange(e)}
              value={formData.description}
              autoComplete="on"
            />
          </label>
        </div>
        <div className="taskDueDate">
        Due Date : <label htmlFor="date">
          <input
            type="date"
            id="date"
            name="dueDate" // Ensure this matches the 'name' used in handleChange
            value={formData.dueDate}
            onChange={handleChange}
            autoComplete="on"
          />
          </label>
        </div>

        <button className="taskCreateButton" type="submit">create a new task</button>
      </form>
    </>
  );
}

export default Task;
