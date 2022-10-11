import React from "react";
import LogoMobileBlack from "../image/icons/LogoMobileBlack.svg";

export const Section4 = () => {
  return (
    <div
      id="contact"
      className=" backgroundSection4    border-[1rem] sm:border-0 lg:min-w-[1424px] h-full min-h-[420px] sm:min-h-[782px]      flex flex-col"
    >
      <div
        data-aos="fade-rigth"
        data-aos-duration="900"
        className="w-full flex flex-col  items-left text-[1rem] sm:text-[1.8rem] pl-[2rem] sm:ml-[-2rem]  sm:pr-[24rem] mt-[3.8rem]  sm:mt-[17.5rem] text-left  sm:text-right  font-HeaderSection"
      >
        If you need help, <br />
        we’re here for you.
      </div>
      <div className="flex  justify-center">
        <button className="mt-[7.3rem] hover:scale-105 duration-300 sm:mt-[5.5rem]  bg-[#694892] px-4 py-3 sm:px-12   sm:py-4 mr-[0rem]  sm:mr-[-3rem]  sm:border-[4px] sm:rounded-[24px] w-full sm:w-fit">
          <h4 className="text-[#FBFBFB] font-HeaderSection"> Contact Us</h4>
        </button>
      </div>
    </div>
  );
};
