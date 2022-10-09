import React from "react";
import Search from "../image/icons/Search.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Section5 = () => {
  const popUp = () => {
    return toast.error(" not available in your area");
  };

  return (
    <div
      id="about"
      className=" backgroundSection5 w-full   border-[1rem] sm:border-0 lg:min-w-[1424px] h-full min-h-[420px] sm:min-h-[782px]   flex flex-col"
    >
      <ToastContainer />
      <div className="w-full  sm:w-fit flex flex-col text-right sm:text-left text-[1rem]  sm:text-[1.8rem] pr-[1.5rem] sm:pl-[2rem] sm:ml-[25rem]  sm:pr-[24rem] mt-[3.5rem] mb-[1rem]  sm:mt-[15.5rem] text-left  sm:text-left  font-HeaderSection">
        Check avability <br />
        Connection in <br className="sm:hidden" />
        your area
      </div>
      <div className="flex flex-col  sm:flex-row justify-left items-center mt-[7rem]  sm:mt-[4rem]">
        <div className="bg-white min-w-full mb-[0rem] sm:min-w-fit  sm:ml-[4rem] flex  items-center border-y-[5px] sm:border-none sm:rounded-lg relative">
          <img
            className="flex scale-75 sm:scale-100 ml-4 absolute"
            src={Search}
            alt=""
          />
          <input
            type={"text"}
            className="w-full sm:min-w-[40rem] pl-[4rem] sm:pl-[4rem] sm:px-5 py-3 sm:py-5 rounded-lg"
          />
        </div>

        <button
          onClick={() => {
            popUp();
          }}
          className="  bg-[#694892] px-4 py-3 sm:px-12   sm:py-4 mr-[0rem]  sm:ml-[6rem]  sm:border-[4px] sm:rounded-[24px] sm:min-w-[15rem] w-full sm:w-fit"
        >
          <h4 className="text-[#FBFBFB] font-HeaderSection"> CHECK</h4>
        </button>
      </div>
    </div>
  );
};
