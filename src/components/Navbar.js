import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div>
      <div className="w-full h-20 bg-black shadow-xl">
        <motion.div
          initial={{ x: "100%", scale: 0.5, opacity: 0 }}
          animate={{ x: "0%", opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
        >
          <div className="flex flex-row-reverse hidden md:flex ">
            <div className=" font-bold text-xl text-white ml-4 mr-32 mt-6 font-mono transition ease-in-out delay-150  hover:-translate-y-3  duration-300 hover:text-pink-500">
              <a href="/contact">Contact</a>
            </div>
            <div className=" font-bold text-xl ml-4 text-white  mt-6 font-mono transition ease-in-out delay-150  hover:-translate-y-3  duration-300 hover:text-pink-500">
              <a href="/projects">Projects</a>
            </div>
            <div className=" font-bold text-xl ml-4 text-white mt-6 font-mono transition ease-in-out delay-150  hover:-translate-y-3  duration-300 hover:text-pink-500">
              <a href="skills">Skills</a>
            </div>
            <div className=" font-bold text-xl ml-4 text-white mt-6 font-mono transition ease-in-out delay-150  hover:-translate-y-3  duration-300 hover:text-pink-500">
              <a href="about">About</a>
            </div>
            <div className=" font-bold text-xl ml-4 text-white mt-6 font-mono transition ease-in-out delay-150  hover:-translate-y-3  duration-300 hover:text-pink-500">
              <a href="/">Home</a>
            </div>
          </div>
          <div className="flex flex-row brightness-50" s>
            <img
              className="w-[100px] -translate-y-12 ml-32 "
              src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674378986/360_F_363314304_O8iAzlMbUHy3HvRtdReqaxXR0aw279CM_qp9q8u.jpg"
            />
            <div className="text-white ml-4 text-2xl font-bold -translate-y-6 hover:text-pink-500 transition ease-in-out delay-150  hover:-translate-y-9  duration-300">
              MEHMET ASLANTAŞ
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
