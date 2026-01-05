// // import React from 'react';
// // import { Outlet } from 'react-router';
// // import Sidebar from '../components/Sidebar';

// // const DashboardLayout = () => {
// //     return (
// //         <div className="flex">
// //     <Sidebar />
// //     <div className="ml-64 flex-1 p-6">
// //       <Outlet />
// //     </div>
// //   </div>
// //     );
// // };

// // export default DashboardLayout;

// import React, { useState, useContext } from "react";
// import { Outlet, NavLink, useNavigate } from "react-router";
// import { FaBars, FaUser, FaSignOutAlt } from "react-icons/fa";
// import Sidebar from "../components/Sidebar";
// import { AuthContext } from "../contexts/AuthContext";
// import Swal from "sweetalert2";

// const DashboardLayout = () => {
//   const { User, signOutUser } = useContext(AuthContext);
//   const [profileDropdown, setProfileDropdown] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     signOutUser().then(() => {
//       localStorage.removeItem("token");
//       Swal.fire({
//         icon: "success",
//         title: "Logged out",
//         timer: 1500,
//         showConfirmButton: false,
//       });
//       navigate("/");
//     });
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* Main content */}
//       <div className="flex-1 flex flex-col ml-64">
//         {/* Top Navbar */}
//         <header className="flex justify-between items-center bg-white shadow px-6 py-4 sticky top-0 z-10">
//           <div className="flex items-center gap-4">

          


//             <button
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//               className="text-gray-700 md:hidden focus:outline-none"
//             >
//               <FaBars size={20} />
//             </button>
//             <h1 className="text-xl font-bold">Dashboard</h1>
//           </div>

//           {/* Profile dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setProfileDropdown(!profileDropdown)}
//               className="flex items-center gap-2 border px-3 py-1 rounded-full hover:bg-gray-200 transition"
//             >
//               <img
//                 src={User?.photoURL || "https://i.ibb.co/3rYVZ7H/default-user.png"}
//                 className="w-8 h-8 rounded-full border"
//                 alt="user"
//               />
//               <span className="hidden md:inline">{User?.displayName || "User"}</span>
//             </button>

//             {profileDropdown && (
//               <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded border border-gray-200 overflow-hidden">
//                 <NavLink
//                   to="/dashboard/profile"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={() => setProfileDropdown(false)}
//                 >
//                   Profile
//                 </NavLink>
//                 <NavLink
//                   to="/dashboard/DashboardOverview"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={() => setProfileDropdown(false)}
//                 >
//                   Dashboard Home
//                 </NavLink>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </header>

//         {/* Page content */}
//         <main className="flex-1 overflow-auto p-6">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;


import React, { useState, useContext, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import { FaBars } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const DashboardLayout = () => {
  const { User, signOutUser } = useContext(AuthContext);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();

  // Dark/light theme effect
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    signOutUser().then(() => {
      localStorage.removeItem("token");
      Swal.fire({
        icon: "success",
        title: "Logged out",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/");
    });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex justify-between items-center shadow px-6 py-4 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            {/* Toggle sidebar on mobile */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-700 md:hidden focus:outline-none"
            >
              <FaBars size={20} />
            </button>
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>

          {/* Navbar right */}
          <div className="flex items-center gap-4">
            {/* Dark/Light toggle */}
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              />
              {/* Sun icon */}
              <svg
                className="swap-on w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64 17.66L4.22 19.08 5.64 20.5 7.06 19.08 5.64 17.66zm0-11.32L7.06 4.92 5.64 3.5 4.22 4.92 5.64 6.34zm11.32 11.32L19.08 19.08 20.5 17.66 19.08 16.24 16.96 16.24zm0-11.32L19.08 4.92 20.5 3.5 19.08 2.08 16.96 2.08zM12 8a4 4 0 100 8 4 4 0 000-8zm0-6h-1v3h1V2zm0 16h-1v3h1v-3zm10-7h-3v1h3v-1zm-16 0H2v1h3v-1z" />
              </svg>
              {/* Moon icon */}
              <svg
                className="swap-off w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.75 15.57a9 9 0 01-11.32-11.32 9 9 0 1011.32 11.32z" />
              </svg>
            </label>

            {/* Profile dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdown(!profileDropdown)}
                className="flex items-center gap-2 border px-3 py-1 rounded-full hover:bg-gray-200 transition"
              >
                <img
                  src={User?.photoURL || "https://i.ibb.co/3rYVZ7H/default-user.png"}
                  className="w-8 h-8 rounded-full border"
                  alt="user"
                />
                <span className="hidden md:inline">{User?.displayName || "User"}</span>
              </button>

              {profileDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded border border-gray-200 overflow-hidden">
                  <NavLink
                    to="/dashboard/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setProfileDropdown(false)}
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to="/dashboard/DashboardOverview"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setProfileDropdown(false)}
                  >
                    Dashboard Home
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto  p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
