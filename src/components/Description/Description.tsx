import { useAppSelector } from "../../hooks";
import { selectOneProduct } from "../../redux";

const Description = () => {
  const product = useAppSelector(selectOneProduct);
  const description = product?.description;

  if (!description)
    return (
      <p className="font-semibold text-[16px] md:text-[20px] leading-[1.4] text-[#1d1e21]">
        No description available.
      </p>
    );

  return (
    <ul className="flex flex-col gap-5">
      <li className="">
        <p className="text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.5] text-[#6a6a6f]">
          {description.text}
        </p>
      </li>
      <li>
        <p className="text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.5] text-[#6a6a6f]">
          Antioxidant Properties:{" "}
          <span className="text-[#1d1e21]">
            {description.antioxidantProperties}
          </span>
        </p>
      </li>
      <li>
        <p className="text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.5] text-[#6a6a6f]">
          Anti-Diabetic Effects:{" "}
          <span className="text-[#1d1e21]">
            {description.antiDiabeticEffects}
          </span>
        </p>
      </li>
      <li>
        <p className="text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.5] text-[#6a6a6f]">
          Anti-Cancer Properties:{" "}
          <span className="text-[#1d1e21]">
            {description.antiCancerProperties}
          </span>
        </p>
      </li>
      <li>
        <p className="text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.5] text-[#6a6a6f]">
          Immune Support:{" "}
          <span className="text-[#1d1e21]">{description.immuneSupport}</span>
        </p>
      </li>

      <li>
        <p className="text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.5] text-[#6a6a6f]">
          Digestive Aid:{" "}
          <span className="text-[#1d1e21]">{description.digestiveAid}</span>
        </p>
      </li>
    </ul>
  );
};

export default Description;
