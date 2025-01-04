import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ToggleButton from "../components/Auth/ToggleButton";
import Logo from "../assets/CVLogoWhiteGlow.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        // "https://auth-project-with-mysql.onrender.com/login",
        "http://localhost:3000/login",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      setMessage("Error logging in");
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col px-2 items-center justify-center bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700">
      <div className="bg-black/40 p-8 rounded-lg shadow-md w-full max-w-md mx-2">
        
      </div>
    </div>
  );
}

export default Login;
