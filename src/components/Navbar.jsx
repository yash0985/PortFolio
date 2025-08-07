import React, { useState, useEffect } from "react";
import pic from "../assets/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  // Dark mode state from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");

    // 👇 Default to "dark" if nothing is saved
    if (saved === null) {
      localStorage.setItem("theme", "dark");
      return true;
    }
    return saved === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experiance" },
    { id: 5, text: "Project" },
    { id: 6, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 text-black dark:text-white transition duration-300">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer">
                Yash <span className="text-green-500">Garg</span>
              </h1>
              <p className="text-sm">Web Developer</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title="Toggle Theme">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* Mobile Menu Icon */}
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {menu && (
          <div className="bg-white dark:bg-gray-900">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl dark:text-white">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}>
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
