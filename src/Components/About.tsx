import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="xl:px-20 mb-64 mt-6">
      <div className="flex justify-between items-center  ">
        <p className="text-[#000] text-[18px] font-bold ">
          About the Samurai King Resting
        </p>
        <p className="text-[#000] text-[18px] font-bold k">People also buy</p>
      </div>

      <div className="flex  items-center  justify-between mt-4 h-full">
        <div className="w-[56%] h-full">
          <span className="text-[#656565]">Pets</span>
          <p className="text-[#656565] flex flex-col justify-between text-justify text-sm">
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
            <p className="ss mt-10">
              text to mockup various fonts for a type specimen book.So how did
              the classical Latin become so incoherent? According to McClintock.
            </p>
          </p>
        </div>
        <div className="flex flex-col  items-end gap-y-4 ">
          <div className="flex gap-x-8">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          <div className="text-right flex flex-col gap-y-1">
            <p className="text-[#000] text-[22px] text-sm">Details</p>
            <p className="text-[#656565] text-xs">Size: 1020 x 1020 pixel</p>
            <p className="text-[#656565] text-xs">Size: 15 mb</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
