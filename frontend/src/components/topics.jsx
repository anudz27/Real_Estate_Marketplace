import React from 'react';


const Topics = () => {
    return (
        <div className='container mx-auto my-20 px-4 bg-black text-white w-11/12 max-h-screen bg-cover bg-center rounded-2xl p-8 flex flex-col justify-center items-center'>
          
            <h1 className='text-4xl font-outfit font-semibold mt-20 text-center tracking-widest'>  Explore Topics </h1>
            <h1 className='text-2xl font-outfit font-medium mt-10 text-center tracking-widest'> Explore expert advice, market trends, and home-buying tips to make informed decisions. </h1> 
        
            <button className="btn p-2 col-span-1 md:col-span-4 mt-10 mb-20 bg-yellow-400 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-500">
                Read More Article
            </button>
        
        </div>
    );
}

export default Topics;
