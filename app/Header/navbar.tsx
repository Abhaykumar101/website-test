"use client"
import React, { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <div id="Home">
      <div className="py-4 sticky">
        <nav className={"flex items-center bg-transparent lg:mx-auto mx-4 "}>
          <div className="w-3/12 lg:px-14">
            <h1 className="font-[650] text-[20px]">ooulet</h1>
          </div>
          <div className="w-6/12 flex justify-center">
            <ul className="md:flex text-lg font-semibold gap-4 items-center hidden">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#Feature">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-3/12 md:flex justify-end lg:pr-14 hidden">
            <a
              href="#"
              className="flex justify-center items-center font-bold text-white lg:px-14 lg:py-3 md:py-3 md:px-3 py-2 px-4 xl:text-base text-sm rounded-md bg-[#EC0B43]"
            >
              Contact Sales
            </a>
          </div>
          <button
            type="button"
            className="md:hidden block ml-10  group"
            onClick={() => {
              setShow(show === true ? false : true);
            }}
          >
            <img src="/image/menu.svg" alt="menu" className="w-3/5" />
            
          </button>
          <div className={`${show ? "block" : "hidden"} md:hidden h-[100vh] bg-black w-full absolute right-0 top-0 r group-hover:bg-red-700`}>
            <ul className="text-3xl font-medium leading-[60px] gap-4 py-8 flex-col justify-start flex items-center text-white h-full">
              <li
               onClick={() => {
                setShow(show === true ? false : true);
              }}
               className="border w-5/6 flex justify-start items-center rounded-lg py-[1px] pl-2 hover:bg-blue-700">
                <a href="Home">Home</a>
              </li>
              <li
               onClick={() => {
                setShow(show === true ? false : true);
              }} 
              className="border w-5/6 flex justify-start items-center rounded-lg py-[1px] pl-2 hover:bg-blue-700">
                <a href="#Feature">Features</a>
              </li>
              <li
               onClick={() => {
                setShow(show === true ? false : true);
              }} 
              className="border w-5/6 flex justify-start items-center rounded-lg py-[1px] pl-2 hover:bg-blue-700">
                <a href="#">Pricing</a>
              </li>
              <li
               onClick={() => {
                setShow(show === true ? false : true);
              }}
               className="border w-5/6 flex justify-start items-center rounded-lg py-[1px] pl-2 hover:bg-blue-700">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
