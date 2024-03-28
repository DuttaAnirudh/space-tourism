const MenuBar = ({
  NavigationMenu,
  DestinationMenu,
  className,
  onClickEvent,
  children,
}) => {
  return (
    <button
      className={`nav-text ${NavigationMenu && "text-n-1 py-[1.5rem]"} ${
        DestinationMenu && "text-n-2 py-[0.8rem]"
      }  box-border inline-block cursor-pointer ${
        className === "active"
          ? `border-b-[3px] border-n-1 !text-n-1`
          : `hover:border-b-[3px]
      hover:border-n-3`
      }`}
      onClick={onClickEvent}
    >
      {children}
    </button>
  );
};

export default MenuBar;
