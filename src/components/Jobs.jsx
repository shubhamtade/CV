import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

export default function jobs({ bgColor, theme }) {
  const jobExperiences = [
    {
      company: "Crio.Do",
      location: "Remote",
      role: "Frontend Development",
      industry: "Software Product",
      responsibilities: [
        "Participating in code reviews and providing constructive feedback to peers, fostering a culture of continuous improvement and knowledge sharing within the team.",
        "Developing and implementing frontend solutions using React, JavaScript, HTML, and CSS, while enhancing skills for a transition to full-stack development.",
        "Contributing to project planning and execution to ensure timely delivery of high-quality solutions that meet client expectations.",
      ],
      skills: ["React", "Front end", "JavaScript", "HTML/CSS", "NodeJs"],
      duration: "Jun 2024 - Present",
      type: "Full-time",
    },
    {
      company: "Love Akot Android Application",
      role: "Backend Developer Intern",
      industry: "Advertising & Marketing",
      responsibilities: [
        "Worked on the server-side development using NodeJS, Express, and Firebase Database.",
        "Developed and implemented Back-end APIs to support application functionality.",
      ],
      skills: ["Backend development", "Node.js"],
      duration: "Jan 2020 - Apr 2023",
      type: "Internship",
    },
    {
      company: "Ponzo Technology Pvt. Ltd.",
      role: "Backend Developer",
      industry: "Software Product",
      responsibilities: [
        "Developed the Back-end system for the Mali Marriage Application using NodeJS, Express, and MySQL.",
        "Created and deployed APIs to support Back-end functionality and enhance system performance.",
      ],
      skills: ["API integrations", "RestAPI"],
      duration: "Mar 2021 - Nov 2022",
      type: "Contract",
    },
    {
      company: "Bhavna's Cake",
      role: "Graphics Designing & Social Media Optimization",
      industry: "Bakery Chain",
      responsibilities: [
        "Created daily graphic posts for the company's social media handles.",
        "Managed full social media operations and implemented SEO strategies.",
      ],
      skills: [
        "Digital marketing",
        "Social Media Marketing",
        "Instagram ads",
        "Facebook ads",
        "Photo editing",
        "Photoshop",
      ],
      duration: "Mar 2020 - Jan 2022",
      type: "Part-time",
    },
    {
      company: "PepperGrub Delivery Service Pvt. Ltd.",
      role: "Managing Partner",
      industry: "Food-Delivery",
      responsibilities: [
        "Led development as Managing Partner at PepperGrub Delivery Service Pvt. Ltd., creating a grocery delivery hybrid app in Akola, Maharashtra.",
        "Developed the full system, including the website, admin panel, and mobile app.",
        "Used PHP, HTML, CSS, JavaScript, MySQL, Codeigniter, and Ionic for development.",
      ],
      skills: [
        "Digital marketing",
        "Front-end app development",
        "Backend development",
        "Planning and Organising",
        "Digital campaigns",
      ],
      duration: "Dec 2019 - Jun 2021",
      type: "Full-time",
    },
    {
      company: "Fozomi Food Delivery Service Pvt. Ltd.",
      role: "Managing Director",
      industry: "Food-Delivery",
      responsibilities: [
        "Developed the full system for Fozomi Food Delivery Service, a hybrid food delivery application in Amravati, Akola, Maharashtra, including the website, admin panel, and mobile app.",
        "Utilized PHP, HTML, CSS, JavaScript, MySQL, with Codeigniter framework and Ionic for mobile application development.",
      ],
      skills: [
        "Front-end app development",
        "Backend development",
        "Digital campaigns",
        "Digital marketing",
        "Social Media Marketing",
        "Planning and Organising",
      ],
      duration: "Dec 2018 - Jun 2020",
      type: "Full-time",
    },
    {
      company: "Pexoya Technology Pvt. Ltd.",
      role: "Web Designer & Developer",
      industry: "Software Product",
      responsibilities: [
        "Worked as the Head Web Developer, monitoring project development and execution.",
        "Worked on various freelance projects, applying web development expertise to deliver tailored solutions.",
      ],
      skills: [
        "Web application development",
        "Web frameworks",
        "HTML/CSS",
        "WordPress",
        "Marketing",
        "Marketing management",
        "Marketing planning",
        "Web development",
      ],
      duration: "Jan 2016 - Mar 2020",
      type: "Full-time",
    },
  ];

  const backgroundStyle =
    theme === "light"
      ? ""
      : "linear-gradient(140.53deg, rgba(0, 0, 0, 0.5) 12.34%, rgba(0, 0, 0, 0) 51.46%)";
  return (
    // <section className={`flex justify-center pb-6 `}>
    //   <div className="w-full max-w-[1050px] flex flex-col gap-0 justify-center md:py-8">
    //     <div className="container mx-auto p-4">
    //       <h1 className="text-3xl font-bold mb-8">Job Experiences</h1>

    //       <div className=" border-l border-gray-200 pl-4 ">
    //         {jobExperiences.map((job, index) => (
    //           <div key={index} className="mb-10 ml-4 relative">
    //             <div className="absolute -top-1 w-3 h-3 bg-green-500/90 rounded-full  -left-1.5 border border-white animate-ping"></div>
    //             <div className="absolute -top-1 w-3 h-3 bg-green-500/90 rounded-full  -left-1.5 border border-white"></div>

    //             <div className="bg-white p-4 rounded-lg shadow-md ">
    //               <div className="flex justify-between items-center">
    //                 <h2 className="text-xl font-semibold pt-3 text-[#0E43A0]">
    //                   {job.role} <br className="block md:hidden" />
    //                   <span className="text-[12px] "> at {job.company}</span>
    //                 </h2>
    //                 <p className=" py-1 px-2 absolute -top-3 right-0 bg-green-500/90 text-white text-[10px] rounded-t-full rounded-bl-full">
    //                   <strong>From : </strong>
    //                   {job.duration}
    //                 </p>
    //               </div>
    //               <h3 className="text-lg font-medium text-gray-600"></h3>
    //               <p className="text-sm text-gray-500">
    //                 Industry : {job.industry}
    //               </p>
    //               <ul className="mt-2 list-disc list-inside text-gray-500">
    //                 {job.responsibilities.map((responsibility, idx) => (
    //                   <li key={idx} className="text-justify text-sm">
    //                     {responsibility}
    //                   </li>
    //                 ))}
    //               </ul>
    //               <p className="text-gray-700 text-base mt-2 flex flex-wrap gap-1">
    //                 {job.skills.map((skill, index) => (
    //                   <p className="bg-slate-300 md:bg-slate-200 py-[1px] px-[10px] text-[10px] rounded-full opacity-50 md:opacity-90">
    //                     {skill}
    //                   </p>
    //                 ))}
    //               </p>
    //               <p className=" text-gray-700 absolute -top-3">
    //                 <span className=" bg-yellow-300 text-[12px] font-bold px-[4px] py-[2px] rounded-tl-lg rounded-br-lg">
    //                   {job.type}
    //                 </span>
    //               </p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section
      style={{
        background: backgroundStyle,
      }}
      className={`bg-portfolio-fold-bg w-full flex justify-center pb-6 pl-3 pr-5 md:px-0  ${bgColor}`}
    >
      <div className="w-full max-w-[1050px] flex flex-col gap-0 justify-center md:py-8">
        <div className=" flex gap-6 items-center my-8 justify-center md:justify-start w-full max-w-[1050px]">
          <h2 className="min-w-fit text-2xl md:text-4xl font-manrope font-extrabold flex gap-2 items-center">
            Job Experiences
          </h2>
          <div className="bg-[#0d43a0] w-full md:w-full h-[2px] hidden md:block"></div>
        </div>
        <div className=" border-l border-gray-200 pl-4 ">
          {jobExperiences.map((job, index) => (
            <div key={index} className="mb-10 ml-4 relative">
              <div className="absolute -top-1 w-3 h-3 bg-green-500/90 rounded-full  -left-1.5 border border-white animate-ping"></div>
              <div className="absolute -top-1 w-3 h-3 bg-green-500/90 rounded-full  -left-1.5 border border-white"></div>

              <div className="bg-white p-4 rounded-lg shadow-md ">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold pt-3 text-[#0E43A0]">
                    {job.role} <br className="block md:hidden" />
                    <span className="text-[12px] "> at {job.company}</span>
                  </h2>
                  <p className=" py-1 px-2 absolute -top-3 right-0 bg-green-500/95 text-white text-[10px] rounded-t-full rounded-bl-full">
                    <strong>From : </strong>
                    {job.duration}
                  </p>
                </div>
                <h3 className="text-lg font-medium text-gray-600"></h3>
                <p className="text-sm text-gray-500">
                  Industry : {job.industry}
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-500">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-justify text-sm">
                      {responsibility}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 text-base mt-2 flex flex-wrap gap-1">
                  {job.skills.map((skill, index) => (
                    <p className="bg-slate-300 md:bg-slate-200 py-[1px] px-[10px] text-[10px] rounded-full opacity-50 md:opacity-90">
                      {skill}
                    </p>
                  ))}
                </p>
                <p className=" text-gray-700 absolute -top-3">
                  <span className=" bg-yellow-300 text-[12px] font-bold px-[4px] py-[2px] rounded-tl-lg rounded-br-lg">
                    {job.type}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
