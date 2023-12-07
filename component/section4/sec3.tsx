import React from 'react'

function Sectionfourth() {

  return(
    <div className="py-20 flex flex-col justify-center items-center xl:mx-auto mx-2 gap-4 md:gap-0">
    <div className="flex lg:mx-auto mx-2 flex-col-reverse md:flex-row max-w-6xl">
      <div className="lg:py-20 py-4 px-4 md:px-12 md:w-1/2 w-full bg-[#DCF1E5] flex flex-col justify-center  gap-3 md:gap-5 md:rounded-tl-[25px] md:rounded-bl-[0px] rounded-bl-[25px] md:rounded-br-[0px] rounded-br-[25px]">
        <h2 className="md:text-[26px] text-[20px] font-bold text-[#1C1A1A]">
          Maximize impact, minimize effort
        </h2>
        <p className="md:text-sm text-xs text-[#3C3C3C] font-medium md:leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          scelerisque efficitur diam sed semper. Pellentesque nec tempus
          tortor. Fusce tempus odio ornare ex accumsan, vel consequat neque
          viverra. Nullam gravida orci sit amet finibus consequat. Quisque
          sollicitudin interdum velit non rhoncus. Donec posuere, sem ut
          iaculis elementum, ex quam mollis nisi, at scelerisque turpis
          massa ac tellus. Quisque condimentum ligula in mauris porttitor,
          at mollis nunc feugiat. Nulla facilisi.
        </p>
      </div>
      <div className="flex md:w-1/2 w-full bg-cover rounded-tr-[25px] md:rounded-tl-[0px] rounded-tl-[25px]">
        {/* <img src="/ooulet-website/image/zz.jpg" className="object-cover object-center rounded-tr-[25px] md:rounded-tl-[0px] rounded-tl-[25px] md:hidden"> */}
        <img
          src="/image/zz.jpg"
          className="object-cover object-center rounded-tr-[25px] md:rounded-tl-[0px] rounded-tl-[25px]"
        />
      </div>
    </div>
    <div className="flex flex-col lg:mx-auto mx-2 md:flex-row max-w-6xl">
      <div className="flex md:w-1/2 w-full md:rounded-bl-[25px] bg-cover md:rounded-tl-[0px] rounded-tl-[25px] md:rounded-tr-[0px] rounded-tr-[25px]">
        {/* <img src="/ooulet-website/image/4.jpeg" className="object-cover object-center md:rounded-bl-[25px] md:rounded-tl-[0px] rounded-tl-[25px] md:rounded-tr-[0px] rounded-tr-[25px] md:hidden"> */}
        <img
          src="/image/zz1.jpeg"
          className="object-cover object-center md:rounded-bl-[25px] md:rounded-tl-[0px] rounded-tl-[25px] md:rounded-tr-[0px] rounded-tr-[25px]"
        />
      </div>
      <div className="lg:py-20 py-4 px-4 md:px-12 md:w-1/2 w-full bg-[#FEEDD9] flex flex-col justify-center gap-3 md:gap-5  md:rounded-bl-[0px] rounded-bl-[25px]  rounded-br-[25px]">
        <h2 className="md:text-[26px] text-[20px] font-bold text-[#1C1A1A]">
          Turn visitors into delighted customers
        </h2>
        <p className="md:text-sm text-xs text-[#3C3C3C] font-medium md:leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          scelerisque efficitur diam sed semper. Pellentesque nec tempus
          tortor. Fusce tempus odio ornare ex accumsan, vel consequat neque
          viverra. Nullam gravida orci sit amet finibus consequat. Quisque
          sollicitudin interdum velit non rhoncus. Donec posuere, sem ut
          iaculis elementum, ex quam mollis nisi, at scelerisque turpis
          massa ac tellus. Quisque condimentum ligula in mauris porttitor,
          at mollis nunc feugiat. Nulla facilisi.
        </p>
      </div>
    </div>
  </div>
);
}

export default Sectionfourth;