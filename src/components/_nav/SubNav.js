import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function SubNav() {
  const [selected, selectedIndex] = React.useState(0);

  const DogsSubLinks = [
    {
      name: "Dog Food",
    },
    {
      name: "Toys",
    },
    {
      name: "Training Equipment",
    },
    {
      name: "Accessories",
    },
    {
      name: "Grooming",
    },
  ];

  const CatSubLinks = [
    {
      name: "Cat Food",
    },
    {
      name: "Accessories",
    },
    {
      name: "Grooming",
    },
    {
      name: "Training Equipment",
    },
    {
      name: "Toys",
    },
  ];

  return (
    <div className="bg-tertiary-main/95 w-full sticky top-0 z-50">
      <div className="flex items-center py-2 px-4 space-x-3">
        {/* dogs */}
        <Menu as="div" className="relative inline-block text-left">
          <div className="text-[20px]">
            <Menu.Button className="inline-flex text-w-full justify-center rounded-md   px-4 py-2 text-sm items-center tracking-wider font-medium text-white hover:bg-secondary-main/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <span>Dogs</span>
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
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
            <Menu.Items className="absolute left-0 mt-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                {DogsSubLinks.map((link, index) => (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={`/shop/dog/${link.name.toLocaleLowerCase()}`}
                        className={`${
                          active
                            ? "bg-secondary-main text-white"
                            : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm tracking-wider`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* cats */}
        <Menu as="div" className="relative inline-block text-left">
          <div className="text-[20px]">
            <Menu.Button className="inline-flex text-w-full justify-center rounded-md   px-4 py-2 text-sm items-center tracking-wider font-medium text-white hover:bg-secondary-main/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <span>Cats</span>
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
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
            <Menu.Items className="absolute left-0 mt-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                {CatSubLinks.map((link, index) => (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={`/shop/dog/${link.name.toLocaleLowerCase()}`}
                        className={`${
                          active
                            ? "bg-secondary-main text-white"
                            : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm tracking-wider`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* services */}
        <Menu as="div" className="relative inline-block text-left">
          <div className="text-[20px]">
            <Menu.Button className="inline-flex text-w-full justify-center rounded-md   px-4 py-2 text-sm items-center tracking-wider font-medium text-white hover:bg-secondary-main/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <span>Services</span>
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
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
            <Menu.Items className="absolute left-0 mt-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                {CatSubLinks.map((link, index) => (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={`/shop/dog/${link.name.toLocaleLowerCase()}`}
                        className={`${
                          active
                            ? "bg-secondary-main text-white"
                            : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm tracking-wider`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* Accessories */}
        <Menu as="div" className="relative inline-block text-left">
          <div className="text-[20px]">
            <Menu.Button className="inline-flex text-w-full justify-center rounded-md   px-4 py-2 text-sm items-center tracking-wider font-medium text-white hover:bg-secondary-main/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <span>Accessories</span>
            </Menu.Button>
          </div>
        </Menu>
        {/* special orders */}{" "}
        <Menu as="div" className="relative inline-block text-left">
          <div className="text-[20px]">
            <Menu.Button className="inline-flex text-w-full justify-center rounded-md   px-4 py-2 text-sm items-center tracking-wider font-medium text-white hover:bg-secondary-main/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <span className="!tracking-wider">Special Orders</span>
            </Menu.Button>
          </div>
        </Menu>
      </div>
    </div>
  );
}

export default SubNav;
