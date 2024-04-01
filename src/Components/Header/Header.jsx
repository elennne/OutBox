import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input";
import { FaSearch } from "react-icons/fa";

const Header = ({ handleSearchInput }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-end items-center">
        <div className="bg-gradient-to-l from-blue-950 to-rose-600 w-[93%] h-20 flex justify-evenly items-center flex-wrap">
          <Link to="/">
            <div className="logo flex items-center  flex-wrap ">
              <img className="w-10 h-10" src="Images/logo.png" alt="logo" />
              <h1 className=" text-lg font-semibold ">OutBox</h1>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Input
              type="search"
              className="pl-2 w-[96] mx-auto h-10 rounded-md"
              onChange={handleSearchInput}
            />
            <FaSearch />
          </div>
          <div className="flex flex-wrap mr-9 items-center gap-3">
            <Link to="/login">
              <button className="border px-3 py-1">შესვლა</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
