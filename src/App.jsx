import React, { useCallback, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Property from "./components/Property";
import { useState } from "react";
import { propertyList } from "./constants";
import PicForm from "./components/PicForm";
import Review from "./components/Review";
import Footer from "./components/Footer";


const App = () => {
  const [location, setLocation] = useState([38.889248, -77.050636]);
  const [data, setData] = useState(propertyList);

  // To animate the button and refresh the list
  const [shake, setShake] = useState(false);

  const animate = () => {
    setShake(true);
    setTimeout(() => setShake(false), 2000);
    setData(propertyList);
  };

  const handleChange = (e) => {
    console.log(location);
    const currLocation = e.target.value;

    const filter = propertyList.filter((pro) => {
      return pro.state === currLocation;
    });
    if (e.target.value === "neighborhood") {
      setData(propertyList);
      setLocation([38.889248, -77.050636]);
    }

    setData(filter);
    setLocation(filter[0].position);
  };

  return (
    <div className="bg-white w-full overflow-hidden">
      <div className="bg-[url('./assets/firstBg.png')] bg-no-repeat bg-cover bg-center h-[748.7px] w-full relative ">
        <div className=" absolute z-[1] w-full h-[100%] black-gradient left-0 top-0  ">
          <div className="flex flex-col items-center justify-center">
            <div className="sm:w-[85%] w-[90%] flex justify-center items-center">
              <Navbar />
            </div>
            <Hero
              handleChange={handleChange}
              location={location}
              setLocation={setLocation}
            />
          </div>
        </div>
      </div>
      <Showcase />
      <Property data={data} animate={animate} shake={shake} />
      <PicForm />
      <Review />
      <Footer />
    </div>
  );
};

export default App;
