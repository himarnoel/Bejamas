import React from "react";
import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <div className="w-full lg:mb-10 mb-4 flex justify-between items-center px-4 xl:px-20 ">
        <img src={logo} alt="" className="w-[8rem] object-contain" />
        <img src={cart} alt="" className="w-[2.4rem] object-contain" />
      </div>
      <div className=" xl:px-20">
        <div className="h-[4px] bg-[#E4E4E4] "></div>
      </div>
    </div>
  );
};

export default Navbar;
