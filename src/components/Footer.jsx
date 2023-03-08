import React from "react";
import { logo } from "../assets";

import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className="flex justify-center items-center sm:py-16 py-6 flex-col">
    <div className="sm:w-[85%] w-[90%]">
      <div
        className={
          "flex justify-center items-startmd:flex-row flex-col mb-8 w-full border-t-[2px] border-t-primary"
        }
      >
        <div className="flex flex-1 flex-col justify-start mr-10 mt-5">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain bg-secondary"
          />
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-5 mt-10">
          {footerLinks.map((footerLink, i) => (
            <div key={i} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-primary">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full  flex justify-between items-center md:flex-row flex-col pt-2">
        <p className="font-poppins font-normal text-center text-[18px]  text-dimWhite">
          2023 Minimumlivingcost. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              src={social.icon}
              key={index}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr - 0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
