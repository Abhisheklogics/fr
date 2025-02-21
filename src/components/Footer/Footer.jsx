import React ,{useEffect}from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
const Footer = () => {
    useEffect(()=>{
        Aos.init({duration:1200})
      })
  return (
    <footer  data-aos="fade-right" className="xs:bg-green-600   xs:ml-1 xs:text-black  xs:mt-20 xs:w-full
    xl:bg-green-600 text-black xl:mt-[10px]">
      <div className="xs:max-w-7xl xs:mx-auto xs:px-2 py-8 xs:flex xs:flex-wrap
      max-w-7xl mx-auto px-4 py-8 flex flex-wrap justify-between">
        {/* Logo or Brand */}
        <div className="xs:mb-4
        mb-4">
          <h1 className="xs:text-2xl xs:font-bold
          text-2xl font-bold">Your Logo</h1>
          <p className="xs:text-sm xs:mt-2
          text-sm mt-2">© 2024 Your Company. </p>
        </div>

        {/* Navigation Links */}
        <nav className="xs:flex xs:flex-wrap  xs:justify-bitween xs:ml-4 xs:mt-4
        flex flex-wrap justify-center sm:justify-start">
          <NavLink to="/" className="xs:text-sm xs:text-black  xs:hover:text-white xs:px-4 xs:py-2
          text-sm text-black  hover:text-white px-4 py-2">
            Home
          </NavLink>
          <NavLink to="/about" className="xs:text-sm xs:text-black xs:hover:text-white xs:px-4 xs:py-2
          text-sm text-black hover:text-white px-4 py-2">
            About
          </NavLink>
          <NavLink to="/services" className="xs:text-sm xs:text-black xs:hover:text-white xs:px-4 xs:py-2
          text-sm text-black hover:text-white px-4 py-2">
            Services
          </NavLink>
          <NavLink to="/contact" className="xs:text-sm xs:text-black xs:hover:text-white xs:px-4 xs:py-2 
          
          text-sm text-black hover:text-white px-4 py-2">
            Contact
          </NavLink>
        </nav>

        {/* Contact Information */}
        <div className="xs:mt-[-140px] xs:sm:mt-0  xs:ml-[300px]
        mt-4 sm:mt-0">
          <p className="xs:text-sm xs:text-gray-300 xs:mb-2
         
         text-sm text-gray-300 mb-2">Contact Us</p>
          <p className="xs:text-sm xs:text-gray-300 xs:mb-2
          text-sm text-gray-300
          ">123 Street, City,</p>
          <p className="xs:text-sm xs:text-gray-300
          text-sm text-gray-300"></p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="xs:bg-green-900
      bg-green-900">
        <div className="xs:max-w-7xl xs:mx-auto xs:px-4 xs:py-2 xs:text-sm xs:text-gray-300
        max-w-7xl mx-auto px-4 py-2 text-sm text-gray-300">
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
