import { ILoginInput, IRegisterInput } from "../interface/index";

export const REGISTER_FORM: IRegisterInput[] = [
  {
    name: "username",
    placeholder: "الاسم الخاص بك ..",
    type: "text",
    forl: "name",
    placel: "الاسم ثلاثي",
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    name: "email",
    placeholder: "الايميل الخاص بك ..",
    type: "email",
    forl: "email",
    placel: "البريد الإلكتروني",
    validation: {
      required: true,
      pattern: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
    },
  },
  {
    name: "password",
    placeholder: "كلمة السر ..",
    type: "password",
    forl: "password",
    placel: "كلمة المرور",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];

export const LOGIN_FORM: ILoginInput[] = [
  {
    name: "identifier",
    placeholder: "الايميل الخاص بك ..",
    type: "email",
    forl: "email",
    placel: "البريد الإلكتروني",
    validation: {
      required: true,
      pattern: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
    },
  },
  {
    name: "password",
    placeholder: "كلمة السر ..",
    type: "password",
    forl: "password",
    placel: "كلمة المرور",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];
