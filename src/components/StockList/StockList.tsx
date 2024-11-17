import { useNavigate } from "react-router-dom";

export const StockList = () => {
  const navigate = useNavigate();

  const handleClick = (value: string) => {
    navigate(`/medicine/?stock=${value}`);
  };
  return (
    <section className="pt-10 md:pt-[64px] pb-[80px] md:pb-[120px]">
      <div className="container">
        <ul className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:justify-center gap-[16px] md:gap-[28px]">
          <li onClick={() => handleClick("70")} className="li-home">
            <p className="flex gap-[14px] items-center mb-[14px]">
              <span className="span-home">1</span>Huge Sale
            </p>
            <p className="font-medium text-[24px] md:text-[36px] leading-[1.4] text-[#252539]">
              70%
              <button className="link-stock">Shop now</button>
            </p>
          </li>
          <li className="li-home">
            <p className="flex gap-[14px] items-center mb-[14px]">
              <span className="span-home">2</span>Secure delivery
            </p>

            <p className="font-medium text-[24px] md:text-[36px] leading-[1.4] text-[#252539]">
              100%
              <button type="button" className="link-stock">
                Read more
              </button>
            </p>
          </li>
          <li onClick={() => handleClick("35")} className="li-home">
            <p className="flex gap-[14px] items-center mb-[14px]">
              <span className="span-home">3</span>Off
            </p>
            <p className="font-medium text-[24px] md:text-[36px] leading-[1.4] text-[#252539]">
              35%
              <button type="button" className=" link-stock">
                Shop now
              </button>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
