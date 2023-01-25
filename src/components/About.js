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
        <div className="text-xl m-4 translate-y-5 sm:text-3xl  text-center text-black ">
        <span className=" pl-2 select-none border-l-4 border-b-4 border-purple-500">
          About Me
        </span>
          </div>
          <div className="mr-4 mt-8 font-semibold text-lg text-black border-b-4 border-purple-500 border-l-4  ">
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
