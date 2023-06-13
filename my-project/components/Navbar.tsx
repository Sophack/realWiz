"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

// assign navbar items specific types
interface NavItem {
  label: string;
  page: string;
}

//all items
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "TRREB News",
    page: "news",
  },
  {
    label: "Listings",
    page: "listings",
  },
  ,
  {
    label: "Social Media",
    page: "socialMedia",
  }
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="flex items-center justify-between flex-wrap bg-violet-950 p-6 hover:text-white mr-4">
        <div className="flex items-center justify-between md:py-4 md:block">
          <div className="">
            <h2 className="text-2xl font-bold text-violet-200 hover:text-white mr-4">
              RealWiz
            </h2>
          </div>
          <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() =>setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} color="white" /> : <IoMdMenu size={30} color="violet"/>}
              </button>
            </div>
        </div>
        {/* nested divs create better allignment */}
        <div>
          <div
            className={`flex-1 justify-between pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-violet-200 hover:text-white mr-4">
              {NAV_ITEMS.map((item, idx) => {
                return  <Link
                key={idx}
                to={item.page}
                className={
                  "block lg:inline-block text-violet-200  hover:text-violet-500 dark:text-violet-100"
                }
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavbar(!navbar)}
              >
                {item.label}
              </Link>;
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-violet-400 p-2 rounded-xl"
                >
                  <RiSunLine size={25} />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-violet-400 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} color="black" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
