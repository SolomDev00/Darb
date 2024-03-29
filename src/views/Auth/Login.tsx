import { useState } from "react";
import Button from "../../components/schema/Button";
import Input from "../../components/schema/Input";
import { LOGIN_FORM } from "../../data";
import { yupResolver } from "@hookform/resolvers/yup";
import InputErrorMessage from "../../components/InputErrorMessage";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema } from "../../validation";
import axiosInstance from "../../config/axios.config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IErrorResponse } from "../../interface";
import Cookies from "universal-cookie";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/store";
import { setToken } from "../../app/token/token";

interface IFormInput {
  identifier: string;
  password: string;
}

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  // ** Nav
  const nav = useNavigate();

  // ** Cookies
  const cookie = new Cookies();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema),
  });

  // ** Handlers
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    try {
      const { status, data: resData } = await axiosInstance.post(
        "/auth/local",
        data
      );
      console.log(resData);
      if (status === 200) {
        toast.success("Login is done, you will navigate after 2 seconds!", {
          position: "bottom-center",
          duration: 4000,
        });
        dispatch(setToken(resData));
        cookie.set("userLogged", resData);
        setTimeout(() => {
          nav("/");
        }, 2000);
      }
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>;
      const message = errorObj.response?.data.error.message;
      toast.error(`${message}`, {
        position: "bottom-center",
        duration: 1500,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ** Renders
  const renderLoginForm = LOGIN_FORM.map(
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
        سجل الدخول الي المنصة الان!
      </h2>
      <form
        className="w-[800px] space-y-3 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {renderLoginForm}
        <div className="flex flex-row gap-2 cursor-pointer">
          <input id="verify" type="checkbox" required />
          <label htmlFor="verify" className="text-sm text-[#442288]">
            بضغط علي زر الموافقة انت الآن تتبع الاحكام و الخصوصية الخاصة بـ منصة
            دَرب ..
          </label>
        </div>
        <Button fullWidth isLoading={isLoading}>
          تسجيل الدخول
        </Button>
        <div className="flex flex-col space-y-2">
          <NavLink to={"/resetpassword"} className="text-[#442288]">
            هل نسيت كلمة المرور ؟
          </NavLink>
          <NavLink to={"/register"} className="text-[#442288]">
            لا تمتلك حساب علي المنصة ؟{" "}
            <span className="underline">سجل من هنا</span>
          </NavLink>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
