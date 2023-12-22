import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Button from "../components/schema/Button";
import Input from "../components/schema/Input";
import Waves from "../assets/SVG/Waves";

const HomePage = () => {
  return (
    <section className="pt-10">
      <div>
        <div className="textOfHero">
          <h3 className="text-lg text-[#3E1F7A] mb-6">
            التعليم اسهل مع منصة دَرب
          </h3>
          <h2 className="text-4xl text-[#2f1761] mb-4 leading-tight">
            تجربة تعليمية مميزة علي <br />{" "}
            <span className="text-[#3E1F7A] mark">منصة دَرب</span> دروس و
            اختبارات <br /> الكترونية{" "}
            <span className="text-[#3E1F7A]">
              شرح مباشر مع افضل
              <br /> المعلمين
            </span>
          </h2>
          <p className="text-base text-gray-600 mb-14">
            اتعلم بطريقة سهلة و نظم مواعيدك مع منصة دَرب
          </p>
        </div>
        <div className="buttons">
          <Button className="mb-6" variant={"noneborder"}>
            إنشاء حساب جديد
          </Button>
          <div className="flex flex-row items-center">
            <MagnifyingGlassIcon className="w-8 h-8 cursor-pointer text-[#3E1F7A]" />
            <Input />
          </div>
        </div>
      </div>
      <div></div>
      <Waves />
    </section>
  );
};

export default HomePage;
