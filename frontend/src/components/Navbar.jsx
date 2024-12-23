// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (

      
        <nav className="navbar flex justify-between items-center px-8 py-4 bg-white text-black">

            <h1 className="navbar-logo font-outfit text-xl">
               <Link to="/Home"> UrbanNest </Link> 
            </h1>
            <ul className="navbar-links flex list-none items-center ">
                <li className='ml-5'>
                    <Link to="/" className="text-black font-semibold font-outfit text-lg no-underline hover:text-[#FADC07]">Buy</Link>
                </li>
                <li className='ml-5'>
                    <Link to="/signup" className="text-black font-semibold font-outfit text-lg no-underline hover:text-[#FADC07]">Rent</Link>
                </li>
                <li className='ml-5'>
                    <Link to="/login" className="text-black font-semibold font-outfit text-lg no-underline hover:text-[#FADC07]">Agent</Link>
                </li>
                <li className='ml-5 '>
                    <Link to="/properties" className="text-black font-semibold font-outfit text-lg no-underline hover:text-[#FADC07]">Blog</Link>
                </li>
                <li className='ml-40'>
                <Link to="/signUp">
            <button className="bg-[#FADC07] text-black font-semibold font-outfit text-lg px-4 py-2 rounded-lg hover:bg-[#ffff]">
              Sign Up
            </button>
          </Link>
                   
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;