import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setEmail,
  setPassword,
  setMessage,
  resetForm,
} from "../../features/auth/authSlice";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fievjcylfyyuhyofzevu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpZXZqY3lsZnl5dWh5b2Z6ZXZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNDc2MTAsImV4cCI6MjA1MTcyMzYxMH0.S6m6O2h6__4nMl1NJmxVaNjA9IoakiwskXCNwtQGlxw";
const supabase = createClient(supabaseUrl, supabaseKey);

const generateToken = () => {
  return Math.random().toString(36).substr(2);
};

const Login = () => {
  const dispatch = useDispatch();
  const { email, password, message } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .eq("password", password);

      if (error || users.length === 0) {
        dispatch(setMessage("Error logging in"));
        console.error("Login error:", error ? error.message : "User not found");
      } else {
        const token = generateToken(); // Generate a token
        localStorage.setItem("token", token); // Store the token in localStorage
        dispatch(resetForm());
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch(setMessage("Error logging in"));
      console.error("Login error:", error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
      {message && <p className="mb-4 text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0E43A0] hover:bg-[#0E43A0]/80 hover:border-white hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0E43A0]"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
