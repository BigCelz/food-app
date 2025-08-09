import React from "react";
import { NavLinks } from "../../../../../constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

const MobileNav = ({ closeNav, showNav }) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";
  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed inset-0 transform transition-all duration-500 z-[1002] bg-black bg-opacity-70 w-full h-screen ${navOpen}`}
      ></div>

      {/* navlinks */}
      <div
        className={`text-white fixed justify-center flex flex-col h-full ${navOpen} transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-950 space-y-6 z-[1050]`}
      >
        {NavLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url} onClick={closeNav}>
              <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm-text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}

        {/* close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
