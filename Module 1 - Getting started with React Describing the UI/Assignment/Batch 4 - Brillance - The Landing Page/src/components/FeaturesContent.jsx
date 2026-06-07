import FeaturesContentGrid from "./FeaturesContentGrid";
import FeaturesContentLeft from "./FeaturesContentLeft";
import FeaturesContentRight from "./FeaturesContentRight";

export default function FeaturesContent() {
  return (
    <div className="self-stretch flex justify-center items-start">
      <FeaturesContentLeft />
      <FeaturesContentGrid />
      <FeaturesContentRight />
    </div>
  );
}
