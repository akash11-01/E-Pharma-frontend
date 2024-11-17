import { useState, useEffect, useRef, RefObject } from "react";

import { sortOptions } from "../../constants";
import { Icon } from "../../components";

interface ISortProps {
  onSortChange: (value: string) => void;
  sortLabel: string;
}

export const Sort = ({ onSortChange, sortLabel }: ISortProps) => {
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const sortRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsListVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleListClick = () => {
    setIsListVisible(!isListVisible);
  };

  const handleSortClick = (value: string) => {
    onSortChange(value);
    setIsListVisible(false);
  };

  return (
    <div className="relative">
      <div
        ref={sortRef}
        onClick={handleListClick}
        className="flex items-center justify-between bg-white rounded-[60px] border border-[#1d1e2119] px-[18px] py-[13px] h-[44px] md:w-[214px] font-normal text-[12px] leading-[1.5] text-[#1d1e2166] cursor-pointer hover:border-[#59B17A] focus:border-[#59B17A] transition duration-300 group"
      >
        {sortLabel}
        <Icon
          id="chevron-down"
          className={`stroke-[#1D1E21] fill-none transition duration-300 ${
            isListVisible ? "rotate-180" : ""
          }`}
          size={16}
        />
      </div>
      {isListVisible && (
        <ul className="absolute top-[50px] left-0 bg-white rounded-[20px] px-[18px] py-[16px] w-full md:w-[214px] font-normal text-[14px] md:text-[16px] leading-[1.5] text-[#1D1E21] space-y-[4px] z-[2] shadow-lg">
          {sortOptions.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSortClick(item)}
              className={`cursor-pointer hover:text-[#3f945f] focus:text-[#3f945f] transition duration-300 ${
                item === sortLabel ? "text-[#59b17a]" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
