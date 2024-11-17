import { CartForm, CartList } from "../components";
import { useAppSelector } from "../hooks";
import { selectProductsCart } from "../redux";

import cart from "../assets/images/cart.webp";

const CartPage = () => {
  const products = useAppSelector(selectProductsCart);

  return (
    <div className="container pt-[39px] md:pt-[55px] lg:pt-[75px] pb-[60px] md:pb-[100px] lg:pb-[120px]">
      <h2 className="title">Cart</h2>
      {products.length > 0 ? (
        <div className="flex flex-col gap-[60px] md:gap-[44px] lg:flex-row lg:gap-[96px]">
          <div>
            <div className="p-5 pb-10 md:px-[78px] md:py-10 lg:p-10 bg-white rounded-[20px] lg:w-[628px]">
              <h4 className="font-semibold text-[16px] md:text-[20px] leading-[1.4] text-[#1d1e21] mb-[12px] md:mb-[14px]">
                Enter shipping info
              </h4>
              <p className="text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.5] text-[#6a6a6f] mb-10 md:mb-10">
                Enter your delivery address where you get the product. You can
                also send any other location where you send the products.
              </p>
              <CartForm />
            </div>
          </div>

          <CartList />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img src={cart} alt="Cart" className="w-[180px] h-[180px]" />
          <h4 className="font-semibold text-[16px] md:text-[20px] leading-[1.4] text-[#1d1e21] mb-3">
            Your basket is <span className="text-[#59b17a]">empty...</span>
          </h4>
          <p className="w-full md:w-[335px] text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.5] text-center text-[#6a6a6f]">
            Go to the Medicines page and add the required medications to your
            cart.
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
