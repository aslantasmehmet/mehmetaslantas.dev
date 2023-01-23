import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <div>
      <div className="w-full h-full bg-zinc-800">
        <div className="grid grid-cols-3 gap-4">
          <div className="Flex flex-col mt-48 ">
            <div className="">
              <p className="text-2xl text-white font-bold text-left ml-8">
                HI, I'AM{" "}
              </p>
              <p className="ml-8 text-4xl text-white font-bold text-left">
                MEHMET ASLANTAŞ
              </p>
            </div>
            <div className="text-2xl text-gray-300 font-bold text-left ml-8 mt-3">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  1500, //
                  "Backend Developer",
                  750,
                ]}
                wrapper="div"
                cursor={false}
                repeat={Infinity}
                style={{ fontSize: "24px", maxWidth: "500px" }}
              />
            </div>
            <div>
            <button class=" mt-6 -translate-x-28 relative overflow-hidden rounded-lg bg-black px-20 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2">
    <span class="absolute inset-px z-10 grid place-items-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-400">Download CV</span>
    <span aria-hidden class="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400" />
  </button></div>
          </div>

          <div className="col-span-2 ml-20">
            <img
              className="w-[610px] translate-y-6 ml-20 "
              src="https://vuejs-tailwindcss-portfolio.netlify.app/img/developer.d30886eb.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
