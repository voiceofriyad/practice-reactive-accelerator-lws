export default function BackgroundPatternLeft() {
  return (
    <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
      <div className="w-30 sm:w-35 md:w-40.5 -left-10 sm:-left-12.5 md:-left-14.5 -top-30 absolute flex flex-col justify-start items-start">
        <template id="pattern-template">
          <div className="self-stretch h-3 sm:h-4 -rotate-45 origin-top-left  outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
        </template>
      </div>
    </div>
  );
}
