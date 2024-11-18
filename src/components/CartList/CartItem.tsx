import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectProductsCart, updateCart } from "../../redux";
import { QuantityButton } from "../../components";
import { toast } from "react-toastify";

interface ICartItemProps {
  _id: string;
  photo: string;
  name: string;
  price: string;
  description: {
    immuneSupport: string;
  };
}

export const CartItem: React.FC<ICartItemProps> = ({
  _id,
  photo,
  name,
  price,
  description,
}) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProductsCart);

  const handleRemoveFromCart = async () => {
    const updatedProducts =
      products
        .map((product) => ({
          _id: product._id,
          quantity: product.quantity,
        }))
        .filter((product) => product._id !== _id) || [];
    const updatedCart = {
      products: updatedProducts,
    };
    try {
      await dispatch(updateCart(updatedCart)).unwrap();
    } catch (error) {
      toast.error(error as string);
    }
  };

  return (
    <li className="lg:w-[460px] py-5 pr-[8px] flex gap-[12px] sm-max:items-center md:gap-5 border-b border-[#1d1e2119] last:border-0">
      <img
        src={photo}
        alt={name}
        className="shrink-0 w-[120px] h-[120px] sm-max:h-[130px] md:w-[122px] md:h-[133px] rounded-[27px] border-[1.15px] border-[#f1f1f1]"
      />
      <div className="w-full flex flex-col">
        <div className="flex flex-col gap-[10px] md:gap-0 md:flex-row md:justify-between">
          <div>
            <h4 className="font-semibold text-[16px] md:text-[18px] leading-[1.4] text-[#1d1e21] mb-[8px]">
              {name}
            </h4>
            <p className="text-[12px] leading-[1.17] md:leading-[1.29] text-[#6a6a6f]">
              {description.immuneSupport}
            </p>
          </div>

          <p className="font-medium text-[12px] md:text-[14px] leading-[1.17] md:leading-[1.29] text-[#1d1e21]">
            ₹{price}
          </p>
        </div>
        <div className="flex sm-max:flex-col sm-max:gap-1 gap-0 sm-max:items-start items-center md:items-end justify-between sm-max:mt-[5px] mt-auto">
          <QuantityButton _id={_id} />
          <button
            onClick={handleRemoveFromCart}
            type="button"
            className="w-[89px] sm-max:w-[95px] h-[32px] md:h-[33px] font-medium text-[14px] text-[#e85050] leading-[1] tracking-[-0.05em] text-center px-[12px] py-[8px] rounded-[40px] bg-[#e8505019] hover:bg-[#e85050] focus-visible:bg-[#e85050] hover:text-white focus-visible:text-white hover:shadow-lg focus-visible:shadow-lg transition duration-300"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};
