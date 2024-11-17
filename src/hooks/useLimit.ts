import { useMediaQuery } from "react-responsive";

export const useLimit = () => {
  return useMediaQuery({ query: "(min-width:768px)" }) ? 12 : 9;
};
