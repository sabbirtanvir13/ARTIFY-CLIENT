// import { useEffect, useState } from "react";

// export default function BlogSection() {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_API_URL}/blogs`)
//       .then(res => res.json())
//       .then(data => setBlogs(data));
//   }, []);

//   return (
//     <section className="py-20 ">
//       <h2 className="text-4xl font-bold text-center mb-10 text-indigo-400">Blog</h2>
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">
//         {blogs.map((b, i) => (
//           <div key={i} className="p-6 rounded-xl shadow-lg bg-white ">
//             <h3 className="font-bold text-xl text-black">{b.title}</h3>
//             <p className="text-gray-700 text-black mt-2">{b.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from "react";
import { Link } from "react-router";

const FeaturedArtworks = ({ arts, loading }) => {
  if (loading) return <p className="text-center py-10">Loading artworks...</p>;
  if (!arts || arts.length === 0) return <p className="text-center py-10">No artworks found</p>;

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-400">Featured Artworks</h2>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {arts.map((art) => (
          <div
            key={art._id}
            className="bg-white rounded-3xl overflow-hidden shadow hover:shadow transition transform hover:-translate-y-2 duration-300"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-1">{art.title}</h3>
              <p className="text-gray-500 text-sm mb-2">By {art.artistName}</p>
              <span className="inline-block bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full mb-4 font-medium">
                {art.category}
              </span>
              <Link
                to={`/artDetail/${art._id}`}
                className="md:ml-[70px] bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block text-center"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtworks;
