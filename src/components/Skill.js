import React from "react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Skill() {
  return (
    <div className="bg-zinc-800 w-full h-96 -translate-y-2">
      <div className="translate-y-16 translate-x-48 mt-16  w-56 h-14 ml-96 relative overflow-hidden rounded-lg  px-20 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2 ">
        <span class="absolute inset-px z-10 grid place-items-center rounded-lg  bg-gradient-to-t from-neutral-800 text-white font-bold">
          SKİLL
        </span>
        <span
          aria-hidden
          class="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
        />
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
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545775/react_k7sjy1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545775/next_m9wa8t.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545775/tailwind_tprmt8.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545775/bootstrap_fg0dzy.png" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545774/css_nhk6k1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545774/html_lhoccu.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545774/git-logo_vqluql.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545774/github_eke0k2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1674545775/bootstrap_fg0dzy.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
