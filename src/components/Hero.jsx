import React from "react";
import CountUp from "./Animation/CountUp";
import BlurText from "./Animation/NameHeading";

const Hero = ({ theme }) => {
  const porfilePicBg =
    theme === "light"
      ? "bg-yellow-400 bg-opacity-60 shadow-black/30"
      : "bg-yellow-200 shadow-white/20";

  const colorTheme =
    theme === "light" ? "border-r-white" : "border-r-[#0E43A0]";

  return (
    <section
      className="md:h-[550px] w-full flex justify-between items-center gap-4 md:gap-0  md:flex-row flex-col-reverse px-4 md:px-0 md: py-20 md:py-10  md:max-w-[1050px] mx-auto "
      id="top"
    >
      <div className="h-full w-full md:w-1/2 flex justify-center md:justify-start items-center font-rubik">
        <div className="md:max-w-[600px] text-center md:text-left">
          <p className="text-portfolio-text-medium text-sm md:text-xl font-semibold mb-1 mt-2 md:mt-0">
            Hi, my name is
          </p>
          <h1 className="text-portfolio-highlighter text-3xl md:text-5xl font-manrope font-black mb-2 md:mb-4">
            <BlurText
              text="Shubham Sunil Tade"
              className="custom-class"
              delay={10}
            />
          </h1>
          <p className="text-portfolio-text-light text-xs md:text-base font-normal">
            I have built many industry grade projects from scratch and am armed
            with many technological skills useful for tech projects. Check out
            my projects below. :)
          </p>
          <div className="text-portfolio-text-medium flex flex-col md:flex-row items-center gap-2 text-sm md:text-lg font-medium mt-4"></div>
          <div
            className={`rounded-[20px] flex gap-y-2 md:gap-0 justify-around items-center mt-6 min-h-[100px] p-2 md:p-0 ${
              theme === "light"
                ? "bg-[#0E43A0] text-white"
                : "bg-white text-[#0E43A0]"
            }`}
          >
            <div
              className={`text-center flex-1 ${colorTheme} border-r-[1px] last:border-r-0 flex flex-col justify-center items-center md:h-[100px]`}
            >
              <span className="text-3xl md:text-5xl font-bold">
                <CountUp
                  from={0}
                  to={9}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
              </span>
              <p className="text-[8px] md:text-[12px] w-max px-3">
                VERIFIED
                <br className="block md:hidden" /> SKILLS
              </p>
            </div>
            <div
              className={`text-center flex-1 ${colorTheme} border-r-[1px] last:border-r-0 flex flex-col justify-center items-center md:h-[100px]`}
            >
              <span className="text-3xl md:text-5xl font-bold">
                <CountUp
                  from={0}
                  to={8}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
              </span>
              <p className="text-[8px] md:text-[12px] w-max px-3">
                PROFESSIONAL
                <br className="block md:hidden" /> PROJECTS
              </p>
            </div>
            <div
              className={`text-center flex-1 ${colorTheme} border-r-[1px] last:border-r-0 flex flex-col justify-center items-center md:h-[100px]`}
            >
              <span className="text-3xl md:text-5xl font-bold">
                <CountUp
                  from={0}
                  to={100}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </span>
              <p className="text-[8px] md:text-[12px] w-max px-3">
                DSA PROBLEMS
                <br className="block md:hidden" /> SOLVED
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full md:w-1/2 flex justify-center md:justify-end items-center relative">
        <div className="h-[150px] w-[150px] md:h-[350px] md:w-[350px] relative flex justify-center items-center rounded-full">
          <img
            alt="profileImage"
            src="https://crio-portfolio-data.s3.ap-south-1.amazonaws.com/profile_picture/shubham-tade?Thu%20Jan%2002%202025%2023:51:03%20GMT+0530%20(India%20Standard%20Time)"
            className={`object-cover rounded-full h-full w-full css-0 shadow-xl ${porfilePicBg}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
