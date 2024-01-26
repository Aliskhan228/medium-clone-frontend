// bg-gray-800
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  PencilSquareIcon,
  MagnifyingGlassIcon,
  BellIcon,
  Cog8ToothIcon,
  BookmarkSquareIcon,
  UserCircleIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const location = useLocation();

  return (
    <header className="h-16 w-full bg-gray-800">
      <div className="h-full w-3/4 mx-auto">
        <div className="flex items-center h-full">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <div
            className={`ml-6 relative ${
              location.pathname === "/edit" ? "hidden" : ""
            }`}
          >
            <MagnifyingGlassIcon className="h-5 w-5 absolute top-2.5 left-3 text-white" />
            <input
              type="text"
              placeholder="Search"
              className="search-input h-10 w-96 rounded pl-10 pb-0.5 text-white bg-gray-700 outline-none ease-in duration-100"
            />
          </div>
          <div className="flex items-center gap-5 ml-auto">
            <Link to={"/edit"}>
              <button
                className={`flex items-center justify-center gap-1 h-10 w-28 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-sm ease-in duration-100 ${
                  location.pathname === "/edit" ? "hidden" : ""
                }`}
              >
                <PencilSquareIcon className="h-4 w-4" />
                New Post
              </button>
            </Link>
            <button
              className={`flex items-center justify-center bg-green-600 text-white px-3 rounded-2xl ${
                location.pathname === "/edit" ? "block" : "hidden"
              }`}
            >
              Publish
            </button>
            <BellIcon className="h-6 w-6 text-slate-400 hover:text-white ease-in duration-100 cursor-pointer" />
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "flex items-center gap-2 px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        <UserCircleIcon className="h-5 w-5" />
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "flex items-center gap-2 px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        <BookmarkSquareIcon className="h-5 w-5" />
                        Library
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "flex items-center gap-2 px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        <Cog8ToothIcon className="h-5 w-5" />
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "flex items-center gap-2 px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
