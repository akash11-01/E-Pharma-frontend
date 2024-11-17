import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

import {
  Filter,
  Icon,
  Loader,
  MedicineList,
  Pagination,
  Sort,
} from "../components";
import { useAppDispatch, useAppSelector, useLimit } from "../hooks";
import {
  getProducts,
  selectIsLoadingProducts,
  selectPage,
  selectProducts,
  setPage,
} from "../redux";

const MedicinePage = () => {
  const page = useAppSelector(selectPage);
  const isLoading = useAppSelector(selectIsLoadingProducts);
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  const [sortLabel, setSortLabel] = useState<string>("Product category");
  const [filter, setFilter] = useState<string>("");
  const LIMIT = useLimit();
  const navigate = useNavigate();
  const category =
    sortLabel === "Product category" || sortLabel === "Show all"
      ? ""
      : sortLabel;

  const debouncedDispatch = useRef(
    debounce((params) => {
      dispatch(getProducts(params));
    }, 400)
  ).current;

  useEffect(() => {
    dispatch(setPage(1));
  }, [dispatch, filter]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const stock = queryParams.get("stock") || "";
    const params = {
      page,
      limit: LIMIT,
      ...(filter && { name: filter }),
      ...(category && { category }),
      ...(stock && { stock }),
    };
    debouncedDispatch(params);
  }, [page, filter, category, dispatch, debouncedDispatch, LIMIT]);

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilter(value);
  };

  const handleSortChange = (value: string) => {
    setSortLabel(value);
    dispatch(setPage(1));
  };
  const handleResetClick = () => {
    setSortLabel("Product category");
    setFilter("");
    dispatch(setPage(1));
    navigate("/medicine");
  };

  return (
    <>
      <div className="container pt-[39px] md:pt-[55px] lg:pt-[75px] pb-[80px] md:pb-[120px]">
        <h2 className="title">Medicine</h2>
        <div className="flex flex-col md:flex-row gap-[12px] md:gap-[8px] mb-[12px] md:mb-[32px] lg:mb-[40px]">
          <div className="flex flex-col md:flex-row gap-[12px] md:gap-[14px]">
            <Sort sortLabel={sortLabel} onSortChange={handleSortChange} />
            <Filter onChange={handleChangeFilter} filter={filter} />
          </div>

          <button
            onClick={handleResetClick}
            type="button"
            className="flex items-center justify-center gap-[8px] md:w-[116px] px-[30px] py-[13px] rounded-[60px] bg-[#59b17a] hover:bg-[#3f945f] focus:bg-[#3f945f] font-medium text-[14px] text-white leading-[1.29] hover:shadow-lg focus:shadow-lg transition duration-300"
          >
            <Icon id="reset" size={14} className="fill-white stroke-none" />
            Reset
          </button>
        </div>

        {products.length > 0 ? (
          <>
            <MedicineList />
            {products.length >= LIMIT ? <Pagination /> : null}
          </>
        ) : (
          <h3 className="font-semibold text-center text-[24px] md:text-[26px] leading-[1.14] text-[#59b17a] mt-[25px] md:mt-[80px] lg:mt-[100px]">
            Nothing was found for your request.
          </h3>
        )}
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default MedicinePage;
