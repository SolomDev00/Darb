import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import Classes from "../../lang/Classes";
import Subjects from "../../lang/Subjects";

const SelectCate = () => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-right">
        <div>
          <Menu.Button className="flex flex-row items-center gap-2 w-full justify-center rounded-md bg-transparent px-2 py-2 text-base text-[#3E1F7A] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <ListBulletIcon className="w-8 h-8 cursor-pointer" />
            <h3 className="text-[#3E1F7A] cursor-pointer text-base">الفئة</h3>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 min-w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="flex flex-row items-center">
              <Classes />
              <Subjects />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default SelectCate;
