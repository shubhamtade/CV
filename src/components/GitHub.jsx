import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHub = ({ theme }) => {
  const backgroundStyle =
    theme === "light"
      ? ""
      : "linear-gradient(140.53deg, rgba(0, 0, 0, 0.5) 12.34%, rgba(0, 0, 0, 0) 51.46%)";

  return (
    // <section
    //   style={{
    //     background: backgroundStyle,
    //   }}
    //   className={`hidden bg-portfolio-fold-bg w-full md:flex justify-center pb-6  ${bgColor}`}
    // >
    //   <div className="w-full max-w-[1050px] flex flex-col gap-0 justify-center md:py-8">
    //     <div
    //       id="skills"
    //       className="text-portfolio-highlighter flex flex-col gap-6 items-center my-8 justify-center md:justify-start w-full max-w-[1050px]"
    //     >
    //       <div>
    //         <h2 className="min-w-fit text-2xl md:text-4xl font-manrope font-extrabold flex gap-2 items-center">
    //           Skills Acquired
    //         </h2>
    //         <div className="bg-[#0d43a0] w-full md:w-full h-[2px] hidden md:block"></div>
    //       </div>
    //       <div>
    //         <GitHubCalendar username="shubhamtade" />
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section
      id="github"
      style={{
        background: backgroundStyle,
      }}
      className={`bg-portfolio-fold-bg w-full flex justify-center pb-6  `}
    >
      <div className="w-full max-w-[1050px] flex flex-col gap-0 justify-center md:py-8">
        <div
          id="skills"
          className="text-portfolio-highlighter flex gap-6 items-center my-8 justify-center md:justify-start w-full max-w-[1050px]"
        >
          <h2 className="min-w-fit text-2xl md:text-4xl font-manrope font-extrabold flex gap-2 items-center">
            GitHub Contributions
          </h2>
          <div className="bg-[#0d43a0] w-full md:w-full h-[2px] hidden md:block"></div>
        </div>
        <div className="flex justify-center">
          <GitHubCalendar username="shubhamtade" />
        </div>
      </div>
    </section>
  );
};

export default GitHub;
