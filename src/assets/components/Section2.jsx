import React from "react";
import LogoMobileBlack from "../image/icons/LogoMobileBlack.svg";

export const Section2 = () => {
  return (
    <div className=" backgroundSection2  w-full lg:min-w-[1424px] h-full  min-h-[720px] sm:min-h-[1382px]   flex flex-col">
      <div className="w-full flex justify-center mt-[4rem] sm:mt-[8rem] sm:mt-[10rem] pt-[2rem] sm:pt-0 flex flex-col justify-center items-center">
        <h1 className="text-[3rem] sm:text-[6rem]  font-HeaderSection">
          Up to 1Gbps
        </h1>
        <h1 className="text-sm sm:text-[1.7rem] mt-[-1rem] text-center">
          It’s time to boost your home internet experience.
        </h1>
      </div>
      <div className="w-full flex flex-col space-y-9 items-center justify-center mt-[-2.4rem] ml-[-1rem]  sm:mt-[16rem] sm:ml-0 scale-[35%] sm:scale-100">
        <div className="bg-[#574892] bg-gradient-to-t from-[#574892] to-[#574892] text-[#FBFBFB] text-[1.8rem]  min-w-[25rem] ml-[-18rem] px-10  py-2 rounded-2xl shadow-xl	">
          Data Unlimited
        </div>
        <div className="bg-[#574892] bg-gradient-to-t from-[#574892] to-[#574892] text-[#FBFBFB] text-[1.8rem]  min-w-[25rem] px-10  ml-[-28rem] py-2 rounded-2xl shadow-xl	">
          Ultra-reach Wi-Fi
        </div>
        <div className="purpleGradient text-[#FBFBFB] min-w-[25rem] px-10  text-[1.8rem]  py-2 rounded-2xl  ml-[-18rem] shadow-xl	">
          Enjoy a Wi-Fi 6 router on us.
        </div>
        <div className="bg-[#574892] bg-gradient-to-t from-[#574892] to-[#574892] text-[#FBFBFB] text-[1.8rem]   ml-[-10rem] min-w-[25rem] px-10  py-2 rounded-2xl shadow-xl	">
          24/7 support
        </div>
        <div className="bg-[#574892] bg-gradient-to-t from-[#574892] to-[#574892] text-[#FBFBFB] text-[1.8rem]  min-w-[25rem] px-10 ml-[48rem]  py-2 mt-[10rem] rounded-2xl shadow-xl	">
          No annual contracts
        </div>
        <div className="purpleGradient text-[#FBFBFB] min-w-[25rem] px-10  text-[1.8rem]  py-2 ml-[35rem]  rounded-2xl shadow-xl	">
          Cancel at any time.{" "}
        </div>
      </div>
    </div>
  );
};
