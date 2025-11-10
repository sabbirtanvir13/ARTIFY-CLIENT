import React from 'react';
import { useLoaderData } from 'react-router';

const ExploreArtworks = () => {
    const data =useLoaderData();
    console.log(data)
    return (
               
 <section className="py-16 ">
    
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
      Explore Artworks
        </h2>  
      </div>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((art) => (
          <div
            key={art._id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 duration-300"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {art.title}
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                By {art.artistName}
              </p>
         
                  <span className="inline-block bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full mb-4 font-medium">
                {art.category}
              </span>

              <button className=" md:ml-[70px] bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                View Details
              </button>
         
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default ExploreArtworks;