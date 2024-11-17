import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  StoreList,
  ReviewList,
  RunningLine,
  StockList,
  Loader,
} from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  getNearStores,
  selectIsLoadingReviews,
  selectIsLoadingStores,
} from "../redux";

import {
  pharmacy_mobile_1x,
  pharmacy_mobile_2x,
  pharmacy_tablet_1x,
  pharmacy_tablet_2x,
} from "../assets";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const isLoadingStores = useAppSelector(selectIsLoadingStores);
  const isLoadingReviews = useAppSelector(selectIsLoadingReviews);

  useEffect(() => {
    dispatch(getNearStores());
  }, [dispatch]);

  return (
    <>
      {(isLoadingStores || isLoadingReviews) && <Loader />}
      <section className="bg-[#59B17A] pt-[172px] pb-[246px] md:pt-[161px] md:pb-[258px] lg:pt-[47px] lg:pb-[146px]">
        <div className="container">
          <div className="pt-[19px] md:pt-[140px] md:pl-[31px] md:pr-[83px] bg-img h-[312px] w-[331px] sm-max:w-[280px] md:h-[508px] md:w-auto lg:w-[749px] mx-auto">
            <h1 className="w-[293px] md:w-[609px] font-semibold text-[50px] md:text-[74px] leading-[1] text-white mb-[20px] md:mb-[24px]">
              Your medication delivered
            </h1>
            <p className="w-[156px] md:w-[207px] font-normal text-[12px] md:text-[16px] leading-[1.25] text-white ml-auto">
              Say goodbye to all your healthcare worries with us
            </p>
          </div>
        </div>
      </section>
      <StockList />

      <section className="pb-[80px] md:pb-[120px]">
        <div className="container lg:px-[96px]">
          <h2 className="w-[291px] md:w-full mx-auto font-semibold text-[28px] md:text-[40px] leading-[1.14] md:leading-[1.2] text-[#1d1e21] text-center mb-[14px]">
            Your Nearest Medicine Store
          </h2>
          <p className="font-normal text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.25] text-[#93939a] text-center mb-10 md:mb-[64px]">
            Search for Medicine, Filter by your location
          </p>
          <StoreList />
        </div>
      </section>

      <section className="pb-[40px] md:pb-[64px]">
        <div className="container lg:px-[96px]">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-[83px] lg:gap-[19px] rounded-[32px] bg-[#59B17A] pt-10 pb-5 px-5 md:pb-10 md:pt-[104px] md:px-[48px] lg:py-10 lg:pl-20 lg:pr-10">
            <div className="lg:py-[64px]">
              <h2 className="lg:w-[501px] font-semibold text-[28px] md:text-[48px] leading-[1.14] tracking-[-0.01em] text-[#f1f1f1] mb-5 md:mb-[24px]">
                Add the medicines you need online now
              </h2>
              <p className="w-[270px] sm-max:w-[230px] md:w-[450px] font-normal text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.25] text-[#f1f1f1] mb-10">
                Enjoy the convenience of having your prescriptions filled from
                home by connecting with your community pharmacy through our
                online platform.
              </p>
              <Link
                to="medicine-store"
                className="button border btn-home rounded-[60px] py-[13px] px-[32px] md:px-[50px] md:h-[44px]"
              >
                Buy medicine
              </Link>
            </div>
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={`${pharmacy_tablet_1x} 1x, ${pharmacy_tablet_2x} 2x`}
                width="608"
                type="image/webp"
              />
              <img
                srcSet={`${pharmacy_mobile_1x} 1x, ${pharmacy_mobile_2x} 2x`}
                src={pharmacy_mobile_1x}
                alt="Woman looking for tablets in her phone"
                width="295"
                height="335"
                loading="lazy"
                className="sm-max:w-[280px] md:h-[406px]"
              />
            </picture>
          </div>
        </div>
      </section>

      <RunningLine />
      <ReviewList />
    </>
  );
};

export default HomePage;
