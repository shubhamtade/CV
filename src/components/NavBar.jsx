import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import LogoBlack from "../assets/CVLogoDark.png";
import LogoIconBlack from "../assets/CVLogoIconDark.png";
import LogoWhite from "../assets/CVLogoWhiteGlow.png";
import LogoIconWhite from "../assets/CVLogoIconN.png";

/**
 * NavBar component renders the navigation bar with theme toggle and navigation links.
 *
 * @param {Object} props - The component props.
 * @param {string} props.theme - The current theme, either "light" or "dark".
 * @param {Function} props.setTheme - Function to set the theme.
 * @param {boolean} props.navBackground - Boolean indicating if the navigation background is present.
 *
 * @returns {JSX.Element} The rendered NavBar component.
 */
const NavBar = ({ theme, setTheme, navBackground }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle theme change
  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.querySelector(".theme-controller").value = newTheme;
  };

  // Set initial theme on component mount
  useEffect(() => {
    const currentTheme = document.querySelector(".theme-controller").value;
    setTheme(currentTheme);
  }, [setTheme]);

  return (
    <nav
      className={`z-40 h-[60px] md:h-[80px] transition duration-300 w-[90%] md:max-w-[1050px] mx-auto flex`}
    >
      <div className="flex justify-between w-full items-center py-2 md:py-4">
        {/* LOGO Section */}
        <div className="w-full flex gap-2 md:gap-4 items-center md:mx-0">
          <a href="#top" className="w-[60px] text-white md:hidden">
            <img
              src={
                theme === "light"
                  ? navBackground
                    ? LogoIconWhite
                    : LogoIconBlack
                  : LogoIconWhite
              }
              className="duration-100"
              alt="Logo Icon"
            />
          </a>
          {navBackground && (
            <p className="font-bold text-white md:hidden delay-3000">
              Shubham Sunil Tade
            </p>
          )}
          <a href="#top" className="hidden w-[80%] text-white md:block">
            <img
              src={
                theme === "light"
                  ? navBackground
                    ? LogoWhite
                    : LogoBlack
                  : LogoWhite
              }
              className="duration-100"
              alt="Logo"
            />
          </a>
        </div>

        {/* NAVIGATION Section */}
        <div className="w-max h-full flex items-center">
          <ul className="w-max hidden md:flex items-center gap-12">
            <li className="h-full font-rubik font-bold cursor-pointer">
              <a
                href="#skills"
                className="h-full flex items-center hover:no-underline"
              >
                Skills Acquired
              </a>
            </li>
            <li className="h-full font-rubik font-bold cursor-pointer">
              <a
                href="#projects"
                className="h-full flex items-center hover:no-underline"
              >
                My Projects
              </a>
            </li>
            <li className="h-full font-rubik font-bold cursor-pointer">
              <a
                href="#jobs"
                className="h-full flex items-center hover:no-underline"
              >
                Job Experiences
              </a>
            </li>
            <li className="h-full font-rubik font-bold cursor-pointer border-b-4 border-[#ffba4a] hover:border-white hover:duration-300">
              <a
                className="h-full flex items-center"
                onClick={() => navigate("/auth")}
              >
                Signin / Signup
              </a>
            </li>
          </ul>
          <div className="pl-6 items-center justify-center md:justify-start gap-6 text-xl hidden md:flex ml-6 border-portfolio-highlighter border-l-[1px] border-[#0E43A0]">
            <a
              href="https://www.linkedin.com/in/shubham-tade"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/shubhamtade"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110"
            >
              <GitHubIcon />
            </a>
            <div className="flex items-center justify-center w-full h-full hidden md:block">
              <div className="flex items-center justify-center w-full h-full">
                <label
                  className={`swap swap-rotate ${theme === "dark" ? "animate-spin-slow" : ""}`}
                >
                  <input
                    type="checkbox"
                    className="theme-controller"
                    value={theme}
                    onChange={handleThemeChange}
                  />
                  {/* sun icon */}
                  <svg
                    className="swap-on h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                  {/* moon icon */}
                  <svg
                    className="swap-off h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden text-xl flex items-center mr-3">
          <label
            className={`swap swap-rotate ${theme === "dark" ? "animate-spin-slow" : ""}`}
          >
            <input
              type="checkbox"
              className="theme-controller"
              value={theme}
              onChange={handleThemeChange}
            />
            {/* sun icon */}
            <svg
              className="swap-on h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* moon icon */}
            <svg
              className="swap-off h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        {/* MOBILE MENU ICON */}
        <div className="md:hidden flex items-center">
          {isMenuOpen ? null : (
            <MenuIcon onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full text-white bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700 flex flex-col items-center justify-center z-50">
          <CloseIcon
            onClick={toggleMenu}
            className="absolute top-10 left-10 cursor-pointer"
          />
          <div className="flex flex-col items-left gap-2 absolute top-32 left-20">
            <a
              href="#"
              className="text-2xl mb-4 px-5 py-2 rounded-full"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#skills"
              className="text-2xl mb-4 px-5 py-2 rounded-full"
              onClick={toggleMenu}
            >
              Skills Acquired
            </a>
            <a
              href="#projects"
              className="text-2xl mb-4 px-5 py-2 rounded-full"
              onClick={toggleMenu}
            >
              My Projects
            </a>
            <a
              href="#jobs"
              className="text-2xl mb-4 px-5 py-2 rounded-full"
              onClick={toggleMenu}
            >
              Job Experiences
            </a>
            <a
              className="text-2xl mb-4 bg-[#4883e9] px-5 py-2 rounded-full"
              onClick={() => navigate("/auth")}
            >
              Signin / Signup
            </a>
          </div>
          <div className="absolute bottom-10 left-10">
            <Link to={"https://wa.me/919822147873"}>
              <WhatsAppIcon className="mr-3" />
            </Link>
            <Link to={"mailto:shubham.tade@gmail.com"}>
              <EmailIcon className="mr-3" />
            </Link>
          </div>
          <div className="absolute bottom-10 right-10">
            <Link to={"https://github.com/shubhamtade"}>
              <GitHubIcon className="mr-3" />
            </Link>
            <Link to={"https://www.linkedin.com/in/shubham-tade"}>
              <LinkedInIcon className="mr-3" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
