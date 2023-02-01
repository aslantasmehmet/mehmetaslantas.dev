import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);
  return (
    <div>
      <div className="fixed z-40 top-0 right-0 left-0 w-full h-20 bg-black shadow">
        <motion.div
          initial={{ x: "100%", scale: 0.5, opacity: 0 }}
          animate={{ x: "0%", opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
        >
          {/* NavigationBar */}
          <ul className="flex flex-row-reverse hidden md:flex ">
            <li className=" font-bold text-xl text-white ml-4 mr-32 mt-6 font-mono transition ease-in-out delay-150  hover:-translate-y-3  duration-300 hover:text-pink-500">
              <a href="/contact">Contact</a>
            </li>
            <li className=" font-bold text-xl ml-4 text-white  mt-6 font-mono transition ease-in-out delay-150  hover:-translate-y-3  duration-300 hover:text-pink-500">
              <a href="/projects">Projects</a>
            </li>
            <li className=" font-bold text-xl ml-4 text-white mt-6 font-mono transition ease-in-out delay-150  hover:-translate-y-3  duration-300 hover:text-pink-500">
              <a href="/skills">Skills</a>
            </li>
            <li className=" font-bold text-xl ml-4 text-white mt-6 font-mono transition ease-in-out delay-150  hover:-translate-y-3  duration-300 hover:text-pink-500">
              <a href="about">About</a>
            </li>
            <li className=" font-bold text-xl ml-4 text-white mt-6 font-mono transition ease-in-out delay-150  hover:-translate-y-3  duration-300 hover:text-pink-500">
              <a href="/">Home</a>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <div className="cursor-pointer md:hidden z-20" onClick={handleClick}>
            {clicked ? (
              <FaTimes className="text-purple-200 ml-6 mt-6" size={40} />
            ) : (
              <FaBars className="text-purple-200 ml-6 mt-6" size={40} />
            )}
          </div>

          {/* Mobile Menu */}

          <ul
            className={
              clicked
                ? "absolute top-0 left-0 flex flex-col text-gray-300 h-screen w-full bg-black items-center justify-center md:hidden"
                : "hidden"
            }
          >
            <li
              className={
                "py-4 text-2xl items-center justify-center hover:scale-125 transition duration-300 ease-in-out  hover:text-purple-200"
              }
            >
              <a href="/">Home</a>
            </li>
            <li className="py-4 text-2xl items-center justify-center hover:scale-125  transition duration-300 ease-in-out  hover:text-purple-200">
              <a href="about">About</a>
            </li>
            <li
              onClick={handleClick}
              className="py-4 text-2xl items-center justify-center hover:scale-125  transition duration-300 ease-in-out hover:text-purple-200"
            >
              <a href="skills">Skills</a>
            </li>
            <li
              onClick={handleClick}
              className="py-4 text-2xl items-center justify-center hover:scale-125 transition duration-300 ease-in-out hover:text-purple-200"
            >
              <a href="projects">Projects</a>
            </li>
            <li
              onClick={handleClick}
              className="py-4 text-2xl items-center justify-center hover:scale-125  transition duration-300 ease-in-out hover:text-purple-200"
            >
              <a href="contact">Contact</a>
            </li>
          </ul>
          <div className="flex flex-row brightness-50">
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
};
export default Navbar;
