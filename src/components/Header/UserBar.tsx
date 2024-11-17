import { Link, useLocation } from "react-router-dom";

import { Icon, LogoutButton } from "../../components";
import { useAppSelector } from "../../hooks";
import { selectProductsCart, selectUser } from "../../redux";

interface IUserBarProps {
  className?: string;
  toggleMenu: () => void;
}

export const UserBar = ({ className, toggleMenu }: IUserBarProps) => {
  const { name } = useAppSelector(selectUser);
  const products = useAppSelector(selectProductsCart);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const quantityProducts = products?.length;

  return (
    <div className={`${className} flex justify-center items-center gap-[12px]`}>
      <div className="flex justify-center items-center gap-[8px]">
        <Link
          to="/cart"
          className="relative flex items-center justify-center w-[40px] h-[40px] sm-max:w-[38px] sm-max:h-[38px] md:w-[44px] md:h-[44px] rounded-[50%] bg-white border border-[#f1f1f1]"
        >
          <Icon id="cart" size={16} className="stroke-[#59b17a] fill-none" />
          <span className="absolute -top-[2px] -right-[2px] flex items-center justify-center w-[16px] h-[16px] rounded-[50%] bg-[#D7EAE0] font-bold text-[12px] text-[#59b17a]">
            {quantityProducts}
          </span>
        </Link>
        <div className="flex items-center justify-center shrink-0 w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-[50%] bg-[#D7EAE0] font-semibold text-[18px] sm-max:text-[16px] text-[#59b17a]">
          {name && name[0].toUpperCase()}
        </div>
      </div>

      <LogoutButton
        toggleMenu={toggleMenu}
        className={`hidden lg:block ${isHomePage ? "btn-home" : "btn-next"}`}
      />
    </div>
  );
};
