import React from "react";
import react from "../assets/react.png";
import redux from "../assets/Readux.png";
import Javascript from "../assets/JavaScript.png";
import node from "../assets/Node.png";
import mongodb from "../assets/MongoDB.png";
import sql from "../assets/sql.png";
import c1 from "../assets/c_lng2.png";
import c2 from "../assets/c_lang.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: react,
      name: "ReactJS",
    },
    {
      id: 2,
      logo: redux,
      name: "Redux",
    },
    {
      id: 3,
      logo: Javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: node,
      name: "NodeJS",
    },
    {
      id: 5,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 6,
      logo: sql,
      name: "MySQL",
    },
    {
      id: 7,
      logo: c1,
      name: "C++",
    },
    {
      id: 8,
      logo: c2,
      name: "C",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-10 bg-white dark:bg-gray-900 text-black dark:text-white transition duration-500 ">
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 py-5">
          {cardItem.map(({ id, logo, name },index) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
              data-aos="zoom-in-up" // 👉 Individual animation
              data-aos-delay={index * 100} // 👉 Delay increases per card (0ms, 100ms, 200ms...)
              data-aos-duration="800">
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700 dark:text-white">
                  I have made small project on this language.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
