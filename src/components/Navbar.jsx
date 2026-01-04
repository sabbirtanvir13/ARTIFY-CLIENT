

// import React, { useEffect, useState, useContext } from 'react';
// import { Link, NavLink } from 'react-router';
// import { AuthContext } from '../contexts/AuthContext';

// const Navbar = () => {
//   const { User } = useContext(AuthContext);
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const handleTheme = (checked) => setTheme(checked ? 'dark' : 'light');


//   const links = (
//     <>
//       <NavLink className='mr-3 hover:text-pink-400' to='/'><li>Home</li></NavLink>
//       <NavLink className='mr-3 hover:text-pink-400' to='/exploreartworks'><li>Explore Artworks</li></NavLink>
      
//       {User && (
//         <>
//           <NavLink className='mr-3 hover:text-pink-400' to='/addart'><li>Add Artwork</li></NavLink>
//           <NavLink className='mr-3 hover:text-pink-400' to='/gallery'><li>My Gallery</li></NavLink>
//           <NavLink className='mr-3 hover:text-pink-400' to='/favorites'><li>My Favorites</li></NavLink>
//         </>
//       )}
//     </>
//   );

//   return (
//     <div className="navbar bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-gray-100 shadow-sm">
      
//       {/* Navbar start */}
//       <div className="navbar-start">
//         <Link className="btn btn-ghost text-xl font-bold" to="/">Artify</Link>

//         {/* Mobile dropdown */}
//         <div className="dropdown lg:hidden">
//           <div tabIndex={0} className="btn btn-ghost">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
//             {links}
//           </ul>
//         </div>
//       </div>

//       {/* Navbar center */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>

//       {/* Navbar end: Theme toggle & Auth buttons */}
//       <div className="navbar-end flex items-center gap-2">

//         {/* Theme toggle */}
//         <input
//           type="checkbox"
//           checked={theme === 'dark'}
//           onChange={(e) => handleTheme(e.target.checked)}
//           className="toggle mr-2"
//         />

//         {/* Dashboard button if logged in, otherwise Login/Register */}
//         {User ? (
//           <Link to="/dashboard">
//             <button className='btn btn-sm rounded-2xl text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500'>
//               Dashboard
//             </button>
//           </Link>
//         ) : (
//           <>
//             <NavLink
//               to="/auth/login"
//               className="btn rounded-2xl text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500"
//             >
//               Login
//             </NavLink>
//             <NavLink
//               to="/auth/register"
//               className="btn rounded-2xl text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500"
//             >
//               Register
//             </NavLink>
//           </>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { 
  FaHome, 
  FaPalette, 
  FaInfoCircle, 
  FaEnvelope, 
  FaTachometerAlt, 
  FaSignInAlt, 
  FaUserPlus 
} from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { User, } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => setTheme(checked ? "dark" : "light");

  const linkClass = "flex items-center gap-2 mr-3 hover:text-pink-300 transition";

  const links = (
    <>
      <NavLink to="/" className={linkClass}><FaHome /> Home</NavLink>
      <NavLink to="/exploreartworks" className={linkClass}><FaPalette /> Explore</NavLink>
      {User && (
        <>
          <NavLink to="/about" className={linkClass}><  FaInfoCircle/> About</NavLink>
          <NavLink to="/contact" className={linkClass}><  FaEnvelope /> Contact</NavLink>
       
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-gray-100 shadow-md">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-bold">🎨 Artify</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        <input type="checkbox" checked={theme === "dark"} onChange={(e) => handleTheme(e.target.checked)} className="toggle mr-2" />

        {User ? (
          <>
            <Link to="/dashboard">
              <button className="btn btn-sm flex items-center gap-2 rounded-2xl text-white bg-gradient-to-r from-indigo-500 to-purple-500">
                <FaTachometerAlt /> Dashboard
              </button>
            </Link>
           
          </>
        ) : (
          <>
            <NavLink to="/auth/login" className="btn btn-sm flex items-center gap-2 rounded-2xl text-white bg-gradient-to-r from-indigo-500 to-purple-500">
              <FaSignInAlt /> Login
            </NavLink>
            <NavLink to="/auth/register" className="btn btn-sm flex items-center gap-2 rounded-2xl text-white bg-gradient-to-r from-indigo-500 to-purple-500">
              <FaUserPlus /> Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
