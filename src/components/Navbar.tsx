import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/logo_dark.png";
import NavHeader from "./NavHeader";
import Input from "./schema/Input";
import Select from "./schema/selected/Select";
import { Link, useNavigate } from "react-router-dom";
import Button from "./schema/Button";
import SelectCate from "./schema/selected/SelectCate";

const Navbar = () => {
  // ** Nav
  const nav = useNavigate();

  // ** True
  const userLogged = true;

  return (
    <>
      <NavHeader />
      <nav className="w-full bg-white flex flex-row p-6 items-center justify-between shadow-md duration-300 text-base">
        <div className="cursor-pointer">
          <img
            className="w-60"
            src={Logo}
            alt="Darb Logo"
            onClick={() => nav("/")}
          />
        </div>
        <div className="h-10 md:border-r-2 px-4">
          <div className="hidden md:hidden lg:flex flex-row items-center gap-2">
            <SelectCate />
            <div className="flex flex-row items-center bg-white shadow-lg gap-2 pr-3 pl-1 rounded-lg">
              <Input
                className="w-full border-none px-3 py-3 text-md focus:outline-none"
                placeholder="بحث ..."
              />
              <MagnifyingGlassIcon className="w-8 h-8 cursor-pointer text-[#3E1F7A]" />
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-row items-center gap-2 text-[#3E1F7A] border-l-2 pl-4">
          <Select />
          <Link to={"/contact"}>تواصل معنا</Link>
        </div>
        {!userLogged ? (
          <div className="flex flex-row items-center gap-2 md:px-4">
            <Button
              className="text-sm"
              variant={"noneborder"}
              onClick={() => nav("/login")}
            >
              تسجيل الدخول
            </Button>
            <Button className="text-sm" onClick={() => nav("/register")}>
              إنشاء حساب جديد
            </Button>
          </div>
        ) : (
          <div>
            <h2>Welcome, Eslam Wael</h2>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
