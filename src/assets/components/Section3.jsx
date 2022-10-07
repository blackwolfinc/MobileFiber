import React from "react";
import LogoMobile from "../image/logoColorBig.png";

export const Section3 = () => {
  return (
    <div className="   w-full lg:min-w-[1424px] h-full min-h-[520px] sm:min-h-[782px]  flex flex-col">
      <div className="w-full flex justify-center mt-[0rem] scale-75 sm:scale-100 sm:mt-[8rem] sm:mt-[10rem] pt-[2rem] sm:pt-0 flex flex-col justify-center items-center">
        <img src={LogoMobile} alt="" />
      </div>
      <div className=" flex flex-col  items-center justify-center text-[#5F5F63]  sm:mt-[4rem] sm:ml-0 sm:scale-100 p-4 sm:p-0">
        <h1 className="text-sm  font-light tracking-wide	 leading-[3rem]	 sm:text-[2.4rem] sm:mt-[-1rem] sm:w-8/12  w-full  text-center">
          Mobile Fiber Optic run under two big company how help us to manage our
          connection safe
        </h1>
        <h1 className="text-sm font-light tracking-wide 	 leading-[3rem] mt-6	 sm:text-[2.4rem] sm:mt-[3rem] sm:w-8/12  w-full text-center">
          Experience our next-level managed server solution that caters to a
          myriad of data-automation needs. Our software enables you to get
          started with managing your data flow quickly and efficiently.
        </h1>
      </div>
    </div>
  );
};
