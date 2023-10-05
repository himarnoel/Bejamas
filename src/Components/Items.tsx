import sort from "../assets/sort.png";
import arrowdown from "../assets/arrowdown.svg";
import filter from "../assets/filter.png";
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
    </div>
  );
};

export default Items;
