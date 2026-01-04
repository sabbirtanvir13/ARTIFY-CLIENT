// // import React, { useEffect, useState, useContext } from "react";
// // import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// // import { AuthContext } from "../contexts/AuthContext";

// const UserDashboardOverview = () => {
// //   const { User, token } = useContext(AuthContext);
// //   const [stats, setStats] = useState({
// //     artworks: 0,
// //     favorites: 0,
// //     likes: 0,
// //     recentArtworks: [],
// //   });
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     if (!token) return;

// //     const fetchStats = async () => {
// //       try {
// //         const res = await fetch("http://localhost:3000/user-stats", {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });

// //         if (!res.ok) {
// //           throw new Error(`HTTP error! status: ${res.status}`);
// //         }

// //         const data = await res.json();
// //         setStats({
// //           artworks: data.artworks || 0,
// //           favorites: data.favorites || 0,
// //           likes: data.likes || 0,
// //           recentArtworks: data.recentArtworks || [],
// //         });
// //         setError(null);
// //       } catch (err) {
// //         console.error("Failed to fetch user stats:", err);
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchStats();
// //   }, [token]);

// //   if (loading) return <p>Loading user stats...</p>;
// //   if (error) return <p className="text-red-500">Error: {error}</p>;

// //   const chartData = [
// //     { name: "Artworks", value: stats.artworks },
// //     { name: "Favorites", value: stats.favorites },
// //     { name: "Likes", value: stats.likes },
// //   ];

// //   return (
// //     <div className="space-y-8">

// //       {/* ===== Cards ===== */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         <div className="bg-white shadow rounded-xl p-6">
// //           <h3 className="text-gray-500">My Artworks</h3>
// //           <p className="text-3xl font-bold">{stats.artworks}</p>
// //         </div>

// //         <div className="bg-white shadow rounded-xl p-6">
// //           <h3 className="text-gray-500">My Favorites</h3>
// //           <p className="text-3xl font-bold">{stats.favorites}</p>
// //         </div>

// //         <div className="bg-white shadow rounded-xl p-6">
// //           <h3 className="text-gray-500">Total Likes</h3>
// //           <p className="text-3xl font-bold">{stats.likes}</p>
// //         </div>
// //       </div>

// //       {/* ===== Bar Chart ===== */}
// //       <div className="bg-white p-6 rounded-xl shadow">
// //         <h2 className="text-xl font-semibold mb-4">My Activity</h2>
// //         <ResponsiveContainer width="100%" height={300}>
// //           <BarChart data={chartData}>
// //             <XAxis dataKey="name" />
// //             <YAxis />
// //             <Tooltip />
// //             <Bar dataKey="value" fill="#6366F1" radius={[8, 8, 0, 0]} />
// //           </BarChart>
// //         </ResponsiveContainer>
// //       </div>

// //       {/* ===== Recent Artworks Table ===== */}
// //       <div className="bg-white shadow rounded-xl p-6">
// //         <h2 className="text-xl font-semibold mb-4">Recent Artworks</h2>
// //         {stats.recentArtworks.length === 0 ? (
// //           <p>No recent artworks found.</p>
// //         ) : (
// //           <table className="w-full border">
// //             <thead className="bg-gray-100">
// //               <tr>
// //                 <th className="p-3 border">Title</th>
// //                 <th className="p-3 border">Likes</th>
// //                 <th className="p-3 border">Created At</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {stats.recentArtworks.map((art, i) => (
// //                 <tr key={i} className="text-center hover:bg-gray-50">
// //                   <td className="p-3 border">{art.title}</td>
// //                   <td className="p-3 border">{art.likes || 0}</td>
// //                   <td className="p-3 border">{new Date(art.createdAt).toLocaleDateString()}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         )}
// //       </div>

// //     </div>
// //   );
// // };

// export default UserDashboardOverview;
import React from 'react';

const UserDashboardOverview = () => {
    return (
        <div>
            
        </div>
    );
};

export default UserDashboardOverview;