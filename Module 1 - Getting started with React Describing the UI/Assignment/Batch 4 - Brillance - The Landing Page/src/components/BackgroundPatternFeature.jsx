import card2 from "../assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg";
import card3 from "../assets/images/services/data-visualization-dashboard-with-interactive-char.jpg";
import card1 from "../assets/images/services/plan-your-schedules.jpeg";
import BackgroundPatternCard from "./BackgroundPatternCard";

export default function BackgroundPatternFeature() {
  return (
    <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
      {/* Card 1 */}
      <BackgroundPatternCard
        title="Plan your schedules"
        subTitle="Streamline customer subscriptions and billing with automated scheduling tools."
        src={card1}
        alt={"Plan schedules dashboard"}
      />

      {/* Card 2 */}
      <BackgroundPatternCard
        title="Analytics & insights"
        subTitle="Transform your business data into actionable insights with real-time analytics."
        src={card2}
        alt={"Analytics dashboard"}
      />

      {/* Card 3 */}
      <BackgroundPatternCard
        title="Collaborate seamlessly"
        subTitle="Keep your team aligned with shared dashboards and collaborative workflows."
        src={card3}
        alt={"Data visualization dashboard"}
      />
    </div>
  );
}
