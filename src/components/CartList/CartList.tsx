import { useAppSelector } from "../../hooks";
import { selectProductsCart } from "../../redux";
import { CartItem } from "./CartItem";

export const CartList = () => {
  const products = useAppSelector(selectProductsCart);

  return (
    <ul className="max-h-[100vh] w-full lg:w-[460px] scrollbar lg:mt-5">
      {products.map((product) => (
        <CartItem key={product._id} {...product} />
      ))}
    </ul>
  );
};
