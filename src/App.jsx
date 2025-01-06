import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills.jsx";
import Project from "./components/Project";
import Jobs from "./components/Jobs.jsx";
import GitHub from "./components/GitHub.jsx";
import SplashCursor from "./components/Animation/Cursor.jsx";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [navBackground, setNavBackground] = useState("");

  // Handle scroll event to set navigation background
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setNavBackground(
          "bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700 shadow-md group text-white"
        );
      } else {
        setNavBackground("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        theme === "light" ? "text-[#0E43A0]" : "text-white"
      } duration-100 mx-auto relative`}
    >
      {/* Optional Splash Cursor */}
      {/* <SplashCursor /> */}

      {/* Navigation Bar */}
      <div
        className={`fixed w-full z-50 ${
          navBackground ? navBackground : "bg-transparent"
        }`}
      >
        <NavBar
          theme={theme}
          setTheme={setTheme}
          navBackground={navBackground}
        />
      </div>

      {/* Hero Section */}
      <Hero theme={theme} />

      {/* Skills Section */}
      <Skills bgColor="bg-slate-100" theme={theme} />

      {/* Projects Section */}
      <Project theme={theme} />

      {/* Jobs Section */}
      <Jobs theme={theme} bgColor="bg-slate-100" />

      {/* GitHub Section */}
      <GitHub theme={theme} />
    </div>
  );
};

export default App;
