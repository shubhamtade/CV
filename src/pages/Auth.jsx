// filepath: /C:/Users/Shubham Tade/OneDrive/Desktop/Resume Website/frontEnd/src/pages/Auth.jsx
import React from "react";
import Switch from "@mui/material/Switch";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
// import "../custom.css"; // Import the custom CSS file

const Auth = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="auth-container">
      <div
        className="back-button"
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowBackIcon className="animate-bounceLeft" />
      </div>
      <span className="home-tooltip">Home</span>

      <div className="auth-card">
        {checked ? (
          <Register setChecked={setChecked} />
        ) : (
          <Login setChecked={setChecked} />
        )}
      </div>
      <div className="switch-container">
        <span className="switch-label mr-2">Login</span>
        <Switch
          checked={checked}
          onChange={handleChange}
          className="switch"
          inputProps={{ "aria-label": "controlled" }}
        />
        <span className="switch-label ml-2">Register</span>
      </div>
    </div>
  );
};

export default Auth;
