// import { Link } from "react-router";
// import { FaHome, FaPlusCircle, FaEnvelope } from "react-icons/fa";
// import useRole from "../hooks/useRole";

// const Sidebar = () => {
//   const [role, roleLoading] = useRole();

//   if (roleLoading) return <p className="p-4">Loading...</p>;

//   return (
//     <div className="w-64 min-h-screen bg-gray-900 text-white p-6">
//       <h1 className="text-2xl font-bold mb-6">Artify</h1>

//       {role === "admin" && (
//         <>
//           <Link to="/dashboard" className="block mb-3">Dashboard</Link>
//           <Link to="/dashboard/addart" className="block mb-3">Add Artwork</Link>
//           <Link to="/dashboard/gallery" className="block">Gallery</Link>
//         </>
//       )}

//       {role === "user" && (
//         <>
//           <Link to="/dashboard" className="block mb-3">Dashboard</Link>
//           <Link to="/dashboard/favorites" className="block">Favorites</Link>
//         </>
//       )}
//     </div>
//   );
// };

// export default Sidebar;


import { Link } from "react-router";
import useRole from "../hooks/useRole";

const Sidebar = () => {
  const [role, roleLoading] = useRole();

  if (roleLoading) return <p className="p-4">Loading...</p>;

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Artify</h1>

      {role === "admin" && (
        <>
          <Link to="/dashboard" className="block mb-3">Dashboard</Link>
          <Link to="/dashboard/addart" className="block mb-3">Add Artwork</Link>
          <Link to="/dashboard/gallery" className="block">Gallery</Link>
        </>
      )}

      {role === "user" && (
        <>
          <Link to="/dashboard" className="block mb-3">Dashboard</Link>
          <Link to="/dashboard/favorites" className="block">Favorites</Link>
        </>
      )}
    </div>
  );
};

export default Sidebar;

