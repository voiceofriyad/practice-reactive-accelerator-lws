export default function NavRight() {
  return (
    <div className="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3">
      <div className="px-2 sm:px-3 md:px-3.5 py-1 sm:py-1.5 bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center cursor-pointer">
        <div className="flex flex-col justify-center text-[#37322F] text-xs md:text-[13px] font-medium leading-5">
          Log in
        </div>
      </div>
    </div>
  );
}
