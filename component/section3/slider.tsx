"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slide.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
     <div className="py-8 bg-[#FBFBFB] justify-center items-start gap-5 xl:mx-auto mx-4 z-0">
      <Swiper
        slidesPerView={4}
        breakpoints={{
          1280: { slidesPerView: 4},
            1024: { slidesPerView: 3},
            640: { slidesPerView: 2},
            100: {slidesPerView: 1},
          }}

        spaceBetween={2}
        navigation={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable : true}}

          loop={true}

        modules={[Autoplay,Navigation,Pagination]}
        className="mySwiper lg:w-full"
      >
        <SwiperSlide><div className="h-[450px] w-[350px] rounded-[20px] shadow-sm z-0 group/item ">
          {/* <img src="/ooulet-website/image/s1.jpeg" className="h-full w-[350px] rounded-[20px] object-center object-cover"> */}
          <img
            src="/image/1.png"
            alt="https://theflowerbar.ooulet.com/"
            className="h-full rounded-[20px] object-cover object-center"
          ></img>

          <div className="flex justify-center items-center -mt-40 group/edit invisible group-hover/item:visible ">
            <div className="gap-1 px-6 group rounded-xl w-80 h-36 bg-white flex flex-col justify-center items-center  shadow-sm transition-all duration-500">
              <h2 className="text-sm font-bold text-[#3C3C3C]">
              The Flower Bar
              </h2>
              <p className="text-xs font-medium text-[#919191] text-center">
              The Flower Bar; When words are not enough!
               
              </p>
              <a href="https://theflowerbar.ooulet.com/" className="bg-[#EC0B43] px-20 py-3 text-base font-semibold text-white rounded-3xl mt-4 flex">View Website</a>
            </div>  
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="h-[450px] w-[350px] rounded-[20px] bg-white shadow-sm group/item">
          {/* <img src="/image/s2.jpeg" className="h-full w-[350px] rounded-[20px] object-center object-cover"> */}
          <img
            src="/image/2.png"
            className="h-full w-[350px] rounded-[20px]"
          />

            <div className="flex justify-center items-center -mt-40 group/edit invisible group-hover/item:visible">
            <div className="gap-1 px-6 group rounded-xl w-80 h-36 bg-white flex flex-col justify-center items-center  shadow-sm">
              <h2 className="text-sm font-bold text-[#3C3C3C] group-hover:text-[#1f1f1f]">
              Hijab Junction
              </h2>
              <p className="text-xs font-medium text-[#919191]  text-center">
              Hijab Junction, India's foremost hub for affordable and premier hijabs.
               
              </p>
              <a href="https://hijabjunction.com/" className="bg-[#EC0B43] px-20 py-3 text-base font-semibold text-white rounded-3xl mt-4">View Website</a>
            </div>  
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="h-[450px] w-[350px] rounded-[20px] bg-white shadow-sm group/item">
          {/* <img src="/image/s3.jpeg" className="h-full w-[350px] rounded-[20px] object-center object-cover"> */}
          <img
            src="/image/3.png"
            className="h-full w-[350px] rounded-[20px] "
          />

            <div className="flex justify-center items-center -mt-40 group/edit invisible group-hover/item:visible">
            <div className="gap-1 px-6 group rounded-xl w-80 h-36 bg-white flex flex-col justify-center items-center  shadow-sm">
              <h2 className="text-sm font-bold text-[#3C3C3C] group-hover:text-[#1f1f1f]">
                Nappa Dori
              </h2>
              <p className="text-xs font-medium text-[#919191] text-center">
              Nappa Dori is a tribute to quintessential Indian sensibilities,
               
              </p>
              <a href="https://nappa-dori.ooulet.com/" className="bg-[#EC0B43] px-20 py-3 text-base font-semibold text-white rounded-3xl mt-4">View Website</a>
            </div>  
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="h-[450px] w-[350px] rounded-xl bg-white shadow-sm group/item">
          {/* <img src="/image/s2.jpeg" className="h-full w-[350px] rounded-[20px] object-center object-cover"> */}
          <img
            src="/image/4.png"
            className="h-full w-[350px] rounded-[20px]"
          />

            <div className="flex justify-center items-center -mt-40 group/edit invisible group-hover/item:visible">
            <div className="gap-1 px-6 group rounded-xl w-80 h-36 bg-white flex flex-col justify-center items-center  shadow-sm">
              <h2 className="text-sm font-bold text-[#3C3C3C] group-hover:text-[#1f1f1f]">
                Serun Salon
              </h2>
              <p className="text-xs font-medium text-[#919191] text-center">
                Our salon is a premier destionation for alll your beauty and grooming needs.
               
              </p>
              <a href="https://serumsalon.ooulet.com/" className="bg-[#EC0B43] px-20 py-3 text-base font-semibold text-white rounded-3xl mt-4">View Website</a>
            </div>  
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="h-[450px] w-[350px] rounded-[20px] bg-white shadow-sm group/item">
          {/* <img src="/image/s3.jpeg" className="h-full w-[350px] rounded-[20px] object-center object-cover"> */}
          <img
            src="/image/5.png"
            className="h-full w-[350px] rounded-[20px] "
          />

            <div className="flex justify-center items-center -mt-40 group/edit invisible group-hover/item:visible">
            <div className="gap-1 px-6 group rounded-xl w-80 h-36 bg-white flex flex-col justify-center items-center  shadow-sm">
              <h2 className="text-sm font-bold text-[#3C3C3C] group-hover:text-[#1f1f1f]">
              R for Rabbit
              </h2>
              <p className="text-xs font-medium text-[#919191] text-center">
              R for Rabbit introduces India&apos;s most breathable yoga pant style diapers,
               
              </p>
              <a href="https://r-for-rabbit.ooulet.com/" className="bg-[#EC0B43] px-20 py-3 text-base font-semibold text-white rounded-3xl mt-4">View Website</a>
            </div>  
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="h-[450px] w-[350px] rounded-[20px] bg-white shadow-sm group/item">
          {/* <img src="/image/s3.jpeg" className="h-full w-[350px] rounded-[20px] object-center object-cover"> */}
          <img
            src="/image/6.png"
            className="h-full w-[350px] rounded-[20px] "
          />

            <div className="flex justify-center items-center -mt-40 group/edit invisible group-hover/item:visible">
            <div className="gap-1 px-6 group rounded-xl w-80 h-36 bg-white flex flex-col justify-center items-center  shadow-sm">
              <h2 className="text-sm font-bold text-[#3C3C3C] group-hover:text-[#1f1f1f]">
              Samyakk
              </h2>
              <p className="text-xs font-medium text-[#919191] text-center">
              Samyakk started out as an ethnic store in the silicon valley of India,
               
              </p>
              <a href="https://samyakk.ooulet.com/" className="bg-[#EC0B43] px-20 py-3 text-base font-semibold text-white rounded-3xl mt-4">View Website</a>
            </div>  
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="h-[450px] w-[350px] rounded-[20px] bg-white shadow-sm group/item">
          {/* <img src="/image/s3.jpeg" className="h-full w-[350px] rounded-[20px] object-center object-cover"> */}
          <img
            src="/image/7.png"
            className="h-full w-[350px] rounded-[20px] "
          />

            <div className="flex justify-center items-center -mt-40 group/edit invisible group-hover/item:visible">
            <div className="gap-1 px-6 group rounded-xl w-80 h-36 bg-white flex flex-col justify-center items-center  shadow-sm">
              <h2 className="text-sm font-bold text-[#3C3C3C] group-hover:text-[#1f1f1f]">
              BambooPecker
              </h2>
              <p className="text-xs font-medium text-[#919191] text-center">
              Using a rural India-centered and earth-centered approach,
               
              </p>
              <a href="https://bamboopecker.ooulet.com/" className="bg-[#EC0B43] px-20 py-3 text-base font-semibold text-white rounded-3xl mt-4">View Website</a>
            </div>  
          </div>
        </div></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
