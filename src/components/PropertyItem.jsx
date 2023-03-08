import React from "react";
import { IoBed } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { MdGarage } from "react-icons/md";
import { motion } from "framer-motion";

export const PropertyItem = ({ list, index }) => {
  return (
    <motion.div
      className="w-[358px] h-[520px] rounded-xl bg-white border border-grey-600 primaryHover"
      initial={{ opacity: 0, translateX: -50, translateY: -50 }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.3, delay: index * 0.3 }}
    >
      <div className=" w-full h-[50%] ">
        <img
          src={list.pic}
          alt="pic"
          className="w-full h-full rounded-tl-xl rounded-tr-xl object-cover "
        />
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-center items-start flex-col py-8 px-7">
          <p className="font-dm text-[23px] font-bold text">{list.address}</p>
          <p className="font-dm text-[23px] font-bold mt-3">{list.state}</p>
          <div className="mt-5">
            <p className=" text-[#818181] text-[18px] font-dm">Private Room</p>
            <p className="text-primary text-[26px] font-dm font-bold">
              {list.price}
            </p>
          </div>
        </div>
        <div className="border-t border-grey-600  flex justify-around items-center py-5 ">
          <div className="flex justify-center items-center text-[18px] font-bold border-r border-grey-600 ">
            <IoBed className="mr-2" />
            {list.bed}
          </div>
          <div className="flex justify-center items-center text-[18px] font-bold">
            <FaShower className="mr-2" />
            {list.bathroom}
          </div>
          <div className="flex justify-center items-center text-[18px] font-bold">
            <MdGarage className="mr-2" />
            {list.light}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyItem;
