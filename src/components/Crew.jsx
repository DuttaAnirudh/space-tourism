import Section from "./Section";
import SliderDot from "./design/SliderDot";
import { NavigationCrew, crew } from "../constants";

const Crew = ({ dataList, handleDataOnClick }) => {
  return (
    <div>
      <h5 className="sm:hidden heading-5 text-n-1 pb-[2.5rem] lg:pb-[12rem] text-center sm:text-left">
        <span className="text-n-2/40">02</span> Meet your Crew
      </h5>

      <Section>
        {/* LEFT COLUMN */}
        <div className="">
          <h5 className="hidden sm:block heading-5 text-n-1 pb-[2.5rem] lg:pb-[12rem] text-center sm:text-left">
            <span className="text-n-2/40">02</span> Meet your Crew
          </h5>
          <div className="flex flex-col  lg:gap-[8rem] items-center lg:items-start">
            <div className=" lg:max-h-[13rem] text-center lg:text-left">
              <p className="heading-4 text-n-3">{dataList.role}</p>
              <h2 className="heading-3 pb-[0.6rem] lg:pb-0">{dataList.name}</h2>
              <p className="body-text text-n-2 max-w-[23rem] sm:max-w-[29rem] lg:max-w-[25.5rem] pb-[1.5rem] lg:pb-0">
                {dataList.bio}
              </p>
            </div>

            <div className="order-first sm:order-none lg:ml-[3rem]">
              <ul className="flex gap-[1.4rem] mb-[1rem] sm:mb-[2rem] lg:mb-0">
                {NavigationCrew.map((item, i) => (
                  <li key={i} onClick={() => handleDataOnClick(item, crew)}>
                    <SliderDot className={item === dataList.name && "active"} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="order-first sm:order-none pb-[2rem] sm:pb-0">
          <div className="w-[50%] h-[50%] mx-auto lg:w-[100%] lg:h-[100%]">
            <picture>
              <source srcSet={dataList.images.webp} type="image/webp" />
              <source srcSet={dataList.images.png} type="image/png" />
              <img
                src={dataList.images.png}
                width={dataList.images.width}
                height={dataList.images.height}
                alt={`${dataList.name} image`}
              />
            </picture>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Crew;
