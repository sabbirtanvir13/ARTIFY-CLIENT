import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12">
      <div className="max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Artify</h2>
          <p className="text-sm leading-relaxed">
            Artify is a creative platform where artists showcase their artworks
            and art lovers explore, like, and collect inspiring creations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
            <li><Link to="/artworks" className="hover:text-indigo-400">Explore Artworks</Link></li>
            <li><Link to="/dashboard/add-artwork" className="hover:text-indigo-400">Add Artwork</Link></li>
            <li><Link to="/dashboard/my-gallery" className="hover:text-indigo-400">My Gallery</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/art-upload" className="hover:text-indigo-400">Artwork Upload</Link></li>
            <li><Link to="/services/favorites" className="hover:text-indigo-400">Favorites & Likes</Link></li>
            <li><Link to="/services/artist-profile" className="hover:text-indigo-400">Artist Profile</Link></li>
            <li><Link to="/services/community" className="hover:text-indigo-400">Creative Community</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>

          <div className="flex items-center gap-2 text-sm mb-2">
            <FaEnvelope className="text-indigo-400" />
            <span>support@artify.com</span>
          </div>

          <div className="flex items-center gap-2 text-sm mb-4">
            <FaPhoneAlt className="text-indigo-400" />
            <span>+880 1234 567 890</span>
          </div>

          <div className="flex gap-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-indigo-500 transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-indigo-500 transition">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-indigo-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-12 border-t border-slate-700 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Artify. All rights reserved.</p>

          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-indigo-400">Terms</Link>
            <Link to="/privacy" className="hover:text-indigo-400">Privacy</Link>
            <Link to="/about" className="hover:text-indigo-400">About</Link>
            <Link to="/help" className="hover:text-indigo-400">Help</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
