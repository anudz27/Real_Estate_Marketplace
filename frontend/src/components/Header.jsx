import React from "react";
import "../styles/header.css"; // Ensure this path is correct
import HImg from "../assets/img/4.jpg";
import Search from "./search";

const Header = () => {
  return (
    <section
      className="header w-11/12 max-h-screen bg-cover bg-center bg-no-repeat rounded-2xl mx-auto p-8 flex flex-col justify-center items-center"
      id="header"
      style={{
        backgroundImage: `url(${HImg})`,
      }}
    >
      <h1 className="text-5xl font-outfit font-light text-white mt-20 text-center tracking-widest">
        Find Your Dream <span className="font-semibold text-yellow-400">Property</span>,<br />
        Wherever You Are
      </h1>
      <div className="flex flex-row gap-10 font-outfit font-thin text-3xl text-white py-12 mt-20  tracking-widest">
      <a href="#search" className="btn font-bold py-2 px-4 rounded-md hover:text-yellow-500">For Sale</a>
      <a className="py-2 px-4 "> | </a>
      <a href="#search" className="btn font-bold py-2 px-4 rounded-md hover:text-yellow-500">To Rent</a>
      </div>
    
      <Search/>
    
      
    </section>
  );
};

export default Header;
