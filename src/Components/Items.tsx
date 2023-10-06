import sort from "../assets/sort.png";
import arrowdown from "../assets/arrowdown.svg";
import filter from "../assets/filter.png";
import img1 from "../assets/Rectangle2.1.png";
import img2 from "../assets/Rectangle2.2.png";
import img3 from "../assets/Rectangle2.4.png";
import img4 from "../assets/Rectangle2.5.png";
const Items = () => {
  return (
    <div className="mb-10 lg:px-20 px-3">
      <div className="flex justify-between items-center mt-6">
        <p className="flex text-lg lg:text-[26px] gap-x-2">
          <span className="font-bold">Photography/</span>
          <span className="text-[#9B9B9B]">Premium Photos</span>
        </p>
        <img src={filter} alt="" className="lg:hidden" />
        <p className="hidden lg:flex items-center gap-x-3">
          <img src={sort} alt="" className="object-contain" />
          <span className="text-[#9B9B9B] text-[19px]">Sort By</span>
          <span className="text-black text-[19px] ">Price</span>
          <img src={arrowdown} alt="" className="object-contain w-[0.7rem]" />
        </p>
      </div>

      <div className="flex  mt-10">
        <div className="w-[20%] lg:flex flex-col gap-y-8 hidden  ">
          <p className="text-black font-bold text-xl">Category</p>
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
          <div className="w-full bg-[#C2C2C2] h-[1px]"></div>
          <div className="flex flex-col gap-y-10">
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
        </div>
        <div className="w-full lg:w-[80%] grid lg:pl-10  lg:justify-items-center lg:grid-cols-3 gap-y-8 lg:gap-y-14">
          <div className="flex flex-col w-full">
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
        </div>
      </div>
    </div>
  );
};

export default Items;
