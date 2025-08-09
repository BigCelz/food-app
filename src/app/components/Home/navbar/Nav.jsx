"use client";
import React, { useEffect, useState } from "react";
import { MdDeliveryDining } from "react-icons/md";
import { NavLinks } from "../../../../../constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeToggler from "../../Helper/ThemeToggler";
import { useCartStore } from "@/app/store/cartStore";

const Nav = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  //  cart count from Zustand
  const cart = useCartStore((state) => state.cart);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      className={`transition-all duration-300 h-[12vh] fixed w-full z-[100] ${
        navBg ? "bg-white dark:bg-blue-950 shadow-md z-50" : ""
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto xl:w-[80%]">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <div className="w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center flex-col dark:bg-white ">
              <MdDeliveryDining className="w-6 h-6 text-white dark:text-black " />
            </div>
          </Link>

          <h1 className="text-xl md:text-2xl text-black dark:text-white hidden sm:block font-bold">
            Foodie
          </h1>
        </div>

        {/* navlinks */}
        <div className="hidden lg:flex space-x-10 items-center ">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-black dark:text-white hover:text-blue-900  dark:hover:text-black font-bold transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault(); // stop instant jump
                  const target = document.querySelector(link.url);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>

        {/* buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/resturant">
            <button className="bg-blue-950 dark:bg-white px-8 py-2.5  text-white whitespace-nowrap dark:text-black font-bold rounded-lg hover:bg-blue-900 dark:hover:bg-gray-400 transition-all duration-200 cursor-pointer">
              Place Order
            </button>
          </Link>

          {/* theme toggler */}
          <ThemeToggler />

          {/*Cart Icon with count */}
          <Link href="/cart" className="relative">
            <span className="text-2xl dark:text-white text-blue-950">🛒</span>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>

          {/* menu icon */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-blue-950 dark:text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
