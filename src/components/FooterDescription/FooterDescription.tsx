interface IFooterDescriptionProps {
  className?: string;
}

export const FooterDescription = ({
  className = "",
}: IFooterDescriptionProps) => {
  return (
    <p className={`${className} description`}>
      Get the medicine to help you feel better, get back to your active life,
      and enjoy every moment.
    </p>
  );
};
