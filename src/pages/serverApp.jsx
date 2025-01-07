import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Register from "./Register";
import ShowList from "./ShowList";

const serverApp = () => {
  return (
    <div className="bg-slate-200 h-screen w-full flex">
      <aside className="flex flex-col w-1/4 pl-10 pt-10 bg-red-500">
        <Link
          to="/server/register"
          className="mb-1 hover:bg-slate-50 p-5 duration-300"
        >
          Register
        </Link>
        <Link
          to="/server/show-list"
          className="mb-1 hover:bg-slate-50 p-5 duration-300"
        >
          Show List
        </Link>
      </aside>

      <main className="flex-1 flex items-center justify-center">
        <Routes>
          <Route path="/server/register" element={<Register />} />
          <Route path="/server/show-list" element={<ShowList />} />
          <Route
            path="/servertest"
            element={
              <div className="text-center">
                Welcome! Please select an option from the sidebar.
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default serverApp;
