import * as yup from "yup";

export const registerSchema = yup
  .object({
    username: yup
      .string()
      .required("يرجي ادخال إسمك الثلاثي ..")
      .min(6, "يجب ان يكون الاسم الخاص بك اكثر من 5 أحرف!"),
    email: yup
      .string()
      .required("يرجي ادخال البريد الالكتروني ..")
      .matches(/^[^@]+@[^@]+\.[^@ .]{2,}$/, "البريد الإلكتروني غير صالح!"),
    password: yup
      .string()
      .required("يرجي ادخال كلمة المرور ..")
      .min(6, "يجب ان تكون كلمة المرور الخاص بك اكثر من 5 أحرف!"),
  })
  .required();

export const loginSchema = yup
  .object({
    identifier: yup
      .string()
      .required("يرجي ادخال البريد الالكتروني ..")
      .matches(/^[^@]+@[^@]+\.[^@ .]{2,}$/, "البريد الإلكتروني غير صالح!"),
    password: yup
      .string()
      .required("يرجي ادخال كلمة المرور ..")
      .min(6, "يجب ان تكون كلمة المرور الخاص بك اكثر من 5 أحرف!"),
  })
  .required();

export const todoSchema = yup
  .object({
    title: yup.string().required("Title is required!"),
    description: yup.string().required("Description is required!"),
  })
  .required();
