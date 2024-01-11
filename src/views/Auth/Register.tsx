import InputErrorMessage from "../../components/InputErrorMessage";
import Button from "../../components/schema/Button";
import Input from "../../components/schema/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { REGISTER_FORM } from "../../data";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validation";
import axiosInstance from "../../config/axios.config";
import toast from "react-hot-toast";
import { useState } from "react";
import { AxiosError } from "axios";
import { IErrorResponse } from "../../interface";
import { NavLink, useNavigate } from "react-router-dom";

interface IFormInput {
  username: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(registerSchema),
  });

  // Handlers
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    try {
      const { status } = await axiosInstance.post("/auth/local/register", data);
      if (status === 200) {
        toast.success("Register is done, you will navigate after 2 seconds!", {
          position: "bottom-center",
          duration: 4000,
        });
        setTimeout(() => {
          nav("/login");
        }, 1500);
      }
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>;
      const message = errorObj.response?.data.error.message;
      toast.error(`${message}`, {
        position: "bottom-center",
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ** Renders
  const renderRegisterForm = REGISTER_FORM.map(
    ({ name, placeholder, type, forl, placel, validation }, idx) => (
      <div key={idx}>
        <div className="space-y-2 pb-1">
          <label htmlFor={forl} className="text-[#3E1F7A] text-xl">
            {placel}
          </label>
          <Input
            id={forl}
            type={type}
            placeholder={placeholder}
            {...register(name, validation)}
          />
        </div>
        {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
      </div>
    )
  );

  return (
    <section className="w-[800px] mt-24 mx-auto">
      <h2 className="text-[#3E1F7A] text-2xl pb-6">
        سجل الدخول بحساب جديد الي المنصة!
      </h2>
      <form
        className="w-[800px] space-y-3 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {renderRegisterForm}
        <div className="flex flex-row gap-2 cursor-pointer">
          <input id="verify" type="checkbox" required />
          <label htmlFor="verify" className="text-sm text-[#442288]">
            بضغط علي زر الموافقة انت الآن تتبع الاحكام و الخصوصية الخاصة بـ منصة
            دَرب ..
          </label>
        </div>
        <Button fullWidth isLoading={isLoading}>
          سجُل بحساب جديد
        </Button>
        <div className="flex flex-col space-y-2">
          <NavLink to={"/login"} className="text-[#442288]">
            هل لديك حساب علي المنصة ؟{" "}
            <span className="underline">تسجيل الدخول</span>
          </NavLink>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
