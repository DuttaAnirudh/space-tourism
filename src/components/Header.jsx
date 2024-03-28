import logo from "../assets/shared/logo.svg";
import { NavigationMain } from "../constants";
import MenuBar from "./design/MenuBar";

const Header = ({ selectedItem, handleNavigationMenuTab }) => {
  return (
    <div className="flex items-center justify-between">
      {/* LOGO */}
      <div>
        <img src={logo} width={48} height={48} alt="logo" />
      </div>

      {/* NAVIGATION */}
      <div>
        <ul className="hidden sm:flex gap-[2rem] md:px-[4rem] md:ps-[2rem] backdrop-blur ">
          {NavigationMain.map((item, i) => (
            <li key={i} onClick={() => handleNavigationMenuTab(item)}>
              <MenuBar
                className={item === selectedItem && "active"}
                NavigationMenu
              >
                <span className="font-bold">0{i}</span> {item}
              </MenuBar>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
