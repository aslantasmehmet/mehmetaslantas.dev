import React from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function About() {
  return (
    <>
      <Navbar />
      <div
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="700"
        className="text-center  tracking-wider"
      >
        <div className="grid grid-cols-1 md:grid md:grid-cols-3 md:gap-4 h-full">
          <div className="w-[550px] translate-y-10 -translate-x-10 hidden md:block">
            <img
              className="pt-16"
              src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674245277/Avatar-Maker_fmnmot.png"
            />
          </div>
          <div className="col-span-2">
            <div className="flex flex-col">
              <div className="text-xl m-4 sm:text-3xl  text-center text-black md:translate-y-32">
                <span className=" pl-2 select-none border-l-4 border-b-4 border-purple-500">
                  About Me
                </span>
              </div>
              <div className="mx-4 my-2 md:mr-4 md:mt-8 font-semibold text-lg text-black border-b-4 border-purple-500 border-l-4 md:translate-y-48 ">
                My passion for developing perfect user experiences and
                high-performance backend systems is combined with modern
                technologies. As a software developer specialized in
                technologies like React Hooks and Redux, I am also an expert in
                powerful backend technologies like Java and Spring Boot MVC. My
                goal is always to develop applications that exceed user
                expectations.
                <br />
                <br />
                I am always open to learning new technologies and improving
                myself. Additionally, I place great importance on teamwork. I
                enjoy working to combine a perfect user interface with a strong
                backend system and strive to build strong collaborations with
                the people around me.
                <br />
                <br />
                My core principle is to develop applications that exceed user
                expectations by combining modern technologies and powerful
                backend systems. My openness to continuous self-improvement and
                emphasis on teamwork are the keys to successful projects.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
