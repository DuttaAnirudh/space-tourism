const MenuBar = ({ NavigationMenu, DestinationMenu, active, children }) => {
  return (
    <p
      className={`nav-text ${NavigationMenu && "text-n-1"} ${
        DestinationMenu && "text-n-2"
      } py-[1rem] box-border inline-block cursor-pointer ${
        active
          ? `border-b-2 border-n-1 !text-n-1`
          : `hover:border-b-2
      hover:border-n-3`
      }`}
    >
      {children}
    </p>
  );
};

export default MenuBar;
