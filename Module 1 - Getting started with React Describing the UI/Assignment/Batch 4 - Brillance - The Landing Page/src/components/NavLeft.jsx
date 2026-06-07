export default function NavLeft() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-start items-center">
        <div className="flex flex-col justify-center text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 cursor-pointer">
          Brillance
        </div>
      </div>

      <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 flex justify-start items-start sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
        <div className="flex justify-start items-center">
          <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-3.5 cursor-pointer">
            Products
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-3.5 cursor-pointer">
            Pricing
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-3.5 cursor-pointer">
            Docs
          </div>
        </div>
      </div>
    </div>
  );
}
