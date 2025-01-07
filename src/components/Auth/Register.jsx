import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setEmail,
  setPassword,
  setMessage,
  resetForm,
} from "../../features/user/userSlice";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fievjcylfyyuhyofzevu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpZXZqY3lsZnl5dWh5b2Z6ZXZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNDc2MTAsImV4cCI6MjA1MTcyMzYxMH0.S6m6O2h6__4nMl1NJmxVaNjA9IoakiwskXCNwtQGlxw";

const supabase = createClient(supabaseUrl, supabaseKey);

const Register = ({ setChecked }) => {
  const dispatch = useDispatch();
  const { name, email, password, message } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if user with the same email already exists
      const { data: existingUsers, error: fetchError } = await supabase
        .from("users")
        .select("*")
        .eq("email", email);

      if (fetchError) {
        dispatch(setMessage("Error fetching user data"));
        console.log(fetchError);
        return;
      }

      if (existingUsers.length > 0) {
        // User with this email already exists
        dispatch(setMessage("User is already present"));
      } else {
        // Proceed with inserting new user data
        const id = Date.now().toString();
        const { data, error } = await supabase
          .from("users")
          .insert([{ id, name, email, password }])
          .select();

        if (error) {
          dispatch(setMessage("Error registering user"));
          console.log(error);
        } else {
          dispatch(resetForm());
          setChecked(false);
        }
      }
    } catch (error) {
      dispatch(setMessage("Error registering user"));
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Register
      </h2>
      {message && <p className="mb-4 text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
