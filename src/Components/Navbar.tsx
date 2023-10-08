import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
import { useState } from "react";
import cancel from "../assets/cancel.svg";
import heroimage from "../assets/hero.png";
const Navbar = () => {
  const [first, setfirst] = useState<boolean>(false);

  return (
    <div>
      <div className="w-full lg:mb-10 mb-4 flex justify-between items-center px-4 xl:px-20 ">
        <img src={logo} alt="" className="w-[8rem] object-contain" />
        <div className="relative">
          <img
            src={cart}
            alt=""
            className="w-[2.4rem] object-contain cursor-pointer"
            onClick={() => setfirst(true)}
          />
          <div className="h-4 w-4 hidden  absolute right-[-10px] bottom-[-12px] lg:flex justify-center items-center  bg-black text-white text-lg">
            1
          </div>
        </div>
      </div>
      <div className=" xl:px-20">
        <div className="h-[4px] bg-[#E4E4E4] "></div>
        <div
          className={
            first
              ? " min-h-[12rem] right-20  hidden lg:block duration-500 ease-in-out opacity-[100%] border-x-4 border-b-4 absolute w-[26rem] px-4 pt-4 z-30 bg-white"
              : " min-h-[12rem] duration-200 ease-in-out  hidden lg:block border-x-4 border-b-4 absolute w-[26rem] px-4 pt-4 opacity-[0%] right-20  z-[10] bg-white"
          }
        >
          <img
            src={cancel}
            alt=""
            className="float-right object-contain w-5 cursor-pointer"
            onClick={() => setfirst(false)}
          />
          <div className="flex items-center justify-between mt-8">
            <div className="flex flex-col gap-y-1">
              <p className="text-[#000000] font-bold text-xl">
                Samurai King Resting
              </p>
              <p className="text-[#656565]  text-xl">$10000.00</p>
            </div>
            <div className="fs">
              <img
                src={heroimage}
                alt=""
                className="object-contain w-[10rem]"
              />
            </div>
          </div>
          <div className="bg-[#C2C2C2] w-full h-[1px] mt-6"></div>

          <button className="border-[3px] mx-auto w-full mb-4 border-[#000] font-bold px-20 py-2 mt-6 ">
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
