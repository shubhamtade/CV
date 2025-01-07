import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    password: "",
    message: "",
    token: null, // Add token to the initial state
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload; // Add setToken action
    },
    resetForm: (state) => {
      state.email = "";
      state.password = "";
      state.message = "";
      state.token = null; // Reset the token
    },
  },
});

export const { setEmail, setPassword, setMessage, setToken, resetForm } =
  authSlice.actions;

export default authSlice.reducer;
