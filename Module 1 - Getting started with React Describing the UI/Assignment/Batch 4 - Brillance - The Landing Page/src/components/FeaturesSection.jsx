import FeaturesContent from "./FeaturesContent";
import FeaturesHeader from "./FeaturesHeader";

export default function FeaturesSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <FeaturesHeader />
      <FeaturesContent />
    </div>
  );
}
