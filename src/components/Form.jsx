import React from "react";

const Form = () => {
  return (
    <div className="my-10 flex flex-col justify-center items-center p-5">
      <h2 className="leading-[32px] font-medium font-inter text-[23px]">
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </h2>
      <div className="w-full rounded-md shadows py-10 mt-7 px-5">
        <h2 className="font-poppins text-[28px] leading-[32px] font-bold text-primary text-center">
          Add A New Property
        </h2>
        <form className="w-full max-w-7xl py-10 mt-5 mb-2">
          <div className="flex flex-wrap sm:px-2 px-1 ">
            <div className="w-full md:w-1/3 sm:w-1/2 px-3 mb-6 ">
              <label
                className="block font-bold font-poppins text-[#252B42] text-[17px] leading-[24px]"
                htmlFor="grid-name"
              >
                Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="appearance-none block w-full  p-2.5 bg-gray-200 text-secondary border rounded mb-3 leading-tight font-semibold"
                id="grid-name"
              />
            </div>
            <div className="w-full md:w-1/3 sm:w-1/2 px-3 mb-6">
              <label
                className="block font-bold font-poppins text-[#252B42] text-[17px] leading-[24px]"
                htmlFor="grid-name"
              >
                Address <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-secondary border rounded font-semibold p-2.5 mb-3 leading-tight "
                id="grid-name"
              />
            </div>
            <div className="w-full md:w-1/3 sm:w-1/2 px-3 mb-6">
              <label
                className="block font-bold font-poppins text-[#252B42] text-[17px] leading-[24px]"
                htmlFor="grid-name"
              >
                Unit Number <span className="text-primary">*</span>
              </label>
              <input
                type="number"
                className="appearance-none block w-full bg-gray-200 text-secondary font-semibold border rounded  p-2.5 mb-3 leading-tight "
                id="grid-name"
              />
            </div>
            <div className="w-full md:w-1/3 sm:w-1/2 px-3 mb-6">
              <label
                className="block font-bold font-poppins text-[#252B42] text-[17px] leading-[24px]"
                htmlFor="grid-name"
              >
                City <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-secondary font-semibold border rounded  p-2.5 mb-3 leading-tight "
                id="grid-name"
              />
            </div>
            <div className="w-full md:w-1/3 sm:w-1/2 px-3 mb-6">
              <label
                className="block font-bold font-poppins text-[#252B42] text-[17px] leading-[24px]"
                htmlFor="grid-name"
              >
                State <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-secondary font-semibold border rounded  p-2.5 mb-3 leading-tight "
                id="grid-name"
              />
            </div>
            <div className="w-full md:w-1/3 sm:w-1/2 px-3 mb-6">
              <label
                className="block font-bold font-poppins text-[#252B42] text-[17px] leading-[24px]"
                htmlFor="grid-name"
              >
                Room Type <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-secondary font-semibold border rounded  p-2.5 mb-3 leading-tight "
                id="grid-name"
              />
            </div>
            <div className="w-full md:w-1/3 sm:w-1/2 px-3 mb-6">
              <label
                className="block font-bold font-poppins text-[#252B42] text-[17px] leading-[24px]"
                htmlFor="grid-name"
              >
                Price <span className="text-primary">*</span>
              </label>
              <input
                type="number"
                className="appearance-none block w-full bg-gray-200 text-secondary font-semibold border rounded  p-2.5 mb-3 leading-tight "
                id="grid-name"
              />
            </div>
            <div className="w-full md:w-1/3 sm:w-1/2 px-3 mb-6">
              <label
                className="block font-bold font-poppins text-[#252B42] text-[17px] leading-[24px]"
                htmlFor="grid-name"
              >
                Room Type <span className="text-primary">*</span>
              </label>
              <input
                type="Room Type"
                className="appearance-none block w-full bg-gray-200 text-secondary font-semibold border rounded  p-2.5 mb-3 leading-tight "
                id="grid-name"
              />
            </div>
            <div className="w-full px-3 mb-6">
              <label
                className="block font-bold font-poppins text-[#252B42] text-[17px] leading-[24px]"
                htmlFor="grid-name"
              >
                Description <span className="text-primary">*</span>
              </label>
              <textarea
                rows="6"
                className="appearance-none block w-full bg-gray-200 text-secondary font-semibold border rounded  p-2.5 mb-3 leading-tight "
                id="grid-name"
                placeholder="  Enter Description"
              />
            </div>
            <div className="w-full px-3 mb-6 flex flex-col">
              <p className="font-bold font-poppins text-[#252B42] text-[17px] leading-[24px]">
                Upload Photos
              </p>
              <label
                className="block  rounded border-primary border-dashed border-2 mt-2"
                htmlFor="dropzone-file"
              >
                <div className="flex flex-col items-center justify-center py-8">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-[18px] sm:text-[20px] md:text-[24px] text-dark font-poppins ">
                    Drag your images here, or{" "}
                    <span className="font-bold text-primary">browse</span>
                  </p>
                  <p className=" text-gray-500 dark:text-gray-400 font-poppins text-[18px] text-semibold">
                    Supported: JPG, JPEG, PNG
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
              <div className=" flex justify-center items-center mt-8">
                <button className="bg-primary px-[25px] py-[15px] text-white rounded-md md:w-[40%] text-bold font-inter text-[20px] sm:w-[60%] w-full">
                  Add New Property
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
