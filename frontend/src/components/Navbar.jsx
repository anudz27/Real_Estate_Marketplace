import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const toggleMenu = () => setClick(!click);

  return (
    <nav className="navbar h-[10vh] flex justify-between items-center bg-white text-black px-6 lg:px-24 ">
      {/* Logo Section */}
      <div className="navbar-logo flex items-center">
        <Link to="/Home">
          <h1 className="font-outfit text-3xl">UrbanNest</h1>
        </Link>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="lg:hidden">
        <button
          className="text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {click ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`fixed top-[10vh] left-0 w-full pl-80 bg-white lg:static lg:flex lg:items-center lg:gap-8 text-lg font-semibold font-outfit ${
          click ? "block" : "hidden"
        } lg:block`}
      >
        <li className="p-4 border-b lg:border-none">
          <Link
            to="/"
            className="text-black no-underline hover:text-[#FADC07]"
          >
            Buy
          </Link>
        </li>
        <li className="p-4 border-b lg:border-none">
          <Link
            to="/signup"
            className="text-black no-underline hover:text-[#FADC07]"
          >
            Rent
          </Link>
        </li>
        <li className="p-4 border-b lg:border-none">
          <Link
            to="/login"
            className="text-black no-underline hover:text-[#FADC07]"
          >
            Agent
          </Link>
        </li>
        <li className="p-4 border-b lg:border-none">
          <Link
            to="/properties"
            className="text-black no-underline hover:text-[#FADC07]"
          >
            Blog
          </Link>
        </li>
        <li className="p-4 ml-auto lg:border-none">
          <Link to="/signUp">
            <button className="bg-[#FADC07] text-black px-4 py-2 rounded-lg hover:bg-white hover:text-[#FADC07] transition">
              Sign Up
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
