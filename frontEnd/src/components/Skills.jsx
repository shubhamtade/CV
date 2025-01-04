import React from "react";

const Skills = ({ bgColor, theme }) => {
  const skills = [
    {
      name: "HTTP",
      icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/http-5372110-4489074.png?f=webp&w=256",
    },
    {
      name: "HTML",
      icon: "https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png",
    },
    {
      name: "CSS",
      icon: "https://cdn.iconscout.com/icon/free/png-512/css-131-722685.png",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png",
    },
    {
      name: "MySQL",
      icon: "https://cdn.iconscout.com/icon/free/png-512/mysql-19-1174939.png",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.iconscout.com/icon/free/png-512/mongodb-3-1175138.png",
    },
    {
      name: "React",
      icon: "https://cdn.iconscout.com/icon/free/png-512/react-3-1175109.png",
    },
    {
      name: "React Native",
      icon: "https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175109.png?f=webp&w=256",
    },
    {
      name: "Redux",
      icon: "https://cdn.iconscout.com/icon/free/png-512/redux-283024.png",
    },
    {
      name: "Material UI",
      icon: "https://img.icons8.com/?size=256&id=gFw7X5Tbl3ss&format=png",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.iconscout.com/icon/free/png-512/bootstrap-7-1175254.png",
    },
    {
      name: "Git",
      icon: "https://cdn.iconscout.com/icon/free/png-512/git-225996.png",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.iconscout.com/icon/free/png-512/free-tailwind-css-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-4406745.png?f=webp&w=256",
    },
    {
      name: "Figma",
      icon: "https://cdn.iconscout.com/icon/free/png-512/material-ui-3521518-2944870.png",
    },
    {
      name: "Photoshop",
      icon: "https://cdn.iconscout.com/icon/free/png-512/free-photoshop-logo-icon-download-in-svg-png-gif-file-formats--cc-web-browser-pack-logos-icons-226474.png?f=webp&w=256",
    },
  ];

  const backgroundStyle =
    theme === "light"
      ? ""
      : "linear-gradient(140.53deg, rgba(0, 0, 0, 0.5) 12.34%, rgba(0, 0, 0, 0) 51.46%)";

  return (
    <section
      style={{
        background: backgroundStyle,
      }}
      className={`bg-portfolio-fold-bg w-full flex justify-center pb-6  ${bgColor}`}
    >
      <div className="w-full max-w-[1050px] flex flex-col gap-0 justify-center md:py-8">
        <div
          id="skills"
          className="text-portfolio-highlighter flex gap-6 items-center my-8 justify-center md:justify-start w-full max-w-[1050px]"
        >
          <h2 className="min-w-fit text-2xl md:text-4xl font-manrope font-extrabold flex gap-2 items-center">
            Skills Acquired
          </h2>
          <div className="bg-[#0d43a0] w-full md:w-full h-[2px] hidden md:block"></div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-6 md:gap-12 justify-between transition duration-300 mx-4 mb-8">
          {skills.map((skill, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700 shadow-md group z-[1] relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                  <div className="image-container">
                    <img
                      alt="image"
                      src={skill.icon}
                      className={`${
                        theme === "light" ? "text-[#0E43A0]" : "text-white"
                      } real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100 grayscale`}
                    />
                  </div>
                </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
