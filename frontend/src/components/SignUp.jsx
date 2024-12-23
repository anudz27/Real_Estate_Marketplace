// src/components/SignUp.js

import { Link } from 'react-router-dom'
import authService from '../services/authService'; // Adjust the path as needed
import '../styles/SignUp.css'; // Styling file for your signup page
import React, { useState } from 'react';


const SignUp = () => {
    // State to store form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');

    // Update formData state on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.register(formData);
            setMessage(response.data.message); // Show success message
        } catch (error) {
            setMessage(error.response?.data.message || 'Error registering user');
        }
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 pt-10 ">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg mb-8">
              <div className="flex justify-between items-center mb-4">
                 <Link to ="/SignInForm"> <h2 className="text-2xl font-bold text-black-500">Sign In</h2></Link>
                  <h2 className="text-2xl font-bold text-yellow-500">New Account</h2>
              </div>
              
              <hr className="border-gray-300 my-4" />

              <form className="space-y-6">
                  {/* Email Input */}
                  <div>
                      <label className="block text-sm font-medium text-gray-800">Email</label>
                      <input
                          type="email"
                          placeholder="Enter email"
                          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                  </div>

                  {/* Password Input */}
                  <div>
                      <label className="block text-sm font-medium text-gray-800">Password</label>
                      <input
                          type="password"
                          placeholder="Create Password"
                          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
                      />
                      <p className="mt-2 text-xs text-gray-500">
                          At least 8 characters<br />
                          Mix of letters and numbers<br />
                          At least 1 special character<br />
                          At least 1 lowercase and 1 uppercase letter
                      </p>
                  </div>

                  {/* User Type Checkbox */}
                  <div className="flex items-center space-x-4">
                      <label className="flex items-center text-gray-800">
                          <input type="checkbox" className="mr-2" />
                          Seller
                      </label>
                      <label className="flex items-center text-gray-800">
                          <input type="checkbox" className="mr-2" />
                          Buyer
                      </label>
                  </div>

                  {/* Submit Button */}
                  <button className="w-full py-2 bg-black text-white rounded-lg font-semibold text-lg hover:bg-gray-800">
                      Sign Up
                  </button>
              </form>

              {/* Divider */}
              <hr className="border-gray-300 my-6" />

              {/* Social Media Login */}
              <p className="text-center text-gray-500 mb-4">or connect with:</p>
              <div className="space-y-3">
                  <button className="flex items-center  w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                      <img className='mr-2 max-w-8' src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" alt="Google"  />
                      Continue with Google
                  </button>
                  <button className="flex items-center  w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 ">
                      <img className='mr-2 max-w-8'  src="https://img.icons8.com/?size=100&id=114441&format=png&color=000000" alt="Facebook"  />
                      Continue with Facebook
                  </button>
                  <button className="flex items-center   w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                      <img className='mr-2 max-w-8 justify-center' src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000" alt="Apple" />
                      Continue with Apple
                  </button>
              </div>
          </div>
      </div>
  );
}

export default SignUp;