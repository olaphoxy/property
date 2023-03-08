import React from "react";
import { imageOne } from "../assets";
import { showLinks, propertyList } from "../constants";
import PropertyItem from "./PropertyItem";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { motion } from "framer-motion";

const Property = ({ data, animate, shake }) => {
  // console.log(data);
  const [pageNumber, setPageNumber] = useState(0);
  // const [shake, setShake] = useState(false);

  // const animate = () => {
  //   setShake(true);
  //   setTimeout(() => setShake(false), 2000);
  // };

  const listPerPage = 6;
  const pagesVisited = pageNumber * listPerPage;

  const displayLists = data
    .slice(pagesVisited, pagesVisited + listPerPage)
    .map((list, index) => (
      <PropertyItem key={index} list={list} index={index} />
    ));

  const pageCount = Math.ceil(data.length / listPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className=" py-20 bg-[#F5F5F5] w-full flex justify-center items-center">
      <div className="sm:w-[85%] w-[90%]">
        <div className="flex items-center sm:justify-between justify-center ">
          <div>
            <h2 className="font-inter font-bold text-[30px] text-[#18191F]">
              List Of Properties
            </h2>

            <hr className="my-2 bg-primary w-[100px] h-[4px] dark:bg-gray-700" />
          </div>
          <button
            className={`bg-primary px-[25px] py-[15px] text-white rounded-md btnhover ${
              shake ? "shake" : null
            }`}
            onClick={animate}
          >
            View All Property
          </button>
        </div>

        <div className="grid grid-cols-1 grid-col smd:grid-cols-2 md:grid-cols-3 gap-5 place-items-center mt-5 w-full">
          {displayLists}
        </div>
        <div className="w-70% mt-5">
          <ReactPaginate
            previousLabel={"First"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationsBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
  );
};

export default Property;
