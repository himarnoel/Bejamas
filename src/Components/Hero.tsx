import heroimage from "../assets/hero.png";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className=" xl:px-20  ">
      <div className="flex items-center justify-between mt-10">
        <p className="text-[28px] font-bold text-[#000]">
          Samurai King Resting
        </p>
        <button className="bg-[#000] text-white h-[47px] w-[180px]">
          ADD TO CART
        </button>
      </div>

      <div className="relative mt-5">
        <img src={heroimage} alt="" className=" w-full object-contain" />

        <div className="bg-white h-[60px] w-[200px] flex justify-center items-center font-bold  absolute bottom-0 left-0">
          Photo of the day
        </div>
      </div>
    </div>
  );
};

export default Hero;
