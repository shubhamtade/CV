import React from "react";

const Project = ({ bgColor, theme }) => {
  const backgroundStyle =
    theme === "light"
      ? "linear-gradient(180.53deg, rgba(255, 255, 255, 0.5) 12.34%, rgba(188, 213, 255, 0.5) 51.46%)"
      : "linear-gradient(160.53deg, rgba(0, 0, 0, 0) 12.34%, rgba(0, 0, 0, 0.5) 51.46%)";

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

  return (
    <section
      style={{
        background: backgroundStyle,
      }}
      className={`flex justify-center pb-6 ${bgColor}`}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 justify- transition duration-300 mx-4 mb-8">
          {jobExperiences.map((job, index) => {
            return (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 m-4 relative"
                key={index}
              >
                {/* company: "Crio.Do", location: "Remote", role: "Frontend
                Development", industry: "Software Product", responsibilities: [
                "Participating in code reviews and providing constructive
                feedback to peers, fostering a culture of continuous improvement
                and knowledge sharing within the team.", "Developing and
                implementing frontend solutions using React, JavaScript, HTML,
                and CSS, while enhancing skills for a transition to full-stack
                development.", "Contributing to project planning and execution
                to ensure timely delivery of high-quality solutions that meet
                client expectations.", ], skills: ["React", "Front end",
                "JavaScript", "HTML/CSS", "NodeJs"], duration: "Jun 2024 -
                Present", type: "Full-time", */}
                <img
                  className="w-full"
                  src="https://via.placeholder.com/400"
                  alt="Company"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 leading-none ">
                    {job.role} <br />
                    <span className="text-[12px] ">at {job.company}</span>
                  </div>

                  <p className="text-gray-700 text-base">
                    <strong>Industry:</strong> Software Product{" "}
                  </p>
                  <p className="text-gray-700 text-base mt-2 flex flex-wrap gap-1">
                    {job.skills.map((skill, index) => (
                      <p className="bg-slate-300 py-[1px] px-[10px] text-[10px] rounded-full opacity-50">
                        {skill}
                      </p>
                    ))}
                  </p>
                  <p className=" py-1 px-2 absolute top-4 right-4 bg-green-500/90 text-white text-[10px] rounded-tl-full rounded-bl-full">
                    <strong>From : </strong>{job.duration}
                  </p>
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
