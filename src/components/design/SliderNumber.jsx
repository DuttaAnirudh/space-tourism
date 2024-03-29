const SliderNumber = ({ className, children }) => {
  return (
    <div
      className={`relative w-[2.5rem] h-[2.5rem] md:w-[3.75rem] md:h-[3.75rem] 
      lg:w-[4rem] lg:h-[4rem] xl:w-[4.5rem] xl:h-[4.5rem] aspect-square rounded-full ${
        className === "active"
          ? "bg-n-1 "
          : "border-[1px] hover:border-2 border-n-2 hover:border-n-1"
      } cursor-pointer`}
    >
      <h4
        className={`heading-4 absolute top-[50%] left-[50%] 
      -translate-x-[50%] -translate-y-[50%] ${
        className === "active" ? "text-n-4" : "text-n-1"
      }`}
      >
        {children}
      </h4>
    </div>
  );
};

export default SliderNumber;
