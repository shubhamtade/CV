import React from "react";
import Switch from "@mui/material/Switch";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";

const Auth = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700 overflow-hidden">
      <div className="w-full max-w-md p-8 bg-black/40 rounded-lg shadow-md">
        {checked ? <Register /> : <Login />}
      </div>
      <div className="flex items-center justify-center mt-4">
        <span className="mr-2 text-white">Login</span>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <span className="ml-2 text-white">Register</span>
      </div>
    </div>
  );
};

export default Auth;
