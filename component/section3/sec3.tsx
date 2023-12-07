import React from 'react'
import Slider from './slider'

function Sectionthird() {
  return(
    <div id="Feature" className="bg-[#FBFBFB] lg:block">
    <div className="py-12 flex flex-col justify-center items-center gap-3 lg:mx-auto mx-4">
      <h2 className="lg:text-[32px] md:text-[28px] text-[24px] font-bold text-[#1C1A1A] text-center">
        Features that will boost your sales
      </h2>
      <p className="text-center lg:text-base text-sm text-[#1C1A1A] md:max-w-[700px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque non sem ultricies, volutpat felis non, imperdiet leo.
        Praesent ipsum leo.
      </p>
    </div>
<Slider />
  </div>

);
}

export default Sectionthird;