import React, { useState } from "react";
import Logo from "../image/LogoColor.svg";
import Humberger from "../image/icons/Huberger.svg";
import HumbergerWhite from "../image/icons/HubergerWhite.svg";
import LogoMobile from "../image/icons/LogoMobile.svg";

const HeaderPage = () => {
  const [OpenNav, setOpenNav] = useState(false);
  const RenderNav = () => {
    return (
      <div className="sm:hidden fixed bg-[#373434] w-screen h-[80rem] z-50">
        <div className="flex py-4 px-6 flex-row  sm:flex sm:p-10   w-full justify-between  items-center   max-w-[1430px] absolute ">
          <div className="flex bg-white rounded-md pl-10 pr-4 ml-[-2.5rem] sm:hidden  ">
            <img src={LogoMobile} alt="" />
          </div>

          <button
            onClick={() => {
              setOpenNav(!OpenNav);
            }}
            className="flex  sm:hidden  "
          >
            {" "}
            <img src={HumbergerWhite} alt="" />
          </button>
        </div>{" "}
        <div className="flex   flex-col mt-[10rem] text-2xl justify-center w-full text-center text-white space-y-10">
          <a
            href="#homepage"
            onClick={() => {
              setOpenNav(!OpenNav);
            }}
          >
            Homepage
          </a>
          <a
            href="#galery"
            onClick={() => {
              setOpenNav(!OpenNav);
            }}
          >
            Galery
          </a>
          <a
            href="#about"
            onClick={() => {
              setOpenNav(!OpenNav);
            }}
          >
            {" "}
            About Us
          </a>
          <a
            href="#contact"
            onClick={() => {
              setOpenNav(!OpenNav);
            }}
          >
            {" "}
            Contact Us
          </a>
        </div>
      </div>
    );
  };
  return (
    <>
      {" "}
      {OpenNav ? RenderNav() : null}
      <div className="flex py-4 px-6 flex-row  sm:flex sm:p-10  z-40 bg-[#fbfbfb] fixed  sm:absolute w-full justify-between  items-center   max-w-[1430px]  ">
        <div className="hidden  sm:flex">
          <img src={Logo} alt="" />
        </div>
        {!OpenNav ? (
          <div className="flex  sm:hidden  ">
            <img src={LogoMobile} alt="" />
          </div>
        ) : null}

        <div className="flex hidden  sm:flex space-x-10">
          <a href="#homepage">Homepage</a>
          <a href="#galery">Galery</a>
          <a href="#about"> About Us</a>
          <a href="#contact"> Contact Us</a>
        </div>
        {!OpenNav ? (
          <button
            onClick={() => {
              setOpenNav(!OpenNav);
            }}
            className="flex  sm:hidden  "
          >
            {" "}
            <img src={Humberger} alt="" />
          </button>
        ) : null}
      </div>{" "}
    </>
  );
};

export default HeaderPage;
