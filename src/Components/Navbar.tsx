import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
import { useState } from "react";
const Navbar = () => {
  const [first, setfirst] = useState<boolean>(false);

  return (
    <div>
      <div className="w-full lg:mb-10 mb-4 flex justify-between items-center px-4 xl:px-20 ">
        <img src={logo} alt="" className="w-[8rem] object-contain" />
        <img src={cart} alt="" className="w-[2.4rem] object-contain" />
      </div>
      <div className=" xl:px-20">
        <div className="h-[4px] bg-[#E4E4E4] "></div>
        <div
          className={
            first
              ? "float-right h-[10rem] right-20 absolute w-[26rem] z-20 bg-red-200"
              : "float-right h-[10rem] hidden right-20 absolute w-[26rem] z-20 bg-red-200"
          }
        >
          sdfdafad
        </div>
      </div>
    </div>
  );
};

export default Navbar;
