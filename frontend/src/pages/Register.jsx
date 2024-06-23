import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  function handleChange(e) {
    const {name , value}=e.target;
    // console.log(name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleValidation(){
    if(formData.username==""){
        toast.error("username is required", toastOptions);

    }
    else if(formData.email==""){
        toast.error("email is required", toastOptions);

    }
    else if(formData.password==""){
        toast.error("password is required", toastOptions);
    }
    else if(formData.confirmPassword==""){
        toast.error("confirm password is required", toastOptions);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
     handleValidation();
     console.log("hello")
  }
  return (
    <>
      <form className="todoForm" onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <div>
          <div className="formItem">
            <label htmlFor="username">
              <span>Username : </span>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="enter your name"
                onChange={(e) => handleChange(e)}
                value={formData.username}
                autoComplete="username"
              />
            </label>
          </div>
          <div className="formItem">
            <label htmlFor="email">
              <span>Email : </span>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="enter your email"
                onChange={(e) => handleChange(e)}
                value={formData.email}
                autoComplete="email"
              />
            </label>
          </div>
          <div className="formItem">
            <label htmlFor="password">
              <span>Password : </span>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="enter your password"
                onChange={(e) => handleChange(e)}
                value={formData.password}
                autoComplete="off"
              />
            </label>
          </div>
          <div className="formItem">
            <label htmlFor="confirmPassword">
              <span>Confirm Password : </span>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="enter your confirmed password"
                onChange={(e) => handleChange(e)}
                value={formData.confirmPassword}
                autoComplete="on"
              />
            </label>
          </div>
          <button type="submit" id="button">
            Submit
          </button>
        </div>
      </form>
      <ToastContainer/>
    </>
  );
}

export default Register;
