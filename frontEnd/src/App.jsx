import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills.jsx";
import Project from "./components/Project";
import Jobs from "./components/Jobs";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={` ${
        theme === "light" ? "text-[#0E43A0]" : "text-white"
      } duration-100  mx-auto`}
    >
      <NavBar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <Skills className="bg-slate-100" theme={theme} />
      <Project bgColor="bg-[#bcd5ff]" theme={theme} />
      <Jobs theme={theme} />
    </div>
  );
};

export default App;
