import React from 'react';
import { Link } from 'react-router-dom';

function SignInForm() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-yellow-500">Sign In</h2>
                   <Link to={"/SignUp"}> <h2 className="text-2xl font-bold text-gray-800">New Account</h2></Link>
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
                            placeholder="Enter password"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Sign In Button */}
                    <button className="w-full py-2 bg-black text-white rounded-lg font-semibold text-lg hover:bg-gray-800">
                        Sign In
                    </button>

                    {/* Forgot Password Link */}
                    <div className="text-center mt-4">
                        <a href="#" className="text-sm text-gray-600 hover:text-blue-500">Forgot your password?</a>
                    </div>
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

export default SignInForm;

