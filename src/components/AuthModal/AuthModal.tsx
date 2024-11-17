import { useState } from "react";
import { AuthForm } from "../AuthForm/AuthForm";

interface IAuthModalProps {
  toggleModal: () => void;
}

export const AuthModal: React.FC<IAuthModalProps> = ({ toggleModal }) => {
  const [registration, setRegistration] = useState(true);

  const toggleRegistration = () => {
    setRegistration(!registration);
  };

  return (
    <>
      <h2 className="md:w-[323px] font-semibold text-[#1d1e21] text-center text-[28px] sm-max:text-[25px] leading-[1.14] mb-[14px]">
        {registration ? "Sign Up" : "Log in to your account"}
      </h2>
      <p className="md:w-[270px] font-normal text-center text-[16px] sm-max:text-[14px] text-[#6a6a6f] leading-[1.25] mb-[25px] sm-max:mb-[15px] mx-auto">
        {registration
          ? "Before proceeding, please register on our site."
          : "Please login to your account before continuing."}
      </p>
      <AuthForm
        toggleModal={toggleModal}
        registration={registration}
        toggleRegistration={toggleRegistration}
      />
    </>
  );
};
