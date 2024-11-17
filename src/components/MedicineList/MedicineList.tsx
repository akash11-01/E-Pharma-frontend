import { useAppSelector } from "../../hooks";
import { selectProducts } from "../../redux";
import { MedicineItem } from "./MedicineItem";

export const MedicineList = () => {
  const products = useAppSelector(selectProducts);

  return (
    <ul className="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-y-[32px] md:gap-x-[13px] lg:gap-y-10 lg:gap-x-[21px] mb-10">
      {products.map((product) => (
        <MedicineItem key={product._id} {...{ product }} />
      ))}
    </ul>
  );
};
