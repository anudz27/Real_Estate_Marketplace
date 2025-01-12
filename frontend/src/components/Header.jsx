import React from "react";
import "../styles/header.css"; // Ensure this path is correct
import HImg from "../assets/img/4.jpg";

const Header = () => {
  return (
    <section
      className="header w-full bg-cover bg-center bg-no-repeat rounded-2xl mx-auto p-8 flex flex-col justify-center items-center"
      id="header"
      style={{
        backgroundImage: `url(${HImg})`,
      }}
    >
      <h1 className="text-4xl font-outfit font-normal text-yellow-400 mt-6 text-center my-36 ">
        Find Your Dream <span className="font-semibold">Property</span>,<br />
        Wherever You Are
      </h1>
      <div className="container bg-white bg-opacity-80 rounded-lg p-6 shadow-lg w-full max-w-4xl">
        <form action="" className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="box">
            
            <input
              type="text"
              placeholder="Location"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="box">
           
            <input
              type="text"
              placeholder="Property Type"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="box">
            
            <input
              type="text"
              placeholder="Price Range"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="box">
          <button className="btn w-full p-2 col-span-1 md:col-span-3 bg-yellow-400 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-500">
            Search
          </button>
          </div>
         
        </form>
      </div>
      
    </section>
  );
};

export default Header;
