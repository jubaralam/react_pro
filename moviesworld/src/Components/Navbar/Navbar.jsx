import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center py-5 px-7 bg-light-blue text-white">
      <div className="w-full max-w-[1700px]  flex justify-between items-center">
        <p className="font-black items-center justify-center text-2xl">
          MoviesWorld
        </p>
        <div className="relative flex mx-5 w-full">
          <input
            type="text"
            placeholder="Enter a Movie"
            className="bg-dark-gray p-3 text-light-gray border-none outline-none rounded-lg w-full pr-14 "
          />
          <FaSearch className="cursor-pointer  absolute right-5 top-[50%] -translate-y-[50%]" />
        </div>
        <button className="py-3 px-5 min-w-fit bg-dark-gray rounded-xl">Select Genres</button>
      </div>
    </div>
  );
};

export default Navbar;
