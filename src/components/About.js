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
                I am a Software Developer who is committed to self-development
                and lifetime learning. I am always active and eager to learn new
                skills. I believe this way I can consistently achieve better
                results.
                <br />
                <br />
                I try to utilize a creative approach to problem-solving while
                working in a team or individually.
                <br />
                <br />
                Also, communication is the most important key to making progress
                in the software field and I believe that building strong
                relationships with people delivers the best results.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
