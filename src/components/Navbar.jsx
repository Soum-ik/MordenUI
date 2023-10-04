import React from "react";
import { useState } from "react";
import { navLinks } from "../contents/static";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className=" w-full py-6 flex items-center justify-between navbar">
      <img src={logo} alt="" className=" w-[124px] h-[32px]" />

      <ul className=" list-none hidden  sm:flex  items-center text-white justify-end flex-1">
        {navLinks.map((navLink, index) => (
          <li
            key={navLink.id}
            className={` font-poppins font-normal text-[16px] cursor-pointer ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={navLink.id}>{navLink.title}</a>
          </li>
        ))}
      </ul>
      {/* mobile part */}
      <div className=" sm:hidden flex flex-1 justify-end items-center">
        <img
          onClick={handleToggle}
          src={toggle ? close : menu}
          alt=""
          className="w-[26px] object-contain"
        />
        <div
          className={`${
            toggle ? " flex" : " hidden"
          } p-6 bg-black-gradient absolute top-20 mx-4 my-2 right-0 min-w-[140px] sidebar rounded-xl`}
        >
          <ul className=" list-none  flex flex-col  items-center text-white justify-end flex-1">
            {navLinks.map((navLink, index) => (
              <li
                key={navLink.id}
                className={` font-poppins font-normal text-[16px] cursor-pointer ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-10"
                }`}
              >
                <a href={navLink.id}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
