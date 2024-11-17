import { AuthForm, Icon, TitleAuth } from "../components";

const RegisterPage = () => {
  return (
    <div className="relative overflow-hidden container lg:px-[100px] pt-[81px] md:pt-[143px] lg:pt-[201px] pb-[191px]">
      <div className="lg:flex lg:gap-[54px]">
        <TitleAuth />
        <AuthForm registration />
      </div>
      <Icon
        id="bg"
        className="absolute size-[320px] md:size-[440px] lg:size-[500px] bottom-[-130px] md:bottom-[-170px] lg:bottom-[-170px] right-[-125px] md:right-[-165px] lg:right-[-220px] stroke-none fill-[#59b17a14]"
      />
    </div>
  );
};

export default RegisterPage;
