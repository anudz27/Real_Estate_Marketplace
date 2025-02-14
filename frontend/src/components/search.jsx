import React from 'react'

const search = () => {
  return (
    <>
    <section className='flex flex-col justify-center items-center'>
        <div className="container bg-white bg-opacity-80 rounded-lg p-6 shadow-lg w-full max-w-4xl mt-10 mb-10" >
        <form action="" className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="box">
            <select
            className="w-full p-2 border border-gray-300 rounded-md"
            defaultValue="">
              <option value="" disabled>
              Select Location
              </option>
              <option value="new-york">Colombo</option>
              <option value="los-angeles">Galle</option>
              <option value="chicago">Kandy</option>
              <option value="miami">Matara</option>
            </select>
          </div>
  <div className="box">
    <select
      className="w-full p-2 border border-gray-300 rounded-md"
      defaultValue=""
    >
      <option value="" disabled>
        Select Property Type
      </option>
      <option value="apartment">Apartment</option>
      <option value="house">House</option>
      <option value="villa">Villa</option>
 
    </select>
  </div>
  <div className="box">
    <select
      className="w-full p-2 border border-gray-300 rounded-md"
      defaultValue=""
    >
      <option value="" disabled>
        Select Price Range
      </option>
      <option value="0-50000">Rs0 - Rs50,000</option>
      <option value="50000-100000">Rs50,000 - Rs100,000</option>
      <option value="100000-200000">Rs100,000 - Rs200,000</option>
      <option value="200000-plus">Rs200,000+</option>
    </select>
  </div>
  <div className="box">
    <button
      className="btn w-full p-2 col-span-1 md:col-span-4 bg-yellow-400 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-500"
    >
      Search
    </button>
  </div>
</form>
</div>
</section>
</>
  )
}

export default search
