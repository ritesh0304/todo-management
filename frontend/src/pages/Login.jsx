import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  
  function validateForm(){
  toast.error("Email and Password is required.", toastOptions);
  }
  return <div>Login</div>;
}

export default Login;
