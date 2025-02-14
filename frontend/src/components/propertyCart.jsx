import React from 'react';
import { Link } from 'react-router-dom';
import bathroom from '../assets/img/bathroom.png';
import bedroom from '../assets/img/bedroom.png';

const PropertyCart = ({ data }) => {
    const { id, propery_type, image, bathroom_amount, bedroom_amount, price_range, address, slug } = data;

    return (
        <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <Link to={slug}>
                <img src={image} alt={propery_type} className="w-full h-56 object-cover rounded-lg drop-shadow-lg" />
            </Link>

            <h3 className="text-2xl py-1 font-semibold text-gray-800">{propery_type}</h3>

            <div className="flex justify-between items-center py-1">
                <p className="text-lg text-gray-700 font-semibold">
                    <span className="text-[#271175] text-2xl font-bold">{price_range}</span>
                </p>
            </div>

            <div className="flex justify-start gap-4 items-center mt-3">
                <div className="flex items-center gap-2 text-gray-600">
                    <img src={bedroom} alt="Bedroom" className="w-6 h-6" />
                    <span className="text-lg">{bedroom_amount} Beds</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                    <img src={bathroom} alt="Bathroom" className="w-6 h-6" />
                    <span className="text-lg">{bathroom_amount} Baths</span>
                </div>
            </div>

            <p className="text-gray-500 mt-4 text-md">
                <span className="font-medium">{address}</span>
            </p>
        </div>
    );
};

export default PropertyCart;
