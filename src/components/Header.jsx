import { useState } from "react";
import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";
import { NavigationMain } from "../constants";
import MenuBar from "./design/MenuBar";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = ({ selectedItem, handleNavigationMenuTab, redirectHome }) => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleNavigationOnClick = () => {
    setOpenNavigation((show) => !show);
    openNavigation ? disablePageScroll() : enablePageScroll();
  };

  const handleCloseClick = () => {
    if (!openNavigation) {
      return;
    }

    setOpenNavigation(false);
    enablePageScroll();
  };

  const handleMultipleClickEvents = (item) => {
    handleNavigationMenuTab(item);
    handleCloseClick();
  };

  return (
    <div className="flex items-center justify-between relative">
      {/* LOGO */}
      <div
        className="max-h-[2.5rem] max-w-[2.5rem] md:max-w-full md:max-h-full ml-[2rem] mt-[2rem] sm:m-0 cursor-pointer"
        onClick={redirectHome}
      >
        <img src={logo} width={48} height={48} alt="logo" />
      </div>

      {/* NAVIGATION */}
      <nav>
        <div
          className="sm:hidden cursor-pointer mr-[2rem] mt-[2rem] sm:m-0"
          onClick={handleNavigationOnClick}
        >
          <img src={openNavigation ? iconClose : iconHamburger} />
        </div>
        <ul
          className={
            openNavigation
              ? "absolute right-0 w-[65vw] h-[100vh] z-1 flex flex-col gap-[1.5rem] backdrop-blur pl-[1.5rem]"
              : "hidden sm:flex gap-[2rem] md:px-[4rem]  backdrop-blur "
          }
        >
          {NavigationMain.map((item, i) => (
            <li key={i} onClick={() => handleMultipleClickEvents(item)}>
              <MenuBar
                className={item === selectedItem && "active"}
                NavigationMenu
              >
                <span className="font-bold">0{i}</span> {item}
              </MenuBar>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
