import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import gitHub from "../assets/GitHub.png";
import git from "../assets/Git.png";
import tailWind from "../assets/Tailwind.png";
import bootsrap from "../assets/Bootsrap.png";
import responsive from "../assets/Responsive.png";
import api from "../assets/API2.png";
import cloud from "../assets/cloud.png";
import bugFree from "../assets/Bug_free.png";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML5",
    },
    {
      id: 2,
      logo: css,
      name: "CSS3",
    },
    {
      id: 3,
      logo: gitHub,
      name: "GitHub",
    },
    {
      id: 4,
      logo: git,
      name: "Git",
    },
    {
      id: 5,
      logo: tailWind,
      name: "TailWind CSS",
    },
    {
      id: 6,
      logo: bootsrap,
      name: "Bootstrap",
    },
    {
      id: 7,
      logo: responsive,
      name: "Friendly UI",
    },
    {
      id: 8,
      logo: api,
      name: "Rest API",
    },
    {
      id: 9,
      logo: cloud,
      name: "CLOUD",
    },
    {
      id: 10,
      logo: bugFree,
      name: "BugFree Code",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 bg-white dark:bg-gray-900 text-black dark:text-white transition duration-500"> 
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}>
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
