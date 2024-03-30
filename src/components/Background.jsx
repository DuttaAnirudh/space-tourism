import {
  homeMob,
  homeTab,
  homeDesk,
  destinationMob,
  destinationTab,
  destinationDesk,
  crewMob,
  crewTab,
  crewDesk,
  technologyMob,
  technologyTab,
  technologyDesk,
} from "../assets/index";

const BackgroundImage = ({ selectedItem }) => {
  if (selectedItem === "home") {
    return (
      <div className="absolute inset-0 z[-1]">
        <img
          className="w-full h-full block md:hidden"
          src={homeMob}
          alt="home background"
        />
        <img
          className="w-full h-full hidden md:block lg:hidden"
          src={homeTab}
          alt="home background"
        />
        <img
          className="w-full h-full hidden lg:block"
          src={homeDesk}
          alt="home background"
        />
      </div>
    );
  }

  if (selectedItem === "destination") {
    return (
      <div className="absolute inset-0 z[-1]">
        <img
          className="w-full h-full block md:hidden"
          src={destinationMob}
          alt="destination background"
        />
        <img
          className="w-full h-full hidden md:block lg:hidden"
          src={destinationTab}
          alt="destination background"
        />
        <img
          className="w-full h-full hidden lg:block"
          src={destinationDesk}
          alt="destination background"
        />
      </div>
    );
  }

  if (selectedItem === "crew") {
    return (
      <div className="absolute inset-0 z[-1]">
        <img
          className="w-full h-full block md:hidden"
          src={crewMob}
          alt="crew background"
        />
        <img
          className="w-full h-full hidden md:block lg:hidden"
          src={crewTab}
          alt="crew background"
        />
        <img
          className="w-full h-full hidden lg:block"
          src={crewDesk}
          alt="crew background"
        />
      </div>
    );
  }

  if (selectedItem === "technology") {
    return (
      <div className="absolute inset-0 z[-1]">
        <img
          className="w-full h-full block md:hidden"
          src={technologyMob}
          alt="technology background"
        />
        <img
          className="w-full h-full hidden md:block lg:hidden"
          src={technologyTab}
          alt="technology background"
        />
        <img
          className="w-full h-full hidden lg:block"
          src={technologyDesk}
          alt="technology background"
        />
      </div>
    );
  }
};

export default BackgroundImage;
