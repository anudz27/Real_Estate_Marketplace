import React from 'react';
import {properties } from '../property'
import PropertyCart from './propertyCart'

const PropertiesCards = () => {
    return (
        <div>
    <h1 className='text-4xl font-outfit font-semibold text-black mt-20 text-center tracking-widest'>
        Explore Featured Properties
    </h1>

    {/* Wrap PropertyCart components inside the grid */}
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-20 px-20'>
        {properties.map((property, key) => (
            <PropertyCart key={key} data={property} />
        ))}
    </div>
</div>

    );
}

export default PropertiesCards ;
