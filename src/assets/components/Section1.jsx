import React from "react";
import LogoMobileBlack from "../image/icons/LogoMobileBlack.svg";

export const Section1 = () => {
  return (
    <div className=" backgroundSection1   bg-top-[-10rem]  w-full lg:min-w-[1424px] h-full min-h-[720px] sm:min-h-[982px]  items-center justify-center flex flex-col">
      <div className="flex flex-col w-full mb-[-8rem]">
        <div className="flex w-full flex-row mb-[2rem]">
          <div className="w-full hidden sm:flex sm:w-4/12"></div>
          <div className="w-full mt-[-3rem] sm:mt-0   flex-col  sm:w-7/12  flex  ml-[1rem] mb-z ">
            <h1 className="hidden sm:flex text-[2rem]  sm:text-[5.5rem] font-Header">
              Mobile Fiber{" "}
            </h1>
            <img className="flex sm:hidden" src={LogoMobileBlack} alt="" />
            <h2 className="mt-[-1rem] ml-7 sm:mt-[-2rem] sm:ml-[0.7rem] drop-shadow-lg">
              Wireless Re-Imagined
            </h2>
          </div>
        </div>
        <div className="flex w-full flex-row  mt-[3rem] sm:mt-[12rem]">
          <div className=" hidden sm:flex w-1/12 "></div>
          <div className="  hidden sm:flex  w-full flex-col  sm:w-6/12  flex ml-[2rem]   pt-[2rem] ">
            <span>Do more, faster with Mobile Fiber.</span>

            <span>
              Get everything you need to a blazing fast internet connection.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
