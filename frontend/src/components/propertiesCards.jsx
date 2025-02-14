import React from 'react';
import {properties } from '../property'
import PropertyCart from './propertyCart'

const PropertiesCards = () => {
    return (
        <div>
    <h1 className='text-3xl font-outfit font-light text-black mt-20 text-center tracking-widest'>
        Explore Featured Properties
    </h1>

    {/* Wrap PropertyCart components inside the grid */}
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10 px-5'>
        {properties.map((property, key) => (
            <PropertyCart key={key} data={property} />
        ))}
    </div>
</div>

    );
}

export default PropertiesCards ;
