import React from "react";
import { FaCartArrowDown, FaHeart, FaHouseUser, FaTruck } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className=" w-[7%] flex flex-col items-center bg-gradient-to-t from-blue-950 to-rose-600 fixed top-0 letf-0 h-screen p-2 bg-blue-950">
      <ul className="p-5 space-y-8">
        <li>
          <NavLink to="/">
            <button>
              <FaHouseUser className="hover:text-yellow-200" />
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <button>
              <FaCartArrowDown className="hover:text-yellow-200" />
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites">
            <button>
              <FaHeart className="hover:text-red-700" />
            </button>
          </NavLink>
        </li>
        <li>
          <Link to="/order">
            <button>
              <FaTruck className="hover:text-yellow-200" />
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
