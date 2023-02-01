import React, { useEffect, useState } from "react";
import skillsData from "../api/skillsData";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Skill() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-zinc-800 w-full h-screen -translate-y-2 hidden md:block">
        <div className="text-xl m-4 translate-y-4 sm:text-3xl  text-center text-white translate-y-28">
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="700"
            className="text-center  tracking-wider"
          >
            <span className=" pl-2 select-none border-l-4 border-b-4 border-purple-500">
              Skills
            </span>
          </div>
          {/* slider */}

          <div className=" container mx-auto md:my-10 md:translate-y-28">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={80}
              slidesPerView={6}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {skills.length &&
                skills.map((skill) => (
                  <SwiperSlide>
                    <img src={skill.img} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Responsive Design */}

      <div className="bg-zinc-800 w-full h-screen -translate-y-2 md:hidden">
        <div className="text-xl m-4 translate-y-4 sm:text-3xl  text-center text-white translate-y-32">
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="700"
            className="text-center  tracking-wider"
          >
            <span className=" pl-2 select-none border-l-4 border-b-4 border-purple-500">
              Skills
            </span>
          </div>
          {/* slider */}
          <div className=" container mx-auto my-16 translate-y-28">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={80}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {skills.length &&
                skills.map((skill) => (
                  <SwiperSlide>
                    <img src={skill.img} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
