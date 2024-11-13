import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const imgUrl = import.meta.env.VITE_IMAGE_URL;

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [productsExpanded, setProductsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setMobileMenu(!mobileMenu);
  const toggleProductsDropdown = () => setProductsExpanded(!productsExpanded);

  return (
    <div className="w-full fixed top-0 z-50">
      <nav className={`flex items-center justify-between p-3 ${sticky ? 'bg-gradient-to-r from-blue-800 to-gray-900 shadow-md' : 'bg-transparent'} transition duration-300`}>
        <a href="/">
          <img src={`${imgUrl}/icon/name.png`} alt="Logo" className="w-36" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
            className="relative group"
          >
            <ScrollLink
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              className={`cursor-pointer ' text-gray-400 hover:text-gray-300'
                }`}
            >
              Products
            </ScrollLink>
            <div
              className={`absolute top-full left-0 mt-2 w-52 bg-blue-900 rounded-lg shadow-lg ${dropdownVisible ? 'block' : 'hidden'
                } group-hover:block`}
            >
              <a href="/products/invoice-discounting" className="block px-4 py-2 text-white hover:bg-gray-700 rounded-t-lg">
                Invoice Discounting
              </a>
              <a href="/products/export-credits" className="block px-4 py-2 text-white  hover:bg-gray-700">
                Export Credits
              </a>
              <a href="/products/vendor-financing" className="block px-4 py-2 text-white hover:bg-gray-700">
                Vendor Financing
              </a>
              <a href="/products/credit-card" className="block px-4 py-2 text-white hover:bg-gray-700">
                Credit Cards
              </a>
              <a href="/products/edquery-solutions" className="block px-4 py-2 text-white hover:bg-gray-700 rounded-b-lg">
                ED Query Solutions
              </a>
            </div>
          </li>
          <li><a href="/vision" className='text-gray-400 font-semibold hover:text-gray-300'>Vision</a></li>
          <li><a href="/team" className='text-gray-400 hover:text-gray-300'>Team</a></li>
          <li><a href="/blogs" className='text-gray-400 hover:text-gray-300'>Blogs</a></li>
          <li><a href="/about-us" className='text-gray-400 hover:text-gray-300'>About Us</a></li>
          <li><a href="/contact-us" className='text-gray-400 hover:text-gray-300'>Contact Us</a></li>
          <li>
            <a href="/login" target="_blank">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
                Login
              </button>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <TiThMenu color='white' size={30} className="cursor-pointer" onClick={toggleMenu} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-gradient-to-br from-blue-800 to-gray-900 bg-opacity-90 z-40 transform ${mobileMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 lg:hidden`}>
        <div className="flex justify-between items-center p-5">
          <a href="/">
            <img src={`${imgUrl}/icon/name.png`} alt="Logo" className="w-28" />
          </a>
          <AiOutlineClose color="white" size={30} className="cursor-pointer" onClick={toggleMenu} />
        </div>

        <ul className="flex flex-col items-center space-y-6 mt-8 text-white text-lg">
          <li className="w-full flex flex-col items-center">
            <button
              className="flex items-center justify-center w-full px-6 py-2 text-center hover:bg-gray-700 rounded-md transition duration-200"
              onClick={toggleProductsDropdown}
            >
              <span>Products</span>
              {productsExpanded ? <FaChevronUp className="ml-2 text-gray-400" /> : <FaChevronDown className="ml-2 text-gray-400" />}
            </button>

            {productsExpanded && (
              <ul className="flex flex-col items-center w-full text-sm text-gray-300 mt-2 space-y-2 bg-gray-800 py-2 rounded-md">
                <li><a href="/products/invoice-discounting" className="hover:text-white transition" onClick={toggleMenu}>Invoice Discounting</a></li>
                <li><a href="/products/export-credits" className="hover:text-white transition" onClick={toggleMenu}>Export Credits</a></li>
                <li><a href="/products/vendor-financing" className="hover:text-white transition" onClick={toggleMenu}>Vendor Financing</a></li>
                <li><a href="/products/credit-card" className="hover:text-white transition" onClick={toggleMenu}>Credit Cards</a></li>
                <li><a href="/products/edquery-solutions" className="hover:text-white transition" onClick={toggleMenu}>ED Query Solutions</a></li>
              </ul>
            )}
          </li>

          <li><a href="/vision" className="hover:text-gray-300 transition" onClick={toggleMenu}>Vision</a></li>
          <li><a href="/team" className="hover:text-gray-300 transition" onClick={toggleMenu}>Team</a></li>
          <li><a href="/blogs" className="hover:text-gray-300 transition" onClick={toggleMenu}>Blogs</a></li>
          <li><a href="/about-us" className="hover:text-gray-300 transition" onClick={toggleMenu}>About Us</a></li>
          <li><a href="/contact-us" className="hover:text-gray-300 transition" onClick={toggleMenu}>Contact Us</a></li>

          <li className="mt-6">
            <a href="/login" target="_blank" className="hover:text-gray-300 transition" onClick={toggleMenu}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-200">
                Login
              </button>
            </a>
          </li>
        </ul>
      </div>


    </div>
  );
};

export default Navbar;
