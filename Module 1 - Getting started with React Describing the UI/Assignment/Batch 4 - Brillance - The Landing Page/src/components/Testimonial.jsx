import TestimonialHeader from "./TestimonialHeader";
import TestimonialImage from "./TestimonialImage";

export default function Testimonial() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <TestimonialHeader />

      {/* Added testimonial content with first testimonial image */}
      <TestimonialImage />
    </div>
  );
}
