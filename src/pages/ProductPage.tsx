import { Suspense, useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

import { CartButton, QuantityButton } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getOneProduct, selectOneProduct } from "../redux";

const ProductPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const currentProduct = useAppSelector(selectOneProduct);

  useEffect(() => {
    id && dispatch(getOneProduct(id));
  }, [dispatch, id]);

  if (!currentProduct) return;

  return (
    <div className="container pb-[80px] md:pb-[120px]">
      <div className="lg:flex lg:gap-5">
        <div className="flex flex-col md:flex-row lg:flex-col gap-[8px] md:gap-[16px] lg:gap-5 mb-[8px] md:mb-[16px] lg:mb-0">
          <img
            src={currentProduct.photo}
            width={364}
            className="w-full h-[337px] md:w-[364px] md:h-[284px] lg:h-[337px] bg-[#f7f7f7] rounded-[20px] border-[1.15px] border-[#59b17a99]"
            alt={currentProduct.name}
            loading="lazy"
          />

          <div className="p-5 md:p-[32px] bg-white rounded-[20px] lg:w-[364px]">
            <div className="relative flex items-center justify-between mb-[4px]">
              <h5 className="font-semibold text-[16px] md:text-[20px] leading-[1.4] text-[#1d1e21]">
                {currentProduct.name}
              </h5>
              <h5 className="md:absolute md:top-[82px] md:left-0 lg:static font-semibold text-[16px] md:text-[20px] leading-[1.4] text-[#1d1e21]">
                ₹{currentProduct.price}
              </h5>
            </div>
            <p className="font-normal text-[12px] leading-[1.5] text-[#1d1e2199] mb-[32px] md:mb-[126px] lg:mb-10">
              Brand: {currentProduct.suppliers}
            </p>

            <div className="flex items-center justify-between md:gap-[12px] lg:gap-0">
              <QuantityButton _id={id || ""} />

              <CartButton _id={id || ""} />
            </div>
          </div>
        </div>

        <div className="p-5 md:p-[32px] lg:p-10 pb-10 md:pb-[64px] lg:pb-[80px] bg-white rounded-[20px] lg:w-full">
          <div className="flex items-center gap-[8px] mb-5 md:mb-[32px] lg:mb-10">
            <NavLink to="description" className="product-link">
              Description
            </NavLink>
            <NavLink to="reviews" className="product-link">
              Reviews
            </NavLink>
          </div>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
