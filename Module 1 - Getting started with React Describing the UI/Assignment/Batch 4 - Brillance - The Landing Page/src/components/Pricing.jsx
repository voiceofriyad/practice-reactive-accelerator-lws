import PricingSvg from "./PricingSvg";

export default function Pricing() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 border-b border-[rgba(55,50,47,0.12)]">
      {/* Pricing Header  */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-146.5 px-6 py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <div className="px-3.5 py-1.5 bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-2 border border-[rgba(2,6,23,0.08)] ">
            <PricingSvg />
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3">
              Plans & Pricing
            </div>
          </div>
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-15 tracking-tight">
            Choose the perfect plan for your business
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7">
            Scale your operations with flexible pricing that grows with your
            team.
            <br />
            Start free, upgrade when you're ready.
          </div>
        </div>
      </div>
    </div>
  );
}
