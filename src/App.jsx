import { useState } from "react";
import * as constants from "./constants/index";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function App() {
  const [bg, setBg] = useState(true);
  const [selectedItemMain, setSelectedItemMain] = useState("home");
  const [dataList, setDataList] = useState("");

  const handleDataOnClick = (name, array) => {
    setDataList(array.find((arr) => arr.name === name));
  };

  const handleNavigationMenuTab = (tabName) => {
    setSelectedItemMain(tabName);
    setDataList(constants[tabName]?.at(0));
    tabName === "home" ? setBg(true) : setBg(false);
  };

  return (
    <div
      className={
        bg
          ? `bg-hero-xs sm:bg-hero-sm lg:bg-hero-lg bg-no-repeat bg-center bg-cover`
          : ""
      }
    >
      <div className="h-screen max-w-[87.5rem] mx-auto overflow-hidden p-[2rem]">
        <div
          className={`flex flex-col ${
            selectedItemMain === "home"
              ? "gap-[15vh] lg:gap-[30vh]"
              : "gap-[6vh] lg:gap-[14vh]"
          }`}
        >
          <Header
            handleNavigationMenuTab={handleNavigationMenuTab}
            selectedItem={selectedItemMain}
          />
          <div>
            {selectedItemMain === "home" && <Hero />}
            {selectedItemMain === "destination" && (
              <Destination
                dataList={dataList}
                handleDataOnClick={handleDataOnClick}
              />
            )}
            {selectedItemMain === "crew" && (
              <Crew dataList={dataList} handleDataOnClick={handleDataOnClick} />
            )}
            {selectedItemMain === "technology" && <Technology />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
