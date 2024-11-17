import { Icon } from "../Icon/Icon";

interface IFilterProps {
  filter: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Filter: React.FC<IFilterProps> = ({ onChange, filter }) => {
  return (
    <div className="relative flex items-center">
      <input
        value={filter}
        name="filter"
        placeholder="Search medicine"
        type="text"
        onChange={onChange}
        className="w-full bg-white rounded-[60px] border border-[#1d1e2119] pl-[18px] pr-[35px] py-[13px] h-[44px] md:w-[214px] font-normal text-[12px] leading-[1.5] text-[#1d1e21] placeholder:text-[#1d1e2166] cursor-pointer hover:border-[#59B17A] focus:border-[#59B17A] transition duration-300"
      />
      <Icon
        id="search"
        className="absolute right-[16px] stroke-[#1D1E21] fill-none"
        size={16}
      />
    </div>
  );
};
