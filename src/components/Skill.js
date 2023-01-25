import React from "react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Skill() {
  return (
    <div className="bg-zinc-800 w-full h-96 -translate-y-2">
      <div className="text-xl m-4 translate-y-4 sm:text-3xl  text-center text-white ">
        <span className=" pl-2 select-none border-l-4 border-b-4 border-purple-500">
          Skills
        </span>
      </div>
      {/* slider */}
      <div className="container mx-auto translate-y-28">
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
          <SwiperSlide>
            <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img  src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545775/react_k7sjy1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img  src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545775/next_m9wa8t.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img  src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545775/tailwind_tprmt8.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545775/bootstrap_fg0dzy.png" />
          </SwiperSlide>

          <SwiperSlide>
            <img  src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545774/css_nhk6k1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img  src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545774/html_lhoccu.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img  src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545774/git-logo_vqluql.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img  src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545774/github_eke0k2.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
