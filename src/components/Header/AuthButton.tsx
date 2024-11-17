import { Link } from "react-router-dom";

interface IAuthButtonProps {
  className: string;
  btnRegClass?: string;
  btnLogClass?: string;
  toggleMenu?: () => void;
}

export const AuthButton = ({
  toggleMenu,
  className = "",
  btnRegClass = "",
  btnLogClass = "",
}: IAuthButtonProps) => {
  return (
    <>
      <ul className={`justify-center items-center gap-[14px] ${className}`}>
        <li>
          <Link
            to="register"
            onClick={() => {
              if (toggleMenu) {
                toggleMenu();
              }
            }}
            className={`button inline-block border rounded-[60px] px-[32px] py-[12px] md:py-[15px] h-[40px] md:h-[46px] ${btnRegClass}`}
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            to="login"
            onClick={() => {
              if (toggleMenu) {
                toggleMenu();
              }
            }}
            className={`button underline ${btnLogClass}`}
          >
            Login
          </Link>
        </li>
      </ul>
    </>
  );
};
