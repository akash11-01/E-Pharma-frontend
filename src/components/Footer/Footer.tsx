import { FooterDescription, Icon, NavBar } from "../../components";

export const Footer = () => {
  return (
    <footer className="bg-[#59b17a] mt-auto py-[20px] md:py-[32px] lg:py-[40px]">
      <div className="container relative">
        <NavBar
          navClass="flex flex-col md:flex-row md:items-center lg:items-start md:justify-between lg:justify-start mb-[80px] md:mb-[20px] lg:gap-[270px]"
          logoClass="flex gap-[12px] md:gap-[14px] md:justify-center items-center text-white logo mb-[20px] md:mb-0"
          className="flex w-[261px] mb-[40px] md:hidden"
          linkListClass="flex gap-[15px] sm-max:gap-[2px] lg:gap-[32px]"
          linkClasses={[
            "link-footer px-[20px] sm-max:px-[14px]",
            "link-footer px-[12px] sm-max:px-[14px]",
            "link-footer px-[17px] sm-max:px-[14px]",
          ]}
        />

        <div className="flex items-start justify-between md:mb-[88px] lg:mb-[64px]">
          <FooterDescription className="hidden md:flex md:w-[261px] lg:w-[311px]" />
          <ul className="hidden md:flex gap-[12px] lg:absolute lg:right-[128px] lg:top-0">
            <li className="w-[44px] h-[44px]">
              <a
                className="social-link group"
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Icon id="facebook" className="social-icon" size={28} />
              </a>
            </li>
            <li className="w-[44px] h-[44px]">
              <a
                className="social-link group"
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon id="instagram" className="social-icon" size={28} />
              </a>
            </li>
            <li className="w-[44px] h-[44px]">
              <a
                className="social-link group"
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <Icon id="youtube" className="social-icon" size={28} />
              </a>
            </li>
          </ul>
        </div>

        <ul className="ul-border flex flex-wrap md:justify-center gap-[10px] md:gap-[24px] font-normal text-[10px] md:text-[14px] leading-[1] md:leading-[1.29] text-[#f7f8fa]">
          <li className="pr-[10px] md:pr-[24px] border-r border-[#f7f8fa33]">
            &copy; E-Pharmacy 2023. All Rights Reserved
          </li>
          <li className="pr-[10px] md:pr-[24px] border-r border-[#f7f8fa33]">
            Privacy Policy
          </li>
          <li>Terms &#38; Conditions</li>
        </ul>
      </div>
    </footer>
  );
};
