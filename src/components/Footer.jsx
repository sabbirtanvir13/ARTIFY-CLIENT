// import React from 'react';

// const Footer = () => {
//     return (
//        <div className="bg-gray-900 text-white py-6">
//     <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      
//       {/* Website Name */}
//       <div className="mb-4 md:mb-0">
//         <h1 className="text-xl font-bold">Artify</h1>
//         <p>© 2025 Artify. All rights reserved.</p>
//       </div>

//       {/* Contact Info */}
//       <div className="mb-4 md:mb-0">
//         <p>Email: info@artify.com</p>
//         <p>Phone: +880 1234 567890</p>
//       </div>

//       {/* Social Links */}
//       <div className="flex space-x-4">
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
//       </div>

//     </div>
//   </div>
//     );
// };

// export default Footer;

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Artify</h2>
          <p className="text-gray-400">
            A creative platform to showcase and explore amazing artworks from talented artists worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul>
            <li className="my-1 hover:text-white cursor-pointer">Home</li>
            <li className="my-1 hover:text-white cursor-pointer">Explore Artworks</li>
            <li className="my-1 hover:text-white cursor-pointer">Add Artwork</li>
            <li className="my-1 hover:text-white cursor-pointer">My Gallery</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-gray-400">Email: support@artify.com</p>
          <p className="text-gray-400">Phone: +880 123 456 789</p>
          <div className="flex mt-3 space-x-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
        &copy; 2025 Artify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
