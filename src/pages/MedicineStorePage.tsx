import { useEffect } from "react";

import { StoreList } from "../components";
import { useAppDispatch } from "../hooks";
import { getAllStores } from "../redux";

const MedicineStorePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllStores());
  }, [dispatch]);

  return (
    <div className="container pt-[39px] md:pt-[55px] lg:pt-[75px] pb-[80px] md:pb-[120px]">
      <h2 className="title">Medicine Store</h2>
      <StoreList />
    </div>
  );
};

export default MedicineStorePage;
