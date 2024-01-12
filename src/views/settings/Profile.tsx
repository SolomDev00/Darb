/* eslint-disable no-constant-condition */
import userOwner from "../../assets/users/solomdev.jpg";
// import { useState } from "react";
// import axiosInstance from "../../config/axios.config";
import { tokenSelector } from "../../app/token/token";
import { useSelector } from "react-redux";
import Input from "../../components/schema/Input";
import Button from "../../components/schema/Button";

// interface IUserData {
//   data: {
//     email: string;
//     username: string;
//     createdAt: string;
//     updatedAt: string;
//     confirmed: boolean;
//     password: string;
//   };
// }

const ProfilePage = () => {
  // ** Get User
  const { token } = useSelector(tokenSelector);
  console.log(token);
  // const [data, setData] = useState<IUserData | null>(null);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   axiosInstance
  //     .get("/users/me", {
  //       headers: {
  //         Authorization: `Bearer ${token.jwt}`,
  //       },
  //     })
  //     .then((data) => setData(data))
  //     .catch((error) => console.error(error));
  // }, [token]);

  return (
    <section className="w-[800px] mt-8 mx-auto">
      <h2 className="text-[#3E1F7A] text-2xl pb-6">بيانات المستخدم : </h2>
      <div className="flex flex-col">
        <div className="flex flex-col gap-y-4 mb-4">
          <img className="w-52 rounded-full" src={userOwner} alt="avatar" />
          <div>
            حالة الحساب:{" "}
            {/* <span style={{ color: data?.data.confirmed ? "green" : "red" }}>
              {data?.data.confirmed ? "مفعل" : "غير مفعل"}
            </span> */}
          </div>
        </div>
        <div className="space-y-2 pb-8">
          <div className="space-y-2 pb-1">
            <label htmlFor="username" className="text-[#3E1F7A] text-xl">
              آسم المستخدم
            </label>
            {/* <Input id="username" placeholder={data?.data.username} /> */}
          </div>
          <div className="space-y-2 pb-1">
            <label htmlFor="email" className="text-[#3E1F7A] text-xl">
              البريد الإلكتروني
            </label>
            {/* <Input id="email" placeholder={data?.data.email} /> */}
          </div>
          <div className="space-y-2 pb-1">
            <label htmlFor="password" className="text-[#3E1F7A] text-xl">
              كلمة المرور
            </label>
            <Input
              id="password"
              // placeholder={data?.data.password}
              value={"*******"}
            />
          </div>
        </div>
        <Button isLoading>حفظ التعديلات</Button>
      </div>
    </section>
  );
};

export default ProfilePage;
