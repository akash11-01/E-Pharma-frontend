import { Link, useLocation } from "react-router-dom";

import { Icon } from "..";
import { isStoreOpen } from "../../helpers";

interface IStoreItem {
  name: string;
  address: string;
  city: string;
  phone: string;
  url?: string;
  rating: number;
  openTime: string;
  closeTime: string;
}

export const StoreItem: React.FC<IStoreItem> = ({
  name,
  address,
  city,
  phone,
  rating,
  url,
  openTime,
  closeTime,
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isOpen = isStoreOpen(openTime, closeTime);

  return (
    <li>
      <Link
        to={url ? url : "#"}
        target={url ? "_blank" : "_self"}
        rel={url ? "noopener noreferrer" : ""}
        className={`relative overflow-hidden flex flex-col p-[32px] md:p-10 w-[335px] h-[202px] sm-max:w-[280px] md:w-[344px] rounded-[27px] border-[1.15px] border-[#f1f1f1] bg-[#e7f1ed] ${
          isHomePage
            ? "sm-max:p-[25px] sm-max:h-[190px] md:h-[232px] lg:w-[392px] gap-[32px] md:gap-5 transition-transform hover:shadow-lg focus:shadow-lg hover:scale-105 focus:scale-105"
            : "h-[250px] sm-max:h-[240px] md:h-[276px] lg:w-[381px] gap-0 cursor-default"
        }`}
      >
        <div className="flex justify-between">
          <h4
            className={`font-semibold text-[16px] md:text-[20px] leading-[1.4] text-[#1d1e21] ${
              isHomePage ? "truncate max-w-[123px]" : "mb-5"
            }`}
          >
            {name}
          </h4>
          <div
            className={`flex items-center gap-[14px] sm-max:gap-[8px] ${
              isHomePage
                ? ""
                : "absolute bottom-[32px] right-[32px] md:bottom-[40px] md:right-[40px]"
            }`}
          >
            <div className="flex items-center gap-[6px] sm-max:gap-[2px]">
              <Icon id="star" size={16} className="fill-[#ffc531]" />
              <p className="font-medium text-[14px] text-[#1d1e21]">{rating}</p>
            </div>
            <div
              className={`px-[16px] py-[8px] rounded-[8px] font-semibold text-[12px] leading-[1.5] tracking-[-0.02em] uppercase text-center ${
                isOpen
                  ? "bg-[#59b17a19] text-[#59b17a]"
                  : "bg-[#e850501a] text-[#E85050]"
              }`}
            >
              {isOpen ? "Open" : "Close"}
            </div>
          </div>
        </div>
        <address>
          <ul>
            <li className="flex gap-[8px] mb-[18px] md:mb-[14px] text-[14px] md:text-[16px] not-italic leading-[1.29] md:leading-[1.25] text-[#93939A]">
              <Icon
                id="map-pin"
                className="fill-none stroke-[#59b17a]"
                size={18}
              />
              <div>
                <p className="mb-[4px]">{address}</p>
                <p>{city}</p>
              </div>
            </li>
            <li className="flex gap-[8px] text-[14px] md:text-[16px] not-italic leading-[1.29] md:leading-[1.25] text-[#93939A]">
              <Icon
                id="phone"
                className="fill-none stroke-[#59b17a]"
                size={18}
              />
              <p>{phone}</p>
            </li>
          </ul>
        </address>

        <Link
          to="/medicine"
          className={`w-[102px] sm-max:w-[94px] font-medium text-[14px] text-white leading-[1] text-center px-[16px] sm-max:px-[10px] py-[10px] rounded-[24px] bg-[#59b17a] mt-auto transition-transform hover:shadow-lg focus:shadow-lg hover:scale-105 focus:scale-105 ${
            isHomePage ? "hidden" : ""
          }`}
        >
          Visit Store
        </Link>
        <Icon
          id="bg"
          className={`absolute size-[220px] sm-max:size-[200px] md:size-[270px] lg::size-[280px] stroke-none fill-[#59b17a14] ${
            isHomePage
              ? "-bottom-[80px] md:-bottom-[100px] lg:-bottom-[96px] -right-[95px] md:-right-[155px] lg:-right-[105px]"
              : "rotate-100 -top-[40px] md:-top-[70px] lg:-top-[73px] -right-[95px] md:-right-[135px] lg:-right-[100px]"
          }`}
        />
      </Link>
    </li>
  );
};
