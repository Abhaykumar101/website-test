"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export type StoreData = {
  src : string;
  alt : string;
  sname: string;
  sdescription: string;
  href : string;
}



// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function App() {

  const StoreTrait : StoreData[] = [
    {
      src:"/image/1.png",
      alt:"https://theflowerbar.ooulet.com/",
      sname:"The Flower Bar",
      sdescription:"The Flower Bar; When words are not enough!",
      href:"https://theflowerbar.ooulet.com/"
    },
    {
      src:"/image/2.png",
      alt:"https://hijabjunction.com/",
      sname:"Hijab Junction",
      sdescription:"Hijab Junction, India's foremost hub for affordable and premier hijabs.",
      href:"https://hijabjunction.com/"
    },
    {
      src:"/image/3.png",
      alt:"https://nappa-dori.ooulet.com/",
      sname:"Nappa Dori",
      sdescription:"Nappa Dori is a tribute to quintessential Indian sensibilities,",
      href:"https://nappa-dori.ooulet.com/"
    },
    {
      src:"/image/4.png",
      alt:"https://serumsalon.ooulet.com/",
      sname:"Serun Salon",
      sdescription:"Our salon is a premier destionation for alll your beauty and grooming needs.",
      href:"https://serumsalon.ooulet.com/"
    },
    {
      src:"/image/5.png",
      alt:"https://r-for-rabbit.ooulet.com/",
      sname:"R for Rabbit",
      sdescription:" R for Rabbit introduces India&apos;s most breathable yoga pant style diapers,",
      href:"https://r-for-rabbit.ooulet.com/"
    },
    {
      src:"/image/6.png",
      alt:"https://samyakk.ooulet.com/",
      sname:"Samyakk",
      sdescription:" Samyakk started out as an ethnic store in the silicon valley of India,",
      href:"https://samyakk.ooulet.com/"
    },
    {
      src:"/image/7.png",
      alt:"https://bamboopecker.ooulet.com/",
      sname:"BambooPecker",
      sdescription:"Using a rural India-centered and earth-centered approach,",
      href:"https://bamboopecker.ooulet.com/"
    },
  ]


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
        {StoreTrait.map((items:StoreData, index: number) => (
        <SwiperSlide key={index}>
          <div className="md:h-[450px] md:w-[350px] h-[400px] w-[300px] rounded-[20px] bg-[#FBFBFB] shadow-sm group/item">
          <img
            src={items.src}
            className="h-full w-[350px] rounded-[20px]"
            alt={items.alt}
          />
            <div className="flex justify-center items-center -mt-40 opacity-95 md:opacity-100 group/edit md:invisible group-hover/item:visible">
            <div className="gap-1 px-6 group rounded-xl md:w-80 w-64 md:h-36 h-32 bg-white flex flex-col justify-center items-center  shadow-sm">
              <h2 className="text-sm font-bold text-[#3C3C3C] group-hover:text-[#1f1f1f]">{items.sname}</h2>
              <p className="text-xs font-medium text-[#919191] text-center">{items.sdescription}</p>
              <a href={items.href} target="_blank" className="bg-[#EC0B43] md:px-20 px-12 md:py-3 py-2 text-base font-semibold text-white rounded-3xl md:mt-4 mt-2">View Website</a>
            </div>  
          </div>
        </div>
        </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}
