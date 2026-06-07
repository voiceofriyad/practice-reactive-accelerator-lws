import FooterBottom from "./FooterBottom";
import FooterMain from "./FooterMain";

export default function Footer() {
  return (
    <div className="w-full pt-10 flex flex-col justify-start items-start border-t border-[rgba(55,50,47,0.12)]">
      {/* Main Footer Content */}
      <FooterMain />

      {/* Bottom Pattern  */}
      <FooterBottom />
    </div>
  );
}
