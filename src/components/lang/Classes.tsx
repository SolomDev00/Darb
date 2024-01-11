import { Menu } from "@headlessui/react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

const Classes = () => {
  return (
    <>
      <div className="px-1 py-1">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-indigo-600 text-white" : "text-[#3E1F7A]"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm duration-300`}
            >
              {active ? (
                <AcademicCapIcon className="ml-1 h-5 w-5" aria-hidden="true" />
              ) : (
                <AcademicCapIcon className="ml-1 h-5 w-5" aria-hidden="true" />
              )}
              الصف الأول الإعدادي{" "}
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-indigo-600 text-white" : "text-[#3E1F7A]"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm duration-300`}
            >
              {active ? (
                <AcademicCapIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              ) : (
                <AcademicCapIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              )}
              الصف الثاني الإعدادي{" "}
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-indigo-600 text-white" : "text-[#3E1F7A]"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm duration-300`}
            >
              {active ? (
                <AcademicCapIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              ) : (
                <AcademicCapIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              )}
              الصف الثالث الإعدادي{" "}
            </button>
          )}
        </Menu.Item>
      </div>
      <div className="px-1 py-1">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-indigo-600 text-white" : "text-[#3E1F7A]"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm duration-300`}
            >
              {active ? (
                <AcademicCapIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              ) : (
                <AcademicCapIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              )}
              الصف الأول الثانوي{" "}
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-indigo-600 text-white" : "text-[#3E1F7A]"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm duration-300`}
            >
              {active ? (
                <AcademicCapIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              ) : (
                <AcademicCapIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              )}
              الصف الثاني الثانوي{" "}
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-indigo-600 text-white" : "text-[#3E1F7A]"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm duration-300`}
            >
              {active ? (
                <AcademicCapIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              ) : (
                <AcademicCapIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              )}
              الصف الثالث الثانوي{" "}
            </button>
          )}
        </Menu.Item>
      </div>
    </>
  );
};

export default Classes;
