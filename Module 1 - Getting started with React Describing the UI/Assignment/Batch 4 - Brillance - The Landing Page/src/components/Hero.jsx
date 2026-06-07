import BackgroundPattern1 from "./BackgroundPattern1";
import BackgroundPattern2 from "./BackgroundPattern2";
import CtaButton from "./CtaButton";
import FeaturesSection from "./FeaturesSection";
import Footer from "./Footer";
import Heading from "./Heading";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";

export default function Hero() {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-54 pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
      {/* Heading */}
      <Heading />

      {/* CTA Button */}
      <CtaButton />

      {/* Background Pattern */}
      <BackgroundPattern1 />

      <BackgroundPattern2 />

      {/* Social Proof Section with Testimonial */}
      <Testimonial />

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <Pricing />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
