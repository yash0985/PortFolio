import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import logo from "./assets/relod_logo.png";
import "./spain.css";

// Animation Libraries
import AOS from "aos";
import "aos/dist/aos.css";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "./components/Project";


function App() {
  const [loading, setLoading] = useState(true);
 useEffect(() => {
  //  const cursor = document.getElementById("custom-cursor");
  // AOS Init
  AOS.init({
    duration: 1000,
    once: false,
  });

  // GSAP Plugin
  gsap.registerPlugin(ScrollTrigger);

  const timer = setTimeout(() => {
    setLoading(false);

    // Delay ScrollTrigger.refresh AFTER DOM is visible
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); // slight delay ensures layout is rendered
  }, 3000); // 3s loader

  // Cleanup
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    clearTimeout(timer);
  };
}, []);


  return (
    <>
 
      {loading ? (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-900 space-y-4">
          <img src={logo} className="h-36 w-36 infinite-spinner" alt="logo" />
          <h1 className="text-xl md:text-3xl font-semibold text-white animate-pulse">
            Welcome to My Portfolio
          </h1>
        </div>
      ) : (
        <>
        
          <Navbar />
          <Home />
          <About />
          <PortFolio />
          <Experiance />
          <Project/>
          <Contact />
          <Footer />
          <Toaster />
          
        </>
      )}
    </>
  );
}

export default App;
