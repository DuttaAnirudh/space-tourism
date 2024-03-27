import logo from "../assets/shared/logo.svg";
import { NavigationMain } from "../constants";
import MenuBar from "./design/MenuBar";

const Header = () => {
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
            <li key={i}>
              <MenuBar className={item === "home" && "active"}>
                <span>0{i}</span> {item}
              </MenuBar>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
