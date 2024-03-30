import Section from "./Section";
import Explore from "./design/Explore";

const Hero = ({ redirectDestinationSection }) => {
  return (
    <Section>
      {/* CONTENT */}
      <div
        className="flex flex-col self-start gap-0 justify-self-center  
      text-center lg:text-start pb-[4rem] lg:pb-0"
      >
        <h1 className="pb-[2rem] leading-none">
          <span className="heading-5 block text-n-2 pb-[1.5rem]">
            So, you want to travel to
          </span>
          <span className="heading-1">Space</span>
        </h1>
        <p className="body-text text-n-2  max-w-[27.5rem] text-center lg:text-justify">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      {/* EXPLORE BUTTON */}
      <div className="justify-self-center lg:justify-self-end lg:mr-[4rem] lg:self-end">
        <Explore onClickEvent={redirectDestinationSection}>Explore</Explore>
      </div>
    </Section>
  );
};

export default Hero;
