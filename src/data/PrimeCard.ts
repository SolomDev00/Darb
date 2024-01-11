import { v4 as uuidv4 } from "uuid";
import { IPrimeData } from "../interface";

export const PrimeCardData: IPrimeData[] = [
  {
    id: uuidv4(),
    title: "المعرفة",
    icon: new URL("../assets/home/stars.png", import.meta.url).toString(),
    description: `"تعتبر المنصة المدرسية أداة قوية تجسد التطور التكنولوجي في مجال التعليم، وتُسهم في تقديم تجارب تعليمية غنية ومتنوعة للطلاب.`,
  },
  {
    id: uuidv4(),
    title: "الدراسة",
    icon: new URL("../assets/home/light.png", import.meta.url).toString(),
    description: `بفضل المنصة المدرسية، يمكن للمعلمين والطلاب الاستفادة من محتوى تعليمي مُتميز ومُحدّث، مما يُسهم في تحقيق أقصى قدر من الفهم والاستيعاب`,
  },
  {
    id: uuidv4(),
    title: "القوة",
    icon: new URL("../assets/home/books.png", import.meta.url).toString(),
    description: `"قوة المنصة المدرسية تكمن في قدرتها على توفير بيئة تعليمية فعّالة ومُحفّزة تُسهم في تحقيق النجاح الأكاديمي."`,
  },
];
