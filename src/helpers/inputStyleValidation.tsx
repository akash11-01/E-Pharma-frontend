import { FieldErrors, FormState } from "react-hook-form";

interface IFormData {
  name: string;
  email: string;
  phone: number;
  password: string;
  address: string;
}

export const inputClass = (
  errors: FieldErrors<IFormData>,
  dirtyFields: FormState<IFormData>["dirtyFields"],
  fieldName: keyof IFormData
): string => {
  const baseClass =
    "w-full h-[44px] bg-white border border-[#1d1e2119] rounded-[60px] px-[18px] py-[13px] font-normal text-[12px] leading-[1.5] text-[#1d1e21] placeholder:text-[#1d1e2166] hover:shadow-lg focus:shadow-lg hover:border-[#59B17A] focus:border-[#59B17A] transition duration-300";
  const errorClass =
    "border-red-700 hover:border-red-700 focus:border-red-700 transition duration-300";
  const successClass =
    "border-green-700 hover:border-green-700 focus:border-green-700 transition duration-300";

  if (errors[fieldName]?.message && dirtyFields[fieldName]) {
    return `${baseClass} ${errorClass}`;
  }
  if (!errors[fieldName]?.message && dirtyFields[fieldName]) {
    return `${baseClass} ${successClass}`;
  }
  return baseClass;
};

export const renderMessage = (
  errors: FieldErrors<IFormData>,
  dirtyFields: FormState<IFormData>["dirtyFields"],
  fieldName: keyof IFormData
) => {
  if (errors[fieldName] && dirtyFields[fieldName]) {
    return (
      <p className="text-red-700 text-message">{errors[fieldName]?.message}</p>
    );
  }
  if (!errors[fieldName] && dirtyFields[fieldName]) {
    return (
      <p className="text-green-700 text-message">
        {`${fieldName.charAt(0).toUpperCase()}${fieldName.slice(
          1
        )} is entered correctly`}
      </p>
    );
  }
  return null;
};
