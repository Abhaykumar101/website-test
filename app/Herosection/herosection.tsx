import React from "react";

function Herosection() {
    return (
     <div>
        <div className="bg-[#FCDEB3] -mt-28 py-32 ">
        <div className="lg:gap-8 gap-7 bg-transparent flex md:flex-row flex-col-reverse justify-center items-start xl:items-center lg:mx-auto mx-4">
          <div className="md:w-1/2 lg:w-2/5 w-full bg-[#FFF] xl:py-16 lg:py-10 md:py-6 py-8 px-10 xl:px-14 flex flex-col rounded-2xl ">
            <h2 className="text-sm font-medium text-[#8c8c8c] tracking-widest ">
              TECHNOLOGY
            </h2>
            <h1 className="xl:text-[40px] lg:text-3xl md:text-2xl text-2xl font-bold  text-[#1C1A1A] lg:leading-[48px] md:leading-[30px] md:max-w-[500px]">
              Revolutionize your{" "}
              <span className="xl:block">E-Commerce business</span>
            </h1>
            <p className="lg:text-lg text-sm font-[450] lg:py-4 py-1 text-[#3C3C3C]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              pellentesque non sem ultricies, volutpat felis non,imperdiet leo.
              Praesent ipsum leo.
            </p>
            <div className="pt-5">
              
              <a href="#" className="xl:text-base text-sm font-bold flex items-center justify-center text-white bg-[#EC0B43] lg:py-3 w-2/5 py-2 rounded-md">
                Contact Sales
              </a>
            </div>
          </div>

          <div className=" flex flex-col md:w-1/2 w-full">
            <img className="rounded-2xl" src="/image/pic1.png" />
            <div className="hidden items-center justify-center bg-transparent lg:-mt-12 -mt-8">
              <div className="xl:py-6 py-4 w-3/4 bg-slate-100 rounded-xl flex items-center justify-evenly">
                <img
                  className="xl:w-36 xl:h-12 lg:w-24 lg:h-8  w-20 h-9 rounded-lg "
                  src="/image/pic1.png"
                />
                <img
                  className="xl:w-36 xl:h-12 lg:w-24 lg:h-8  w-20 h-9 opacity-60 rounded-lg"
                  src="/image/b.jpg"
                />
                <img
                  className="xl:w-36 xl:h-12 lg:w-24 lg:h-8  w-20 h-9 opacity-40 rounded-lg"
                  src="/image/c.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    );
}

export default Herosection;
