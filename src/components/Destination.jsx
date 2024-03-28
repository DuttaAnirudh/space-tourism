import Section from "./Section";
import { NavigationDestination, destination } from "../constants";
import MenuBar from "./design/MenuBar";

const Destination = ({ dataList, handleDataOnClick }) => {
  return (
    <div>
      <h5 className="heading-5 text-n-1 pb-[3rem] text-center lg:text-left">
        <span className="text-n-2/40">01</span> Pick your destination
      </h5>

      <Section>
        {/* LEFT COLUMN */}
        <div className="justify-self-center self-center lg:mt-[3rem] pb-[2rem]  lg:pb-0">
          <div className="h-[11rem] w-[11rem] sm:h-[18.75rem] sm:w-[18.75rem] lg:w-full lg:h-full">
            <picture>
              <source srcSet={dataList.images.webp} type="image/webp" />
              <source srcSet={dataList.images.png} type="image/png" />
              <img
                src={dataList.images.png}
                width={420}
                height={420}
                alt={`${dataList.name} image`}
              />
            </picture>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-center lg:items-start justify-self-center text-center lg:text-left">
          {/* NAVIGATION */}
          <ul className="flex gap-[2rem] mb-[2rem] lg:mb-0">
            {NavigationDestination.map((item, i) => (
              <li key={i} onClick={() => handleDataOnClick(item, destination)}>
                <MenuBar
                  DestinationMenu
                  className={item === dataList.name && "active"}
                >
                  {item}
                </MenuBar>
              </li>
            ))}
          </ul>

          {/* CONTENT */}
          <h2 className="heading-2">{dataList.name}</h2>
          <p className="body-text pb-[5rem] max-w-[25rem] text-n-2">
            {dataList.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-[1.8rem] sm:gap-[6rem] lg:gap-[2rem] items-center">
            <div className="flex flex-col gap-1">
              <p className="sub-heading-2 text-n-2">Avg. distance</p>
              <p className="sub-heading-1 text-n-1">{dataList.distance}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="sub-heading-2 text-n-2">Est. travel time</p>
              <p className="sub-heading-1 text-n-1">{dataList.travel}</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Destination;
