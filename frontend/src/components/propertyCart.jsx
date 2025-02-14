import React from 'react';

const PropertyCart = (props) => {
    const {id,propery_type, image, bathroom_amount,price_range, address,slug} = props.data;
    return (
        <div className='bg-white p-5 rounded-xl shadow-md'>
            <link to={slug}/>
            <img src={image} alt='' className='w-full h-88 object-cover drop-shadow-xl'/>
           <h3 className='text-2xl py-3 text-center font-medium'>{propery_type}</h3>
        </div>
    );
}

export default PropertyCart;
