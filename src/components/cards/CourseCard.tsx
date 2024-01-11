import {
  BanknotesIcon,
  BookOpenIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import class4 from "../../assets/home/4t.jpg";
import Button from "../schema/Button";

interface IProp {
  title: string;
  teacher: string;
  offer?: number;
  price: number;
}

const CourseCard = ({ title, teacher, price }: IProp) => {
  return (
    <div className="w-[310px] bg-slate-200 rounded-md rounded-t-[20px]">
      <img className="rounded-t-[20px]" src={class4} alt="course" />
      <div className="p-2">
        <h2 className="text-indigo-700  text-lg pb-1 flex flex-row gap-2">
          <BookOpenIcon width={"28px"} /> {title}
        </h2>
        <h3 className="text-indigo-800 text-base pb-2 flex flex-row gap-2">
          <UserCircleIcon width={"28px"} /> {teacher}
        </h3>
        <div className="pb-4">
          {/* <h5 className="text-gray-700 line-through">{price} $</h5> */}
          <h5 className="text-red-600">
            <span className="font-medium flex flex-row gap-2">
              <BanknotesIcon width={"28px"} /> ${price}
            </span>
          </h5>
        </div>
        <Button size={"sm"} fullWidth>
          احجز الآن!
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
