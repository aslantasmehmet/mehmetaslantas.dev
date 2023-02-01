import React, { useEffect, useState } from "react";
import projectsData from "../api/data";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="bg-white w-full h-full">
      <div className="text-xl m-4 translate-y-0 sm:text-3xl  text-center text-black ">
        <div
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="700"
          className="text-center  tracking-wider"
        >
          <span className=" pl-2 select-none border-l-4 border-b-4 border-purple-500">
            Projects
          </span>
        </div>
      </div>
      {/* Projects */}

      <div className="grid md:grid-cols-4 gap-4 grid-cols-1 sm:container sm:mx-auto ml-12 md:mr-6 mt-9 mb-9 ">
        {projects.length &&
          projects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 gap-4 mb-4 border w-72 h-full shadow md:hover:-translate-y-1 md:hover:scale-110  md:duration-300 md:hover:text-purple-500 "
            >
              <div className="flex flex-col mb-6">
                <img src={project.img} />
                <p className="mx-2 mt-2 text-black text-left font-semibold">
                  {project.desc}
                </p>
              </div>
              <div className="flex items-stretch mx-auto  ">
                <button
                  onClick={project.githubUrl}
                  className="self-start border bg-purple-500 text-white font-semibold mr-2 px-2 py-2 shadow hover:-translate-y-1 hover:scale-110  duration-300 "
                >
                  GitHub
                </button>
                <button
                  onClick={project.demoUrl}
                  className="self-start border bg-purple-500 text-white font-semibold px-2 py-2 shadow hover:-translate-y-1 hover:scale-110  duration-300"
                >
                  Demo
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
