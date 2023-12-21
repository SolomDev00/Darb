import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className="w-full border-[transparent] border-gray-300 shadow-md focus:outline-none focus:ring-1 focus:ring-[#3E1F7A] rounded-md px-3 py-3 text-md"
      {...rest}
    />
  );
};

export default Input;
