import { Link, NavLink } from "react-router-dom";

import { navItems } from "../../constants";
import { FooterDescription } from "../../components";
import {
  white_mobile_1x,
  white_mobile_2x,
  white_tablet_1x,
  white_tablet_2x,
} from "../../assets";

interface ILogoSrc {
  mobile_1x: string;
  mobile_2x: string;
  tablet_1x: string;
  tablet_2x: string;
}

interface INavBarProps {
  logoSrc?: ILogoSrc;
  logoClass?: string;
  navClass?: string;
  linkListClass?: string;
  linkItemClasses?: string[];
  linkClasses?: string[];
  className?: string;
  toggleMenu?: () => void;
}

export const NavBar = ({
  logoSrc = {
    mobile_1x: white_mobile_1x,
    mobile_2x: white_mobile_2x,
    tablet_1x: white_tablet_1x,
    tablet_2x: white_tablet_2x,
  },
  logoClass = "",
  navClass = "",
  linkListClass = "",
  linkItemClasses = [],
  linkClasses = [],
  className = "hidden",
  toggleMenu,
}: INavBarProps) => {
  return (
    <nav className={navClass}>
      <Link to="/" className={logoClass}>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${logoSrc.tablet_1x} 1x, ${logoSrc.tablet_2x} 2x`}
            height="44"
            width="44"
          />
          <img
            srcSet={`${logoSrc.mobile_1x} 1x, ${logoSrc.mobile_2x} 2x`}
            height="32"
            width="32"
            alt="Logotype"
            loading="lazy"
          />
        </picture>
        easy-pharm
      </Link>
      <FooterDescription className={className} />
      <ul className={linkListClass}>
        {navItems.map((item, index) => (
          <li key={item.path} className={linkItemClasses[index]}>
            <NavLink
              to={item.path}
              onClick={toggleMenu}
              className={linkClasses[index]}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
