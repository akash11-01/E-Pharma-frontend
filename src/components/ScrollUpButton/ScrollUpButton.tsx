import { useEffect, useRef, useState } from "react";
import throttle from "lodash.throttle";
import { Icon } from "../../components";

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      scrollYRef.current = window.scrollY;
      setIsVisible(scrollYRef.current > 300);
    }, 400);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClickBtn}
      className={`
        flex justify-center items-center fixed right-5 bottom-5 sm-max:bottom- sm-max:right-3 md:right-[35px] md:bottom-[25px] lg:right-[60px] lg:bottom-10 rounded-full w-[38px] h-[70px] sm-max:w-[24px] sm-max:h-[44px] lg:w-[44px] lg:h-[82px] bg-[#59b17a] border-[8px] sm-max:border-[6px] border-white z-[49] shadow-scroll hover:-translate-y-2 focus:-translate-y-2 transition-transform duration-300 ${
          !isVisible ? "scale-0" : "scale-1"
        }`}
    >
      <Icon
        id="arrow"
        className="stroke-white fill-white sm-max:size-2 lg:size-[22px]"
        size={14}
      />
    </button>
  );
};
