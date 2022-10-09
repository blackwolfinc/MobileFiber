import { Carousel, Highlight } from "@trendyol-js/react-carousel";
import React from "react";
import Slide1 from "../image/slider/Slide1.png";
import Slide2 from "../image/slider/Slide2.png";
import Slide3 from "../image/slider/Slide3.png";
import Slide4 from "../image/slider/Slide4.png";

export const Section6 = () => {
  return (
    <div className="sm:bg-gradient-to-b sm:from-[#3a2e6686] sm:to-[#3a2e6600] mb-[5rem] sm:mb-[10rem]  mt-[3rem] sm:mt-[15rem]      sm:border-0 lg:min-w-[1424px] h-full sm:min-h-[520px]   flex flex-col">
      <div className="hidden sm:visible sm:flex">
        {" "}
        <Carousel
          useArrowKeys={true}
          responsive={true}
          show={2.8}
          slide={1}
          swipeOn={true}
          swiping={true}
          className={` flex justify-between gap-[0rem]  sm:mt-[4rem] items-center`}
          rightArrow={
            <div className="h-[3rem] flex items-center absolute mt-[-1rem]  justify-center ml-[-4rem] w-[3rem] rounded-md bg-[#0000004b]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          }
          leftArrow={
            <div className="h-[3rem] absolute flex items-center   justify-center ml-[2rem]  z-40  w-[3rem] ≈  bg-[#0000004b]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          }
        >
          <div className="h-[20rem] w-[30rem] mx-[8rem] ">
            <img className="h-full w-full rounded-md" src={Slide1} alt="" />
          </div>
          <div className="h-[20rem] w-[30rem] mx-[8rem]   ">
            <img className="h-full w-full rounded-md" src={Slide2} alt="" />
          </div>
          <div className="h-[20rem] w-[30rem] mx-[8rem]   ">
            <img className="h-full w-full rounded-md" src={Slide3} alt="" />
          </div>
          <div className="h-[20rem] w-[30rem] mx-[8rem]  ">
            <img className="h-full w-full rounded-md" src={Slide4} alt="" />
          </div>
        </Carousel>
      </div>
      <div className=" sm:hidden sm:flex scale-75">
        <Carousel
          useArrowKeys={true}
          responsive={true}
          show={0.3}
          slide={1}
          swipeOn={true}
          swiping={true}
          className={` flex justify-between gap-[0rem]  sm:mt-[4rem] items-center`}
          rightArrow={
            <div className="h-[3rem] flex items-center absolute   justify-center ml-[0.5rem] sm:ml-[-4rem] w-[3rem] rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          }
          leftArrow={
            <div className="h-[3rem] absolute flex items-center   justify-center ml-[-3.5rem]  rounded-md sm:ml-[2rem]  z-40  w-[3rem] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          }
        >
          <div className="h-[20rem] w-[30rem] ">
            <img className="h-full w-full rounded-md" src={Slide1} alt="" />
          </div>
          <div className="h-[20rem] w-[30rem] ">
            <img className="h-full w-full rounded-md" src={Slide2} alt="" />
          </div>
          <div className="h-[20rem] w-[30rem] ">
            <img className="h-full w-full rounded-md" src={Slide3} alt="" />
          </div>
          <div className="h-[20rem] w-[30rem] ">
            <img className="h-full w-full rounded-md" src={Slide4} alt="" />
          </div>
        </Carousel>
      </div>
      <p className=" w-10/12 sm:w-9/12  sm:text-center  m-auto mt-[2rem] sm:mt-[10rem]  font-light   text-xl sm:text-[2rem] tracking-wide 	 leading-[2rem] sm:leading-[2.6rem] fontInter">
        Our network is built to ensure that traffic get’s to it’s destination In
        the most efficient way. By default, your traffic is handled by our
        premium priority network. Need more? Then consider <br /> <br />
        our further enhanced platinum service.
      </p>
    </div>
  );
};
