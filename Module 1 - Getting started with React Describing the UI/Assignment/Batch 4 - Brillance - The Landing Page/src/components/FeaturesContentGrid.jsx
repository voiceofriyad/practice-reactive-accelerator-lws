import BottomLeft from "../assets/images/services/integration.png";
import BottomRight from "../assets/images/services/speak.png";
import TopLeft from "../assets/images/services/work-order.png";
import TopRight from "../assets/images/services/work-sync.png";
import Grid from "./Grid";

export default function FeaturesContentGrid() {
  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
      <Grid
        className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6"
        title="Smart. Simple. Brilliant."
        subTitle="Your data is beautifully organized so you see
                          everything clearly without the clutter."
        src={TopLeft}
        srcClassName="h-1/2 object-cover"
      />
      <Grid
        className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6"
        title="Your work, in sync"
        subTitle="Every update flows instantly across your team and
                          keeps collaboration effortless and fast."
        src={TopRight}
        srcClassName="h-full object-cover"
      />
      <Grid
        className="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent"
        title="Effortless integration"
        subTitle=" All your favorite tools connect in one place and work
                          together seamlessly by design."
        src={BottomLeft}
        srcClassName="h-full object-cover"
      />
      <Grid
        className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6"
        title="Numbers that speak"
        subTitle="Track growth with precision and turn raw data into
                          confident decisions you can trust."
        src={BottomRight}
        srcClassName="h-full object-cover"
      />
    </div>
  );
}
