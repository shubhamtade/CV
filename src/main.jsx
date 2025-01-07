import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard.jsx";
import Auth from "./pages/Auth.jsx";

// Testing Routes
import TestDashboard from "./Test/Dashboard.jsx";
import ServerTestRoute from "./pages/serverApp.jsx";
import ServerRegister from "./pages/Register.jsx";
import ServerShowList from "./pages/ShowList.jsx";

// Reducs Store
import store from "./store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        // Testing
        <Route path="/test" element={<TestDashboard />} />
        <Route path="/server" element={<ServerTestRoute />} />
        <Route path="/server/register" element={<ServerRegister />} />
        <Route path="/server/show-list" element={<ServerShowList />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
