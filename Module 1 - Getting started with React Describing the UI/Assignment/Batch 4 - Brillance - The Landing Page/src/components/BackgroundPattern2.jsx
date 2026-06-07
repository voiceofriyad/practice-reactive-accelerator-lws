import BackgroundPatternFeature from "./BackgroundPatternFeature";
import BackgroundPatternLeft from "./BackgroundPatternLeft";
import BackgroundPatternRight from "./BackgroundPatternRight";

export default function BackgroundPattern2() {
  return (
    <div className="self-stretch border-t border-[#E0DEDB] border-b flex justify-center items-start mt-60">
      <BackgroundPatternLeft />
      <BackgroundPatternFeature />
      <BackgroundPatternRight />
    </div>
  );
}
