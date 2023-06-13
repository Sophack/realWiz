"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";


//asign navbar items specific types
interface NavItem {
    label: string;
    page: string;
}

//items to map through
const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Home",
      page: "home",
    },
    {
      label: "TREB News",
      page: "news",
    },
    {
      label: "Social Media",
      page: "socialMedia",
    },
    ,
    {
      label: "Browse Listings",
      page: "listings",
    }
  ];

const Navbar = () => {
    //using the theme we imported 
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)


  return (
<header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
<div className="justify-between md:items-center md:flex">
    <div>
        <h2 className="text-2xl font-bold text-violet-200 hover:text-white mr-4">RealWiz</h2>
    </div>
    <div >
        {NAV_ITEMS.map((item, idx) => {
            return <a key={idx}> {item.label}</a>
        })}
    </div>
</div>
</header>
  )
}

export default Navbar
