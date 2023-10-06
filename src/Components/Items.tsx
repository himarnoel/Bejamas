import sort from "../assets/sort.png";
import arrowdown from "../assets/arrowdown.svg";
import filter from "../assets/filter.png";
import img1 from "../assets/Rectangle2.1.png";
import img2 from "../assets/Rectangle2.2.png";
import img3 from "../assets/Rectangle2.4.png";
import img4 from "../assets/Rectangle2.5.png";
import arrowleft from "../assets/arrows/Vector 1.svg";
import arrowright from "../assets/arrows/Vector 2.svg";
import cancel from "../assets/cancel.svg";
import { useState } from "react";

const Items = () => {
  const [openUp, setopenUp] = useState<boolean>(false);
  return (
    <div className="mb-10 lg:px-20 px-3">
      <div className="flex justify-between items-center mt-6">
        <p className="flex text-lg lg:text-[26px] gap-x-2">
          <span className="font-bold">Photography/</span>
          <span className="text-[#9B9B9B]">Premium Photos</span>
        </p>
        <img
          src={filter}
          alt=""
          className="lg:hidden "
          onClick={() => setopenUp(!openUp)}
        />
        <p className="hidden lg:flex items-center gap-x-3">
          <img src={sort} alt="" className="object-contain" />
          <span className="text-[#9B9B9B] text-[19px]">Sort By</span>
          <span className="text-black text-[19px] ">Price</span>
          <img src={arrowdown} alt="" className="object-contain w-[0.7rem]" />
        </p>
      </div>

      <div className="flex  mt-10">
        <div
          className={
            openUp
              ? "fixed top-[0%]  duration-700 ease-in-out  lg:hidden h-[25%] w-full left-0 bg-black/[0.2]"
              : "fixed top-[-100%]  duration-700 ease-in-out hidden h-[25%] w-full left-0 bg-black/[0.2]"
          }
        ></div>
        <div
          className={
            openUp
              ? "lg:w-[20%] mb-[8rem] overflow-y-auto   lg:flex flex-col text-xl px-3 gap-y-10 lg:gap-y-8 fixed lg:static left-0 z-20 lg:z-0 w-full bottom-[0%]  ease-in-out duration-700 bg-white h-[75%]"
              : "lg:w-[20%] bottom-[-100%] ease-in-out duration-700 mb-[8rem] overflow-y-auto  lg:flex flex-col text-xl px-3 gap-y-10 lg:gap-y-8 fixed lg:static left-0 z-20 lg:z-0 w-full bg-white h-[75%]"
          }
        >
          <p className="text-black font-bold hidden lg:block text-xl">
            Category
          </p>
          <div className="flex justify-between items-center">
            <p className="text-black lg:hidden font-bold text-2xl lg:text-base mt-8 lg:mt-0">
              Filter
            </p>
            <img
              src={cancel}
              alt=""
              className="lg:hidden "
              onClick={() => setopenUp(!openUp)}
            />
          </div>
          <div className=" flex flex-col  gap-y-8 mt-8 lg:mt-0">
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="s">People</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="s">Premium</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="s">Pets</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="s">Food</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="s">Landmarks</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="s">Cities</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="s">Nature</p>
            </div>
          </div>
          <div className="w-full bg-[#C2C2C2]  mt-8 h-[1px]"></div>
          <div className="flex flex-col gap-y-10 mt-4 lg:gap-y-10">
            <p className="text-black font-bold text-xl">Price range</p>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="s">Lower than $20</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="s">$20 - $100</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="s">$100 - $200</p>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p className="s">More than $200</p>
            </div>
          </div>
          <div
            className={
              openUp
                ? "fixed lg:hidden bottom-[0%] duration-700 ease-in-out h-[15%] flex justify-between items-center w-full left-0 px-10  bg-white border-t-2 text-[#E4E4E4] "
                : "fixed hidden bottom-[-100%] duration-700 ease-in-out h-[15%]  justify-between items-center w-full left-0 px-10  bg-white border-t-2 text-[#E4E4E4] "
            }
          >
            <button className="border border-black text-black font-bold px-8 p-5 text-xl">
              CLEAR
            </button>
            <button className="bg-black p-5  px-10  text-white text-xl">
              SAVE
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[80%] grid  lg:pl-10  lg:justify-items-center lg:grid-cols-3 gap-y-8 lg:gap-y-14">
          <div className="flex flex-col ">
            <div className="relative">
              <div className="top-0 left-0 w-[40%] text-[18px] h-[29px] flex items-center justify-center absolute bg-white">
                Best Seller
              </div>
              <img src={img1} alt="" className="w-full object-contain" />
              <div className="h-[34px]  text-[20px] w-full absolute bottom-0 flex items-center justify-center text-white text-center bg-[#000]">
                ADD TO CART
              </div>
            </div>
            <div className="flex flex-col mt-4 gap-y-1">
              <p className="text-[#656565] text-sm">People</p>
              <p className="font-bold text-[30px]">Red Bench</p>
              <p className="text-[#656565] text-lg">$3.89 </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative">
              <img src={img2} alt="" className="w-full object-contain" />
              <div className="h-[34px]  text-[20px] w-full absolute bottom-0 flex items-center justify-center text-white text-center bg-[#000]">
                ADD TO CART
              </div>
            </div>
            <div className="flex flex-col mt-4 gap-y-1">
              <p className="text-[#656565] text-sm">Food</p>
              <p className="font-bold text-[30px]">Egg Balloon</p>
              <p className="text-[#656565] text-lg">$93.89 </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative">
              <img src={img2} alt="" className="w-full object-contain" />
              <div className="h-[34px]  text-[20px] w-full absolute bottom-0 flex items-center justify-center text-white text-center bg-[#000]">
                ADD TO CART
              </div>
            </div>
            <div className="flex flex-col mt-4 gap-y-1">
              <p className="text-[#656565] text-sm">Food</p>
              <p className="font-bold text-[30px]">Egg Balloon</p>
              <p className="text-[#656565] text-lg">$93.89 </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative">
              <img src={img3} alt="" className="w-full object-contain" />
              <div className="h-[34px]  text-[20px] w-full absolute bottom-0 flex items-center justify-center text-white text-center bg-[#000]">
                ADD TO CART
              </div>
            </div>
            <div className="flex flex-col mt-4 gap-y-1">
              <p className="text-[#656565] text-sm">People</p>
              <p className="font-bold text-[30px]">Man</p>
              <p className="text-[#656565] text-lg">$100.00 </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative">
              <img src={img4} alt="" className="w-full object-contain" />
              <div className="h-[34px]  text-[20px] w-full absolute bottom-0 flex items-center justify-center text-white text-center bg-[#000]">
                ADD TO CART
              </div>
            </div>
            <div className="flex flex-col mt-4 gap-y-1">
              <p className="text-[#656565] text-sm">Landmarks</p>
              <p className="font-bold text-[30px]">Architecture</p>
              <p className="text-[#656565] text-lg">$101.00</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative">
              <img src={img4} alt="" className="w-full object-contain" />
              <div className="h-[34px]  text-[20px] w-full absolute bottom-0 flex items-center justify-center text-white text-center bg-[#000]">
                ADD TO CART
              </div>
            </div>
            <div className="flex flex-col mt-4 gap-y-1 lg:gap-y-0">
              <p className="text-[#656565] text-sm">Landmarks</p>
              <p className="font-bold text-[30px]">Architecture</p>
              <p className="text-[#656565] text-lg">$101.00</p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center text-xl gap-x-6 lg:px-32 lg:col-span-3  text-center ">
            <img src={arrowleft} alt="" />
            <p className="text-[#B4B4B4]">1</p>
            <p className="text-[#B4B4B4]">2</p>
            <p className="text-black font-semibold">3</p>
            <p className="text-[#B4B4B4]">4</p>
            <img src={arrowright} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
