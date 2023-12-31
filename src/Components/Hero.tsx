import heroimage from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="lg:px-20 px-4">
      <div className="flex items-center justify-between mt-2 lg:mt-10">
        <p className="text-[28px] font-bold text-[#000]">
          Samurai King Resting
        </p>
        <button
          onClick={() => alert("cool")}
          className="bg-[#000] text-white h-[47px] w-[180px] z-20 hidden lg:block"
        >
          ADD TO CART
        </button>
      </div>

      <div className="relative mt-5 w-full">
        <img src={heroimage} alt="" className=" w-full object-contain h-full" />

        <div className="bg-white h-[30px] w-[180px] lg:h-[60px] lg:w-[200px] flex justify-center items-center font-bold  absolute bottom-0 left-0">
          Photo of the day
        </div>
      </div>
    </div>
  );
};

export default Hero;
