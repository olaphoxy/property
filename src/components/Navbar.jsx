import React from "react";
import { logo, menu, close } from "../assets";
import { useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <nav
      className="w-full navbar flex transition ease-in-out duration-500ms py-5  border-b border-solid border-white-400 relative"
      id="home"
    >
      <a href={"#home"}>
        <img src={logo} alt="Logo" className="" />
      </a>
      <ul className="list-none hidden sm:flex flex-1 items-end justify-center ">
        {navLinks.map((nav, i) => (
          <li
            key={i}
            className={`cursor-pointer font-normal text-white font-dm ${
              i === navLinks.length - 1 ? "mr-0" : "mr-12"
            }`}
          >
            <a
              href={`#${nav.id}`}
              className="  px-2 hover:border-b-2 hover:border-white-500 hover:pb-5"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile and tab screen  */}

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toogle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]"
          onClick={() => setToogle((prev) => !prev)}
        />
        <div
          className={`${
            toogle ? "flex" : "hidden"
          } p-6 bg-gray-400 opacity-90 absolute top-[100px] right-[-12px] mx-4 my-2 min-w-[140px] rounded-xl sidebar animate-slideright`}
        >
          <ul className="list-none flex flex-col justify-end items-center animate-slideleft ">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-normal text-white font-dm hover:text-primary ${
                  i === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}> {nav.title} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
