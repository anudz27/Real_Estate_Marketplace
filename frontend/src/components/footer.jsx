import React from 'react';
import Facebook from '../assets/img/fb.png';
import Instagram from '../assets/img/insta.png';
import Twitter from '../assets/img/twitter.png';
import Whatsapp from '../assets/img/whatsapp.png';

const Footer = () => {
    return (
        <footer className='container mx-auto my-20 px-12 bg-black text-white w-11/12 rounded-2xl p-8'>
            <div className='grid md:grid-cols-4 gap-10 text-center md:text-left'>

                {/* Column 1 - Company Info */}
                <div>
                    <h2 className='text-xl font-bold'>UrbanNest</h2>
                    <p className='mt-2 text-gray-400'>
                        Your trusted real estate marketplace for buying, selling, and renting properties.
                    </p>
                    <p className='mt-2 text-gray-400'>Follow us on social media</p>
                    <div className='flex justify-center md:justify-start space-x-4 mt-4'>
                        <a href='https://facebook.com' target='_blank' className='bg-white rounded-full w-10 h-10 flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-gray-300' rel='noopener noreferrer'>
                        <img src={Facebook} alt='Facebook' className='w-6 h-6' />
                        </a>
                        <a href='https://instagram.com' target='_blank' className='bg-white rounded-full w-10 h-10  flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-gray-300' rel='noopener noreferrer'>
                            <img src={Instagram} alt='Instagram' className='w-6 h-6' />
                        </a>
                        <a href='https://twitter.com' target='_blank' className='bg-white rounded-full w-10 h-10 flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-gray-300' rel='noopener noreferrer'>
                            <img src={Twitter} alt='Twitter' className='w-6 h-6' />
                        </a>
                        <a href='https://wa.me/1234567890' target='_blank' className='bg-white rounded-full w-10 h-10 flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-gray-300' rel='noopener noreferrer'>
                            <img src={Whatsapp} alt='WhatsApp' className='w-6 h-6' />
                        </a>
</div>
                </div>

                {/* Column 2 - Quick Links */}
                <div>
                    <h2 className='text-xl font-bold'>Quick Links</h2>
                    <ul className='mt-2 space-y-2'>
                        <li><a href='/about' className='text-gray-400 hover:text-white'>About Us</a></li>
                        <li><a href='/properties' className='text-gray-400 hover:text-white'>Properties</a></li>
                        <li><a href='/contact' className='text-gray-400 hover:text-white'>Contact</a></li>
                        <li><a href='/blog' className='text-gray-400 hover:text-white'>Blog</a></li>
                    </ul>
                </div>

                {/* Column 3 - Contact Info */}
                <div>
                    <h2 className='text-xl font-bold'>Contact Us</h2>
                    <p className='mt-2 text-gray-400'> 123 Real Estate St, City, Country</p>
                    <p className='mt-2 text-gray-400'> support@urbannest.com</p>
                    <p className='mt-2 text-gray-400'> +123 456 7890</p>
                </div>

                {/* Column 4 - Stay Connected */}
                <div>
                    <h2 className='text-xl font-bold'>Stay Connected</h2>
                    

                    <p className='mt-4 text-gray-400'>Send your messsage</p>
                    <input type='email' placeholder='Enter your message' className='mt-2 p-2 w-full bg-gray-800 text-white rounded' />
                    <button className='mt-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded text-black font-semibold'>Send</button>
                </div>
            </div>

            {/* Footer Bottom */}
            <hr className='my-6 border-gray-700' />
            <p className='text-center text-gray-500'>© 2024 UrbanNest. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
