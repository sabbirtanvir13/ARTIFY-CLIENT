// // import { Link } from "react-router";
// // import { FaHome, FaPlusCircle, FaEnvelope } from "react-icons/fa";
// // import useRole from "../hooks/useRole";

// // const Sidebar = () => {
// //   const [role, roleLoading] = useRole();

// //   if (roleLoading) return <p className="p-4">Loading...</p>;

// //   return (
// //     <div className="w-64 min-h-screen bg-gray-900 text-white p-6">
// //       <h1 className="text-2xl font-bold mb-6">Artify</h1>

// //       {role === "admin" && (
// //         <>
// //           <Link to="/dashboard" className="block mb-3">Dashboard</Link>
// //           <Link to="/dashboard/addart" className="block mb-3">Add Artwork</Link>
// //           <Link to="/dashboard/gallery" className="block">Gallery</Link>
// //         </>
// //       )}

// //       {role === "user" && (
// //         <>
// //           <Link to="/dashboard" className="block mb-3">Dashboard</Link>
// //           <Link to="/dashboard/favorites" className="block">Favorites</Link>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default Sidebar;


// import { Link } from "react-router";
// import useRole from "../hooks/useRole";
// import Logo from '../assets/Logo.png'
// import Loading from "../pages/Loading";

// import {
//   AiOutlineHome,
//   AiOutlinePlusCircle,
//   AiOutlineHeart,
//   AiOutlineUser,
//   AiOutlineLike,
// } from "react-icons/ai";

// const Sidebar = () => {
//   const [role, roleLoading] = useRole();

//   if (roleLoading) return <p className="p-4 mt-auto"><Loading></Loading></p>;

//   return (
//     <div className="w-64 min-h-screen bg-gray-900 text-white p-6">
//       <h1 className="text-2xl font-bold mb-6">Artify</h1>

//   <Link to="/"><img src={Logo} alt="Artify Logo" className="w-16 rounded-full h-16 mb-4" /></Link>

//     <br />



//       {role === "admin" && (
//         <>
//           <Link to="/dashboard/DashboardOverview" className="block mb-3"><AiOutlineHome></AiOutlineHome>  Dashboard Home</Link>
//           <Link to="/dashboard/addart" className="block mb-3"><AiOutlinePlusCircle></AiOutlinePlusCircle> Add Artwork</Link>
//           <Link to="/dashboard/gallery" className="block"> Gallery</Link>
//         </>
//       )}

//       {role === "user" && (
//         <>
//           <Link to="/dashboard/my-likes" className="block mb-3"><AiOutlineLike></AiOutlineLike> My-Likes</Link>
//           <Link to="/dashboard/favorites" className="block"><AiOutlineHeart></AiOutlineHeart> Favorites</Link>
//         </>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

import { Link } from "react-router";
import useRole from "../hooks/useRole";
import Logo from '../assets/Logo.png';
import Loading from "../pages/Loading";

import {
  AiOutlineHome,
  AiOutlinePlusCircle,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineLike,
} from "react-icons/ai";

import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Sidebar = () => {
  const [role, roleLoading] = useRole();

  if (roleLoading) return <div className="p-4"><Loading /></div>;

  const linkStyle = "flex items-center gap-3 mb-3 p-3 rounded-lg hover:bg-lime-500 hover:text-white transition-colors duration-200 font-medium";

  return (
    <div className="w-72 min-h-screen bg-gray-800 text-white flex flex-col justify-between shadow-xl">
      
      {/* Top Section */}
      <div className="p-6">
        <Link to="/" className="flex justify-center mb-8">
          <img src={Logo} alt="Artify Logo" className="w-20 h-20 rounded-full border-2 border-lime-500 shadow-lg" />
        </Link>

        {/* Admin Links */}
        {role === "admin" && (
          <div className="space-y-2">
            <Link to="/dashboard/DashboardOverview" className={linkStyle}>
              <AiOutlineHome size={22} /> Dashboard Home
            </Link>
            <Link to="/dashboard/addart" className={linkStyle}>
              <AiOutlinePlusCircle size={22} /> Add Artwork
            </Link>
            <Link to="/dashboard/gallery" className={linkStyle}>
              <AiOutlineUser size={22} /> My Gallery
            </Link>
          </div>
        )}

        {/* User Links */}
        {role === "user" && (
          <div className="space-y-2">
            <Link to="/dashboard/my-likes" className={linkStyle}>
              <AiOutlineLike size={22} /> My Likes
            </Link>
            <Link to="/dashboard/favorites" className={linkStyle}>
              <AiOutlineHeart size={22} /> Favorites
            </Link>
           
          </div>
        )}
      </div>

      {/* Bottom Social Links */}
      <div className="p-6 border-t border-gray-700">
        <h3 className="text-gray-400 text-sm mb-3 uppercase tracking-wider">Follow Us</h3>
        <div className="flex flex-col gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-pink-500 transition-colors duration-200"
          >
            <FaInstagram size={20} /> Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition-colors duration-200"
          >
            <FaFacebookF size={20} /> Facebook
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-blue-700 transition-colors duration-200"
          >
            <FaLinkedinIn size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
