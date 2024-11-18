import { Link } from "react-router-dom";
import { Icon, TitleAuth } from "../components";
import { useState } from "react";
import { instance } from "../services";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await instance.post("/users/forgot-password", { email });
    } catch (error) {
      console.log(error);
    }
    setIsSubmitted(true);
  };
  return (
    <div className="relative overflow-hidden container lg:px-[100px] pt-[81px] md:pt-[143px] lg:pt-[201px] pb-[191px]">
      <div className="lg:flex lg:gap-[54px]">
        <TitleAuth />
        {/* <AuthForm /> */}
        {isSubmitted ? (
          <p className="className='text-gray-300 mb-6'">
            If an account exists for <span className="font-bold">{email}</span>,
            you will receive a password reset link shortly.
          </p>
        ) : (
          <div>
            <div className=" w-[300px] h-[44px] mb-[20px] bg-white border border-[#1d1e2119] rounded-[60px] px-[18px] py-[13px] font-normal text-[12px] leading-[1.5] text-[#1d1e21] placeholder:text-[#1d1e2166] hover:shadow-lg focus:shadow-lg hover:border-[#59B17A] focus:border-[#59B17A] transition duration-300">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="relative w-full h-[44px] border-none bg-[#59b17a] rounded-[60px] py-[13px] lg:py-[16px] font-medium text-white text-center text-[14px] leading-[1.1] hover:bg-[#3f945f] focus:bg-[#3f945f] transition duration-300"
            >
              <p>Send Reset Link</p>
            </button>
            <Link to={"/login"}>
              <p className="mt-[10px] text-center hover:text-green-400">
                Back to login page
              </p>
            </Link>
          </div>
        )}
      </div>
      <Icon
        id="bg"
        className="absolute size-[320px] md:size-[440px] lg:size-[500px] bottom-[-130px] md:bottom-[-170px] lg:bottom-[-170px] right-[-125px] md:right-[-165px] lg:right-[-220px] stroke-none fill-[#59b17a14]"
      />
    </div>
  );
};

export default ForgotPasswordPage;
