import {
  ChartPieIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckBadgeIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

const FeaturesSection = () => {
  return (
    <div className="bg-[#3E1F7A] flex flex-row justify-between items-center gap-7 px-9 pt-6 pb-6 selection:bg-[#3E1F7A]">
      <div className="flex flex-row justify-between gap-2 text-red-100">
        <p className="text-base font-normal">طرق بسيطة تناسب جميع الاعمار</p>
        <UserPlusIcon width={"64px"} />
      </div>
      <div className="flex flex-row justify-between gap-2 text-red-100">
        <p className="text-base font-normal">
          اختبارات حديثة و متنوعه و التصحيح الكتروني
        </p>
        <CheckBadgeIcon width={"64px"} />
      </div>
      <div className="flex flex-row justify-between gap-2 text-red-100">
        <p className="text-base font-normal">
          إدارة و تنظيم الوقت و المجوعات الدراسية
        </p>
        <ChartPieIcon width={"64px"} />
      </div>
      <div className="flex flex-row justify-between gap-2 text-red-100">
        <p className="text-base font-normal">تواصل مباشر بين المعلم و الطالب</p>
        <ChatBubbleBottomCenterTextIcon width={"64px"} />
      </div>
    </div>
  );
};

export default FeaturesSection;
