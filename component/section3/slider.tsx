"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className="md:py-8 py-2 md:mx-4 flex justify-center items-center">
      <Swiper
        slidesPerView={4}
        breakpoints={
          {
            1280 : {slidesPerView : 4},
            1024 : {slidesPerView : 3},
            640 : {slidesPerView : 2},
            100 : {slidesPerView : 1},
          }
        }
        spaceBetween={30}
        navigation={true}
        autoplay={
          {
            delay:5000,
            disableOnInteraction:false
          }
        }
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper md:w-full w-[300px] md:h-[500px] h-[450px]"
      >
        <SwiperSlide><div className="md:h-[450px] md:w-[350px] h-[400px] w-[300px] bg-[#FBFBFB] rounded-[20px] shadow-sm z-0 group/item ">
          {/* <img src="/ooulet-website/image/s1.jpeg" className="h-full w-[350px] rounded-[20px] object-center object-cover"> */}
          <img
            src="/image/1.png"
            alt="https://theflowerbar.ooulet.com/"
            className="h-full rounded-[20px] object-cover object-center"
          ></img>

          <div className="flex justify-center items-center -mt-40 opacity-95 md:opacity-100 group/edit md:invisible group-hover/item:visible ">
            <div className="gap-1 px-6 group rounded-xl md:w-80 w-64 md:h-36 h-32 bg-white flex flex-col justify-center items-center  shadow-sm transition-all duration-500">
              <h2 className="text-sm font-bold text-[#3C3C3C]">
              The Flower Bar
              </h2>
              <p className="text-xs font-medium text-[#919191] text-center">
              The Flower Bar; When words are not enough!
               
              </p>
              <a href="https://theflowerbar.ooulet.com/" target="_blank" className="bg-[#EC0B43] md:px-20 px-12 md:py-3 py-2 text-base font-semibold text-white rounded-3xl md:mt-4 mt-2 flex">View Website</a>
            </div>  
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="md:h-[450px] md:w-[350px] h-[400px] w-[300px] rounded-[20px] bg-[#FBFBFB] shadow-sm group/item">
          {/* <img src="/image/s2.jpeg" className="h-full w-[350px] rounded-[20px] object-center object-cover"> */}
          <img
            src="/image/2.png"
            className="h-full w-[350px] rounded-[20px]"
          />

            <div className="flex justify-center items-center -mt-40 opacity-95 md:opacity-100 group/edit md:invisible group-hover/item:visible">
            <div className="gap-1 px-6 group rounded-xl md:w-80 w-64 md:h-36 h-32 bg-white flex flex-col justify-center items-center  shadow-sm">
              <h2 className="text-sm font-bold text-[#3C3C3C] group-hover:text-[#1f1f1f]">
              Hijab Junction
              </h2>
              <p className="text-xs font-medium text-[#919191]  text-center">
              Hijab Junction, India's foremost hub for affordable and premier hijabs.
               
              </p>
              <a href="https://hijabjunction.com/" target="_blank" className="bg-[#EC0B43] px-12 md:py-3 py-2 text-base font-semibold text-white rounded-3xl md:mt-4 mt-2">View Website</a>
            </div>  
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="md:h-[450px] md:w-[350px] h-[400px] w-[300px] rounded-[20px] bg-[#FBFBFB] shadow-sm group/item">
          {/* <img src="/image/s3.jpeg" className="h-full w-[350px] rounded-[20px] object-center object-cover"> */}
          <img
            src="/image/3.png"
            className="h-full w-[350px] rounded-[20px] "
          />

            <div className="flex justify-center items-center -mt-40 opacity-95 md:opacity-100 group/edit md:invisible group-hover/item:visible">
            <div className="gap-1 px-6 group rounded-xl md:w-80 w-64 md:h-36 h-32 bg-white flex flex-col justify-center items-center  shadow-sm">
              <h2 className="text-sm font-bold text-[#3C3C3C] group-hover:text-[#1f1f1f]">
                Nappa Dori
              </h2>
              <p className="text-xs font-medium text-[#919191] text-center">
              Nappa Dori is a tribute to quintessential Indian sensibilities,
               
              </p>
              <a href="https://nappa-dori.ooulet.com/" target="_blank" className="bg-[#EC0B43] px-12 md:py-3 py-2 text-base font-semibold text-white rounded-3xl md:mt-4 mt-2">View Website</a>
            </div>  
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="md:h-[450px] md:w-[350px] h-[400px] w-[300px] rounded-xl bg-[#FBFBFB] shadow-sm group/item">
          {/* <img src="/image/s2.jpeg" className="h-full w-[350px] rounded-[20px] object-center object-cover"> */}
          <img
            src="/image/4.png"
            className="h-full w-[350px] rounded-[20px]"
          />

            <div className="flex justify-center items-center -mt-40 opacity-95 md:opacity-100 group/edit md:invisible group-hover/item:visible">
            <div className="gap-1 px-6 group rounded-xl md:w-80 w-64 md:h-36 h-32 bg-white flex flex-col justify-center items-center  shadow-sm">
              <h2 className="text-sm font-bold text-[#3C3C3C] group-hover:text-[#1f1f1f]">
                Serun Salon
              </h2>
              <p className="text-xs font-medium text-[#919191] text-center">
                Our salon is a premier destionation for alll your beauty and grooming needs.
               
              </p>
              <a href="https://serumsalon.ooulet.com/" target="_blank" className="bg-[#EC0B43] px-12 md:py-3 py-2 text-base font-semibold text-white rounded-3xl md:mt-4 mt-2">View Website</a>
            </div>  
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="md:h-[450px] md:w-[350px] h-[400px] w-[300px] rounded-[20px] bg-[#FBFBFB] shadow-sm group/item">
          {/* <img src="/image/s3.jpeg" className="h-full w-[350px] rounded-[20px] object-center object-cover"> */}
          <img
            src="/image/5.png"
            className="h-full w-[350px] rounded-[20px] "
          />

            <div className="flex justify-center items-center -mt-40 opacity-95 md:opacity-100 group/edit md:invisible group-hover/item:visible">
            <div className="gap-1 px-6 group rounded-xl md:w-80 w-64 md:h-36 h-32 bg-white flex flex-col justify-center items-center  shadow-sm">
              <h2 className="text-sm font-bold text-[#3C3C3C] group-hover:text-[#1f1f1f]">
              R for Rabbit
              </h2>
              <p className="text-xs font-medium text-[#919191] text-center">
              R for Rabbit introduces India&apos;s most breathable yoga pant style diapers,
               
              </p>
              <a href="https://r-for-rabbit.ooulet.com/" target="_blank" className="bg-[#EC0B43] px-12 md:py-3 py-2 text-base font-semibold text-white rounded-3xl md:mt-4 mt-2">View Website</a>
            </div>  
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="md:h-[450px] md:w-[350px] h-[400px] w-[300px] rounded-[20px] bg-[#FBFBFB] shadow-sm group/item">
          {/* <img src="/image/s3.jpeg" className="h-full w-[350px] rounded-[20px] object-center object-cover"> */}
          <img
            src="/image/6.png"
            className="h-full w-[350px] rounded-[20px] "
          />

            <div className="flex justify-center items-center -mt-40 opacity-95 md:opacity-100 group/edit md:invisible group-hover/item:visible">
            <div className="gap-1 px-6 group rounded-xl md:w-80 w-64 md:h-36 h-32 bg-white flex flex-col justify-center items-center  shadow-sm">
              <h2 className="text-sm font-bold text-[#3C3C3C] group-hover:text-[#1f1f1f]">
              Samyakk
              </h2>
              <p className="text-xs font-medium text-[#919191] text-center">
              Samyakk started out as an ethnic store in the silicon valley of India,
               
              </p>
              <a href="https://samyakk.ooulet.com/" target="_blank" className="bg-[#EC0B43] px-12 md:py-3 py-2 text-base font-semibold text-white rounded-3xl md:mt-4 mt-2">View Website</a>
            </div>  
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="md:h-[450px] md:w-[350px] h-[400px] w-[300px] rounded-[20px] bg-[#FBFBFB] shadow-sm group/item">
          {/* <img src="/image/s3.jpeg" className="h-full w-[350px] rounded-[20px] object-center object-cover"> */}
          <img
            src="/image/7.png"
            className="h-full w-[350px] rounded-[20px] "
          />

            <div className="flex justify-center items-center -mt-40 opacity-95 md:opacity-100 group/edit md:invisible group-hover/item:visible">
            <div className="gap-1 px-6 group rounded-xl md:w-80 w-64 md:h-36 h-32 bg-white flex flex-col justify-center items-center  shadow-sm">
              <h2 className="text-sm font-bold text-[#3C3C3C] group-hover:text-[#1f1f1f]">
              BambooPecker
              </h2>
              <p className="text-xs font-medium text-[#919191] text-center">
              Using a rural India-centered and earth-centered approach,
               
              </p>
              <a href="https://bamboopecker.ooulet.com/" target="_blank" className="bg-[#EC0B43] px-12 md:py-3 py-2 text-base font-semibold text-white rounded-3xl md:mt-4 mt-2">View Website</a>
            </div>  
          </div>
        </div></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
