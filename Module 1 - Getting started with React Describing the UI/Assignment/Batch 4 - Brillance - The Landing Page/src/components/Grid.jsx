export default function Grid({
  className,
  title,
  subTitle,
  src,
  srcClassName,
}) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight">
          {title}
        </h3>
        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed">
          {subTitle}
        </p>
      </div>
      <div className="w-full h-50 sm:h-62.5 md:h-75 rounded-lg flex items-center justify-center overflow-hidden">
        <img src={src} className={srcClassName} />
      </div>
    </div>
  );
}
