import { Link } from "react-router-dom";

import { CartButton } from "../../components";

interface IMedicineItem {
  product: {
    _id: string;
    photo: string;
    name: string;
    suppliers: string;
    price: string;
  };
}
export const MedicineItem: React.FC<IMedicineItem> = ({
  product: { _id, photo, name, suppliers, price },
}) => {
  return (
    <li className="w-full md:w-[226px] lg:w-[280px]">
      <img
        src={photo}
        className="flex items-center justify-center w-full h-[300px] md:w-[226px] md:h-[260px] lg:w-[280px] lg:h-[280px] bg-[#f7f7f7] rounded-[20px] border-[1.15px] border-[#59b17a99] mb-[8px]"
        height="300"
        width="335"
        alt={name}
        loading="lazy"
      />
      <div className="p-5 bg-white rounded-[20px]">
        <div className="flex items-center justify-between mb-[4px]">
          <h5 className="font-semibold text-[16px] lg:text-[18px] leading-[1.4] text-[#1d1e21]">
            {name}
          </h5>
          <h5 className="font-semibold text-[16px] lg:text-[18px] leading-[1.4] text-[#1d1e21]">
            ৳{price}
          </h5>
        </div>
        <p className="font-normal text-[12px] leading-[1.5] text-[#1d1e2199] mb-[17px] md:mb-[14px]">
          {suppliers}
        </p>
        <div className="flex items-center justify-between">
          <CartButton _id={_id} />
          <Link
            to={`/product/${_id}/description`}
            className="decoration-skip-none font-normal text-[12px] leading-[1.5] text-[#1d1e21] underline hover:scale-125 focus-visible:scale-125 hover:text-[#59b17a] focus-visible:text-[#59b17a] transition-transform duration-300"
          >
            Details
          </Link>
        </div>
      </div>
    </li>
  );
};
