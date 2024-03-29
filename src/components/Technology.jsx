import { NavigationTechnology, technology } from "../constants";
import Section from "./Section";
import SliderNumber from "./design/SliderNumber";

const Technology = ({ dataList, handleDataOnClick }) => {
  return (
    <div>
      <h5 className="xl:hidden heading-5 text-n-1 pb-[2.5rem] lg:pb-[7rem] text-center sm:text-left">
        <span className="text-n-2/40">03</span> Space launch 101
      </h5>

      <Section>
        {/* LEFT COLUMN */}
        <div>
          <h5 className="hidden xl:block heading-5 text-n-1 pb-[2.5rem] lg:pb-[12rem] text-center sm:text-left">
            <span className="text-n-2/40">03</span> Space launch 101
          </h5>

          <div className="flex flex-col xl:flex-row items-center lg:items-start lg:gap-[3rem] xl:gap-[6rem] ">
            {/* NAV */}
            <div>
              <ul className="flex flex-row xl:flex-col gap-[1rem] pb-[3rem] lg:pb-0 lg:ml-[2rem] xl:ml-0">
                {NavigationTechnology.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => handleDataOnClick(item, technology)}
                  >
                    <SliderNumber
                      className={item === dataList.name && "active"}
                    >
                      {i + 1}
                    </SliderNumber>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTENT */}
            <div className="text-center lg:text-left">
              <p className="nav-text text-n-2 pb-[.4rem] lg:pb-0">
                THE TERMINOLOGY…
              </p>
              <h3 className="heading-3 pb-[1rem] ">{dataList.name}</h3>
              <p className="body-text text-n-2 max-w-[19.1rem] sm:max-w-[27.5rem] lg:max-w-[24.7rem]">
                {dataList.description}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="justify-self-center lg:justify-self-end order-first lg:order-none w-[full] mx-auto">
          <div className="lg:hidden w-full h-full mx-auto pb-[3rem] lg:pb-0">
            <img
              src={dataList.images.landscape}
              width={768}
              height={310}
              alt={`${dataList.name} image`}
            />
          </div>

          <div className="hidden lg:block max-w-[80%] max-h-[80%] xl:max-w-full xl:max-h-full mx-auto">
            <img
              src={dataList.images.portrait}
              width={515}
              height={527}
              alt={`${dataList.name} image`}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Technology;
