import React, { Component, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { review } from "../constants";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { quote } from "../assets";

import { cover } from "../assets";

import "vidstack/styles/ui/sliders.css";

import { MediaOutlet, MediaPlayer } from "@vidstack/react";

const Review = () => {
  const show =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <div className="w-full flex  sm:flex-row flex-col justify-center items-center bg-[#fdf1ec] relative mb-10">
      <img
        src={quote}
        alt="quote"
        className="absolute top-5 left-12 opacity-40"
      />
      <div className="md:w-[60%] sm:w-[50%] w-full">
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={40}
          loop="true"
          slidesPerView={1}
          autoplay={true}
          centeredSlides="true"
          navigation
          pagination={{ clickable: true }}
          style={{ height: "auto", width: "100%" }}
          className="w-full"
        >
          {review.map((pro, index) => (
            <SwiperSlide
              key={pro.id}
              className="flex flex-col justify-center items-center w-full smd:px-10 smd:py-10 py-10 px-14  "
            >
              <div className="smd:w-[80%] sm:w-[100%] w-full">
                <h4 className="mt-5 font-inter text-[18px] md:text-[20px] leading-[28px] md:leading-[30px] font-normal">
                  {pro.title}
                </h4>
                <div className="flex mt-4">
                  <img
                    src={pro.imgs}
                    alt="Display picture"
                    className="w-[50px] h-[50px] rounded-full border-2 border-solid border-primary"
                  />
                  <div className="flex flex-col ml-4 ">
                    <p className="text-primary font-bold font-inter">
                      {pro.name}
                    </p>
                    <p className="font-inter ">{pro.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:w-[60%] sm:w-[50%] h-[100%] w-full bg-secondary flex justify-center items-center">
        <div className="w-[100%] h-[100%]">
          <MediaPlayer src={show} poster={cover} controls>
            {/* ^ remove `controls` attribute if you're designing a custom UI */}
            <MediaOutlet />
          </MediaPlayer>
        </div>
      </div>
    </div>
  );
};

export default Review;
