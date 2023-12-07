"use client";
import React, { useState } from "react";
import {client} from "../../server/leadData";
import { gql, useMutation } from "@apollo/client";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Swal from "sweetalert2";

function Sectionseven() {

  const CREATE_USER = gql`
    mutation CreateLead($createLeadInput: CreateLeadInput!) {
    createLead(createLeadInput: $createLeadInput) {
      name
      number
    }
  }
`;
  
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isPhoneNumberValid = (phoneNumber: string): boolean => {
  const phonePattern = /^(\+91)?[6-9]\d{9}$/;
  return phonePattern.test(phoneNumber);
};

  const [inputField, setInputField] = useState({
    name: "",
    phone: "",
  });


  const inputHander = (e: {
    preventDefault(): unknown;
    target: { name: string; value: string };
  }) => {
    e.preventDefault();

    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });

    
  };

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputField.name || !inputField.phone) {
      setErrorMessage("*All fields are required");
      return;
    }

    if (!isPhoneNumberValid(inputField.phone)) {
      // If phone number is not valid, set an error message and exit the function
      setErrorMessage("*Invalid Number");
      return;
    }

    // Phone number is valid, now call the function to add user to the database
    addUserToDatabase(inputField);
    
  };

  const addUserToDatabase = async (inputField: {
    
    phone: string; name: string 
}) => {
  try {
    const data = await client.mutate({
      mutation: CREATE_USER,
      variables: {
        createLeadInput: {
          name: inputField.name,
          number:inputField.phone,
        },
      },
    });
    console.log(data);
          // Display a success SweetAlert message
          Swal.fire({
            title: "Success!",
            text: "submitted successfully!",
            icon: "success",
            timer: 4000,
            showConfirmButton: false,
          });
          
  } catch (error) {
    console.error(error);
  }
  };

  return (
    <div id="contact" className="flex justify-center items-center -mt-36">
      <div className="w-full lg:max-w-[1200px] md:py-24 py-16 bg-[#BB153E] shadow-[0px_5px_12px_0px_rgba(0,0,0,0.2)] rounded-[30px] flex relative xl:mx-auto mx-4">
        <img
          src="/image/man.png"
          className="right-0 bottom-0 absolute hidden xl:block object-cover object-center"
        />

        <div className="flex flex-col justify-center lg:items-start items-center md:gap-8 gap-6 md:px-16 px-10 w-full">
          <div className="flex flex-col md:gap-6 gap-4 justify-center lg:items-start items-center">
            <h2 className="text-[#FDFDFD] md:text-[32px] text-[30px] font-bold">
              Schedule a demo with our team
            </h2>
            <p className="text-[#fff] text-lg font-medium md:max-w-[700px] md:text-center lg:text-start">
              Have queries? Our team will connect with you and show how Ooulet
              can help your business. To book an appointment please fill details
              below:
            </p>
          </div>
          <form className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full xl:w-auto ">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="xl:w-52 h-12 w-full rounded-lg bg-white bg-opacity-30 px-4 border border-[bg-\[\#FFF\]] text-sm text-white placeholder:text-white outline-none"
              required
              onChange={inputHander}
              value={inputField.name}
            />
             <div className="flex flex-col">
            <div className="flex xl:w-52  h-12 w-full rounded-lg bg-white bg-opacity-30  border border-[bg-\[\#FFF\]] text-sm text-white">
            <text className="text-center flex justify-center items-center px-1 pl-3">+91</text>
            <input
              type="tel"
              placeholder="XXXXX"
              name="phone"
              className=" bg-transparent flex-wrap xl:w-40  h-12 placeholder:text-white placeholder:opacity-90 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              required
              onChange={inputHander}
              value={inputField.phone}
              
            />
            </div> 
            {errorMessage && <span className="text-white px-4 text-xs py-1">{errorMessage}</span>}
            </div>
            <div className="md:col-span-2 col-span1 lg:col-span-1 flex justify-center w-full lg:py-0 md:py-4">
              <button
                type="submit"
                onClick={formSubmit}
                className="xl:w-52 md:w-1/2 lg:w-full w-full h-12 bg-[#fff] font-bold rounded-lg"
              >
                Schedule Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sectionseven;
function mutate(arg0: { mutation: import("@apollo/client").DocumentNode; variables: { createLeadInput: { name: string; }; }; }) {
  throw new Error("Function not implemented.");
}