import { useEffect } from "react";
import { toast } from "react-toastify";

import { Icon } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getReviews, selectReviews } from "../../redux";

export const ReviewList = () => {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(selectReviews);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        await dispatch(getReviews()).unwrap();
      } catch (error) {
        toast.error(error as string);
      }
    };
    fetchReviews();
  }, [dispatch]);

  return (
    <section className="pb-[80px] md:pb-[120px]">
      <div className="container lg:px-[119px]">
        <h2 className="font-semibold text-[28px] md:text-[40px] leading-[1.14] md:leading-[1.2] text-[#1d1e21] text-center mb-[14px]">
          Reviews
        </h2>
        <p className="font-normal max-w-full text-[14px] md:text-[16px] leading-[1.25] text-[#93939a] text-center mb-[24px]">
          Search for Medicine, Filter by your location
        </p>
        <ul className="relative carousel carousel-center flex gap-[16px] lg:gap-[28px] pt-10 md:pt-[64px]">
          {reviews.map((review, index) => (
            <li
              key={index}
              className="relative carousel-item box-border flex flex-col px-[16px] lg:px-[28px] pb-[32px] lg:pb-10 w-[320px] sm-max:w-[265px] md:w-[337px] lg:w-[382px] h-[232px] rounded-[27px] border border-[#f1f1f1] bg-[#fdfdfd] pt-[54px] mb:pt-[24px]"
            >
              <img
                className="absolute w-16 h-16 -top-6 left-1/2 transform -translate-x-1/2 rounded-[50%] bg-white shadow-scroll"
                src={review.photo}
                alt={review.name}
                loading="lazy"
              />
              <h3 className="font-semibold text-[20px] leading-[1.5] text-[#1d1e21] text-center mb-[16px]">
                {review.name}
              </h3>
              <p className="font-normal text-[16px] leading-[1.25] text-[#93939a] text-center">
                {review.testimonial}
              </p>
              {index < reviews.length - 1 && (
                <Icon
                  id="chevron-down"
                  size={22}
                  className="absolute lg:hidden top-1/2 -right-5 transform -translate-y-1/2  stroke-[#1d1e21] fill-none -rotate-90"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
