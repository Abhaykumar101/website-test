import React from 'react'


function Footer() {
    return(
        <div className="xl:py-20 lg:flex w-full text-[#3C3C3C] bg-[#F8F8F8] grid md:grid-cols-2 grid-cols-1">
            <div className="lg:py-8 md:py-4 py-2 lg:px-16 px-4 lg:w-1/3">
                <img src="/image/logo.webp" className="w-20"></img>
                <p className="lg:py-8 md:py-4 py-2 md:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="lg:w-1/5 lg:py-8 py-4 px-4">
                <h2 className="font-bold text-sm">Usefull Links</h2>
                <div className="lg:py-8 md:py-4 py-2 flex flex-col md:text-sm text-xs lg:leading-6">
                <a href="">Privacy Policy</a>
                <a href="">Terms & Conditions</a>
                <a href="">Refund & Cancellation Policy</a>
                <a href="">Download App</a>
                </div>
            </div>
            <div className="lg:w-1/4 lg:py-8 py-2 px-4">
                <h2 className="font-bold text-sm">Reach to Us</h2>
                <p className="lg:py-8 md:py-4 py-2 md:text-sm text-xs">Digital Umbrella, Near Kajaria Showroom, Delhi Road, Roorkee, Uttarakhand 247667</p>
            </div>
            <div className="lg:w-2/5 lg:py-8 py-4 px-4">
                <h2 className="font-bold text-sm">We&apos;re Social</h2>
                <div className="lg:py-8 md:py-4 py-2 flex md:gap-4 gap-2">
                    <a href=""><img className="cursor-pointer" src="/image/Instagram.png"/></a>
                    <a href=""><img className="cursor-pointer" src="/image/YouTube.png"/></a>
                    <a href=""><img className="cursor-pointer" src="/image/Facebook.png"/></a>
                    <a href=""><img className="cursor-pointer" src="/image/Email.png" /></a>
                </div>
                <div className="py-6 block sm:hidden">

                </div>
            </div>
            
        </div>
    );
}

export default Footer;