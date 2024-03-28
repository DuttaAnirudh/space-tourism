import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const [bg, setBg] = useState(true);
  const [selectedItemMain, setSelectedItemMain] = useState("home");

  const handleNavigationMenuTab = (tabName) => {
    setSelectedItemMain(tabName);
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
        <div className="flex flex-col gap-[15vh] lg:gap-[30vh]">
          <Header
            handleNavigationMenuTab={handleNavigationMenuTab}
            selectedItem={selectedItemMain}
          />
          <div className="">{selectedItemMain === "home" && <Hero />}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
