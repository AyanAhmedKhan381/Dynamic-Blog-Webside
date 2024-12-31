import React from 'react';
import { FaFacebook, FaFeatherAlt, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import './styles/globals.css'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
      <div
        className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2
         lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20'
      >
        {/*------------- 1st footer part ----------- */}
        <div>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <div
              className='md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white 
                flex items-center justify-center flex-col'
            >
              <FaFeatherAlt />
            </div>
            <h1 className='text-white font-bold text-sm sm:text-base md:text-sm'>
              Blog Haven
            </h1>
          </div>
          <p className='text-gray-300 mt-6'>
            Insights, ideas, and inspiration!
          </p>

          {/* Email & phone number */}
          <p className='text-gray-300 mt-5 font-semibold opacity-70'>contact@bloghaven.com</p>
          <p className='text-gray-300 mt-2 font-semibold opacity-70'>+123 456 7890</p>

          {/* Social media icons and links */}
          <div className='flex items-center space-x-4 mt-6'>
            <FaFacebook className='w-6 h-6 text-blue-600 hover:text-blue-700 duration-300 transition-all hover:scale-105' />
            <FaTwitter className='w-6 h-6 text-sky-600 hover:text-sky-700 duration-300 transition-all hover:scale-105' />
            <FaYoutube className='w-6 h-6 text-red-500 hover:text-red-600 duration-300 transition-all hover:scale-105' />
            <FaInstagram className='w-6 h-6 text-red-600 hover:text-red-700 duration-300 transition-all hover:scale-105' />
            <FaLinkedin className='w-6 h-6 text-blue-700 hover:text-blue-800 duration-300 transition-all hover:scale-105' />
          </div>
        </div>

        {/*---------------2nd Part -------------- */}
        <div className='md:mx-auto'>
          <h1 className='footer__heading'>Popular</h1>
          <p className='footer__link'>Tech News</p>
          <p className='footer__link'>Education</p>
          <p className='footer__link'>IT Blogs</p>
          <p className='footer__link'>Inspiration</p>
        </div>

        {/*---------------3rd Part -------------- */}
        <div className='md:mx-auto'>
          <h1 className='footer__heading'>Links</h1>
          <p className='footer__link'>Terms</p>
          <p className='footer__link'>Privacy</p>
          <p className='footer__link'>Plans</p>
          <p className='footer__link'>Services</p>
          <p className='footer__link'>Careers</p>
          <p className='footer__link'>FAQs</p>
        </div>

        {/*---------------4th Part -------------- */}
        <div className='md:mx-auto'>
          <h1 className='footer__heading'>Explore</h1>
          <p className='footer__link'>Miami</p>
          <p className='footer__link'>LA</p>
          <p className='footer__link'>Chicago</p>
          <p className='footer__link'>NY</p>
          <p className='footer__link'>London</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
