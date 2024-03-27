const MenuBar = ({ NavigationMenu, DestinationMenu, className, children }) => {
  return (
    <p
      className={`nav-text ${NavigationMenu && "text-n-1"} ${
        DestinationMenu && "text-n-2"
      } py-[1.5rem] box-border inline-block cursor-pointer ${
        className === "active"
          ? `border-b-4 border-n-1 !text-n-1`
          : `hover:border-b-4
      hover:border-n-3`
      }`}
    >
      {children}
    </p>
  );
};

export default MenuBar;
