import Header from "./components/Header";
import Hero from "./components/Hero";
// import bgSpace from "../src/assets/home/background-home-desktop.jpg";

function App() {
  return (
    <div className="bg-hero-xs sm:bg-hero-sm lg:bg-hero-lg bg-no-repeat bg-center bg-cover">
      <div className="h-screen max-w-[87.5rem] mx-auto overflow-hidden p-[2rem]">
        <div className="flex flex-col gap-[15vh] lg:gap-[30vh]">
          <Header />
          <div className="">
            <Hero />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
