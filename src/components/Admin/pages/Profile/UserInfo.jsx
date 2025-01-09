import * as React from "react";
import Box from "@mui/material/Box";

// Social Icon
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const UserInfo = ({ name, email, socialLinks }) => {
  return (
    <div className="flex flex-col items-center text-center gap-5 p-6 bg-white shadow-lg rounded-lg border">
      <h1 className="md:text-lg text-md text-gray-500 ">
        I'm a versatile Frontend Developer with six years of freelance
        experience in web development. Proficient in JavaScript, Node.js, MySQL,
        and MongoDB, I excel in Requirement Gathering, Digital Marketing,
        Graphic Designing, and Project Management. :)
      </h1>
      <div className="">
        <h2 className="md:text-xl text-xs text-gray-700 ">
          Shubham Sunil Tade
        </h2>
        <p className="md:text-xl text-xs text-gray-600">+91 9822147873</p>
        <p className="md:text-xl text-xs text-gray-600">
          shubham.tade@gmail.com
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <Link to={"https://www.facebook.com/profile.php?id=100005479380963"}>
          <FacebookIcon className="text-blue-600 w-6 h-6" />
        </Link>
        <Link to={"https://www.instagram.com/shubham_tade_official/"}>
          <InstagramIcon className="text-pink-500 w-6 h-6" />
        </Link>
        <Link to={"https://www.linkedin.com/in/shubham-tade"}>
          <LinkedInIcon className="text-blue-700 w-6 h-6" />
        </Link>
        <Link to={"https://github.com/shubhamtade"}>
          <GitHubIcon className="text-gray-800 w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
