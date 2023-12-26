"use client";
import React, { useState } from "react";
import "./modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const handleModalToggle = () => {
    setModal(!modal);
  };

  // UseEffect to add or remove the class from document.body
  React.useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("active-modal");
    };
  }, [modal]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div onClick={handleModalToggle} className="flex flex-col justify-center items-center">
      <img src="/image/pic3.png" />
      <div className="md:w-72 w-56 md:h-80 h-56 justify-center items-start flex md:-mt-64 lg:-mt-72 -mt-36"><img src="/image/playicon.png" className="cursor-pointer w-1/3"></img></div>
        </div>
        {modal && (
        <div className="modal">
          <div onClick={handleModalToggle} className="overlay"></div>
            <div className="modal-content lg:w-3/5 md:w-2/3 w-4/5">
            <video src="/video/video.mp4" controls className="rounded-xl"></video>
              <button onClick={handleModalToggle} className="close-modal lg:-mx-16 -mx-8 -my-7 lg:-my-14  text-white text-lg" >
                X
              </button>
            </div>
          </div>
        )}
      </div>

      <style>
        {
          `
          body.active-modal {
            overflow-y: hidden;
            
        }
        .modal{
            position: relative;
            z-index: 99999;
            display: block;
        
        }
        
        .modal, .overlay {
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            position: fixed;
        }
        
        .overlay {
            background: rgba(49,49,49,0.8);
        }
        .modal-content {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: none;
            padding: 14px 28px;
            border-radius: 3px;
        
        }
        
        .close-modal {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 5px 7px;
        }
          `
        }
      </style>
    </>
  );
}
