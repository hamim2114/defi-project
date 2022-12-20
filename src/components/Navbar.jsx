import React, { useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="flex justify-between items-center h-full px-4 max-w-[1240px] mx-auto">
        <div>
          <h1 className="text-[#00d8ff]">DEFI</h1>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex text-white items-center">
            <li className="mr-7">Platform</li>
            <li className="mr-7">Developers</li>
            <li className="mr-7">Community</li>
            <li className="mr-7">About</li>
            <button className="ml-4">Use Defi</button>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div className="sm:hidden" onClick={() => setNav(!nav)}>
          {nav ? (
            <HiX size={30} className="text-white" />
          ) : (
            <HiMenuAlt1 size={30} className="text-white" />
          )}
        </div>
        {/* mobile menu */}
        <div className={nav? 'flex text-white bg-black absolute top-[90px] w-full left-0 justify-center text-center duration-500' : 'absolute left-[-100%]'}>
          <ul className="text-2xl">
            <li className="mb-5">Platform</li>
            <li className="mb-5">Developers</li>
            <li className="mb-5">Community</li>
            <li>About</li>
            <button className="m-8">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
