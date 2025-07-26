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
import AOS from "aos";

import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 second loader

    return () => clearTimeout(timer);
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
          <Contact />
          <Footer />
          <Toaster />
        </>
      )}
    </>
  );
}

export default App;
