import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { AuthModal, Icon, Modal } from "../../components";
import { useAppDispatch, useAppSelector, useModal } from "../../hooks";
import { selectIsLoggedIn, selectProductsCart, updateCart } from "../../redux";

interface ICartButton {
  _id: string;
}

export const CartButton: React.FC<ICartButton> = ({ _id }) => {
  const dispatch = useAppDispatch();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [isOpenModal, toggleModal] = useModal();
  const isLoggedin = useAppSelector(selectIsLoggedIn);
  const products = useAppSelector(selectProductsCart);
  const location = useLocation();
  const isMedicinePage = location.pathname === "/medicine";

  useEffect(() => {
    if (products.length) {
      setIsProductInCart(products.some((product) => product._id === _id));
    } else {
      setIsProductInCart(false);
    }
  }, [_id, products]);

  const handleAddToCart = () => {
    if (!isLoggedin) {
      toggleModal();
      return;
    }

    const updatedProducts = products?.length
      ? products.map((product) => ({
          _id: product._id,
          quantity: product.quantity,
        }))
      : [];

    updatedProducts.push({ _id, quantity: 1 });

    const updatedCart = {
      products: updatedProducts,
    };

    dispatch(updateCart(updatedCart));
  };

  const handleRemoveFromCart = () => {
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

    dispatch(updateCart(updatedCart));
  };
  return (
    <>
      <button
        type="button"
        onClick={isProductInCart ? handleRemoveFromCart : handleAddToCart}
        className={`flex items-center justify-center gap-[6px] font-medium text-[14px] leading-[1] text-center hover:shadow-lg focus-visible:shadow-lg transition duration-300 ${
          isProductInCart
            ? "text-[#e85050] bg-[#e8505019] hover:bg-[#e85050] focus-visible:bg-[#e85050] hover:text-white focus-visible:text-white"
            : "text-white bg-[#59b17a] hover:bg-[#3f945f] focus-visible:bg-[#3f945f]"
        } ${
          isMedicinePage
            ? "w-[108px] h-[34px] px-[16px] py-[10px] rounded-[24px]"
            : "w-[140px] h-[44px] sm-max:w-[108px] px-[32px] sm-max:px-[15px] py-[13px] rounded-[60px]"
        }`}
      >
        {isProductInCart ? (
          <>
            Remove
            <Icon id="cart" size={14} className="fill-none stroke-current" />
          </>
        ) : (
          "Add to cart"
        )}
      </button>

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          toggleModal={toggleModal}
          className="px-[32px] py-[40px] sm-max:px-[20px] md:px-[70px] md:py-[50px]"
        >
          <AuthModal toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};
