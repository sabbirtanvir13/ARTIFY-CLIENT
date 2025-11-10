// import React from 'react';
// import { useLoaderData } from 'react-router';

// const ArtworkDetail = () => {
//     const data =useLoaderData()
//     const artify=data.result
//     console.log(artify)
//     return (
//       <section className="relative max-w-6xl mx-auto my-16 px-6 md:px-10">
//       {/* 🔮 Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 blur-2xl opacity-50 -z-10"></div>

//       <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl overflow-hidden border border-white/40 transition-all duration-500 hover:shadow-purple-300/50">
//         {/* 🎨 Artwork Info */}
//         <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12">
//           <div className="relative group">
//             <img
//               src={`art.image`}
//               alt={`art.title`}
//               className="rounded-2xl shadow-md w-full h-[420px] object-cover transform transition duration-700 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition"></div>
//           </div>

//           <div className="flex flex-col justify-center">
//             <h2 className="text-4xl font-extrabold text-gray-800 mb-3 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
//               {`art.title`}
//             </h2>

//             <p className="text-gray-700 mb-2">
//               <span className="font-semibold text-indigo-600">Artist:</span>{" "}
//               {`art.artistName`}
//             </p>

//             <p className="text-gray-700 mb-2">
//               <span className="font-semibold text-indigo-600">Medium:</span>{" "}
//               {`art.medium`}
//             </p>

//             <p className="text-gray-700 mb-6 leading-relaxed">
//               {`art.description`}
//             </p>

//             {/* ❤️ Like & Favorite Buttons */}
//             <div className="flex gap-4 mt-3">
//               <button
//                 onClick={`handleLike`}
//                 className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
//               >
//                 ❤️ Like ({`likes`})
//               </button>

//               {/* <button
//                 onClick={handleFavorite}
//                 className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
//                   isFavorite
//                     ? "bg-yellow-400 text-white shadow-md hover:shadow-lg"
//                     : "bg-gray-200 text-gray-700 hover:bg-yellow-300"
//                 }`}
//               >
//                 ⭐ {`isFavorite ? "Favorited" : "Add to Favorites"`}
//               </button> */}
//             </div>
//           </div>
//         </div>

//         {/* 👩‍🎨 Artist Info */}
//         <div className="border-t border-gray-200 px-8 md:px-12 py-8 flex flex-col sm:flex-row items-center gap-6 bg-white/50 rounded-b-3xl">
//           <img
//             src={`art.artistPhoto || "https://via.placeholder.com/100"`}
//             alt={`art.artistName`}
//             className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
//           />
//           <div>
//             <h4 className="text-xl font-bold text-gray-800">
//               {`art.artistName`}
//             </h4>
//             <p className="text-gray-500">
//               Total Artworks: {`art.totalArtworks || 0`}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//     );
// };

// export default ArtworkDetail;



// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router';

// const ArtworkDetail = () => {
//   // 🔹 Load artwork from route loader
//   const data = useLoaderData();
//   console.log("Loader Data:", data);
// const art = data.find(item => item._id === params.id); // params.id URL থেকে নেওয়া


//   // 🔹 Local states
//   const [likes, setLikes] = useState(art?.likes || 0);
//   const [isFavorite, setIsFavorite] = useState(false);

//   // 🔹 Handlers
//   const handleLike = () =>{
//      setLikes(likes + 1);
//   } 
//   const handleFavorite = () =>{ 
//     setIsFavorite(!isFavorite);
// }

 
//   if (!art || !art.title) {
//     return (
//       <div className="text-center py-20 text-xl text-gray-500 animate-pulse">
//         Loading artwork details...
//       </div>
//     );
//   }

//   return (
//     <section className="relative max-w-6xl mx-auto my-16 px-6 md:px-10">
//       {/* 🔮 Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 blur-2xl opacity-50 -z-10"></div>

//       <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl overflow-hidden border border-white/40 transition-all duration-500 hover:shadow-purple-300/50">
//         {/* 🎨 Artwork Info */}
//         <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12">
//           <div className="relative group">
//             <img
//               src={art.image}
//               alt={art.title}
//               className="rounded-2xl shadow-md w-full h-[420px] object-cover transform transition duration-700 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition"></div>
//           </div>

//           <div className="flex flex-col justify-center">
//             <h2 className="text-4xl font-extrabold text-gray-800 mb-3 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
//               {art.title}
//             </h2>

//             <p className="text-gray-700 mb-2">
//               <span className="font-semibold text-indigo-600">Artist:</span> {art.artistName}
//             </p>

//             <p className="text-gray-700 mb-2">
//               <span className="font-semibold text-indigo-600">Medium:</span> {art.medium}
//             </p>

//             <p className="text-gray-700 mb-6 leading-relaxed">{art.description}</p>

//             {/* ❤️ Like & Favorite Buttons */}
//             <div className="flex gap-4 mt-3">
//               <button
//                 onClick={handleLike}
//                 className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
//               >
//                 ❤️ Like ({likes})
//               </button>

//               <button
//                 onClick={handleFavorite}
//                 className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
//                   isFavorite
//                     ? 'bg-yellow-400 text-white shadow-md hover:shadow-lg'
//                     : 'bg-gray-200 text-gray-700 hover:bg-yellow-300'
//                 }`}
//               >
//                 ⭐ {isFavorite ? 'Favorited' : 'Add to Favorites'}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 👩‍🎨 Artist Info */}
//         <div className="border-t border-gray-200 px-8 md:px-12 py-8 flex flex-col sm:flex-row items-center gap-6 bg-white/50 rounded-b-3xl">
//           <img
//             src={art.artistPhoto || 'https://via.placeholder.com/100'}
//             alt={art.artistName}
//             className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
//           />
//           <div>
//             <h4 className="text-xl font-bold text-gray-800">{art.artistName}</h4>
//             <p className="text-gray-500">Total Artworks: {art.totalArtworks || 0}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ArtworkDetail;
import React from "react";
import { useLoaderData } from "react-router";

const ArtworkDetail = () => {
  const data = useLoaderData();
  const art = data.result;

  return (
    <section className="max-w-6xl mx-auto my-16 px-6 md:px-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Artwork Image */}
        <img
          src={art.image}
          alt={art.title}
          className="rounded-2xl shadow-md w-full h-[420px] object-cover"
        />

        {/* Artwork Details */}
        <div>
          <h2 className="text-4xl font-extrabold mb-3">{art.title}</h2>
          <p><strong>Artist:</strong> {art.artistName}</p>
          <p><strong>Medium:</strong> {art.medium}</p>
          <p className="mt-4">{art.description}</p>

           <div className="flex gap-4 mt-6">
            <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition" >
               Like  </button>

            <button className='px-5 py-2 rounded-full font-semibold transition '
            >
             Favorited
            </button>
          </div>

        </div>
      </div>

      {/* Artist Info */}
      <div className="mt-12 flex items-center gap-6 border-t pt-6">
        <img
          src={art.artistPhoto || "https://via.placeholder.com/80"}
          alt={art.artistName}
          className="w-20 h-20 rounded-full object-cover border"
        />
        <div>
          <h4 className="font-bold">{art.artistName}</h4>
          <p>Total Artworks: {art.totalArtworks || 0}</p>
        </div>
      </div>
    </section>
  );
};

export default ArtworkDetail;
