import React from "react";
import Logo from "../image/LogoColor.svg";
import Humberger from "../image/icons/Huberger.svg";
import LogoMobile from "../image/icons/LogoMobile.svg";

const HeaderPage = () => {
  return (
    <div className="flex py-4 px-6 flex-row  sm:flex sm:p-10   w-full justify-between  items-center   max-w-[1430px] absolute ">
      <div className="hidden  sm:flex">
        <img src={Logo} alt="" />
      </div>
      <div className="flex  sm:hidden">
        <img src={LogoMobile} alt="" />
      </div>
      <div className="flex hidden  sm:flex space-x-10">
        <button>Homepage</button>
        <button>Galery</button>
        <button>About Us</button>
        <button>Contact Us</button>
      </div>
      <button
        onClick={() => {
          alert("nav open");
        }}
        className="flex  sm:hidden"
      >
        {" "}
        <img src={Humberger} alt="" />
      </button>
    </div>
  );
};

export default HeaderPage;
