"use client";
import Link from "next/link";
import React from "react";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  return (
    <>
      <div className="h-[100px] flex justify-between items-center">
        <Link href="/" className="font-semibold text-2xl">
          Lamamia
        </Link>
        <div className="flex items-center">
          <DarkMode />
          {links.map((link) => {
            return (
              <Link key={link.id} href={link.url} className="ml-6">
                {link.title}
              </Link>
            );
          })}
          <button className="ml-3 py-[3px] px-3 border-none bg-green-400 text-white rounded-md">
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
