import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/logo_dark.png";
import NavHeader from "./NavHeader";
import Input from "./schema/Input";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import Select from "./schema/Select";
import { Link } from "react-router-dom";
import Button from "./schema/Button";
const Navbar = () => {
  return (
    <>
      <NavHeader />
      <nav className="w-full bg-white flex flex-row p-6 items-center">
        <div>
          <img className="w-60" src={Logo} alt="Darb Logo" />
        </div>
        <div className="h-10 border-r-2 px-6">
          <div className="flex flex-row items-center gap-2">
            <ListBulletIcon className="w-8 h-8 cursor-pointer" />
            <h3 className="text-[#3E1F7A] text-lg cursor-pointer">الفئة</h3>
            <div className="flex flex-row items-center gap-2 px-3">
              <Input placeholder="بحث ..." />
              <MagnifyingGlassIcon className="w-8 h-8 cursor-pointer text-[#3E1F7A]" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 text-[#3E1F7A] border-l-2 pl-6">
          <Select />
          <Link to={"/contact"}>تواصل معنا</Link>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Button>تسجيل الدخول</Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
