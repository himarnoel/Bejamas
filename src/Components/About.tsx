import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="xl:px-20  mt-6 lg:px-0 px-3">
      <button className="w-full bg-black py-4 lg:hidden text-white">
        ADD TO CART
      </button>
      <div className="flex justify-between items-center  mt-6 lg:mt-0 ">
        <p className="text-[#000] text-[18px] font-bold ">
          About the Samurai King Resting
        </p>
        <p className="text-[#000] text-[18px] font-bold hidden lg:block">
          People also buy
        </p>
      </div>

      <div
        className="flex flex-col lg:flex-row 
text-[#656565]  items-start justify-between mt-4 h-full"
      >
        <div className="lg:hidden">
          So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero's De Finibus in order to provide placeholder text to mockup
          various fonts for a type specimen book.
        </div>
        <div className="lg:w-[56%] h-full w-full  hidden lg:block">
          <span className="">Pets</span>
          <p className="flex flex-col justify-between text-justify text-sm">
            <p className="s">
              {" "}
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Cicero's De Finibus in order to provide placeholder text to mockup
              various fonts for a type specimen book.So how did the classical
              Latin become so incoherent? According to McClintock, a 15th
              century typesetter likely scrambled part of Cicero's De Finibus in
              order to provide placeholder
            </p>
            <p className=" mt-10">
              text to mockup various fonts for a type specimen book.So how did
              the classical Latin become so incoherent? According to McClintock.
            </p>
          </p>
        </div>
        <div className="flex  flex-col w-full lg:w-fit items-start lg:items-end lg:gap-y-4 gap-y-4 ">
          <div className="grid grid-cols-3 gap-x-5  lg:flex   w-full lg:gap-x-8 mt-4">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          <div className="text-left lg:text-right flex flex-col gap-y-2 ">
            <p className="text-[#000] font-bold text-[22px] text-sm">Details</p>
            <p className="text-[#656565] text-xs">Size: 1020 x 1020 pixel</p>
            <p className="text-[#656565] text-xs">Size: 15 mb</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[4px]"></div>
    </div>
  );
};

export default About;
