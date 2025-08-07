import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import "../spain.css";

gsap.registerPlugin(ScrollTrigger);

function Project() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  const projectImage = [
    { id: 1, title: "Animated Website", imageSrc: project1, link: "https://lazarev-digital-product.netlify.app/" },
    { id: 2, title: "Medicora Website", imageSrc: project2, link: 'https://medicora.vercel.app/' },
    { id: 3, title: "BlogSphere", imageSrc: project3, link: 'https://blog-app-2-phi.vercel.app/' },
    { id: 4, title: "LearnStack Web", imageSrc: project4, link: 'https://course-selling-app-xi.vercel.app/' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
         ease: "bounce.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
            
          },
        }
      );

      gsap.fromTo(
        titleLineRef.current,
        { width: "0%", opacity: 0 },
        {
          width: "100%",
          opacity: 1,
          duration: 1.5,
          ease: "power3.inOut",
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const horizontalScroll = gsap.to(".panel", {
        xPercent: -100 * (projectImage.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${horizontalRef.current.scrollWidth}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: false,
        },
      });

      gsap.utils.toArray(".panel").forEach((panel) => {
        const image = panel.querySelector(".project-image");
        const imageTitle = panel.querySelector(".project-title");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            containerAnimation: horizontalScroll,
            start: "left center",
            end: "right center",
            scrub: true,
          },
        });

        tl.fromTo(
          image,
          { scale: 0, rotate: -20 },
          { scale: 1, rotate: 0, duration: 0.5 }
        );

        if (imageTitle) {
          tl.fromTo(imageTitle, { y: 30 }, { y: -100, duration: 0.3 }, 0.2);
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [projectImage.length]);

  return (
    <section 
   name="Project"
      ref={sectionRef}
      id="horizontal-section"
      className="relative bg-[#f6f6f6] dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 py-20 pb-16">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white text-center mb-4 opacity-0 pb-6">
          Featured Projects
        </h2>
        <div
          ref={titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
      </div>

      <div ref={triggerRef} className="overflow-hidden">
        <div
          ref={horizontalRef}
          className="horizontal-section flex md:w-[400%] w-[420%]">
          {projectImage.map((project) => (
            <div
              key={project.id}
              className="panel w-screen flex items-center justify-center">
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
                <img
                  className="project-image max-w-full max-h-full rounded-2xl object-cover"
                  src={project.imageSrc}
                  alt="Project-img"
                />
                <a href={project.link} target="_blank">
                  <h2 className="project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-black dark:text-white mt-6 z-50 text-nowrap hover:text-gray-400 dark:hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                  {project.title} <SlShareAlt />
                </h2>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
