import { useLocation } from "react-router-dom";

import { StoreItem } from "./StoreItem";
import { useAppSelector } from "../../hooks";
import { selectNearStores, selectStores } from "../../redux";
import { getRandomStores } from "../../helpers";

export const StoreList = () => {
  const stores = useAppSelector(selectStores);
  const nearStores = useAppSelector(selectNearStores);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const storesList = isHomePage ? getRandomStores(nearStores, 6) : stores;

  return (
    <ul
      className={`flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-y-[32px] md:gap-x-[16px] ${
        isHomePage
          ? "lg:gap-y-[38px] lg:gap-x-[36px]"
          : "lg:gap-y-10 lg:gap-x-5"
      }`}
    >
      {storesList.map((store, index) => (
        <StoreItem key={index} {...store} />
      ))}
    </ul>
  );
};
