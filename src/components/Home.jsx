import React, { useEffect } from "react";
import pic from "../assets/my_pick.jpg";
import { FaSquareFacebook, FaTelegram } from "react-icons/fa6";
import { FaLinkedin, FaInstagramSquare, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";


function Home() {
 

  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-28 bg-white dark:bg-gray-900 text-black dark:text-white transition duration-500"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left content */}
          <div
            className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1"
            data-aos="fade-right"
          >
            <span className="text-xl text-gray-800 dark:text-gray-300">
              Welcome In My Feed
            </span>

            {/* Typed Text */}
            <div
              className="flex space-x-1 text-2xl md:text-4xl"
              data-aos="fade-up"
            >
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 dark:text-red-400 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            {/* Paragraph */}
            <p
              className="text-sm md:text-md text-justify text-gray-700 dark:text-gray-300"
              data-aos="fade-right"
            >
              I am a frontend web developer with a strong foundation in HTML,
              CSS, and JavaScript, enabling me to create visually appealing and
              interactive user interfaces. My expertise in React allows me to
              build dynamic and efficient web applications with a
              component-based approach. I am proficient in version control using
              Git and GitHub, ensuring smooth collaboration and project
              management. Alongside web development, I have a solid grasp of C
              and C++, which enhances my problem-solving skills and
              understanding of data structures and algorithms. I continuously
              explore new technologies and frameworks to stay updated with
              industry trends. My focus is on writing clean, maintainable, and
              responsive code for a seamless user experience. I have experience
              working with Tailwind CSS to design modern and optimized layouts
              efficiently. Debugging and optimizing performance are part of my
              daily workflow to deliver high-quality applications. I am
              passionate about learning and constantly improving my development
              skills. My goal is to create innovative and user-friendly web
              solutions. 🚀
            </p>

            {/* Social Media */}
            <div
              className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0"
              data-aos="fade-up"
            >
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5 text-gray-700 dark:text-gray-300">
                  <li>
                    <a
                      href="https://www.facebook.com/share/1Wydtg8Fzh/"
                      target="_blank"
                    >
                      <FaSquareFacebook className="text-2xl hover:text-blue-600 transition" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/yash-garg-87804833a"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl hover:text-blue-500 transition" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/yash._.garg001"
                      target="_blank"
                    >
                      <FaInstagramSquare className="text-2xl hover:text-pink-500 transition" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/@YaahGarg/" target="_blank">
                      <FaTelegram className="text-2xl hover:text-blue-400 transition" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2" data-aos="flip-up">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5 text-gray-700 dark:text-white">
                  <SiMongodb className="text-3xl hover:scale-110 duration-200 border-2 rounded-full p-1" />
                  <SiExpress className="text-3xl hover:scale-110 duration-200 border-2 rounded-full p-1" />
                  <FaReact className="text-3xl hover:scale-110 duration-200 border-2 rounded-full p-1" />
                  <FaNodeJs className="text-3xl hover:scale-110 duration-200 border-2 rounded-full p-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div
            className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1"
            data-aos="zoom-in"
          >
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] border-4 border-gray-300 dark:border-gray-600"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-400 dark:border-gray-700" />
    </>
  );
}

export default Home;
