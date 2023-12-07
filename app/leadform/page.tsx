import React from 'react'

function Leadform() {
    return(
           
            <div className="flex justify-center items-center relative md:block bg-white h-[100vh] xl:mx-auto mx-4">
        
              <img src="/image/man.png" className="right-0 bottom-0 xl:block absolute hidden object-cover object-center"/>
        
            <div className="w-full lg:max-w-[1200px] h-full  flex flex-col justify-center items-start relative xl:mx-auto ">
           
              <img src="/image/logo.webp" className="left-0 top-4 absolute w-20" />
        
                <div className="flex flex-col justify-center lg:items-start items-center lg:max-w-[800px] md:gap-8 gap-10 md:px-16 py-8 px-10 w-full rounded-xl bg-[#f3f3f3]">
                   <div className="flex flex-col justify-center lg:items-start items-center md:gap-6 gap-4">
                    <h2 className="text-black md:text-[32px] text-[30px] font-bold">
                        Schedule a demo with our team
                    </h2>
                    <p className="text-black text-lg font-medium md:max-w-[700px] md:text-center lg:text-start">
                        Have queries? Our team will connect with you and show how Ooulet can help
                        your business. To book an appointment please fill details below:
                    </p>
                   </div>
        
                    <div className="w-full xl:w-auto grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                        <input type="text" placeholder="Your Name" className="xl:w-52 h-12 w-full rounded-lg bg-opacity-30 bg-white px-4 border border-[bg-\[\#FFF\]] text-sm text-black placeholder:text-black outline-none"/>
                        <input type="text" placeholder="Phone Number" className="xl:w-52 h-12 w-full rounded-lg bg-white bg-opacity-30 px-4  border border-[bg-\[\#FFF\]] text-sm text-black placeholder:text-black outline-none"/>
                        <div className="md:col-span-2 col-span1 lg:col-span-1 flex justify-center w-full lg:py-0 md:py-4">
                            <button id="#" className="xl:w-52 md:w-1/2 lg:w-full w-full text-white h-12 bg-[#BB153E] font-bold rounded-lg">Schedule Call</button>
                        </div>
        
                    </div>
        
                  </div> 
        
                </div>
        
            </div>
          );
}

export default Leadform

