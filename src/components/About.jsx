import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl py-20 px-4 md:px-20 bg-white dark:bg-gray-900 text-black dark:text-white transition duration-500 overflow-hidden">
      
      <div data-aos="zoom-in-up" data-aos-delay="0" data-aos-duration="1000">
        <h1 className="text-3xl font-bold mb-5">About</h1>
      </div>

      <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
        <p>
          Hello, I'm Yash Garg, a passionate Web developer with a keen eye for MERN Stack. With a background in IT, I strive to create impactful and visually stunning Software solutions that leave a lasting impression.
        </p>
      </div>

      <br />
      <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
        <h1 className="text-green-600 font-semibold text-xl">Education & Training</h1>
        <span>
          Degree: Bachelor of Computer Applications (B.C.A), Institution: MSU University Saharnpur, Relevant Course: FrontEnd Developer, Platform: Silverwink IT Training Institute, Year: 2025
        </span>
      </div>

      <br />
      <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="800">
        <h1 className="text-green-600 font-semibold text-xl">Skills & Expertise</h1>
        <span>
          Proficient in JavaScript, Experienced with React and JavaScript Library, Strong grasp of [Tailwind CSS and Bootstrap], Excellent problem-solving skills, Effective communicator and collaborator
        </span>
      </div>

      <br />
      <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="800">
        <h1 className="text-green-600 font-semibold text-xl">Achievements & Awards</h1>
        <span>
          Recognition: Created a project with the team, Institution: D.A.V[PG] College, Year: 2025, Achievement: Our team's project came second in the entire college.
        </span>
      </div>

      <br />
      <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
        <h1 className="text-green-600 font-semibold text-xl">Mission Statement</h1>
        <p>
          My mission is to leverage my skills and creativity to deliver innovative Web Development solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
