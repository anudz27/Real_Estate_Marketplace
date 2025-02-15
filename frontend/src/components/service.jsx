import React from 'react';
import Rent from '../assets/img/i_4.png';
import Sell from '../assets/img/i_6.png';
import Agent from '../assets/img/i_7.png';
import List from '../assets/img/i_1.png';

const Service = () => {
    return (
        <div className='container mx-auto px-12 text-black w-11/12 rounded-2xl p-8'>
              <h1 className='text-4xl font-outfit font-semibold text-center tracking-widest'> See what UbarnNest offers </h1>
                {/* Cards Section */}
      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center gap-12 mt-12">
        {/* Rent Property */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <img src={Rent} alt="Rent Property" className="w-44 mb-4" />
          <button className="bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg mt-4 hover:bg-yellow-500 transition duration-300">
            Rent Property
          </button>
        </div>

        {/* Sell Property */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <img src={Sell} alt="Sell Property" className="w-44 mb-4" />
          <button className="bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg mt-4 hover:bg-yellow-500 transition duration-300">
            Buy Property
          </button>
        </div>

        {/* Find Agent */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <img src={Agent} alt="Find Agent" className="w-44 mb-4" />
          <button className="bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg mt-4 hover:bg-yellow-500 transition duration-300">
            Find Agent
          </button>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <img src={List} alt="Find Agent" className="w-44 mb-4" />
          <button className="bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg mt-4 hover:bg-yellow-500 transition duration-300">
            List Property
          </button>
        </div>
      </div>

        </div>
    );
}

export default Service;
