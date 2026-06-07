import TestimonialSvg from "./TestimonialSvg";

export default function TestimonialHeader() {
  return (
    <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
      <div className="w-full max-w-146.5 px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
        {/* Badge */}
        <div className="px-3.5 py-1.5 bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-2 border border-[rgba(2,6,23,0.08)]">
          <TestimonialSvg />
          <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3">
            Testimonials
          </div>
        </div>
        <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-15 tracking-tight">
          Confidence backed by results
        </div>
        <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7">
          Our customers achieve more each day
          <br className="hidden sm:block" />
          because their tools are simple, powerful, and clear.
        </div>
      </div>
    </div>
  );
}
