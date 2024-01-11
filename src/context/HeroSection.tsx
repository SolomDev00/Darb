import {
  BellAlertIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { TypeAnimation } from "react-type-animation";
import Button from "../components/schema/Button";
import Input from "../components/schema/Input";
import Waves from "../assets/SVG/Waves";
import Img1 from "../assets/home/banner_1.jpg";
import Img2 from "../assets/home/banner_2.jpg";
import Img3 from "../assets/home/banner_3.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  // ** Nav
  const nav = useNavigate();

  return (
    <section className="container flex flex-col lg:flex-row items-center justify-between pt-20">
      <div className="sm:mb-20 ml-[100px]">
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
              <br className="hidden md:block" /> المعلمين
            </span>
          </h2>
          <p className="text-base text-gray-600 mb-12">
            اتعلم بطريقة سهلة و نظم مواعيدك مع منصة دَرب
          </p>
        </div>
        <div className="buttons">
          <Button
            className="mb-6"
            variant={"outline"}
            onClick={() => nav("/register")}
          >
            إنشاء حساب جديد
          </Button>
          <div className="flex flex-row items-center bg-white shadow-lg p-3 rounded-lg">
            <MagnifyingGlassIcon className="w-8 h-8 ml-2 cursor-pointer text-[#3E1F7A]" />
            <Input
              className="w-full border-none px-3 py-3 text-md focus:outline-none"
              placeholder="ابحث بإسم المرحلة او المادة"
            />
          </div>
        </div>
      </div>
      <div className="relative sm:mb-5 sm:ml-10 md:ml-10 ml-0">
        <img
          className="img-1 rounded-md shadow-md cursor-pointer sm:w-[200px]"
          src={Img2}
          alt="Student"
        />
        <img
          className="img-2 rounded-md shadow-md cursor-pointer"
          src={Img1}
          alt="Student"
        />
        <img
          className="img-3 rounded-md shadow-md cursor-pointer sm:w-[200px]"
          src={Img3}
          alt="Student"
        />
        <div className="notes bg-white shadow-md rounded-md p-3">
          <div className="w-12 h-12 flex justify-center rounded-full bg-yellow-500 cursor-pointer">
            <BellAlertIcon className="w-8 text-white" />
          </div>
          <TypeAnimation
            sequence={[
              "لابد أن يتعلم الأطفال كيف يفكرون، وليس بماذا يفكرون",
              1000,
              "التعليم هو اقوي سلاح يمكنك استعماله لتغيير العالم",
              1000,
              "التعليم هو السلطة التي تحول الأحلام إلى واقع وتغير مجرى الحياة",
              1000,
              "التعليم هو جواز السفر للمستقبل ، فإن الغد ينتمى لأولئك الذين يعدون له اليوم",
              1000,
              "المعرفة قوة ، المعلومات تحرير ، التعليم بداية التقدم ، في كل مجتمع ، وفي كل عائلة",
              1000,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>
      <Waves />
    </section>
  );
};

export default HeroSection;
