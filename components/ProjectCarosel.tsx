"use client";

import React, { FC } from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { PROJECT } from "@/constants/project";
import EffectCarousel from "helper/effectCarousel";

import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import "@/styles/carosel.scss";

const ProjectCarosel: FC = () => {
  return (
    <div className="relative ">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectCarousel]}
        effect="carousel"
        grabCursor={true}
        loop={true}
        loopAdditionalSlides={1}
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={true}
        // autoplay={{
        //   delay: 3000,
        // }}
      >
        {PROJECT.map(({ title, img, desc }, index) => (
          <SwiperSlide
            key={index}
            // className="relative h-[380px] w-[520px] max-w-[calc(100%_-_48px)] rounded-lg bg-red-600"
          >
            <img src={img} alt="" className="h-[70%] w-full rounded-t-lg sm:h-4/5" />
            <div className="h-[30%] overflow-hidden rounded-b-lg px-5 py-2 sm:h-1/5">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="h-[2lh] overflow-hidden text-ellipsis text-sm">{desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
    </div>
  );
};

export default ProjectCarosel;
