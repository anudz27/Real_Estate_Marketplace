// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import SignUp from './SignUp';

const Navbar = () => {
    return (

        <nav className="navbar flex justify-between items-center px-8 py-4 bg-white text-black">
        <h1 className="navbar-logo font-outfit text-xl">UrbanNest</h1>
        <ul className="navbar-links flex justify-center items-center gap-12 w-full">
            <li className="ml-80"> 
                <Link to="/" className="text-black font-semibold font-outfit text-lg no-underline hover:text-[#FADC07]">Buy</Link>
            </li>
            <li className="ml-5">
                <Link to="/signup" className="text-black font-semibold font-outfit text-lg no-underline hover:text-[#FADC07]">Rent</Link>
            </li>
            <li className="ml-5">
                <Link to="/login" className="text-black font-semibold font-outfit text-lg no-underline hover:text-[#FADC07]">Agent</Link>
            </li>
            <li className="ml-5">
                <Link to="/properties" className="text-black font-semibold font-outfit text-lg no-underline hover:text-[#FADC07]">Blog</Link>
            </li>
            
        </ul>
        <ul className='flex justify-end items-center w-full'>
        <li className=" ">
                <Link to="/signup" className="flex list-none">
                    <button className="bg-[#FADC07] text-black font-semibold font-outfit text-lg px-4 py-2 rounded-lg hover:bg-[#ffff] hover:border-[#FADC07]">
                        Sign Up
                    </button>
                </Link>
            </li>
        </ul>
    </nav>
    
    );
};

export default Navbar;
