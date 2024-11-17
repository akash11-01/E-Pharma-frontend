import { LogOut, Modal } from "../../components";
import { useModal } from "../../hooks";

interface ILogoutButtonProps {
  className?: string;
  toggleMenu: () => void;
}

export const LogoutButton = ({ toggleMenu, className }: ILogoutButtonProps) => {
  const [isOpenModal, toggleModal] = useModal();

  return (
    <>
      <button
        onClick={() => {
          toggleMenu && toggleMenu();
          toggleModal();
        }}
        type="button"
        className={`${className} px-[27px] md:px-[31px] py-[13px] lg:py-[16px] w-[107px] md:w-[115px] h-[40px] md:h-[44px] lg:h-[46px] border border-[#f1f1f17f] bg-transparent rounded-[60px] font-normal text-[#f1f1f1] text-center text-[14px] leading-[1] transition duration-300`}
      >
        Log out
      </button>

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          toggleModal={toggleModal}
          className="px-[32px] py-[40px] sm-max:px-[20px] md:px-[70px] md:py-[50px]"
        >
          <LogOut toggleLogOutModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};
