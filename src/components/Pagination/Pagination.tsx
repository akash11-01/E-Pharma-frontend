import { useEffect } from "react";
import ReactPaginate from "react-paginate";

import { Icon } from "../../components";
import { useAppDispatch, useAppSelector, useLimit } from "../../hooks";
import { selectPage, selectTotalProducts, setPage } from "../../redux";

export const Pagination: React.FC = () => {
  const page = useAppSelector(selectPage) - 1;
  const total = useAppSelector(selectTotalProducts);
  const dispatch = useAppDispatch();
  const LIMIT = useLimit();
  const totalPages = Math.ceil(total / LIMIT);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handlePageClick = (event: { selected: number }) => {
    dispatch(setPage(event.selected + 1));
  };

  const handleFirstPage = () => {
    dispatch(setPage(1));
  };

  const handleLastPage = () => {
    dispatch(setPage(totalPages));
  };

  if (!total) return;

  const pagesDisplayed = LIMIT === 12 ? 3 : 1;

  return (
    <div className="flex gap-[17px] items-center justify-center">
      <button
        className="page-link"
        onClick={handleFirstPage}
        disabled={page === 0}
      >
        <Icon
          id="double-arrow"
          size={26}
          className="sm-max:size-[22px] md:size-[28px] rotate-180 stroke-none fill-current group-hover:fill-white group-focus-visible:fill-white"
        />
      </button>

      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={pagesDisplayed}
        marginPagesDisplayed={0}
        onPageChange={handlePageClick}
        forcePage={page}
        containerClassName={"pagination flex gap-[4px]"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeLinkClassName={"active-pg"}
        previousLabel={
          <button className="page-link" disabled={page === 0}>
            <Icon
              id="chevron-right"
              size={20}
              className="sm-max:size-[18px] md:size-[24px] rotate-180 stroke-none fill-current group-hover:fill-white group-focus-visible:fill-white"
            />
          </button>
        }
        nextLabel={
          <button className="page-link" disabled={page === totalPages - 1}>
            <Icon
              id="chevron-right"
              size={20}
              className="sm-max:size-[18px] md:size-[24px] stroke-none fill-current group-hover:fill-white group-focus-visible:fill-white"
            />
          </button>
        }
        breakLabel={"..."}
      />

      <button
        className="page-link"
        onClick={handleLastPage}
        disabled={page === totalPages - 1}
      >
        <Icon
          id="double-arrow"
          size={26}
          className="sm-max:size-[22px] md:size-[28px] stroke-none fill-current group-hover:fill-white group-focus-visible:fill-white"
        />
      </button>
    </div>
  );
};
