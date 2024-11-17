import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  selectProductsCart,
} from "../../redux";
import { Icon } from "../../components";

interface IQuantityButtonProps {
  _id: string;
}

export const QuantityButton: React.FC<IQuantityButtonProps> = ({ _id }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProductsCart);
  const product = products.find((product) => product._id === _id);
  const quantity = product?.quantity || 0;

  const handleIncreaseQuantity = () => {
    if (quantity === 0) {
      dispatch(increaseQuantity({ _id, quantity: 1 }));
    } else {
      dispatch(increaseQuantity(_id));
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(_id));
    }
  };

  return (
    <div className="flex items-center justify-center gap-[12px] w-[95px] h-[32px] md:w-[108px] md:h-[44px] font-normal text-[14px] md:text-[16px] text-[#1d1e21] leading-[1.43] md:leading-[1.25] px-[14px] py-[6px] md:px-[16px] md:py-[12px] rounded-[60px] border border-[#1d1e2119] bg-transparent hover:border-[#59b17a] focus-visible:border-[#59b17a] hover:shadow-lg focus-visible:shadow-lg transition duration-300">
      <button onClick={handleDecreaseQuantity} type="button">
        <Icon
          id="minus"
          size={18}
          className="md:size-[20px] fill-none stroke-[#59b17a] hover:text-[#59b17a] focus-visible:text-[#59b17a]"
        />
      </button>
      <span className="shrink-0 w-[13px] md:w-[16px] text-center ">
        {quantity === 0 ? "0" : quantity}
      </span>
      <button onClick={handleIncreaseQuantity} type="button">
        <Icon
          id="plus"
          size={18}
          className="md:size-[20px] fill-none stroke-[#59b17a] hover:text-[#59b17a] focus-visible:text-[#59b17a]"
        />
      </button>
    </div>
  );
};
