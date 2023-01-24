import React from "react";


export default function About() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <img
          className=" mt-4 translate-y-20"
          src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674245277/Avatar-Maker_fmnmot.png"
        />
      </div>
      <div className="col-span-2">
        <div className="flex flex-col">
          <div className="mt-16  w-56 h-14 ml-96 relative overflow-hidden rounded-lg  px-20 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2 ">
            <span class="absolute inset-px z-10 grid place-items-center rounded-lg  bg-gradient-to-t from-neutral-800 text-white font-bold">
              ABOUT ME
            </span>
            <span
              aria-hidden
              class="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
            />
          </div>
          <div className="mr-4 mt-8 font-semibold text-lg text-black border-b-4 border-orange-500 border-l-4 border-orange-500 ">
            I am a Software Developer who is committed to self-development and
            lifetime learning. I am always active and eager to learn new skills.
            I believe this way I can consistently achieve better results.
            <br />
            <br />
            I try to utilize a creative approach to problem-solving while
            working in a team or individually.
            <br />
            <br />
            Also, communication is the most important key to making progress in
            the software field and I believe that building strong relationships
            with people delivers the best results.
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
