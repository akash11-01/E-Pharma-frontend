import { ProgressBar } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center fixed bg-[#59b17b69] backdrop-blur-sm w-full h-full left-0 top-0 z-50">
      <ProgressBar
        visible={true}
        height="100"
        width="140"
        borderColor="#F7F8FA"
        barColor="#59B17A"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
