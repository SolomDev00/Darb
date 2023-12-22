import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { TableCellsIcon } from "@heroicons/react/24/solid";

const Select = () => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-right">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium text-[#3E1F7A] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            طريقة الإستخدام
            <ChevronDownIcon
              className="mr-1 ml-2 h-5 w-4 text-[#3E1F7A] hover:text-violet-100"
              aria-hidden="true"
            />
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-indigo-600 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm duration-300`}
                  >
                    {active ? (
                      <TableCellsIcon
                        className="ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <TableCellsIcon
                        className="ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    شرح فيديوهات
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Select;
