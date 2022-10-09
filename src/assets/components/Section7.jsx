import { Carousel, Highlight } from "@trendyol-js/react-carousel";
import React from "react";
import Slide1 from "../image/slider/Slide1.png";
import Slide2 from "../image/slider/Slide2.png";
import Slide3 from "../image/slider/Slide3.png";
import SlideBawah from "../image/slider/SlideBawah.png";

export const Section7 = () => {
  return (
    <div className="backgroundSection6 sm:mt-[30rem]  relative     sm:border-0 lg:min-w-[1424px] h-full sm:min-h-[520px]   flex flex-col">
      <h1 className="w-full text-center text-[2rem] sm:text-[3rem] font-HeaderSection">
        Our Patner{" "}
      </h1>

      <div className="hidden sm:visible sm:flex">
        <Carousel
          useArrowKeys={true}
          responsive={true}
          show={1}
          slide={1}
          swipeOn={true}
          swiping={true}
          className={` flex justify-between gap-[0rem]  mb-[3rem] mt-[4rem]  items-center`}
          rightArrow={
            <div className="h-[3rem] flex items-center absolute mt-[-1rem]  justify-center ml-[-4rem] w-[3rem] rounded-md bg-[#0000001c]">
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
            <div className="h-[3rem] absolute flex items-center   justify-center ml-[2rem]  z-40  w-[3rem]   bg-[#0000001c]">
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
          <div className="h-[10rem] m-auto  mx-[8rem]   flex justify-center">
            <img
              className="max-w-[50rem]  max-h-[15rem] scale-75"
              src={SlideBawah}
              alt=""
            />
          </div>
          <div className="h-[10rem] m-auto  mx-[8rem]   flex justify-center">
            <img
              className="max-w-[50rem]  max-h-[15rem] scale-75"
              src={SlideBawah}
              alt=""
            />
          </div>
        </Carousel>
      </div>
      {/* Dekstop */}
      <div className=" sm:hidden ">
        {" "}
        <Carousel
          useArrowKeys={true}
          responsive={true}
          show={1}
          slide={1}
          swipeOn={true}
          swiping={true}
          className={` flex justify-between gap-[0rem]  mb-[6rem] sm:mb-[8rem] sm:mt-[4rem] items-center`}
          rightArrow={
            <div className="h-[3rem] flex items-center absolute justify-center ml-[-4rem] w-[3rem] rounded-md ">
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
            <div className="h-[3rem] absolute flex items-center justify-center ml-[2rem]  z-40  w-[3rem] ">
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
          <div className="h-[12rem] m-auto flex justify-center items-center">
            <img
              className="h-[6rem] max-w-[20rem]  scale-75"
              src={SlideBawah}
              alt=""
            />
          </div>
          <div className="h-[12rem] m-auto flex justify-center items-center">
            <img
              className="h-[6rem] max-w-[20rem] scale-75"
              src={SlideBawah}
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <p className="w-full absolute bottom-0 bg-[#050017]   text-center text-white py-4">
        © 2022 Mobile Fiber{" "}
      </p>
    </div>
  );
};
