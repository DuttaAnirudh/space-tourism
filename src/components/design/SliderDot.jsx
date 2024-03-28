const SliderDot = ({ className }) => {
  return (
    <div
      className={`w-[1rem] h-[1rem] lg:w-[0.8rem] lg:h-[0.8rem] aspect-square rounded-full ${
        className === "active"
          ? "bg-n-1"
          : "hover:bg-n-3 hover:border-0 border-[1px] border-n-2"
      }    cursor-pointer`}
    ></div>
  );
};

export default SliderDot;
