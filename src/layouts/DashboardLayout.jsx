// import React from 'react';
// import { Outlet } from 'react-router';
// import Sidebar from '../components/Sidebar';

// const DashboardLayout = () => {
//     return (
//         <div className="flex">
//     <Sidebar />
//     <div className="ml-64 flex-1 p-6">
//       <Outlet />
//     </div>
//   </div>
//     );
// };

// export default DashboardLayout;

import React, { useState, useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import { FaBars, FaUser, FaSignOutAlt } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const DashboardLayout = () => {
  const { User, signOutUser } = useContext(AuthContext);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

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
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Top Navbar */}
        <header className="flex justify-between items-center bg-white shadow px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-700 md:hidden focus:outline-none"
            >
              <FaBars size={20} />
            </button>
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>

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
                  to="/dashboard"
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
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
