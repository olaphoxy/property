import React from "react";
import Form from "./Form";
import { formOne, formTwo, formThree, formFour } from "../assets";
const PicForm = () => {
  return (
    <div className="py-20 bg-[#fffff] w-full flex justify-center items-center">
      <div className="sm:w-[85%] w-[90%] ">
        <div className="flex md:flex-row flex-col py-5 justify-between items-center ">
          <div className="w-[50%] flex flex-col justify-center items-center ">
            <div className="flex justify-center items-end mb-6">
              <img
                src={formTwo}
                alt="Guy"
                className="mr-6 max-w-xs transition duration-300 ease-in-out hover:scale-110"
              />
              <img
                src={formThree}
                alt="Guy"
                className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              />
            </div>

            <div className=" flex justify-center items-start">
              <img
                src={formFour}
                alt="Guy"
                className="mr-6 max-w-xs transition duration-300 ease-in-out hover:scale-110"
              />
              <img
                src={formOne}
                alt="Guy"
                className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
          <div className="md:w-[40%] w-[70%] mt-7">
            <div className="px-3">
              <h2 className="font-inter font-bold text-[40px] text-[#18191F] leading-[54px]">
                Flexibility and options to suit your lifestyle.
              </h2>
              <p className="leading-[32px] font-normal font-inter mt-3">
                You need it? We got it. We make finding your next home easy,
                comfortable, and simple. From our happiness guarantee to our
                selective roommate finder option. We provide you the flexibility
                that you most desire.
              </p>
            </div>
            <div className="px-3 mt-5">
              <button className="bg-primary px-[25px] py-[15px] text-white rounded-lg">
                Search Rooms
              </button>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default PicForm;
