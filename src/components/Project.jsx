import React, { useState } from "react";

const Project = ({ theme }) => {
  const backgroundStyle = theme === "light" ? "white" : null;

  const projects = [
    {
      name: "QTIFY",
      date: "Dec 2024",
      description:
        "QTify is a song-browsing application built from scratch using ReactJS paired with Material UI and Swiper to deliver a seamless and aesthetic user interface, offering songs from different albums and genres for music lovers.",
      skills: [
        "ReactJS",
        "Swiper Library usage",
        "Module-scoped CSS",
        "Flexbox",
        "CSS variables",
        "Condition Rendering",
        "Component Reusability",
        "Material UI",
        "Customizing Third-Party Components",
        "Deployment",
      ],
      img: "https://crio-directus-assets.s3.ap-south-1.amazonaws.com/6d1a22a2-22f7-4321-8677-3d62a85fca8c.png",
      url: "https://q-tify-new.vercel.app/",
      gitUrl: "https://github.com/shubhamtade/QTify-New",
    },
    {
      name: "QKart Frontend",
      date: "Nov 2024",
      description:
        "QKart is an e-commerce application offering a variety of products for customers to choose from. During the course of this project, Implemented the core logic for authentication, shopping cart and checkout. Improved UI by adding responsive design elements for uniform experience across different devices. Utilized REST APIs to dynamically load and render data served by the backend server.",
      skills: [
        "React Hooks",
        "Forms",
        "Controlled Components",
        "REST",
        "JSON",
        "Error Handling",
        "Developer Tools",
        "ES6",
        "Conditional Rendering",
        "React State & Props",
        "React",
        "Event Handling",
        "LIFECYCLE METHODS",
        "React Router",
        "Material UI",
        "Responsive Design",
        "localStorage",
        "Material UI Grid",
        "Keyword Search",
        "Debouncing",
        "Deployment",
        "Netlify",
      ],
      img: "https://crio-directus-assets.s3.ap-south-1.amazonaws.com/e6fb82a2-423d-4f62-9962-f19f2f81fa8c.png",
      url: "https://me-qkart-frontend-v2-six.vercel.app/",
      gitUrl: "https://github.com/shubhamtade/ME_QKART_FRONTEND_V2",
    },
    {
      name: "XBoard",
      date: "Oct 2024",
      description:
        "XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard. Built XBoard using HTML, CSS, Bootstrap and JavaScript from scratch. Used Accordions and Image Carousel to improve UI. Fetched news content from flipboard's RSS feed using REST API.",
      skills: [
        "HTML",
        "CSS",
        "Figma",
        "Bootstrap Accordion",
        "Bootstrap",
        "ES6",
        "JavaScript",
        "DOM Manipulation",
        "Developer Tools",
        "REST",
        "JSON",
        "Netlify",
        "Netlify CLI",
        "Deployment",
        "VS Code Live Server",
        "Bootstrap Carousel",
      ],
      img: "https://crio-directus-assets.s3.ap-south-1.amazonaws.com/f7dfc8ad-a174-4d2b-8af7-c1ff1e1e8719.png",
      url: "",
      gitUrl: "",
    },
    {
      name: "QTripDynamic",
      date: "Oct 2024",
      description:
        "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. Created web pages using HTML and CSS and made them dynamic using JavaScript. Improved UX with multi-select filters, image carousels. Utilised localStorage to persist user preferences at client-side.",
      skills: [
        "HTML",
        "CSS",
        "ES6",
        "JavaScript",
        "Developer Tools",
        "Bootstrap",
        "HTTP",
        "REST",
        "Responsive Design",
        "VS Code Live Server",
        "DOM Manipulation",
        "cURL",
        "JSON",
        "Event Handling",
        "localStorage",
        "Conditional Rendering",
        "Bootstrap Carousel",
        "Netlify CLI",
        "Deployment",
        "Heroku",
        "Netlify",
      ],
      img: "https://crio-directus-assets.s3.ap-south-1.amazonaws.com/0ba0c306-851a-451e-89bb-623289fca9a3.png",
      url: "https://q-trip-dynamic-full.vercel.app/",
      gitUrl: "https://github.com/shubhamtade/QTrip-Dynamic-Full",
    },
    {
      name: "QTripStatic",
      date: "Sep 2024",
      description:
        "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. Created 3 different web pages from Wireframe layout using HTML and CSS. Utilized Bootstrap extensively for responsive design. Deployed the website to Netlify/Vercel.",
      skills: [
        "HTML",
        "CSS",
        "Developer Tools",
        "Bootstrap",
        "CSS Flexbox",
        "Responsive Design",
        "VS Code Live Server",
        "Bootstrap Responsive Images",
        "Bootstrap Flex",
        "Bootstrap Spacing",
        "Bootstrap Display",
        "CSS Positioning",
        "Deployment",
        "Netlify",
        "Netlify CLI",
      ],
      img: "https://crio-directus-assets.s3.ap-south-1.amazonaws.com/f7dfc8ad-a174-4d2b-8af7-c1ff1e1e8719.png",
      url: "https://q-trip-six.vercel.app/",
      gitUrl: "https://github.com/shubhamtade/QTrip",
    },
    {
      name: "XCruise",
      date: "Aug 2024",
      description:
        "XCruise is a responsive static website built from scratch using HTML and CSS to provide a seamless and visually appealing experience for users looking to book cruise vacations. The project involved developing a responsive and interactive website that showcases various cruise destinations and provides essential information about XCruise offerings.",
      skills: ["HTML", "CSS", "Responsive Design"],
      img: "https://crio-directus-assets.s3.ap-south-1.amazonaws.com/0ba0c306-851a-451e-89bb-623289fca9a3.png",
      url: "https://shubhamtade.vercel.app/",
      gitUrl: "https://shubhamtade.vercel.app/",
    },
  ];

  const [expanded, setExpanded] = useState(Array(projects.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <section className="flex justify-center pb-6">
      <div className="w-full max-w-[1050px] flex flex-col gap-0 justify-center md:py-8">
        <div
          id="projects"
          className="text-portfolio-highlighter flex gap-6 items-center my-8 justify-center md:justify-start w-full max-w-[1050px]"
        >
          <h2 className="min-w-fit text-2xl md:text-4xl font-manrope font-extrabold flex gap-2 items-center">
            Projects
          </h2>
          <div className="bg-[#0d43a0] w-full md:w-full h-[2px] hidden md:block"></div>
        </div>
        <div className="grid grid-cols-1 gap-2 md:gap-12 transition duration-300 mx-4 mb-8">
          {projects.map((project, index) => {
            const displaySkills = expanded[index]
              ? project.skills
              : project.skills.slice(0, 4);
            return (
              <div
                className="max-w-full flex flex-col md:flex-row rounded overflow-hidden shadow-lg border bg-white p-4 m-1 relative"
                key={index}
              >
                <img
                  className="w-[50%] md:w-[30%]"
                  src={project.img}
                  alt="Project"
                />
                <div className="px-6 py-4">
                  <div
                    className={`font-bold text-xl mb-2 leading-none text-[#0E43A0]`}
                  >
                    {project.name} <br />
                    <span className="text-[12px] ">{project.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm text-justify">
                    <strong>Description:</strong> {project.description}
                  </p>
                  <p className="text-gray-700 text-base mt-2 flex flex-wrap gap-1">
                    {displaySkills.map((skill, skillIndex) => (
                      <span
                        className="bg-slate-300 py-[1px] px-[10px] text-[10px] rounded-full opacity-50"
                        key={skillIndex}
                      >
                        {skill}
                      </span>
                    ))}
                  </p>
                  {project.skills.length > 4 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className={`mt-3 text-white  py-[2px] px-[10px] text-[14px] rounded-full ${
                        expanded[index] ? "bg-red-500" : "bg-green-500"
                      }`}
                    >
                      {expanded[index] ? "Show Less" : "Show More"}
                    </button>
                  )}

                  <div className="mt-3 flex justify-around text-center text-[#0E43A0] rounded-full">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-yellow-500  hover:bg-transparent hover:border hover:border-yellow-500 hover:text-[#3b68b6] hover:font-bold w-full rounded-l-full py-3 border-r border-white  duration-200"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-yellow-500  hover:bg-transparent hover:border hover:border-yellow-500 hover:text-[#3b68b6] hover:font-bold w-full rounded-r-full py-3 border-r border-white  duration-200"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
