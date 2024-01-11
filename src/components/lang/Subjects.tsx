import { Menu } from "@headlessui/react";
import {
  BeakerIcon,
  FingerPrintIcon,
  LanguageIcon,
  RocketLaunchIcon,
  VariableIcon,
} from "@heroicons/react/24/outline";

const Subjects = () => {
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
                <BeakerIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              ) : (
                <BeakerIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              )}
              الكيمياء{" "}
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
                <RocketLaunchIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              ) : (
                <RocketLaunchIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              )}
              الفيزياء{" "}
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
                <FingerPrintIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              ) : (
                <FingerPrintIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              )}
              الاحياء{" "}
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
                <VariableIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              ) : (
                <VariableIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              )}
              الرياضيات{" "}
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
                <LanguageIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              ) : (
                <LanguageIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              )}
              اللغة العربية{" "}
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
                <LanguageIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              ) : (
                <LanguageIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              )}
              اللغة الإنجليزية{" "}
            </button>
          )}
        </Menu.Item>
      </div>
    </>
  );
};

export default Subjects;
