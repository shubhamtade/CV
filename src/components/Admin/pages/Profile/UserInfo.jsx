import * as React from "react";
import Box from "@mui/material/Box";

// Social Icon
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const UserInfo = ({ name, email, socialLinks }) => {
  return (
    <div className="flex flex-col items-center text-center gap-5 p-6 bg-white shadow-lg rounded-lg border">
      <h1 className="text-2xl font-bold text-gray-800">
        You are looking User Details
      </h1>
      <h2 className="text-xl text-gray-700">Shubham Sunil Tade</h2>
      <p className="text-gray-600">+91 9822147873</p>
      <p className="text-gray-600">shubham.tade@gmail.com</p>
      <div className="flex justify-center gap-4 mt-4">
        <FacebookIcon className="text-blue-600 w-6 h-6" />
        <InstagramIcon className="text-pink-500 w-6 h-6" />
        <LinkedInIcon className="text-blue-700 w-6 h-6" />
        <GitHubIcon className="text-gray-800 w-6 h-6" />
      </div>
    </div>
  );
};

export default UserInfo;
