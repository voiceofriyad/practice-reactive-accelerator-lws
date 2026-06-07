import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

export default function Navigation() {
  return (
    <div className="w-full h-12 sm:h-14 md:h-16 lg:h-21 absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0">
      <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-10.5 border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>
      <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-175 lg:w-175 h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
        <NavLeft />
        <NavRight />
      </div>
    </div>
  );
}
