import Button from "../components/schema/Button";
import class4 from "../assets/home/4t.jpg";

const LeaderBoardSection = () => {
  return (
    <section className="container pb-16">
      {/* Top Video of Platform */}
      <div className="flex flex-row justify-between gap-8">
        <iframe
          width="920"
          height="340"
          src="https://www.youtube.com/embed/fgsvzn76gVk"
          title="منصة الدرس - فتح باب الاشتراك للصف الرابع والخامس الابتدائي لعام 2022 - 2023"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <iframe
          width="920"
          height="340"
          src="https://www.youtube.com/embed/fgsvzn76gVk"
          title="منصة الدرس - فتح باب الاشتراك للصف الرابع والخامس الابتدائي لعام 2022 - 2023"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {/* Offer for Just */}
      <div className="flex flex-row justify-between gap-2 pt-10">
        <div className="w-[420px] flex flex-col items-start justify-start bg-slate-200 pt-5  rounded-t-[20px] rounded-b-[40px]">
          <div className="px-6">
            <h2 className="text-indigo-700 text-xl pb-2">الصف الأول الثانوي</h2>
            <h4 className="text-indigo-800 text-lg pb-3">
              دروس مباشرة و تفاعلية + اختبارات و متابعة
            </h4>
            <hr className="bg-black w-[150px] h-[4px] mb-4" />
            <ul className="text-gray-700 list-disc pb-6 px-4">
              <li>
                الاشتراك في جميع مواد الصف الأول الثانوي للفيديوهات المسجلة
                والمشروحة
              </li>
              <li>
                الاختبارات الالكترونية ومتابعة مستمرة من المنصة وتسهيل التقارير
                على ولي الامر لمتابعة مستوى الطالب
              </li>
              <li>
                هدية ٨ دروس مجانية مباشرة لإختيار المدرسين للحصص المباشرة مع
                المدرسين
              </li>
            </ul>
            <div className="space-y-2 pb-8">
              <Button size={"sm"}>مواد الأول الثانوي عام</Button>
              <Button size={"sm"}>مواد الأول الثانوي أزهر</Button>
            </div>
          </div>
          <img className="w-full rounded-b-md" src={class4} alt="offer" />
        </div>
        <div className="w-[420px] flex flex-col items-start justify-start bg-slate-200 pt-5 rounded-t-[20px] rounded-b-[40px]">
          <div className="px-6">
            <h2 className="text-indigo-700 text-xl pb-2">
              الصف الثاني الثانوي
            </h2>
            <h4 className="text-indigo-800 text-lg pb-3">
              دروس مباشرة و تفاعلية + اختبارات و متابعة
            </h4>
            <hr className="bg-black w-[150px] h-[4px] mb-4" />
            <ul className="text-gray-700 list-disc pb-6 px-4">
              <li>
                الاشتراك في جميع مواد الصف الثاني الثانوي للفيديوهات المسجلة
                والمشروحة
              </li>
              <li>
                الاختبارات الالكترونية ومتابعة مستمرة من المنصة وتسهيل التقارير
                على ولي الامر لمتابعة مستوى الطالب
              </li>
              <li>
                هدية ٨ دروس مجانية مباشرة لإختيار المدرسين للحصص المباشرة مع
                المدرسين
              </li>
            </ul>
            <div className="space-y-2 pb-8">
              <Button size={"sm"}>مواد الثاني الثانوي عام</Button>
              <Button size={"sm"}>مواد الثاني الثانوي أزهر</Button>
            </div>
          </div>
          <img className="w-full rounded-b-md" src={class4} alt="offer" />
        </div>
        <div className="w-[420px] flex flex-col items-start justify-start bg-slate-200 pt-5 rounded-t-[20px] rounded-b-[40px]">
          <div className="px-6">
            <h2 className="text-indigo-700 text-xl pb-2">
              الصف الثالث الثانوي
            </h2>
            <h4 className="text-indigo-800 text-lg pb-3">
              دروس مباشرة و تفاعلية + اختبارات و متابعة
            </h4>
            <hr className="bg-black w-[150px] h-[4px] mb-4" />
            <ul className="text-gray-700 list-disc pb-6 px-4">
              <li>
                الاشتراك في جميع مواد الصف الثالث الثانوي للفيديوهات المسجلة
                والمشروحة
              </li>
              <li>
                الاختبارات الالكترونية ومتابعة مستمرة من المنصة وتسهيل التقارير
                على ولي الامر لمتابعة مستوى الطالب
              </li>
              <li>
                هدية ٨ دروس مجانية مباشرة لإختيار المدرسين للحصص المباشرة مع
                المدرسين
              </li>
            </ul>
            <div className="space-y-2 pb-8">
              <Button size={"sm"}>مواد الثالث الثانوي عام</Button>
              <Button size={"sm"}>مواد الثالث الثانوي أزهر</Button>
            </div>
          </div>
          <img className="w-full rounded-b-md" src={class4} alt="offer" />
        </div>
      </div>
    </section>
  );
};

export default LeaderBoardSection;
