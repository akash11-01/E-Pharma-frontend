import { useRef } from "react";

import { AuthButton, Icon, LogoutButton, NavBar } from "../../components";
import { useAppSelector, useEscapeClose } from "../../hooks";
import { handleClickOnBackdrop } from "../../helpers";
import { selectIsLoggedIn } from "../../redux";

interface IBurgerMenuProps {
  classBackdrop: string;
  classMenu: string;
  isOpen: boolean;
  toggleMenu: () => void;
}

export const BurgerMenu = ({
  toggleMenu,
  classBackdrop,
  classMenu,
  isOpen,
}: IBurgerMenuProps) => {
  const isLogin = useAppSelector(selectIsLoggedIn);
  const backdropRef = useRef(null);

  useEscapeClose(isOpen, toggleMenu);

  return (
    <div
      onClick={(event) => handleClickOnBackdrop(toggleMenu, event)}
      ref={backdropRef}
      className={`${classBackdrop} fixed backdrop-blur-sm bg-[#1D1E21] bg-opacity-[45%] w-full h-full left-0 top-0 z-50 lg:hidden`}
    >
      <div
        className={`${classMenu} relative flex flex-col justify-between items-center gap-[45px] bg-[#59B17A] px-[38px] md:px-[100px] pt-[260px] md:pt-[350px] pb-10 md:pb-[64px] w-[210px] sm-max:w-full md:w-[334px] ml-auto h-full transition duration-500`}
      >
        <button
          type="button"
          className="flex justify-center items-center absolute top-[31px] right-[20px] md:top-[39px] md:right-[32px] outline-none"
          onClick={toggleMenu}
        >
          <Icon
            id="close"
            className="stroke-white fill-none focus:stroke-[#93939A] transition duration-300"
            size={32}
          />
        </button>

        <NavBar
          logoClass="hidden"
          linkListClass="flex flex-col gap-[2px] items-center justify-center hidden:lg"
          linkItemClasses={["link", " link w-[140px]", "link"]}
          linkClasses={[
            "px-[20px] link-btn",
            "px-[12px] link-btn",
            "px-[17px] link-btn",
          ]}
          toggleMenu={toggleMenu}
        />

        {isLogin ? (
          <LogoutButton toggleMenu={toggleMenu} className="block lg:hidden" />
        ) : (
          <AuthButton
            toggleMenu={toggleMenu}
            className="flex flex-col md:flex-row lg:hidden"
            btnRegClass="btn-home"
            btnLogClass="btn-home"
          />
        )}
      </div>
    </div>
  );
};
