"use client";
import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div onClick={toggleModal} className="flex flex-col justify-center items-center">
      <img src="/image/pic3.png"></img>
      <div className="md:w-72 w-56 md:h-80 h-56 justify-center items-start flex md:-mt-64 lg:-mt-72 -mt-36"><img src="/image/playicon.png" className="cursor-pointer w-1/3"></img></div>
        </div>
        {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content lg:w-3/5 md:w-2/3 w-4/5">
            <video src="/video/video.mp4" controls className="rounded-xl"></video>
              <button onClick={toggleModal} className="close-modal lg:-mx-16 -mx-8 -my-7 lg:-my-14  text-white text-lg" >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
