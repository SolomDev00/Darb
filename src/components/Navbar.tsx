import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/logo_dark.png";
import NavHeader from "./NavHeader";
import Input from "./schema/Input";
import Select from "./schema/selected/Select";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "./schema/Button";
import SelectCate from "./schema/selected/SelectCate";
import { useSelector } from "react-redux";
import { tokenSelector } from "../app/token/token";
import Cookies from "universal-cookie";
import {
  ArrowLeftEndOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  // ** Nav
  const nav = useNavigate();

  // ** Cookies
  const cookie = new Cookies();

  // ** UserLogged
  const userLogged = cookie.get("userLogged");

  // ** Get User
  const { token } = useSelector(tokenSelector);
  console.log(token);

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
          <div className="flex flex-row items-start gap-6 md:px-4">
            <NavLink to={"/profile"}>
              <h2 className="flex flex-row items-center justify-between gap-2 text-indigo-800">
                <UserCircleIcon width={"30px"} /> {token?.user.username}
              </h2>
            </NavLink>
            <div className="cursor-pointer">
              <ArrowLeftEndOnRectangleIcon
                width={"30px"}
                className="text-red-600"
                onClick={() => {
                  cookie.remove("userLogged");
                  setTimeout(() => {
                    nav("/login");
                  }, 300);
                }}
              />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
