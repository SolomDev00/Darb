import { NavLink } from "react-router-dom";
import Button from "../../components/schema/Button";
import Input from "../../components/schema/Input";

const ResetPasswordPage = () => {
  return (
    <section className="w-[800px] mt-24 mx-auto">
      <h2 className="text-[#3E1F7A] text-2xl pb-6">هل نسيت كلمة المرور ؟ </h2>
      <form className="w-[800px] space-y-3 mx-auto">
        <div className="space-y-2">
          <Input id="email" placeholder="الايميل الخاص بك .." />
        </div>
        <Button fullWidth>ارسال رمز التحقق</Button>
        <div className="flex flex-col space-y-2">
          <NavLink to={"/login"} className="text-[#442288]">
            هل تذكرت كلمة المرور ؟
          </NavLink>
        </div>
      </form>
    </section>
  );
};

export default ResetPasswordPage;
