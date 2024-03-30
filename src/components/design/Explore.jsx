const Explore = ({
  bgColor = "bg-n-1",
  textColor = "text-n-4",
  onClickEvent,
  children,
}) => {
  const hoverEffectProperties = `after:content-[''] after:inline-block after:h-full after:w-full 
  after:rounded-full after:absolute after:top-0 after:left-0 after:z-[-1] 
  after:${bgColor} hover:after:scale-150 hover:after:opacity-0 after:transition-all
   after:ease-in-out after:duration-700`;

  return (
    <div
      className={`relative w-[9.3rem] h-[9.3rem] md:w-[15rem] md:h-[15rem] 
    lg:w-[17rem] lg:h-[17rem] aspect-square rounded-full bg-n-1 
    cursor-pointer ${(bgColor, hoverEffectProperties)}`}
      onClick={onClickEvent}
    >
      <h4
        className={`heading-4 ${textColor} absolute top-[50%] left-[50%] 
      -translate-x-[50%] -translate-y-[50%]`}
      >
        {children}
      </h4>
    </div>
  );
};

export default Explore;
