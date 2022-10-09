import React from "react";
import LogoMobile from "../image/logoColorBig.png";

export const Section3 = () => {
  return (
    <div className="   w-full lg:min-w-[1424px] mt-[-3rem] sm:mt-0 h-full min-h-[520px] mb-[3rem] sm:mb-0 sm:min-h-[782px]  flex flex-col">
      <div className="w-full flex justify-center mt-[0rem] scale-50 sm:scale-100 sm:mt-[8rem] sm:mt-[10rem] pt-[2rem] sm:pt-0 flex flex-col justify-center items-center">
        <img src={LogoMobile} alt="" />
      </div>
      <div className=" flex flex-col  items-center justify-center text-[#5F5F63]  sm:mt-[4rem] sm:ml-0 sm:scale-100 p-4 sm:p-0">
        <h1 className="text-lg  font-light tracking-wide 	 leading-[2rem] sm:leading-[3rem] text-justify	 sm:text-[2rem] sm:mt-[-1rem] sm:w-8/12  w-10/12  sm:text-center">
          Mobile Fiber Optic run under two big company how help us to manage our
          connection safe
        </h1>
        <h1 className="text-lg font-light tracking-wide leading-[2rem]	 sm:leading-[3rem] mt-6  text-justify 	 sm:text-[2rem] sm:mt-[3rem] sm:w-8/12  w-10/12  sm:text-center">
          Experience our next-level managed server solution that caters to a
          myriad of data-automation needs. Our software enables you to get
          started with managing your data flow quickly and efficiently.
        </h1>
      </div>
    </div>
  );
};
