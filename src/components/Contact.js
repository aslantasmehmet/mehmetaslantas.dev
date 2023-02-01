import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Navbar from "./Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="w-full h-full bg-zinc-900">
        <div className="text-xl m-4 translate-y-24 text-3xl  text-center text-purple-100 ">
          <span className=" pl-2 select-none border-l-4 border-b-4 border-purple-500">
            Contact Me!
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 grid-cols-1 mt-24 ">
          {/* Contact Form */}

          <div className="flex flex-col sm:ml-8 md:ml-0 ml-4">
            <label
              htmlFor="input_name"
              className="text-left sm:text-xl text-purple-100 p-2 "
            >
              Name
            </label>

            <input
              className="p-2 my-1 text-purple-100   outline-none bg-transparent border-b"
              type="text"
              placeholder="Enter your name"
              name="user_name"
              id="input_name"
              required
            />

            <label
              htmlFor="input_email"
              className="text-left sm:text-xl text-purple-100 p-2"
            >
              E-mail
            </label>
            <input
              className="p-2 my-1  text-purple-100  outline-none bg-transparent border-b"
              type="email"
              placeholder="Enter your email"
              name="user_email"
              id="input_email"
              required
            />

            <label className="text-left sm:text-xl text-purple-100 p-2">
              Message
            </label>
            <textarea
              className="text-purple-100  outline-none p-2 my-1 bg-transparent "
              name="message"
              rows="4"
              cols="50"
              placeholder="Contact me!"
              required
            ></textarea>
            <button class="ml-40 sm:ml-64 mb-8 w-96 mt-6 -translate-x-28 relative overflow-hidden rounded-lg bg-black px-20 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2">
              <span class="absolute inset-px z-10 grid place-items-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-400">
                Send Email
              </span>
              <span
                aria-hidden
                class="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
              />
            </button>
          </div>
          <div className="flex flex-col ">
            <div className="text-3xl font-bold text-white hidden md:block">
              FIND ME ON
            </div>
            <div className="text-lg font-normal text-white flex flex-row mb-8 md:ml-56 ml-7 mt-2">
              Feel free to <p className="text-purple-500 mx-1">connect </p>with
              me
            </div>

            {/* Social Icon */}

            <div className="flex flex-row text-white md:ml-56 ml-7 md:mt-8">
              <a
                href="https://github.com/aslantasmehmet"
                className="mr-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-purple-500 "
              >
                <BsGithub size={33} />
              </a>
              <a
                href="#"
                className="mr-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-purple-500 "
              >
                <BsInstagram size={33} />
              </a>
              <a
                href="#"
                className="mr-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-purple-500 "
              >
                <BsLinkedin size={33} />
              </a>
              <a
                href="#"
                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-purple-500 "
              >
                <BsTwitter size={30} />
              </a>
            </div>

            {/* Phone Email Contact */}

            <div className="-translate-y-2 md:ml-56 ml-7 flex flex-row  mt-12 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-purple-500 ">
              <BsFillTelephoneFill size={30} />
              <p className="font-semibold text-lg -translate-y-1 mr-4">
                +(90) 507 911 0466
              </p>
            </div>
            <div className="-translate-y-2 md:ml-56 ml-7 flex flex-row  mt-6 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-purple-500 ">
              <AiOutlineMail size={30} />
              <p className="font-semibold text-lg translate-x-2">
                iletisim@mehmetaslantas.dev
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="w-full h-16 bg-black ">
        <div>
          <p className="text-white text-left font-semibold ml-4 translate-y-5 ">
            Designed and Developed by MEHMET ASLANTAŞ
          </p>
        </div>
        <div className="text-white font-semibold -translate-y-1 md:block hidden ">
          2023 © All rights reserved.
        </div>
      </div>
    </>
  );
}
