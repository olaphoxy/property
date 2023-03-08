import React from "react";
// import { map } from "../assets";
import { BsList, BsSearch } from "react-icons/bs";

import { propertyList } from "../constants";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

//This function is used to move the location on the map to the selected location
function MyComponent({ location }) {
  const map = useMap();
  useEffect(() => {
    map.setView(location);
  }, [location]);
  return null;
}

const Hero = ({ handleChange, location }) => {
  //Animation effect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="sm:w-[80%] w-[90%] flex  items-center justify-center py-7 sm:py-20">
      <div className="flex justify-center sm:justify-between items-center sm:flex-row flex-col ">
        <h1 className="font-inter font-semibold smd:text-[48px] text-[30px] text-white ss:text-[28px] sm:text-[38px] sm:leading-[60px] smd:leading-[76.8px] leading-[46.8px] smd:text-left text-center sm:w-[50%] flex items-start mb-[20px] py-[10px]">
          The Most Affortable Place To Stay In The San Franciso Bay Area
        </h1>
        <div
          className="flex flex-col sm:w-[408px] w-[90%]  h-[300px] ss:w-[70%] ss:h-[340px]"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <MapContainer
            center={location}
            zoom={13}
            scrollWheelZoom={true}
            style={{
              minHeight: "100%",
              minWidth: "100%",
              borderRadius: "10px",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location}></Marker>
            <MyComponent location={location} />
          </MapContainer>

          <div className="p-5 rounded-lg w-full bg-white flex justify-center items-center mt-3">
            <div className="rounded-lg flex justify-center items-center w-full  overflow-hidden">
              <select
                id="drop"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md font-poppins font-medium rounded-tl-lg rounded-bl-lg focus:ring-blue-500 focus:border-blue-500 block  p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[auto]"
              >
                <option value="all-type">All Type</option>
                <option value="sale">Sale</option>
                <option value="rent">Rent</option>
              </select>
              <select
                onChange={handleChange}
                id="dropdown"
                className="bg-gray-50 border border-gray-300 text-gray-900 font-poppins text-md font-medium  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="neighborhood">Neighborhood</option>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Ohio">Ohio</option>
                <option value="Florida">Florida</option>
                {/* {propertyList.map((pro, index) => (
                  <option key={index} value={pro.state}>
                    {pro.state}
                  </option>
                ))} */}
              </select>
              <div className="p-4 bg-blue-600">
                <BsSearch style={{ color: "white", fontSize: "1.2em" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
