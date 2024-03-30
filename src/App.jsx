import { useState } from "react";
import * as constants from "./constants/index";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import BackgroundImage from "./components/Background";

function App() {
  const [selectedItemMain, setSelectedItemMain] = useState("home");
  const [dataList, setDataList] = useState("");

  const handleDataOnClick = (name, array) => {
    setDataList(array.find((arr) => arr.name === name));
  };

  const handleNavigationMenuTab = (tabName) => {
    setSelectedItemMain(tabName);
    setDataList(constants[tabName]?.at(0));
  };

  const redirectHome = () => {
    setSelectedItemMain("home");
  };

  const redirectDestinationSection = () => {
    setSelectedItemMain("destination");
    setDataList(constants["destination"]?.at(0));
  };

  return (
    <div className={`bg-no-repeat bg-center bg-cover`}>
      {/* BACKGROUND IMAGE */}
      <BackgroundImage selectedItem={selectedItemMain} />

      {/* MAIN */}
      <div className="h-screen max-w-[87.5rem] mx-auto overflow-hidden sm:p-[2rem] relative z-5">
        <div
          className={`flex flex-col ${
            selectedItemMain === "home"
              ? "gap-[15vh] lg:gap-[30vh]"
              : "gap-[6vh] lg:gap-[14vh]"
          }`}
        >
          {/* HEADER */}
          <Header
            handleNavigationMenuTab={handleNavigationMenuTab}
            selectedItem={selectedItemMain}
            redirectHome={redirectHome}
          />

          {/* CONTENT */}
          <div>
            {selectedItemMain === "home" && (
              <Hero redirectDestinationSection={redirectDestinationSection} />
            )}
            {selectedItemMain === "destination" && (
              <Destination
                dataList={dataList}
                handleDataOnClick={handleDataOnClick}
              />
            )}
            {selectedItemMain === "crew" && (
              <Crew dataList={dataList} handleDataOnClick={handleDataOnClick} />
            )}
            {selectedItemMain === "technology" && (
              <Technology
                dataList={dataList}
                handleDataOnClick={handleDataOnClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
