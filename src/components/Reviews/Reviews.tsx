import { ReviewProductItem } from "../../components";
import { useAppSelector } from "../../hooks";
import { selectOneProduct } from "../../redux";

const Reviews = () => {
  const product = useAppSelector(selectOneProduct);
  const reviews = product?.reviews;

  if (!reviews)
    return (
      <p className="font-semibold text-[16px] md:text-[20px] leading-[1.4] text-[#1d1e21]">
        No reviews available.
      </p>
    );

  return (
    <ul className="flex flex-col gap-5">
      {reviews.map((review, index) => (
        <ReviewProductItem key={index} {...review} />
      ))}
    </ul>
  );
};

export default Reviews;
