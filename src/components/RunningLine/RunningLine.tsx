// import MarqueeSlider from "react-marquee-slider";
import Marquee from "react-fast-marquee";

import { Icon } from "../../components";
import { runningItems } from "../../constants";

export const RunningLine = () => {
  return (
    <section className="pb-[80px] md:pb-[120px]">
      <div className="container">
        <Marquee direction="right">
          <ul className="flex justify-center items-center gap-2 md:gap-[48px] mr-2 md:mr-[48px]">
            {runningItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 font-semibold leading-[1.3] tracking-[-0.02em] text-[14px] md:text-[16px] text-[#1d1e21] ${item.width}`}
              >
                <Icon
                  id="lightning"
                  size={20}
                  className="stroke-[#59B17A] fill-none"
                />
                {item.label}
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </section>
  );
};
