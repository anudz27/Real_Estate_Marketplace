import React from "react";
import "../styles/header.css"; // Ensure this path is correct
import HImg from "../assets/img/4.jpg"; 

const Header = () => {
  return (

    <section
      className="header w-full " id="header"
    >
      <div className="container back"   >
      

        <form action="" className="">
          <div className="box">
            <span>City</span>
            <input type="text" placeholder="Location" />
          </div>
          <div className="box">
            <span>Property Type</span>
            
            <input type="text" placeholder="Property Type" />
          </div>
          <div className="box">
            <span>Price Range</span>
            <input type="text" placeholder="Price Range" />
          </div>
          <button className="btn">Search</button>
        </form>
      </div>
      <h1 className="text-4xl font-outfit font-normal text-[#FADC07] m-auto text-center">
        Find Your Dream <span className="font-semibold">Property</span>,<br />
        Wherever You Are
      </h1>
    </section>
  );
};

export default Header;
