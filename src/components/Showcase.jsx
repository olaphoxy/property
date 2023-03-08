import React from "react";
import { imageOne } from "../assets";
import { showLinks } from "../constants";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Showcase = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className=" py-20 bg-[#fffff] w-full flex justify-center items-center">
      <div className="sm:w-[85%] w-[90%]">
        <h2 className="font-inter font-bold text-[30px] text-[#18191F] leading-tight">
          Minimum Living Cost Takes Care Of Everything
        </h2>

        <hr className="my-2 bg-primary w-[300px] h-[4px] dark:bg-gray-700" />
        <div className="flex sm:flex-row flex-col w-full justify-center items-center">
          <div
            data-aos="fade-right"
            className="w-full flex-1 flex justify-center items-center"
          >
            <img src={imageOne} alt="first One" />
          </div>
          <div
            data-aos="fade-down-left"
            className="p-5 grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 gap-3 w-full sm:w-[60%]"
          >
            {showLinks.map((link, i) => (
              <div className=" flex-wrap  px-6 py-4 flex justify-start" key={i}>
                <div className="p-4 rounded-xl shadow-lg  flex justify-center items-center">
                  <img src={link.imgs} alt="icon" />
                </div>
                <p className="font-inter text-[#18191F] font-medium text-[20px] sm:text-[18px] md:text-[20px] mt-3">
                  {link.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
