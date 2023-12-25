import React from "react";
import Modal from "./modal";
function Sectionsecond() {
  return (
    <>
      <div className="md:py-24 py-12 flex flex-col justify-center items-center lg:mx-auto mx-4">
        <div className="md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] 3xl:max-w-[1800px] lg:mx-auto">
          <div className="py-12 flex flex-col justify-center items-center gap-3">
            <h1 className="md:text-[32px] text-[20px] font-bold text-[#1C1A1A] text-center">
              Transform your Business with Ooulet
            </h1>
            <p className="text-center md:text-base text-sm text-[#3C3C3C] md:max-w-[700px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque non sem ultricies, volutpat felis non, imperdiet leo.
              Praesent ipsum leo.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <Modal />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sectionsecond;
