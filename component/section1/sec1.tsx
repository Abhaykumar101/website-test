"use client"
import React, { useState } from "react";

function Sectionone() {
  const [image, setImage] = useState(0);
  
  const enterMouse = () => {
    setImage((preImage) => (preImage + 1) % 5);
  };
  const enterLeave = () => {
    // setImage(0);
  };


  // console.log(image)

  const imagePath = [
    "/image/pic2.png",
    "/image/pic1.png",
    "/image/pic3.png",
    "/image/pic4.png",
    "/image/pic1.png",
  ];

  return (
    <div className="flex flex-col justify-center items-center py-8">
      <div className="py-16 flex flex-col justify-center items-center gap-3 lg:mx-4 mx-4">
        <h1 className="sm:text-[32px] text-[24px] font-bold text-[#1C1A1A] text-center">
          Revolutionize your E-Commerce business
        </h1>
        <p className="text-center sm:text-base text-sm text-[#3C3C3C] md:max-w-[700px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          non sem ultricies, volutpat felis non, imperdiet leo. Praesent ipsum
          leo.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-[1280px] xl:mx-auto mx-4">
        <div className="flex flex-col md:max-w-[550px]">
          <div
            onMouseEnter={enterMouse} onMouseLeave={enterLeave}
            className={`hover:bg-[#FCDEB3] hover:border-red-300  border py-4 px-10  flex flex-col justify-center items-start rounded-tl-[20px] md:rounded-tr-[0px] rounded-tr-[20px] cursor-pointer`}
          >
            <h2 className="sm:text-lg text-base font-bold">
              Feature Packed Website
            </h2>
            <p className="sm:text-sm text-xs font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque non sem ultricies, volutpat felis non, imperdiet leo.
            </p>
          </div>
          <div   onMouseEnter={enterMouse} onMouseLeave={enterLeave} className="hover:bg-[#FCDEB3] hover:border-red-300  border py-4 px-10 flex flex-col justify-center items-start cursor-pointer">
            <h2 className="sm:text-lg text-base font-bold">
              Write content like a pro using Ooulet Al
            </h2>
            <p className="sm:text-sm text-xs font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque non sem ultricies, volutpat felis non, imperdiet leo.
            </p>
          </div>
          <div   onMouseEnter={enterMouse} onMouseLeave={enterLeave} className="hover:bg-[#FCDEB3] hover:border-red-300  border py-4 px-10 flex flex-col justify-center items-start cursor-pointer">
            <h2 className="sm:text-lg text-base font-bold">
              Blazing Fast Speed
            </h2>
            <p className="sm:text-sm text-xs font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque non sem ultricies, volutpat felis non, imperdiet leo.
            </p>
          </div>
          <div   onMouseEnter={enterMouse} onMouseLeave={enterLeave} className="hover:bg-[#FCDEB3] hover:border-red-300  border py-4 px-10 flex flex-col justify-center items-start cursor-pointer">
            <h2 className="sm:text-lg text-base font-bold">
              SEO Optimized & Responsive Designs
            </h2>
            <p className="sm:text-sm text-xs font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque non sem ultricies, volutpat felis non, imperdiet leo.
            </p>
          </div>
          <div   onMouseEnter={enterMouse} onMouseLeave={enterLeave} className="hover:bg-[#FCDEB3] hover:border-red-300  border py-4 px-10 flex flex-col justify-center items-start rounded-bl-[20px] md:rounded-br-[0px] rounded-br-[20px] cursor-pointer">
            <h2 className="sm:text-lg text-base font-bold">0% Platform Fee</h2>
            <p className="sm:text-sm text-xs font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque non sem ultricies, volutpat felis non, imperdiet leo.
            </p>
          </div>
        </div>
        <div className="md:max-w-[550px] md:flex hidden">
          <img
            id="changeimage"
            src={imagePath[image]}
            className="rounded-tr-[20px] rounded-br-[20px] object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default Sectionone;
